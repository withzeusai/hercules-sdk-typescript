// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class PermissionOverrides extends APIResource {
  /**
   * Replaces tenant-specific permission overrides for a role that is reusable across
   * tenants without changing its base permissions. An empty list clears the
   * overrides; omitting the list makes no change. Use the tenant role update
   * operation for custom roles.
   */
  update(
    roleID: string,
    params: PermissionOverrideUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PermissionOverrideUpdateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/roles/${roleID}/permission-overrides`, {
      body,
      ...options,
    });
  }

  /**
   * Returns tenant-specific permission overrides for a role. These overrides
   * customize a role that is reusable across tenants without changing its base
   * permissions.
   */
  get(
    roleID: string,
    params: PermissionOverrideGetParams,
    options?: RequestOptions,
  ): APIPromise<PermissionOverrideGetResponse> {
    const { tenant_id, ...query } = params;
    return this._client.get(path`/v1/iam/tenants/${tenant_id}/roles/${roleID}/permission-overrides`, {
      query,
      ...options,
    });
  }
}

/**
 * Result of changing a tenant role.
 */
export interface PermissionOverrideUpdateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: PermissionOverrideUpdateResponse.ConvexSourceData;

  /**
   * Tenant role changed by the operation.
   */
  role_id: string;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

export namespace PermissionOverrideUpdateResponse {
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

/**
 * Tenant-specific permission overrides for one IAM role.
 */
export interface PermissionOverrideGetResponse {
  /**
   * Complete tenant-specific permission override set for the role.
   */
  overrides: Array<PermissionOverrideGetResponse.Override>;

  /**
   * IAM role whose overrides were returned.
   */
  role_id: string;

  /**
   * Tenant containing the role overrides.
   */
  tenant_id: string;
}

export namespace PermissionOverrideGetResponse {
  /**
   * One tenant-specific role permission override.
   */
  export interface Override {
    /**
     * Whether the permission is allowed or denied.
     */
    effect: 'allow' | 'deny';

    /**
     * IAM permission ID.
     */
    permission_id: string;

    /**
     * Stable IAM permission key.
     */
    permission_key: string;
  }
}

export interface PermissionOverrideUpdateParams {
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
   * Body param: Complete desired role permission override set. An empty array clears
   * all overrides.
   */
  overrides?: Array<PermissionOverrideUpdateParams.Override>;
}

export namespace PermissionOverrideUpdateParams {
  /**
   * One direct permission override.
   */
  export interface Override {
    /**
     * Whether the permission is allowed or denied.
     */
    effect: 'allow' | 'deny';

    /**
     * Permission changed by this override.
     */
    permission_key: string;
  }
}

export interface PermissionOverrideGetParams {
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

export declare namespace PermissionOverrides {
  export {
    type PermissionOverrideUpdateResponse as PermissionOverrideUpdateResponse,
    type PermissionOverrideGetResponse as PermissionOverrideGetResponse,
    type PermissionOverrideUpdateParams as PermissionOverrideUpdateParams,
    type PermissionOverrideGetParams as PermissionOverrideGetParams,
  };
}
