// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../../core/pagination';
import type { RequestOptions } from '../../../internal/request-options';
import { path as __scalarPath } from '../../../internal/utils/path';

export class Members extends APIResource {
  /**
   * Adds an end user to the tenant, optionally with a role.
   *
   * @param {string} tenantID - The tenant ID. Pass `primary` to target the deployment's primary tenant.
   * @param {MemberCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberCreateResponse>} The added tenant member
   *
   * @example
   * ```ts
   * const member = await client.iam.tenants.members.create('tenantId', {
   *   actor_user_id: 'x',
   *   user_id: 'x',
   * });
   * ```
   */
  create(
    tenantID: string,
    body: MemberCreateParams,
    options?: RequestOptions,
  ): APIPromise<MemberCreateResponse> {
    return this._client.post(__scalarPath`/v1/iam/tenants/${tenantID}/members`, { body, ...options });
  }

  /**
   * Lists a tenant's members, newest first. Filter by status, by a role the member directly holds, or by the member's Hercules Auth user id.
   *
   * @param {string} tenantID - The tenant ID. Pass `primary` to target the deployment's primary tenant.
   * @param {MemberListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<IamMembersCursorIDPage, MemberListResponse>} The tenant member page
   *
   * @example
   * ```ts
   * const page = await client.iam.tenants.members.list('tenantId');
   * ```
   */
  list(
    tenantID: string,
    query: MemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<IamMembersCursorIDPage, MemberListResponse> {
    return this._client.getAPIList(
      __scalarPath`/v1/iam/tenants/${tenantID}/members`,
      CursorIDPage<MemberListResponse>,
      { query, ...options },
    );
  }

  /**
   * Returns one tenant member by their membership ID.
   *
   * @param {string} membershipID - The user's tenant membership ID, as returned by IAM member reads. It identifies the user's membership in the tenant, not the user id.
   * @param {MemberGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberGetResponse>} The tenant member
   *
   * @example
   * ```ts
   * const member = await client.iam.tenants.members.get('membershipId', {
   *   tenant_id: 'tenantId',
   * });
   * ```
   */
  get(
    membershipID: string,
    params: MemberGetParams,
    options?: RequestOptions,
  ): APIPromise<MemberGetResponse> {
    const { tenant_id } = params;
    return this._client.get(__scalarPath`/v1/iam/tenants/${tenant_id}/members/${membershipID}`, options);
  }

  /**
   * Approves, suspends, blocks, reactivates, or removes a tenant member.
   *
   * @param {string} membershipID - The user's tenant membership ID, as returned by IAM member reads. It identifies the user's membership in the tenant, not the user id.
   * @param {MemberUpdateStatusParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberUpdateStatusResponse>} The updated tenant member
   *
   * @example
   * ```ts
   * const member = await client.iam.tenants.members.updateStatus('membershipId', {
   *   tenant_id: 'tenantId',
   *   actor_user_id: 'x',
   *   status: 'active',
   * });
   * ```
   */
  updateStatus(
    membershipID: string,
    params: MemberUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<MemberUpdateStatusResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(__scalarPath`/v1/iam/tenants/${tenant_id}/members/${membershipID}`, {
      body,
      ...options,
    });
  }

  /**
   * Removes a member from the tenant. The component treats a removed member as denied.
   *
   * @param {string} membershipID - The user's tenant membership ID, as returned by IAM member reads. It identifies the user's membership in the tenant, not the user id.
   * @param {MemberRemoveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberRemoveResponse>} The removed tenant member
   *
   * @example
   * ```ts
   * const member = await client.iam.tenants.members.remove('membershipId', {
   *   tenant_id: 'tenantId',
   * });
   * ```
   */
  remove(
    membershipID: string,
    params: MemberRemoveParams,
    options?: RequestOptions,
  ): APIPromise<MemberRemoveResponse> {
    const { tenant_id, actor_user_id } = params;
    return this._client.delete(__scalarPath`/v1/iam/tenants/${tenant_id}/members/${membershipID}`, {
      query: { actor_user_id },
      ...options,
    });
  }

  /**
   * Assigns a tenant-wide role to a member.
   *
   * @param {string} membershipID - The user's tenant membership ID, as returned by IAM member reads. It identifies the user's membership in the tenant, not the user id.
   * @param {MemberAssignRoleParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberAssignRoleResponse>} The created role assignment
   *
   * @example
   * ```ts
   * const member = await client.iam.tenants.members.assignRole('membershipId', {
   *   tenant_id: 'tenantId',
   *   actor_user_id: 'x',
   *   role: {
   *     id: 'x',
   *   },
   * });
   * ```
   */
  assignRole(
    membershipID: string,
    params: MemberAssignRoleParams,
    options?: RequestOptions,
  ): APIPromise<MemberAssignRoleResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(
      __scalarPath`/v1/iam/tenants/${tenant_id}/members/${membershipID}/role-assignments`,
      { body, ...options },
    );
  }

