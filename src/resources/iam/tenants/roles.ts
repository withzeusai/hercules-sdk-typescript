// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../../core/pagination';
import type { RequestOptions } from '../../../internal/request-options';
import { path as __scalarPath } from '../../../internal/utils/path';

export class Roles extends APIResource {
  /**
   * Creates a tenant-scoped role with a permission set. Shared and app-scoped roles are managed via iam.jsonc, not this API.
   *
   * @param {string} tenantID - The tenant ID. Pass `primary` to target the deployment's primary tenant.
   * @param {RoleCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RoleCreateResponse>} The created role
   *
   * @example
   * ```ts
   * const role = await client.iam.tenants.roles.create('tenantId', {
   *   actor_user_id: 'x',
   *   key: 'x',
   *   name: 'x',
   *   permission_keys: [],
   * });
   * ```
   */
  create(tenantID: string, body: RoleCreateParams, options?: RequestOptions): APIPromise<RoleCreateResponse> {
    return this._client.post(__scalarPath`/v1/iam/tenants/${tenantID}/roles`, { body, ...options });
  }

  /**
   * Lists the roles visible to a tenant: its tenant-scoped roles plus the deployment's shared and app-scoped roles. Pass a key to fetch one role by its stable key.
   *
   * @param {string} tenantID - The tenant ID. Pass `primary` to target the deployment's primary tenant.
   * @param {RoleListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<IamRolesCursorIDPage, RoleListResponse>} The tenant role page
   *
   * @example
   * ```ts
   * const page = await client.iam.tenants.roles.list('tenantId');
   * ```
   */
  list(
    tenantID: string,
    query: RoleListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<IamRolesCursorIDPage, RoleListResponse> {
    return this._client.getAPIList(
      __scalarPath`/v1/iam/tenants/${tenantID}/roles`,
      CursorIDPage<RoleListResponse>,
      { query, ...options },
    );
  }

  /**
   * Returns one IAM role by ID, with its full permission set.
   *
   * @param {string} roleID - The unique identifier of the IAM role.
   * @param {RoleGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RoleGetResponse>} The IAM role
   *
   * @example
   * ```ts
   * const role = await client.iam.tenants.roles.get('roleId', {
   *   tenant_id: 'tenantId',
   * });
   * ```
   */
  get(roleID: string, params: RoleGetParams, options?: RequestOptions): APIPromise<RoleGetResponse> {
    const { tenant_id } = params;
    return this._client.get(__scalarPath`/v1/iam/tenants/${tenant_id}/roles/${roleID}`, options);
  }

  /**
   * Updates a tenant-scoped role's name, description, or permission set. Shared and app-scoped roles are managed via iam.jsonc, not this API.
   *
   * @param {string} roleID - The unique identifier of the IAM role.
   * @param {RoleUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RoleUpdateResponse>} The updated role
   *
   * @example
   * ```ts
   * const role = await client.iam.tenants.roles.update('roleId', {
   *   tenant_id: 'tenantId',
   *   actor_user_id: 'x',
   * });
   * ```
   */
  update(roleID: string, params: RoleUpdateParams, options?: RequestOptions): APIPromise<RoleUpdateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(__scalarPath`/v1/iam/tenants/${tenant_id}/roles/${roleID}`, {
      body,
      ...options,
    });
  }

  /**
   * Permanently deletes a tenant-scoped role, cascading its permissions and assignments. Shared and app-scoped roles are managed via iam.jsonc, not this API.
   *
   * @param {string} roleID - The unique identifier of the IAM role.
   * @param {RoleDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RoleDeleteResponse>} The deleted role
   *
   * @example
   * ```ts
   * const role = await client.iam.tenants.roles.delete('roleId', {
   *   tenant_id: 'tenantId',
   * });
   * ```
   */
  delete(roleID: string, params: RoleDeleteParams, options?: RequestOptions): APIPromise<RoleDeleteResponse> {
    const { tenant_id, actor_user_id } = params;
    return this._client.delete(__scalarPath`/v1/iam/tenants/${tenant_id}/roles/${roleID}`, {
      query: { actor_user_id },
      ...options,
    });
  }
}

export interface RoleCreateParams {
  /**
   * The signed-in end user's ID to attribute the write to that user, or null to attribute it to the service API key.
   * @minLength 1
   */
  actor_user_id: string | null;
  /**
   * Stable, unique key for the role within its scope.
   * @minLength 1
   * @maxLength 255
   */
  key: string;
  /**
   * Human-readable role name.
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /**
   * Permission keys from the deployment's IAM catalog granted by this role.
   */
  permission_keys: Array<string>;
  /**
   * Optional human-readable role description.
   * @maxLength 1000
   */
  description?: string | null;
}

export interface RoleCreateResponse {
  /**
   * Created role ID.
   * @minLength 1
   */
  role_id: string;
  /**
   * Whether the role is app-scoped (app-wide authority, primary-tenant-only).
   */
  is_app_scope: boolean;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: RoleCreateResponse.ConvexSourceData;
}

export namespace RoleCreateResponse {
  export interface ConvexSourceData {
    /**
     * Whether persisted IAM source data changed.
     */
    changed: boolean;
    /**
     * The deployment's IAM source version after the operation. Before relying on Convex IAM mirror reads, wait for the projection to reach at least this source version.
     * @minimum 0
     * @maximum 9007199254740991
     */
    source_version: number;
    /**
     * Convex deployment IDs whose IAM mirrors will receive the updated state.
     */
    projection_ids: Array<string>;
  }
}

