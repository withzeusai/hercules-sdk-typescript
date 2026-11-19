// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../../smoke-support';

describe.concurrent('resource resources', () => {
  smokeCase(
    'commerce.products.resources.list:required',
    { operation: 'list', path: '/v1/commerce/products/{product_id}/resources' },
    'list: only required params',
    async () => {
      const page = await client.commerce.products.resources.list('productId');
    },
  );
  smokeCase(
    'commerce.products.resources.list:all',
    { operation: 'list', path: '/v1/commerce/products/{product_id}/resources' },
    'list: required and optional params',
    async () => {
      const page = await client.commerce.products.resources.list('productId', {
        type: 'feature',
        active: true,
        customer_id: 'cus_1234567890',
      });
    },
  );
  smokeCase(
    'commerce.products.resources.attach:single',
    { operation: 'attach', path: '/v1/commerce/products/{product_id}/resources' },
    'attach',
    async () => {
      const resource = await client.commerce.products.resources.attach('productId', {
        resource_ids: [''],
      });
    },
  );
  smokeCase(
    'commerce.products.resources.detach:single',
    { operation: 'detach', path: '/v1/commerce/products/{product_id}/resources' },
    'detach',
    async () => {
      await client.commerce.products.resources.detach('productId', {
        resource_ids: [''],
      });
    },
  );
});
