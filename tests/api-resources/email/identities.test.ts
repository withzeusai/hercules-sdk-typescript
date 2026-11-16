// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource identities', () => {
  smokeCase(
    'email.identities.create:single',
    { operation: 'create', path: '/v1/email/identities' },
    'create',
    async () => {
      const identity = await client.email.identities.create({
        type: 'email',
        value: 'user@example.com',
      });
    },
  );
  smokeCase(
    'email.identities.list:single',
    { operation: 'list', path: '/v1/email/identities' },
    'list',
    async () => {
      const page = await client.email.identities.list();
    },
  );
  smokeCase(
    'email.identities.get:single',
    { operation: 'get', path: '/v1/email/identities/{identity_id}' },
    'get',
    async () => {
      const identity = await client.email.identities.get('identityId');
    },
  );
  smokeCase(
    'email.identities.verify:single',
    { operation: 'verify', path: '/v1/email/identities/{identity_id}/verify' },
    'verify',
    async () => {
      const identity = await client.email.identities.verify('identityId', {
        resend: false,
      });
    },
  );
  smokeCase(
    'email.identities.delete:single',
    { operation: 'delete', path: '/v1/email/identities/{identity_id}' },
    'delete',
    async () => {
      await client.email.identities.delete('identityId');
    },
  );
});