export interface RoleListParams extends CursorIDPageParams {
  /**
   * Return only the role with this stable key, resolved within the tenant scope.
   * @minLength 1
   * @maxLength 255
   */
  key?: string;
}

export interface RoleListResponse {
  /**
   * Role ID.
   * @minLength 1
   */
  role_id: string;
  /**
   * Owning tenant ID for a tenant-scoped role, or null for a shared or app-scoped role.
   * @minLength 1
   */
  tenant_id: string | null;
  /**
   * Stable role key.
   */
  key: string;
  /**
   * Human-readable role name.
   */
  name: string;
  /**
   * Role description, if any.
   */
  description: string | null;
  /**
   * Whether the role is app-scoped.
   */
  is_app_scope: boolean;
  /**
   * Permissions granted by the role.
   */
  permissions: Array<RoleListResponse.Permission>;
}

export namespace RoleListResponse {
  export interface Permission {
    /**
     * Permission ID.
     * @minLength 1
     */
    permission_id: string;
    /**
     * Stable permission key.
     */
    key: string;
  }
}

export type IamRolesCursorIDPage = CursorIDPage<RoleListResponse>;

export interface RoleGetParams {
  /**
   * The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
}

export interface RoleGetResponse {
  /**
   * Role ID.
   * @minLength 1
   */
  role_id: string;
  /**
   * Owning tenant ID for a tenant-scoped role, or null for a shared or app-scoped role.
   * @minLength 1
   */
  tenant_id: string | null;
  /**
   * Stable role key.
   */
  key: string;
  /**
   * Human-readable role name.
   */
  name: string;
  /**
   * Role description, if any.
   */
  description: string | null;
  /**
   * Whether the role is app-scoped.
   */
  is_app_scope: boolean;
  /**
   * Permissions granted by the role, with full catalog details.
   */
  permissions: Array<RoleGetResponse.Permission>;
}

export namespace RoleGetResponse {
  export interface Permission {
    /**
     * Permission ID.
     * @minLength 1
     */
    permission_id: string;
    /**
     * Stable permission key.
     */
    key: string;
    /**
     * Human-readable permission name.
     */
    name: string;
    /**
     * Permission description, if any.
     */
    description: string | null;
    /**
     * Whether the permission is app-scoped.
     */
    is_app_scope: boolean;
  }
}

export interface RoleUpdateParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
  /**
   * Body param: The signed-in end user's ID to attribute the write to that user, or null to attribute it to the service API key.
   * @minLength 1
   */
  actor_user_id: string | null;
  /**
   * Body param: New human-readable role name.
   * @minLength 1
   * @maxLength 255
   */
  name?: string;
  /**
   * Body param: Optional human-readable role description.
   * @maxLength 1000
   */
  description?: string | null;
  /**
   * Body param: Replacement permission set. Omit to leave the role's permissions unchanged.
   */
  permission_keys?: Array<string>;
}

export interface RoleUpdateResponse {
  /**
   * Role changed by the operation.
   * @minLength 1
   */
  role_id: string;
  /**
   * Whether the role is app-scoped (app-wide authority, primary-tenant-only).
   */
  is_app_scope: boolean;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: RoleUpdateResponse.ConvexSourceData;
}

export namespace RoleUpdateResponse {
  export interface ConvexSourceData {
    /**
     * Whether persisted IAM source data changed.
     */
    changed: boolean;
    /**
     * The deployment's IAM source version after the operation. Before relying on Convex IAM mirror reads, wait for the projection to reach at least this source version.
     * @minimum 0
     * @maximum 9007199254740991
     */
    source_version: number;
    /**
     * Convex deployment IDs whose IAM mirrors will receive the updated state.
     */
    projection_ids: Array<string>;
  }
}

export interface RoleDeleteParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
  /**
   * Query param: The signed-in end user's ID to attribute the operation to that user, or omitted for service authority.
   */
  actor_user_id?: string;
}

export interface RoleDeleteResponse {
  /**
   * Deleted role ID.
   * @minLength 1
   */
  role_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: RoleDeleteResponse.ConvexSourceData;
}

export namespace RoleDeleteResponse {
  export interface ConvexSourceData {
    /**
     * Whether persisted IAM source data changed.
     */
    changed: boolean;
    /**
     * The deployment's IAM source version after the operation. Before relying on Convex IAM mirror reads, wait for the projection to reach at least this source version.
     * @minimum 0
     * @maximum 9007199254740991
     */
    source_version: number;
    /**
     * Convex deployment IDs whose IAM mirrors will receive the updated state.
     */
    projection_ids: Array<string>;
  }
}
export declare namespace Roles {
  export {
    type RoleCreateResponse as RoleCreateResponse,
    type RoleListResponse as RoleListResponse,
    type RoleGetResponse as RoleGetResponse,
    type RoleUpdateResponse as RoleUpdateResponse,
    type RoleDeleteResponse as RoleDeleteResponse,
    type IamRolesCursorIDPage as IamRolesCursorIDPage,
    type RoleCreateParams as RoleCreateParams,
    type RoleListParams as RoleListParams,
    type RoleGetParams as RoleGetParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleDeleteParams as RoleDeleteParams,
  };
}
