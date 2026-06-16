const fs = require('fs');
const raw = fs.readFileSync('.attw.json', 'utf-8').trim();
if (!raw) {
  // attw exited non-zero and wrote nothing (the `|| true` in scripts/lint swallows its
  // crash), so there is no report to parse. Surface that instead of a cryptic JSON error.
  fs.unlinkSync('.attw.json');
  process.stderr.write('attw produced no output; it likely crashed. Re-run `attw --pack dist` to see why.\n');
  process.exitCode = 1;
  return;
}
const problems = Object.values(JSON.parse(raw).problems)
  .flat()
  .filter(
    (problem) =>
      !(
        // This is intentional, if the user specifies .mjs they get ESM.
        (
          (problem.kind === 'CJSResolvesToESM' && problem.entrypoint.endsWith('.mjs')) ||
          // This is intentional for backwards compat reasons.
          (problem.kind === 'MissingExportEquals' && problem.implementationFileName.endsWith('/index.js')) ||
          // this is intentional, we deliberately attempt to import types that may not exist from parent node_modules
          // folders to better support various runtimes without triggering automatic type acquisition.
          (problem.kind === 'InternalResolutionError' && problem.moduleSpecifier.includes('node_modules'))
        )
      ),
  );
fs.unlinkSync('.attw.json');
if (problems.length) {
  process.stdout.write('The types are wrong!\n' + JSON.stringify(problems, null, 2) + '\n');
  process.exitCode = 1;
} else {
  process.stdout.write('Types ok!\n');
}