  /**
   * Reconciles the member's direct tenant-wide role assignments to exactly the supplied set in one transaction: missing roles are assigned, surplus assignments removed, matching ones kept. Roles conferred via groups are untouched. Idempotent; prefer this over unassign-then-assign loops.
   *
   * @param {string} membershipID - The user's tenant membership ID, as returned by IAM member reads. It identifies the user's membership in the tenant, not the user id.
   * @param {MemberReplaceRolesParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberReplaceRolesResponse>} The member's direct role assignments after the replace
   *
   * @example
   * ```ts
   * const member = await client.iam.tenants.members.replaceRoles('membershipId', {
   *   tenant_id: 'tenantId',
   *   actor_user_id: 'x',
   *   roles: [],
   * });
   * ```
   */
  replaceRoles(
    membershipID: string,
    params: MemberReplaceRolesParams,
    options?: RequestOptions,
  ): APIPromise<MemberReplaceRolesResponse> {
    const { tenant_id, ...body } = params;
    return this._client.put(
      __scalarPath`/v1/iam/tenants/${tenant_id}/members/${membershipID}/role-assignments`,
      { body, ...options },
    );
  }

  /**
   * Removes a tenant-wide role assignment.
   *
   * @param {string} assignmentID - The unique identifier of the role assignment.
   * @param {MemberUnassignRoleParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberUnassignRoleResponse>} The removed role assignment
   *
   * @example
   * ```ts
   * const member = await client.iam.tenants.members.unassignRole('assignmentId', {
   *   tenant_id: 'tenantId',
   *   membership_id: 'membershipId',
   * });
   * ```
   */
  unassignRole(
    assignmentID: string,
    params: MemberUnassignRoleParams,
    options?: RequestOptions,
  ): APIPromise<MemberUnassignRoleResponse> {
    const { tenant_id, membership_id, actor_user_id } = params;
    return this._client.delete(
      __scalarPath`/v1/iam/tenants/${tenant_id}/members/${membership_id}/role-assignments/${assignmentID}`,
      { query: { actor_user_id }, ...options },
    );
  }

  /**
   * Lists the tenant-wide role assignments held by one member, newest first.
   *
   * @param {string} membershipID - The user's tenant membership ID, as returned by IAM member reads. It identifies the user's membership in the tenant, not the user id.
   * @param {MemberListRoleAssignmentsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<IamMemberRoleAssignmentsCursorIDPage, MemberListRoleAssignmentsResponse>} The member role assignment page
   *
   * @example
   * ```ts
   * const page = await client.iam.tenants.members.listRoleAssignments('membershipId', {
   *   tenant_id: 'tenantId',
   * });
   * ```
   */
  listRoleAssignments(
    membershipID: string,
    params: MemberListRoleAssignmentsParams,
    options?: RequestOptions,
  ): PagePromise<IamMemberRoleAssignmentsCursorIDPage, MemberListRoleAssignmentsResponse> {
    const { tenant_id, ...query } = params;
    return this._client.getAPIList(
      __scalarPath`/v1/iam/tenants/${tenant_id}/members/${membershipID}/role-assignments`,
      CursorIDPage<MemberListRoleAssignmentsResponse>,
      { query, ...options },
    );
  }

