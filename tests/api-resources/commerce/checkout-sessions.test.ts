// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource checkoutSessions', () => {
  smokeCase(
    'commerce.checkoutSessions.get:single',
    { operation: 'get', path: '/v1/commerce/checkout-sessions/{checkout_session_id}' },
    'get',
    async () => {
      const checkoutSession = await client.commerce.checkoutSessions.get('checkoutSessionId', {
        customer_id: 'cus_1234567890',
      });
    },
  );
});
