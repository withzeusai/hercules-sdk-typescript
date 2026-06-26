// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class PermissionOverrides extends APIResource {
  /**
   * Replaces a user's complete direct tenant permission override set. An empty list
   * clears the overrides; omitting the list makes no change.
   */
  update(
    userID: string,
    params: PermissionOverrideUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PermissionOverrideUpdateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/users/${userID}/permission-overrides`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a user's direct tenant permission overrides. It does not include
   * permissions inherited from roles, groups, or resource grants.
   */
  get(
    userID: string,
    params: PermissionOverrideGetParams,
    options?: RequestOptions,
  ): APIPromise<PermissionOverrideGetResponse> {
    const { tenant_id, ...query } = params;
    return this._client.get(path`/v1/iam/tenants/${tenant_id}/users/${userID}/permission-overrides`, {
      query,
      ...options,
    });
  }
}

/**
 * Updated direct permission overrides for one tenant user.
 */
export interface PermissionOverrideUpdateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: PermissionOverrideUpdateResponse.ConvexSourceData;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * User ID whose overrides were updated.
   */
  user_id: string;

  /**
   * Complete resulting direct permission override set.
   */
  grants?: Array<PermissionOverrideUpdateResponse.Grant>;
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

  /**
   * One persisted tenant permission grant.
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
}

/**
 * Direct permission overrides for one tenant user.
 */
export interface PermissionOverrideGetResponse {
  /**
   * Complete direct permission override set for the user.
   */
  grants: Array<PermissionOverrideGetResponse.Grant>;

  /**
   * Tenant containing the user.
   */
  tenant_id: string;

  /**
   * User ID whose overrides were returned.
   */
  user_id: string;
}

export namespace PermissionOverrideGetResponse {
  /**
   * One persisted tenant permission grant.
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
}

export interface PermissionOverrideUpdateParams {
  /**
   * Path param: The tenant ID. Pass `root` to target the deployment's root tenant.
   */
  tenant_id: string;

  /**
   * Body param: The signed-in actor's Convex identity tokenIdentifier, passed
   * unchanged by the trusted app backend.
   */
  actor_token_identifier: string | null;

  /**
   * Body param: Complete desired permission override set. An empty array clears all
   * overrides.
   */
  overrides?: Array<PermissionOverrideUpdateParams.Override>;
}

export namespace PermissionOverrideUpdateParams {
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
     * Grant expiry. Omit or pass null for a permanent grant.
     */
    expires_at?: string | null;
  }
}

export interface PermissionOverrideGetParams {
  /**
   * Path param: The tenant ID. Pass `root` to target the deployment's root tenant.
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
