// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AdmissionRulesAPI from './admission-rules';
import {
  AdmissionRuleArchiveParams,
  AdmissionRuleArchiveResponse,
  AdmissionRuleCreateParams,
  AdmissionRuleCreateResponse,
  AdmissionRuleListParams,
  AdmissionRuleListResponse,
  AdmissionRuleUnarchiveParams,
  AdmissionRuleUnarchiveResponse,
  AdmissionRuleUpdateParams,
  AdmissionRuleUpdateResponse,
  AdmissionRules,
} from './admission-rules';
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
  InvitationCreateResourceParams,
  InvitationCreateResourceResponse,
  InvitationCreateTenantParams,
  InvitationCreateTenantResponse,
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
  admissionRules: AdmissionRulesAPI.AdmissionRules = new AdmissionRulesAPI.AdmissionRules(this._client);
  auditEvents: AuditEventsAPI.AuditEvents = new AuditEventsAPI.AuditEvents(this._client);
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);

  /**
   * Creates an IAM tenant in the API key's deployment.
   */
  create(body: TenantCreateParams, options?: RequestOptions): APIPromise<TenantCreateResponse> {
    return this._client.post('/v1/iam/tenants', { body, ...options });
  }

  /**
   * Updates the name, default role, or access mode for an IAM tenant.
   */
  update(
    tenantID: string,
    body: TenantUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TenantUpdateResponse> {
    return this._client.patch(path`/v1/iam/tenants/${tenantID}`, { body, ...options });
  }

  /**
   * Archives a non-default IAM tenant.
   */
  archive(
    tenantID: string,
    params: TenantArchiveParams,
    options?: RequestOptions,
  ): APIPromise<TenantArchiveResponse> {
    const { user_token_identifier } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenantID}`, {
      query: { user_token_identifier },
      ...options,
    });
  }

  /**
   * Evaluates tenant admission for the signed-in user.
   */
  evaluateAccess(
    tenantID: string,
    body: TenantEvaluateAccessParams,
    options?: RequestOptions,
  ): APIPromise<TenantEvaluateAccessResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/evaluate-access`, { body, ...options });
  }

  /**
   * Lists roles the actor may grant to a user or group at the tenant level.
   */
  grantableRoles(
    tenantID: string,
    query: TenantGrantableRolesParams,
    options?: RequestOptions,
  ): APIPromise<TenantGrantableRolesResponse> {
    return this._client.get(path`/v1/iam/tenants/${tenantID}/grantable-roles`, { query, ...options });
  }

  /**
   * Unarchives an IAM tenant.
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
   * Confirms that the tenant was created.
   */
  created: true;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Created tenant ID.
   */
  tenant_id: string;
}

/**
 * Updated IAM tenant settings.
 */
export interface TenantUpdateResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

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
 * Result of an IAM tenant mutation.
 */
export interface TenantArchiveResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
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
   * Whether access evaluation changed IAM state.
   */
  changed: boolean;

  /**
   * Machine-readable reason for the tenant access decision.
   */
  reason:
    | 'baseline_missing_open_fallback'
    | 'evaluation_error_open_fallback'
    | 'existing_active'
    | 'open_allowed'
    | 'allowlist_allowed'
    | 'denylisted_email'
    | 'denylisted_domain'
    | 'not_allowlisted'
    | 'approval_required'
    | 'invite_required'
    | 'phone_not_supported_for_allowlist'
    | 'principal_blocked'
    | 'principal_suspended'
    | 'principal_removed'
    | 'unsupported_access_mode';

  /**
   * IAM state version used for the access decision.
   */
  state_version: number;

  /**
   * Tenant evaluated for access.
   */
  tenant_id: string;

  /**
   * Hercules Auth user ID evaluated for access.
   */
  user_id: string;

  /**
   * Current tenant user status when a user record exists.
   */
  status?: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';
}

/**
 * Grantable IAM roles for one tenant or exact resource.
 */
export interface TenantGrantableRolesResponse {
  /**
   * Roles the actor may grant.
   */
  roles: Array<TenantGrantableRolesResponse.Role>;

  /**
   * Tenant used for the grantability decision.
   */
  tenant_id: string;
}

