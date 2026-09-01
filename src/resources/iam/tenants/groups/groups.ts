// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../../resource';
import { APIPromise } from '../../../../api-promise';
import type { RequestOptions } from '../../../../internal/request-options';
import { path as __scalarPath } from '../../../../internal/utils/path';
import * as MembersAPI from './members';
import {
  Members,
  type MemberAddResponse,
  type MemberListResponse,
  type MemberRemoveResponse,
  type MemberAddParams,
  type MemberListParams,
  type MemberRemoveParams,
} from './members';

export class Groups extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);

  /**
   * Creates an active group with no members in a tenant.
   *
   * @param {string} tenantID - The tenant ID. Pass `primary` to target the deployment's primary tenant.
   * @param {GroupCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupCreateResponse>} The created tenant group
   *
   * @example
   * ```ts
   * const group = await client.iam.tenants.groups.create('tenantId', {
   *   actor_user_id: 'x',
   *   name: 'x',
   * });
   * ```
   */
  create(
    tenantID: string,
    body: GroupCreateParams,
    options?: RequestOptions,
  ): APIPromise<GroupCreateResponse> {
    return this._client.post(__scalarPath`/v1/iam/tenants/${tenantID}/groups`, { body, ...options });
  }

  /**
   * Lists a tenant's groups, newest first.
   *
   * @param {string} tenantID - The tenant ID. Pass `primary` to target the deployment's primary tenant.
   * @param {GroupListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupListResponse>} The tenant group page
   *
   * @example
   * ```ts
   * const group = await client.iam.tenants.groups.list('tenantId', {
   *   limit: 50,
   * });
   * ```
   */
  list(
    tenantID: string,
    query: GroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupListResponse> {
    return this._client.get(__scalarPath`/v1/iam/tenants/${tenantID}/groups`, { query, ...options });
  }

  /**
   * Returns one tenant group by ID.
   *
   * @param {string} groupID - The unique identifier of the tenant group.
   * @param {GroupGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupGetResponse>} The tenant group
   *
   * @example
   * ```ts
   * const group = await client.iam.tenants.groups.get('groupId', {
   *   tenant_id: 'tenantId',
   * });
   * ```
   */
  get(groupID: string, params: GroupGetParams, options?: RequestOptions): APIPromise<GroupGetResponse> {
    const { tenant_id } = params;
    return this._client.get(__scalarPath`/v1/iam/tenants/${tenant_id}/groups/${groupID}`, options);
  }

  /**
   * Updates a tenant group's name or description.
   *
   * @param {string} groupID - The unique identifier of the tenant group.
   * @param {GroupUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupUpdateResponse>} The updated tenant group
   *
   * @example
   * ```ts
   * const group = await client.iam.tenants.groups.update('groupId', {
   *   tenant_id: 'tenantId',
   *   actor_user_id: 'x',
   * });
   * ```
   */
  update(
    groupID: string,
    params: GroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GroupUpdateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(__scalarPath`/v1/iam/tenants/${tenant_id}/groups/${groupID}`, {
      body,
      ...options,
    });
  }

  /**
   * Permanently deletes a tenant group, cascading its memberships and role assignments.
   *
   * @param {string} groupID - The unique identifier of the tenant group.
   * @param {GroupDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupDeleteResponse>} The deleted tenant group
   *
   * @example
   * ```ts
   * const group = await client.iam.tenants.groups.delete('groupId', {
   *   tenant_id: 'tenantId',
   * });
   * ```
   */
  delete(
    groupID: string,
    params: GroupDeleteParams,
    options?: RequestOptions,
  ): APIPromise<GroupDeleteResponse> {
    const { tenant_id, actor_user_id } = params;
    return this._client.delete(__scalarPath`/v1/iam/tenants/${tenant_id}/groups/${groupID}`, {
      query: { actor_user_id },
      ...options,
    });
  }

  /**
   * Archives a tenant group so it stops granting access.
   *
   * @param {string} groupID - The unique identifier of the tenant group.
   * @param {GroupArchiveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupArchiveResponse>} The archived tenant group
   *
   * @example
   * ```ts
   * const group = await client.iam.tenants.groups.archive('groupId', {
   *   tenant_id: 'tenantId',
   *   actor_user_id: 'x',
   * });
   * ```
   */
  archive(
    groupID: string,
    params: GroupArchiveParams,
    options?: RequestOptions,
  ): APIPromise<GroupArchiveResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(__scalarPath`/v1/iam/tenants/${tenant_id}/groups/${groupID}/archive`, {
      body,
      ...options,
    });
  }

  /**
   * Restores an archived tenant group so it grants access again.
   *
   * @param {string} groupID - The unique identifier of the tenant group.
   * @param {GroupUnarchiveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupUnarchiveResponse>} The unarchived tenant group
   *
   * @example
   * ```ts
   * const group = await client.iam.tenants.groups.unarchive('groupId', {
   *   tenant_id: 'tenantId',
   *   actor_user_id: 'x',
   * });
   * ```
   */
  unarchive(
    groupID: string,
    params: GroupUnarchiveParams,
    options?: RequestOptions,
  ): APIPromise<GroupUnarchiveResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(__scalarPath`/v1/iam/tenants/${tenant_id}/groups/${groupID}/unarchive`, {
      body,
      ...options,
    });
  }

  /**
   * Assigns a tenant-wide role to a group.
   *
   * @param {string} groupID - The unique identifier of the tenant group.
   * @param {GroupAssignRoleParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupAssignRoleResponse>} The created role assignment
   *
   * @example
   * ```ts
   * const group = await client.iam.tenants.groups.assignRole('groupId', {
   *   tenant_id: 'tenantId',
   *   actor_user_id: 'x',
   *   role: {
   *     id: 'x',
   *   },
   * });
   * ```
   */
  assignRole(
    groupID: string,
    params: GroupAssignRoleParams,
    options?: RequestOptions,
  ): APIPromise<GroupAssignRoleResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(__scalarPath`/v1/iam/tenants/${tenant_id}/groups/${groupID}/role-assignments`, {
      body,
      ...options,
    });
  }

  /**
   * Removes a tenant-wide role assignment from a group.
   *
   * @param {string} assignmentID - The unique identifier of the role assignment.
   * @param {GroupUnassignRoleParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupUnassignRoleResponse>} The removed role assignment
   *
   * @example
   * ```ts
   * const group = await client.iam.tenants.groups.unassignRole('assignmentId', {
   *   tenant_id: 'tenantId',
   *   group_id: 'groupId',
   * });
   * ```
   */
  unassignRole(
    assignmentID: string,
    params: GroupUnassignRoleParams,
    options?: RequestOptions,
  ): APIPromise<GroupUnassignRoleResponse> {
    const { tenant_id, group_id, actor_user_id } = params;
    return this._client.delete(
      __scalarPath`/v1/iam/tenants/${tenant_id}/groups/${group_id}/role-assignments/${assignmentID}`,
      { query: { actor_user_id }, ...options },
    );
  }

  /**
   * Lists the tenant-wide role assignments held by one group, newest first.
   *
   * @param {string} groupID - The unique identifier of the tenant group.
   * @param {GroupListRoleAssignmentsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupListRoleAssignmentsResponse>} The group role assignment page
   *
   * @example
   * ```ts
   * const group = await client.iam.tenants.groups.listRoleAssignments('groupId', {
   *   tenant_id: 'tenantId',
   *   limit: 50,
   * });
   * ```
   */
  listRoleAssignments(
    groupID: string,
    params: GroupListRoleAssignmentsParams,
    options?: RequestOptions,
  ): APIPromise<GroupListRoleAssignmentsResponse> {
    const { tenant_id, ...query } = params;
    return this._client.get(__scalarPath`/v1/iam/tenants/${tenant_id}/groups/${groupID}/role-assignments`, {
      query,
      ...options,
    });
  }

  /**
   * Assigns a role to a group on one exact resource.
   *
   * @param {string} groupID - The unique identifier of the tenant group.
   * @param {GroupAssignResourceRoleParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupAssignResourceRoleResponse>} The created resource role assignment
   *
   * @example
   * ```ts
   * const group = await client.iam.tenants.groups.assignResourceRole('groupId', {
   *   tenant_id: 'tenantId',
   *   actor_user_id: 'x',
   *   role: {
   *     id: 'x',
   *   },
   *   resource_type: {
   *     id: 'x',
   *   },
   *   external_id: 'x',
   * });
   * ```
   */
  assignResourceRole(
    groupID: string,
    params: GroupAssignResourceRoleParams,
    options?: RequestOptions,
  ): APIPromise<GroupAssignResourceRoleResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(
      __scalarPath`/v1/iam/tenants/${tenant_id}/groups/${groupID}/resource-role-assignments`,
      { body, ...options },
    );
  }

  /**
   * Removes a group resource role assignment.
   *
   * @param {string} assignmentID - The unique identifier of the resource role assignment.
   * @param {GroupUnassignResourceRoleParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupUnassignResourceRoleResponse>} The removed resource role assignment
   *
   * @example
   * ```ts
   * const group = await client.iam.tenants.groups.unassignResourceRole('assignmentId', {
   *   tenant_id: 'tenantId',
   *   group_id: 'groupId',
   * });
   * ```
   */
  unassignResourceRole(
    assignmentID: string,
    params: GroupUnassignResourceRoleParams,
    options?: RequestOptions,
  ): APIPromise<GroupUnassignResourceRoleResponse> {
    const { tenant_id, group_id, actor_user_id } = params;
    return this._client.delete(
      __scalarPath`/v1/iam/tenants/${tenant_id}/groups/${group_id}/resource-role-assignments/${assignmentID}`,
      { query: { actor_user_id }, ...options },
    );
  }

  /**
   * Lists the resource role assignments held by one group, newest first.
   *
   * @param {string} groupID - The unique identifier of the tenant group.
   * @param {GroupListResourceRoleAssignmentsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupListResourceRoleAssignmentsResponse>} The group resource role assignment page
   *
   * @example
   * ```ts
   * const group = await client.iam.tenants.groups.listResourceRoleAssignments('groupId', {
   *   tenant_id: 'tenantId',
   *   limit: 50,
   * });
   * ```
   */
  listResourceRoleAssignments(
    groupID: string,
    params: GroupListResourceRoleAssignmentsParams,
    options?: RequestOptions,
  ): APIPromise<GroupListResourceRoleAssignmentsResponse> {
    const { tenant_id, ...query } = params;
    return this._client.get(
      __scalarPath`/v1/iam/tenants/${tenant_id}/groups/${groupID}/resource-role-assignments`,
      { query, ...options },
    );
  }
}

