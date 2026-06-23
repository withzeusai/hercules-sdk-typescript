// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Roles extends APIResource {
  /**
   * Assigns a role to a user principal in a scope.
   */
  assign(body: RoleAssignParams, options?: RequestOptions): APIPromise<RoleAssignResponse> {
    return this._client.post('/v1/iam/roles/assign', { body, ...options });
  }

  /**
   * Creates an org-scoped custom role with an exact permission set.
   */
  createOrgCustom(
    body: RoleCreateOrgCustomParams,
    options?: RequestOptions,
  ): APIPromise<RoleCreateOrgCustomResponse> {
    return this._client.post('/v1/iam/roles/create-org-custom', { body, ...options });
  }

  /**
   * Lists roles the current actor may assign at an exact scope or resource target.
   */
  listGrantable(
    body: RoleListGrantableParams,
    options?: RequestOptions,
  ): APIPromise<RoleListGrantableResponse> {
    return this._client.post('/v1/iam/roles/list-grantable', { body, ...options });
  }

  /**
   * Removes a role from a user principal in a scope.
   */
  remove(body: RoleRemoveParams, options?: RequestOptions): APIPromise<RoleRemoveResponse> {
    return this._client.post('/v1/iam/roles/remove', { body, ...options });
  }

  /**
   * Replaces one existing member's complete set of direct roles in a scope.
   */
  replace(body: RoleReplaceParams, options?: RequestOptions): APIPromise<RoleReplaceResponse> {
    return this._client.post('/v1/iam/roles/replace', { body, ...options });
  }

  /**
   * Replaces a role's permission set with the provided permission keys.
   */
  updatePermissions(
    body: RoleUpdatePermissionsParams,
    options?: RequestOptions,
  ): APIPromise<RoleUpdatePermissionsResponse> {
    return this._client.post('/v1/iam/roles/update-permissions', { body, ...options });
  }
}

/**
 * Common result envelope for IAM writes.
 */
export interface RoleAssignResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Deployments whose IAM mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Whether persisted IAM state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;

  [k: string]: unknown;
}

/**
 * Created organization-owned custom role and its permission set.
 */
export interface RoleCreateOrgCustomResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Base permissions assigned to the created role.
   */
  granted_permission_keys: Array<string>;

  /**
   * Deployments whose IAM mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * Created custom role ID.
   */
  role_id: string;

  /**
   * Stable key of the created custom role.
   */
  role_key: string;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Whether persisted IAM state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;
}

/**
 * Roles the actor may grant to the requested recipient at the exact target.
 */
export interface RoleListGrantableResponse {
  /**
   * Scope used to evaluate grantability.
   */
  access_scope_id: string;

  /**
   * Roles safe to display in the exact assignment picker.
   */
  roles: Array<RoleListGrantableResponse.Role>;
}

export namespace RoleListGrantableResponse {
  /**
   * Role the current actor may confer at the requested target.
   */
  export interface Role {
    /**
     * Role ID to send to role assignment APIs.
     */
    role_id: string;

    /**
     * Stable role key.
     */
    role_key: string;

    /**
     * Whether the role is system-defined or application/custom-defined.
     */
    role_kind: 'system' | 'custom';

    /**
     * Human-readable role name.
     */
    role_name: string;

    /**
     * Whether the role is reusable across scopes in the deployment.
     */
    shared: boolean;
  }
}

/**
 * Common result envelope for IAM writes.
 */
export interface RoleRemoveResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Deployments whose IAM mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Whether persisted IAM state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;

  [k: string]: unknown;
}

/**
 * Result of replacing a member's complete direct role set.
 */
export interface RoleReplaceResponse {
  /**
   * Scope containing the member.
   */
  access_scope_id: string;

  /**
   * Whether any direct role assignments changed.
   */
  changed: boolean;

  /**
   * Member principal whose roles were replaced.
   */
  principal_id: string;

  /**
   * Deployments whose IAM mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * Final direct role IDs assigned to the member.
   */
  role_ids: Array<string>;

