// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@usehercules/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'subscriptions.customers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/subscriptions/v1/customers/{id}/billing_portal',
  operationId: 'postSubscriptionsV1Customers:idBilling_portal',
};

export const tool: Tool = {
  name: 'billing_portal_subscriptions_customers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nOpen Customer Portal\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/customer_billing_portal_response',\n  $defs: {\n    customer_billing_portal_response: {\n      type: 'object',\n      description: 'Billing portal session URL',\n      properties: {\n        url: {\n          type: 'string'\n        }\n      },\n      required: [        'url'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      return_url: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.subscriptions.customers.billingPortal(id, body)),
    );
  } catch (error) {
    if (error instanceof Hercules.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
