// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Entitlements extends APIResource {
  /**
   * Creates a new feature entitlement. Entitlements represent features or
   * capabilities in your app that can be gated by subscription. After creating an
   * entitlement, attach it to one or more plans to grant access to customers on
   * those plans.
   */
  create(body: EntitlementCreateParams, options?: RequestOptions): APIPromise<EntitlementCreateResponse> {
    return this._client.post('/v1/pay/entitlements', { body, ...options });
  }

  /**
   * Updates an existing entitlement. Use this to modify the name or deactivate the
   * entitlement. The key cannot be changed after creation.
   */
  update(
    entitlementID: string,
    body: EntitlementUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntitlementUpdateResponse> {
    return this._client.patch(path`/v1/pay/entitlements/${entitlementID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of all entitlements. Entitlements represent features
   * or capabilities in your app that can be gated by subscription. Use the key
   * filter to find a specific entitlement by its key.
   */
  list(
    query: EntitlementListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EntitlementListResponsesCursorIDPage, EntitlementListResponse> {
    return this._client.getAPIList('/v1/pay/entitlements', CursorIDPage<EntitlementListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves an entitlement by ID. Returns the entitlement object including its
   * lookup key and active status.
   */
  get(entitlementID: string, options?: RequestOptions): APIPromise<EntitlementGetResponse> {
    return this._client.get(path`/v1/pay/entitlements/${entitlementID}`, options);
  }
}

export type EntitlementListResponsesCursorIDPage = CursorIDPage<EntitlementListResponse>;

/**
 * The entitlement attached to the product
 */
export interface EntitlementCreateResponse {
  /**
   * Unique identifier for the entitlement
   */
  id: string;

  /**
   * Whether the entitlement is active and can be attached to products
   */
  active: boolean;

  /**
   * Unique key to identify the entitlement when checking access in your app
   */
  key: string;

  /**
   * Whether this is a live mode entitlement (vs test mode)
   */
  livemode: boolean;

  /**
   * Display name for the entitlement (e.g., API Access, Premium Support)
   */
  name: string;
}

/**
 * The entitlement attached to the product
 */
export interface EntitlementUpdateResponse {
  /**
   * Unique identifier for the entitlement
   */
  id: string;

  /**
   * Whether the entitlement is active and can be attached to products
   */
  active: boolean;

  /**
   * Unique key to identify the entitlement when checking access in your app
   */
  key: string;

  /**
   * Whether this is a live mode entitlement (vs test mode)
   */
  livemode: boolean;

  /**
   * Display name for the entitlement (e.g., API Access, Premium Support)
   */
  name: string;
}

/**
 * The entitlement attached to the product
 */
export interface EntitlementListResponse {
  /**
   * Unique identifier for the entitlement
   */
  id: string;

  /**
   * Whether the entitlement is active and can be attached to products
   */
  active: boolean;

  /**
   * Unique key to identify the entitlement when checking access in your app
   */
  key: string;

  /**
   * Whether this is a live mode entitlement (vs test mode)
   */
  livemode: boolean;

  /**
   * Display name for the entitlement (e.g., API Access, Premium Support)
   */
  name: string;
}

/**
 * The entitlement attached to the product
 */
export interface EntitlementGetResponse {
  /**
   * Unique identifier for the entitlement
   */
  id: string;

  /**
   * Whether the entitlement is active and can be attached to products
   */
  active: boolean;

  /**
   * Unique key to identify the entitlement when checking access in your app
   */
  key: string;

  /**
   * Whether this is a live mode entitlement (vs test mode)
   */
  livemode: boolean;

  /**
   * Display name for the entitlement (e.g., API Access, Premium Support)
   */
  name: string;
}

export interface EntitlementCreateParams {
  /**
   * Unique key to identify the entitlement when checking access. Use a descriptive,
   * stable key (e.g., api_access, premium_support).
   */
  key: string;

  /**
   * Display name for the entitlement (e.g., API Access, Premium Support)
   */
  name: string;

  /**
   * Optional custom ID for the entitlement. If not provided, one will be generated.
   */
  id?: string;
}

export interface EntitlementUpdateParams {
  /**
   * Whether the entitlement is active. Deactivating removes it from access checks.
   */
  active?: boolean;

  /**
   * Display name for the entitlement
   */
  name?: string;
}

export interface EntitlementListParams extends CursorIDPageParams {
  /**
   * Filter by archived status
   */
  archived?: 'true' | 'false';

  /**
   * Filter by exact key match
   */
  key?: string;
}

export declare namespace Entitlements {
  export {
    type EntitlementCreateResponse as EntitlementCreateResponse,
    type EntitlementUpdateResponse as EntitlementUpdateResponse,
    type EntitlementListResponse as EntitlementListResponse,
    type EntitlementGetResponse as EntitlementGetResponse,
    type EntitlementListResponsesCursorIDPage as EntitlementListResponsesCursorIDPage,
    type EntitlementCreateParams as EntitlementCreateParams,
    type EntitlementUpdateParams as EntitlementUpdateParams,
    type EntitlementListParams as EntitlementListParams,
  };
}
