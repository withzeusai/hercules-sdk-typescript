// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../../smoke-support';

describe.concurrent('resource variants', () => {
  smokeCase(
    'commerce.products.variants.list:required',
    { operation: 'list', path: '/v1/commerce/products/{product_id}/variants' },
    'list: only required params',
    async () => {
      const page = await client.commerce.products.variants.list('productId');
    },
  );
  smokeCase(
    'commerce.products.variants.list:all',
    { operation: 'list', path: '/v1/commerce/products/{product_id}/variants' },
    'list: required and optional params',
    async () => {
      const page = await client.commerce.products.variants.list('productId', {
        active: true,
        customer_id: 'cus_1234567890',
      });
    },
  );
  smokeCase(
    'commerce.products.variants.get:required',
    { operation: 'get', path: '/v1/commerce/products/{product_id}/variants/{variant_id}' },
    'get: only required params',
    async () => {
      const variant = await client.commerce.products.variants.get('variantId', {
        product_id: 'productId',
      });
    },
  );
  smokeCase(
    'commerce.products.variants.get:all',
    { operation: 'get', path: '/v1/commerce/products/{product_id}/variants/{variant_id}' },
    'get: required and optional params',
    async () => {
      const variant = await client.commerce.products.variants.get('variantId', {
        product_id: 'productId',
        customer_id: 'cus_1234567890',
      });
    },
  );
  smokeCase(
    'commerce.products.variants.create:required',
    { operation: 'create', path: '/v1/commerce/products/{product_id}/variants' },
    'create: only required params',
    async () => {
      const variant = await client.commerce.products.variants.create('productId', {
        name: 'x',
        unit_amount: 0,
      });
    },
  );
  smokeCase(
    'commerce.products.variants.create:all',
    { operation: 'create', path: '/v1/commerce/products/{product_id}/variants' },
    'create: required and optional params',
    async () => {
      const variant = await client.commerce.products.variants.create('productId', {
        id: 'var_1234567890',
        name: 'x',
        description: '',
        media: [
          {
            cdn_file_id: '',
            type: 'image',
          },
        ],
        metadata: {},
        unit_amount: 0,
        currency: 'USD',
        recurring: {
          interval: 'day',
          interval_count: 1,
        },
      });
    },
  );
  smokeCase(
    'commerce.products.variants.update:required',
    { operation: 'update', path: '/v1/commerce/products/{product_id}/variants/{variant_id}' },
    'update: only required params',
    async () => {
      const variant = await client.commerce.products.variants.update('variantId', {
        product_id: 'productId',
      });
    },
  );
  smokeCase(
    'commerce.products.variants.update:all',
    { operation: 'update', path: '/v1/commerce/products/{product_id}/variants/{variant_id}' },
    'update: required and optional params',
    async () => {
      const variant = await client.commerce.products.variants.update('variantId', {
        product_id: 'productId',
        name: '',
        description: '',
        media: [
          {
            cdn_file_id: '',
            type: 'image',
          },
        ],
        metadata: {},
        active: false,
      });
    },
  );
});
