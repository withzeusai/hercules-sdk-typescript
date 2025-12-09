// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_subscriptions_customers from './subscriptions/customers/create-subscriptions-customers';
import update_subscriptions_customers from './subscriptions/customers/update-subscriptions-customers';
import list_subscriptions_customers from './subscriptions/customers/list-subscriptions-customers';
import delete_subscriptions_customers from './subscriptions/customers/delete-subscriptions-customers';
import billing_portal_subscriptions_customers from './subscriptions/customers/billing-portal-subscriptions-customers';
import get_subscriptions_customers from './subscriptions/customers/get-subscriptions-customers';
import create_subscriptions_plans from './subscriptions/plans/create-subscriptions-plans';
import update_subscriptions_plans from './subscriptions/plans/update-subscriptions-plans';
import list_subscriptions_plans from './subscriptions/plans/list-subscriptions-plans';
import archive_subscriptions_plans from './subscriptions/plans/archive-subscriptions-plans';
import get_subscriptions_plans from './subscriptions/plans/get-subscriptions-plans';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_subscriptions_customers);
addEndpoint(update_subscriptions_customers);
addEndpoint(list_subscriptions_customers);
addEndpoint(delete_subscriptions_customers);
addEndpoint(billing_portal_subscriptions_customers);
addEndpoint(get_subscriptions_customers);
addEndpoint(create_subscriptions_plans);
addEndpoint(update_subscriptions_plans);
addEndpoint(list_subscriptions_plans);
addEndpoint(archive_subscriptions_plans);
addEndpoint(get_subscriptions_plans);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
