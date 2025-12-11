// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@usehercules/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'beta.subscriptions.entitlements',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptions/entitlements/{entitlement_id}',
  operationId: 'getV1SubscriptionsEntitlements:entitlement_id',
};

export const tool: Tool = {
  name: 'get_subscriptions_beta_entitlements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves an entitlement by ID. Returns the entitlement object including its lookup key and active status.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/entitlement',\n  $defs: {\n    entitlement: {\n      type: 'object',\n      description: 'The entitlement attached to the plan',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the entitlement'\n        },\n        active: {\n          type: 'boolean',\n          description: 'Whether the entitlement is active and can be attached to plans'\n        },\n        key: {\n          type: 'string',\n          description: 'Unique key to identify the entitlement when checking access in your app'\n        },\n        livemode: {\n          type: 'boolean',\n          description: 'Whether this is a live mode entitlement (vs test mode)'\n        },\n        name: {\n          type: 'string',\n          description: 'Display name for the entitlement (e.g., API Access, Premium Support)'\n        }\n      },\n      required: [        'id',\n        'active',\n        'key',\n        'livemode',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      entitlement_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['entitlement_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { entitlement_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.beta.subscriptions.entitlements.get(entitlement_id)),
    );
  } catch (error) {
    if (error instanceof Hercules.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
