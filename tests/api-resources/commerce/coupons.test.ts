// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource coupons', () => {
  smokeCase(
    'commerce.coupons.list:required',
    { operation: 'list', path: '/v1/commerce/coupons' },
    'list: only required params',
    async () => {
      const page = await client.commerce.coupons.list();
    },
  );
  smokeCase(
    'commerce.coupons.list:all',
    { operation: 'list', path: '/v1/commerce/coupons' },
    'list: required and optional params',
    async () => {
      const page = await client.commerce.coupons.list({
        active: true,
      });
    },
  );
  smokeCase(
    'commerce.coupons.get:single',
    { operation: 'get', path: '/v1/commerce/coupons/{coupon_id}' },
    'get',
    async () => {
      const coupon = await client.commerce.coupons.get('coupon_1234567890');
    },
  );
  smokeCase(
    'commerce.coupons.create:required',
    { operation: 'create', path: '/v1/commerce/coupons' },
    'create: only required params',
    async () => {
      const coupon = await client.commerce.coupons.create({
        code: 'LAUNCH20',
        duration: 'once',
      });
    },
  );
  smokeCase(
    'commerce.coupons.create:all',
    { operation: 'create', path: '/v1/commerce/coupons' },
    'create: required and optional params',
    async () => {
      const coupon = await client.commerce.coupons.create({
        code: 'LAUNCH20',
        id: 'coupon_1234567890',
        name: '',
        percent_off: 1,
        amount_off: 1,
        currency: 'USD',
        duration: 'once',
        duration_in_months: 1,
        max_redemptions: 1,
        redeem_by: '2024-01-01T00:00:00.000Z',
      });
    },
  );
  smokeCase(
    'commerce.coupons.update:required',
    { operation: 'update', path: '/v1/commerce/coupons/{coupon_id}' },
    'update: only required params',
    async () => {
      const coupon = await client.commerce.coupons.update('coupon_1234567890', {});
    },
  );
  smokeCase(
    'commerce.coupons.update:all',
    { operation: 'update', path: '/v1/commerce/coupons/{coupon_id}' },
    'update: required and optional params',
    async () => {
      const coupon = await client.commerce.coupons.update('coupon_1234567890', {
        name: '',
        active: false,
      });
    },
  );
});
