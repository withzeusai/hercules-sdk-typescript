// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource domains', () => {
  smokeCase('domains.list:single', { operation: 'list', path: '/v1/domains' }, 'list', async () => {
    const page = await client.domains.list();
  });
  smokeCase(
    'domains.checkAvailability:single',
    { operation: 'checkAvailability', path: '/v1/domains/check-availability' },
    'checkAvailability',
    async () => {
      const domain = await client.domains.checkAvailability({
        domains: [''],
      });
    },
  );
  smokeCase(
    'domains.search:required',
    { operation: 'search', path: '/v1/domains/search' },
    'search: only required params',
    async () => {
      const domain = await client.domains.search({
        keyword: 'x',
      });
    },
  );
  smokeCase(
    'domains.search:all',
    { operation: 'search', path: '/v1/domains/search' },
    'search: required and optional params',
    async () => {
      const domain = await client.domains.search({
        keyword: 'x',
        tld_filter: [''],
      });
    },
  );
});
