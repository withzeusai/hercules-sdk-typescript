// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Customers extends APIResource {
  /**
   * Create Customer
   */
  create(body: CustomerCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<Customer> {
    return this._client.post('/subscriptions/v1/customers', { body, ...options });
  }

  /**
   * Update Customer
   */
  update(
    id: string,
    body: CustomerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Customer> {
    return this._client.patch(path`/subscriptions/v1/customers/${id}`, { body, ...options });
  }

  /**
   * List Customers
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CustomersCursorIDPage, Customer> {
    return this._client.getAPIList('/subscriptions/v1/customers', CursorIDPage<Customer>, {
      query,
      ...options,
    });
  }

  /**
   * Delete Customer
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/subscriptions/v1/customers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Open Customer Portal
   */
  billingPortal(
    id: string,
    body: CustomerBillingPortalParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerBillingPortalResponse> {
    return this._client.post(path`/subscriptions/v1/customers/${id}/billing_portal`, { body, ...options });
  }

  /**
   * Get Customer
   */
  get(id: string, options?: RequestOptions): APIPromise<Customer> {
    return this._client.get(path`/subscriptions/v1/customers/${id}`, options);
  }
}

export type CustomersCursorIDPage = CursorIDPage<Customer>;

/**
 * A subscription customer
 */
export interface Customer {
  /**
   * An id for a data item
   */
  id: string;

  created: string;

  email?: string | null;

  name?: string | null;

  stripe_id?: string | null;
}

/**
 * Billing portal session URL
 */
export interface CustomerBillingPortalResponse {
  url: string;
}

export interface CustomerCreateParams {
  email?: string;

  name?: string;
}

export interface CustomerUpdateParams {
  email?: string;

  name?: string;
}

export interface CustomerListParams extends CursorIDPageParams {}

export interface CustomerBillingPortalParams {
  return_url?: string;
}

export declare namespace Customers {
  export {
    type Customer as Customer,
    type CustomerBillingPortalResponse as CustomerBillingPortalResponse,
    type CustomersCursorIDPage as CustomersCursorIDPage,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerBillingPortalParams as CustomerBillingPortalParams,
  };
}
