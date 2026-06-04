// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Roles extends APIResource {
  /**
   * Assigns a role to a user principal in a scope.
   */
  assign(body: RoleAssignParams, options?: RequestOptions): APIPromise<RoleAssignResponse> {
    return this._client.post('/v1/access-control/roles/assign', { body, ...options });
  }

  /**
   * Creates an org-scoped custom role with an exact permission set.
   */
  createOrgCustom(
    body: RoleCreateOrgCustomParams,
    options?: RequestOptions,
  ): APIPromise<RoleCreateOrgCustomResponse> {
    return this._client.post('/v1/access-control/roles/create-org-custom', { body, ...options });
  }

  /**
   * Removes a role from a user principal in a scope.
   */
  remove(body: RoleRemoveParams, options?: RequestOptions): APIPromise<RoleRemoveResponse> {
    return this._client.post('/v1/access-control/roles/remove', { body, ...options });
  }

  /**
   * Replaces a role's permission set with the provided permission keys.
   */
  updatePermissions(
    body: RoleUpdatePermissionsParams,
    options?: RequestOptions,
  ): APIPromise<RoleUpdatePermissionsResponse> {
    return this._client.post('/v1/access-control/roles/update-permissions', { body, ...options });
  }
}

export interface RoleAssignResponse {
  access_scope_id: string;

  projection_ids: Array<string>;

  source_version: number;

  changed?: boolean;

  created?: boolean;

  [k: string]: unknown;
}

export interface RoleCreateOrgCustomResponse {
  access_scope_id: string;

  projection_ids: Array<string>;

  source_version: number;

  changed?: boolean;

  created?: boolean;

  [k: string]: unknown;
}

export interface RoleRemoveResponse {
  access_scope_id: string;

  projection_ids: Array<string>;

  source_version: number;

  changed?: boolean;

  created?: boolean;

  [k: string]: unknown;
}

export interface RoleUpdatePermissionsResponse {
  access_scope_id: string;

  projection_ids: Array<string>;

  source_version: number;

  changed?: boolean;

  created?: boolean;

  [k: string]: unknown;
}

export interface RoleAssignParams {
  actor_mode: 'service' | 'app_user';

  hercules_auth_user_id?: string;

  id_token?: string;

  principal_id?: string;

  role_id?: string;

  role_key?: string;

  scope_id?: string;
}

export interface RoleCreateOrgCustomParams {
  actor_mode: 'service' | 'app_user';

  name: string;

  scope_id: string;

  description?: string;

  id_token?: string;

  key?: string;

  permission_keys?: Array<string>;
}

export interface RoleRemoveParams {
  actor_mode: 'service' | 'app_user';

  hercules_auth_user_id?: string;

  id_token?: string;

  principal_id?: string;

  role_id?: string;

  role_key?: string;

  scope_id?: string;
}

export interface RoleUpdatePermissionsParams {
  actor_mode: 'service' | 'app_user';

  permission_keys: Array<string>;

  id_token?: string;

  role_id?: string;

  role_key?: string;

  scope_id?: string;
}

export declare namespace Roles {
  export {
    type RoleAssignResponse as RoleAssignResponse,
    type RoleCreateOrgCustomResponse as RoleCreateOrgCustomResponse,
    type RoleRemoveResponse as RoleRemoveResponse,
    type RoleUpdatePermissionsResponse as RoleUpdatePermissionsResponse,
    type RoleAssignParams as RoleAssignParams,
    type RoleCreateOrgCustomParams as RoleCreateOrgCustomParams,
    type RoleRemoveParams as RoleRemoveParams,
    type RoleUpdatePermissionsParams as RoleUpdatePermissionsParams,
  };
}
