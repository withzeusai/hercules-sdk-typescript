// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class PermissionOverrides extends APIResource {
  /**
   * Updates the complete direct permission override set for one tenant group.
   */
  update(
    groupID: string,
    params: PermissionOverrideUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PermissionOverrideUpdateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}/permission-overrides`, {
      body,
      ...options,
    });
  }

  /**
   * Returns the direct permission overrides for one tenant group.
   */
  get(
    groupID: string,
    params: PermissionOverrideGetParams,
    options?: RequestOptions,
  ): APIPromise<PermissionOverrideGetResponse> {
    const { tenant_id, ...query } = params;
    return this._client.get(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}/permission-overrides`, {
      query,
      ...options,
    });
  }
}

/**
 * Updated direct permission overrides for one tenant group.
 */
export interface PermissionOverrideUpdateResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Tenant group whose overrides were updated.
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
   * Complete resulting direct permission override set.
   */
  grants?: Array<PermissionOverrideUpdateResponse.Grant>;
}

export namespace PermissionOverrideUpdateResponse {
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
 * Direct permission overrides for one tenant group.
 */
export interface PermissionOverrideGetResponse {
  /**
   * Complete direct permission override set for the group.
   */
  grants: Array<PermissionOverrideGetResponse.Grant>;

  /**
   * Tenant group whose overrides were returned.
   */
  group_id: string;

  /**
   * Tenant containing the group.
   */
  tenant_id: string;
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
   * Path param
   */
  tenant_id: string;

  /**
   * Body param: Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;

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
     * Grant expiry, or null for a permanent grant.
     */
    expires_at?: string | null;
  }
}

export interface PermissionOverrideGetParams {
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

export declare namespace PermissionOverrides {
  export {
    type PermissionOverrideUpdateResponse as PermissionOverrideUpdateResponse,
    type PermissionOverrideGetResponse as PermissionOverrideGetResponse,
    type PermissionOverrideUpdateParams as PermissionOverrideUpdateParams,
    type PermissionOverrideGetParams as PermissionOverrideGetParams,
  };
}
