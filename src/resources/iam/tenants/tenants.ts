// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import type { RequestOptions } from '../../../internal/request-options';
import { path as __scalarPath } from '../../../internal/utils/path';
import * as MembersAPI from './members';
import {
  Members,
  type MemberCreateResponse,
  type MemberListResponse,
  type MemberGetResponse,
  type MemberUpdateStatusResponse,
  type MemberRemoveResponse,
  type MemberAssignRoleResponse,
  type MemberReplaceRolesResponse,
  type MemberUnassignRoleResponse,
  type MemberListRoleAssignmentsResponse,
  type MemberAssignResourceRoleResponse,
  type MemberReplaceResourceRolesResponse,
  type MemberUnassignResourceRoleResponse,
  type MemberListResourceRoleAssignmentsResponse,
  type MemberCreateParams,
  type MemberListParams,
  type MemberGetParams,
  type MemberUpdateStatusParams,
  type MemberRemoveParams,
  type MemberAssignRoleParams,
  type MemberReplaceRolesParams,
  type MemberUnassignRoleParams,
  type MemberListRoleAssignmentsParams,
  type MemberAssignResourceRoleParams,
  type MemberReplaceResourceRolesParams,
  type MemberUnassignResourceRoleParams,
  type MemberListResourceRoleAssignmentsParams,
} from './members';
import * as GroupsAPI from './groups/groups';
import {
  Groups,
  type GroupCreateResponse,
  type GroupListResponse,
  type GroupGetResponse,
  type GroupUpdateResponse,
  type GroupDeleteResponse,
  type GroupArchiveResponse,
  type GroupUnarchiveResponse,
  type GroupAssignRoleResponse,
  type GroupUnassignRoleResponse,
  type GroupListRoleAssignmentsResponse,
  type GroupAssignResourceRoleResponse,
  type GroupUnassignResourceRoleResponse,
  type GroupListResourceRoleAssignmentsResponse,
  type GroupCreateParams,
  type GroupListParams,
  type GroupGetParams,
  type GroupUpdateParams,
  type GroupDeleteParams,
  type GroupArchiveParams,
  type GroupUnarchiveParams,
  type GroupAssignRoleParams,
  type GroupUnassignRoleParams,
  type GroupListRoleAssignmentsParams,
  type GroupAssignResourceRoleParams,
  type GroupUnassignResourceRoleParams,
  type GroupListResourceRoleAssignmentsParams,
} from './groups/groups';
import * as RolesAPI from './roles';
import {
  Roles,
  type RoleCreateResponse,
  type RoleListResponse,
  type RoleGetResponse,
  type RoleUpdateResponse,
  type RoleDeleteResponse,
  type RoleCreateParams,
  type RoleListParams,
  type RoleGetParams,
  type RoleUpdateParams,
  type RoleDeleteParams,
} from './roles';
import * as AccessRulesAPI from './access-rules';
import {
  AccessRules,
  type AccessRuleListResponse,
  type AccessRuleCreateResponse,
  type AccessRuleArchiveResponse,
  type AccessRuleListParams,
  type AccessRuleCreateParams,
  type AccessRuleArchiveParams,
} from './access-rules';
import * as AuditEventsAPI from './audit-events';
import { AuditEvents, type AuditEventListResponse, type AuditEventListParams } from './audit-events';
import * as InvitationsAPI from './invitations';
import {
  Invitations,
  type InvitationListResponse,
  type InvitationRevokeResponse,
  type InvitationListParams,
  type InvitationRevokeParams,
} from './invitations';

