// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource files', () => {
  smokeCase(
    'files.list:required',
    { operation: 'list', path: '/v1/files' },
    'list: only required params',
    async () => {
      const page = await client.files.list();
    },
  );
  smokeCase(
    'files.list:all',
    { operation: 'list', path: '/v1/files' },
    'list: required and optional params',
    async () => {
      const page = await client.files.list({
        mime_type: 'mimeType',
        path: 'path',
        created: {
          gt: 0,
          gte: 0,
          lt: 0,
          lte: 0,
        },
        query: 'query',
      });
    },
  );
  smokeCase('files.get:single', { operation: 'get', path: '/v1/files/{file_id}' }, 'get', async () => {
    const file = await client.files.get('fileId');
  });
});
