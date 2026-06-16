// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AdmissionRulesAPI from './admission-rules';
import {
  AdmissionRuleArchiveParams,
  AdmissionRuleArchiveResponse,
  AdmissionRuleUpsertParams,
  AdmissionRuleUpsertResponse,
  AdmissionRules,
} from './admission-rules';
import * as EntryModeAPI from './entry-mode';
import { EntryMode, EntryModeSetParams, EntryModeSetResponse } from './entry-mode';
import * as ExpiriesAPI from './expiries';
import { Expiries, ExpirySetParams, ExpirySetResponse } from './expiries';
import * as GroupsAPI from './groups';
import {
  GroupAddMemberParams,
  GroupAddMemberResponse,
  GroupArchiveParams,
  GroupArchiveResponse,
  GroupCreateParams,
  GroupCreateResponse,
  GroupListParams,
  GroupListResponse,
  GroupRemoveMemberParams,
  GroupRemoveMemberResponse,
  GroupRenameParams,
  GroupRenameResponse,
  Groups,
} from './groups';
import * as InvitationsAPI from './invitations';
import {
  InvitationAcceptParams,
  InvitationAcceptResponse,
  InvitationCreateParams,
  InvitationCreateResourceParams,
  InvitationCreateResourceResponse,
  InvitationCreateResponse,
  InvitationListResourceParams,
  InvitationListResourceResponse,
  InvitationRevokeParams,
  InvitationRevokeResponse,
  Invitations,
} from './invitations';
import * as MembersAPI from './members';
import {
  MemberAddParams,
  MemberAddResponse,
  MemberApproveParams,
  MemberApproveResponse,
  MemberRemoveParams,
  MemberRemoveResponse,
  MemberSetStatusParams,
  MemberSetStatusResponse,
  Members,
} from './members';
import * as ResourceGrantsAPI from './resource-grants';
import {
  ResourceGrantCreateParams,
  ResourceGrantCreateResponse,
  ResourceGrantReplaceParams,
  ResourceGrantReplaceResponse,
  ResourceGrantRevokeParams,
  ResourceGrantRevokeResponse,
  ResourceGrants,
} from './resource-grants';
import * as ResourceRulesAPI from './resource-rules';
import {
  ResourceRuleReplaceParams,
  ResourceRuleReplaceResponse,
  ResourceRuleSetParams,
  ResourceRuleSetResponse,
  ResourceRules,
} from './resource-rules';
import * as RoleOverridesAPI from './role-overrides';
import {
  RoleOverrideGetParams,
  RoleOverrideGetResponse,
  RoleOverrideSetParams,
  RoleOverrideSetResponse,
  RoleOverrides,
} from './role-overrides';
import * as RolesAPI from './roles';
import {
  RoleAssignParams,
  RoleAssignResponse,
  RoleCreateOrgCustomParams,
  RoleCreateOrgCustomResponse,
  RoleListGrantableParams,
  RoleListGrantableResponse,
  RoleRemoveParams,
  RoleRemoveResponse,
  RoleReplaceParams,
  RoleReplaceResponse,
  RoleUpdatePermissionsParams,
  RoleUpdatePermissionsResponse,
  Roles,
} from './roles';
import * as ScopesAPI from './scopes';
import {
  ScopeArchiveParams,
  ScopeArchiveResponse,
  ScopeCreateParams,
  ScopeCreateResponse,
  ScopeSetDefaultRoleParams,
  ScopeSetDefaultRoleResponse,
  Scopes,
} from './scopes';
import * as UserExceptionsAPI from './user-exceptions';
import {
  UserExceptionGetParams,
  UserExceptionGetResponse,
  UserExceptionSetParams,
  UserExceptionSetResponse,
  UserExceptions,
} from './user-exceptions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Manage Access Control for a website: scopes (organizations), invitations,
 * roles and role assignments, permission grants, resource rules, grant
 * expiries, and per-user permission exceptions. Requires an API key with the
 * access_control_admin scope.
 */
