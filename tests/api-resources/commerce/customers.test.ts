// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource customers', () => {
  smokeCase(
    'commerce.customers.list:required',
    { operation: 'list', path: '/v1/commerce/customers' },
    'list: only required params',
    async () => {
      const page = await client.commerce.customers.list();
    },
  );
  smokeCase(
    'commerce.customers.list:all',
    { operation: 'list', path: '/v1/commerce/customers' },
    'list: required and optional params',
    async () => {
      const page = await client.commerce.customers.list({
        query: 'query',
        email: 'email',
        created: {
          gt: 0,
          gte: 0,
          lt: 0,
          lte: 0,
        },
        sort: 'sort',
      });
    },
  );
  smokeCase(
    'commerce.customers.get:single',
    { operation: 'get', path: '/v1/commerce/customers/{customer_id}' },
    'get',
    async () => {
      const customer = await client.commerce.customers.get('cus_1234567890');
    },
  );
  smokeCase(
    'commerce.customers.create:required',
    { operation: 'create', path: '/v1/commerce/customers' },
    'create: only required params',
    async () => {
      const customer = await client.commerce.customers.create({});
    },
  );
  smokeCase(
    'commerce.customers.create:all',
    { operation: 'create', path: '/v1/commerce/customers' },
    'create: required and optional params',
    async () => {
      const customer = await client.commerce.customers.create({
        id: 'cus_1234567890',
        name: '',
        email: 'user@example.com',
        phone: '',
        address: {},
      });
    },
  );
  smokeCase(
    'commerce.customers.update:required',
    { operation: 'update', path: '/v1/commerce/customers/{customer_id}' },
    'update: only required params',
    async () => {
      const customer = await client.commerce.customers.update('cus_1234567890', {});
    },
  );
  smokeCase(
    'commerce.customers.update:all',
    { operation: 'update', path: '/v1/commerce/customers/{customer_id}' },
    'update: required and optional params',
    async () => {
      const customer = await client.commerce.customers.update('cus_1234567890', {
        name: '',
        email: 'user@example.com',
        phone: '',
        address: {},
      });
    },
  );
  smokeCase(
    'commerce.customers.billingPortal:required',
    { operation: 'billingPortal', path: '/v1/commerce/customers/{customer_id}/billing_portal' },
    'billingPortal: only required params',
    async () => {
      const customer = await client.commerce.customers.billingPortal('cus_1234567890', {});
    },
  );
  smokeCase(
    'commerce.customers.billingPortal:all',
    { operation: 'billingPortal', path: '/v1/commerce/customers/{customer_id}/billing_portal' },
    'billingPortal: required and optional params',
    async () => {
      const customer = await client.commerce.customers.billingPortal('cus_1234567890', {
        return_url: 'https://example.com',
      });
    },
  );
});
