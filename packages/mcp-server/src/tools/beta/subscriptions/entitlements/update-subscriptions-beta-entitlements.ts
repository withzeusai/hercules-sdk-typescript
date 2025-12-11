// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@usehercules/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'beta.subscriptions.entitlements',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/subscriptions/entitlements/{entitlement_id}',
  operationId: 'patchV1SubscriptionsEntitlements:entitlement_id',
};

export const tool: Tool = {
  name: 'update_subscriptions_beta_entitlements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate entitlement name or active status. Deactivating an entitlement revokes access for all customers.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/entitlement',\n  $defs: {\n    entitlement: {\n      type: 'object',\n      description: 'The feature entitlement granted to plan subscribers',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'An id for a data item'\n        },\n        active: {\n          type: 'boolean',\n          description: 'Whether the entitlement grants access to customers'\n        },\n        livemode: {\n          type: 'boolean',\n          description: 'Whether in production mode'\n        },\n        lookup_key: {\n          type: 'string',\n          description: 'Unique key for checking feature access in your app'\n        },\n        name: {\n          type: 'string',\n          description: 'Entitlement display name'\n        }\n      },\n      required: [        'id',\n        'active',\n        'livemode',\n        'lookup_key',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      entitlement_id: {
        type: 'string',
      },
      active: {
        type: 'boolean',
        description: 'Whether the entitlement is active. Deactivating revokes access for all customers',
      },
      name: {
        type: 'string',
        description: 'Entitlement display name',
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
  annotations: {},
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { entitlement_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.beta.subscriptions.entitlements.update(entitlement_id, body)),
    );
  } catch (error) {
    if (error instanceof Hercules.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
