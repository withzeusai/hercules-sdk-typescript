// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExpiriesAPI from './expiries';
import { Expiries, ExpirySetParams, ExpirySetResponse } from './expiries';
import * as InvitationsAPI from './invitations';
import {
  InvitationAcceptParams,
  InvitationAcceptResponse,
  InvitationCreateParams,
  InvitationCreateResponse,
  InvitationRevokeParams,
  InvitationRevokeResponse,
  Invitations,
} from './invitations';
import * as ResourceGrantsAPI from './resource-grants';
import {
  ResourceGrantCreateParams,
  ResourceGrantCreateResponse,
  ResourceGrantRevokeParams,
  ResourceGrantRevokeResponse,
  ResourceGrants,
} from './resource-grants';
import * as ResourceRulesAPI from './resource-rules';
import { ResourceRuleSetParams, ResourceRuleSetResponse, ResourceRules } from './resource-rules';
import * as RoleOverridesAPI from './role-overrides';
import { RoleOverrideSetParams, RoleOverrideSetResponse, RoleOverrides } from './role-overrides';
import * as RolesAPI from './roles';
import {
  RoleAssignParams,
  RoleAssignResponse,
  RoleCreateOrgCustomParams,
  RoleCreateOrgCustomResponse,
  RoleRemoveParams,
  RoleRemoveResponse,
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
import { UserExceptionSetParams, UserExceptionSetResponse, UserExceptions } from './user-exceptions';

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
}

AccessControl.Scopes = Scopes;
AccessControl.Invitations = Invitations;
AccessControl.Roles = Roles;
AccessControl.UserExceptions = UserExceptions;
AccessControl.ResourceGrants = ResourceGrants;
AccessControl.ResourceRules = ResourceRules;
AccessControl.Expiries = Expiries;
AccessControl.RoleOverrides = RoleOverrides;

export declare namespace AccessControl {
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
    type InvitationRevokeResponse as InvitationRevokeResponse,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationAcceptParams as InvitationAcceptParams,
    type InvitationRevokeParams as InvitationRevokeParams,
  };

  export {
    Roles as Roles,
    type RoleAssignResponse as RoleAssignResponse,
    type RoleCreateOrgCustomResponse as RoleCreateOrgCustomResponse,
    type RoleRemoveResponse as RoleRemoveResponse,
    type RoleUpdatePermissionsResponse as RoleUpdatePermissionsResponse,
    type RoleAssignParams as RoleAssignParams,
    type RoleCreateOrgCustomParams as RoleCreateOrgCustomParams,
    type RoleRemoveParams as RoleRemoveParams,
    type RoleUpdatePermissionsParams as RoleUpdatePermissionsParams,
  };

  export {
    UserExceptions as UserExceptions,
    type UserExceptionSetResponse as UserExceptionSetResponse,
    type UserExceptionSetParams as UserExceptionSetParams,
  };

  export {
    ResourceGrants as ResourceGrants,
    type ResourceGrantCreateResponse as ResourceGrantCreateResponse,
    type ResourceGrantRevokeResponse as ResourceGrantRevokeResponse,
    type ResourceGrantCreateParams as ResourceGrantCreateParams,
    type ResourceGrantRevokeParams as ResourceGrantRevokeParams,
  };

  export {
    ResourceRules as ResourceRules,
    type ResourceRuleSetResponse as ResourceRuleSetResponse,
    type ResourceRuleSetParams as ResourceRuleSetParams,
  };

  export {
    Expiries as Expiries,
    type ExpirySetResponse as ExpirySetResponse,
    type ExpirySetParams as ExpirySetParams,
  };

  export {
    RoleOverrides as RoleOverrides,
    type RoleOverrideSetResponse as RoleOverrideSetResponse,
    type RoleOverrideSetParams as RoleOverrideSetParams,
  };
}
