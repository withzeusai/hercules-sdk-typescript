// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../../smoke-support';

describe.concurrent('resource products', () => {
  smokeCase(
    'commerce.products.list:required',
    { operation: 'list', path: '/v1/commerce/products' },
    'list: only required params',
    async () => {
      const page = await client.commerce.products.list();
    },
  );
  smokeCase(
    'commerce.products.list:all',
    { operation: 'list', path: '/v1/commerce/products' },
    'list: required and optional params',
    async () => {
      const page = await client.commerce.products.list({
        active: true,
        customer_id: 'cus_1234567890',
      });
    },
  );
  smokeCase(
    'commerce.products.get:required',
    { operation: 'get', path: '/v1/commerce/products/{product_id}' },
    'get: only required params',
    async () => {
      const product = await client.commerce.products.get('productId');
    },
  );
  smokeCase(
    'commerce.products.get:all',
    { operation: 'get', path: '/v1/commerce/products/{product_id}' },
    'get: required and optional params',
    async () => {
      const product = await client.commerce.products.get('productId', {
        customer_id: 'cus_1234567890',
      });
    },
  );
  smokeCase(
    'commerce.products.create:required',
    { operation: 'create', path: '/v1/commerce/products' },
    'create: only required params',
    async () => {
      const product = await client.commerce.products.create({
        name: 'x',
        variants: [
          {
            name: 'x',
            unit_amount: 0,
          },
        ],
      });
    },
  );
  smokeCase(
    'commerce.products.create:all',
    { operation: 'create', path: '/v1/commerce/products' },
    'create: required and optional params',
    async () => {
      const product = await client.commerce.products.create({
        id: 'prod_1234567890',
        name: 'x',
        description: 'x',
        subscription_group_id: '',
        media: [
          {
            cdn_file_id: '',
            type: 'image',
          },
        ],
        tags: [''],
        metadata: {},
        variants: [
          {
            name: 'x',
            unit_amount: 0,
          },
        ],
      });
    },
  );
  smokeCase(
    'commerce.products.update:required',
    { operation: 'update', path: '/v1/commerce/products/{product_id}' },
    'update: only required params',
    async () => {
      const product = await client.commerce.products.update('productId', {});
    },
  );
  smokeCase(
    'commerce.products.update:all',
    { operation: 'update', path: '/v1/commerce/products/{product_id}' },
    'update: required and optional params',
    async () => {
      const product = await client.commerce.products.update('productId', {
        name: '',
        description: '',
        subscription_group_id: '',
        media: [
          {
            cdn_file_id: '',
            type: 'image',
          },
        ],
        tags: [''],
        metadata: {},
        active: false,
      });
    },
  );
});
