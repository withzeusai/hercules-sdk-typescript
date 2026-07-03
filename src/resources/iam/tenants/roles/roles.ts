// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PermissionOverridesAPI from './permission-overrides';
import { PermissionOverrides } from './permission-overrides';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Roles extends APIResource {
  permissionOverrides: PermissionOverridesAPI.PermissionOverrides =
    new PermissionOverridesAPI.PermissionOverrides(this._client);

  /**
   * Creates a tenant-scoped role with a permission set. Shared and app-scoped roles
   * are managed via iam.jsonc, not this API.
   */
  create(tenantID: string, body: RoleCreateParams, options?: RequestOptions): APIPromise<RoleCreateResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/roles`, { body, ...options });
  }

  /**
   * Updates a tenant-scoped role's name, description, or permission set. Shared and
   * app-scoped roles are managed via iam.jsonc, not this API.
   */
  update(roleID: string, params: RoleUpdateParams, options?: RequestOptions): APIPromise<RoleUpdateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/roles/${roleID}`, { body, ...options });
  }
}

/**
 * Created IAM role.
 */
export interface RoleCreateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: RoleCreateResponse.ConvexSourceData;

  /**
   * Whether the role is app-scoped (app-wide authority, primary-tenant-only).
   */
  is_app_scope: boolean;

  /**
   * Created role ID.
   */
  role_id: string;
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
     * Deployment IAM state version after the operation. Before relying on Convex IAM
     * mirror reads, wait for the projection to reach at least this version.
     */
    version: number;
  }
}

/**
 * Result of changing an IAM role.
 */
export interface RoleUpdateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: RoleUpdateResponse.ConvexSourceData;

  /**
   * Whether the role is app-scoped (app-wide authority, primary-tenant-only).
   */
  is_app_scope: boolean;

  /**
   * Role changed by the operation.
   */
  role_id: string;
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
     * Deployment IAM state version after the operation. Before relying on Convex IAM
     * mirror reads, wait for the projection to reach at least this version.
     */
    version: number;
  }
}

export interface RoleCreateParams {
  /**
   * The signed-in end user's Hercules Auth tokenIdentifier, passed unchanged by the
   * trusted app backend. Used for identity and audit only.
   */
  actor_token_identifier: string | null;

  /**
   * Stable, unique key for the role within its scope.
   */
  key: string;

  /**
   * Human-readable role name.
   */
  name: string;

  /**
   * Permission keys from the deployment's IAM catalog granted by this role.
   */
  permission_keys: Array<string>;

  /**
   * Optional human-readable role description.
   */
  description?: string | null;
}

export interface RoleUpdateParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary
   * tenant.
   */
  tenant_id: string;

  /**
   * Body param: The signed-in end user's Hercules Auth tokenIdentifier, passed
   * unchanged by the trusted app backend. Used for identity and audit only.
   */
  actor_token_identifier: string | null;

  /**
   * Body param: Optional human-readable role description.
   */
  description?: string | null;

  /**
   * Body param: New human-readable role name.
   */
  name?: string;

  /**
   * Body param: Replacement permission set. Omit to leave the role's permissions
   * unchanged.
   */
  permission_keys?: Array<string>;
}

Roles.PermissionOverrides = PermissionOverrides;

export declare namespace Roles {
  export {
    type RoleCreateResponse as RoleCreateResponse,
    type RoleUpdateResponse as RoleUpdateResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
  };

  export { PermissionOverrides as PermissionOverrides };
}
