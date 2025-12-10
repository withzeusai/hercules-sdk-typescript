// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@usehercules/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'subscriptions.coupons',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/subscriptions/v1/coupons',
  operationId: 'getSubscriptionsV1Coupons',
};

export const tool: Tool = {
  name: 'list_subscriptions_coupons',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Coupons\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'List of coupons',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/coupon'\n      }\n    },\n    has_more: {\n      type: 'boolean'\n    }\n  },\n  required: [    'data',\n    'has_more'\n  ],\n  $defs: {\n    coupon: {\n      type: 'object',\n      description: 'A coupon/promo code for discounts',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'An id for a data item'\n        },\n        active: {\n          type: 'boolean'\n        },\n        code: {\n          type: 'string',\n          description: 'The promo code'\n        },\n        created: {\n          type: 'string',\n          format: 'date-time'\n        },\n        duration: {\n          type: 'string',\n          enum: [            'once',\n            'repeating',\n            'forever'\n          ]\n        },\n        times_redeemed: {\n          type: 'integer',\n          description: 'Number of times this coupon has been redeemed'\n        },\n        amount_off: {\n          type: 'integer',\n          description: 'Fixed amount discount in cents'\n        },\n        currency: {\n          type: 'string',\n          description: 'Currency for amount_off'\n        },\n        duration_in_months: {\n          type: 'integer',\n          description: 'Number of months for repeating duration'\n        },\n        max_redemptions: {\n          type: 'integer',\n          description: 'Maximum number of times this coupon can be redeemed'\n        },\n        name: {\n          type: 'string'\n        },\n        percent_off: {\n          type: 'number',\n          description: 'Percentage discount (1-100)'\n        },\n        redeem_by: {\n          type: 'string',\n          description: 'Date after which the coupon can no longer be redeemed',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'active',\n        'code',\n        'created',\n        'duration',\n        'times_redeemed'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      active: {
        type: 'boolean',
      },
      ending_before: {
        type: 'string',
        description: 'A parameter to end a paginated list at a specific data item',
      },
      limit: {
        type: 'integer',
      },
      starting_after: {
        type: 'string',
        description: 'A parameter to start a paginated list from a specific data item',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.subscriptions.coupons.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Hercules.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
