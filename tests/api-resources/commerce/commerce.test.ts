// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource commerce', () => {
  smokeCase(
    'commerce.checkout:required',
    { operation: 'checkout', path: '/v1/commerce/checkout' },
    'checkout: only required params',
    async () => {
      const commerce = await client.commerce.checkout({
        customer_id: 'cus_1234567890',
        line_items: [
          {
            variant_id: 'var_1234567890',
            quantity: 1,
          },
        ],
        success_url: 'https://example.com',
      });
    },
  );
  smokeCase(
    'commerce.checkout:all',
    { operation: 'checkout', path: '/v1/commerce/checkout' },
    'checkout: required and optional params',
    async () => {
      const commerce = await client.commerce.checkout({
        customer_id: 'cus_1234567890',
        line_items: [
          {
            variant_id: 'var_1234567890',
            quantity: 1,
          },
        ],
        success_url: 'https://example.com',
        cancel_url: 'https://example.com',
        promotion_code: '',
        locale: 'auto',
        trial_period_days: 0,
        proration_behavior: 'none',
        charge_timing: 'immediate',
        plan_downgrade_behavior: 'immediate',
        interval_downgrade_behavior: 'immediate',
      });
    },
  );
  smokeCase(
    'commerce.cancel:single',
    { operation: 'cancel', path: '/v1/commerce/cancel' },
    'cancel',
    async () => {
      const commerce = await client.commerce.cancel({
        customer_id: 'cus_1234567890',
        subscription_id: 'sub_1234567890',
        cancellation_timing: 'at_billing_period_end',
      });
    },
  );
  smokeCase(
    'commerce.check:single',
    { operation: 'check', path: '/v1/commerce/check' },
    'check',
    async () => {
      const commerce = await client.commerce.check({
        customer_id: 'cus_1234567890',
        resource_id: 'feat_1234567890',
      });
    },
  );
});