export class AccessControl extends APIResource {
  scopes: ScopesAPI.Scopes = new ScopesAPI.Scopes(this._client);
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  userExceptions: UserExceptionsAPI.UserExceptions = new UserExceptionsAPI.UserExceptions(this._client);
  resourceGrants: ResourceGrantsAPI.ResourceGrants = new ResourceGrantsAPI.ResourceGrants(this._client);
  resourceRules: ResourceRulesAPI.ResourceRules = new ResourceRulesAPI.ResourceRules(this._client);
  expiries: ExpiriesAPI.Expiries = new ExpiriesAPI.Expiries(this._client);
  roleOverrides: RoleOverridesAPI.RoleOverrides = new RoleOverridesAPI.RoleOverrides(this._client);
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  admissionRules: AdmissionRulesAPI.AdmissionRules = new AdmissionRulesAPI.AdmissionRules(this._client);
  entryMode: EntryModeAPI.EntryMode = new EntryModeAPI.EntryMode(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);

  /**
   * Evaluates account entry for the signed-in app user and ensures their principal
   * in the API key's deployment.
   */
  entry(body: AccessControlEntryParams, options?: RequestOptions): APIPromise<AccessControlEntryResponse> {
    return this._client.post('/v1/access-control/entry', { body, ...options });
  }
}

/**
 * Admission decision and principal state for a deployment entry request.
 */
export interface AccessControlEntryResponse {
  /**
   * Whether the signed-in user may enter this deployment.
   */
  allowed: boolean;

  /**
   * Whether entry created or changed the user's principal state.
   */
  changed: boolean;

  /**
   * Stable reason code explaining the admission decision.
   */
  reason: string;

  /**
   * Current Access Control source version for this deployment.
   */
  state_version: number;

  /**
   * The user's principal ID once a deployment principal exists.
   */
  principal_id?: string;

  /**
   * Current deployment membership status for the user.
   */
  status?: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';
}

export interface AccessControlEntryParams {
  /**
   * Signed Hercules Auth ID token for the app user entering the deployment.
   */
  id_token: string;

  /**
   * Optional explicit actor mode. Entry supports app_user only; service is rejected.
   */
  actor_mode?: 'service' | 'app_user';
}

AccessControl.Scopes = Scopes;
AccessControl.Invitations = Invitations;
AccessControl.Roles = Roles;
AccessControl.UserExceptions = UserExceptions;
AccessControl.ResourceGrants = ResourceGrants;
AccessControl.ResourceRules = ResourceRules;
AccessControl.Expiries = Expiries;
AccessControl.RoleOverrides = RoleOverrides;
AccessControl.Members = Members;
AccessControl.AdmissionRules = AdmissionRules;
AccessControl.EntryMode = EntryMode;
AccessControl.Groups = Groups;

export declare namespace AccessControl {
  export {
    type AccessControlEntryResponse as AccessControlEntryResponse,
    type AccessControlEntryParams as AccessControlEntryParams,
  };

  export {
    Scopes as Scopes,
    type ScopeCreateResponse as ScopeCreateResponse,
    type ScopeArchiveResponse as ScopeArchiveResponse,
    type ScopeSetDefaultRoleResponse as ScopeSetDefaultRoleResponse,
    type ScopeCreateParams as ScopeCreateParams,
    type ScopeArchiveParams as ScopeArchiveParams,
    type ScopeSetDefaultRoleParams as ScopeSetDefaultRoleParams,
  };

  export {
    Invitations as Invitations,
    type InvitationCreateResponse as InvitationCreateResponse,
    type InvitationAcceptResponse as InvitationAcceptResponse,
    type InvitationCreateResourceResponse as InvitationCreateResourceResponse,
    type InvitationListResourceResponse as InvitationListResourceResponse,
    type InvitationRevokeResponse as InvitationRevokeResponse,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationAcceptParams as InvitationAcceptParams,
    type InvitationCreateResourceParams as InvitationCreateResourceParams,
    type InvitationListResourceParams as InvitationListResourceParams,
    type InvitationRevokeParams as InvitationRevokeParams,
  };

