// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@usehercules/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'beta.subscriptions.coupons',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptions/coupons/{coupon_id}',
  operationId: 'getV1SubscriptionsCoupons:coupon_id',
};

export const tool: Tool = {
  name: 'get_subscriptions_beta_coupons',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a coupon by ID. Returns the coupon object including discount details and redemption statistics.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/coupon',\n  $defs: {\n    coupon: {\n      type: 'object',\n      description: 'A discount coupon that customers can apply during checkout using a promo code',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the entitlement'\n        },\n        active: {\n          type: 'boolean',\n          description: 'Whether the coupon is currently active and can be redeemed'\n        },\n        code: {\n          type: 'string',\n          description: 'The promo code customers enter to apply the discount'\n        },\n        created: {\n          type: 'string',\n          description: 'Timestamp when the coupon was created',\n          format: 'date-time'\n        },\n        duration: {\n          type: 'string',\n          description: 'How long the discount applies: once (first payment only), repeating (for duration_in_months), or forever',\n          enum: [            'once',\n            'repeating',\n            'forever'\n          ]\n        },\n        times_redeemed: {\n          type: 'integer',\n          description: 'Number of times this coupon has been successfully redeemed'\n        },\n        amount_off: {\n          type: 'integer',\n          description: 'Fixed discount amount in the smallest currency unit (e.g., cents). Mutually exclusive with percent_off.'\n        },\n        currency: {\n          type: 'string',\n          description: 'Three-letter ISO currency code for amount_off discounts'\n        },\n        duration_in_months: {\n          type: 'integer',\n          description: 'Number of months the discount applies when duration is \\'repeating\\''\n        },\n        max_redemptions: {\n          type: 'integer',\n          description: 'Maximum number of times this coupon can be redeemed across all customers'\n        },\n        name: {\n          type: 'string',\n          description: 'Display name for the coupon (shown to customers)'\n        },\n        percent_off: {\n          type: 'number',\n          description: 'Percentage discount (1-100). Mutually exclusive with amount_off.'\n        },\n        redeem_by: {\n          type: 'string',\n          description: 'Expiration date after which the coupon can no longer be redeemed',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'active',\n        'code',\n        'created',\n        'duration',\n        'times_redeemed'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      coupon_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['coupon_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { coupon_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.beta.subscriptions.coupons.get(coupon_id)),
    );
  } catch (error) {
    if (error instanceof Hercules.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
