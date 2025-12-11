// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Customers extends APIResource {
  /**
   * Creates a new customer
   */
  create(body: CustomerCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<Customer> {
    return this._client.post('/v1/subscriptions/customers', { body, ...options });
  }

  /**
   * Updates a customer by their ID
   */
  update(
    customerID: string,
    body: CustomerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Customer> {
    return this._client.patch(path`/v1/subscriptions/customers/${customerID}`, { body, ...options });
  }

  /**
   * Lists all customers
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CustomersCursorIDPage, Customer> {
    return this._client.getAPIList('/v1/subscriptions/customers', CursorIDPage<Customer>, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a customer by their ID
   */
  delete(customerID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/subscriptions/customers/${customerID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Opens a customer portal for a customer by their ID
   */
  billingPortal(
    customerID: string,
    body: CustomerBillingPortalParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerBillingPortalResponse> {
    return this._client.post(path`/v1/subscriptions/customers/${customerID}/billing_portal`, {
      body,
      ...options,
    });
  }

  /**
   * Gets a customer by their ID
   */
  get(customerID: string, options?: RequestOptions): APIPromise<Customer> {
    return this._client.get(path`/v1/subscriptions/customers/${customerID}`, options);
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

  /**
   * Customer billing address
   */
  address?: CustomerAddress | null;

  email?: string | null;

  name?: string | null;

  phone?: string | null;

  stripe_id?: string | null;
}

/**
 * Customer billing address
 */
export interface CustomerAddress {
  city?: string | null;

  country?: string | null;

  line1?: string | null;

  line2?: string | null;

  postal_code?: string | null;

  state?: string | null;
}

/**
 * Billing portal session URL
 */
export interface CustomerBillingPortalResponse {
  url: string;
}

export interface CustomerCreateParams {
  /**
   * Customer billing address
   */
  address?: CustomerAddress;

  email?: string;

  name?: string;

  phone?: string;
}

export interface CustomerUpdateParams {
  /**
   * Customer billing address
   */
  address?: CustomerAddress;

  email?: string;

  name?: string;

  phone?: string;
}

export interface CustomerListParams extends CursorIDPageParams {}

export interface CustomerBillingPortalParams {
  return_url?: string;
}

export declare namespace Customers {
  export {
    type Customer as Customer,
    type CustomerAddress as CustomerAddress,
    type CustomerBillingPortalResponse as CustomerBillingPortalResponse,
    type CustomersCursorIDPage as CustomersCursorIDPage,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerBillingPortalParams as CustomerBillingPortalParams,
  };
}
