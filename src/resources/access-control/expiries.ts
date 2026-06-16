// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Expiries extends APIResource {
  /**
   * Sets or clears the expiry for an existing access grant.
   */
  set(body: ExpirySetParams, options?: RequestOptions): APIPromise<ExpirySetResponse> {
    return this._client.post('/v1/access-control/expiries/set', { body, ...options });
  }
}

/**
 * Result of setting or clearing a grant expiry.
 */
export interface ExpirySetResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Current grant expiry, or null when the grant is non-expiring.
   */
  expires_at: string | null;

  /**
   * Grant whose expiry was changed.
   */
  grant_id: string;

  /**
   * Deployments whose Access Control mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Whether persisted Access Control state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;
}

export interface ExpirySetParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * New ISO 8601 expiry, or null to make the grant non-expiring.
   */
  expires_at: string | null;

  /**
   * Role, permission, or resource grant ID to update.
   */
  grant_id: string;

  /**
   * Scope containing the grant.
   */
  scope_id: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export declare namespace Expiries {
  export { type ExpirySetResponse as ExpirySetResponse, type ExpirySetParams as ExpirySetParams };
}
