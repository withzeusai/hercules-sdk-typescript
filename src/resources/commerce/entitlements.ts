// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../core/pagination';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Entitlements extends APIResource {
  /**
   * Retrieves a paginated list of entitlement grants. Grants represent customer access to features from one-time purchases or manual grants.
   *
   * @param {EntitlementListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<EntitlementGrantsCursorIDPage, EntitlementGrant>} A paginated list of entitlement grant objects
   *
   * @example
   * ```ts
   * const page = await client.commerce.entitlements.list();
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
   * @param {string} grantID - The unique identifier of the entitlement grant
   * @param {EntitlementGetParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EntitlementGrant>} The entitlement grant object
   *
   * @example
   * ```ts
   * const entitlementGrant = await client.commerce.entitlements.get('grantId');
   * ```
   */
  get(
    grantID: string,
    query: EntitlementGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntitlementGrant> {
    return this._client.get(__scalarPath`/v1/commerce/entitlements/${grantID}`, { query, ...options });
  }

  /**
   * Manually creates an entitlement grant for a customer. Use this to grant access to features outside of the normal purchase flow, such as promotional access or support compensations.
   *
   * @param {EntitlementCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EntitlementGrant>} The created entitlement grant object
   *
   * @example
   * ```ts
   * const entitlementGrant = await client.commerce.entitlements.create({
   *   customer_id: 'x',
   *   feature_id: 'x',
   * });
   * ```
   */
  create(body: EntitlementCreateParams, options?: RequestOptions): APIPromise<EntitlementGrant> {
    return this._client.post('/v1/commerce/entitlements', { body, ...options });
  }

  /**
   * Updates an entitlement grant. Use status: 'revoked' to void a grant and remove customer access.
   *
   * @param {string} grantID - The unique identifier of the entitlement grant
   * @param {EntitlementUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EntitlementGrant>} The updated entitlement grant object
   *
   * @example
   * ```ts
   * const entitlementGrant = await client.commerce.entitlements.update('grantId', {});
   * ```
   */
  update(
    grantID: string,
    params: EntitlementUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EntitlementGrant> {
    const { customer_id, ...body } = params;
    return this._client.patch(__scalarPath`/v1/commerce/entitlements/${grantID}`, {
      body,
      query: { customer_id },
      ...options,
    });
  }
}

/**
 * An entitlement grant represents a customer's access to a feature from a one-time purchase or manual grant.
 */
export interface EntitlementGrant {
  /**
   * Unique identifier for the entitlement grant
   */
  id: string;
  /**
   * Timestamp when the grant was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * The customer who has this entitlement
   */
  customer_id: string;
  /**
   * The feature being granted
   */
  feature_id: string;
  /**
   * The product that granted this entitlement (null for manual grants)
   */
  product_id: string | null;
  /**
   * Type of grant - 'purchase' for checkout-based grants, 'manual' for API-created grants
   */
  grant_type: 'purchase' | 'manual';
  /**
   * Status of the grant - active grants provide access, revoked do not
   */
  status: 'active' | 'revoked';
  /**
   * Timestamp when the grant expires (null = never expires)
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  expires_at: string | null;
  /**
   * Timestamp when the grant was revoked, if applicable
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  revoked_at: string | null;
  /**
   * Environment this response was served from. Sandbox data and live data never mix; the environment comes from the credential and the surface, not from the request.
   */
  environment: 'sandbox' | 'live';
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
   * Filter by grant status
   */
  status?: 'active' | 'revoked';
  /**
   * Filter by grant type (purchase or manual)
   */
  grant_type?: 'purchase' | 'manual';
}

export type EntitlementGrantsCursorIDPage = CursorIDPage<EntitlementGrant>;

export interface EntitlementGetParams {
  /**
   * The customer this catalog is being read for. Used only to resolve their environment when they hold a test-mode grant; it never filters the results.
   * @minLength 5
   * @maxLength 255
   * @pattern ^cus_[\w-]+$
   */
  customer_id?: string;
}

export interface EntitlementCreateParams {
  /**
   * The external ID of the customer to grant entitlement to
   * @minLength 1
   * @maxLength 255
   */
  customer_id: string;
  /**
   * The external ID of the feature to grant
   * @minLength 1
   * @maxLength 255
   */
  feature_id: string;
  /**
   * The external ID of the product associated with this grant (optional, for audit purposes)
   * @minLength 1
   * @maxLength 255
   */
  product_id?: string;
  /**
   * When the grant should expire (optional, null = never expires)
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  expires_at?: string;
}

export interface EntitlementUpdateParams {
  /**
   * Query param: The customer this catalog is being read for. Used only to resolve their environment when they hold a test-mode grant; it never filters the results.
   * @minLength 5
   * @maxLength 255
   * @pattern ^cus_[\w-]+$
   */
  customer_id?: string;
  /**
   * Body param: Update the status of the grant. Set to 'revoked' to void the entitlement.
   */
  status?: 'active' | 'revoked';
  /**
   * Body param: Update when the grant expires. Set to null to remove expiration.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  expires_at?: string | null;
}
export declare namespace Entitlements {
  export {
    type EntitlementGrant as EntitlementGrant,
    type EntitlementGrantsCursorIDPage as EntitlementGrantsCursorIDPage,
    type EntitlementListParams as EntitlementListParams,
    type EntitlementGetParams as EntitlementGetParams,
    type EntitlementCreateParams as EntitlementCreateParams,
    type EntitlementUpdateParams as EntitlementUpdateParams,
  };
}