export interface GroupCreateParams {
  /**
   * The signed-in end user's ID to attribute the write to that user, or null to attribute it to the service API key.
   * @minLength 1
   */
  actor_user_id: string | null;
  /**
   * Human-readable group name.
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /**
   * Optional human-readable group description.
   * @maxLength 1000
   */
  description?: string | null;
}

export interface GroupCreateResponse {
  /**
   * Created tenant group ID.
   * @minLength 1
   */
  group_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupCreateResponse.ConvexSourceData;
}

export namespace GroupCreateResponse {
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

export interface GroupListParams {
  /**
   * Cursor for forward pagination. Pass the ID of the last item from the previous page.
   */
  starting_after?: string;
  /**
   * Maximum number of records to return. Defaults to 50.
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
}

export interface GroupListResponse {
  /**
   * Group page.
   */
  data: Array<GroupListResponse.Data>;
  /**
   * Whether more records are available after this page.
   */
  has_more: boolean;
}

export namespace GroupListResponse {
  export interface Data {
    /**
     * Group ID.
     * @minLength 1
     */
    group_id: string;
    /**
     * Tenant the group belongs to.
     * @minLength 1
     */
    tenant_id: string;
    /**
     * Human-readable group name.
     */
    name: string;
    /**
     * Group description, if any.
     */
    description: string | null;
    /**
     * Group lifecycle status.
     */
    status: 'active' | 'archived';
    /**
     * Whether the group is archived.
     */
    archived: boolean;
    /**
     * Archive timestamp when archived.
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
     */
    archived_at: string | null;
    /**
     * Group creation timestamp.
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
     */
    created_at: string;
  }
}

export interface GroupGetParams {
  /**
   * The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
}

export interface GroupGetResponse {
  /**
   * Group ID.
   * @minLength 1
   */
  group_id: string;
  /**
   * Tenant the group belongs to.
   * @minLength 1
   */
  tenant_id: string;
  /**
   * Human-readable group name.
   */
  name: string;
  /**
   * Group description, if any.
   */
  description: string | null;
  /**
   * Group lifecycle status.
   */
  status: 'active' | 'archived';
  /**
   * Whether the group is archived.
   */
  archived: boolean;
  /**
   * Archive timestamp when archived.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  archived_at: string | null;
  /**
   * Group creation timestamp.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created_at: string;
}

export interface GroupUpdateParams {
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
   * Body param: New human-readable group name. Omit to keep the current name.
   * @minLength 1
   * @maxLength 255
   */
  name?: string;
  /**
   * Body param: Optional human-readable group description.
   * @maxLength 1000
   */
  description?: string | null;
}

export interface GroupUpdateResponse {
  /**
   * Tenant group changed by the operation.
   * @minLength 1
   */
  group_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupUpdateResponse.ConvexSourceData;
}

export namespace GroupUpdateResponse {
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

export interface GroupDeleteParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
  /**
   * Query param: The signed-in end user's ID to attribute the operation to that user, or omitted for service authority.
   */
  actor_user_id?: string;
}

export interface GroupDeleteResponse {
  /**
   * Tenant group changed by the operation.
   * @minLength 1
   */
  group_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupDeleteResponse.ConvexSourceData;
}

export namespace GroupDeleteResponse {
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

export interface GroupArchiveParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
  /**
   * Body param: The signed-in end user's ID to attribute the write to that user, or null to attribute it to the service API key.
   * @minLength 1
   */
  actor_user_id: string | null;
}

export interface GroupArchiveResponse {
  /**
   * Tenant group changed by the operation.
   * @minLength 1
   */
  group_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupArchiveResponse.ConvexSourceData;
}

export namespace GroupArchiveResponse {
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

export interface GroupUnarchiveParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
  /**
   * Body param: The signed-in end user's ID to attribute the write to that user, or null to attribute it to the service API key.
   * @minLength 1
   */
  actor_user_id: string | null;
}

export interface GroupUnarchiveResponse {
  /**
   * Tenant group changed by the operation.
   * @minLength 1
   */
  group_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupUnarchiveResponse.ConvexSourceData;
}

export namespace GroupUnarchiveResponse {
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

export interface GroupAssignRoleParams {
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
   * Body param: Identifies exactly one IAM role by ID or stable key.
   */
  role: GroupAssignRoleParams.IamRoleIDReference | GroupAssignRoleParams.IamRoleKeyReference;
  /**
   * Body param: Assignment expiry. Omit or pass null for a permanent assignment.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  expires_at?: string | null;
}

export namespace GroupAssignRoleParams {
  export interface IamRoleIDReference {
    /**
     * Existing IAM role ID.
     * @minLength 1
     */
    id: string;
  }

