// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MembersAPI from './members';
import {
  MemberAddParams,
  MemberAddResponse,
  MemberListParams,
  MemberListResponse,
  MemberRemoveParams,
  MemberRemoveResponse,
  Members,
} from './members';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Groups extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);

  /**
   * Creates an active group with no members in a tenant.
   */
  create(
    tenantID: string,
    body: GroupCreateParams,
    options?: RequestOptions,
  ): APIPromise<GroupCreateResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/groups`, { body, ...options });
  }

  /**
   * Updates a tenant group's name or description.
   */
  update(
    groupID: string,
    params: GroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GroupUpdateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}`, { body, ...options });
  }

  /**
   * Lists a tenant's groups, newest first.
   */
  list(
    tenantID: string,
    query: GroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupListResponse> {
    return this._client.get(path`/v1/iam/tenants/${tenantID}/groups`, { query, ...options });
  }

  /**
   * Permanently deletes a tenant group, cascading its memberships and role
   * assignments.
   */
  delete(
    groupID: string,
    params: GroupDeleteParams,
    options?: RequestOptions,
  ): APIPromise<GroupDeleteResponse> {
    const { tenant_id, actor_token_identifier } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}`, {
      query: { actor_token_identifier },
      ...options,
    });
  }

  /**
   * Archives a tenant group so it stops granting access.
   */
  archive(
    groupID: string,
    params: GroupArchiveParams,
    options?: RequestOptions,
  ): APIPromise<GroupArchiveResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}/archive`, {
      body,
      ...options,
    });
  }

  /**
   * Assigns a role to a group on one exact resource.
   */
  assignResourceRole(
    groupID: string,
    params: GroupAssignResourceRoleParams,
    options?: RequestOptions,
  ): APIPromise<GroupAssignResourceRoleResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}/resource-role-assignments`, {
      body,
      ...options,
    });
  }

  /**
   * Assigns a tenant-wide role to a group.
   */
  assignRole(
    groupID: string,
    params: GroupAssignRoleParams,
    options?: RequestOptions,
  ): APIPromise<GroupAssignRoleResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}/role-assignments`, {
      body,
      ...options,
    });
  }

  /**
   * Returns one tenant group by ID.
   */
  get(groupID: string, params: GroupGetParams, options?: RequestOptions): APIPromise<GroupGetResponse> {
    const { tenant_id } = params;
    return this._client.get(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}`, options);
  }

  /**
   * Lists the resource role assignments held by one group, newest first.
   */
  listResourceRoleAssignments(
    groupID: string,
    params: GroupListResourceRoleAssignmentsParams,
    options?: RequestOptions,
  ): APIPromise<GroupListResourceRoleAssignmentsResponse> {
    const { tenant_id, ...query } = params;
    return this._client.get(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}/resource-role-assignments`, {
      query,
      ...options,
    });
  }

  /**
   * Lists the tenant-wide role assignments held by one group, newest first.
   */
  listRoleAssignments(
    groupID: string,
    params: GroupListRoleAssignmentsParams,
    options?: RequestOptions,
  ): APIPromise<GroupListRoleAssignmentsResponse> {
    const { tenant_id, ...query } = params;
    return this._client.get(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}/role-assignments`, {
      query,
      ...options,
    });
  }

  /**
   * Restores an archived tenant group so it grants access again.
   */
  unarchive(
    groupID: string,
    params: GroupUnarchiveParams,
    options?: RequestOptions,
  ): APIPromise<GroupUnarchiveResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}/unarchive`, {
      body,
      ...options,
    });
  }

  /**
   * Removes a group resource role assignment.
   */
  unassignResourceRole(
    assignmentID: string,
    params: GroupUnassignResourceRoleParams,
    options?: RequestOptions,
  ): APIPromise<GroupUnassignResourceRoleResponse> {
    const { tenant_id, group_id, actor_token_identifier } = params;
    return this._client.delete(
      path`/v1/iam/tenants/${tenant_id}/groups/${group_id}/resource-role-assignments/${assignmentID}`,
      { query: { actor_token_identifier }, ...options },
    );
  }

  /**
   * Removes a tenant-wide role assignment from a group.
   */
  unassignRole(
    assignmentID: string,
    params: GroupUnassignRoleParams,
    options?: RequestOptions,
  ): APIPromise<GroupUnassignRoleResponse> {
    const { tenant_id, group_id, actor_token_identifier } = params;
    return this._client.delete(
      path`/v1/iam/tenants/${tenant_id}/groups/${group_id}/role-assignments/${assignmentID}`,
      { query: { actor_token_identifier }, ...options },
    );
  }
}

