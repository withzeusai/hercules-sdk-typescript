// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccessRulesAPI from './access-rules';
import {
  AccessRuleArchiveParams,
  AccessRuleArchiveResponse,
  AccessRuleCreateParams,
  AccessRuleCreateResponse,
  AccessRuleListParams,
  AccessRuleListResponse,
  AccessRules,
} from './access-rules';
import * as AuditEventsAPI from './audit-events';
import { AuditEventListParams, AuditEventListResponse, AuditEvents } from './audit-events';
import * as InvitationsAPI from './invitations';
import {
  InvitationListParams,
  InvitationListResponse,
  InvitationRevokeParams,
  InvitationRevokeResponse,
  Invitations,
} from './invitations';
import * as MembersAPI from './members';
import {
  MemberAssignResourceRoleParams,
  MemberAssignResourceRoleResponse,
  MemberAssignRoleParams,
  MemberAssignRoleResponse,
  MemberCreateParams,
  MemberCreateResponse,
  MemberGetParams,
  MemberGetResponse,
  MemberListParams,
  MemberListResourceRoleAssignmentsParams,
  MemberListResourceRoleAssignmentsResponse,
  MemberListResponse,
  MemberListRoleAssignmentsParams,
  MemberListRoleAssignmentsResponse,
  MemberRemoveParams,
  MemberRemoveResponse,
  MemberUnassignResourceRoleParams,
  MemberUnassignResourceRoleResponse,
  MemberUnassignRoleParams,
  MemberUnassignRoleResponse,
  MemberUpdateStatusParams,
  MemberUpdateStatusResponse,
  Members,
} from './members';
import * as RolesAPI from './roles';
import {
  RoleCreateParams,
  RoleCreateResponse,
  RoleDeleteParams,
  RoleDeleteResponse,
  RoleGetParams,
  RoleGetResponse,
  RoleListParams,
  RoleListResponse,
  RoleUpdateParams,
  RoleUpdateResponse,
  Roles,
} from './roles';
import * as GroupsAPI from './groups/groups';
import {
  GroupArchiveParams,
  GroupArchiveResponse,
  GroupAssignResourceRoleParams,
  GroupAssignResourceRoleResponse,
  GroupAssignRoleParams,
  GroupAssignRoleResponse,
  GroupCreateParams,
  GroupCreateResponse,
  GroupDeleteParams,
  GroupDeleteResponse,
  GroupGetParams,
  GroupGetResponse,
  GroupListParams,
  GroupListResourceRoleAssignmentsParams,
  GroupListResourceRoleAssignmentsResponse,
  GroupListResponse,
  GroupListRoleAssignmentsParams,
  GroupListRoleAssignmentsResponse,
  GroupUnarchiveParams,
  GroupUnarchiveResponse,
  GroupUnassignResourceRoleParams,
  GroupUnassignResourceRoleResponse,
  GroupUnassignRoleParams,
  GroupUnassignRoleResponse,
  GroupUpdateParams,
  GroupUpdateResponse,
  Groups,
} from './groups/groups';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tenants extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  accessRules: AccessRulesAPI.AccessRules = new AccessRulesAPI.AccessRules(this._client);
  auditEvents: AuditEventsAPI.AuditEvents = new AuditEventsAPI.AuditEvents(this._client);
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);

  /**
   * Creates a tenant and assigns its initial owner. The signed-in user becomes the
   * owner unless trusted server code specifies another user. The initial owner is
   * granted the seeded owner role. The default role (for later members) defaults to
   * the seeded member role and must not be an app-scoped role.
   */
  create(body: TenantCreateParams, options?: RequestOptions): APIPromise<TenantCreateResponse> {
    return this._client.post('/v1/iam/tenants', { body, ...options });
  }

  /**
   * Updates a tenant's name, default role, or admission policy.
   */
  update(
    tenantID: string,
    body: TenantUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TenantUpdateResponse> {
    return this._client.patch(path`/v1/iam/tenants/${tenantID}`, { body, ...options });
  }

  /**
   * Lists the deployment's IAM tenants, primary tenant first.
   */
  list(
    query: TenantListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TenantListResponse> {
    return this._client.get('/v1/iam/tenants', { query, ...options });
  }

  /**
   * Archives a non-primary tenant and blocks its access without deleting its data.
   */
  archive(
    tenantID: string,
    body: TenantArchiveParams,
    options?: RequestOptions,
  ): APIPromise<TenantArchiveResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/archive`, { body, ...options });
  }

  /**
   * Creates an invitation that confers tenant-wide roles when accepted.
   */
  createInvitation(
    tenantID: string,
    body: TenantCreateInvitationParams,
    options?: RequestOptions,
  ): APIPromise<TenantCreateInvitationResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/invitations`, { body, ...options });
  }

  /**
   * Returns one IAM tenant by ID. Pass `primary` for the deployment's primary
   * tenant.
   */
  get(tenantID: string, options?: RequestOptions): APIPromise<TenantGetResponse> {
    return this._client.get(path`/v1/iam/tenants/${tenantID}`, options);
  }

  /**
   * Lists resource role assignments in a tenant, newest first. Filter by resource
   * type and external ID to find who has a role on one exact resource, or by member,
   * group, or role.
   */
  listResourceRoleAssignments(
    tenantID: string,
    query: TenantListResourceRoleAssignmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TenantListResourceRoleAssignmentsResponse> {
    return this._client.get(path`/v1/iam/tenants/${tenantID}/resource-role-assignments`, {
      query,
      ...options,
    });
  }

  /**
   * Lists tenant-wide role assignments in a tenant, newest first. Filter by member,
   * group, or role.
   */
  listRoleAssignments(
    tenantID: string,
    query: TenantListRoleAssignmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TenantListRoleAssignmentsResponse> {
    return this._client.get(path`/v1/iam/tenants/${tenantID}/role-assignments`, { query, ...options });
  }

  /**
   * Restores an archived tenant and re-enables access through its existing data.
   */
  unarchive(
    tenantID: string,
    body: TenantUnarchiveParams,
    options?: RequestOptions,
  ): APIPromise<TenantUnarchiveResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/unarchive`, { body, ...options });
  }
}

/**
 * Created IAM tenant.
 */
export interface TenantCreateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: TenantCreateResponse.ConvexSourceData;

  /**
   * Hercules IAM identifier.
   */
  default_role_id: string | null;

  /**
   * Whether this result replays a previous request with the same idempotency key.
   */
  idempotent: boolean;

  /**
   * Hercules IAM identifier.
   */
  membership_id: string | null;

  /**
   * Created tenant ID.
   */
  tenant_id: string;
}

export namespace TenantCreateResponse {
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
 * Result of an IAM tenant mutation.
 */
export interface TenantUpdateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: TenantUpdateResponse.ConvexSourceData;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

export namespace TenantUpdateResponse {
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
 * Paginated IAM tenants.
 */
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
  /**
   * One IAM tenant.
   */
  export interface Data {
    /**
     * The tenant's admission policy.
     */
    account_entry_mode: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

    /**
     * Tenant creation timestamp.
     */
    created_at: string;

    /**
     * Hercules IAM identifier.
     */
    default_role_id: string | null;

    /**
     * Whether this is the deployment's primary tenant.
     */
    is_primary_tenant: boolean;

    /**
     * Human-readable tenant name.
     */
    name: string;

    /**
     * Tenant lifecycle status.
     */
    status: 'active' | 'disabled';

    /**
     * Tenant ID.
     */
    tenant_id: string;

    /**
     * Tenant last-updated timestamp.
     */
    updated_at: string;
  }
}

/**
 * Result of an IAM tenant mutation.
 */
export interface TenantArchiveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: TenantArchiveResponse.ConvexSourceData;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

export namespace TenantArchiveResponse {
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
 * Created invitation link.
 */
export interface TenantCreateInvitationResponse {
  /**
   * One-time secret invitation token embedded in the link. Stored only as a hash.
   */
  token: string;

  /**
   * Optional signup constraint. Omit for an open link anyone can accept.
   */
  constraint:
    | TenantCreateInvitationResponse.IamInvitationEmailConstraint
    | TenantCreateInvitationResponse.IamInvitationDomainConstraint
    | null;

  /**
   * Optional email delivery, independent of the signup constraint. Sends the
   * invitation from from_email to each recipient. Omit for a manual link you share
   * yourself.
   */
  delivery: TenantCreateInvitationResponse.Delivery | null;

  /**
   * Invitation expiry timestamp, or null if it never expires.
   */
  expires_at: string | null;

  /**
   * Created invitation ID.
   */
  invitation_id: string;

  /**
   * The full invitation link to share: the app's auth domain + /invite/{token}. Send
   * this to the invitee.
   */
  link: string;

  /**
   * Effective signup cap, or null for unlimited.
   */
  max_uses: number | null;

  /**
   * The app-relative path the user is sent to after accepting, or null.
   */
  redirect_path: string | null;

  /**
   * Number of users who have accepted so far (0 at creation).
   */
  use_count: number;
}

export namespace TenantCreateInvitationResponse {
  export interface IamInvitationEmailConstraint {
    /**
     * Only this exact email address may accept.
     */
    type: 'email';

    /**
     * The invited email address.
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
     */
    value: string;
  }

  /**
   * Optional email delivery, independent of the signup constraint. Sends the
   * invitation from from_email to each recipient. Omit for a manual link you share
   * yourself.
   */
  export interface Delivery {
    /**
     * Sender address the invitation is emailed from.
     */
    from_email: string;

    /**
     * Recipients the invitation email is sent to.
     */
    to_emails: Array<string>;
  }
}

/**
 * One IAM tenant.
 */
export interface TenantGetResponse {
  /**
   * The tenant's admission policy.
   */
  account_entry_mode: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

  /**
   * Tenant creation timestamp.
   */
  created_at: string;

  /**
   * Hercules IAM identifier.
   */
  default_role_id: string | null;

  /**
   * Whether this is the deployment's primary tenant.
   */
  is_primary_tenant: boolean;

  /**
   * Human-readable tenant name.
   */
  name: string;

  /**
   * Tenant lifecycle status.
   */
  status: 'active' | 'disabled';

  /**
   * Tenant ID.
   */
  tenant_id: string;

  /**
   * Tenant last-updated timestamp.
   */
  updated_at: string;
}

/**
 * Paginated resource role assignments.
 */
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
  /**
   * One resource role assignment.
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
     * The resource type the assignment targets.
     */
    resource_type_id: string;

    /**
     * The assigned role ID.
     */
    role_id: string;

    /**
     * The assignment's subject and its prefixed assignment ID.
     */
    subject: Data.IamResourceRoleAssignmentMemberSubject | Data.IamResourceRoleAssignmentGroupSubject;

    /**
     * Tenant the assignment belongs to.
     */
    tenant_id: string;
  }

  export namespace Data {
    export interface IamResourceRoleAssignmentMemberSubject {
      /**
       * The member resource role assignment ID.
       */
      member_resource_role_assignment_id: string;

      /**
       * The user's tenant membership ID holding the role.
       */
      membership_id: string;

      /**
       * A tenant member holds the role on the resource.
       */
      type: 'member';
    }

    export interface IamResourceRoleAssignmentGroupSubject {
      /**
       * The group holding the role.
       */
      group_id: string;

      /**
       * The group resource role assignment ID.
       */
      group_resource_role_assignment_id: string;

      /**
       * A group holds the role on the resource.
       */
      type: 'group';
    }
  }
}

/**
 * Paginated tenant-wide role assignments.
 */
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
  /**
   * One tenant-wide role assignment.
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
     * The assigned role ID.
     */
    role_id: string;

    /**
     * The assignment's subject and its prefixed assignment ID.
     */
    subject: Data.IamRoleAssignmentMemberSubject | Data.IamRoleAssignmentGroupSubject;

    /**
     * Tenant the assignment belongs to.
     */
    tenant_id: string;
  }

  export namespace Data {
    export interface IamRoleAssignmentMemberSubject {
      /**
       * The member role assignment ID.
       */
      member_role_assignment_id: string;

      /**
       * The user's tenant membership ID holding the role.
       */
      membership_id: string;

      /**
       * A tenant member holds the role.
       */
      type: 'member';
    }

    export interface IamRoleAssignmentGroupSubject {
      /**
       * The group holding the role.
       */
      group_id: string;

      /**
       * The group role assignment ID.
       */
      group_role_assignment_id: string;

      /**
       * A group holds the role.
       */
      type: 'group';
    }
  }
}

/**
 * Result of an IAM tenant mutation.
 */
export interface TenantUnarchiveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: TenantUnarchiveResponse.ConvexSourceData;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

export namespace TenantUnarchiveResponse {
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

export interface TenantCreateParams {
  /**
   * The signed-in end user's Hercules Auth tokenIdentifier, passed unchanged by the
   * trusted app backend. Used for identity and audit only.
   */
  actor_token_identifier: string | null;

  /**
   * Human-readable tenant name.
   */
  name: string;

  /**
   * Initial tenant admission policy. Defaults to `open`.
   */
  access_mode?: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

  /**
   * Identifies exactly one IAM role by ID or stable key.
   */
  default_role?: TenantCreateParams.IamRoleIDReference | TenantCreateParams.IamRoleKeyReference;

  /**
   * The end user's ID (their OIDC subject) to grant the initial owner role. Required
   * when using service authority (actor_token_identifier null); with user authority
   * the signed-in user becomes the owner.
   */
  owner_user_id?: string;
}

export namespace TenantCreateParams {
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

export interface TenantUpdateParams {
  /**
   * The signed-in end user's Hercules Auth tokenIdentifier, passed unchanged by the
   * trusted app backend. Used for identity and audit only.
   */
  actor_token_identifier: string | null;

  /**
   * New tenant admission policy.
   */
  access_mode?: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

  /**
   * Identifies exactly one IAM role by ID or stable key.
   */
  default_role?: TenantUpdateParams.IamRoleIDReference | TenantUpdateParams.IamRoleKeyReference;

  /**
   * New tenant name.
   */
  name?: string;
}

export namespace TenantUpdateParams {
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

export interface TenantListParams {
  /**
   * Maximum number of records to return. Defaults to 50.
   */
  limit?: number;

  /**
   * Cursor for forward pagination. Pass the ID of the last item from the previous
   * page.
   */
  starting_after?: string;

  /**
   * Filter by tenant status.
   */
  status?: 'active' | 'disabled';
}

export interface TenantArchiveParams {
  /**
   * The signed-in end user's Hercules Auth tokenIdentifier, passed unchanged by the
   * trusted app backend. Used for identity and audit only.
   */
  actor_token_identifier: string | null;
}

export interface TenantCreateInvitationParams {
  /**
   * The signed-in end user's Hercules Auth tokenIdentifier, passed unchanged by the
   * trusted app backend. Used for identity and audit only.
   */
  actor_token_identifier: string | null;

  /**
   * Optional signup constraint. Omit for an open link anyone can accept.
   */
  constraint?:
    | TenantCreateInvitationParams.IamInvitationEmailConstraint
    | TenantCreateInvitationParams.IamInvitationDomainConstraint;

  /**
   * Optional email delivery, independent of the signup constraint. Sends the
   * invitation from from_email to each recipient. Omit for a manual link you share
   * yourself.
   */
  delivery?: TenantCreateInvitationParams.Delivery;

  /**
   * Invitation expiry timestamp. Omit for the default of 30 days from creation; pass
   * null for a link that never expires.
   */
  expires_at?: string | null;

  /**
   * Maximum number of users who may accept. Omit for the default: 1 for an email
   * constraint, otherwise unlimited.
   */
  max_uses?: number;

  /**
   * App-relative path the user is sent to after accepting (e.g. /welcome). Must
   * start with a single '/'; composed with the app's own origin.
   */
  redirect_path?: string;

  /**
   * Tenant-wide roles conferred when the invitation is accepted. Omit to confer the
   * tenant's default role instead.
   */
  roles?: Array<
    TenantCreateInvitationParams.IamRoleIDReference | TenantCreateInvitationParams.IamRoleKeyReference
  >;
}

export namespace TenantCreateInvitationParams {
  export interface IamInvitationEmailConstraint {
    /**
     * Only this exact email address may accept.
     */
    type: 'email';

    /**
     * The invited email address.
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
     */
    value: string;
  }

  /**
   * Optional email delivery, independent of the signup constraint. Sends the
   * invitation from from_email to each recipient. Omit for a manual link you share
   * yourself.
   */
  export interface Delivery {
    /**
     * Sender address the invitation is emailed from.
     */
    from_email: string;

    /**
     * Recipients the invitation email is sent to.
     */
    to_emails: Array<string>;
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

export interface TenantListResourceRoleAssignmentsParams {
  /**
   * Filter to one exact resource's external ID. Pair with a resource type to find
   * who has a role on that resource.
   */
  external_id?: string;

  /**
   * Return only this group's assignments.
   */
  group_id?: string;

  /**
   * Maximum number of records to return. Defaults to 50.
   */
  limit?: number;

  /**
   * Return only this tenant membership's assignments.
   */
  membership_id?: string;

  /**
   * Filter to one resource type by ID.
   */
  resource_type_id?: string;

  /**
   * Return only assignments of this role.
   */
  role_id?: string;

  /**
   * Cursor for forward pagination. Pass the ID of the last item from the previous
   * page.
   */
  starting_after?: string;
}

export interface TenantListRoleAssignmentsParams {
  /**
   * Return only this group's assignments.
   */
  group_id?: string;

  /**
   * Maximum number of records to return. Defaults to 50.
   */
  limit?: number;

  /**
   * Return only this tenant membership's assignments.
   */
  membership_id?: string;

  /**
   * Return only assignments of this role.
   */
  role_id?: string;

  /**
   * Cursor for forward pagination. Pass the ID of the last item from the previous
   * page.
   */
  starting_after?: string;
}

export interface TenantUnarchiveParams {
  /**
   * The signed-in end user's Hercules Auth tokenIdentifier, passed unchanged by the
   * trusted app backend. Used for identity and audit only.
   */
  actor_token_identifier: string | null;
}

Tenants.Members = Members;
Tenants.Groups = Groups;
Tenants.Roles = Roles;
Tenants.AccessRules = AccessRules;
Tenants.AuditEvents = AuditEvents;
Tenants.Invitations = Invitations;

export declare namespace Tenants {
  export {
    type TenantCreateResponse as TenantCreateResponse,
    type TenantUpdateResponse as TenantUpdateResponse,
    type TenantListResponse as TenantListResponse,
    type TenantArchiveResponse as TenantArchiveResponse,
    type TenantCreateInvitationResponse as TenantCreateInvitationResponse,
    type TenantGetResponse as TenantGetResponse,
    type TenantListResourceRoleAssignmentsResponse as TenantListResourceRoleAssignmentsResponse,
    type TenantListRoleAssignmentsResponse as TenantListRoleAssignmentsResponse,
    type TenantUnarchiveResponse as TenantUnarchiveResponse,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantListParams as TenantListParams,
    type TenantArchiveParams as TenantArchiveParams,
    type TenantCreateInvitationParams as TenantCreateInvitationParams,
    type TenantListResourceRoleAssignmentsParams as TenantListResourceRoleAssignmentsParams,
    type TenantListRoleAssignmentsParams as TenantListRoleAssignmentsParams,
    type TenantUnarchiveParams as TenantUnarchiveParams,
  };

  export {
    Members as Members,
    type MemberCreateResponse as MemberCreateResponse,
    type MemberListResponse as MemberListResponse,
    type MemberAssignResourceRoleResponse as MemberAssignResourceRoleResponse,
    type MemberAssignRoleResponse as MemberAssignRoleResponse,
    type MemberGetResponse as MemberGetResponse,
    type MemberListResourceRoleAssignmentsResponse as MemberListResourceRoleAssignmentsResponse,
    type MemberListRoleAssignmentsResponse as MemberListRoleAssignmentsResponse,
    type MemberRemoveResponse as MemberRemoveResponse,
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
    type MemberUnassignResourceRoleParams as MemberUnassignResourceRoleParams,
    type MemberUnassignRoleParams as MemberUnassignRoleParams,
    type MemberUpdateStatusParams as MemberUpdateStatusParams,
  };

  export {
    Groups as Groups,
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
    Roles as Roles,
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

  export {
    AccessRules as AccessRules,
    type AccessRuleCreateResponse as AccessRuleCreateResponse,
    type AccessRuleListResponse as AccessRuleListResponse,
    type AccessRuleArchiveResponse as AccessRuleArchiveResponse,
    type AccessRuleCreateParams as AccessRuleCreateParams,
    type AccessRuleListParams as AccessRuleListParams,
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
