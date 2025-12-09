// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
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
  list(options?: RequestOptions): APIPromise<CustomerListResponse> {
    return this._client.get('/subscriptions/v1/customers', options);
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
  createBillingPortal(
    id: string,
    body: CustomerCreateBillingPortalParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerCreateBillingPortalResponse> {
    return this._client.post(path`/subscriptions/v1/customers/${id}/billing_portal`, { body, ...options });
  }

  /**
   * Get Customer
   */
  get(id: string, options?: RequestOptions): APIPromise<Customer> {
    return this._client.get(path`/subscriptions/v1/customers/${id}`, options);
  }
}

/**
 * A subscription customer
 */
export interface Customer {
  id: string;

  email?: string | null;

  name?: string | null;
}

export type CustomerListResponse = Array<Customer>;

/**
 * Billing portal session URL
 */
export interface CustomerCreateBillingPortalResponse {
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

export interface CustomerCreateBillingPortalParams {
  return_url?: string;
}

export declare namespace Customers {
  export {
    type Customer as Customer,
    type CustomerListResponse as CustomerListResponse,
    type CustomerCreateBillingPortalResponse as CustomerCreateBillingPortalResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerCreateBillingPortalParams as CustomerCreateBillingPortalParams,
  };
}