/**
 * Created tenant group.
 */
export interface GroupCreateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupCreateResponse.ConvexSourceData;

  /**
   * Created tenant group ID.
   */
  group_id: string;
}

export namespace GroupCreateResponse {
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
 * Result of changing a tenant group.
 */
export interface GroupUpdateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupUpdateResponse.ConvexSourceData;

  /**
   * Tenant group changed by the operation.
   */
  group_id: string;
}

export namespace GroupUpdateResponse {
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
 * Paginated tenant groups.
 */
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
  /**
   * One tenant group.
   */
  export interface Data {
    /**
     * Whether the group is archived.
     */
    archived: boolean;

    /**
     * Archive timestamp when archived.
     */
    archived_at: string | null;

    /**
     * Group creation timestamp.
     */
    created_at: string;

    /**
     * Group description, if any.
     */
    description: string | null;

    /**
     * Group ID.
     */
    group_id: string;

    /**
     * Human-readable group name.
     */
    name: string;

    /**
     * Group lifecycle status.
     */
    status: 'active' | 'disabled';

    /**
     * Tenant the group belongs to.
     */
    tenant_id: string;
  }
}

/**
 * Result of changing a tenant group.
 */
export interface GroupDeleteResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupDeleteResponse.ConvexSourceData;

  /**
   * Tenant group changed by the operation.
   */
  group_id: string;
}

export namespace GroupDeleteResponse {
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
 * Result of changing a tenant group.
 */
export interface GroupArchiveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupArchiveResponse.ConvexSourceData;

  /**
   * Tenant group changed by the operation.
   */
  group_id: string;
}

export namespace GroupArchiveResponse {
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
 * Result of changing a group resource role assignment.
 */
export interface GroupAssignResourceRoleResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupAssignResourceRoleResponse.ConvexSourceData;

  /**
   * The group resource role assignment changed by the operation.
   */
  group_resource_role_assignment_id: string;
}

export namespace GroupAssignResourceRoleResponse {
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
 * Result of changing a group's tenant-wide role assignment.
 */
export interface GroupAssignRoleResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupAssignRoleResponse.ConvexSourceData;

  /**
   * The group role assignment changed by the operation.
   */
  group_role_assignment_id: string;
}

export namespace GroupAssignRoleResponse {
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
 * One tenant group.
 */
export interface GroupGetResponse {
  /**
   * Whether the group is archived.
   */
  archived: boolean;

  /**
   * Archive timestamp when archived.
   */
  archived_at: string | null;

  /**
   * Group creation timestamp.
   */
  created_at: string;

  /**
   * Group description, if any.
   */
  description: string | null;

  /**
   * Group ID.
   */
  group_id: string;

  /**
   * Human-readable group name.
   */
  name: string;

  /**
   * Group lifecycle status.
   */
  status: 'active' | 'disabled';

  /**
   * Tenant the group belongs to.
   */
  tenant_id: string;
}

/**
 * Paginated resource role assignments held by one group.
 */
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
  /**
   * One of a group's resource role assignments.
   */
  export interface Data {
    /**
     * Assignment creation timestamp.
     */
    created_at: string;

