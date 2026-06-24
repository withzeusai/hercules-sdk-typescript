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
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Groups extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);

  /**
   * Creates a group in one IAM tenant.
   */
  create(
    tenantID: string,
    params: GroupCreateParams,
    options?: RequestOptions,
  ): APIPromise<GroupCreateResponse> {
    const {
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.post(path`/v1/iam/tenants/${tenantID}/groups`, {
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
   * Renames, suspends, or reactivates one tenant group.
   */
  update(
    groupID: string,
    params: GroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GroupUpdateResponse> {
    const {
      tenant_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}`, {
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
   * Archives one tenant group.
   */
  archive(
    groupID: string,
    params: GroupArchiveParams,
    options?: RequestOptions,
  ): APIPromise<GroupArchiveResponse> {
    const {
      tenant_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
    } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}`, {
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
   * Returns the direct permission overrides for one tenant group.
   */
  listPermissionOverrides(
    groupID: string,
    params: GroupListPermissionOverridesParams,
    options?: RequestOptions,
  ): APIPromise<GroupListPermissionOverridesResponse> {
    const {
      tenant_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
    } = params;
    return this._client.get(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}/permission-overrides`, {
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
   * Replaces the complete direct permission override set for one tenant group.
   */
  replacePermissionOverrides(
    groupID: string,
    params: GroupReplacePermissionOverridesParams,
    options?: RequestOptions,
  ): APIPromise<GroupReplacePermissionOverridesResponse> {
    const {
      tenant_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.put(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}/permission-overrides`, {
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
   * Replaces the complete direct role set for one tenant group.
   */
  replaceRoles(
    groupID: string,
    params: GroupReplaceRolesParams,
    options?: RequestOptions,
  ): APIPromise<GroupReplaceRolesResponse> {
    const {
      tenant_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.put(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}/roles`, {
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
 * Result of renaming or changing the status of a tenant group.
 */
export type GroupUpdateResponse = GroupUpdateResponse.UnionMember0 | GroupUpdateResponse.UnionMember1;

export namespace GroupUpdateResponse {
  /**
   * Result of changing a tenant group.
   */
  export interface UnionMember0 {
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
   * Updated tenant group status.
   */
  export interface UnionMember1 {
    /**
     * Whether persisted IAM state changed.
     */
    changed: boolean;

    /**
     * Tenant group whose status changed.
     */
    group_id: string;

    /**
     * Tenant group's previous status.
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
     * Tenant group's current status.
     */
    status: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';

    /**
     * Tenant changed by the operation.
     */
    tenant_id: string;
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
 * Direct permission overrides for one tenant group.
 */
export interface GroupListPermissionOverridesResponse {
  /**
   * Complete direct permission override set for the group.
   */
  grants: Array<GroupListPermissionOverridesResponse.Grant>;

  /**
   * Tenant group whose overrides were returned.
   */
  group_id: string;

  /**
   * Tenant containing the group.
   */
  tenant_id: string;
}

export namespace GroupListPermissionOverridesResponse {
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
 * Replaced direct permission overrides for one tenant group.
 */
export interface GroupReplacePermissionOverridesResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Complete resulting direct permission override set.
   */
  grants: Array<GroupReplacePermissionOverridesResponse.Grant>;

  /**
   * Tenant group whose overrides were replaced.
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

export namespace GroupReplacePermissionOverridesResponse {
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
 * Replaced a tenant group's direct roles.
 */
export interface GroupReplaceRolesResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Complete resulting direct role grant set.
   */
  grants: Array<GroupReplaceRolesResponse.Grant>;

  /**
   * Tenant group whose roles were replaced.
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

export namespace GroupReplaceRolesResponse {
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

export interface GroupCreateParams {
  /**
   * Body param: Human-readable group name.
   */
  name: string;

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

export type GroupUpdateParams =
  | GroupUpdateParams.Variant0
  | GroupUpdateParams.Variant1
  | GroupUpdateParams.Variant2;

export declare namespace GroupUpdateParams {
  export interface Variant0 {
    /**
     * Path param
     */
    tenant_id: string;

    /**
     * Body param: Rename the tenant group.
     */
    action: 'rename';

    /**
     * Body param: New human-readable group name.
     */
    name: string;

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

  export interface Variant1 {
    /**
     * Path param
     */
    tenant_id: string;

    /**
     * Body param: Suspend the tenant group.
     */
    action: 'suspend';

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

  export interface Variant2 {
    /**
     * Path param
     */
    tenant_id: string;

    /**
     * Body param: Reactivate the suspended tenant group.
     */
    action: 'activate';

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
}

export interface GroupArchiveParams {
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

export interface GroupListPermissionOverridesParams {
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

export interface GroupReplacePermissionOverridesParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Body param: Complete desired permission override set. An empty array clears all
   * overrides.
   */
  overrides: Array<GroupReplacePermissionOverridesParams.Override>;

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

export namespace GroupReplacePermissionOverridesParams {
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

export interface GroupReplaceRolesParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Body param: Complete desired set of direct role grants for the group.
   */
  grants: Array<GroupReplaceRolesParams.Grant>;

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

export namespace GroupReplaceRolesParams {
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

Groups.Members = Members;

export declare namespace Groups {
  export {
    type GroupCreateResponse as GroupCreateResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupArchiveResponse as GroupArchiveResponse,
    type GroupListPermissionOverridesResponse as GroupListPermissionOverridesResponse,
    type GroupReplacePermissionOverridesResponse as GroupReplacePermissionOverridesResponse,
    type GroupReplaceRolesResponse as GroupReplaceRolesResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupArchiveParams as GroupArchiveParams,
    type GroupListPermissionOverridesParams as GroupListPermissionOverridesParams,
    type GroupReplacePermissionOverridesParams as GroupReplacePermissionOverridesParams,
    type GroupReplaceRolesParams as GroupReplaceRolesParams,
  };

  export {
    Members as Members,
    type MemberAddResponse as MemberAddResponse,
    type MemberRemoveResponse as MemberRemoveResponse,
    type MemberAddParams as MemberAddParams,
    type MemberRemoveParams as MemberRemoveParams,
  };
}
