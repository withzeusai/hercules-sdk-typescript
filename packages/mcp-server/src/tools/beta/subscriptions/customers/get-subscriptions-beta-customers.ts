// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@usehercules/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'beta.subscriptions.customers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptions/customers/{customer_id}',
  operationId: 'getV1SubscriptionsCustomers:customer_id',
};

export const tool: Tool = {
  name: 'get_subscriptions_beta_customers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a customer by ID. Returns the customer object including contact information and billing address.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/customer',\n  $defs: {\n    customer: {\n      type: 'object',\n      description: 'A billable customer. Represents the entity in your app that will be charged—typically a user, organization, or project.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the entitlement'\n        },\n        created: {\n          type: 'string',\n          description: 'Timestamp when the customer was created',\n          format: 'date-time'\n        },\n        address: {\n          $ref: '#/$defs/customer_address'\n        },\n        email: {\n          type: 'string',\n          description: 'The customer\\'s email address for receipts and notifications'\n        },\n        name: {\n          type: 'string',\n          description: 'The customer\\'s full name'\n        },\n        phone: {\n          type: 'string',\n          description: 'The customer\\'s phone number'\n        }\n      },\n      required: [        'id',\n        'created'\n      ]\n    },\n    customer_address: {\n      type: 'object',\n      description: 'The customer\\'s billing address',\n      properties: {\n        city: {\n          type: 'string',\n          description: 'City name'\n        },\n        country: {\n          type: 'string',\n          description: 'Two-letter ISO country code'\n        },\n        line1: {\n          type: 'string',\n          description: 'Street address line 1'\n        },\n        line2: {\n          type: 'string',\n          description: 'Street address line 2 (apartment, suite, etc.)'\n        },\n        postal_code: {\n          type: 'string',\n          description: 'Postal or ZIP code'\n        },\n        state: {\n          type: 'string',\n          description: 'State, province, or region'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['customer_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { customer_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.beta.subscriptions.customers.get(customer_id)),
    );
  } catch (error) {
    if (error instanceof Hercules.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