  export interface IamRoleKeyReference {
    /**
     * Stable role key from the deployment's IAM catalog.
     * @minLength 1
     * @maxLength 255
     */
    key: string;
  }
}

export interface GroupAssignRoleResponse {
  /**
   * The group role assignment changed by the operation.
   * @minLength 1
   */
  group_role_assignment_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupAssignRoleResponse.ConvexSourceData;
}

export namespace GroupAssignRoleResponse {
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

export interface GroupUnassignRoleParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
  /**
   * Path param: The unique identifier of the tenant group.
   */
  group_id: string;
  /**
   * Query param: The signed-in end user's ID to attribute the operation to that user, or omitted for service authority.
   */
  actor_user_id?: string;
}

export interface GroupUnassignRoleResponse {
  /**
   * The group role assignment changed by the operation.
   * @minLength 1
   */
  group_role_assignment_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupUnassignRoleResponse.ConvexSourceData;
}

export namespace GroupUnassignRoleResponse {
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

export interface GroupListRoleAssignmentsParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
  /**
   * Query param: Cursor for forward pagination. Pass the ID of the last item from the previous page.
   */
  starting_after?: string;
  /**
   * Query param: Maximum number of records to return. Defaults to 50.
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
}

export interface GroupListRoleAssignmentsResponse {
  /**
   * Group role assignment page.
   */
  data: Array<GroupListRoleAssignmentsResponse.Data>;
  /**
   * Whether more records are available after this page.
   */
  has_more: boolean;
}

export namespace GroupListRoleAssignmentsResponse {
  export interface Data {
    /**
     * The group role assignment ID.
     * @minLength 1
     */
    group_role_assignment_id: string;
    /**
     * The assigned role ID.
     * @minLength 1
     */
    role_id: string;
    /**
     * Assignment expiry, or null if permanent.
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
     */
    expires_at: string | null;
    /**
     * Assignment creation timestamp.
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
     */
    created_at: string;
  }
}

export interface GroupAssignResourceRoleParams {
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
   * Body param: Identifies exactly one IAM role by ID or stable key.
   */
  role: GroupAssignResourceRoleParams.IamRoleIDReference | GroupAssignResourceRoleParams.IamRoleKeyReference;
  /**
   * Body param: Identifies exactly one IAM resource type by ID or stable key.
   */
  resource_type:
    | GroupAssignResourceRoleParams.IamResourceTypeIDReference
    | GroupAssignResourceRoleParams.IamResourceTypeKeyReference;
  /**
   * Body param: The app-defined external ID of the exact resource.
   * @minLength 1
   * @maxLength 255
   */
  external_id: string;
  /**
   * Body param: Assignment expiry. Omit or pass null for a permanent assignment.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  expires_at?: string | null;
}

export namespace GroupAssignResourceRoleParams {
  export interface IamRoleIDReference {
    /**
     * Existing IAM role ID.
     * @minLength 1
     */
    id: string;
  }