  /**
   * Assigns a role to a member on one exact resource.
   *
   * @param {string} membershipID - The user's tenant membership ID, as returned by IAM member reads. It identifies the user's membership in the tenant, not the user id.
   * @param {MemberAssignResourceRoleParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberAssignResourceRoleResponse>} The created resource role assignment
   *
   * @example
   * ```ts
   * const member = await client.iam.tenants.members.assignResourceRole('membershipId', {
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
    membershipID: string,
    params: MemberAssignResourceRoleParams,
    options?: RequestOptions,
  ): APIPromise<MemberAssignResourceRoleResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(
      __scalarPath`/v1/iam/tenants/${tenant_id}/members/${membershipID}/resource-role-assignments`,
      { body, ...options },
    );
  }

  /**
   * Reconciles the member's direct role assignments on one exact resource to exactly the supplied set in one transaction: missing roles are assigned, surplus assignments removed, matching ones kept. Grants on other resources and via groups are untouched. Idempotent; prefer this over unassign-then-assign loops.
   *
   * @param {string} membershipID - The user's tenant membership ID, as returned by IAM member reads. It identifies the user's membership in the tenant, not the user id.
   * @param {MemberReplaceResourceRolesParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberReplaceResourceRolesResponse>} The member's direct role assignments on the resource after the replace
   *
   * @example
   * ```ts
   * const member = await client.iam.tenants.members.replaceResourceRoles('membershipId', {
   *   tenant_id: 'tenantId',
   *   actor_user_id: 'x',
   *   resource_type: {
   *     id: 'x',
   *   },
   *   external_id: 'x',
   *   roles: [],
   * });
   * ```
   */
  replaceResourceRoles(
    membershipID: string,
    params: MemberReplaceResourceRolesParams,
    options?: RequestOptions,
  ): APIPromise<MemberReplaceResourceRolesResponse> {
    const { tenant_id, ...body } = params;
    return this._client.put(
      __scalarPath`/v1/iam/tenants/${tenant_id}/members/${membershipID}/resource-role-assignments`,
      { body, ...options },
    );
  }

  /**
   * Removes a member resource role assignment.
   *
   * @param {string} assignmentID - The unique identifier of the resource role assignment.
   * @param {MemberUnassignResourceRoleParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberUnassignResourceRoleResponse>} The removed resource role assignment
   *
   * @example
   * ```ts
   * const member = await client.iam.tenants.members.unassignResourceRole('assignmentId', {
   *   tenant_id: 'tenantId',
   *   membership_id: 'membershipId',
   * });
   * ```
   */
  unassignResourceRole(
    assignmentID: string,
    params: MemberUnassignResourceRoleParams,
    options?: RequestOptions,
  ): APIPromise<MemberUnassignResourceRoleResponse> {
    const { tenant_id, membership_id, actor_user_id } = params;
    return this._client.delete(
      __scalarPath`/v1/iam/tenants/${tenant_id}/members/${membership_id}/resource-role-assignments/${assignmentID}`,
      { query: { actor_user_id }, ...options },
    );
  }

  /**
   * Lists the resource role assignments held by one member, newest first.
   *
   * @param {string} membershipID - The user's tenant membership ID, as returned by IAM member reads. It identifies the user's membership in the tenant, not the user id.
   * @param {MemberListResourceRoleAssignmentsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<IamMemberResourceRoleAssignmentsCursorIDPage, MemberListResourceRoleAssignmentsResponse>} The member resource role assignment page
   *
   * @example
   * ```ts
   * const page = await client.iam.tenants.members.listResourceRoleAssignments('membershipId', {
   *   tenant_id: 'tenantId',
   * });
   * ```
   */
  listResourceRoleAssignments(
    membershipID: string,
    params: MemberListResourceRoleAssignmentsParams,
    options?: RequestOptions,
  ): PagePromise<IamMemberResourceRoleAssignmentsCursorIDPage, MemberListResourceRoleAssignmentsResponse> {
    const { tenant_id, ...query } = params;
    return this._client.getAPIList(
      __scalarPath`/v1/iam/tenants/${tenant_id}/members/${membershipID}/resource-role-assignments`,
      CursorIDPage<MemberListResourceRoleAssignmentsResponse>,
      { query, ...options },
    );
  }
}