    /**
     * Assignment expiry, or null if permanent.
     */
    expires_at: string | null;

    /**
     * The exact resource's app-defined external ID.
     */
    external_id: string;

    /**
     * The group resource role assignment ID.
     */
    group_resource_role_assignment_id: string;

    /**
     * The resource type the assignment targets.
     */
    resource_type_id: string;

    /**
     * The assigned role ID.
     */
    role_id: string;
  }
}

/**
 * Paginated tenant-wide role assignments held by one group.
 */
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
  /**
   * One of a group's tenant-wide role assignments.
   */
  export interface Data {
    /**
     * Assignment creation timestamp.
     */
    created_at: string;

    /**
     * Assignment expiry, or null if permanent.
     */
    expires_at: string | null;

    /**
     * The group role assignment ID.
     */
    group_role_assignment_id: string;

    /**
     * The assigned role ID.
     */
    role_id: string;
  }
}

/**
 * Result of changing a tenant group.
 */
export interface GroupUnarchiveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupUnarchiveResponse.ConvexSourceData;

  /**
   * Tenant group changed by the operation.
   */
  group_id: string;
}

export namespace GroupUnarchiveResponse {
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
 * Result of changing a group resource role assignment.
 */
export interface GroupUnassignResourceRoleResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupUnassignResourceRoleResponse.ConvexSourceData;

  /**
   * The group resource role assignment changed by the operation.
   */
  group_resource_role_assignment_id: string;
}

export namespace GroupUnassignResourceRoleResponse {
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
 * Result of changing a group's tenant-wide role assignment.
 */
export interface GroupUnassignRoleResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupUnassignRoleResponse.ConvexSourceData;

  /**
   * The group role assignment changed by the operation.
   */
  group_role_assignment_id: string;
}

export namespace GroupUnassignRoleResponse {
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

export interface GroupCreateParams {
  /**
   * The signed-in end user's Hercules Auth tokenIdentifier, passed unchanged by the
   * trusted app backend. Used for identity and audit only.
   */
  actor_token_identifier: string | null;

  /**
   * Human-readable group name.
   */
  name: string;

  /**
   * Optional human-readable group description.
   */
  description?: string | null;
}

export interface GroupUpdateParams {
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
   * Body param: Optional human-readable group description.
   */
  description?: string | null;

  /**
   * Body param: New human-readable group name. Omit to keep the current name.
   */
  name?: string;
}

export interface GroupListParams {
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

export interface GroupDeleteParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary
   * tenant.
   */
  tenant_id: string;

  /**
   * Query param: The signed-in end user's tokenIdentifier to attribute the operation
   * to that user, or omitted for service authority.
   */
  actor_token_identifier?: string;
}

export interface GroupArchiveParams {
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
}

export interface GroupAssignResourceRoleParams {
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
   * Body param: The app-defined external ID of the exact resource.
   */
  external_id: string;

  /**
   * Body param: The resource type ID.
   */
  resource_type_id: string;

  /**
   * Body param: Identifies exactly one IAM role by ID or stable key.
   */
  role: GroupAssignResourceRoleParams.IamRoleIDReference | GroupAssignResourceRoleParams.IamRoleKeyReference;

  /**
   * Body param: Assignment expiry. Omit or pass null for a permanent assignment.
   */
  expires_at?: string | null;
}

export namespace GroupAssignResourceRoleParams {
  export interface IamRoleIDReference {
    /**
     * Existing IAM role ID.
     */
    id: string;
  }

  export interface IamRoleKeyReference {
    /**
     * Stable role key from the deployment's IAM catalog.
     */
    key: string;
  }
}

export interface GroupAssignRoleParams {
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
   * Body param: Identifies exactly one IAM role by ID or stable key.
   */
  role: GroupAssignRoleParams.IamRoleIDReference | GroupAssignRoleParams.IamRoleKeyReference;