  export {
    Roles as Roles,
    type RoleAssignResponse as RoleAssignResponse,
    type RoleCreateOrgCustomResponse as RoleCreateOrgCustomResponse,
    type RoleListGrantableResponse as RoleListGrantableResponse,
    type RoleRemoveResponse as RoleRemoveResponse,
    type RoleReplaceResponse as RoleReplaceResponse,
    type RoleUpdatePermissionsResponse as RoleUpdatePermissionsResponse,
    type RoleAssignParams as RoleAssignParams,
    type RoleCreateOrgCustomParams as RoleCreateOrgCustomParams,
    type RoleListGrantableParams as RoleListGrantableParams,
    type RoleRemoveParams as RoleRemoveParams,
    type RoleReplaceParams as RoleReplaceParams,
    type RoleUpdatePermissionsParams as RoleUpdatePermissionsParams,
  };

  export {
    UserExceptions as UserExceptions,
    type UserExceptionGetResponse as UserExceptionGetResponse,
    type UserExceptionSetResponse as UserExceptionSetResponse,
    type UserExceptionGetParams as UserExceptionGetParams,
    type UserExceptionSetParams as UserExceptionSetParams,
  };

  export {
    ResourceGrants as ResourceGrants,
    type ResourceGrantCreateResponse as ResourceGrantCreateResponse,
    type ResourceGrantReplaceResponse as ResourceGrantReplaceResponse,
    type ResourceGrantRevokeResponse as ResourceGrantRevokeResponse,
    type ResourceGrantCreateParams as ResourceGrantCreateParams,
    type ResourceGrantReplaceParams as ResourceGrantReplaceParams,
    type ResourceGrantRevokeParams as ResourceGrantRevokeParams,
  };

  export {
    ResourceRules as ResourceRules,
    type ResourceRuleReplaceResponse as ResourceRuleReplaceResponse,
    type ResourceRuleSetResponse as ResourceRuleSetResponse,
    type ResourceRuleReplaceParams as ResourceRuleReplaceParams,
    type ResourceRuleSetParams as ResourceRuleSetParams,
  };

  export {
    Expiries as Expiries,
    type ExpirySetResponse as ExpirySetResponse,
    type ExpirySetParams as ExpirySetParams,
  };

  export {
    RoleOverrides as RoleOverrides,
    type RoleOverrideGetResponse as RoleOverrideGetResponse,
    type RoleOverrideSetResponse as RoleOverrideSetResponse,
    type RoleOverrideGetParams as RoleOverrideGetParams,
    type RoleOverrideSetParams as RoleOverrideSetParams,
  };

  export {
    Members as Members,
    type MemberAddResponse as MemberAddResponse,
    type MemberApproveResponse as MemberApproveResponse,
    type MemberRemoveResponse as MemberRemoveResponse,
    type MemberSetStatusResponse as MemberSetStatusResponse,
    type MemberAddParams as MemberAddParams,
    type MemberApproveParams as MemberApproveParams,
    type MemberRemoveParams as MemberRemoveParams,
    type MemberSetStatusParams as MemberSetStatusParams,
  };

  export {
    AdmissionRules as AdmissionRules,
    type AdmissionRuleArchiveResponse as AdmissionRuleArchiveResponse,
    type AdmissionRuleUpsertResponse as AdmissionRuleUpsertResponse,
    type AdmissionRuleArchiveParams as AdmissionRuleArchiveParams,
    type AdmissionRuleUpsertParams as AdmissionRuleUpsertParams,
  };

  export {
    EntryMode as EntryMode,
    type EntryModeSetResponse as EntryModeSetResponse,
    type EntryModeSetParams as EntryModeSetParams,
  };

  export {
    Groups as Groups,
    type GroupCreateResponse as GroupCreateResponse,
    type GroupListResponse as GroupListResponse,
    type GroupAddMemberResponse as GroupAddMemberResponse,
    type GroupArchiveResponse as GroupArchiveResponse,
    type GroupRemoveMemberResponse as GroupRemoveMemberResponse,
    type GroupRenameResponse as GroupRenameResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupListParams as GroupListParams,
    type GroupAddMemberParams as GroupAddMemberParams,
    type GroupArchiveParams as GroupArchiveParams,
    type GroupRemoveMemberParams as GroupRemoveMemberParams,
    type GroupRenameParams as GroupRenameParams,
  };
}
