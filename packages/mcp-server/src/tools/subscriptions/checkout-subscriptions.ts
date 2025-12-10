// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@usehercules/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/subscriptions/v1/checkout',
  operationId: 'postSubscriptionsV1Checkout',
};

export const tool: Tool = {
  name: 'checkout_subscriptions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Checkout Session\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/subscription_checkout_response',\n  $defs: {\n    subscription_checkout_response: {\n      type: 'object',\n      description: 'Checkout session response',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The checkout session ID'\n        },\n        url: {\n          type: 'string',\n          description: 'The checkout URL to redirect the customer to'\n        }\n      },\n      required: [        'id',\n        'url'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
        description: 'The customer ID',
      },
      plan_id: {
        type: 'string',
        description: 'The plan ID to subscribe to',
      },
      cancel_url: {
        type: 'string',
        description: 'URL to redirect on cancel',
      },
      success_url: {
        type: 'string',
        description: 'URL to redirect on success',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['customer_id', 'plan_id'],
  },
  annotations: {},
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.subscriptions.checkout(body)));
  } catch (error) {
    if (error instanceof Hercules.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
