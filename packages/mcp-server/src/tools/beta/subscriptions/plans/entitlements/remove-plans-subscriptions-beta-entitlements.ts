// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'beta.subscriptions.plans.entitlements',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/subscriptions/plans/{plan_id}/entitlements/{feature_id}',
  operationId: 'deleteV1SubscriptionsPlans:plan_idEntitlements:feature_id',
};

export const tool: Tool = {
  name: 'remove_plans_subscriptions_beta_entitlements',
  description:
    'Removes an entitlement from a plan. Customers subscribed to this plan will lose access to the feature. Existing subscriptions are affected immediately.',
  inputSchema: {
    type: 'object',
    properties: {
      plan_id: {
        type: 'string',
      },
      feature_id: {
        type: 'string',
      },
    },
    required: ['plan_id', 'feature_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { feature_id, ...body } = args as any;
  const response = await client.beta.subscriptions.plans.entitlements.remove(feature_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