  /**
   * Body param: Assignment expiry. Omit or pass null for a permanent assignment.
   */
  expires_at?: string | null;
}

export namespace GroupAssignRoleParams {
  export interface IamRoleIDReference {
    /**
     * Existing IAM role ID.
     */
    id: string;
  }

  export interface IamRoleKeyReference {
    /**
     * Stable role key from the deployment's IAM catalog.
     */
    key: string;
  }
}

export interface GroupGetParams {
  /**
   * The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
}

export interface GroupListResourceRoleAssignmentsParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary
   * tenant.
   */
  tenant_id: string;

  /**
   * Query param: Maximum number of records to return. Defaults to 50.
   */
  limit?: number;

  /**
   * Query param: Cursor for forward pagination. Pass the ID of the last item from
   * the previous page.
   */
  starting_after?: string;
}

export interface GroupListRoleAssignmentsParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary
   * tenant.
   */
  tenant_id: string;

  /**
   * Query param: Maximum number of records to return. Defaults to 50.
   */
  limit?: number;

  /**
   * Query param: Cursor for forward pagination. Pass the ID of the last item from
   * the previous page.
   */
  starting_after?: string;
}

export interface GroupUnarchiveParams {
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
}

export interface GroupUnassignResourceRoleParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary
   * tenant.
   */
  tenant_id: string;

  /**
   * Path param: The unique identifier of the tenant group.
   */
  group_id: string;

  /**
   * Query param: The signed-in end user's tokenIdentifier to attribute the operation
   * to that user, or omitted for service authority.
   */
  actor_token_identifier?: string;
}

export interface GroupUnassignRoleParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary
   * tenant.
   */
  tenant_id: string;

  /**
   * Path param: The unique identifier of the tenant group.
   */
  group_id: string;

  /**
   * Query param: The signed-in end user's tokenIdentifier to attribute the operation
   * to that user, or omitted for service authority.
   */
  actor_token_identifier?: string;
}

Groups.Members = Members;

export declare namespace Groups {
  export {
    type GroupCreateResponse as GroupCreateResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupListResponse as GroupListResponse,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupArchiveResponse as GroupArchiveResponse,
    type GroupAssignResourceRoleResponse as GroupAssignResourceRoleResponse,
    type GroupAssignRoleResponse as GroupAssignRoleResponse,
    type GroupGetResponse as GroupGetResponse,
    type GroupListResourceRoleAssignmentsResponse as GroupListResourceRoleAssignmentsResponse,
    type GroupListRoleAssignmentsResponse as GroupListRoleAssignmentsResponse,
    type GroupUnarchiveResponse as GroupUnarchiveResponse,
    type GroupUnassignResourceRoleResponse as GroupUnassignResourceRoleResponse,
    type GroupUnassignRoleResponse as GroupUnassignRoleResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
    type GroupDeleteParams as GroupDeleteParams,
    type GroupArchiveParams as GroupArchiveParams,
    type GroupAssignResourceRoleParams as GroupAssignResourceRoleParams,
    type GroupAssignRoleParams as GroupAssignRoleParams,
    type GroupGetParams as GroupGetParams,
    type GroupListResourceRoleAssignmentsParams as GroupListResourceRoleAssignmentsParams,
    type GroupListRoleAssignmentsParams as GroupListRoleAssignmentsParams,
    type GroupUnarchiveParams as GroupUnarchiveParams,
    type GroupUnassignResourceRoleParams as GroupUnassignResourceRoleParams,
    type GroupUnassignRoleParams as GroupUnassignRoleParams,
  };

  export {
    Members as Members,
    type MemberListResponse as MemberListResponse,
    type MemberAddResponse as MemberAddResponse,
    type MemberRemoveResponse as MemberRemoveResponse,
    type MemberListParams as MemberListParams,
    type MemberAddParams as MemberAddParams,
    type MemberRemoveParams as MemberRemoveParams,
  };
}
