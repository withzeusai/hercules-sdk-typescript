// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'beta.subscriptions.customers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/subscriptions/customers/{customer_id}',
  operationId: 'deleteV1SubscriptionsCustomers:customer_id',
};

export const tool: Tool = {
  name: 'delete_subscriptions_beta_customers',
  description: 'Deletes a customer by their ID',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
    },
    required: ['customer_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { customer_id, ...body } = args as any;
  const response = await client.beta.subscriptions.customers.delete(customer_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
