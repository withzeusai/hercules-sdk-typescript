// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class PermissionOverrides extends APIResource {
  /**
   * Updates the complete tenant-specific permission override set for one role.
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
   * Returns tenant-specific permission overrides for one IAM role.
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
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * Tenant role changed by the operation.
   */
  role_id: string;

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
   * Path param
   */
  tenant_id: string;

  /**
   * Body param: Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;

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
