// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Grants extends APIResource {
  /**
   * Updates or clears the expiration time of an existing role grant or direct user
   * or group permission override. Role permission overrides cannot expire; omitting
   * the expiration time makes no change.
   */
  update(
    grantID: string,
    params: GrantUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GrantUpdateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/grants/${grantID}`, { body, ...options });
  }

  /**
   * Permanently revokes an existing role grant or direct user or group permission
   * override. Role permission overrides must be changed through the role permission
   * override operation, and the tenant's last Owner grant cannot be revoked.
   */
  delete(
    grantID: string,
    params: GrantDeleteParams,
    options?: RequestOptions,
  ): APIPromise<GrantDeleteResponse> {
    const { tenant_id, actor_token_identifier } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/grants/${grantID}`, {
      query: { actor_token_identifier },
      ...options,
    });
  }
}

/**
 * Updated IAM grant.
 */
export interface GrantUpdateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GrantUpdateResponse.ConvexSourceData;

  /**
   * One persisted tenant or resource role or permission grant.
   */
  grant:
    | GrantUpdateResponse.IamTenantRoleGrantResult
    | GrantUpdateResponse.IamTenantPermissionGrantResult
    | GrantUpdateResponse.IamResourceRoleGrantResult
    | GrantUpdateResponse.IamResourcePermissionGrantResult;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

export namespace GrantUpdateResponse {
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
  export interface IamTenantRoleGrantResult {
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
   * One persisted tenant permission grant.
   */
  export interface IamTenantPermissionGrantResult {
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
     * IAM permission granted or denied by this grant.
     */
    permission_id: string;

    /**
     * Stable IAM permission key.
     */
    permission_key: string;

    /**
     * Identifies a tenant permission grant.
     */
    type: 'tenant_permission';
  }

  /**
   * One persisted resource role grant.
   */
  export interface IamResourceRoleGrantResult {
    /**
     * Whether the grant applies only to this resource or also to descendants.
     */
    applies_to: 'self' | 'self_and_descendants';

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
     * Identifies a resource role grant.
     */
    type: 'resource_role';
  }

  /**
   * One persisted resource permission grant.
   */
  export interface IamResourcePermissionGrantResult {
    /**
     * Whether the grant applies only to this resource or also to descendants.
     */
    applies_to: 'self' | 'self_and_descendants';

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
     * IAM permission granted or denied by this grant.
     */
    permission_id: string;

    /**
     * Stable IAM permission key.
     */
    permission_key: string;

    /**
     * Identifies a resource permission grant.
     */
    type: 'resource_permission';
  }
}

/**
 * Result of changing one IAM grant.
 */
export interface GrantDeleteResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GrantDeleteResponse.ConvexSourceData;

  /**
   * One persisted tenant or resource role or permission grant.
   */
  grant:
    | GrantDeleteResponse.IamTenantRoleGrantResult
    | GrantDeleteResponse.IamTenantPermissionGrantResult
    | GrantDeleteResponse.IamResourceRoleGrantResult
    | GrantDeleteResponse.IamResourcePermissionGrantResult;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

export namespace GrantDeleteResponse {
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
  export interface IamTenantRoleGrantResult {
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
   * One persisted tenant permission grant.
   */
  export interface IamTenantPermissionGrantResult {
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
     * IAM permission granted or denied by this grant.
     */
    permission_id: string;

    /**
     * Stable IAM permission key.
     */
    permission_key: string;

    /**
     * Identifies a tenant permission grant.
     */
    type: 'tenant_permission';
  }

  /**
   * One persisted resource role grant.
   */
  export interface IamResourceRoleGrantResult {
    /**
     * Whether the grant applies only to this resource or also to descendants.
     */
    applies_to: 'self' | 'self_and_descendants';

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
     * Identifies a resource role grant.
     */
    type: 'resource_role';
  }

  /**
   * One persisted resource permission grant.
   */
  export interface IamResourcePermissionGrantResult {
    /**
     * Whether the grant applies only to this resource or also to descendants.
     */
    applies_to: 'self' | 'self_and_descendants';

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
     * IAM permission granted or denied by this grant.
     */
    permission_id: string;

    /**
     * Stable IAM permission key.
     */
    permission_key: string;

    /**
     * Identifies a resource permission grant.
     */
    type: 'resource_permission';
  }
}

export interface GrantUpdateParams {
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
   * Body param: New grant expiry, or null for a non-expiring grant.
   */
  expires_at?: string | null;
}

export interface GrantDeleteParams {
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

export declare namespace Grants {
  export {
    type GrantUpdateResponse as GrantUpdateResponse,
    type GrantDeleteResponse as GrantDeleteResponse,
    type GrantUpdateParams as GrantUpdateParams,
    type GrantDeleteParams as GrantDeleteParams,
  };
}
