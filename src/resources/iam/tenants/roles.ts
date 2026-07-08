// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Roles extends APIResource {
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

  /**
   * Lists the roles visible to a tenant: its tenant-scoped roles plus the
   * deployment's shared and app-scoped roles. Pass a key to fetch one role by its
   * stable key.
   */
  list(
    tenantID: string,
    query: RoleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RoleListResponse> {
    return this._client.get(path`/v1/iam/tenants/${tenantID}/roles`, { query, ...options });
  }

  /**
   * Permanently deletes a tenant-scoped role, cascading its permissions and
   * assignments. Shared and app-scoped roles are managed via iam.jsonc, not this
   * API.
   */
  delete(roleID: string, params: RoleDeleteParams, options?: RequestOptions): APIPromise<RoleDeleteResponse> {
    const { tenant_id, actor_user_id } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/roles/${roleID}`, {
      query: { actor_user_id },
      ...options,
    });
  }

  /**
   * Returns one IAM role by ID, with its full permission set.
   */
  get(roleID: string, params: RoleGetParams, options?: RequestOptions): APIPromise<RoleGetResponse> {
    const { tenant_id } = params;
    return this._client.get(path`/v1/iam/tenants/${tenant_id}/roles/${roleID}`, options);
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
     * The deployment's IAM source version after the operation. Before relying on
     * Convex IAM mirror reads, wait for the projection to reach at least this source
     * version.
     */
    source_version: number;
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
     * The deployment's IAM source version after the operation. Before relying on
     * Convex IAM mirror reads, wait for the projection to reach at least this source
     * version.
     */
    source_version: number;
  }
}

/**
 * Paginated IAM roles.
 */
export interface RoleListResponse {
  /**
   * Role page.
   */
  data: Array<RoleListResponse.Data>;

  /**
   * Whether more records are available after this page.
   */
  has_more: boolean;
}

export namespace RoleListResponse {
  /**
   * One IAM role.
   */
  export interface Data {
    /**
     * Role description, if any.
     */
    description: string | null;

    /**
     * Whether the role is app-scoped.
     */
    is_app_scope: boolean;

    /**
     * Stable role key.
     */
    key: string;

    /**
     * Human-readable role name.
     */
    name: string;

    /**
     * Permissions granted by the role.
     */
    permissions: Array<Data.Permission>;

    /**
     * Role ID.
     */
    role_id: string;

    /**
     * Hercules IAM identifier.
     */
    tenant_id: string | null;
  }

  export namespace Data {
    /**
     * A permission granted by a role.
     */
    export interface Permission {
      /**
       * Stable permission key.
       */
      key: string;

      /**
       * Permission ID.
       */
      permission_id: string;
    }
  }
}

/**
 * Deleted IAM role.
 */
export interface RoleDeleteResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: RoleDeleteResponse.ConvexSourceData;

  /**
   * Deleted role ID.
   */
  role_id: string;
}

export namespace RoleDeleteResponse {
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
     * The deployment's IAM source version after the operation. Before relying on
     * Convex IAM mirror reads, wait for the projection to reach at least this source
     * version.
     */
    source_version: number;
  }
}

/**
 * One IAM role with full permission details.
 */
export interface RoleGetResponse {
  /**
   * Role description, if any.
   */
  description: string | null;

  /**
   * Whether the role is app-scoped.
   */
  is_app_scope: boolean;

  /**
   * Stable role key.
   */
  key: string;

  /**
   * Human-readable role name.
   */
  name: string;

  /**
   * Permissions granted by the role, with full catalog details.
   */
  permissions: Array<RoleGetResponse.Permission>;

  /**
   * Role ID.
   */
  role_id: string;

  /**
   * Hercules IAM identifier.
   */
  tenant_id: string | null;
}

export namespace RoleGetResponse {
  /**
   * A permission granted by a role, with full catalog details.
   */
  export interface Permission {
    /**
     * Permission description, if any.
     */
    description: string | null;

    /**
     * Whether the permission is app-scoped.
     */
    is_app_scope: boolean;

    /**
     * Stable permission key.
     */
    key: string;

    /**
     * Human-readable permission name.
     */
    name: string;

    /**
     * Permission ID.
     */
    permission_id: string;
  }
}

export interface RoleCreateParams {
  /**
   * The signed-in end user's ID (their OIDC subject), asserted by the trusted app
   * backend. Used for identity and audit only.
   */
  actor_user_id: string | null;

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
   * Body param: The signed-in end user's ID (their OIDC subject), asserted by the
   * trusted app backend. Used for identity and audit only.
   */
  actor_user_id: string | null;

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

export interface RoleListParams {
  /**
   * Return only the role with this stable key, resolved within the tenant scope.
   */
  key?: string;

  /**
   * Maximum number of records to return. Defaults to 50.
   */
  limit?: number;

  /**
   * Cursor for forward pagination. Pass the ID of the last item from the previous
   * page.
   */
  starting_after?: string;
}

export interface RoleDeleteParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary
   * tenant.
   */
  tenant_id: string;

  /**
   * Query param: The signed-in end user's ID to attribute the operation to that
   * user, or omitted for service authority.
   */
  actor_user_id?: string;
}

export interface RoleGetParams {
  /**
   * The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
}

export declare namespace Roles {
  export {
    type RoleCreateResponse as RoleCreateResponse,
    type RoleUpdateResponse as RoleUpdateResponse,
    type RoleListResponse as RoleListResponse,
    type RoleDeleteResponse as RoleDeleteResponse,
    type RoleGetResponse as RoleGetResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
    type RoleDeleteParams as RoleDeleteParams,
    type RoleGetParams as RoleGetParams,
  };
}
