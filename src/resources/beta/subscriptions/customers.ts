// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Customers extends APIResource {
  /**
   * Create a new billable customer. Customers are the billable entities that can
   * subscribe to plans. Create this immediately after creating the corresponding
   * user, organization, or project in your app.
   */
  create(body: CustomerCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<Customer> {
    return this._client.post('/v1/subscriptions/customers', { body, ...options });
  }

  /**
   * Update customer billing information such as name, email, phone, and address.
   */
  update(
    customerID: string,
    body: CustomerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Customer> {
    return this._client.patch(path`/v1/subscriptions/customers/${customerID}`, { body, ...options });
  }

  /**
   * Retrieve all billable customers. Customers represent the end users,
   * organizations, or projects that can subscribe to plans in your app.
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
   * Permanently delete a customer and all associated billing data. This action
   * cannot be undone.
   */
  delete(customerID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/subscriptions/customers/${customerID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Generate a secure link to the Stripe-hosted billing portal where customers can
   * manage their invoices, receipts, billing information, and payment methods.
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
   * Retrieve a specific customer by ID, including their billing information and
   * Stripe details.
   */
  get(customerID: string, options?: RequestOptions): APIPromise<Customer> {
    return this._client.get(path`/v1/subscriptions/customers/${customerID}`, options);
  }
}

export type CustomersCursorIDPage = CursorIDPage<Customer>;

/**
 * Billable customer entity representing end users, organizations, or projects that
 * can subscribe to plans
 */
export interface Customer {
  /**
   * An id for a data item
   */
  id: string;

  /**
   * Customer creation timestamp
   */
  created: string;

  /**
   * Customer billing address
   */
  address?: CustomerAddress | null;

  /**
   * Customer email address
   */
  email?: string | null;

  /**
   * Customer full name
   */
  name?: string | null;

  /**
   * Customer phone number
   */
  phone?: string | null;

  /**
   * Associated Stripe customer ID
   */
  stripe_id?: string | null;
}

/**
 * Customer billing address
 */
export interface CustomerAddress {
  /**
   * City name
   */
  city?: string | null;

  /**
   * Two-letter country code (e.g., US, CA)
   */
  country?: string | null;

  /**
   * Primary address line
   */
  line1?: string | null;

  /**
   * Secondary address line
   */
  line2?: string | null;

  /**
   * ZIP or postal code
   */
  postal_code?: string | null;

  /**
   * State or province
   */
  state?: string | null;
}

/**
 * Response containing billing portal session URL
 */
export interface CustomerBillingPortalResponse {
  /**
   * Secure URL to redirect customers to the Stripe billing portal
   */
  url: string;
}

export interface CustomerCreateParams {
  /**
   * Customer billing address
   */
  address?: CustomerAddress;

  /**
   * Customer email address
   */
  email?: string;

  /**
   * Customer full name
   */
  name?: string;

  /**
   * Customer phone number
   */
  phone?: string;
}

export interface CustomerUpdateParams {
  /**
   * Customer billing address
   */
  address?: CustomerAddress;

  /**
   * Customer email address
   */
  email?: string;

  /**
   * Customer full name
   */
  name?: string;

  /**
   * Customer phone number
   */
  phone?: string;
}

export interface CustomerListParams extends CursorIDPageParams {}

export interface CustomerBillingPortalParams {
  /**
   * URL to redirect customers after they exit the portal
   */
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
