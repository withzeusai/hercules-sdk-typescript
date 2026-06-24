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
   * Creates a tenant-owned IAM role with its initial permission set.
   */
  create(tenantID: string, body: RoleCreateParams, options?: RequestOptions): APIPromise<RoleCreateResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/roles`, { body, ...options });
  }

  /**
   * Updates role metadata or its complete permission set.
   */
  update(roleID: string, params: RoleUpdateParams, options?: RequestOptions): APIPromise<RoleUpdateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/roles/${roleID}`, { body, ...options });
  }

  /**
   * Archives one tenant-owned IAM role.
   */
  archive(
    roleID: string,
    params: RoleArchiveParams,
    options?: RequestOptions,
  ): APIPromise<RoleArchiveResponse> {
    const { tenant_id, user_token_identifier } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/roles/${roleID}`, {
      query: { user_token_identifier },
      ...options,
    });
  }

  /**
   * Unarchives one tenant-owned IAM role.
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
   * Confirms that the role was created.
   */
  created: true;

  /**
   * Complete permission key set on the created role.
   */
  permission_keys: Array<string>;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * Created tenant role ID.
   */
  role_id: string;

  /**
   * Stable key of the created tenant role.
   */
  role_key: string;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant owning the created role.
   */
  tenant_id: string;
}

/**
 * Updated tenant-owned role.
 */
export interface RoleUpdateResponse {
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

  /**
   * Complete current permission key set when permissions were updated.
   */
  permission_keys?: Array<string>;
}

/**
 * Result of changing a tenant role.
 */
export interface RoleArchiveResponse {
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
 * Result of changing a tenant role.
 */
export interface RoleUnarchiveResponse {
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

export interface RoleCreateParams {
  /**
   * Stable tenant role key.
   */
  key: string;

  /**
   * Human-readable role name.
   */
  name: string;

  /**
   * Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;

  /**
   * Optional role description.
   */
  description?: string | null;

  /**
   * Complete initial permission set for the role.
   */
  permission_keys?: Array<string>;
}

export interface RoleUpdateParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Body param: Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;

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
   * Path param
   */
  tenant_id: string;

  /**
   * Query param: Convex identity tokenIdentifier asserted by the trusted app
   * backend.
   */
  user_token_identifier: string | null;
}

export interface RoleUnarchiveParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Body param: Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;
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
