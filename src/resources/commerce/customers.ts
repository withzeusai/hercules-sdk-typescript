// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Customers extends APIResource {
  /**
   * Creates a new billable customer. A customer represents the entity in your app
   * that will be charged—typically a user, organization, or project. Hercules
   * recommends creating a customer immediately after creating the corresponding
   * entity in your app.
   *
   * @example
   * ```ts
   * const customer = await client.commerce.customers.create();
   * ```
   */
  create(body: CustomerCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<Customer> {
    return this._client.post('/v1/commerce/customers', { body, ...options });
  }

  /**
   * Updates an existing customer. Use this to modify contact information or billing
   * address. Only provided fields are updated; omitted fields remain unchanged.
   *
   * @example
   * ```ts
   * const customer = await client.commerce.customers.update(
   *   'cus_1234567890',
   * );
   * ```
   */
  update(
    customerID: string,
    body: CustomerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Customer> {
    return this._client.patch(path`/v1/commerce/customers/${customerID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of all customers. Customers are the billable entities
   * in your app—typically users, organizations, or projects.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customer of client.commerce.customers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CustomersCursorIDPage, Customer> {
    return this._client.getAPIList('/v1/commerce/customers', CursorIDPage<Customer>, { query, ...options });
  }

  /**
   * Generates a URL to a hosted billing portal where the customer can view invoices,
   * update payment methods, and manage billing details. Redirect the customer to the
   * returned URL.
   *
   * @example
   * ```ts
   * const response =
   *   await client.commerce.customers.billingPortal(
   *     'cus_1234567890',
   *   );
   * ```
   */
  billingPortal(
    customerID: string,
    body: CustomerBillingPortalParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerBillingPortalResponse> {
    return this._client.post(path`/v1/commerce/customers/${customerID}/billing_portal`, { body, ...options });
  }

  /**
   * Retrieves a customer by ID. Returns the customer object including contact
   * information, billing address, active subscriptions, recent invoices, and saved
   * payment methods.
   *
   * @example
   * ```ts
   * const customer = await client.commerce.customers.get(
   *   'cus_1234567890',
   * );
   * ```
   */
  get(customerID: string, options?: RequestOptions): APIPromise<CustomerGetResponse> {
    return this._client.get(path`/v1/commerce/customers/${customerID}`, options);
  }
}

export type CustomersCursorIDPage = CursorIDPage<Customer>;

/**
 * A billable customer. Represents the entity in your app that will be
 * charged—typically a user, organization, or project.
 */
export interface Customer {
  /**
   * Unique identifier for the customer
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

/**
 * A billable customer with detailed subscription, invoice, and payment method
 * information.
 */
export interface CustomerGetResponse {
  /**
   * Unique identifier for the customer
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
   * Current customer balance in cents (negative = credit available to apply to
   * future invoices)
   */
  balance?: number;

  /**
   * The customer's email address for receipts and notifications
   */
  email?: string | null;

  /**
   * Customer's recent invoices (up to 10)
   */
  invoices?: Array<CustomerGetResponse.Invoice>;

  /**
   * The customer's full name
   */
  name?: string | null;

  /**
   * Customer's saved payment methods
   */
  payment_methods?: Array<CustomerGetResponse.PaymentMethod>;

  /**
   * The customer's phone number
   */
  phone?: string | null;

  /**
   * Customer's active subscriptions
   */
  subscriptions?: Array<CustomerGetResponse.Subscription>;
}

export namespace CustomerGetResponse {
  /**
   * An invoice for a customer
   */
  export interface Invoice {
    /**
     * Unique identifier for the invoice
     */
    id: string;

    /**
     * Total amount due in cents
     */
    amount_due: number;

    /**
     * Amount already paid in cents
     */
    amount_paid: number;

    /**
     * Amount remaining to be paid in cents
     */
    amount_remaining: number;

    /**
     * Timestamp when the invoice was created
     */
    created: string;

    /**
     * Currency code (e.g., 'usd')
     */
    currency: string;

    /**
     * Subtotal before tax in cents
     */
    subtotal: number;

    /**
     * Total amount in cents
     */
    total: number;

    /**
     * When the invoice is due
     */
    due_date?: string | null;

    /**
     * URL to view the invoice online
     */
    hosted_invoice_url?: string | null;

    /**
     * URL to download the invoice PDF
     */
    invoice_pdf?: string | null;

    /**
     * Invoice number for display
     */
    number?: string | null;

    /**
     * When the invoice was paid, if applicable
     */
    paid_at?: string | null;

    /**
     * End of the billing period
     */
    period_end?: string | null;

    /**
     * Start of the billing period
     */
    period_start?: string | null;

    /**
     * Current status of the invoice
     */
    status?: 'draft' | 'open' | 'paid' | 'void' | 'uncollectible' | null;
  }

  /**
   * A saved payment method for a customer
   */
  export interface PaymentMethod {
    /**
     * Unique identifier for the payment method
     */
    id: string;

    /**
     * Timestamp when the payment method was added
     */
    created: string;

    /**
     * Whether this is the default payment method
     */
    is_default: boolean;

    /**
     * Type of payment method
     */
    type: 'card' | 'us_bank_account' | 'sepa_debit' | 'link' | 'other';

    /**
     * Card details, if payment method is a card
     */
    card?: PaymentMethod.Card | null;
  }

  export namespace PaymentMethod {
    /**
     * Card details, if payment method is a card
     */
    export interface Card {
      /**
       * Card brand (e.g., 'visa', 'mastercard')
       */
      brand: string;

      /**
       * Expiration month (1-12)
       */
      exp_month: number;

      /**
       * Expiration year (4 digits)
       */
      exp_year: number;

      /**
       * Last 4 digits of the card number
       */
      last4: string;
    }
  }

  /**
   * A customer subscription to a product
   */
  export interface Subscription {
    /**
     * Unique identifier for the subscription
     */
    id: string;

    /**
     * Whether the subscription will cancel at period end
     */
    cancel_at_period_end: boolean;

    /**
     * Timestamp when the subscription was created
     */
    created: string;

    /**
     * End of the current billing period
     */
    current_period_end: string;

    /**
     * Start of the current billing period
     */
    current_period_start: string;

    /**
     * The product this subscription is for
     */
    product: Subscription.Product;

    /**
     * Current status of the subscription
     */
    status:
      | 'active'
      | 'canceled'
      | 'incomplete'
      | 'incomplete_expired'
      | 'past_due'
      | 'paused'
      | 'trialing'
      | 'unpaid';

    /**
     * When the subscription was canceled, if applicable
     */
    canceled_at?: string | null;

    /**
     * End of trial period, if applicable
     */
    trial_end?: string | null;

    /**
     * Start of trial period, if applicable
     */
    trial_start?: string | null;

    /**
     * The variant (tier/plan) of this subscription, if applicable
     */
    variant?: Subscription.Variant | null;
  }

  export namespace Subscription {
    /**
     * The product this subscription is for
     */
    export interface Product {
      /**
       * Unique identifier for the product
       */
      id: string;

      /**
       * Product name
       */
      name: string;
    }

    /**
     * The variant (tier/plan) of this subscription, if applicable
     */
    export interface Variant {
      /**
       * Unique identifier for the variant
       */
      id: string;

      /**
       * Variant name
       */
      name: string;
    }
  }
}

export interface CustomerCreateParams {
  /**
   * Optional custom ID for the customer. Must start with 'cus\_'. If not provided,
   * one will be generated.
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

export interface CustomerListParams extends CursorIDPageParams {
  /**
   * Filter by creation date. Accepts an object with gt, gte, lt, lte operators using
   * Unix timestamps.
   */
  created?: CustomerListParams.Created;

  /**
   * Filter by exact email address match.
   */
  email?: string;

  /**
   * Search query to filter customers. Searches across name, email, and ID fields
   * (case-insensitive).
   */
  query?: string;

  /**
   * Sort order for customers. Prefix with '-' for descending order. Valid values:
   * name, -name, email, -email, created, -created. Default: -created (newest first).
   */
  sort?: string;
}

export namespace CustomerListParams {
  /**
   * Filter by creation date. Accepts an object with gt, gte, lt, lte operators using
   * Unix timestamps.
   */
  export interface Created {
    /**
     * Greater than (Unix timestamp)
     */
    gt?: number;

    /**
     * Greater than or equal to (Unix timestamp)
     */
    gte?: number;

    /**
     * Less than (Unix timestamp)
     */
    lt?: number;

    /**
     * Less than or equal to (Unix timestamp)
     */
    lte?: number;
  }
}

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
    type CustomerGetResponse as CustomerGetResponse,
    type CustomersCursorIDPage as CustomersCursorIDPage,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerBillingPortalParams as CustomerBillingPortalParams,
  };
}
