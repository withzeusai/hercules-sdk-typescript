// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@usehercules/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'beta.subscriptions.plans.entitlements',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/subscriptions/plans/{plan_id}/entitlements',
  operationId: 'postV1SubscriptionsPlans:plan_idEntitlements',
};

export const tool: Tool = {
  name: 'attach_plans_subscriptions_beta_entitlements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGrant a feature entitlement to all customers subscribed to this plan.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/plan_entitlement',\n  $defs: {\n    plan_entitlement: {\n      type: 'object',\n      description: 'Feature entitlement attached to a plan, granting access to all customers subscribed to the plan',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'An id for a data item'\n        },\n        entitlement: {\n          $ref: '#/$defs/entitlement'\n        }\n      },\n      required: [        'id',\n        'entitlement'\n      ]\n    },\n    entitlement: {\n      type: 'object',\n      description: 'The feature entitlement granted to plan subscribers',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'An id for a data item'\n        },\n        active: {\n          type: 'boolean',\n          description: 'Whether the entitlement grants access to customers'\n        },\n        livemode: {\n          type: 'boolean',\n          description: 'Whether in production mode'\n        },\n        lookup_key: {\n          type: 'string',\n          description: 'Unique key for checking feature access in your app'\n        },\n        name: {\n          type: 'string',\n          description: 'Entitlement display name'\n        }\n      },\n      required: [        'id',\n        'active',\n        'livemode',\n        'lookup_key',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      plan_id: {
        type: 'string',
      },
      entitlement: {
        type: 'string',
        description: 'Entitlement ID to grant to plan subscribers',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['plan_id', 'entitlement'],
  },
  annotations: {},
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { plan_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.beta.subscriptions.plans.entitlements.attach(plan_id, body)),
    );
  } catch (error) {
    if (error instanceof Hercules.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
