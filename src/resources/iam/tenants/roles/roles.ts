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

export class Roles extends APIResource {
  permissionOverrides: PermissionOverridesAPI.PermissionOverrides =
    new PermissionOverridesAPI.PermissionOverrides(this._client);

  /**
   * Creates a custom tenant role with its complete initial permission set.
   */
  create(tenantID: string, body: RoleCreateParams, options?: RequestOptions): APIPromise<RoleCreateResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/roles`, { body, ...options });
  }

  /**
   * Updates a custom role's name, description, and/or complete permission set. Use
   * tenant-specific permission overrides to customize roles that are reusable across
   * tenants.
   */
  update(roleID: string, params: RoleUpdateParams, options?: RequestOptions): APIPromise<RoleUpdateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/roles/${roleID}`, { body, ...options });
  }

  /**
   * Archives a custom role so it no longer grants access while preserving it for
   * restoration. A tenant's default role cannot be archived.
   */
  archive(
    roleID: string,
    params: RoleArchiveParams,
    options?: RequestOptions,
  ): APIPromise<RoleArchiveResponse> {
    const { tenant_id, actor_token_identifier } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/roles/${roleID}`, {
      query: { actor_token_identifier },
      ...options,
    });
  }

  /**
   * Restores an archived custom role. Its existing assignments and permissions begin
   * granting access again.
   */
  unarchive(
    roleID: string,
    params: RoleUnarchiveParams,
    options?: RequestOptions,
  ): APIPromise<RoleUnarchiveResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(path`/v1/iam/tenants/${tenant_id}/roles/${roleID}/unarchive`, {
      body,
      ...options,
    });
  }
}

/**
 * Created tenant-owned role.
 */
export interface RoleCreateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: RoleCreateResponse.ConvexSourceData;

  /**
   * Confirms that the role was created.
   */
  created: true;

  /**
   * Complete permission key set on the created role.
   */
  permission_keys: Array<string>;

  /**
   * Created tenant role ID.
   */
  role_id: string;

  /**
   * Stable key of the created tenant role.
   */
  role_key: string;

  /**
   * Tenant owning the created role.
   */
  tenant_id: string;
}

export namespace RoleCreateResponse {
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
 * Updated tenant-owned role.
 */
export interface RoleUpdateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: RoleUpdateResponse.ConvexSourceData;

  /**
   * Tenant role changed by the operation.
   */
  role_id: string;

  /**
   * Stable key of the updated tenant role.
   */
  role_key: string;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * Complete current permission key set when permissions were updated.
   */
  permission_keys?: Array<string>;
}

export namespace RoleUpdateResponse {
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
 * Result of changing a tenant role.
 */
export interface RoleArchiveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: RoleArchiveResponse.ConvexSourceData;

  /**
   * Tenant role changed by the operation.
   */
  role_id: string;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

export namespace RoleArchiveResponse {
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
 * Result of changing a tenant role.
 */
export interface RoleUnarchiveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: RoleUnarchiveResponse.ConvexSourceData;

  /**
   * Tenant role changed by the operation.
   */
  role_id: string;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

export namespace RoleUnarchiveResponse {
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

export interface RoleCreateParams {
  /**
   * The signed-in actor's Convex identity tokenIdentifier, passed unchanged by the
   * trusted app backend.
   */
  actor_token_identifier: string | null;

  /**
   * Stable tenant role key.
   */
  key: string;

  /**
   * Human-readable role name.
   */
  name: string;

  /**
   * Optional role description.
   */
  description?: string | null;

  /**
   * Complete initial permission set for the role. Defaults to an empty set.
   */
  permission_keys?: Array<string>;
}

export interface RoleUpdateParams {
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
   * Body param: New role description, or null to clear it.
   */
  description?: string | null;

  /**
   * Body param: New role name.
   */
  name?: string;

  /**
   * Body param: Complete desired permission set for the role.
   */
  permission_keys?: Array<string>;
}

export interface RoleArchiveParams {
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

export interface RoleUnarchiveParams {
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
}

Roles.PermissionOverrides = PermissionOverrides;

export declare namespace Roles {
  export {
    type RoleCreateResponse as RoleCreateResponse,
    type RoleUpdateResponse as RoleUpdateResponse,
    type RoleArchiveResponse as RoleArchiveResponse,
    type RoleUnarchiveResponse as RoleUnarchiveResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleArchiveParams as RoleArchiveParams,
    type RoleUnarchiveParams as RoleUnarchiveParams,
  };

  export {
    PermissionOverrides as PermissionOverrides,
    type PermissionOverrideUpdateResponse as PermissionOverrideUpdateResponse,
    type PermissionOverrideGetResponse as PermissionOverrideGetResponse,
    type PermissionOverrideUpdateParams as PermissionOverrideUpdateParams,
    type PermissionOverrideGetParams as PermissionOverrideGetParams,
  };
}
