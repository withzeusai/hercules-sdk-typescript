// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@usehercules/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'beta.subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/subscriptions/cancel',
  operationId: 'postV1SubscriptionsCancel',
};

export const tool: Tool = {
  name: 'cancel_beta_subscriptions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCancels a subscription by their ID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/subscription_cancel_response',\n  $defs: {\n    subscription_cancel_response: {\n      type: 'object',\n      description: 'Cancel subscription response',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The subscription ID'\n        },\n        cancel_at_period_end: {\n          type: 'boolean',\n          description: 'Whether the subscription will cancel at period end'\n        },\n        status: {\n          type: 'string',\n          description: 'The subscription status'\n        },\n        canceled_at: {\n          type: 'string',\n          description: 'When the subscription was canceled',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'cancel_at_period_end',\n        'status'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
        description: 'The customer ID',
      },
      subscription_id: {
        type: 'string',
        description: 'The subscription ID to cancel',
      },
      cancel_at_period_end: {
        type: 'boolean',
        description: 'Whether to cancel at period end or immediately',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['customer_id', 'subscription_id'],
  },
  annotations: {},
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.beta.subscriptions.cancel(body)));
  } catch (error) {
    if (error instanceof Hercules.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