  /**
   * New deployment source version after the replacement.
   */
  source_version: number;
}

/**
 * Updated role and its final base permission set.
 */
export interface RoleUpdatePermissionsResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Final base permission set assigned to the role.
   */
  permission_keys: Array<string>;

  /**
   * Deployments whose IAM mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * Updated role ID.
   */
  role_id: string;

  /**
   * Stable key of the updated role.
   */
  role_key: string;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Whether persisted IAM state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;
}

export interface RoleAssignParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by IAM.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Hercules Auth user ID used to resolve the user's principal in this scope.
   */
  hercules_auth_user_id?: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;

  /**
   * Existing IAM principal ID.
   */
  principal_id?: string;

  /**
   * Existing IAM role ID.
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

export interface RoleCreateOrgCustomParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by IAM.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Human-readable role name.
   */
  name: string;

  /**
   * Organization scope that will own the custom role.
   */
  scope_id: string;

  /**
   * Optional role description.
   */
  description?: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;

  /**
   * Optional stable key for the custom role.
   */
  key?: string;

  /**
   * Complete base permission set for the new role.
   */
  permission_keys?: Array<string>;
}

export interface RoleListGrantableParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by IAM.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Scope in which the role would be assigned.
   */
  scope_id: string;

  /**
   * Recipient kind the role picker will assign to.
   */
  subject_type: 'user' | 'group';

  /**
   * Exact scope or resource target for the proposed role assignment.
   */
  target: RoleListGrantableParams.Type | RoleListGrantableParams.UnionMember1;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export namespace RoleListGrantableParams {
  export interface Type {
    /**
     * Evaluate a scope-level role assignment.
     */
    type: 'scope';
  }

  export interface UnionMember1 {
    /**
     * Exact application resource ID being managed.
     */
    resource_id: string;

    /**
     * Canonical resource type the role would apply to.
     */
    resource_type: string;

    /**
     * Evaluate a resource-level role grant.
     */
    type: 'resource';

    /**
     * Whether the access entry applies only to this resource or also to descendants
     * authorized through it.
     */
    applies_to?: 'self' | 'self_and_descendants';
  }
}

export interface RoleRemoveParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by IAM.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Hercules Auth user ID used to resolve the user's principal in this scope.
   */
  hercules_auth_user_id?: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;

  /**
   * Existing IAM principal ID.
   */
  principal_id?: string;

  /**
   * Existing IAM role ID.
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

export interface RoleReplaceParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by IAM.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Complete desired set of direct role keys for the member.
   */
  role_keys: Array<string>;

  /**
   * Scope containing the member whose roles will be replaced.
   */
  scope_id: string;

  /**
   * Hercules Auth user ID used to resolve the user's principal in this scope.
   */
  hercules_auth_user_id?: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;

  /**
   * Existing IAM principal ID.
   */
  principal_id?: string;
}

export interface RoleUpdatePermissionsParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by IAM.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Complete desired base permission set for the role.
   */
  permission_keys: Array<string>;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;

  /**
   * Existing IAM role ID.
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

export declare namespace Roles {
  export {
    type RoleAssignResponse as RoleAssignResponse,
    type RoleCreateOrgCustomResponse as RoleCreateOrgCustomResponse,
    type RoleListGrantableResponse as RoleListGrantableResponse,
    type RoleRemoveResponse as RoleRemoveResponse,
    type RoleReplaceResponse as RoleReplaceResponse,
    type RoleUpdatePermissionsResponse as RoleUpdatePermissionsResponse,
    type RoleAssignParams as RoleAssignParams,
    type RoleCreateOrgCustomParams as RoleCreateOrgCustomParams,
    type RoleListGrantableParams as RoleListGrantableParams,
    type RoleRemoveParams as RoleRemoveParams,
    type RoleReplaceParams as RoleReplaceParams,
    type RoleUpdatePermissionsParams as RoleUpdatePermissionsParams,
  };
}