  export interface IamRoleKeyReference {
    /**
     * Stable role key from the deployment's IAM catalog.
     * @minLength 1
     * @maxLength 255
     */
    key: string;
  }

  export interface IamResourceTypeIDReference {
    /**
     * Existing IAM resource type ID.
     * @minLength 1
     */
    id: string;
  }

  export interface IamResourceTypeKeyReference {
    /**
     * Stable resource type key from the deployment's IAM catalog (e.g. `app.project`).
     * @minLength 1
     * @maxLength 255
     */
    key: string;
  }
}

export interface GroupAssignResourceRoleResponse {
  /**
   * The group resource role assignment changed by the operation.
   * @minLength 1
   */
  group_resource_role_assignment_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupAssignResourceRoleResponse.ConvexSourceData;
}

export namespace GroupAssignResourceRoleResponse {
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

export interface GroupUnassignResourceRoleParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
  /**
   * Path param: The unique identifier of the tenant group.
   */
  group_id: string;
  /**
   * Query param: The signed-in end user's ID to attribute the operation to that user, or omitted for service authority.
   */
  actor_user_id?: string;
}

export interface GroupUnassignResourceRoleResponse {
  /**
   * The group resource role assignment changed by the operation.
   * @minLength 1
   */
  group_resource_role_assignment_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupUnassignResourceRoleResponse.ConvexSourceData;
}

