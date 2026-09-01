// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../core/pagination';
import type { RequestOptions } from '../../internal/request-options';
import * as PurchasedAPI from './purchased';
import {
  Purchased,
  type PurchasedDomain,
  type PurchasedCreateResponse,
  type PurchasedConfirmResponse,
  type PurchasedDomainsCursorIDPage,
  type PurchasedCreateParams,
  type PurchasedConfirmParams,
  type PurchasedListParams,
} from './purchased';

export class Domains extends APIResource {
  purchased: PurchasedAPI.Purchased = new PurchasedAPI.Purchased(this._client);

  /**
   * Retrieves a paginated list of custom domains linked to the website, including Cloudflare verification and SSL status.
   *
   * @param {DomainListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<DomainsCursorIDPage, Domain>} A paginated list of domain objects
   *
   * @example
   * ```ts
   * const page = await client.domains.list();
   * ```
   */
  list(
    query: DomainListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DomainsCursorIDPage, Domain> {
    return this._client.getAPIList('/v1/domains', CursorIDPage<Domain>, { query, ...options });
  }

  /**
   * Checks whether the specified domain names are available for registration and returns pricing information.
   *
   * @param {DomainCheckAvailabilityParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DomainCheckAvailabilityResponse>} Domain availability results
   *
   * @example
   * ```ts
   * const domain = await client.domains.checkAvailability({
   *   domains: [],
   * });
   * ```
   */
  checkAvailability(
    body: DomainCheckAvailabilityParams,
    options?: RequestOptions,
  ): APIPromise<DomainCheckAvailabilityResponse> {
    return this._client.post('/v1/domains/check-availability', { body, ...options });
  }

  /**
   * Searches for available domain names based on a keyword and returns suggestions with pricing.
   *
   * @param {DomainSearchParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DomainSearchResponse>} Domain search results
   *
   * @example
   * ```ts
   * const domain = await client.domains.search({
   *   keyword: 'x',
   * });
   * ```
   */
  search(body: DomainSearchParams, options?: RequestOptions): APIPromise<DomainSearchResponse> {
    return this._client.post('/v1/domains/search', { body, ...options });
  }
}

/**
 * A custom domain linked to a website.
 */
export interface Domain {
  /**
   * Unique identifier for the domain
   */
  id: string;
  /**
   * The custom domain hostname (e.g., 'app.example.com')
   */
  hostname: string;
  /**
   * Whether this is a wildcard domain
   */
  wildcard: boolean;
  /**
   * Timestamp when the domain was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * Timestamp when the domain was last updated
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  updated: string;
  /**
   * Cloudflare verification status (e.g., 'active', 'pending')
   */
  status?: string;
  /**
   * SSL certificate status (e.g., 'active', 'pending_validation')
   */
  ssl_status?: string;
}

/**
 * Domain availability result
 */
export interface DomainAvailability {
  /**
   * The full domain name
   */
  domain_name: string;
  /**
   * Second-level domain
   */
  sld: string;
  /**
   * Top-level domain
   */
  tld: string;
  /**
   * Whether the domain is available for registration
   */
  available: boolean;
  /**
   * Whether this is a premium domain
   */
  premium: boolean;
  /**
   * Purchase price in USD
   */
  price: number | null;
  /**
   * Annual renewal price in USD
   */
  renewal_price: number | null;
}

export interface DomainListParams extends CursorIDPageParams {}

export type DomainsCursorIDPage = CursorIDPage<Domain>;

export interface DomainCheckAvailabilityParams {
  /**
   * Array of domain names to check availability for
   * @minItems 1
   * @maxItems 50
   */
  domains: Array<string>;
}

export interface DomainCheckAvailabilityResponse {
  /**
   * Array of domain availability results
   */
  data: Array<DomainAvailability>;
}

export interface DomainSearchParams {
  /**
   * Keyword to search for domain suggestions
   * @minLength 1
   */
  keyword: string;
  /**
   * Optional list of TLDs to restrict search results
   */
  tld_filter?: Array<string>;
}

export interface DomainSearchResponse {
  /**
   * Array of domain search results
   */
  data: Array<DomainAvailability>;
}
Domains.Purchased = Purchased;

export declare namespace Domains {
  export {
    type Domain as Domain,
    type DomainAvailability as DomainAvailability,
    type DomainsCursorIDPage as DomainsCursorIDPage,
    type DomainCheckAvailabilityResponse as DomainCheckAvailabilityResponse,
    type DomainSearchResponse as DomainSearchResponse,
    type DomainListParams as DomainListParams,
    type DomainCheckAvailabilityParams as DomainCheckAvailabilityParams,
    type DomainSearchParams as DomainSearchParams,
  };

  export {
    Purchased as Purchased,
    type PurchasedDomain as PurchasedDomain,
    type PurchasedCreateResponse as PurchasedCreateResponse,
    type PurchasedConfirmResponse as PurchasedConfirmResponse,
    type PurchasedDomainsCursorIDPage as PurchasedDomainsCursorIDPage,
    type PurchasedCreateParams as PurchasedCreateParams,
    type PurchasedConfirmParams as PurchasedConfirmParams,
    type PurchasedListParams as PurchasedListParams,
  };
}
