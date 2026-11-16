// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource suppressions', () => {
  smokeCase(
    'email.suppressions.create:single',
    { operation: 'create', path: '/v1/email/suppressions' },
    'create',
    async () => {
      const suppression = await client.email.suppressions.create({
        email: 'user@example.com',
      });
    },
  );
  smokeCase(
    'email.suppressions.list:required',
    { operation: 'list', path: '/v1/email/suppressions' },
    'list: only required params',
    async () => {
      const suppression = await client.email.suppressions.list({
        limit: 100,
      });
    },
  );
  smokeCase(
    'email.suppressions.list:all',
    { operation: 'list', path: '/v1/email/suppressions' },
    'list: required and optional params',
    async () => {
      const suppression = await client.email.suppressions.list({
        limit: 100,
        cursor: 'cursor',
        origin: 'bounce',
      });
    },
  );
  smokeCase(
    'email.suppressions.get:single',
    { operation: 'get', path: '/v1/email/suppressions/{suppression}' },
    'get',
    async () => {
      const suppression = await client.email.suppressions.get('suppression');
    },
  );
  smokeCase(
    'email.suppressions.delete:single',
    { operation: 'delete', path: '/v1/email/suppressions/{suppression}' },
    'delete',
    async () => {
      const suppression = await client.email.suppressions.delete('suppression');
    },
  );
  smokeCase(
    'email.suppressions.batchAdd:single',
    { operation: 'batchAdd', path: '/v1/email/suppressions/batch/add' },
    'batchAdd',
    async () => {
      const suppression = await client.email.suppressions.batchAdd({
        emails: ['user@example.com'],
      });
    },
  );
  smokeCase(
    'email.suppressions.batchRemove:required',
    { operation: 'batchRemove', path: '/v1/email/suppressions/batch/remove' },
    'batchRemove: only required params',
    async () => {
      const suppression = await client.email.suppressions.batchRemove({});
    },
  );
  smokeCase(
    'email.suppressions.batchRemove:all',
    { operation: 'batchRemove', path: '/v1/email/suppressions/batch/remove' },
    'batchRemove: required and optional params',
    async () => {
      const suppression = await client.email.suppressions.batchRemove({
        emails: ['user@example.com'],
        ids: ['x'],
      });
    },
  );
});