export namespace GroupUnassignResourceRoleResponse {
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

export interface GroupListResourceRoleAssignmentsParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
  /**
   * Query param: Cursor for forward pagination. Pass the ID of the last item from the previous page.
   */
  starting_after?: string;
  /**
   * Query param: Maximum number of records to return. Defaults to 50.
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
}

export interface GroupListResourceRoleAssignmentsResponse {
  /**
   * Group resource role assignment page.
   */
  data: Array<GroupListResourceRoleAssignmentsResponse.Data>;
  /**
   * Whether more records are available after this page.
   */
  has_more: boolean;
}

export namespace GroupListResourceRoleAssignmentsResponse {
  export interface Data {
    /**
     * The group resource role assignment ID.
     * @minLength 1
     */
    group_resource_role_assignment_id: string;
    /**
     * The assigned role ID.
     * @minLength 1
     */
    role_id: string;
    /**
     * The resource type the assignment targets.
     * @minLength 1
     */
    resource_type_id: string;
    /**
     * The exact resource's app-defined external ID.
     */
    external_id: string;
    /**
     * Assignment expiry, or null if permanent.
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
     */
    expires_at: string | null;
    /**
     * Assignment creation timestamp.
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
     */
    created_at: string;
  }
}
Groups.Members = Members;

export declare namespace Groups {
  export {
    type GroupCreateResponse as GroupCreateResponse,
    type GroupListResponse as GroupListResponse,
    type GroupGetResponse as GroupGetResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupArchiveResponse as GroupArchiveResponse,
    type GroupUnarchiveResponse as GroupUnarchiveResponse,
    type GroupAssignRoleResponse as GroupAssignRoleResponse,
    type GroupUnassignRoleResponse as GroupUnassignRoleResponse,
    type GroupListRoleAssignmentsResponse as GroupListRoleAssignmentsResponse,
    type GroupAssignResourceRoleResponse as GroupAssignResourceRoleResponse,
    type GroupUnassignResourceRoleResponse as GroupUnassignResourceRoleResponse,
    type GroupListResourceRoleAssignmentsResponse as GroupListResourceRoleAssignmentsResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupListParams as GroupListParams,
    type GroupGetParams as GroupGetParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupDeleteParams as GroupDeleteParams,
    type GroupArchiveParams as GroupArchiveParams,
    type GroupUnarchiveParams as GroupUnarchiveParams,
    type GroupAssignRoleParams as GroupAssignRoleParams,
    type GroupUnassignRoleParams as GroupUnassignRoleParams,
    type GroupListRoleAssignmentsParams as GroupListRoleAssignmentsParams,
    type GroupAssignResourceRoleParams as GroupAssignResourceRoleParams,
    type GroupUnassignResourceRoleParams as GroupUnassignResourceRoleParams,
    type GroupListResourceRoleAssignmentsParams as GroupListResourceRoleAssignmentsParams,
  };

  export {
    Members as Members,
    type MemberAddResponse as MemberAddResponse,
    type MemberListResponse as MemberListResponse,
    type MemberRemoveResponse as MemberRemoveResponse,
    type MemberAddParams as MemberAddParams,
    type MemberListParams as MemberListParams,
    type MemberRemoveParams as MemberRemoveParams,
  };
}
