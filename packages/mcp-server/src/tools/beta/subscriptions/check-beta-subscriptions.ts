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
  httpPath: '/v1/subscriptions/check',
  operationId: 'postV1SubscriptionsCheck',
};

export const tool: Tool = {
  name: 'check_beta_subscriptions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nVerifies if a customer has access to a specific feature. Use this to gate features in your app based on the customer's active subscription and the entitlements attached to their plan. Hercules recommends calling this before allowing access to premium features.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/subscription_check_response',\n  $defs: {\n    subscription_check_response: {\n      type: 'object',\n      description: 'Check entitlement response',\n      properties: {\n        has_entitlement: {\n          type: 'boolean',\n          description: 'Whether the customer has the entitlement'\n        },\n        key: {\n          type: 'string',\n          description: 'The entitlement key that was checked'\n        },\n        entitlement_id: {\n          type: 'string',\n          description: 'The active entitlement ID if present'\n        }\n      },\n      required: [        'has_entitlement',\n        'key'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
        description: 'The customer ID',
      },
      entitlement_key: {
        type: 'string',
        description: 'The entitlement key to check for access',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['customer_id', 'entitlement_key'],
  },
  annotations: {},
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.beta.subscriptions.check(body)));
  } catch (error) {
    if (error instanceof Hercules.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
