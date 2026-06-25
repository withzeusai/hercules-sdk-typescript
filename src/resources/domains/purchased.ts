// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Purchased extends APIResource {
  /**
   * Initiates a domain purchase. Verifies availability, creates a payment invoice,
   * and begins the registration process. If the payment requires 3D Secure
   * authentication, the response includes a client_secret for confirmation.
   */
  create(body: PurchasedCreateParams, options?: RequestOptions): APIPromise<PurchasedCreateResponse> {
    return this._client.post('/v1/domains/purchase', { body, ...options });
  }

  /**
   * Retrieves a paginated list of domains purchased by the organization.
   */
  list(
    query: PurchasedListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PurchasedDomainsCursorIDPage, PurchasedDomain> {
    return this._client.getAPIList('/v1/domains/purchased', CursorIDPage<PurchasedDomain>, {
      query,
      ...options,
    });
  }

  /**
   * Confirms a domain purchase after 3D Secure authentication has been completed.
   * Call this endpoint after the customer has authenticated with their bank.
   */
  confirm(body: PurchasedConfirmParams, options?: RequestOptions): APIPromise<PurchasedConfirmResponse> {
    return this._client.post('/v1/domains/purchase/confirm', { body, ...options });
  }

  /**
   * Retrieves details of a specific purchased domain by its ID.
   */
  get(domainID: string, options?: RequestOptions): APIPromise<PurchasedDomain> {
    return this._client.get(path`/v1/domains/purchased/${domainID}`, options);
  }
}

export type PurchasedDomainsCursorIDPage = CursorIDPage<PurchasedDomain>;

/**
 * A domain purchased through the platform.
 */
export interface PurchasedDomain {
  /**
   * Unique identifier for the purchased domain
   */
  id: string;

  /**
   * Whether automatic renewal is enabled
   */
  autorenew: boolean;

  /**
   * Timestamp when the record was created
   */
  created: string;

  /**
   * The full domain name (e.g., 'example.com')
   */
  domain_name: string;

  /**
   * Timestamp when the domain expires
   */
  expires_at: string | null;

  /**
   * Whether this is a premium domain
   */
  is_premium: boolean;

  /**
   * Whether the domain is locked to prevent transfers
   */
  locked: boolean;

  /**
   * Nameservers assigned to the domain
   */
  nameservers: Array<string> | null;

  /**
   * Whether WHOIS privacy protection is enabled
   */
  privacy_enabled: boolean;

  /**
   * Purchase price in USD
   */
  purchase_price: string;

  /**
   * Timestamp when the domain was registered
   */
  registered_at: string | null;

  /**
   * Annual renewal price in USD
   */
  renewal_price: string | null;

  /**
   * Second-level domain (e.g., 'example')
   */
  sld: string;

  /**
   * Current status of the domain registration
   */
  status: 'pending' | 'active' | 'expired' | 'cancelled' | 'transferring' | 'failed';

  /**
   * Top-level domain (e.g., 'com')
   */
  tld: string;

  /**
   * Timestamp when the record was last updated
   */
  updated: string;

  /**
   * Number of years registered
   */
  years: number;
}

/**
 * Domain purchase result
 */
export interface PurchasedCreateResponse {
  /**
   * Stripe client secret for 3D Secure confirmation, if required
   */
  client_secret: string | null;

  /**
   * A domain purchased through the platform.
   */
  domain: PurchasedDomain | null;

  /**
   * Stripe invoice ID for this purchase
   */
  invoice_id: string;

  /**
   * Payment status: 'succeeded' if paid, 'requires_action' if 3D Secure is needed
   */
  status: 'succeeded' | 'requires_action';
}

/**
 * Domain purchase confirmation result
 */
export interface PurchasedConfirmResponse {
  /**
   * A domain purchased through the platform.
   */
  domain: PurchasedDomain;
}

export interface PurchasedCreateParams {
  /**
   * The domain name to purchase
   */
  domain_name: string;

  /**
   * Whether to enable automatic renewal
   */
  autorenew?: boolean;

  /**
   * Stripe payment method ID. Falls back to the customer's default payment method.
   */
  payment_method_id?: string;

  /**
   * The website to associate the domain with. Falls back to the website associated
   * with the API key.
   */
  website_id?: string;

  /**
   * Number of years to register (1-10)
   */
  years?: number;
}

export interface PurchasedListParams extends CursorIDPageParams {
  /**
   * Filter by domain status
   */
  status?: 'pending' | 'active' | 'expired' | 'cancelled' | 'transferring' | 'failed';
}

export interface PurchasedConfirmParams {
  /**
   * The domain name being purchased
   */
  domain_name: string;

  /**
   * Stripe invoice ID from the purchase request
   */
  invoice_id: string;

  /**
   * The website to associate the domain with
   */
  website_id: string;

  /**
   * Whether to enable automatic renewal
   */
  autorenew?: boolean;

  /**
   * Number of years to register
   */
  years?: number;
}

export declare namespace Purchased {
  export {
    type PurchasedDomain as PurchasedDomain,
    type PurchasedCreateResponse as PurchasedCreateResponse,
    type PurchasedConfirmResponse as PurchasedConfirmResponse,
    type PurchasedDomainsCursorIDPage as PurchasedDomainsCursorIDPage,
    type PurchasedCreateParams as PurchasedCreateParams,
    type PurchasedListParams as PurchasedListParams,
    type PurchasedConfirmParams as PurchasedConfirmParams,
  };
}
