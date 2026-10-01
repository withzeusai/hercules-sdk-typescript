// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../core/pagination';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Purchased extends APIResource {
  /**
   * Initiates a domain purchase. Verifies availability, creates a payment invoice, and begins the registration process. If the payment requires 3D Secure authentication, the response includes a client_secret for confirmation.
   *
   * @param {PurchasedCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PurchasedCreateResponse>} Domain purchase initiated
   *
   * @example
   * ```ts
   * const purchased = await client.domains.purchased.create({
   *   domain_name: 'x',
   *   years: 1,
   *   autorenew: true,
   * });
   * ```
   */
  create(body: PurchasedCreateParams, options?: RequestOptions): APIPromise<PurchasedCreateResponse> {
    return this._client.post('/v1/domains/purchase', { body, ...options });
  }

  /**
   * Confirms a domain purchase after 3D Secure authentication has been completed. Call this endpoint after the customer has authenticated with their bank.
   *
   * @param {PurchasedConfirmParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PurchasedConfirmResponse>} Domain purchase confirmed
   *
   * @example
   * ```ts
   * const purchased = await client.domains.purchased.confirm({
   *   invoice_id: 'x',
   *   domain_name: 'x',
   *   website_id: 'x',
   *   years: 1,
   *   autorenew: true,
   * });
   * ```
   */
  confirm(body: PurchasedConfirmParams, options?: RequestOptions): APIPromise<PurchasedConfirmResponse> {
    return this._client.post('/v1/domains/purchase/confirm', { body, ...options });
  }

  /**
   * Retrieves a paginated list of domains purchased by the organization.
   *
   * @param {PurchasedListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<PurchasedDomainsCursorIDPage, PurchasedDomain>} A paginated list of purchased domain objects
   *
   * @example
   * ```ts
   * const page = await client.domains.purchased.list();
   * ```
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
   * Retrieves details of a specific purchased domain by its ID.
   *
   * @param {string} domainID - The purchased domain ID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PurchasedDomain>} The purchased domain object
   *
   * @example
   * ```ts
   * const purchasedDomain = await client.domains.purchased.get('domainId');
   * ```
   */
  get(domainID: string, options?: RequestOptions): APIPromise<PurchasedDomain> {
    return this._client.get(__scalarPath`/v1/domains/purchased/${domainID}`, options);
  }
}

/**
 * A domain purchased through the platform.
 */
export interface PurchasedDomain {
  /**
   * Unique identifier for the purchased domain
   */
  id: string;
  /**
   * The full domain name (e.g., 'example.com')
   */
  domain_name: string;
  /**
   * Top-level domain (e.g., 'com')
   */
  tld: string;
  /**
   * Second-level domain (e.g., 'example')
   */
  sld: string;
  /**
   * Current status of the domain registration
   */
  status: 'pending' | 'active' | 'expired' | 'cancelled' | 'transferring' | 'failed';
  /**
   * Purchase price in USD
   */
  purchase_price: string;
  /**
   * Annual renewal price in USD
   */
  renewal_price: string | null;
  /**
   * Whether this is a premium domain
   */
  is_premium: boolean;
  /**
   * Whether automatic renewal is enabled
   */
  autorenew: boolean;
  /**
   * Whether the domain is locked to prevent transfers
   */
  locked: boolean;
  /**
   * Whether WHOIS privacy protection is enabled
   */
  privacy_enabled: boolean;
  /**
   * Number of years registered
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  years: number;
  /**
   * Timestamp when the domain was registered
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  registered_at: string | null;
  /**
   * Timestamp when the domain expires
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  expires_at: string | null;
  /**
   * Nameservers assigned to the domain
   */
  nameservers: Array<string> | null;
  /**
   * Timestamp when the record was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * Timestamp when the record was last updated
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  updated: string;
}

export interface PurchasedCreateParams {
  /**
   * The domain name to purchase
   * @minLength 1
   */
  domain_name: string;
  /**
   * The website to associate the domain with. Falls back to the website associated with the API key.
   * @minLength 1
   */
  website_id?: string;
  /**
   * Stripe payment method ID. Falls back to the customer's default payment method.
   * @minLength 1
   */
  payment_method_id?: string;
  /**
   * Number of years to register (1-10)
   * @default 1
   * @minimum 1
   * @maximum 10
   */
  years?: number;
  /**
   * Whether to enable automatic renewal
   * @default true
   */
  autorenew?: boolean;
  /**
   * Registry IDN table tag for internationalized domain names (e.g. 'ES', 'GREK'). Required when the name's script maps to more than one of the registry's tables; the error response lists the valid options.
   * @minLength 1
   * @maxLength 16
   */
  idn_language?: string;
}

export interface PurchasedCreateResponse {
  /**
   * Payment status: 'succeeded' if paid, 'requires_action' if 3D Secure is needed
   */
  status: 'succeeded' | 'requires_action';
  /**
   * Stripe client secret for 3D Secure confirmation, if required
   */
  client_secret: string | null;
  /**
   * Stripe invoice ID for this purchase
   */
  invoice_id: string;
  /**
   * The purchased domain record, present when payment succeeds immediately
   */
  domain: PurchasedDomain | null;
}

export interface PurchasedConfirmParams {
  /**
   * Stripe invoice ID from the purchase request
   * @minLength 1
   */
  invoice_id: string;
  /**
   * The domain name being purchased
   * @minLength 1
   */
  domain_name: string;
  /**
   * The website to associate the domain with
   * @minLength 1
   */
  website_id: string;
  /**
   * Number of years to register
   * @default 1
   * @minimum 1
   * @maximum 10
   */
  years?: number;
  /**
   * Whether to enable automatic renewal
   * @default true
   */
  autorenew?: boolean;
}

export interface PurchasedConfirmResponse {
  /**
   * A domain purchased through the platform.
   */
  domain: PurchasedDomain;
}

export interface PurchasedListParams extends CursorIDPageParams {
  /**
   * Filter by domain status
   */
  status?: 'pending' | 'active' | 'expired' | 'cancelled' | 'transferring' | 'failed';
}

export type PurchasedDomainsCursorIDPage = CursorIDPage<PurchasedDomain>;
export declare namespace Purchased {
  export {
    type PurchasedDomain as PurchasedDomain,
    type PurchasedCreateResponse as PurchasedCreateResponse,
    type PurchasedConfirmResponse as PurchasedConfirmResponse,
    type PurchasedDomainsCursorIDPage as PurchasedDomainsCursorIDPage,
    type PurchasedCreateParams as PurchasedCreateParams,
    type PurchasedConfirmParams as PurchasedConfirmParams,
    type PurchasedListParams as PurchasedListParams,
  };
}
