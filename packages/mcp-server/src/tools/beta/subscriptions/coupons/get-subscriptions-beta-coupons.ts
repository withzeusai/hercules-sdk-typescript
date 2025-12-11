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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a specific coupon by ID, including discount details and validity status.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/coupon',\n  $defs: {\n    coupon: {\n      type: 'object',\n      description: 'Discount coupon for subscription payments. Offers percentage or fixed-amount discounts',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'An id for a data item'\n        },\n        active: {\n          type: 'boolean',\n          description: 'Whether the coupon can be redeemed'\n        },\n        code: {\n          type: 'string',\n          description: 'Promo code customers enter at checkout'\n        },\n        created: {\n          type: 'string',\n          description: 'Coupon creation timestamp',\n          format: 'date-time'\n        },\n        duration: {\n          type: 'string',\n          description: 'How long the discount applies (once, repeating, or forever)',\n          enum: [            'once',\n            'repeating',\n            'forever'\n          ]\n        },\n        times_redeemed: {\n          type: 'integer',\n          description: 'Current number of times redeemed'\n        },\n        amount_off: {\n          type: 'integer',\n          description: 'Fixed discount in cents (e.g., 1000 = $10.00). Mutually exclusive with percent_off'\n        },\n        currency: {\n          type: 'string',\n          description: 'Three-letter ISO currency code for amount_off'\n        },\n        duration_in_months: {\n          type: 'integer',\n          description: 'Number of months discount applies (for repeating duration)'\n        },\n        max_redemptions: {\n          type: 'integer',\n          description: 'Maximum total redemptions allowed. Null for unlimited'\n        },\n        name: {\n          type: 'string',\n          description: 'Coupon display name'\n        },\n        percent_off: {\n          type: 'number',\n          description: 'Percentage discount (1-100). Mutually exclusive with amount_off'\n        },\n        redeem_by: {\n          type: 'string',\n          description: 'Expiration timestamp. Null for no expiration',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'active',\n        'code',\n        'created',\n        'duration',\n        'times_redeemed'\n      ]\n    }\n  }\n}\n```",
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
