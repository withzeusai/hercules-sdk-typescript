// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Entitlements extends APIResource {
  /**
   * Create a new feature entitlement. Use the lookup key to check customer access in
   * your app. Attach entitlements to plans to grant features to subscribers.
   */
  create(body: EntitlementCreateParams, options?: RequestOptions): APIPromise<Entitlement> {
    return this._client.post('/v1/subscriptions/entitlements', { body, ...options });
  }

  /**
   * Update entitlement name or active status. Deactivating an entitlement revokes
   * access for all customers.
   */
  update(
    entitlementID: string,
    body: EntitlementUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Entitlement> {
    return this._client.patch(path`/v1/subscriptions/entitlements/${entitlementID}`, { body, ...options });
  }

  /**
   * Retrieve all feature entitlements. Entitlements represent specific capabilities
   * or features in your app that can be granted to customers through plan
   * subscriptions.
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
   * Retrieve a specific feature entitlement by ID, including its lookup key and
   * active status.
   */
  get(entitlementID: string, options?: RequestOptions): APIPromise<Entitlement> {
    return this._client.get(path`/v1/subscriptions/entitlements/${entitlementID}`, options);
  }
}

export type EntitlementsCursorIDPage = CursorIDPage<Entitlement>;

/**
 * The feature entitlement granted to plan subscribers
 */
export interface Entitlement {
  /**
   * An id for a data item
   */
  id: string;

  /**
   * Whether the entitlement grants access to customers
   */
  active: boolean;

  /**
   * Whether in production mode
   */
  livemode: boolean;

  /**
   * Unique key for checking feature access in your app
   */
  lookup_key: string;

  /**
   * Entitlement display name
   */
  name: string;
}

export interface EntitlementCreateParams {
  /**
   * Unique key for checking feature access (e.g., advanced_analytics,
   * custom_branding)
   */
  lookup_key: string;

  /**
   * Entitlement display name
   */
  name: string;
}

export interface EntitlementUpdateParams {
  /**
   * Whether the entitlement is active. Deactivating revokes access for all customers
   */
  active?: boolean;

  /**
   * Entitlement display name
   */
  name?: string;
}

export interface EntitlementListParams extends CursorIDPageParams {
  /**
   * Filter by archived status
   */
  archived?: boolean;

  /**
   * Filter by lookup key
   */
  lookup_key?: string;
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
