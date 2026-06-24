// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MembersAPI from './members';
import {
  MemberAddParams,
  MemberAddResponse,
  MemberRemoveParams,
  MemberRemoveResponse,
  Members,
} from './members';
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

export class Groups extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  permissionOverrides: PermissionOverridesAPI.PermissionOverrides =
    new PermissionOverridesAPI.PermissionOverrides(this._client);

  /**
   * Creates a group in one IAM tenant.
   */
  create(
    tenantID: string,
    body: GroupCreateParams,
    options?: RequestOptions,
  ): APIPromise<GroupCreateResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/groups`, { body, ...options });
  }

  /**
   * Updates one tenant group's name, lifecycle state, or direct role grants.
   */
  update(
    groupID: string,
    params: GroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GroupUpdateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}`, { body, ...options });
  }

  /**
   * Archives one tenant group.
   */
  archive(
    groupID: string,
    params: GroupArchiveParams,
    options?: RequestOptions,
  ): APIPromise<GroupArchiveResponse> {
    const { tenant_id, user_token_identifier } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}`, {
      query: { user_token_identifier },
      ...options,
    });
  }

  /**
   * Unarchives one tenant group.
   */
  unarchive(
    groupID: string,
    params: GroupUnarchiveParams,
    options?: RequestOptions,
  ): APIPromise<GroupUnarchiveResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}/unarchive`, {
      body,
      ...options,
    });
  }
}

/**
 * Created tenant group.
 */
export interface GroupCreateResponse {
  /**
   * Confirms that the group was created.
   */
  created: true;

  /**
   * Created tenant group ID.
   */
  group_id: string;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant containing the created group.
   */
  tenant_id: string;
}

/**
 * Updated tenant group.
 */
export interface GroupUpdateResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Tenant group changed by the operation.
   */
  group_id: string;

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
   * Complete resulting direct role grant set.
   */
  grants?: Array<GroupUpdateResponse.Grant>;

  /**
   * Tenant group's previous status.
   */
  previous_status?: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';

  /**
   * Tenant group's current status.
   */
  status?: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';
}

export namespace GroupUpdateResponse {
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
 * Result of changing a tenant group.
 */
export interface GroupArchiveResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Tenant group changed by the operation.
   */
  group_id: string;

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
}

/**
 * Result of changing a tenant group.
 */
export interface GroupUnarchiveResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Tenant group changed by the operation.
   */
  group_id: string;

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
}

export interface GroupCreateParams {
  /**
   * Human-readable group name.
   */
  name: string;

  /**
   * Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;
}

export interface GroupUpdateParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Body param: Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;

  /**
   * Body param: Optional lifecycle transition to apply to the tenant group.
   */
  action?: 'suspend' | 'unsuspend';

  /**
   * Body param: New human-readable group name.
   */
  name?: string;

  /**
   * Body param: Complete desired set of direct role grants for the group.
   */
  roles?: Array<GroupUpdateParams.Role>;
}

export namespace GroupUpdateParams {
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

export interface GroupArchiveParams {
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

export interface GroupUnarchiveParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Body param: Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;
}

Groups.Members = Members;
Groups.PermissionOverrides = PermissionOverrides;

export declare namespace Groups {
  export {
    type GroupCreateResponse as GroupCreateResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupArchiveResponse as GroupArchiveResponse,
    type GroupUnarchiveResponse as GroupUnarchiveResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupArchiveParams as GroupArchiveParams,
    type GroupUnarchiveParams as GroupUnarchiveParams,
  };

  export {
    Members as Members,
    type MemberAddResponse as MemberAddResponse,
    type MemberRemoveResponse as MemberRemoveResponse,
    type MemberAddParams as MemberAddParams,
    type MemberRemoveParams as MemberRemoveParams,
  };

  export {
    PermissionOverrides as PermissionOverrides,
    type PermissionOverrideUpdateResponse as PermissionOverrideUpdateResponse,
    type PermissionOverrideGetResponse as PermissionOverrideGetResponse,
    type PermissionOverrideUpdateParams as PermissionOverrideUpdateParams,
    type PermissionOverrideGetParams as PermissionOverrideGetParams,
  };
}
