// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource entitlements', () => {
  smokeCase(
    'commerce.entitlements.list:required',
    { operation: 'list', path: '/v1/commerce/entitlements' },
    'list: only required params',
    async () => {
      const page = await client.commerce.entitlements.list();
    },
  );
  smokeCase(
    'commerce.entitlements.list:all',
    { operation: 'list', path: '/v1/commerce/entitlements' },
    'list: required and optional params',
    async () => {
      const page = await client.commerce.entitlements.list({
        customer_id: 'customerId',
        feature_id: 'featureId',
        status: 'active',
        grant_type: 'purchase',
      });
    },
  );
  smokeCase(
    'commerce.entitlements.get:required',
    { operation: 'get', path: '/v1/commerce/entitlements/{grant_id}' },
    'get: only required params',
    async () => {
      const entitlementGrant = await client.commerce.entitlements.get('grantId');
    },
  );
  smokeCase(
    'commerce.entitlements.get:all',
    { operation: 'get', path: '/v1/commerce/entitlements/{grant_id}' },
    'get: required and optional params',
    async () => {
      const entitlementGrant = await client.commerce.entitlements.get('grantId', {
        customer_id: 'cus_1234567890',
      });
    },
  );
  smokeCase(
    'commerce.entitlements.create:required',
    { operation: 'create', path: '/v1/commerce/entitlements' },
    'create: only required params',
    async () => {
      const entitlementGrant = await client.commerce.entitlements.create({
        customer_id: 'x',
        feature_id: 'x',
      });
    },
  );
  smokeCase(
    'commerce.entitlements.create:all',
    { operation: 'create', path: '/v1/commerce/entitlements' },
    'create: required and optional params',
    async () => {
      const entitlementGrant = await client.commerce.entitlements.create({
        customer_id: 'x',
        feature_id: 'x',
        product_id: 'x',
        expires_at: '2024-01-01T00:00:00.000Z',
      });
    },
  );
  smokeCase(
    'commerce.entitlements.update:required',
    { operation: 'update', path: '/v1/commerce/entitlements/{grant_id}' },
    'update: only required params',
    async () => {
      const entitlementGrant = await client.commerce.entitlements.update('grantId', {});
    },
  );
  smokeCase(
    'commerce.entitlements.update:all',
    { operation: 'update', path: '/v1/commerce/entitlements/{grant_id}' },
    'update: required and optional params',
    async () => {
      const entitlementGrant = await client.commerce.entitlements.update('grantId', {
        customer_id: 'cus_1234567890',
        status: 'active',
        expires_at: '2024-01-01T00:00:00.000Z',
      });
    },
  );
});
