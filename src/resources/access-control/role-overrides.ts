// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class RoleOverrides extends APIResource {
  /**
   * Returns the raw per-scope permission overrides for a role.
   */
  get(body: RoleOverrideGetParams, options?: RequestOptions): APIPromise<RoleOverrideGetResponse> {
    return this._client.post('/v1/access-control/role-overrides/get', { body, ...options });
  }

  /**
   * Replaces an org-specific override for an app role.
   */
  set(body: RoleOverrideSetParams, options?: RequestOptions): APIPromise<RoleOverrideSetResponse> {
    return this._client.post('/v1/access-control/role-overrides/set', { body, ...options });
  }
}

/**
 * Raw permission overrides for one reusable role in one scope.
 */
export interface RoleOverrideGetResponse {
  /**
   * Scope containing the role overrides.
   */
  access_scope_id: string;

  /**
   * Raw scope-specific permission overrides for the role.
   */
  overrides: Array<RoleOverrideGetResponse.Override>;

  /**
   * Reusable role whose overrides were read.
   */
  role_id: string;
}

export namespace RoleOverrideGetResponse {
  /**
   * One scope-specific role permission override.
   */
  export interface Override {
    /**
     * Whether this scope adds or removes the permission from the role.
     */
    effect: 'allow' | 'deny';

    /**
     * Overridden permission ID.
     */
    permission_id: string;

    /**
     * Overridden permission key.
     */
    permission_key: string;
  }
}

/**
 * Access Control write result for one role.
 */
export interface RoleOverrideSetResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Deployments whose Access Control mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * Role changed by the operation.
   */
  role_id: string;

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

export interface RoleOverrideGetParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;

  /**
   * Existing Access Control role ID.
   */
  role_id?: string;

  /**
   * Stable role key from the deployment catalog.
   */
  role_key?: string;

  /**
   * Access scope ID. Omit only when the operation supports the deployment's default
   * scope.
   */
  scope_id?: string;
}

export interface RoleOverrideSetParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Reusable role key to override in this scope.
   */
  role_key: string;

  /**
   * Scope in which the reusable role is overridden.
   */
  scope_id: string;

  /**
   * Complete desired set of scope-specific role allows.
   */
  allow?: Array<string>;

  /**
   * Complete desired set of scope-specific role denies.
   */
  deny?: Array<string>;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export declare namespace RoleOverrides {
  export {
    type RoleOverrideGetResponse as RoleOverrideGetResponse,
    type RoleOverrideSetResponse as RoleOverrideSetResponse,
    type RoleOverrideGetParams as RoleOverrideGetParams,
    type RoleOverrideSetParams as RoleOverrideSetParams,
  };
}
