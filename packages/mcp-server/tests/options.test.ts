import { parseCLIOptions, parseQueryOptions, type McpOptions } from '../src/options';

// Mock process.argv
const mockArgv = (args: string[]) => {
  const originalArgv = process.argv;
  process.argv = ['node', 'test.js', ...args];
  return () => {
    process.argv = originalArgv;
  };
};

describe('parseCLIOptions', () => {
  it('default parsing should be stdio', () => {
    const cleanup = mockArgv([]);

    const result = parseCLIOptions();

    expect(result.transport).toBe('stdio');

    cleanup();
  });

  it('using http transport with a port', () => {
    const cleanup = mockArgv(['--transport=http', '--port=2222']);

    const result = parseCLIOptions();

    expect(result.transport).toBe('http');
    expect(result.port).toBe(2222);
    cleanup();
  });
});

describe('parseQueryOptions', () => {
  const defaults: McpOptions = {
    includeCodeTool: false,
    includeDocsTools: false,
    codeExecutionMode: 'stainless-sandbox',
    docsSearchMode: 'local',
    docsDir: './docs',
  };

  it.each([
    { query: '', code: false, docs: false },
    { query: 'tools=code', code: true, docs: false },
    { query: 'tools=code&tools=docs', code: true, docs: true },
    { query: 'tools[]=code&tools[]=docs', code: true, docs: true },
    { query: 'tools=code&tools=docs&no_tools=code', code: false, docs: true },
    { query: 'tools[]=code&tools[]=docs&no_tools[]=docs', code: true, docs: false },
    { query: { tools: ['code', 'docs'], no_tools: ['docs'] }, code: true, docs: false },
  ])('parses $query', ({ query, code, docs }) => {
    expect(parseQueryOptions(defaults, query)).toEqual({
      ...defaults,
      includeCodeTool: code,
      includeDocsTools: docs,
    });
  });
});
