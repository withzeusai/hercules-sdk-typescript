// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@usehercules/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'beta.subscriptions.customers',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/subscriptions/customers/{customer_id}',
  operationId: 'patchV1SubscriptionsCustomers:customer_id',
};

export const tool: Tool = {
  name: 'update_subscriptions_beta_customers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate customer billing information such as name, email, phone, and address.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/customer',\n  $defs: {\n    customer: {\n      type: 'object',\n      description: 'Billable customer entity representing end users, organizations, or projects that can subscribe to plans',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'An id for a data item'\n        },\n        created: {\n          type: 'string',\n          description: 'Customer creation timestamp',\n          format: 'date-time'\n        },\n        address: {\n          $ref: '#/$defs/customer_address'\n        },\n        email: {\n          type: 'string',\n          description: 'Customer email address'\n        },\n        name: {\n          type: 'string',\n          description: 'Customer full name'\n        },\n        phone: {\n          type: 'string',\n          description: 'Customer phone number'\n        },\n        stripe_id: {\n          type: 'string',\n          description: 'Associated Stripe customer ID'\n        }\n      },\n      required: [        'id',\n        'created'\n      ]\n    },\n    customer_address: {\n      type: 'object',\n      description: 'Customer billing address',\n      properties: {\n        city: {\n          type: 'string',\n          description: 'City name'\n        },\n        country: {\n          type: 'string',\n          description: 'Two-letter country code (e.g., US, CA)'\n        },\n        line1: {\n          type: 'string',\n          description: 'Primary address line'\n        },\n        line2: {\n          type: 'string',\n          description: 'Secondary address line'\n        },\n        postal_code: {\n          type: 'string',\n          description: 'ZIP or postal code'\n        },\n        state: {\n          type: 'string',\n          description: 'State or province'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      address: {
        $ref: '#/$defs/customer_address',
      },
      email: {
        type: 'string',
        description: 'Customer email address',
      },
      name: {
        type: 'string',
        description: 'Customer full name',
      },
      phone: {
        type: 'string',
        description: 'Customer phone number',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['customer_id'],
    $defs: {
      customer_address: {
        type: 'object',
        description: 'Customer billing address',
        properties: {
          city: {
            type: 'string',
            description: 'City name',
          },
          country: {
            type: 'string',
            description: 'Two-letter country code (e.g., US, CA)',
          },
          line1: {
            type: 'string',
            description: 'Primary address line',
          },
          line2: {
            type: 'string',
            description: 'Secondary address line',
          },
          postal_code: {
            type: 'string',
            description: 'ZIP or postal code',
          },
          state: {
            type: 'string',
            description: 'State or province',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { customer_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.beta.subscriptions.customers.update(customer_id, body)),
    );
  } catch (error) {
    if (error instanceof Hercules.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
