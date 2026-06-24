// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Grants extends APIResource {
  /**
   * Updates or clears expiry on one role grant, user permission override, or
   * resource grant.
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
   * Deletes one role grant, user permission override, or resource grant by grant ID.
   */
  delete(
    grantID: string,
    params: GrantDeleteParams,
    options?: RequestOptions,
  ): APIPromise<GrantDeleteResponse> {
    const { tenant_id, user_token_identifier } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/grants/${grantID}`, {
      query: { user_token_identifier },
      ...options,
    });
  }
}

/**
 * Updated IAM grant.
 */
export interface GrantUpdateResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * One persisted tenant or resource role or permission grant.
   */
  grant:
    | GrantUpdateResponse.IamTenantRoleGrantResult
    | GrantUpdateResponse.IamTenantPermissionGrantResult
    | GrantUpdateResponse.IamResourceRoleGrantResult
    | GrantUpdateResponse.IamResourcePermissionGrantResult;

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

export namespace GrantUpdateResponse {
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

    /**
     * Whether the grant applies only to this resource or also to descendants
     * authorized through it.
     */
    applies_to?: 'self' | 'self_and_descendants';
  }

  /**
   * One persisted resource permission grant.
   */
  export interface IamResourcePermissionGrantResult {
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

    /**
     * Whether the grant applies only to this resource or also to descendants
     * authorized through it.
     */
    applies_to?: 'self' | 'self_and_descendants';
  }
}

/**
 * Result of changing one IAM grant.
 */
export interface GrantDeleteResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * One persisted tenant or resource role or permission grant.
   */
  grant:
    | GrantDeleteResponse.IamTenantRoleGrantResult
    | GrantDeleteResponse.IamTenantPermissionGrantResult
    | GrantDeleteResponse.IamResourceRoleGrantResult
    | GrantDeleteResponse.IamResourcePermissionGrantResult;

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

export namespace GrantDeleteResponse {
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

    /**
     * Whether the grant applies only to this resource or also to descendants
     * authorized through it.
     */
    applies_to?: 'self' | 'self_and_descendants';
  }

  /**
   * One persisted resource permission grant.
   */
  export interface IamResourcePermissionGrantResult {
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

    /**
     * Whether the grant applies only to this resource or also to descendants
     * authorized through it.
     */
    applies_to?: 'self' | 'self_and_descendants';
  }
}

export interface GrantUpdateParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Body param: Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;

  /**
   * Body param: New grant expiry, or null for a non-expiring grant.
   */
  expires_at?: string | null;
}

export interface GrantDeleteParams {
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

export declare namespace Grants {
  export {
    type GrantUpdateResponse as GrantUpdateResponse,
    type GrantDeleteResponse as GrantDeleteResponse,
    type GrantUpdateParams as GrantUpdateParams,
    type GrantDeleteParams as GrantDeleteParams,
  };
}
