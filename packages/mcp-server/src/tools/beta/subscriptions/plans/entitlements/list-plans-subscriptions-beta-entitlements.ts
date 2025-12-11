// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@usehercules/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'beta.subscriptions.plans.entitlements',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptions/plans/{plan_id}/entitlements',
  operationId: 'getV1SubscriptionsPlans:plan_idEntitlements',
};

export const tool: Tool = {
  name: 'list_plans_subscriptions_beta_entitlements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves all entitlements attached to a plan. These entitlements define the features that customers subscribed to this plan can access.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/plan_entitlement'\n      }\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    plan_entitlement: {\n      type: 'object',\n      description: 'An entitlement attached to a plan. All customers subscribed to the plan gain access to this entitlement.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the entitlement'\n        },\n        entitlement: {\n          $ref: '#/$defs/entitlement'\n        }\n      },\n      required: [        'id',\n        'entitlement'\n      ]\n    },\n    entitlement: {\n      type: 'object',\n      description: 'The entitlement attached to the plan',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the entitlement'\n        },\n        active: {\n          type: 'boolean',\n          description: 'Whether the entitlement is active and can be attached to plans'\n        },\n        livemode: {\n          type: 'boolean',\n          description: 'Whether this is a live mode entitlement (vs test mode)'\n        },\n        lookup_key: {\n          type: 'string',\n          description: 'Unique key to identify the entitlement when checking access in your app'\n        },\n        name: {\n          type: 'string',\n          description: 'Display name for the entitlement (e.g., API Access, Premium Support)'\n        }\n      },\n      required: [        'id',\n        'active',\n        'livemode',\n        'lookup_key',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      plan_id: {
        type: 'string',
      },
      ending_before: {
        type: 'string',
        description: 'Cursor for backward pagination',
      },
      limit: {
        type: 'integer',
        description: 'Maximum number of plan entitlements to return (1-100)',
      },
      starting_after: {
        type: 'string',
        description: 'Cursor for forward pagination',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['plan_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { plan_id, jq_filter, ...body } = args as any;
  const response = await client.beta.subscriptions.plans.entitlements.list(plan_id, body).asResponse();
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