export class Tenants extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  accessRules: AccessRulesAPI.AccessRules = new AccessRulesAPI.AccessRules(this._client);
  auditEvents: AuditEventsAPI.AuditEvents = new AuditEventsAPI.AuditEvents(this._client);
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);

  /**
   * Lists the deployment's IAM tenants, primary tenant first.
   *
   * @param {TenantListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TenantListResponse>} The IAM tenant page
   *
   * @example
   * ```ts
   * const tenant = await client.iam.tenants.list({
   *   limit: 50,
   * });
   * ```
   */
  list(
    query: TenantListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TenantListResponse> {
    return this._client.get('/v1/iam/tenants', { query, ...options });
  }

  /**
   * Creates a tenant and assigns its initial owner. The signed-in user becomes the owner unless trusted server code specifies another user. The initial owner is granted the seeded owner role. The default role (for later members) defaults to the seeded member role and must not be an app-scoped role.
   *
   * @param {TenantCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TenantCreateResponse>} The created IAM tenant
   *
   * @example
   * ```ts
   * const tenant = await client.iam.tenants.create({
   *   actor_user_id: 'x',
   *   name: 'x',
   * });
   * ```
   */
  create(body: TenantCreateParams, options?: RequestOptions): APIPromise<TenantCreateResponse> {
    return this._client.post('/v1/iam/tenants', { body, ...options });
  }

  /**
   * Returns one IAM tenant by ID. Pass `primary` for the deployment's primary tenant.
   *
   * @param {string} tenantID - The tenant ID. Pass `primary` to target the deployment's primary tenant.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TenantGetResponse>} The IAM tenant
   *
   * @example
   * ```ts
   * const tenant = await client.iam.tenants.get('tenantId');
   * ```
   */
  get(tenantID: string, options?: RequestOptions): APIPromise<TenantGetResponse> {
    return this._client.get(__scalarPath`/v1/iam/tenants/${tenantID}`, options);
  }

  /**
   * Updates a tenant's name, default role, or access mode.
   *
   * @param {string} tenantID - The tenant ID. Pass `primary` to target the deployment's primary tenant.
   * @param {TenantUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TenantUpdateResponse>} The updated IAM tenant settings
   *
   * @example
   * ```ts
   * const tenant = await client.iam.tenants.update('tenantId', {
   *   actor_user_id: 'x',
   * });
   * ```
   */
  update(
    tenantID: string,
    body: TenantUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TenantUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/iam/tenants/${tenantID}`, { body, ...options });
  }

  /**
   * Archives a non-primary tenant and blocks its access without deleting its data.
   *
   * @param {string} tenantID - The exact non-primary tenant ID. The `primary` tenant is not valid for archive or unarchive.
   * @param {TenantArchiveParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TenantArchiveResponse>} The archived IAM tenant
   *
   * @example
   * ```ts
   * const tenant = await client.iam.tenants.archive('tenantId', {
   *   actor_user_id: 'x',
   * });
   * ```
   */
  archive(
    tenantID: string,
    body: TenantArchiveParams,
    options?: RequestOptions,
  ): APIPromise<TenantArchiveResponse> {
    return this._client.post(__scalarPath`/v1/iam/tenants/${tenantID}/archive`, { body, ...options });
  }

  /**
   * Restores an archived tenant and re-enables access through its existing data.
   *
   * @param {string} tenantID - The exact non-primary tenant ID. The `primary` tenant is not valid for archive or unarchive.
   * @param {TenantUnarchiveParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TenantUnarchiveResponse>} The unarchived IAM tenant
   *
   * @example
   * ```ts
   * const tenant = await client.iam.tenants.unarchive('tenantId', {
   *   actor_user_id: 'x',
   * });
   * ```
   */
  unarchive(
    tenantID: string,
    body: TenantUnarchiveParams,
    options?: RequestOptions,
  ): APIPromise<TenantUnarchiveResponse> {
    return this._client.post(__scalarPath`/v1/iam/tenants/${tenantID}/unarchive`, { body, ...options });
  }

  /**
   * Evaluates whether the signed-in end user may enter the tenant and applies the result: access mode `open` creates an active membership with the tenant default role, `approval_required` creates a pending membership, and denials create nothing. Call it after sign-in, before reading the user's access status. Safe to repeat; an existing membership is returned unchanged.
   *
   * @param {string} tenantID - The tenant ID. Pass `primary` to target the deployment's primary tenant.
   * @param {TenantEvaluateAccessParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TenantEvaluateAccessResponse>} The tenant entry decision
   *
   * @example
   * ```ts
   * const tenant = await client.iam.tenants.evaluateAccess('tenantId', {
   *   actor_user_id: 'x',
   * });
   * ```
   */
  evaluateAccess(
    tenantID: string,
    body: TenantEvaluateAccessParams,
    options?: RequestOptions,
  ): APIPromise<TenantEvaluateAccessResponse> {
    return this._client.post(__scalarPath`/v1/iam/tenants/${tenantID}/evaluate-access`, { body, ...options });
  }

  /**
   * Creates an invitation that confers tenant-wide roles when accepted.
   *
   * @param {string} tenantID - The tenant ID. Pass `primary` to target the deployment's primary tenant.
   * @param {TenantCreateInvitationParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TenantCreateInvitationResponse>} The created invitation
   *
   * @example
   * ```ts
   * const tenant = await client.iam.tenants.createInvitation('tenantId', {
   *   actor_user_id: 'x',
   * });
   * ```
   */
  createInvitation(
    tenantID: string,
    body: TenantCreateInvitationParams,
    options?: RequestOptions,
  ): APIPromise<TenantCreateInvitationResponse> {
    return this._client.post(__scalarPath`/v1/iam/tenants/${tenantID}/invitations`, { body, ...options });
  }

  /**
   * Lists tenant-wide role assignments in a tenant, newest first. Filter by member, group, or role.
   *
   * @param {string} tenantID - The tenant ID. Pass `primary` to target the deployment's primary tenant.
   * @param {TenantListRoleAssignmentsParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TenantListRoleAssignmentsResponse>} The tenant role assignment page
   *
   * @example
   * ```ts
   * const tenant = await client.iam.tenants.listRoleAssignments('tenantId', {
   *   limit: 50,
   * });
   * ```
   */
  listRoleAssignments(
    tenantID: string,
    query: TenantListRoleAssignmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TenantListRoleAssignmentsResponse> {
    return this._client.get(__scalarPath`/v1/iam/tenants/${tenantID}/role-assignments`, {
      query,
      ...options,
    });
  }

  /**
   * Lists resource role assignments in a tenant, newest first. Filter by resource type and external ID to find who has a role on one exact resource, or by member, group, or role.
   *
   * @param {string} tenantID - The tenant ID. Pass `primary` to target the deployment's primary tenant.
   * @param {TenantListResourceRoleAssignmentsParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TenantListResourceRoleAssignmentsResponse>} The tenant resource role assignment page
   *
   * @example
   * ```ts
   * const tenant = await client.iam.tenants.listResourceRoleAssignments('tenantId', {
   *   limit: 50,
   * });
   * ```
   */
  listResourceRoleAssignments(
    tenantID: string,
    query: TenantListResourceRoleAssignmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TenantListResourceRoleAssignmentsResponse> {
    return this._client.get(__scalarPath`/v1/iam/tenants/${tenantID}/resource-role-assignments`, {
      query,
      ...options,
    });
  }
}

export interface TenantListParams {
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
  /**
   * Filter by tenant status.
   */
  status?: 'active' | 'archived';
}

export interface TenantListResponse {
  /**
   * Tenant page.
   */
  data: Array<TenantListResponse.Data>;
  /**
   * Whether more records are available after this page.
   */
  has_more: boolean;
}

export namespace TenantListResponse {
  export interface Data {
    /**
     * Tenant ID.
     * @minLength 1
     */
    tenant_id: string;
    /**
     * Human-readable tenant name.
     */
    name: string;
    /**
     * Whether this is the deployment's primary tenant.
     */
    is_primary_tenant: boolean;
    /**
     * Tenant lifecycle status.
     */
    status: 'active' | 'archived';
    /**
     * The tenant's access mode (how it admits new members): open, allowlist-only, invitation-only, or approval-required.
     */
    access_mode: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';
    /**
     * The tenant's default role ID, if set.
     * @minLength 1
     */
    default_role_id: string | null;
    /**
     * Tenant creation timestamp.
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
     */
    created_at: string;
    /**
     * Tenant last-updated timestamp.
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
     */
    updated_at: string;
  }
}

export interface TenantCreateParams {
  /**
   * The signed-in end user's ID to attribute the write to that user, or null to attribute it to the service API key.
   * @minLength 1
   */
  actor_user_id: string | null;
  /**
   * Human-readable tenant name.
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /**
   * Initial tenant access mode. Defaults to `open`.
   */
  access_mode?: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';
  /**
   * Identifies exactly one IAM role by ID or stable key.
   */
  default_role?: TenantCreateParams.IamRoleIDReference | TenantCreateParams.IamRoleKeyReference;
  /**
   * The end user's ID (their OIDC subject) to grant the initial owner role. Required when using service authority (actor_user_id null); with user authority the signed-in user becomes the owner.
   * @minLength 1
   */
  owner_user_id?: string;
}

export namespace TenantCreateParams {
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

export interface TenantCreateResponse {
  /**
   * Created tenant ID.
   * @minLength 1
   */
  tenant_id: string;
  /**
   * The tenant default role ID.
   * @minLength 1
   */
  default_role_id: string | null;
  /**
   * The owner's tenant membership ID, created with the tenant.
   * @minLength 1
   */
  membership_id: string | null;
  /**
   * Whether this result replays a previous request with the same idempotency key.
   */
  idempotent: boolean;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: TenantCreateResponse.ConvexSourceData;
}

export namespace TenantCreateResponse {
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

export interface TenantGetResponse {
  /**
   * Tenant ID.
   * @minLength 1
   */
  tenant_id: string;
  /**
   * Human-readable tenant name.
   */
  name: string;
  /**
   * Whether this is the deployment's primary tenant.
   */
  is_primary_tenant: boolean;
  /**
   * Tenant lifecycle status.
   */
  status: 'active' | 'archived';
  /**
   * The tenant's access mode (how it admits new members): open, allowlist-only, invitation-only, or approval-required.
   */
  access_mode: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';
  /**
   * The tenant's default role ID, if set.
   * @minLength 1
   */
  default_role_id: string | null;
  /**
   * Tenant creation timestamp.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created_at: string;
  /**
   * Tenant last-updated timestamp.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  updated_at: string;
}

export interface TenantUpdateParams {
  /**
   * The signed-in end user's ID to attribute the write to that user, or null to attribute it to the service API key.
   * @minLength 1
   */
  actor_user_id: string | null;
  /**
   * New tenant name.
   * @minLength 1
   * @maxLength 255
   */
  name?: string;
  /**
   * Identifies exactly one IAM role by ID or stable key.
   */
  default_role?: TenantUpdateParams.IamRoleIDReference | TenantUpdateParams.IamRoleKeyReference;
  /**
   * New tenant access mode.
   */
  access_mode?: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';
}

export namespace TenantUpdateParams {
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

export interface TenantUpdateResponse {
  /**
   * Tenant changed by the operation.
   * @minLength 1
   */
  tenant_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: TenantUpdateResponse.ConvexSourceData;
}

export namespace TenantUpdateResponse {
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

export interface TenantArchiveParams {
  /**
   * The signed-in end user's ID to attribute the write to that user, or null to attribute it to the service API key.
   * @minLength 1
   */
  actor_user_id: string | null;
}

export interface TenantArchiveResponse {
  /**
   * Tenant changed by the operation.
   * @minLength 1
   */
  tenant_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: TenantArchiveResponse.ConvexSourceData;
}

export namespace TenantArchiveResponse {
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

export interface TenantUnarchiveParams {
  /**
   * The signed-in end user's ID to attribute the write to that user, or null to attribute it to the service API key.
   * @minLength 1
   */
  actor_user_id: string | null;
}

export interface TenantUnarchiveResponse {
  /**
   * Tenant changed by the operation.
   * @minLength 1
   */
  tenant_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: TenantUnarchiveResponse.ConvexSourceData;
}

export namespace TenantUnarchiveResponse {
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

export interface TenantEvaluateAccessParams {
  /**
   * The signed-in end user's ID (their OIDC subject), asserted by the trusted app backend.
   * @minLength 1
   */
  actor_user_id: string;
}

export interface TenantEvaluateAccessResponse {
  /**
   * Tenant evaluated for entry.
   * @minLength 1
   */
  tenant_id: string;
  /**
   * The end user's ID (their OIDC subject) that was evaluated.
   * @minLength 1
   */
  user_id: string;
  /**
   * Whether the user has an active membership in the tenant now.
   */
  allowed: boolean;
  /**
   * Entry outcome: the user's membership status after evaluation, or `denied` when the tenant's access mode or access rules reject them and no membership exists.
   */
  status: 'active' | 'pending_approval' | 'denied';
  /**
   * Why entry was denied, or null when the user has a membership.
   */
  reason: 'deny_rule' | 'not_allowlisted' | 'invite_only' | 'tenant_archived' | null;
  /**
   * The user's tenant membership ID, or null when entry was denied.
   * @minLength 1
   */
  membership_id: string | null;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: TenantEvaluateAccessResponse.ConvexSourceData;
}

export namespace TenantEvaluateAccessResponse {
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

export interface TenantCreateInvitationParams {
  /**
   * The signed-in end user's ID to attribute the write to that user, or null to attribute it to the service API key.
   * @minLength 1
   */
  actor_user_id: string | null;
  /**
   * Tenant-wide roles conferred when the invitation is accepted. Omit to confer the tenant's default role instead.
   * @maxItems 20
   */
  roles?: Array<
    TenantCreateInvitationParams.IamRoleIDReference | TenantCreateInvitationParams.IamRoleKeyReference
  >;
  /**
   * Optional signup constraint. Omit for an open link anyone can accept.
   */
  constraint?:
    | TenantCreateInvitationParams.IamInvitationEmailConstraint
    | TenantCreateInvitationParams.IamInvitationDomainConstraint;
  /**
   * Maximum number of users who may accept. Omit for the default: 1 for an email constraint, otherwise unlimited.
   * @minimum 1
   * @maximum 9007199254740991
   */
  max_uses?: number;
  /**
   * Optional email delivery, independent of the signup constraint. Sends the invitation to each recipient. Omit delivery entirely for a manual link you share yourself.
   */
  delivery?: TenantCreateInvitationParams.Delivery;
  /**
   * App-relative path the user is sent to after accepting (e.g. /welcome). Must start with a single '/'; composed with the app's own origin.
   * @minLength 1
   * @maxLength 2048
   */
  redirect_path?: string;
  /**
   * Invitation expiry timestamp. Omit for the default of 30 days from creation; pass null for a link that never expires.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  expires_at?: string | null;
}

export namespace TenantCreateInvitationParams {
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

  export interface IamInvitationEmailConstraint {
    /**
     * Only this exact email address may accept.
     */
    type: 'email';
    /**
     * The invited email address.
     * @format email
     * @maxLength 255
     * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
     */
    value: string;
  }

  export interface IamInvitationDomainConstraint {
    /**
     * Any address in this email domain may accept.
     */
    type: 'domain';
    /**
     * The allowed email domain, e.g. acme.com.
     * @minLength 1
     * @maxLength 255
     */
    value: string;
  }

  export interface Delivery {
    /**
     * Recipients the invitation email is sent to.
     * @minItems 1
     * @maxItems 50
     */
    to_emails: Array<string>;
    /**
     * Sender address the invitation is emailed from. Null or omitted uses the verified sender configured in Auth branding.
     * @format email
     * @maxLength 255
     * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
     */
    from_email?: string | null;
  }
}

export interface TenantCreateInvitationResponse {
  /**
   * Created invitation ID.
   * @minLength 1
   */
  invitation_id: string;
  /**
   * The full invitation link to share: the app's auth domain + /invite/{token}. Send this to the invitee.
   */
  link: string;
  /**
   * One-time secret invitation token embedded in the link. Stored only as a hash.
   */
  token: string;
  /**
   * Signup constraint, or null for an open link.
   */
  constraint:
    | TenantCreateInvitationResponse.IamInvitationEmailConstraint
    | TenantCreateInvitationResponse.IamInvitationDomainConstraint
    | null;
  /**
   * Effective signup cap, or null for unlimited.
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  max_uses: number | null;
  /**
   * Number of users who have accepted so far (0 at creation).
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  use_count: number;
  /**
   * Email delivery config, or null for a manual link.
   */
  delivery: TenantCreateInvitationResponse.Delivery | null;
  /**
   * The app-relative path the user is sent to after accepting, or null.
   */
  redirect_path: string | null;
  /**
   * Invitation expiry timestamp, or null if it never expires.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  expires_at: string | null;
}

export namespace TenantCreateInvitationResponse {
  export interface IamInvitationEmailConstraint {
    /**
     * Only this exact email address may accept.
     */
    type: 'email';
    /**
     * The invited email address.
     * @format email
     * @maxLength 255
     * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
     */
    value: string;
  }

  export interface IamInvitationDomainConstraint {
    /**
     * Any address in this email domain may accept.
     */
    type: 'domain';
    /**
     * The allowed email domain, e.g. acme.com.
     * @minLength 1
     * @maxLength 255
     */
    value: string;
  }

  export interface Delivery {
    /**
     * Recipients the invitation email is sent to.
     * @minItems 1
     * @maxItems 50
     */
    to_emails: Array<string>;
    /**
     * Sender address the invitation is emailed from. Null or omitted uses the verified sender configured in Auth branding.
     * @format email
     * @maxLength 255
     * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
     */
    from_email?: string | null;
  }
}

export interface TenantListRoleAssignmentsParams {
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
  /**
   * Return only this tenant membership's assignments.
   * @minLength 1
   */
  membership_id?: string;
  /**
   * Return only this group's assignments.
   * @minLength 1
   */
  group_id?: string;
  /**
   * Return only assignments of this role.
   * @minLength 1
   */
  role_id?: string;
}

export interface TenantListRoleAssignmentsResponse {
  /**
   * Role assignment page.
   */
  data: Array<TenantListRoleAssignmentsResponse.Data>;
  /**
   * Whether more records are available after this page.
   */
  has_more: boolean;
}

export namespace TenantListRoleAssignmentsResponse {
  export interface Data {
    /**
     * Tenant the assignment belongs to.
     * @minLength 1
     */
    tenant_id: string;
    /**
     * The assignment's subject and its prefixed assignment ID.
     */
    subject: Data.IamRoleAssignmentMemberSubject | Data.IamRoleAssignmentGroupSubject;
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

  export namespace Data {
    export interface IamRoleAssignmentMemberSubject {
      /**
       * A tenant member holds the role.
       */
      type: 'member';
      /**
       * The user's tenant membership ID holding the role.
       * @minLength 1
       */
      membership_id: string;
      /**
       * The member role assignment ID.
       * @minLength 1
       */
      member_role_assignment_id: string;
    }

    export interface IamRoleAssignmentGroupSubject {
      /**
       * A group holds the role.
       */
      type: 'group';
      /**
       * The group holding the role.
       * @minLength 1
       */
      group_id: string;
      /**
       * The group role assignment ID.
       * @minLength 1
       */
      group_role_assignment_id: string;
    }
  }
}

export interface TenantListResourceRoleAssignmentsParams {
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
  /**
   * Filter to one resource type by ID. Not combinable with resource_type_key.
   * @minLength 1
   */
  resource_type_id?: string;
  /**
   * Filter to one resource type by its catalog key (e.g. `app.project`). Not combinable with resource_type_id.
   * @minLength 1
   * @maxLength 255
   */
  resource_type_key?: string;
  /**
   * Filter to one exact resource's external ID. Pair with a resource type to find who has a role on that resource.
   * @minLength 1
   * @maxLength 255
   */
  external_id?: string;
  /**
   * Return only this tenant membership's assignments.
   * @minLength 1
   */
  membership_id?: string;
  /**
   * Return only this group's assignments.
   * @minLength 1
   */
  group_id?: string;
  /**
   * Return only assignments of this role.
   * @minLength 1
   */
  role_id?: string;
}

export interface TenantListResourceRoleAssignmentsResponse {
  /**
   * Resource role assignment page.
   */
  data: Array<TenantListResourceRoleAssignmentsResponse.Data>;
  /**
   * Whether more records are available after this page.
   */
  has_more: boolean;
}

export namespace TenantListResourceRoleAssignmentsResponse {
  export interface Data {
    /**
     * Tenant the assignment belongs to.
     * @minLength 1
     */
    tenant_id: string;
    /**
     * The assignment's subject and its prefixed assignment ID.
     */
    subject: Data.IamResourceRoleAssignmentMemberSubject | Data.IamResourceRoleAssignmentGroupSubject;
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

  export namespace Data {
    export interface IamResourceRoleAssignmentMemberSubject {
      /**
       * A tenant member holds the role on the resource.
       */
      type: 'member';
      /**
       * The user's tenant membership ID holding the role.
       * @minLength 1
       */
      membership_id: string;
      /**
       * The member resource role assignment ID.
       * @minLength 1
       */
      member_resource_role_assignment_id: string;
    }

    export interface IamResourceRoleAssignmentGroupSubject {
      /**
       * A group holds the role on the resource.
       */
      type: 'group';
      /**
       * The group holding the role.
       * @minLength 1
       */
      group_id: string;
      /**
       * The group resource role assignment ID.
       * @minLength 1
       */
      group_resource_role_assignment_id: string;
    }
  }
}
Tenants.Members = Members;
Tenants.Groups = Groups;
Tenants.Roles = Roles;
Tenants.AccessRules = AccessRules;
Tenants.AuditEvents = AuditEvents;
Tenants.Invitations = Invitations;

export declare namespace Tenants {
  export {
    type TenantListResponse as TenantListResponse,
    type TenantCreateResponse as TenantCreateResponse,
    type TenantGetResponse as TenantGetResponse,
    type TenantUpdateResponse as TenantUpdateResponse,
    type TenantArchiveResponse as TenantArchiveResponse,
    type TenantUnarchiveResponse as TenantUnarchiveResponse,
    type TenantEvaluateAccessResponse as TenantEvaluateAccessResponse,
    type TenantCreateInvitationResponse as TenantCreateInvitationResponse,
    type TenantListRoleAssignmentsResponse as TenantListRoleAssignmentsResponse,
    type TenantListResourceRoleAssignmentsResponse as TenantListResourceRoleAssignmentsResponse,
    type TenantListParams as TenantListParams,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantArchiveParams as TenantArchiveParams,
    type TenantUnarchiveParams as TenantUnarchiveParams,
    type TenantEvaluateAccessParams as TenantEvaluateAccessParams,
    type TenantCreateInvitationParams as TenantCreateInvitationParams,
    type TenantListRoleAssignmentsParams as TenantListRoleAssignmentsParams,
    type TenantListResourceRoleAssignmentsParams as TenantListResourceRoleAssignmentsParams,
  };

  export {
    Members as Members,
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

  export {
    Groups as Groups,
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
    Roles as Roles,
    type RoleCreateResponse as RoleCreateResponse,
    type RoleListResponse as RoleListResponse,
    type RoleGetResponse as RoleGetResponse,
    type RoleUpdateResponse as RoleUpdateResponse,
    type RoleDeleteResponse as RoleDeleteResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleListParams as RoleListParams,
    type RoleGetParams as RoleGetParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleDeleteParams as RoleDeleteParams,
  };

  export {
    AccessRules as AccessRules,
    type AccessRuleListResponse as AccessRuleListResponse,
    type AccessRuleCreateResponse as AccessRuleCreateResponse,
    type AccessRuleArchiveResponse as AccessRuleArchiveResponse,
    type AccessRuleListParams as AccessRuleListParams,
    type AccessRuleCreateParams as AccessRuleCreateParams,
    type AccessRuleArchiveParams as AccessRuleArchiveParams,
  };

  export {
    AuditEvents as AuditEvents,
    type AuditEventListResponse as AuditEventListResponse,
    type AuditEventListParams as AuditEventListParams,
  };

  export {
    Invitations as Invitations,
    type InvitationListResponse as InvitationListResponse,
    type InvitationRevokeResponse as InvitationRevokeResponse,
    type InvitationListParams as InvitationListParams,
    type InvitationRevokeParams as InvitationRevokeParams,
  };
}
