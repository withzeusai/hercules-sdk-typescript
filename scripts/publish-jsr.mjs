import { cpSync, existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';

/** Pinned so a new jsr CLI release cannot change how the package is checked or published. */
const JSR_CLI = 'jsr@0.14.3';

/** The checkout this script lives in, which holds `jsr.json`. */
const toolingRoot = fileURLToPath(new URL('..', import.meta.url));

/**
 * Reads the JSR identity from this checkout's `jsr.json` and the version from the published
 * package's `package.json`, so the version release-please bumps for npm is the one JSR receives
 * and `jsr.json` never needs bumping. Reading `jsr.json` from here rather than from the package
 * lets a release tag cut before JSR publishing existed still be published.
 */
export const readJsrConfig = (packageRoot) => {
  const jsr = JSON.parse(readFileSync(join(toolingRoot, 'jsr.json'), 'utf8'));
  const { version } = JSON.parse(readFileSync(join(packageRoot, 'package.json'), 'utf8'));
  if (typeof jsr.name !== 'string' || !jsr.name.startsWith('@')) {
    throw new Error('Missing scoped name in jsr.json');
  }
  if (typeof version !== 'string' || version.length === 0) throw new Error('Missing version in package.json');
  return { ...jsr, version };
};

/** True when JSR already serves this exact version, so a re-run never fails on a duplicate. */
export const isPublished = async ({ name, version }) => {
  const [scope, pkg] = name.slice(1).split('/');
  const res = await fetch(`https://jsr.io/@${scope}/${pkg}/meta.json`);
  if (res.status === 404) return false;
  if (!res.ok) throw new Error(`Could not read JSR metadata for ${name}: HTTP ${res.status}`);
  const meta = await res.json();
  return Object.hasOwn(meta.versions ?? {}, version);
};

/**
 * Lays the package out the way it has always been published to JSR: the TypeScript sources at
 * the package root next to `jsr.json`. The staging directory sits outside the repository so no
 * `package.json` puts Deno into npm-compat mode and the jsr CLI has no git tree to call dirty.
 */
export const stagePackage = (packageRoot, config) => {
  const dir = mkdtempSync(join(tmpdir(), 'jsr-'));
  cpSync(join(packageRoot, 'src'), dir, { recursive: true });
  for (const file of ['README.md', 'LICENSE', 'CHANGELOG.md']) {
    if (existsSync(join(packageRoot, file))) cpSync(join(packageRoot, file), join(dir, file));
  }
  writeFileSync(join(dir, 'jsr.json'), `${JSON.stringify(config, null, 2)}\n`);
  return dir;
};

/**
 * Publishes the package at `packageRoot` to JSR once; `dryRun` runs every check without uploading.
 */
export const publishJsr = async ({ packageRoot = toolingRoot, dryRun = false } = {}) => {
  const config = readJsrConfig(packageRoot);
  const spec = `${config.name}@${config.version}`;
  if (!dryRun && (await isPublished(config))) {
    console.log(`${spec} already published to JSR, skipping`);
    return;
  }

  const dir = stagePackage(packageRoot, config);
  try {
    console.log(dryRun ? `Checking ${spec} for JSR` : `Publishing ${spec} to JSR`);
    // The sources use Node-style specifiers (extensionless, or `.js` for a `.ts` file), which
    // sloppy imports rewrites at publish time. `--no-check` skips Deno's type-check of
    // `internal/types.ts`, whose optional `node_modules` type imports only resolve for Node users;
    // the slow-types check of the public API still runs. These are the flags the jsr CLI adds
    // itself when it finds a package.json, which the staging directory deliberately lacks.
    const args = ['--yes', JSR_CLI, 'publish', '--no-check', '--unstable-sloppy-imports'];
    if (dryRun) args.push('--dry-run');
    // Authenticates through GitHub Actions OIDC (the JSR package is linked to this repository),
    // or through JSR_TOKEN when set, e.g. for a publish from outside Actions.
    if (process.env.JSR_TOKEN) args.push(`--token=${process.env.JSR_TOKEN}`);
    const result = spawnSync('npx', args, { cwd: dir, stdio: 'inherit' });
    if (result.error) throw result.error;
    if (result.status !== 0) {
      throw new Error(`jsr publish failed with exit code ${result.status ?? 'unknown'}`);
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
};

/** Runs publication only when Node executes this file directly, keeping its helpers testable. */
const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  const { values } = parseArgs({ options: { root: { type: 'string' }, 'dry-run': { type: 'boolean' } } });
  await publishJsr({
    packageRoot: values.root ? resolve(values.root) : toolingRoot,
    dryRun: values['dry-run'] ?? false,
  });
}
