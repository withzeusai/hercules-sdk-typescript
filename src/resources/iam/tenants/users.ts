// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Adds a Hercules Auth user to a tenant or restores their access.
   */
  create(
    tenantID: string,
    params: UserCreateParams,
    options?: RequestOptions,
  ): APIPromise<UserCreateResponse> {
    const {
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.post(path`/v1/iam/tenants/${tenantID}/users`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          'X-Hercules-IAM-Actor': xHerculesIamActor.toString(),
          ...(xHerculesUserIDToken != null ?
            { 'X-Hercules-User-ID-Token': xHerculesUserIDToken }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Approves, activates, or suspends one tenant user.
   */
  update(userID: string, params: UserUpdateParams, options?: RequestOptions): APIPromise<UserUpdateResponse> {
    const {
      tenant_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/users/${userID}`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          'X-Hercules-IAM-Actor': xHerculesIamActor.toString(),
          ...(xHerculesUserIDToken != null ?
            { 'X-Hercules-User-ID-Token': xHerculesUserIDToken }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns the direct permission overrides for one tenant user.
   */
  listPermissionOverrides(
    userID: string,
    params: UserListPermissionOverridesParams,
    options?: RequestOptions,
  ): APIPromise<UserListPermissionOverridesResponse> {
    const {
      tenant_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
    } = params;
    return this._client.get(path`/v1/iam/tenants/${tenant_id}/users/${userID}/permission-overrides`, {
      ...options,
      headers: buildHeaders([
        {
          'X-Hercules-IAM-Actor': xHerculesIamActor.toString(),
          ...(xHerculesUserIDToken != null ?
            { 'X-Hercules-User-ID-Token': xHerculesUserIDToken }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Removes one user from a tenant.
   */
  remove(userID: string, params: UserRemoveParams, options?: RequestOptions): APIPromise<UserRemoveResponse> {
    const {
      tenant_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
    } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/users/${userID}`, {
      ...options,
      headers: buildHeaders([
        {
          'X-Hercules-IAM-Actor': xHerculesIamActor.toString(),
          ...(xHerculesUserIDToken != null ?
            { 'X-Hercules-User-ID-Token': xHerculesUserIDToken }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Replaces the complete direct permission override set for one tenant user.
   */
  replacePermissionOverrides(
    userID: string,
    params: UserReplacePermissionOverridesParams,
    options?: RequestOptions,
  ): APIPromise<UserReplacePermissionOverridesResponse> {
    const {
      tenant_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.put(path`/v1/iam/tenants/${tenant_id}/users/${userID}/permission-overrides`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          'X-Hercules-IAM-Actor': xHerculesIamActor.toString(),
          ...(xHerculesUserIDToken != null ?
            { 'X-Hercules-User-ID-Token': xHerculesUserIDToken }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Replaces the complete direct role set for one tenant user.
   */
  replaceRoles(
    userID: string,
    params: UserReplaceRolesParams,
    options?: RequestOptions,
  ): APIPromise<UserReplaceRolesResponse> {
    const {
      tenant_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.put(path`/v1/iam/tenants/${tenant_id}/users/${userID}/roles`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          'X-Hercules-IAM-Actor': xHerculesIamActor.toString(),
          ...(xHerculesUserIDToken != null ?
            { 'X-Hercules-User-ID-Token': xHerculesUserIDToken }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

/**
 * Added or restored tenant user.
 */
export interface UserCreateResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * One persisted direct role grant.
   */
  grant: UserCreateResponse.Grant;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * Hercules Auth user ID added to the tenant.
   */
  user_id: string;
}

export namespace UserCreateResponse {
  /**
   * One persisted direct role grant.
   */
  export interface Grant {
    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at: string | null;

    /**
     * Persisted IAM grant ID.
     */
    grant_id: string;

    /**
     * IAM role granted by this binding.
     */
    role_id: string;

    /**
     * Identifies a role grant.
     */
    type: 'role';
  }
}

/**
 * Updated tenant user status.
 */
export interface UserUpdateResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Tenant user's previous status.
   */
  previous_status: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant user's current status.
   */
  status: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * Hercules Auth user ID whose status changed.
   */
  user_id: string;
}

/**
 * Direct permission overrides for one tenant user.
 */
export interface UserListPermissionOverridesResponse {
  /**
   * Complete direct permission override set for the user.
   */
  grants: Array<UserListPermissionOverridesResponse.Grant>;

  /**
   * Tenant containing the user.
   */
  tenant_id: string;

  /**
   * Hercules Auth user ID whose overrides were returned.
   */
  user_id: string;
}

export namespace UserListPermissionOverridesResponse {
  /**
   * One persisted direct permission grant.
   */
  export interface Grant {
    /**
     * Whether the permission is allowed or denied.
     */
    effect: 'allow' | 'deny';

    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at: string | null;

    /**
     * Persisted IAM grant ID.
     */
    grant_id: string;

    /**
     * IAM permission granted or denied by this binding.
     */
    permission_id: string;

    /**
     * Stable IAM permission key.
     */
    permission_key: string;

    /**
     * Identifies a direct permission grant.
     */
    type: 'permission';
  }
}

/**
 * Removed tenant user.
 */
export interface UserRemoveResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * Hercules Auth user ID removed from the tenant.
   */
  user_id: string;
}

/**
 * Replaced direct permission overrides for one tenant user.
 */
export interface UserReplacePermissionOverridesResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Complete resulting direct permission override set.
   */
  grants: Array<UserReplacePermissionOverridesResponse.Grant>;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * Hercules Auth user ID whose overrides were replaced.
   */
  user_id: string;
}

export namespace UserReplacePermissionOverridesResponse {
  /**
   * One persisted direct permission grant.
   */
  export interface Grant {
    /**
     * Whether the permission is allowed or denied.
     */
    effect: 'allow' | 'deny';

    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at: string | null;

    /**
     * Persisted IAM grant ID.
     */
    grant_id: string;

    /**
     * IAM permission granted or denied by this binding.
     */
    permission_id: string;

    /**
     * Stable IAM permission key.
     */
    permission_key: string;

    /**
     * Identifies a direct permission grant.
     */
    type: 'permission';
  }
}

/**
 * Replaced a tenant user's direct roles.
 */
export interface UserReplaceRolesResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Complete resulting direct role grant set.
   */
  grants: Array<UserReplaceRolesResponse.Grant>;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * Hercules Auth user ID whose roles were replaced.
   */
  user_id: string;
}

export namespace UserReplaceRolesResponse {
  /**
   * One persisted direct role grant.
   */
  export interface Grant {
    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at: string | null;

    /**
     * Persisted IAM grant ID.
     */
    grant_id: string;

    /**
     * IAM role granted by this binding.
     */
    role_id: string;

    /**
     * Identifies a role grant.
     */
    type: 'role';
  }
}

export interface UserCreateParams {
  /**
   * Body param: Hercules Auth user ID to add or restore in the tenant.
   */
  user_id: string;

  /**
   * Header param: Authority used for this operation: service or user.
   */
  'X-Hercules-IAM-Actor': 'service' | 'user';

  /**
   * Body param: Role grant assigned to the user. The permanent tenant default role
   * is used when omitted.
   */
  grant?: UserCreateParams.Grant;

  /**
   * Header param: Signed Hercules Auth ID token. Required for user and omitted for
   * service.
   */
  'X-Hercules-User-ID-Token'?: string;
}

export namespace UserCreateParams {
  /**
   * Role grant assigned to the user. The permanent tenant default role is used when
   * omitted.
   */
  export interface Grant {
    /**
     * Role conferred by this grant.
     */
    role: Grant.ID | Grant.Key;

    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at?: string | null;
  }

  export namespace Grant {
    export interface ID {
      /**
       * Existing IAM role ID.
       */
      id: string;
    }

    export interface Key {
      /**
       * Stable role key from the deployment's IAM catalog.
       */
      key: string;
    }
  }
}

export interface UserUpdateParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Body param: Lifecycle transition to apply to the tenant user.
   */
  action: 'approve' | 'activate' | 'suspend';

  /**
   * Header param: Authority used for this operation: service or user.
   */
  'X-Hercules-IAM-Actor': 'service' | 'user';

  /**
   * Header param: Signed Hercules Auth ID token. Required for user and omitted for
   * service.
   */
  'X-Hercules-User-ID-Token'?: string;
}

export interface UserListPermissionOverridesParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Header param: Authority used for this operation: service or user.
   */
  'X-Hercules-IAM-Actor': 'service' | 'user';

  /**
   * Header param: Signed Hercules Auth ID token. Required for user and omitted for
   * service.
   */
  'X-Hercules-User-ID-Token'?: string;
}

export interface UserRemoveParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Header param: Authority used for this operation: service or user.
   */
  'X-Hercules-IAM-Actor': 'service' | 'user';

  /**
   * Header param: Signed Hercules Auth ID token. Required for user and omitted for
   * service.
   */
  'X-Hercules-User-ID-Token'?: string;
}

export interface UserReplacePermissionOverridesParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Body param: Complete desired permission override set. An empty array clears all
   * overrides.
   */
  overrides: Array<UserReplacePermissionOverridesParams.Override>;

  /**
   * Header param: Authority used for this operation: service or user.
   */
  'X-Hercules-IAM-Actor': 'service' | 'user';

  /**
   * Header param: Signed Hercules Auth ID token. Required for user and omitted for
   * service.
   */
  'X-Hercules-User-ID-Token'?: string;
}

export namespace UserReplacePermissionOverridesParams {
  /**
   * One direct permission grant.
   */
  export interface Override {
    /**
     * Whether the permission is allowed or denied.
     */
    effect: 'allow' | 'deny';

    /**
     * Permission changed by this grant.
     */
    permission_key: string;

    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at?: string | null;
  }
}

export interface UserReplaceRolesParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Body param: Complete desired set of direct role grants for the user.
   */
  grants: Array<UserReplaceRolesParams.Grant>;

  /**
   * Header param: Authority used for this operation: service or user.
   */
  'X-Hercules-IAM-Actor': 'service' | 'user';

  /**
   * Header param: Signed Hercules Auth ID token. Required for user and omitted for
   * service.
   */
  'X-Hercules-User-ID-Token'?: string;
}

export namespace UserReplaceRolesParams {
  /**
   * One direct role grant.
   */
  export interface Grant {
    /**
     * Role conferred by this grant.
     */
    role: Grant.ID | Grant.Key;

    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at?: string | null;
  }

  export namespace Grant {
    export interface ID {
      /**
       * Existing IAM role ID.
       */
      id: string;
    }

    export interface Key {
      /**
       * Stable role key from the deployment's IAM catalog.
       */
      key: string;
    }
  }
}

export declare namespace Users {
  export {
    type UserCreateResponse as UserCreateResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserListPermissionOverridesResponse as UserListPermissionOverridesResponse,
    type UserRemoveResponse as UserRemoveResponse,
    type UserReplacePermissionOverridesResponse as UserReplacePermissionOverridesResponse,
    type UserReplaceRolesResponse as UserReplaceRolesResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListPermissionOverridesParams as UserListPermissionOverridesParams,
    type UserRemoveParams as UserRemoveParams,
    type UserReplacePermissionOverridesParams as UserReplacePermissionOverridesParams,
    type UserReplaceRolesParams as UserReplaceRolesParams,
  };
}
