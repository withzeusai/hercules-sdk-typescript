// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PermissionOverridesAPI from './permission-overrides';
import {
  PermissionOverrideGetParams,
  PermissionOverrideGetResponse,
  PermissionOverrideUpdateParams,
  PermissionOverrideUpdateResponse,
  PermissionOverrides,
} from './permission-overrides';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Users extends APIResource {
  permissionOverrides: PermissionOverridesAPI.PermissionOverrides =
    new PermissionOverridesAPI.PermissionOverrides(this._client);

  /**
   * Adds a user to the tenant or restores a removed or suspended user. A non-empty
   * role list replaces the user's complete direct tenant roles; an empty list
   * ensures the default role without removing existing roles.
   */
  create(tenantID: string, body: UserCreateParams, options?: RequestOptions): APIPromise<UserCreateResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/users`, { body, ...options });
  }

  /**
   * Approves, suspends, or unsuspends a tenant user and/or replaces their direct
   * tenant roles. Omitted fields are left unchanged.
   */
  update(userID: string, params: UserUpdateParams, options?: RequestOptions): APIPromise<UserUpdateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/users/${userID}`, { body, ...options });
  }

  /**
   * Removes a user from the tenant and revokes their direct roles, permission
   * overrides, resource grants, and group memberships. The last Owner cannot be
   * removed.
   */
  remove(userID: string, params: UserRemoveParams, options?: RequestOptions): APIPromise<UserRemoveResponse> {
    const { tenant_id, actor_token_identifier } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/users/${userID}`, {
      query: { actor_token_identifier },
      ...options,
    });
  }
}

/**
 * Added or restored tenant user.
 */
export interface UserCreateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: UserCreateResponse.ConvexSourceData;

  /**
   * Direct role grants assigned to the tenant user.
   */
  grants: Array<UserCreateResponse.Grant>;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * User ID added to the tenant.
   */
  user_id: string;
}

export namespace UserCreateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  export interface ConvexSourceData {
    /**
     * Whether persisted IAM source data changed.
     */
    changed: boolean;

    /**
     * Convex deployment IDs whose IAM mirrors will receive the updated state.
     */
    projection_ids: Array<string>;

    /**
     * IAM source version after the operation. Before relying on Convex IAM mirror
     * reads, wait for each returned projection to reach at least this version.
     */
    version: number;
  }

  /**
   * One persisted tenant role grant.
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
     * IAM role conferred by this grant.
     */
    role_id: string;

    /**
     * Identifies a tenant role grant.
     */
    type: 'tenant_role';
  }
}

/**
 * Updated tenant user.
 */
export interface UserUpdateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: UserUpdateResponse.ConvexSourceData;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * User ID that was updated.
   */
  user_id: string;

  /**
   * Complete resulting direct role grant set.
   */
  grants?: Array<UserUpdateResponse.Grant>;

  /**
   * Previous values for fields changed by the update.
   */
  previous?: UserUpdateResponse.Previous;

  /**
   * Tenant user's current status.
   */
  status?: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';
}

export namespace UserUpdateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  export interface ConvexSourceData {
    /**
     * Whether persisted IAM source data changed.
     */
    changed: boolean;

    /**
     * Convex deployment IDs whose IAM mirrors will receive the updated state.
     */
    projection_ids: Array<string>;

    /**
     * IAM source version after the operation. Before relying on Convex IAM mirror
     * reads, wait for each returned projection to reach at least this version.
     */
    version: number;
  }

  /**
   * One persisted tenant role grant.
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
     * IAM role conferred by this grant.
     */
    role_id: string;

    /**
     * Identifies a tenant role grant.
     */
    type: 'tenant_role';
  }

  /**
   * Previous values for fields changed by the update.
   */
  export interface Previous {
    /**
     * Tenant user's previous status.
     */
    status: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';
  }
}

/**
 * Removed tenant user.
 */
export interface UserRemoveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: UserRemoveResponse.ConvexSourceData;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * User ID removed from the tenant.
   */
  user_id: string;
}

export namespace UserRemoveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  export interface ConvexSourceData {
    /**
     * Whether persisted IAM source data changed.
     */
    changed: boolean;

    /**
     * Convex deployment IDs whose IAM mirrors will receive the updated state.
     */
    projection_ids: Array<string>;

    /**
     * IAM source version after the operation. Before relying on Convex IAM mirror
     * reads, wait for each returned projection to reach at least this version.
     */
    version: number;
  }
}

export interface UserCreateParams {
  /**
   * The signed-in actor's Convex identity tokenIdentifier, passed unchanged by the
   * trusted app backend.
   */
  actor_token_identifier: string | null;

  /**
   * Role grants assigned to the user. An empty array assigns the permanent tenant
   * default role.
   */
  roles: Array<UserCreateParams.Role>;

  /**
   * Target user ID to add or restore in the tenant. Do not pass a token identifier.
   */
  user_id: string;
}

export namespace UserCreateParams {
  /**
   * One direct role grant.
   */
  export interface Role {
    /**
     * Role receiving the overrides.
     */
    role: Role.IamRoleIDReference | Role.IamRoleKeyReference;

    /**
     * Grant expiry. Omit or pass null for a permanent grant.
     */
    expires_at?: string | null;
  }

  export namespace Role {
    export interface IamRoleIDReference {
      /**
       * Existing IAM role ID.
       */
      id: string;
    }

    export interface IamRoleKeyReference {
      /**
       * Stable role key from the deployment's IAM catalog.
       */
      key: string;
    }
  }
}

export interface UserUpdateParams {
  /**
   * Path param: The tenant ID. Pass `default` to target the deployment's default
   * tenant.
   */
  tenant_id: string;

  /**
   * Body param: The signed-in actor's Convex identity tokenIdentifier, passed
   * unchanged by the trusted app backend.
   */
  actor_token_identifier: string | null;

  /**
   * Body param: Optional lifecycle transition to apply to the tenant user.
   */
  action?: 'approve' | 'suspend' | 'unsuspend';

  /**
   * Body param: Complete desired set of direct role grants for the user.
   */
  roles?: Array<UserUpdateParams.Role>;
}

export namespace UserUpdateParams {
  /**
   * One direct role grant.
   */
  export interface Role {
    /**
     * Role receiving the overrides.
     */
    role: Role.IamRoleIDReference | Role.IamRoleKeyReference;

    /**
     * Grant expiry. Omit or pass null for a permanent grant.
     */
    expires_at?: string | null;
  }

  export namespace Role {
    export interface IamRoleIDReference {
      /**
       * Existing IAM role ID.
       */
      id: string;
    }

    export interface IamRoleKeyReference {
      /**
       * Stable role key from the deployment's IAM catalog.
       */
      key: string;
    }
  }
}

export interface UserRemoveParams {
  /**
   * Path param: The tenant ID. Pass `default` to target the deployment's default
   * tenant.
   */
  tenant_id: string;

  /**
   * Query param: The signed-in actor's Convex identity tokenIdentifier, passed
   * unchanged by the trusted app backend.
   */
  actor_token_identifier: string | null;
}

Users.PermissionOverrides = PermissionOverrides;

export declare namespace Users {
  export {
    type UserCreateResponse as UserCreateResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserRemoveResponse as UserRemoveResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserRemoveParams as UserRemoveParams,
  };

  export {
    PermissionOverrides as PermissionOverrides,
    type PermissionOverrideUpdateResponse as PermissionOverrideUpdateResponse,
    type PermissionOverrideGetResponse as PermissionOverrideGetResponse,
    type PermissionOverrideUpdateParams as PermissionOverrideUpdateParams,
    type PermissionOverrideGetParams as PermissionOverrideGetParams,
  };
}
