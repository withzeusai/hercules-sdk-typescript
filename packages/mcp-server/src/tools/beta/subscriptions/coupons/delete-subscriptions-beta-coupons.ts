// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'beta.subscriptions.coupons',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/subscriptions/coupons/{coupon_id}',
  operationId: 'deleteV1SubscriptionsCoupons:coupon_id',
};

export const tool: Tool = {
  name: 'delete_subscriptions_beta_coupons',
  description:
    'Permanently deletes a coupon. The promo code can no longer be used. Existing discounts applied to active subscriptions are not affected.',
  inputSchema: {
    type: 'object',
    properties: {
      coupon_id: {
        type: 'string',
      },
    },
    required: ['coupon_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { coupon_id, ...body } = args as any;
  const response = await client.beta.subscriptions.coupons.delete(coupon_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
