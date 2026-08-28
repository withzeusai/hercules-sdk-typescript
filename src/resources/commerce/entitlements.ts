// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Entitlements extends APIResource {
  /**
   * Manually creates an entitlement grant for a customer. Use this to grant access
   * to features outside of the normal purchase flow, such as promotional access or
   * support compensations.
   *
   * @example
   * ```ts
   * const entitlementGrant =
   *   await client.commerce.entitlements.create({
   *     customer_id: 'x',
   *     feature_id: 'x',
   *   });
   * ```
   */
  create(body: EntitlementCreateParams, options?: RequestOptions): APIPromise<EntitlementGrant> {
    return this._client.post('/v1/commerce/entitlements', { body, ...options });
  }

  /**
   * Updates an entitlement grant. Use status: 'revoked' to void a grant and remove
   * customer access.
   *
   * @example
   * ```ts
   * const entitlementGrant =
   *   await client.commerce.entitlements.update('grant_id');
   * ```
   */
  update(
    grantID: string,
    params: EntitlementUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EntitlementGrant> {
    const { customer_id, ...body } = params;
    return this._client.patch(path`/v1/commerce/entitlements/${grantID}`, {
      query: { customer_id },
      body,
      ...options,
    });
  }

  /**
   * Retrieves a paginated list of entitlement grants. Grants represent customer
   * access to features from one-time purchases or manual grants.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const entitlementGrant of client.commerce.entitlements.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EntitlementListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EntitlementGrantsCursorIDPage, EntitlementGrant> {
    return this._client.getAPIList('/v1/commerce/entitlements', CursorIDPage<EntitlementGrant>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves an entitlement grant by ID.
   *
   * @example
   * ```ts
   * const entitlementGrant =
   *   await client.commerce.entitlements.get('grant_id');
   * ```
   */
  get(
    grantID: string,
    query: EntitlementGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntitlementGrant> {
    return this._client.get(path`/v1/commerce/entitlements/${grantID}`, { query, ...options });
  }
}

export type EntitlementGrantsCursorIDPage = CursorIDPage<EntitlementGrant>;

/**
 * An entitlement grant represents a customer's access to a feature from a one-time
 * purchase or manual grant.
 */
export interface EntitlementGrant {
  /**
   * Unique identifier for the entitlement grant
   */
  id: string;

  /**
   * Timestamp when the grant was created
   */
  created: string;

  /**
   * The customer who has this entitlement
   */
  customer_id: string;

  /**
   * Environment this response was served from. Sandbox data and live data never mix;
   * the environment comes from the credential and the surface, not from the request.
   */
  environment: 'sandbox' | 'live';

  /**
   * Timestamp when the grant expires (null = never expires)
   */
  expires_at: string | null;

  /**
   * The feature being granted
   */
  feature_id: string;

  /**
   * Type of grant - 'purchase' for checkout-based grants, 'manual' for API-created
   * grants
   */
  grant_type: 'purchase' | 'manual';

  /**
   * The product that granted this entitlement (null for manual grants)
   */
  product_id: string | null;

  /**
   * Timestamp when the grant was revoked, if applicable
   */
  revoked_at: string | null;

  /**
   * Status of the grant - active grants provide access, revoked do not
   */
  status: 'active' | 'revoked';
}

export interface EntitlementCreateParams {
  /**
   * The external ID of the customer to grant entitlement to
   */
  customer_id: string;

  /**
   * The external ID of the feature to grant
   */
  feature_id: string;

  /**
   * When the grant should expire (optional, null = never expires)
   */
  expires_at?: string;

  /**
   * The external ID of the product associated with this grant (optional, for audit
   * purposes)
   */
  product_id?: string;
}

export interface EntitlementUpdateParams {
  /**
   * Query param: The customer this catalog is being read for. Used only to resolve
   * their environment when they hold a test-mode grant; it never filters the
   * results.
   */
  customer_id?: string;

  /**
   * Body param: Update when the grant expires. Set to null to remove expiration.
   */
  expires_at?: string | null;

  /**
   * Body param: Update the status of the grant. Set to 'revoked' to void the
   * entitlement.
   */
  status?: 'active' | 'revoked';
}

export interface EntitlementListParams extends CursorIDPageParams {
  /**
   * Filter by customer external ID
   */
  customer_id?: string;

  /**
   * Filter by feature external ID
   */
  feature_id?: string;

  /**
   * Filter by grant type (purchase or manual)
   */
  grant_type?: 'purchase' | 'manual';

  /**
   * Filter by grant status
   */
  status?: 'active' | 'revoked';
}

export interface EntitlementGetParams {
  /**
   * The customer this catalog is being read for. Used only to resolve their
   * environment when they hold a test-mode grant; it never filters the results.
   */
  customer_id?: string;
}

export declare namespace Entitlements {
  export {
    type EntitlementGrant as EntitlementGrant,
    type EntitlementGrantsCursorIDPage as EntitlementGrantsCursorIDPage,
    type EntitlementCreateParams as EntitlementCreateParams,
    type EntitlementUpdateParams as EntitlementUpdateParams,
    type EntitlementListParams as EntitlementListParams,
    type EntitlementGetParams as EntitlementGetParams,
  };
}
