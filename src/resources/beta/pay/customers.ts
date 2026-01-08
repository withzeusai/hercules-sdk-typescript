// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Customers extends APIResource {
  /**
   * Creates a new billable customer. A customer represents the entity in your app
   * that will be charged—typically a user, organization, or project. Hercules
   * recommends creating a customer immediately after creating the corresponding
   * entity in your app.
   */
  create(body: CustomerCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<Customer> {
    return this._client.post('/v1/pay/customers', { body, ...options });
  }

  /**
   * Updates an existing customer. Use this to modify contact information or billing
   * address. Only provided fields are updated; omitted fields remain unchanged.
   */
  update(
    customerID: string,
    body: CustomerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Customer> {
    return this._client.patch(path`/v1/pay/customers/${customerID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of all customers. Customers are the billable entities
   * in your app—typically users, organizations, or projects.
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CustomersCursorIDPage, Customer> {
    return this._client.getAPIList('/v1/pay/customers', CursorIDPage<Customer>, { query, ...options });
  }

  /**
   * Permanently deletes a customer. This also cancels any active subscriptions. This
   * action cannot be undone.
   */
  delete(customerID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/pay/customers/${customerID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Generates a URL to a hosted billing portal where the customer can view invoices,
   * update payment methods, and manage billing details. Redirect the customer to the
   * returned URL.
   */
  billingPortal(
    customerID: string,
    body: CustomerBillingPortalParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerBillingPortalResponse> {
    return this._client.post(path`/v1/pay/customers/${customerID}/billing_portal`, { body, ...options });
  }

  /**
   * Retrieves a customer by ID. Returns the customer object including contact
   * information and billing address.
   */
  get(customerID: string, options?: RequestOptions): APIPromise<Customer> {
    return this._client.get(path`/v1/pay/customers/${customerID}`, options);
  }
}

export type CustomersCursorIDPage = CursorIDPage<Customer>;

/**
 * A billable customer. Represents the entity in your app that will be
 * charged—typically a user, organization, or project.
 */
export interface Customer {
  /**
   * Unique identifier for the topic subscription
   */
  id: string;

  /**
   * Timestamp when the customer was created
   */
  created: string;

  /**
   * The customer's billing address
   */
  address?: CustomerAddress | null;

  /**
   * The customer's email address for receipts and notifications
   */
  email?: string | null;

  /**
   * The customer's full name
   */
  name?: string | null;

  /**
   * The customer's phone number
   */
  phone?: string | null;
}

/**
 * The customer's billing address
 */
export interface CustomerAddress {
  /**
   * City name
   */
  city?: string | null;

  /**
   * Two-letter ISO country code
   */
  country?: string | null;

  /**
   * Street address line 1
   */
  line1?: string | null;

  /**
   * Street address line 2 (apartment, suite, etc.)
   */
  line2?: string | null;

  /**
   * Postal or ZIP code
   */
  postal_code?: string | null;

  /**
   * State, province, or region
   */
  state?: string | null;
}

/**
 * Response containing the billing portal URL
 */
export interface CustomerBillingPortalResponse {
  /**
   * URL to redirect the customer to for the billing portal
   */
  url: string;
}

export interface CustomerCreateParams {
  /**
   * Optional custom ID for the customer. If not provided, one will be generated.
   */
  id?: string;

  /**
   * The customer's billing address
   */
  address?: CustomerAddress;

  /**
   * The customer's email address for receipts and notifications
   */
  email?: string;

  /**
   * The customer's full name
   */
  name?: string;

  /**
   * The customer's phone number
   */
  phone?: string;
}

export interface CustomerUpdateParams {
  /**
   * The customer's billing address
   */
  address?: CustomerAddress;

  /**
   * The customer's email address for receipts and notifications
   */
  email?: string;

  /**
   * The customer's full name
   */
  name?: string;

  /**
   * The customer's phone number
   */
  phone?: string;
}

export interface CustomerListParams extends CursorIDPageParams {}

export interface CustomerBillingPortalParams {
  /**
   * URL to redirect the customer to after they exit the billing portal
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
