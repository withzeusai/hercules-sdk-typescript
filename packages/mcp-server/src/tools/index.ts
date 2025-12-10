// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import cancel_beta_subscriptions from './beta/subscriptions/cancel-beta-subscriptions';
import check_beta_subscriptions from './beta/subscriptions/check-beta-subscriptions';
import checkout_beta_subscriptions from './beta/subscriptions/checkout-beta-subscriptions';
import create_subscriptions_beta_customers from './beta/subscriptions/customers/create-subscriptions-beta-customers';
import update_subscriptions_beta_customers from './beta/subscriptions/customers/update-subscriptions-beta-customers';
import list_subscriptions_beta_customers from './beta/subscriptions/customers/list-subscriptions-beta-customers';
import delete_subscriptions_beta_customers from './beta/subscriptions/customers/delete-subscriptions-beta-customers';
import billing_portal_subscriptions_beta_customers from './beta/subscriptions/customers/billing-portal-subscriptions-beta-customers';
import get_subscriptions_beta_customers from './beta/subscriptions/customers/get-subscriptions-beta-customers';
import create_subscriptions_beta_plans from './beta/subscriptions/plans/create-subscriptions-beta-plans';
import update_subscriptions_beta_plans from './beta/subscriptions/plans/update-subscriptions-beta-plans';
import list_subscriptions_beta_plans from './beta/subscriptions/plans/list-subscriptions-beta-plans';
import archive_subscriptions_beta_plans from './beta/subscriptions/plans/archive-subscriptions-beta-plans';
import get_subscriptions_beta_plans from './beta/subscriptions/plans/get-subscriptions-beta-plans';
import list_plans_subscriptions_beta_entitlements from './beta/subscriptions/plans/entitlements/list-plans-subscriptions-beta-entitlements';
import attach_plans_subscriptions_beta_entitlements from './beta/subscriptions/plans/entitlements/attach-plans-subscriptions-beta-entitlements';
import remove_plans_subscriptions_beta_entitlements from './beta/subscriptions/plans/entitlements/remove-plans-subscriptions-beta-entitlements';
import create_subscriptions_beta_entitlements from './beta/subscriptions/entitlements/create-subscriptions-beta-entitlements';
import update_subscriptions_beta_entitlements from './beta/subscriptions/entitlements/update-subscriptions-beta-entitlements';
import list_subscriptions_beta_entitlements from './beta/subscriptions/entitlements/list-subscriptions-beta-entitlements';
import get_subscriptions_beta_entitlements from './beta/subscriptions/entitlements/get-subscriptions-beta-entitlements';
import create_subscriptions_beta_coupons from './beta/subscriptions/coupons/create-subscriptions-beta-coupons';
import update_subscriptions_beta_coupons from './beta/subscriptions/coupons/update-subscriptions-beta-coupons';
import list_subscriptions_beta_coupons from './beta/subscriptions/coupons/list-subscriptions-beta-coupons';
import delete_subscriptions_beta_coupons from './beta/subscriptions/coupons/delete-subscriptions-beta-coupons';
import get_subscriptions_beta_coupons from './beta/subscriptions/coupons/get-subscriptions-beta-coupons';
import validate_subscriptions_beta_coupons from './beta/subscriptions/coupons/validate-subscriptions-beta-coupons';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(cancel_beta_subscriptions);
addEndpoint(check_beta_subscriptions);
addEndpoint(checkout_beta_subscriptions);
addEndpoint(create_subscriptions_beta_customers);
addEndpoint(update_subscriptions_beta_customers);
addEndpoint(list_subscriptions_beta_customers);
addEndpoint(delete_subscriptions_beta_customers);
addEndpoint(billing_portal_subscriptions_beta_customers);
addEndpoint(get_subscriptions_beta_customers);
addEndpoint(create_subscriptions_beta_plans);
addEndpoint(update_subscriptions_beta_plans);
addEndpoint(list_subscriptions_beta_plans);
addEndpoint(archive_subscriptions_beta_plans);
addEndpoint(get_subscriptions_beta_plans);
addEndpoint(list_plans_subscriptions_beta_entitlements);
addEndpoint(attach_plans_subscriptions_beta_entitlements);
addEndpoint(remove_plans_subscriptions_beta_entitlements);
addEndpoint(create_subscriptions_beta_entitlements);
addEndpoint(update_subscriptions_beta_entitlements);
addEndpoint(list_subscriptions_beta_entitlements);
addEndpoint(get_subscriptions_beta_entitlements);
addEndpoint(create_subscriptions_beta_coupons);
addEndpoint(update_subscriptions_beta_coupons);
addEndpoint(list_subscriptions_beta_coupons);
addEndpoint(delete_subscriptions_beta_coupons);
addEndpoint(get_subscriptions_beta_coupons);
addEndpoint(validate_subscriptions_beta_coupons);

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
