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
   * Creates or restores a user in one tenant with the requested role grants.
   */
  create(tenantID: string, body: UserCreateParams, options?: RequestOptions): APIPromise<UserCreateResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/users`, { body, ...options });
  }

  /**
   * Updates one tenant user's lifecycle state or direct role grants.
   */
  update(userID: string, params: UserUpdateParams, options?: RequestOptions): APIPromise<UserUpdateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/users/${userID}`, { body, ...options });
  }

  /**
   * Removes one user from a tenant.
   */
  remove(userID: string, params: UserRemoveParams, options?: RequestOptions): APIPromise<UserRemoveResponse> {
    const { tenant_id, user_token_identifier } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/users/${userID}`, {
      query: { user_token_identifier },
      ...options,
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
   * Direct role grants assigned to the tenant user.
   */
  grants: Array<UserCreateResponse.Grant>;

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
   * Hercules Auth user ID that was updated.
   */
  user_id: string;

  /**
   * Complete resulting direct role grant set.
   */
  grants?: Array<UserUpdateResponse.Grant>;

  /**
   * Tenant user's previous status.
   */
  previous_status?: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';

  /**
   * Tenant user's current status.
   */
  status?: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';
}

export namespace UserUpdateResponse {
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

export interface UserCreateParams {
  /**
   * Role grants assigned to the user. An empty array assigns the permanent tenant
   * default role.
   */
  roles: Array<UserCreateParams.Role>;

  /**
   * Hercules Auth user ID to add or restore in the tenant.
   */
  user_id: string;

  /**
   * Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;
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
     * Grant expiry, or null for a permanent grant.
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
   * Path param
   */
  tenant_id: string;

  /**
   * Body param: Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;

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
     * Grant expiry, or null for a permanent grant.
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
   * Path param
   */
  tenant_id: string;

  /**
   * Query param: Convex identity tokenIdentifier asserted by the trusted app
   * backend.
   */
  user_token_identifier: string | null;
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
