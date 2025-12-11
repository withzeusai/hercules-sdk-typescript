// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@usehercules/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'beta.subscriptions.plans',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/subscriptions/plans',
  operationId: 'postV1SubscriptionsPlans',
};

export const tool: Tool = {
  name: 'create_subscriptions_beta_plans',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new subscription plan with a recurring price. Common examples include Free, Pro, Business, or Teams tiers. After creating a plan, attach entitlements to define which features customers on this plan can access.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/plan',\n  $defs: {\n    plan: {\n      type: 'object',\n      description: 'A subscription plan that customers can subscribe to. Plans define pricing and billing intervals. Attach entitlements to a plan to grant features to all subscribed customers.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the entitlement'\n        },\n        active: {\n          type: 'boolean',\n          description: 'Whether the plan is available for new subscriptions'\n        },\n        created: {\n          type: 'string',\n          description: 'Timestamp when the plan was created',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Display name for the plan (e.g., Pro, Business, Teams)'\n        },\n        stripe_product_id: {\n          type: 'string',\n          description: 'Internal payment provider reference'\n        },\n        default_price: {\n          type: 'object',\n          description: 'The recurring price configuration for a plan',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Unique identifier for the entitlement'\n            },\n            currency: {\n              type: 'string',\n              description: 'Three-letter ISO currency code (e.g., usd, eur)'\n            },\n            interval: {\n              type: 'string',\n              description: 'Billing frequency: day, week, month, or year',\n              enum: [                'day',\n                'week',\n                'month',\n                'year'\n              ]\n            },\n            interval_count: {\n              type: 'integer',\n              description: 'Number of intervals between billings (e.g., 2 for biweekly)'\n            },\n            unit_amount: {\n              type: 'integer',\n              description: 'Price amount in the smallest currency unit (e.g., cents)'\n            }\n          },\n          required: [            'id',\n            'currency',\n            'interval',\n            'interval_count',\n            'unit_amount'\n          ]\n        },\n        description: {\n          type: 'string',\n          description: 'Detailed description of what the plan includes'\n        }\n      },\n      required: [        'id',\n        'active',\n        'created',\n        'name',\n        'stripe_product_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Display name for the plan (e.g., Pro, Business, Teams)',
      },
      unit_amount: {
        type: 'integer',
        description: 'Price amount in the smallest currency unit (e.g., cents). Use 0 for free plans.',
      },
      currency: {
        type: 'string',
        description: 'Three-letter ISO currency code',
      },
      description: {
        type: 'string',
        description: 'Detailed description of what the plan includes',
      },
      interval: {
        type: 'string',
        description: 'Billing frequency: day, week, month, or year',
        enum: ['day', 'week', 'month', 'year'],
      },
      interval_count: {
        type: 'integer',
        description: 'Number of intervals between billings',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['name', 'unit_amount'],
  },
  annotations: {},
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.beta.subscriptions.plans.create(body)),
    );
  } catch (error) {
    if (error instanceof Hercules.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
