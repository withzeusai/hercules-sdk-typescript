// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Entitlements extends APIResource {
  /**
   * Creates a new entitlement
   */
  create(body: EntitlementCreateParams, options?: RequestOptions): APIPromise<Entitlement> {
    return this._client.post('/v1/subscriptions/entitlements', { body, ...options });
  }

  /**
   * Updates an entitlement by their ID
   */
  update(
    entitlementID: string,
    body: EntitlementUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Entitlement> {
    return this._client.patch(path`/v1/subscriptions/entitlements/${entitlementID}`, { body, ...options });
  }

  /**
   * Lists all entitlements
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
   * Gets an entitlement by their ID
   */
  get(entitlementID: string, options?: RequestOptions): APIPromise<Entitlement> {
    return this._client.get(path`/v1/subscriptions/entitlements/${entitlementID}`, options);
  }
}

export type EntitlementsCursorIDPage = CursorIDPage<Entitlement>;

/**
 * An entitlement that can be attached to products
 */
export interface Entitlement {
  /**
   * An id for a data item
   */
  id: string;

  active: boolean;

  livemode: boolean;

  lookup_key: string;

  name: string;
}

export interface EntitlementCreateParams {
  /**
   * A unique key to identify the entitlement in your system
   */
  lookup_key: string;

  /**
   * The name of the entitlement
   */
  name: string;
}

export interface EntitlementUpdateParams {
  /**
   * Whether the entitlement is active
   */
  active?: boolean;

  /**
   * The name of the entitlement
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
