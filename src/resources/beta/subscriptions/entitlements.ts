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
  create(body: EntitlementCreateParams, options?: RequestOptions): APIPromise<Entitlement> {
    return this._client.post('/v1/subscriptions/entitlements', { body, ...options });
  }

  /**
   * Updates an existing entitlement. Use this to modify the name or deactivate the
   * entitlement. The key cannot be changed after creation.
   */
  update(
    entitlementID: string,
    body: EntitlementUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Entitlement> {
    return this._client.patch(path`/v1/subscriptions/entitlements/${entitlementID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of all entitlements. Entitlements represent features
   * or capabilities in your app that can be gated by subscription. Use the key
   * filter to find a specific entitlement by its key.
   */
  list(
    query: EntitlementListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EntitlementsCursorIDPage, Entitlement> {
    return this._client.getAPIList('/v1/subscriptions/entitlements', CursorIDPage<Entitlement>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves an entitlement by ID. Returns the entitlement object including its
   * lookup key and active status.
   */
  get(entitlementID: string, options?: RequestOptions): APIPromise<Entitlement> {
    return this._client.get(path`/v1/subscriptions/entitlements/${entitlementID}`, options);
  }
}

export type EntitlementsCursorIDPage = CursorIDPage<Entitlement>;

/**
 * The entitlement attached to the plan
 */
export interface Entitlement {
  /**
   * Unique identifier for the entitlement
   */
  id: string;

  /**
   * Whether the entitlement is active and can be attached to plans
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
    type Entitlement as Entitlement,
    type EntitlementsCursorIDPage as EntitlementsCursorIDPage,
    type EntitlementCreateParams as EntitlementCreateParams,
    type EntitlementUpdateParams as EntitlementUpdateParams,
    type EntitlementListParams as EntitlementListParams,
  };
}
