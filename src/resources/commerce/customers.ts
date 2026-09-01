// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../core/pagination';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Customers extends APIResource {
  /**
   * Retrieves a paginated list of all customers. Customers are the billable entities in your app—typically users, organizations, or projects.
   *
   * @param {CustomerListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<CustomersCursorIDPage, Customer>} A paginated list of customer objects
   *
   * @example
   * ```ts
   * const page = await client.commerce.customers.list();
   * ```
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CustomersCursorIDPage, Customer> {
    return this._client.getAPIList('/v1/commerce/customers', CursorIDPage<Customer>, { query, ...options });
  }

  /**
   * Retrieves a customer by ID. Returns the customer object including contact information and billing address.
   *
   * @param {string} customerID - The unique identifier of the customer
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomerGetResponse>} The customer object
   *
   * @example
   * ```ts
   * const customer = await client.commerce.customers.get('cus_1234567890');
   * ```
   */
  get(customerID: string, options?: RequestOptions): APIPromise<CustomerGetResponse> {
    return this._client.get(__scalarPath`/v1/commerce/customers/${customerID}`, options);
  }

  /**
   * Creates a new billable customer. A customer represents the entity in your app that will be charged—typically a user, organization, or project. Hercules recommends creating a customer immediately after creating the corresponding entity in your app.
   *
   * @param {CustomerCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Customer>} The created customer object
   *
   * @example
   * ```ts
   * const customer = await client.commerce.customers.create({});
   * ```
   */
  create(body: CustomerCreateParams, options?: RequestOptions): APIPromise<Customer> {
    return this._client.post('/v1/commerce/customers', { body, ...options });
  }

  /**
   * Updates an existing customer. Use this to modify contact information or billing address. Only provided fields are updated; omitted fields remain unchanged.
   *
   * @param {string} customerID - The unique identifier of the customer
   * @param {CustomerUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Customer>} The updated customer object
   *
   * @example
   * ```ts
   * const customer = await client.commerce.customers.update('cus_1234567890', {});
   * ```
   */
  update(customerID: string, body: CustomerUpdateParams, options?: RequestOptions): APIPromise<Customer> {
    return this._client.patch(__scalarPath`/v1/commerce/customers/${customerID}`, { body, ...options });
  }

  /**
   * Generates a URL to a hosted billing portal where the customer can view invoices, update payment methods, and manage billing details. Redirect the customer to the returned URL.
   *
   * @param {string} customerID - The unique identifier of the customer
   * @param {CustomerBillingPortalParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomerBillingPortalResponse>} The billing portal session containing the redirect URL
   *
   * @example
   * ```ts
   * const customer = await client.commerce.customers.billingPortal('cus_1234567890', {});
   * ```
   */
  billingPortal(
    customerID: string,
    body: CustomerBillingPortalParams,
    options?: RequestOptions,
  ): APIPromise<CustomerBillingPortalResponse> {
    return this._client.post(__scalarPath`/v1/commerce/customers/${customerID}/billing_portal`, {
      body,
      ...options,
    });
  }
}

/**
 * A billable customer. Represents the entity in your app that will be charged—typically a user, organization, or project.
 */
export interface Customer {
  /**
   * Unique identifier for the customer
   */
  id: string;
  /**
   * Timestamp when the customer was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * Environment this response was served from. Sandbox data and live data never mix; the environment comes from the credential and the surface, not from the request.
   */
  environment: 'sandbox' | 'live';
  /**
   * The customer's full name
   */
  name?: string | null;
  /**
   * The customer's email address for receipts and notifications
   */
  email?: string | null;
  /**
   * The customer's phone number
   */
  phone?: string | null;
  address?: CustomerAddress | null;
}

/**
 * The customer's billing address
 */
export interface CustomerAddress {
  /**
   * Street address line 1
   * @maxLength 200
   */
  line1?: string | null;
  /**
   * Street address line 2 (apartment, suite, etc.)
   * @maxLength 200
   */
  line2?: string | null;
  /**
   * City name
   * @maxLength 100
   */
  city?: string | null;
  /**
   * State, province, or region
   * @maxLength 100
   */
  state?: string | null;
  /**
   * Postal or ZIP code
   * @maxLength 20
   */
  postal_code?: string | null;
  /**
   * Two-letter ISO country code
   * @minLength 2
   * @maxLength 2
   */
  country?: string | null;
}

