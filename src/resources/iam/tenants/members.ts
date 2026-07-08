// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Members extends APIResource {
  /**
   * Adds an end user to the tenant, optionally with a role.
   */
  create(
    tenantID: string,
    body: MemberCreateParams,
    options?: RequestOptions,
  ): APIPromise<MemberCreateResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/members`, { body, ...options });
  }

  /**
   * Lists a tenant's members, newest first. Filter by status, by a role the member
   * directly holds, or by the member's Hercules Auth user id.
   */
  list(
    tenantID: string,
    query: MemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MemberListResponse> {
    return this._client.get(path`/v1/iam/tenants/${tenantID}/members`, { query, ...options });
  }

  /**
   * Assigns a role to a member on one exact resource.
   */
  assignResourceRole(
    membershipID: string,
    params: MemberAssignResourceRoleParams,
    options?: RequestOptions,
  ): APIPromise<MemberAssignResourceRoleResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(
      path`/v1/iam/tenants/${tenant_id}/members/${membershipID}/resource-role-assignments`,
      { body, ...options },
    );
  }

  /**
   * Assigns a tenant-wide role to a member.
   */
  assignRole(
    membershipID: string,
    params: MemberAssignRoleParams,
    options?: RequestOptions,
  ): APIPromise<MemberAssignRoleResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(path`/v1/iam/tenants/${tenant_id}/members/${membershipID}/role-assignments`, {
      body,
      ...options,
    });
  }

  /**
   * Returns one tenant member by their membership ID.
   */
  get(
    membershipID: string,
    params: MemberGetParams,
    options?: RequestOptions,
  ): APIPromise<MemberGetResponse> {
    const { tenant_id } = params;
    return this._client.get(path`/v1/iam/tenants/${tenant_id}/members/${membershipID}`, options);
  }

  /**
   * Lists the resource role assignments held by one member, newest first.
   */
  listResourceRoleAssignments(
    membershipID: string,
    params: MemberListResourceRoleAssignmentsParams,
    options?: RequestOptions,
  ): APIPromise<MemberListResourceRoleAssignmentsResponse> {
    const { tenant_id, ...query } = params;
    return this._client.get(
      path`/v1/iam/tenants/${tenant_id}/members/${membershipID}/resource-role-assignments`,
      { query, ...options },
    );
  }

  /**
   * Lists the tenant-wide role assignments held by one member, newest first.
   */
  listRoleAssignments(
    membershipID: string,
    params: MemberListRoleAssignmentsParams,
    options?: RequestOptions,
  ): APIPromise<MemberListRoleAssignmentsResponse> {
    const { tenant_id, ...query } = params;
    return this._client.get(path`/v1/iam/tenants/${tenant_id}/members/${membershipID}/role-assignments`, {
      query,
      ...options,
    });
  }

  /**
   * Removes a member from the tenant. The component treats a removed member as
   * denied.
   */
  remove(
    membershipID: string,
    params: MemberRemoveParams,
    options?: RequestOptions,
  ): APIPromise<MemberRemoveResponse> {
    const { tenant_id, actor_user_id } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/members/${membershipID}`, {
      query: { actor_user_id },
      ...options,
    });
  }

  /**
   * Reconciles the member's direct role assignments on one exact resource to exactly
   * the supplied set in one transaction: missing roles are assigned, surplus
   * assignments removed, matching ones kept. Grants on other resources and via
   * groups are untouched. Idempotent; prefer this over unassign-then-assign loops.
   */
  replaceResourceRoles(
    membershipID: string,
    params: MemberReplaceResourceRolesParams,
    options?: RequestOptions,
  ): APIPromise<MemberReplaceResourceRolesResponse> {
    const { tenant_id, ...body } = params;
    return this._client.put(
      path`/v1/iam/tenants/${tenant_id}/members/${membershipID}/resource-role-assignments`,
      { body, ...options },
    );
  }

  /**
   * Reconciles the member's direct tenant-wide role assignments to exactly the
   * supplied set in one transaction: missing roles are assigned, surplus assignments
   * removed, matching ones kept. Roles conferred via groups are untouched.
   * Idempotent; prefer this over unassign-then-assign loops.
   */
  replaceRoles(
    membershipID: string,
    params: MemberReplaceRolesParams,
    options?: RequestOptions,
  ): APIPromise<MemberReplaceRolesResponse> {
    const { tenant_id, ...body } = params;
    return this._client.put(path`/v1/iam/tenants/${tenant_id}/members/${membershipID}/role-assignments`, {
      body,
      ...options,
    });
  }

  /**
   * Removes a member resource role assignment.
   */
  unassignResourceRole(
    assignmentID: string,
    params: MemberUnassignResourceRoleParams,
    options?: RequestOptions,
  ): APIPromise<MemberUnassignResourceRoleResponse> {
    const { tenant_id, membership_id, actor_user_id } = params;
    return this._client.delete(
      path`/v1/iam/tenants/${tenant_id}/members/${membership_id}/resource-role-assignments/${assignmentID}`,
      { query: { actor_user_id }, ...options },
    );
  }

  /**
   * Removes a tenant-wide role assignment.
   */
  unassignRole(
    assignmentID: string,
    params: MemberUnassignRoleParams,
    options?: RequestOptions,
  ): APIPromise<MemberUnassignRoleResponse> {
    const { tenant_id, membership_id, actor_user_id } = params;
    return this._client.delete(
      path`/v1/iam/tenants/${tenant_id}/members/${membership_id}/role-assignments/${assignmentID}`,
      { query: { actor_user_id }, ...options },
    );
  }

  /**
   * Approves, suspends, blocks, reactivates, or removes a tenant member.
   */
  updateStatus(
    membershipID: string,
    params: MemberUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<MemberUpdateStatusResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/members/${membershipID}`, {
      body,
      ...options,
    });
  }
}

/**
 * Added tenant member.
 */
export interface MemberCreateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberCreateResponse.ConvexSourceData;

  /**
   * The user's tenant membership ID, created by adding them to the tenant.
   */
  membership_id: string;

  /**
   * Hercules IAM identifier.
   */
  role_assignment_id: string | null;
}

export namespace MemberCreateResponse {
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
 * Paginated tenant members.
 */
export interface MemberListResponse {
  /**
   * Member page.
   */
  data: Array<MemberListResponse.Data>;

  /**
   * Whether more records are available after this page.
   */
  has_more: boolean;
}

export namespace MemberListResponse {
  /**
   * One tenant member.
   */
  export interface Data {
    /**
     * Membership creation timestamp.
     */
    created_at: string;

    /**
     * The user's tenant membership ID.
     */
    membership_id: string;

    /**
     * Tenant user lifecycle status.
     */
    status: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';

    /**
     * Tenant the member belongs to.
     */
    tenant_id: string;

    /**
     * The member's email address, if known.
     */
    user_email: string | null;

    /**
     * The member's Hercules Auth user id (the end user's OIDC subject).
     */
    user_id: string;

    /**
     * The member's avatar URL, if any.
     */
    user_image: string | null;

    /**
     * The member's display name, if known.
     */
    user_name: string | null;
  }
}

/**
 * Result of changing a member resource role assignment.
 */
export interface MemberAssignResourceRoleResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberAssignResourceRoleResponse.ConvexSourceData;

  /**
   * The member resource role assignment changed by the operation.
   */
  member_resource_role_assignment_id: string;
}

export namespace MemberAssignResourceRoleResponse {
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
 * Result of changing a member's tenant-wide role assignment.
 */
export interface MemberAssignRoleResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberAssignRoleResponse.ConvexSourceData;

  /**
   * The member role assignment changed by the operation.
   */
  member_role_assignment_id: string;
}

export namespace MemberAssignRoleResponse {
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
 * One tenant member.
 */
export interface MemberGetResponse {
  /**
   * Membership creation timestamp.
   */
  created_at: string;

  /**
   * The user's tenant membership ID.
   */
  membership_id: string;

  /**
   * Tenant user lifecycle status.
   */
  status: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';

  /**
   * Tenant the member belongs to.
   */
  tenant_id: string;

  /**
   * The member's email address, if known.
   */
  user_email: string | null;

  /**
   * The member's Hercules Auth user id (the end user's OIDC subject).
   */
  user_id: string;

  /**
   * The member's avatar URL, if any.
   */
  user_image: string | null;

  /**
   * The member's display name, if known.
   */
  user_name: string | null;
}

/**
 * Paginated resource role assignments held by one member.
 */
export interface MemberListResourceRoleAssignmentsResponse {
  /**
   * Member resource role assignment page.
   */
  data: Array<MemberListResourceRoleAssignmentsResponse.Data>;

  /**
   * Whether more records are available after this page.
   */
  has_more: boolean;
}

export namespace MemberListResourceRoleAssignmentsResponse {
  /**
   * One of a member's resource role assignments.
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
     * The member resource role assignment ID.
     */
    member_resource_role_assignment_id: string;

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
 * Paginated tenant-wide role assignments held by one member.
 */
export interface MemberListRoleAssignmentsResponse {
  /**
   * Member role assignment page.
   */
  data: Array<MemberListRoleAssignmentsResponse.Data>;

  /**
   * Whether more records are available after this page.
   */
  has_more: boolean;
}

export namespace MemberListRoleAssignmentsResponse {
  /**
   * One of a member's tenant-wide role assignments.
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
     * The member role assignment ID.
     */
    member_role_assignment_id: string;

    /**
     * The assigned role ID.
     */
    role_id: string;
  }
}

/**
 * Result of changing a tenant member.
 */
export interface MemberRemoveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberRemoveResponse.ConvexSourceData;

  /**
   * The user's tenant membership ID changed by the operation.
   */
  membership_id: string;
}

export namespace MemberRemoveResponse {
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
 * Result of replacing a member's role assignments on one resource.
 */
export interface MemberReplaceResourceRolesResponse {
  /**
   * The member's direct role assignments on the resource after the replace.
   */
  assignments: Array<MemberReplaceResourceRolesResponse.Assignment>;

  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberReplaceResourceRolesResponse.ConvexSourceData;

  /**
   * The app-defined external ID of the exact resource.
   */
  external_id: string;

  /**
   * The member whose resource role assignments were replaced.
   */
  membership_id: string;

  /**
   * The resource type ID.
   */
  resource_type_id: string;
}

export namespace MemberReplaceResourceRolesResponse {
  /**
   * One direct role assignment held by the member.
   */
  export interface Assignment {
    /**
     * Role assignment ID.
     */
    assignment_id: string;

    /**
     * Assigned role ID.
     */
    role_id: string;
  }

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
 * Result of replacing a member's tenant-wide role assignments.
 */
export interface MemberReplaceRolesResponse {
  /**
   * The member's direct tenant-wide role assignments after the replace.
   */
  assignments: Array<MemberReplaceRolesResponse.Assignment>;

  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberReplaceRolesResponse.ConvexSourceData;

  /**
   * The member whose role assignments were replaced.
   */
  membership_id: string;
}

export namespace MemberReplaceRolesResponse {
  /**
   * One direct role assignment held by the member.
   */
  export interface Assignment {
    /**
     * Role assignment ID.
     */
    assignment_id: string;

    /**
     * Assigned role ID.
     */
    role_id: string;
  }

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
 * Result of changing a member resource role assignment.
 */
export interface MemberUnassignResourceRoleResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberUnassignResourceRoleResponse.ConvexSourceData;

  /**
   * The member resource role assignment changed by the operation.
   */
  member_resource_role_assignment_id: string;
}

export namespace MemberUnassignResourceRoleResponse {
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
 * Result of changing a member's tenant-wide role assignment.
 */
export interface MemberUnassignRoleResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberUnassignRoleResponse.ConvexSourceData;

  /**
   * The member role assignment changed by the operation.
   */
  member_role_assignment_id: string;
}

export namespace MemberUnassignRoleResponse {
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
 * Result of changing a tenant member.
 */
export interface MemberUpdateStatusResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberUpdateStatusResponse.ConvexSourceData;

  /**
   * The user's tenant membership ID changed by the operation.
   */
  membership_id: string;
}

export namespace MemberUpdateStatusResponse {
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

export interface MemberCreateParams {
  /**
   * The signed-in end user's ID (their OIDC subject), asserted by the trusted app
   * backend. Used for identity and audit only.
   */
  actor_user_id: string | null;

  /**
   * The end user's ID (their OIDC subject) to add to the tenant.
   */
  user_id: string;

  /**
   * Identifies exactly one IAM role by ID or stable key.
   */
  role?: MemberCreateParams.IamRoleIDReference | MemberCreateParams.IamRoleKeyReference;

  /**
   * Initial membership status. Defaults to `active`.
   */
  status?: 'active' | 'blocked' | 'suspended';
}

export namespace MemberCreateParams {
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

export interface MemberListParams {
  /**
   * Maximum number of records to return. Defaults to 50.
   */
  limit?: number;

  /**
   * Return only members that directly hold this tenant-wide role.
   */
  role_id?: string;

  /**
   * Cursor for forward pagination. Pass the ID of the last item from the previous
   * page.
   */
  starting_after?: string;

  /**
   * Filter by membership status.
   */
  status?: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';

  /**
   * Return the member for this Hercules Auth user id (the end user's OIDC subject);
   * an exact match.
   */
  user_id?: string;
}

export interface MemberAssignResourceRoleParams {
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
   * Body param: The app-defined external ID of the exact resource.
   */
  external_id: string;

  /**
   * Body param: Identifies exactly one IAM resource type by ID or stable key.
   */
  resource_type:
    | MemberAssignResourceRoleParams.IamResourceTypeIDReference
    | MemberAssignResourceRoleParams.IamResourceTypeKeyReference;

  /**
   * Body param: Identifies exactly one IAM role by ID or stable key.
   */
  role:
    | MemberAssignResourceRoleParams.IamRoleIDReference
    | MemberAssignResourceRoleParams.IamRoleKeyReference;

  /**
   * Body param: Assignment expiry. Omit or pass null for a permanent assignment.
   */
  expires_at?: string | null;
}

export namespace MemberAssignResourceRoleParams {
  export interface IamResourceTypeIDReference {
    /**
     * Existing IAM resource type ID.
     */
    id: string;
  }

  export interface IamResourceTypeKeyReference {
    /**
     * Stable resource type key from the deployment's IAM catalog (e.g. `app.project`).
     */
    key: string;
  }

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

export interface MemberAssignRoleParams {
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
   * Body param: Identifies exactly one IAM role by ID or stable key.
   */
  role: MemberAssignRoleParams.IamRoleIDReference | MemberAssignRoleParams.IamRoleKeyReference;

  /**
   * Body param: Assignment expiry. Omit or pass null for a permanent assignment.
   */
  expires_at?: string | null;
}

export namespace MemberAssignRoleParams {
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

export interface MemberGetParams {
  /**
   * The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
}

export interface MemberListResourceRoleAssignmentsParams {
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

export interface MemberListRoleAssignmentsParams {
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

export interface MemberRemoveParams {
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

export interface MemberReplaceResourceRolesParams {
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
   * Body param: The app-defined external ID of the exact resource.
   */
  external_id: string;

  /**
   * Body param: Identifies exactly one IAM resource type by ID or stable key.
   */
  resource_type:
    | MemberReplaceResourceRolesParams.IamResourceTypeIDReference
    | MemberReplaceResourceRolesParams.IamResourceTypeKeyReference;

  /**
   * Body param: The complete desired set of the member's direct roles on this exact
   * resource. Missing roles are assigned, surplus assignments are removed;
   * assignments on other resources and via groups are untouched. An empty array
   * removes every direct assignment on the resource.
   */
  roles: Array<
    MemberReplaceResourceRolesParams.IamRoleIDReference | MemberReplaceResourceRolesParams.IamRoleKeyReference
  >;
}

export namespace MemberReplaceResourceRolesParams {
  export interface IamResourceTypeIDReference {
    /**
     * Existing IAM resource type ID.
     */
    id: string;
  }

  export interface IamResourceTypeKeyReference {
    /**
     * Stable resource type key from the deployment's IAM catalog (e.g. `app.project`).
     */
    key: string;
  }

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

export interface MemberReplaceRolesParams {
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
   * Body param: The complete desired set of the member's direct tenant-wide roles.
   * Missing roles are assigned, surplus assignments are removed, and roles conferred
   * via groups are untouched. An empty array removes every direct assignment.
   */
  roles: Array<MemberReplaceRolesParams.IamRoleIDReference | MemberReplaceRolesParams.IamRoleKeyReference>;
}

export namespace MemberReplaceRolesParams {
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

export interface MemberUnassignResourceRoleParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary
   * tenant.
   */
  tenant_id: string;

  /**
   * Path param: The user's tenant membership ID, as returned by IAM member reads. It
   * identifies the user's membership in the tenant, not the user id.
   */
  membership_id: string;

  /**
   * Query param: The signed-in end user's ID to attribute the operation to that
   * user, or omitted for service authority.
   */
  actor_user_id?: string;
}

export interface MemberUnassignRoleParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary
   * tenant.
   */
  tenant_id: string;

  /**
   * Path param: The user's tenant membership ID, as returned by IAM member reads. It
   * identifies the user's membership in the tenant, not the user id.
   */
  membership_id: string;

  /**
   * Query param: The signed-in end user's ID to attribute the operation to that
   * user, or omitted for service authority.
   */
  actor_user_id?: string;
}

export interface MemberUpdateStatusParams {
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
   * Body param: New membership status.
   */
  status: 'active' | 'blocked' | 'suspended' | 'removed';
}

export declare namespace Members {
  export {
    type MemberCreateResponse as MemberCreateResponse,
    type MemberListResponse as MemberListResponse,
    type MemberAssignResourceRoleResponse as MemberAssignResourceRoleResponse,
    type MemberAssignRoleResponse as MemberAssignRoleResponse,
    type MemberGetResponse as MemberGetResponse,
    type MemberListResourceRoleAssignmentsResponse as MemberListResourceRoleAssignmentsResponse,
    type MemberListRoleAssignmentsResponse as MemberListRoleAssignmentsResponse,
    type MemberRemoveResponse as MemberRemoveResponse,
    type MemberReplaceResourceRolesResponse as MemberReplaceResourceRolesResponse,
    type MemberReplaceRolesResponse as MemberReplaceRolesResponse,
    type MemberUnassignResourceRoleResponse as MemberUnassignResourceRoleResponse,
    type MemberUnassignRoleResponse as MemberUnassignRoleResponse,
    type MemberUpdateStatusResponse as MemberUpdateStatusResponse,
    type MemberCreateParams as MemberCreateParams,
    type MemberListParams as MemberListParams,
    type MemberAssignResourceRoleParams as MemberAssignResourceRoleParams,
    type MemberAssignRoleParams as MemberAssignRoleParams,
    type MemberGetParams as MemberGetParams,
    type MemberListResourceRoleAssignmentsParams as MemberListResourceRoleAssignmentsParams,
    type MemberListRoleAssignmentsParams as MemberListRoleAssignmentsParams,
    type MemberRemoveParams as MemberRemoveParams,
    type MemberReplaceResourceRolesParams as MemberReplaceResourceRolesParams,
    type MemberReplaceRolesParams as MemberReplaceRolesParams,
    type MemberUnassignResourceRoleParams as MemberUnassignResourceRoleParams,
    type MemberUnassignRoleParams as MemberUnassignRoleParams,
    type MemberUpdateStatusParams as MemberUpdateStatusParams,
  };
}
