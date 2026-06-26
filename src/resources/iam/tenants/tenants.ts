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
  AccessRuleUnarchiveParams,
  AccessRuleUnarchiveResponse,
  AccessRuleUpdateParams,
  AccessRuleUpdateResponse,
  AccessRules,
} from './access-rules';
import * as AuditEventsAPI from './audit-events';
import { AuditEventListParams, AuditEventListResponse, AuditEvents } from './audit-events';
import * as GrantsAPI from './grants';
import {
  GrantDeleteParams,
  GrantDeleteResponse,
  GrantUpdateParams,
  GrantUpdateResponse,
  Grants,
} from './grants';
import * as InvitationsAPI from './invitations';
import {
  InvitationListParams,
  InvitationListResponse,
  InvitationRevokeParams,
  InvitationRevokeResponse,
  Invitations,
} from './invitations';
import * as GroupsAPI from './groups/groups';
import {
  GroupArchiveParams,
  GroupArchiveResponse,
  GroupCreateParams,
  GroupCreateResponse,
  GroupUnarchiveParams,
  GroupUnarchiveResponse,
  GroupUpdateParams,
  GroupUpdateResponse,
  Groups,
} from './groups/groups';
import * as ResourcesAPI from './resources/resources';
import {
  ResourceAccessGrantingRolesParams,
  ResourceAccessGrantingRolesResponse,
  ResourceCreateInvitationParams,
  ResourceCreateInvitationResponse,
  Resources,
} from './resources/resources';
import * as RolesAPI from './roles/roles';
import {
  RoleArchiveParams,
  RoleArchiveResponse,
  RoleCreateParams,
  RoleCreateResponse,
  RoleUnarchiveParams,
  RoleUnarchiveResponse,
  RoleUpdateParams,
  RoleUpdateResponse,
  Roles,
} from './roles/roles';
import * as UsersAPI from './users/users';
import {
  UserCreateParams,
  UserCreateResponse,
  UserRemoveParams,
  UserRemoveResponse,
  UserUpdateParams,
  UserUpdateResponse,
  Users,
} from './users/users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tenants extends APIResource {
  grants: GrantsAPI.Grants = new GrantsAPI.Grants(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  accessRules: AccessRulesAPI.AccessRules = new AccessRulesAPI.AccessRules(this._client);
  auditEvents: AuditEventsAPI.AuditEvents = new AuditEventsAPI.AuditEvents(this._client);
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);

  /**
   * Creates a tenant and assigns its initial Owner. The signed-in user becomes the
   * Owner unless trusted server code specifies another user.
   */
  create(body: TenantCreateParams, options?: RequestOptions): APIPromise<TenantCreateResponse> {
    return this._client.post('/v1/iam/tenants', { body, ...options });
  }

  /**
   * Updates a tenant's name, default role, or access mode. Access mode changes
   * immediately re-evaluate users whose access is controlled by tenant policy.
   */
  update(
    tenantID: string,
    body: TenantUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TenantUpdateResponse> {
    return this._client.patch(path`/v1/iam/tenants/${tenantID}`, { body, ...options });
  }

  /**
   * Lists active tenants available to manage by default. Signed-in users see only
   * tenants they directly own; trusted server code can see all tenants. Use
   * `status=archived` or `status=all` to include archived tenants.
   */
  list(
    query: TenantListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TenantListResponse> {
    return this._client.get('/v1/iam/tenants', { query, ...options });
  }

  /**
   * Archives a non-root tenant and blocks its access without deleting its users,
   * groups, roles, or grants.
   */
  archive(
    tenantID: string,
    body: TenantArchiveParams,
    options?: RequestOptions,
  ): APIPromise<TenantArchiveResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/archive`, { body, ...options });
  }

  /**
   * Invites a recipient to join the tenant with the selected roles. If no roles are
   * provided, the tenant's current default role is saved on the invitation and
   * granted when the invitation is accepted.
   */
  createInvitation(
    tenantID: string,
    body: TenantCreateInvitationParams,
    options?: RequestOptions,
  ): APIPromise<TenantCreateInvitationResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/invitations`, { body, ...options });
  }

  /**
   * Evaluates whether the signed-in user may enter the tenant under its access mode
   * and access rules. It creates or updates the user and assigns the default role
   * when access is first granted.
   */
  evaluateAccess(
    tenantID: string,
    body: TenantEvaluateAccessParams,
    options?: RequestOptions,
  ): APIPromise<TenantEvaluateAccessResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/evaluate-access`, { body, ...options });
  }

  /**
   * Returns a tenant and its current settings, including when the tenant is
   * archived. Signed-in users can retrieve only tenants they directly own; trusted
   * server code can retrieve any tenant.
   */
  get(
    tenantID: string,
    query: TenantGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TenantGetResponse> {
    return this._client.get(path`/v1/iam/tenants/${tenantID}`, { query, ...options });
  }

  /**
   * Lists active roles the signed-in user can assign at the tenant level. Use this
   * operation to populate role pickers for users, groups, and tenant invitations;
   * the write operation checks access again.
   */
  grantableRoles(
    tenantID: string,
    query: TenantGrantableRolesParams,
    options?: RequestOptions,
  ): APIPromise<TenantGrantableRolesResponse> {
    return this._client.get(path`/v1/iam/tenants/${tenantID}/grantable-roles`, { query, ...options });
  }

  /**
   * Restores an archived tenant and re-enables access through its existing users,
   * groups, roles, and grants.
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
   * Confirms that the tenant was created.
   */
  created: true;

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
     * IAM source version after the operation. Before relying on Convex IAM mirror
     * reads, wait for each returned projection to reach at least this version.
     */
    version: number;
  }
}

/**
 * Updated IAM tenant settings.
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

  /**
   * Current access mode when the admission policy was updated.
   */
  access_mode?: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

  /**
   * Current default role ID when the default role was updated.
   */
  default_role_id?: string;

  /**
   * Current tenant name when the tenant was renamed.
   */
  name?: string;

  /**
   * Previous values for fields changed by the update.
   */
  previous?: TenantUpdateResponse.Previous;
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
     * IAM source version after the operation. Before relying on Convex IAM mirror
     * reads, wait for each returned projection to reach at least this version.
     */
    version: number;
  }

  /**
   * Previous values for fields changed by the update.
   */
  export interface Previous {
    /**
     * Previous tenant access mode.
     */
    access_mode?: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

    /**
     * Hercules IAM identifier.
     */
    default_role_id?: string | null;

    /**
     * Previous tenant name.
     */
    name?: string;
  }
}

/**
 * Paginated authoritative IAM tenant records.
 */
export interface TenantListResponse {
  /**
   * Tenant page.
   */
  data: Array<TenantListResponse.Data>;

  /**
   * Whether more tenants are available after this page.
   */
  has_more: boolean;
}

export namespace TenantListResponse {
  /**
   * Authoritative IAM tenant record.
   */
  export interface Data {
    /**
     * Admission policy for the tenant: open access, allowlist-only access,
     * invitation-only access, or approval-required access.
     */
    access_mode: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

    /**
     * Tenant creation timestamp.
     */
    created_at: string;

    /**
     * Whether this is the deployment's root tenant.
     */
    is_root: boolean;

    /**
     * Public tenant lifecycle status.
     */
    lifecycle_status: 'active' | 'archived';

    /**
     * Human-readable tenant name.
     */
    name: string;

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
     * IAM source version after the operation. Before relying on Convex IAM mirror
     * reads, wait for each returned projection to reach at least this version.
     */
    version: number;
  }
}

/**
 * Created tenant invitation.
 */
export interface TenantCreateInvitationResponse {
  /**
   * One-time secret invitation token.
   */
  token: string;

  /**
   * URL the invited user can open to accept.
   */
  accept_url: string;

  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: TenantCreateInvitationResponse.ConvexSourceData;

  /**
   * Invitation expiry timestamp.
   */
  expires_at: string;

  /**
   * Role grants created on acceptance.
   */
  grants: Array<TenantCreateInvitationResponse.Grant>;

  /**
   * Created tenant invitation ID.
   */
  invitation_id: string;

  /**
   * Recipient of an invitation.
   */
  recipient: TenantCreateInvitationResponse.Recipient;

  /**
   * Tenant receiving the invited user.
   */
  tenant_id: string;

  /**
   * Identifies a tenant invitation.
   */
  type: 'tenant';
}

export namespace TenantCreateInvitationResponse {
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
     * IAM source version after the operation. Before relying on Convex IAM mirror
     * reads, wait for each returned projection to reach at least this version.
     */
    version: number;
  }

  /**
   * Role grant created when the invitation is accepted.
   */
  export interface Grant {
    /**
     * Pending role conferral ID.
     */
    conferral_id: string;

    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at: string | null;

    /**
     * IAM role granted on acceptance.
     */
    role_id: string;

    /**
     * Identifies a tenant role grant.
     */
    type: 'tenant_role';
  }

  /**
   * Recipient of an invitation.
   */
  export interface Recipient {
    /**
     * Identifies an email recipient.
     */
    type: 'email';

    /**
     * Email address of the invited user.
     */
    value: string;
  }
}

/**
 * Tenant access decision for one user.
 */
export interface TenantEvaluateAccessResponse {
  /**
   * Whether the user may access the tenant now.
   */
  allowed: boolean;

  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: TenantEvaluateAccessResponse.ConvexSourceData;

  /**
   * Stable explanation for the tenant access decision. Use `allowed` and `status`
   * for application control flow; use this value to explain the outcome.
   *
   * - `user_active` - The user already has active access to the tenant.
   * - `access_mode_open` - The tenant's open access mode admitted the user.
   * - `access_rule_allowed` - An active email or domain access rule admitted the
   *   user.
   * - `access_rule_email_denied` - An active access rule denied the user's email
   *   address.
   * - `access_rule_domain_denied` - An active access rule denied the user's email
   *   domain.
   * - `access_rule_not_matched` - No active allow rule matched the user's verified
   *   email address or domain.
   * - `access_mode_approval_required` - The tenant requires administrator approval
   *   before the user becomes active.
   * - `access_mode_invitation_required` - The tenant requires an invitation or
   *   explicit admission before access.
   * - `access_rule_email_required` - Email or domain access rules cannot admit a
   *   phone-only user.
   * - `user_blocked` - The tenant's admission policy blocked the user.
   * - `user_suspended` - An administrator suspended the user.
   * - `user_removed` - The user was removed from the tenant.
   */
  reason:
    | 'user_active'
    | 'access_mode_open'
    | 'access_rule_allowed'
    | 'access_rule_email_denied'
    | 'access_rule_domain_denied'
    | 'access_rule_not_matched'
    | 'access_mode_approval_required'
    | 'access_mode_invitation_required'
    | 'access_rule_email_required'
    | 'user_blocked'
    | 'user_suspended'
    | 'user_removed';

  /**
   * Tenant evaluated for access.
   */
  tenant_id: string;

  /**
   * User ID evaluated for access.
   */
  user_id: string;

  /**
   * Current tenant user status when a user record exists.
   */
  status?: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';
}

export namespace TenantEvaluateAccessResponse {
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
     * IAM source version after the operation. Before relying on Convex IAM mirror
     * reads, wait for each returned projection to reach at least this version.
     */
    version: number;
  }
}

/**
 * Authoritative IAM tenant record.
 */
export interface TenantGetResponse {
  /**
   * Admission policy for the tenant: open access, allowlist-only access,
   * invitation-only access, or approval-required access.
   */
  access_mode: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

  /**
   * Tenant creation timestamp.
   */
  created_at: string;

  /**
   * Whether this is the deployment's root tenant.
   */
  is_root: boolean;

  /**
   * Public tenant lifecycle status.
   */
  lifecycle_status: 'active' | 'archived';

  /**
   * Human-readable tenant name.
   */
  name: string;

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
 * Grantable IAM roles for one tenant.
 */
export interface TenantGrantableRolesResponse {
  /**
   * Roles the supplied authority may grant at the tenant level.
   */
  roles: Array<TenantGrantableRolesResponse.Role>;

  /**
   * Tenant used for the grantability decision.
   */
  tenant_id: string;
}

export namespace TenantGrantableRolesResponse {
  /**
   * One role the supplied authority may grant for the requested tenant or resource.
   */
  export interface Role {
    /**
     * Grantable IAM role ID.
     */
    role_id: string;

    /**
     * Stable IAM role key.
     */
    role_key: string;

    /**
     * Whether the role is system or custom.
     */
    role_kind: 'system' | 'custom';

    /**
     * Human-readable IAM role name.
     */
    role_name: string;

    /**
     * Whether the role is reusable across tenants.
     */
    shared: boolean;
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
     * IAM source version after the operation. Before relying on Convex IAM mirror
     * reads, wait for each returned projection to reach at least this version.
     */
    version: number;
  }
}

export type TenantCreateParams =
  | TenantCreateParams.IamTenantCreateAsUserRequest
  | TenantCreateParams.IamTenantCreateAsServiceRequest;

export declare namespace TenantCreateParams {
  export interface IamTenantCreateAsUserRequest {
    /**
     * The signed-in actor's Convex identity tokenIdentifier, passed unchanged by the
     * trusted app backend.
     */
    actor_token_identifier: string;

    /**
     * Human-readable tenant name.
     */
    name: string;

    /**
     * Initial tenant admission policy. Defaults to `allowlisted_only`.
     */
    access_mode?: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

    /**
     * Role receiving the overrides.
     */
    default_role?:
      | IamTenantCreateAsUserRequest.IamRoleIDReference
      | IamTenantCreateAsUserRequest.IamRoleKeyReference;
  }

  export namespace IamTenantCreateAsUserRequest {
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

  export interface IamTenantCreateAsServiceRequest {
    /**
     * Must be null to use service authority.
     */
    actor_token_identifier: null;

    /**
     * Human-readable tenant name.
     */
    name: string;

    /**
     * Target user ID granted the built-in Owner role when creating the tenant with
     * service authority. Do not pass a token identifier.
     */
    owner_user_id: string;

    /**
     * Initial tenant admission policy. Defaults to `allowlisted_only`.
     */
    access_mode?: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

    /**
     * Role receiving the overrides.
     */
    default_role?:
      | IamTenantCreateAsServiceRequest.IamRoleIDReference
      | IamTenantCreateAsServiceRequest.IamRoleKeyReference;
  }

  export namespace IamTenantCreateAsServiceRequest {
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
}

export interface TenantUpdateParams {
  /**
   * The signed-in actor's Convex identity tokenIdentifier, passed unchanged by the
   * trusted app backend.
   */
  actor_token_identifier: string | null;

  /**
   * Admission policy used when a user requests access to this tenant.
   */
  access_mode?: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

  /**
   * Role receiving the overrides.
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
   * The signed-in actor's Convex identity tokenIdentifier, passed unchanged by the
   * trusted app backend.
   */
  actor_token_identifier?: string | null;

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
   * Filter by tenant lifecycle status. Defaults to `active`; use `archived` or `all`
   * to discover archived tenants.
   */
  status?: 'active' | 'archived' | 'all';
}

export interface TenantArchiveParams {
  /**
   * The signed-in actor's Convex identity tokenIdentifier, passed unchanged by the
   * trusted app backend.
   */
  actor_token_identifier: string | null;
}

export interface TenantCreateInvitationParams {
  /**
   * The signed-in actor's Convex identity tokenIdentifier, passed unchanged by the
   * trusted app backend.
   */
  actor_token_identifier: string | null;

  /**
   * Recipient of an invitation.
   */
  recipient: TenantCreateInvitationParams.Recipient;

  /**
   * Invitation expiry timestamp. Defaults to 14 days after creation.
   */
  expires_at?: string;

  /**
   * Role grants created on acceptance. The permanent tenant default is used when
   * omitted.
   */
  grants?: Array<TenantCreateInvitationParams.Grant>;
}

export namespace TenantCreateInvitationParams {
  /**
   * Recipient of an invitation.
   */
  export interface Recipient {
    /**
     * Identifies an email recipient.
     */
    type: 'email';

    /**
     * Email address of the invited user.
     */
    value: string;
  }

  /**
   * One direct role grant.
   */
  export interface Grant {
    /**
     * Role receiving the overrides.
     */
    role: Grant.IamRoleIDReference | Grant.IamRoleKeyReference;

    /**
     * Grant expiry. Omit or pass null for a permanent grant.
     */
    expires_at?: string | null;
  }

  export namespace Grant {
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
}

export interface TenantEvaluateAccessParams {
  /**
   * The signed-in actor's Convex identity tokenIdentifier, passed unchanged by the
   * trusted app backend.
   */
  actor_token_identifier: string;
}

export interface TenantGetParams {
  /**
   * The signed-in actor's Convex identity tokenIdentifier, passed unchanged by the
   * trusted app backend.
   */
  actor_token_identifier?: string | null;
}

export interface TenantGrantableRolesParams {
  /**
   * The signed-in actor's Convex identity tokenIdentifier, passed unchanged by the
   * trusted app backend.
   */
  actor_token_identifier: string;

  /**
   * Recipient kind for the proposed grant. Omit or use all to return roles valid for
   * at least one recipient kind.
   */
  subject_type?: 'user' | 'group' | 'all';
}

export interface TenantUnarchiveParams {
  /**
   * The signed-in actor's Convex identity tokenIdentifier, passed unchanged by the
   * trusted app backend.
   */
  actor_token_identifier: string | null;
}

Tenants.Grants = Grants;
Tenants.Users = Users;
Tenants.Groups = Groups;
Tenants.Roles = Roles;
Tenants.AccessRules = AccessRules;
Tenants.AuditEvents = AuditEvents;
Tenants.Invitations = Invitations;
Tenants.Resources = Resources;

export declare namespace Tenants {
  export {
    type TenantCreateResponse as TenantCreateResponse,
    type TenantUpdateResponse as TenantUpdateResponse,
    type TenantListResponse as TenantListResponse,
    type TenantArchiveResponse as TenantArchiveResponse,
    type TenantCreateInvitationResponse as TenantCreateInvitationResponse,
    type TenantEvaluateAccessResponse as TenantEvaluateAccessResponse,
    type TenantGetResponse as TenantGetResponse,
    type TenantGrantableRolesResponse as TenantGrantableRolesResponse,
    type TenantUnarchiveResponse as TenantUnarchiveResponse,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantListParams as TenantListParams,
    type TenantArchiveParams as TenantArchiveParams,
    type TenantCreateInvitationParams as TenantCreateInvitationParams,
    type TenantEvaluateAccessParams as TenantEvaluateAccessParams,
    type TenantGetParams as TenantGetParams,
    type TenantGrantableRolesParams as TenantGrantableRolesParams,
    type TenantUnarchiveParams as TenantUnarchiveParams,
  };

  export {
    Grants as Grants,
    type GrantUpdateResponse as GrantUpdateResponse,
    type GrantDeleteResponse as GrantDeleteResponse,
    type GrantUpdateParams as GrantUpdateParams,
    type GrantDeleteParams as GrantDeleteParams,
  };

  export {
    Users as Users,
    type UserCreateResponse as UserCreateResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserRemoveResponse as UserRemoveResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserRemoveParams as UserRemoveParams,
  };

  export {
    Groups as Groups,
    type GroupCreateResponse as GroupCreateResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupArchiveResponse as GroupArchiveResponse,
    type GroupUnarchiveResponse as GroupUnarchiveResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupArchiveParams as GroupArchiveParams,
    type GroupUnarchiveParams as GroupUnarchiveParams,
  };

  export {
    Roles as Roles,
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
    AccessRules as AccessRules,
    type AccessRuleCreateResponse as AccessRuleCreateResponse,
    type AccessRuleUpdateResponse as AccessRuleUpdateResponse,
    type AccessRuleListResponse as AccessRuleListResponse,
    type AccessRuleArchiveResponse as AccessRuleArchiveResponse,
    type AccessRuleUnarchiveResponse as AccessRuleUnarchiveResponse,
    type AccessRuleCreateParams as AccessRuleCreateParams,
    type AccessRuleUpdateParams as AccessRuleUpdateParams,
    type AccessRuleListParams as AccessRuleListParams,
    type AccessRuleArchiveParams as AccessRuleArchiveParams,
    type AccessRuleUnarchiveParams as AccessRuleUnarchiveParams,
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

  export {
    Resources as Resources,
    type ResourceAccessGrantingRolesResponse as ResourceAccessGrantingRolesResponse,
    type ResourceCreateInvitationResponse as ResourceCreateInvitationResponse,
    type ResourceAccessGrantingRolesParams as ResourceAccessGrantingRolesParams,
    type ResourceCreateInvitationParams as ResourceCreateInvitationParams,
  };
}