export interface MemberCreateParams {
  /**
   * The signed-in end user's ID to attribute the write to that user, or null to attribute it to the service API key.
   * @minLength 1
   */
  actor_user_id: string | null;
  /**
   * The end user's ID (their OIDC subject) to add to the tenant.
   * @minLength 1
   */
  user_id: string;
  /**
   * Initial membership status. Defaults to `active`.
   */
  status?: 'active' | 'blocked' | 'suspended';
  /**
   * Identifies exactly one IAM role by ID or stable key.
   */
  role?: MemberCreateParams.IamRoleIDReference | MemberCreateParams.IamRoleKeyReference;
}

export namespace MemberCreateParams {
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

export interface MemberCreateResponse {
  /**
   * The user's tenant membership ID, created by adding them to the tenant.
   * @minLength 1
   */
  membership_id: string;
  /**
   * Role assignment ID when a role was assigned.
   * @minLength 1
   */
  role_assignment_id: string | null;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberCreateResponse.ConvexSourceData;
}

export namespace MemberCreateResponse {
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

export interface MemberListParams extends CursorIDPageParams {
  /**
   * Filter by membership status.
   */
  status?: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';
  /**
   * Return only members that directly hold this tenant-wide role.
   * @minLength 1
   */
  role_id?: string;
  /**
   * Return the member for this Hercules Auth user id (the end user's OIDC subject); an exact match.
   * @minLength 1
   */
  user_id?: string;
}

export interface MemberListResponse {
  /**
   * The user's tenant membership ID.
   * @minLength 1
   */
  membership_id: string;
  /**
   * Tenant the member belongs to.
   * @minLength 1
   */
  tenant_id: string;
  /**
   * The member's Hercules Auth user id (the end user's OIDC subject).
   */
  user_id: string;
  /**
   * Tenant user lifecycle status.
   */
  status: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';
  /**
   * The member's display name, if known.
   */
  user_name: string | null;
  /**
   * The member's email address, if known.
   */
  user_email: string | null;
  /**
   * The member's avatar URL, if any.
   */
  user_image: string | null;
  /**
   * Membership creation timestamp.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created_at: string;
}

export type IamMembersCursorIDPage = CursorIDPage<MemberListResponse>;

export interface MemberGetParams {
  /**
   * The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
}

export interface MemberGetResponse {
  /**
   * The user's tenant membership ID.
   * @minLength 1
   */
  membership_id: string;
  /**
   * Tenant the member belongs to.
   * @minLength 1
   */
  tenant_id: string;
  /**
   * The member's Hercules Auth user id (the end user's OIDC subject).
   */
  user_id: string;
  /**
   * Tenant user lifecycle status.
   */
  status: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';
  /**
   * The member's display name, if known.
   */
  user_name: string | null;
  /**
   * The member's email address, if known.
   */
  user_email: string | null;
  /**
   * The member's avatar URL, if any.
   */
  user_image: string | null;
  /**
   * Membership creation timestamp.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created_at: string;
}

export interface MemberUpdateStatusParams {
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
   * Body param: New membership status.
   */
  status: 'active' | 'blocked' | 'suspended' | 'removed';
}

export interface MemberUpdateStatusResponse {
  /**
   * The user's tenant membership ID changed by the operation.
   * @minLength 1
   */
  membership_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberUpdateStatusResponse.ConvexSourceData;
}

export namespace MemberUpdateStatusResponse {
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

export interface MemberRemoveParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
  /**
   * Query param: The signed-in end user's ID to attribute the operation to that user, or omitted for service authority.
   */
  actor_user_id?: string;
}

export interface MemberRemoveResponse {
  /**
   * The user's tenant membership ID changed by the operation.
   * @minLength 1
   */
  membership_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberRemoveResponse.ConvexSourceData;
}

export namespace MemberRemoveResponse {
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

export interface MemberAssignRoleParams {
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
  role: MemberAssignRoleParams.IamRoleIDReference | MemberAssignRoleParams.IamRoleKeyReference;
  /**
   * Body param: Assignment expiry. Omit or pass null for a permanent assignment.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  expires_at?: string | null;
}

export namespace MemberAssignRoleParams {
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

export interface MemberAssignRoleResponse {
  /**
   * The member role assignment changed by the operation.
   * @minLength 1
   */
  member_role_assignment_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberAssignRoleResponse.ConvexSourceData;
}

export namespace MemberAssignRoleResponse {
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

export interface MemberReplaceRolesParams {
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
   * Body param: The complete desired set of the member's direct tenant-wide roles. Missing roles are assigned, surplus assignments are removed, and roles conferred via groups are untouched. An empty array removes every direct assignment.
   * @maxItems 500
   */
  roles: Array<MemberReplaceRolesParams.IamRoleIDReference | MemberReplaceRolesParams.IamRoleKeyReference>;
}

export namespace MemberReplaceRolesParams {
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

export interface MemberReplaceRolesResponse {
  /**
   * The member whose role assignments were replaced.
   * @minLength 1
   */
  membership_id: string;
  /**
   * The member's direct tenant-wide role assignments after the replace.
   */
  assignments: Array<MemberReplaceRolesResponse.Assignment>;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberReplaceRolesResponse.ConvexSourceData;
}

export namespace MemberReplaceRolesResponse {
  export interface Assignment {
    /**
     * Role assignment ID.
     * @minLength 1
     */
    assignment_id: string;
    /**
     * Assigned role ID.
     * @minLength 1
     */
    role_id: string;
  }

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

export interface MemberUnassignRoleParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
  /**
   * Path param: The user's tenant membership ID, as returned by IAM member reads. It identifies the user's membership in the tenant, not the user id.
   */
  membership_id: string;
  /**
   * Query param: The signed-in end user's ID to attribute the operation to that user, or omitted for service authority.
   */
  actor_user_id?: string;
}

export interface MemberUnassignRoleResponse {
  /**
   * The member role assignment changed by the operation.
   * @minLength 1
   */
  member_role_assignment_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberUnassignRoleResponse.ConvexSourceData;
}

export namespace MemberUnassignRoleResponse {
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

export interface MemberListRoleAssignmentsParams extends CursorIDPageParams {
  /**
   * The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
}

export interface MemberListRoleAssignmentsResponse {
  /**
   * The member role assignment ID.
   * @minLength 1
   */
  member_role_assignment_id: string;
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

export type IamMemberRoleAssignmentsCursorIDPage = CursorIDPage<MemberListRoleAssignmentsResponse>;

export interface MemberAssignResourceRoleParams {
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
  role:
    | MemberAssignResourceRoleParams.IamRoleIDReference
    | MemberAssignResourceRoleParams.IamRoleKeyReference;
  /**
   * Body param: Identifies exactly one IAM resource type by ID or stable key.
   */
  resource_type:
    | MemberAssignResourceRoleParams.IamResourceTypeIDReference
    | MemberAssignResourceRoleParams.IamResourceTypeKeyReference;
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

export namespace MemberAssignResourceRoleParams {
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

export interface MemberAssignResourceRoleResponse {
  /**
   * The member resource role assignment changed by the operation.
   * @minLength 1
   */
  member_resource_role_assignment_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberAssignResourceRoleResponse.ConvexSourceData;
}

export namespace MemberAssignResourceRoleResponse {
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

export interface MemberReplaceResourceRolesParams {
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
   * Body param: Identifies exactly one IAM resource type by ID or stable key.
   */
  resource_type:
    | MemberReplaceResourceRolesParams.IamResourceTypeIDReference
    | MemberReplaceResourceRolesParams.IamResourceTypeKeyReference;
  /**
   * Body param: The app-defined external ID of the exact resource.
   * @minLength 1
   * @maxLength 255
   */
  external_id: string;
  /**
   * Body param: The complete desired set of the member's direct roles on this exact resource. Missing roles are assigned, surplus assignments are removed; assignments on other resources and via groups are untouched. An empty array removes every direct assignment on the resource.
   * @maxItems 500
   */
  roles: Array<
    MemberReplaceResourceRolesParams.IamRoleIDReference | MemberReplaceResourceRolesParams.IamRoleKeyReference
  >;
}

export namespace MemberReplaceResourceRolesParams {
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

export interface MemberReplaceResourceRolesResponse {
  /**
   * The member whose resource role assignments were replaced.
   * @minLength 1
   */
  membership_id: string;
  /**
   * The resource type ID.
   * @minLength 1
   */
  resource_type_id: string;
  /**
   * The app-defined external ID of the exact resource.
   * @minLength 1
   * @maxLength 255
   */
  external_id: string;
  /**
   * The member's direct role assignments on the resource after the replace.
   */
  assignments: Array<MemberReplaceResourceRolesResponse.Assignment>;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberReplaceResourceRolesResponse.ConvexSourceData;
}

export namespace MemberReplaceResourceRolesResponse {
  export interface Assignment {
    /**
     * Role assignment ID.
     * @minLength 1
     */
    assignment_id: string;
    /**
     * Assigned role ID.
     * @minLength 1
     */
    role_id: string;
  }

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

export interface MemberUnassignResourceRoleParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
  /**
   * Path param: The user's tenant membership ID, as returned by IAM member reads. It identifies the user's membership in the tenant, not the user id.
   */
  membership_id: string;
  /**
   * Query param: The signed-in end user's ID to attribute the operation to that user, or omitted for service authority.
   */
  actor_user_id?: string;
}

export interface MemberUnassignResourceRoleResponse {
  /**
   * The member resource role assignment changed by the operation.
   * @minLength 1
   */
  member_resource_role_assignment_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberUnassignResourceRoleResponse.ConvexSourceData;
}

export namespace MemberUnassignResourceRoleResponse {
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

export interface MemberListResourceRoleAssignmentsParams extends CursorIDPageParams {
  /**
   * The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
}

export interface MemberListResourceRoleAssignmentsResponse {
  /**
   * The member resource role assignment ID.
   * @minLength 1
   */
  member_resource_role_assignment_id: string;
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

export type IamMemberResourceRoleAssignmentsCursorIDPage =
  CursorIDPage<MemberListResourceRoleAssignmentsResponse>;
export declare namespace Members {
  export {
    type MemberCreateResponse as MemberCreateResponse,
    type MemberListResponse as MemberListResponse,
    type MemberGetResponse as MemberGetResponse,
    type MemberUpdateStatusResponse as MemberUpdateStatusResponse,
    type MemberRemoveResponse as MemberRemoveResponse,
    type MemberAssignRoleResponse as MemberAssignRoleResponse,
    type MemberReplaceRolesResponse as MemberReplaceRolesResponse,
    type MemberUnassignRoleResponse as MemberUnassignRoleResponse,
    type MemberListRoleAssignmentsResponse as MemberListRoleAssignmentsResponse,
    type MemberAssignResourceRoleResponse as MemberAssignResourceRoleResponse,
    type MemberReplaceResourceRolesResponse as MemberReplaceResourceRolesResponse,
    type MemberUnassignResourceRoleResponse as MemberUnassignResourceRoleResponse,
    type MemberListResourceRoleAssignmentsResponse as MemberListResourceRoleAssignmentsResponse,
    type IamMembersCursorIDPage as IamMembersCursorIDPage,
    type IamMemberRoleAssignmentsCursorIDPage as IamMemberRoleAssignmentsCursorIDPage,
    type IamMemberResourceRoleAssignmentsCursorIDPage as IamMemberResourceRoleAssignmentsCursorIDPage,
    type MemberCreateParams as MemberCreateParams,
    type MemberListParams as MemberListParams,
    type MemberGetParams as MemberGetParams,
    type MemberUpdateStatusParams as MemberUpdateStatusParams,
    type MemberRemoveParams as MemberRemoveParams,
    type MemberAssignRoleParams as MemberAssignRoleParams,
    type MemberReplaceRolesParams as MemberReplaceRolesParams,
    type MemberUnassignRoleParams as MemberUnassignRoleParams,
    type MemberListRoleAssignmentsParams as MemberListRoleAssignmentsParams,
    type MemberAssignResourceRoleParams as MemberAssignResourceRoleParams,
    type MemberReplaceResourceRolesParams as MemberReplaceResourceRolesParams,
    type MemberUnassignResourceRoleParams as MemberUnassignResourceRoleParams,
    type MemberListResourceRoleAssignmentsParams as MemberListResourceRoleAssignmentsParams,
  };
}
