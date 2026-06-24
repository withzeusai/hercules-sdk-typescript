// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PurchasedAPI from './purchased';
import {
  Purchased,
  PurchasedConfirmParams,
  PurchasedConfirmResponse,
  PurchasedCreateParams,
  PurchasedCreateResponse,
  PurchasedDomain,
  PurchasedDomainsCursorIDPage,
  PurchasedListParams,
} from './purchased';
import { APIPromise } from '../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

/**
 * Manage custom domains linked to a website, check domain availability,
 * purchase and register new domains, and list previously purchased domains.
 */
export class Domains extends APIResource {
  purchased: PurchasedAPI.Purchased = new PurchasedAPI.Purchased(this._client);

  /**
   * Retrieves a paginated list of custom domains linked to the website, including
   * Cloudflare verification and SSL status.
   */
  list(
    query: DomainListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DomainsCursorIDPage, Domain> {
    return this._client.getAPIList('/v1/domains', CursorIDPage<Domain>, { query, ...options });
  }

  /**
   * Checks whether the specified domain names are available for registration and
   * returns pricing information.
   */
  checkAvailability(
    body: DomainCheckAvailabilityParams,
    options?: RequestOptions,
  ): APIPromise<DomainCheckAvailabilityResponse> {
    return this._client.post('/v1/domains/check-availability', { body, ...options });
  }

  /**
   * Searches for available domain names based on a keyword and returns suggestions
   * with pricing.
   */
  search(body: DomainSearchParams, options?: RequestOptions): APIPromise<DomainSearchResponse> {
    return this._client.post('/v1/domains/search', { body, ...options });
  }
}

export type DomainsCursorIDPage = CursorIDPage<Domain>;

/**
 * A custom domain linked to a website.
 */
export interface Domain {
  /**
   * Unique identifier for the domain
   */
  id: string;

  /**
   * Timestamp when the domain was created
   */
  created: string;

  /**
   * The custom domain hostname (e.g., 'app.example.com')
   */
  hostname: string;

  /**
   * Timestamp when the domain was last updated
   */
  updated: string;

  /**
   * Whether this is a wildcard domain
   */
  wildcard: boolean;

  /**
   * SSL certificate status (e.g., 'active', 'pending_validation')
   */
  ssl_status?: string;

  /**
   * Cloudflare verification status (e.g., 'active', 'pending')
   */
  status?: string;
}

/**
 * Domain availability result
 */
export interface DomainAvailability {
  /**
   * Whether the domain is available for registration
   */
  available: boolean;

  /**
   * The full domain name
   */
  domain_name: string;

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

  /**
   * Second-level domain
   */
  sld: string;

  /**
   * Top-level domain
   */
  tld: string;
}

/**
 * Domain availability check results
 */
export interface DomainCheckAvailabilityResponse {
  /**
   * Array of domain availability results
   */
  data: Array<DomainAvailability>;
}

/**
 * Domain search results
 */
export interface DomainSearchResponse {
  /**
   * Array of domain search results
   */
  data: Array<DomainAvailability>;
}

export interface DomainListParams extends CursorIDPageParams {}

export interface DomainCheckAvailabilityParams {
  /**
   * Array of domain names to check availability for
   */
  domains: Array<string>;
}

export interface DomainSearchParams {
  /**
   * Keyword to search for domain suggestions
   */
  keyword: string;

  /**
   * Optional list of TLDs to restrict search results
   */
  tld_filter?: Array<string>;
}

Domains.Purchased = Purchased;

export declare namespace Domains {
  export {
    type Domain as Domain,
    type DomainAvailability as DomainAvailability,
    type DomainCheckAvailabilityResponse as DomainCheckAvailabilityResponse,
    type DomainSearchResponse as DomainSearchResponse,
    type DomainsCursorIDPage as DomainsCursorIDPage,
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
    type PurchasedListParams as PurchasedListParams,
    type PurchasedConfirmParams as PurchasedConfirmParams,
  };
}
