// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@usehercules/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'beta.subscriptions.customers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/subscriptions/customers',
  operationId: 'postV1SubscriptionsCustomers',
};

export const tool: Tool = {
  name: 'create_subscriptions_beta_customers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Customer\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/customer',\n  $defs: {\n    customer: {\n      type: 'object',\n      description: 'A subscription customer',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'An id for a data item'\n        },\n        created: {\n          type: 'string',\n          format: 'date-time'\n        },\n        address: {\n          $ref: '#/$defs/customer_address'\n        },\n        email: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        phone: {\n          type: 'string'\n        },\n        stripe_id: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'created'\n      ]\n    },\n    customer_address: {\n      type: 'object',\n      description: 'Customer billing address',\n      properties: {\n        city: {\n          type: 'string'\n        },\n        country: {\n          type: 'string'\n        },\n        line1: {\n          type: 'string'\n        },\n        line2: {\n          type: 'string'\n        },\n        postal_code: {\n          type: 'string'\n        },\n        state: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      address: {
        $ref: '#/$defs/customer_address',
      },
      email: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      phone: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      customer_address: {
        type: 'object',
        description: 'Customer billing address',
        properties: {
          city: {
            type: 'string',
          },
          country: {
            type: 'string',
          },
          line1: {
            type: 'string',
          },
          line2: {
            type: 'string',
          },
          postal_code: {
            type: 'string',
          },
          state: {
            type: 'string',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.beta.subscriptions.customers.create(body)),
    );
  } catch (error) {
    if (error instanceof Hercules.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