export namespace TenantGrantableRolesResponse {
  /**
   * One role the actor may grant for the requested tenant or resource.
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
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

export type TenantCreateParams =
  | TenantCreateParams.IamTenantCreateAsUserRequest
  | TenantCreateParams.IamTenantCreateAsServiceRequest;

export declare namespace TenantCreateParams {
  export interface IamTenantCreateAsUserRequest {
    /**
     * Human-readable tenant name.
     */
    name: string;

    /**
     * Convex identity tokenIdentifier required for user authority.
     */
    user_token_identifier: string;

    /**
     * Initial tenant admission policy.
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
     * Human-readable tenant name.
     */
    name: string;

    /**
     * Hercules Auth user ID bootstrapped as the tenant's initial Owner.
     */
    owner_user_id: string;

    /**
     * Must be null to use service authority.
     */
    user_token_identifier: null;

    /**
     * Initial tenant admission policy.
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
   * Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;

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

export interface TenantArchiveParams {
  /**
   * Null or empty query value selects service authority.
   */
  user_token_identifier: '' | null;
}

export interface TenantEvaluateAccessParams {
  /**
   * Convex identity tokenIdentifier required for user authority.
   */
  user_token_identifier: string;
}

export interface TenantGrantableRolesParams {
  /**
   * Recipient kind for the proposed grant.
   */
  subject_type: 'user' | 'group';

  /**
   * Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;
}

export interface TenantUnarchiveParams {
  /**
   * Must be null to use service authority.
   */
  user_token_identifier: null;
}

Tenants.Grants = Grants;
Tenants.Users = Users;
Tenants.Groups = Groups;
Tenants.Roles = Roles;
Tenants.AdmissionRules = AdmissionRules;
Tenants.AuditEvents = AuditEvents;
Tenants.Invitations = Invitations;
Tenants.Resources = Resources;

export declare namespace Tenants {
  export {
    type TenantCreateResponse as TenantCreateResponse,
    type TenantUpdateResponse as TenantUpdateResponse,
    type TenantArchiveResponse as TenantArchiveResponse,
    type TenantEvaluateAccessResponse as TenantEvaluateAccessResponse,
    type TenantGrantableRolesResponse as TenantGrantableRolesResponse,
    type TenantUnarchiveResponse as TenantUnarchiveResponse,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantArchiveParams as TenantArchiveParams,
    type TenantEvaluateAccessParams as TenantEvaluateAccessParams,
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
    AdmissionRules as AdmissionRules,
    type AdmissionRuleCreateResponse as AdmissionRuleCreateResponse,
    type AdmissionRuleUpdateResponse as AdmissionRuleUpdateResponse,
    type AdmissionRuleListResponse as AdmissionRuleListResponse,
    type AdmissionRuleArchiveResponse as AdmissionRuleArchiveResponse,
    type AdmissionRuleUnarchiveResponse as AdmissionRuleUnarchiveResponse,
    type AdmissionRuleCreateParams as AdmissionRuleCreateParams,
    type AdmissionRuleUpdateParams as AdmissionRuleUpdateParams,
    type AdmissionRuleListParams as AdmissionRuleListParams,
    type AdmissionRuleArchiveParams as AdmissionRuleArchiveParams,
    type AdmissionRuleUnarchiveParams as AdmissionRuleUnarchiveParams,
  };

  export {
    AuditEvents as AuditEvents,
    type AuditEventListResponse as AuditEventListResponse,
    type AuditEventListParams as AuditEventListParams,
  };

  export {
    Invitations as Invitations,
    type InvitationListResponse as InvitationListResponse,
    type InvitationCreateResourceResponse as InvitationCreateResourceResponse,
    type InvitationCreateTenantResponse as InvitationCreateTenantResponse,
    type InvitationRevokeResponse as InvitationRevokeResponse,
    type InvitationListParams as InvitationListParams,
    type InvitationCreateResourceParams as InvitationCreateResourceParams,
    type InvitationCreateTenantParams as InvitationCreateTenantParams,
    type InvitationRevokeParams as InvitationRevokeParams,
  };

  export {
    Resources as Resources,
    type ResourceAccessGrantingRolesResponse as ResourceAccessGrantingRolesResponse,
    type ResourceAccessGrantingRolesParams as ResourceAccessGrantingRolesParams,
  };
}
