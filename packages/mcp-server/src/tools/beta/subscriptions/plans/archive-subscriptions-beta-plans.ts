// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@usehercules/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'beta.subscriptions.plans',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/subscriptions/plans/{plan_id}',
  operationId: 'deleteV1SubscriptionsPlans:plan_id',
};

export const tool: Tool = {
  name: 'archive_subscriptions_beta_plans',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nArchive a plan to prevent new subscriptions. Existing subscriptions remain active.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/plan',\n  $defs: {\n    plan: {\n      type: 'object',\n      description: 'Subscription plan defining recurring payment tiers and associated entitlements',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'An id for a data item'\n        },\n        active: {\n          type: 'boolean',\n          description: 'Whether the plan accepts new subscriptions'\n        },\n        created: {\n          type: 'string',\n          description: 'Plan creation timestamp',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Plan display name (e.g., Free, Pro, Business)'\n        },\n        stripe_product_id: {\n          type: 'string',\n          description: 'Associated Stripe product ID'\n        },\n        default_price: {\n          type: 'object',\n          description: 'Recurring price configuration for a subscription plan',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'An id for a data item'\n            },\n            currency: {\n              type: 'string',\n              description: 'Three-letter ISO currency code (e.g., usd)'\n            },\n            interval: {\n              type: 'string',\n              description: 'Billing frequency',\n              enum: [                'day',\n                'week',\n                'month',\n                'year'\n              ]\n            },\n            interval_count: {\n              type: 'integer',\n              description: 'Number of intervals between billings (e.g., 3 for quarterly)'\n            },\n            unit_amount: {\n              type: 'integer',\n              description: 'Price amount in cents (e.g., 1000 = $10.00)'\n            }\n          },\n          required: [            'id',\n            'currency',\n            'interval',\n            'interval_count',\n            'unit_amount'\n          ]\n        },\n        description: {\n          type: 'string',\n          description: 'Plan description'\n        }\n      },\n      required: [        'id',\n        'active',\n        'created',\n        'name',\n        'stripe_product_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      plan_id: {
        type: 'string',
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
    idempotentHint: true,
  },
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { plan_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.beta.subscriptions.plans.archive(plan_id)),
    );
  } catch (error) {
    if (error instanceof Hercules.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
