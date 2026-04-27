// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

/**
 * List custom domains linked to a website, including Cloudflare verification
 * and SSL status.
 */
export class Domains extends APIResource {
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

export interface DomainListParams extends CursorIDPageParams {}

export declare namespace Domains {
  export {
    type Domain as Domain,
    type DomainsCursorIDPage as DomainsCursorIDPage,
    type DomainListParams as DomainListParams,
  };
}
