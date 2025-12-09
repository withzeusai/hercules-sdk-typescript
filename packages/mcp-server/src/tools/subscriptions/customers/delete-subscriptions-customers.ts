// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@usehercules/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hercules from '@usehercules/sdk';

export const metadata: Metadata = {
  resource: 'subscriptions.customers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/subscriptions/v1/customers/{id}',
  operationId: 'deleteSubscriptionsV1Customers:id',
};

export const tool: Tool = {
  name: 'delete_subscriptions_customers',
  description: 'Delete Customer',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Hercules, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.subscriptions.customers.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