export interface CustomerListParams extends CursorIDPageParams {
  /**
   * Search query to filter customers. Searches across name, email, and ID fields (case-insensitive).
   * @maxLength 500
   */
  query?: string;
  /**
   * Filter by exact email address match.
   * @maxLength 320
   */
  email?: string;
  /**
   * Filter by creation date. Accepts an object with gt, gte, lt, lte operators using Unix timestamps.
   */
  created?: CustomerListParams.Created;
  /**
   * Sort order for customers. Prefix with '-' for descending order. Valid values: name, -name, email, -email, created, -created. Default: -created (newest first).
   * @pattern ^-?(name|email|created)$
   */
  sort?: string;
}

export namespace CustomerListParams {
  export interface Created {
    /**
     * Greater than (Unix timestamp)
     * @minimum 0
     * @maximum 9007199254740991
     */
    gt?: number;
    /**
     * Greater than or equal to (Unix timestamp)
     * @minimum 0
     * @maximum 9007199254740991
     */
    gte?: number;
    /**
     * Less than (Unix timestamp)
     * @minimum 0
     * @maximum 9007199254740991
     */
    lt?: number;
    /**
     * Less than or equal to (Unix timestamp)
     * @minimum 0
     * @maximum 9007199254740991
     */
    lte?: number;
  }
}

export type CustomersCursorIDPage = CursorIDPage<Customer>;

export interface CustomerGetResponse {
  /**
   * Unique identifier for the customer
   */
  id: string;
  /**
   * Timestamp when the customer was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * Environment this response was served from. Sandbox data and live data never mix; the environment comes from the credential and the surface, not from the request.
   */
  environment: 'sandbox' | 'live';
  /**
   * The customer's full name
   */
  name?: string | null;
  /**
   * The customer's email address for receipts and notifications
   */
  email?: string | null;
  /**
   * The customer's phone number
   */
  phone?: string | null;
  address?: CustomerAddress | null;
}

export interface CustomerCreateParams {
  /**
   * Optional custom ID for the customer. Must start with 'cus_'. If not provided, one will be generated.
   * @minLength 5
   * @maxLength 255
   * @pattern ^cus_[\w-]+$
   */
  id?: string;
  /**
   * The customer's full name
   * @maxLength 250
   */
  name?: string;
  /**
   * The customer's email address for receipts and notifications
   * @format email
   * @maxLength 320
   * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
   */
  email?: string;
  /**
   * The customer's phone number in E.164 format (e.g., +14155551234)
   * @format e164
   * @pattern ^\+[1-9]\d{6,14}$
   */
  phone?: string;
  /**
   * The customer's billing address
   */
  address?: CustomerAddress;
}

export interface CustomerUpdateParams {
  /**
   * The customer's full name
   * @maxLength 250
   */
  name?: string;
  /**
   * The customer's email address for receipts and notifications
   * @format email
   * @maxLength 320
   * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
   */
  email?: string;
  /**
   * The customer's phone number in E.164 format (e.g., +14155551234)
   * @format e164
   * @pattern ^\+[1-9]\d{6,14}$
   */
  phone?: string;
  /**
   * The customer's billing address
   */
  address?: CustomerAddress;
}

export interface CustomerBillingPortalParams {
  /**
   * URL to redirect the customer to after they exit the billing portal
   * @format uri
   */
  return_url?: string;
}

export interface CustomerBillingPortalResponse {
  /**
   * URL to redirect the customer to for the billing portal
   */
  url: string;
  /**
   * Environment this response was served from. Sandbox data and live data never mix; the environment comes from the credential and the surface, not from the request.
   */
  environment: 'sandbox' | 'live';
}
export declare namespace Customers {
  export {
    type Customer as Customer,
    type CustomerAddress as CustomerAddress,
    type CustomersCursorIDPage as CustomersCursorIDPage,
    type CustomerGetResponse as CustomerGetResponse,
    type CustomerBillingPortalResponse as CustomerBillingPortalResponse,
    type CustomerListParams as CustomerListParams,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerBillingPortalParams as CustomerBillingPortalParams,
  };
}
