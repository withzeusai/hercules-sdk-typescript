// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource connectors', () => {
  smokeCase(
    'connectors.credentials:single',
    { operation: 'credentials', path: '/v1/connectors/{slug}/credentials' },
    'credentials',
    async () => {
      const connector = await client.connectors.credentials('slug', {
        connection_id: 'connectionId',
      });
    },
  );
  smokeCase(
    'connectors.request:required',
    { operation: 'request', path: '/v1/connectors/{slug}/request' },
    'request: only required params',
    async () => {
      const connector = await client.connectors.request('slug', {
        endpoint: 'x',
        method: 'GET',
        connection_id: 'x',
      });
    },
  );
  smokeCase(
    'connectors.request:all',
    { operation: 'request', path: '/v1/connectors/{slug}/request' },
    'request: required and optional params',
    async () => {
      const connector = await client.connectors.request('slug', {
        endpoint: 'x',
        method: 'GET',
        body: {},
        query: {},
        headers: {},
        connection_id: 'x',
      });
    },
  );
});
