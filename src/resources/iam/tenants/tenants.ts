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
  InvitationCreateParams,
  InvitationCreateResponse,
  InvitationListParams,
  InvitationListResponse,
  InvitationRevokeParams,
  InvitationRevokeResponse,
  Invitations,
} from './invitations';
import * as RolesAPI from './roles';
import {
  RoleArchiveParams,
  RoleArchiveResponse,
  RoleCreateParams,
  RoleCreateResponse,
  RoleEvaluateGrantabilityParams,
  RoleEvaluateGrantabilityResponse,
  RoleListPermissionOverridesParams,
  RoleListPermissionOverridesResponse,
  RoleReplacePermissionOverridesParams,
  RoleReplacePermissionOverridesResponse,
  RoleUpdateParams,
  RoleUpdateResponse,
  Roles,
} from './roles';
import * as UsersAPI from './users';
import {
  UserCreateParams,
  UserCreateResponse,
  UserListPermissionOverridesParams,
  UserListPermissionOverridesResponse,
  UserRemoveParams,
  UserRemoveResponse,
  UserReplacePermissionOverridesParams,
  UserReplacePermissionOverridesResponse,
  UserReplaceRolesParams,
  UserReplaceRolesResponse,
  UserUpdateParams,
  UserUpdateResponse,
  Users,
} from './users';
import * as GroupsAPI from './groups/groups';
import {
  GroupArchiveParams,
  GroupArchiveResponse,
  GroupCreateParams,
  GroupCreateResponse,
  GroupListPermissionOverridesParams,
  GroupListPermissionOverridesResponse,
  GroupReplacePermissionOverridesParams,
  GroupReplacePermissionOverridesResponse,
  GroupReplaceRolesParams,
  GroupReplaceRolesResponse,
  GroupUpdateParams,
  GroupUpdateResponse,
  Groups,
} from './groups/groups';
import * as ResourcesAPI from './resources/resources';
import { Resources } from './resources/resources';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
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
  create(params: TenantCreateParams, options?: RequestOptions): APIPromise<TenantCreateResponse> {
    const { 'X-Hercules-IAM-Actor': xHerculesIamActor, ...body } = params;
    return this._client.post('/v1/iam/tenants', {
      body,
      ...options,
      headers: buildHeaders([{ 'X-Hercules-IAM-Actor': xHerculesIamActor.toString() }, options?.headers]),
    });
  }

  /**
   * Updates the name, default role, or entry mode for an IAM tenant.
   */
  update(
    tenantID: string,
    params: TenantUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TenantUpdateResponse> {
    const {
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenantID}`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          'X-Hercules-IAM-Actor': xHerculesIamActor.toString(),
          ...(xHerculesUserIDToken != null ?
            { 'X-Hercules-User-ID-Token': xHerculesUserIDToken }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Archives a non-default IAM tenant.
   */
  archive(
    tenantID: string,
    params: TenantArchiveParams,
    options?: RequestOptions,
  ): APIPromise<TenantArchiveResponse> {
    const { 'X-Hercules-IAM-Actor': xHerculesIamActor } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenantID}`, {
      ...options,
      headers: buildHeaders([{ 'X-Hercules-IAM-Actor': xHerculesIamActor.toString() }, options?.headers]),
    });
  }

  /**
   * Evaluates tenant admission for the signed-in user.
   */
  evaluateEntry(
    tenantID: string,
    params: TenantEvaluateEntryParams,
    options?: RequestOptions,
  ): APIPromise<TenantEvaluateEntryResponse> {
    const {
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.post(path`/v1/iam/tenants/${tenantID}/entry`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          'X-Hercules-IAM-Actor': xHerculesIamActor.toString(),
          'X-Hercules-User-ID-Token': xHerculesUserIDToken,
        },
        options?.headers,
      ]),
    });
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
   * Current default role ID when the default role was updated.
   */
  default_role_id?: string;

  /**
   * Current entry mode when the entry policy was updated.
   */
  entry_mode?: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

  /**
   * Current tenant name when the tenant was renamed.
   */
  name?: string;

  /**
   * Hercules IAM identifier.
   */
  previous_default_role_id?: string | null;

  /**
   * Previous entry mode when the entry policy was updated.
   */
  previous_entry_mode?: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

  /**
   * Previous tenant name when the tenant was renamed.
   */
  previous_name?: string;
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
 * Tenant entry decision for one user.
 */
export interface TenantEvaluateEntryResponse {
  /**
   * Whether the user may enter the tenant now.
   */
  allowed: boolean;

  /**
   * Whether entry evaluation changed IAM state.
   */
  changed: boolean;

  /**
   * Machine-readable reason for the tenant entry decision.
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
    | 'unsupported_entry_mode';

  /**
   * IAM state version used for the entry decision.
   */
  state_version: number;

  /**
   * Tenant evaluated for entry.
   */
  tenant_id: string;

  /**
   * Hercules Auth user ID evaluated for entry.
   */
  user_id: string;

  /**
   * Current tenant user status when a principal exists.
   */
  status?: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';
}

export interface TenantCreateParams {
  /**
   * Body param: Human-readable tenant name.
   */
  name: string;

  /**
   * Body param: Hercules Auth user ID bootstrapped as the tenant's initial Owner.
   */
  owner_user_id: string;

  /**
   * Header param: Must be service for this trusted backend operation.
   */
  'X-Hercules-IAM-Actor': 'service';

  /**
   * Body param: Reusable role assigned automatically to newly admitted users.
   */
  default_role?: TenantCreateParams.ID | TenantCreateParams.Key;

  /**
   * Body param: Initial tenant admission policy.
   */
  entry_mode?: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';
}

export namespace TenantCreateParams {
  export interface ID {
    /**
     * Existing IAM role ID.
     */
    id: string;
  }

  export interface Key {
    /**
     * Stable role key from the deployment's IAM catalog.
     */
    key: string;
  }
}

export type TenantUpdateParams =
  | TenantUpdateParams.Variant0
  | TenantUpdateParams.Variant1
  | TenantUpdateParams.Variant2;

export declare namespace TenantUpdateParams {
  export interface Variant0 {
    /**
     * Body param: New tenant name.
     */
    name: string;

    /**
     * Header param: Authority used for this operation: service or user.
     */
    'X-Hercules-IAM-Actor': 'service' | 'user';

    /**
     * Body param: Role assigned automatically to users admitted to this tenant.
     */
    default_role?: Variant0.ID | Variant0.Key;

    /**
     * Body param: Admission policy used when a user attempts to enter this tenant.
     */
    entry_mode?: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

    /**
     * Header param: Signed Hercules Auth ID token. Required for user and omitted for
     * service.
     */
    'X-Hercules-User-ID-Token'?: string;
  }

  export namespace Variant0 {
    export interface ID {
      /**
       * Existing IAM role ID.
       */
      id: string;
    }

    export interface Key {
      /**
       * Stable role key from the deployment's IAM catalog.
       */
      key: string;
    }
  }

  export interface Variant1 {
    /**
     * Body param: Role assigned automatically to users admitted to this tenant.
     */
    default_role: Variant1.ID | Variant1.Key;

    /**
     * Header param: Authority used for this operation: service or user.
     */
    'X-Hercules-IAM-Actor': 'service' | 'user';

    /**
     * Body param: Admission policy used when a user attempts to enter this tenant.
     */
    entry_mode?: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

    /**
     * Body param: New tenant name.
     */
    name?: string;

    /**
     * Header param: Signed Hercules Auth ID token. Required for user and omitted for
     * service.
     */
    'X-Hercules-User-ID-Token'?: string;
  }

  export namespace Variant1 {
    export interface ID {
      /**
       * Existing IAM role ID.
       */
      id: string;
    }

    export interface Key {
      /**
       * Stable role key from the deployment's IAM catalog.
       */
      key: string;
    }
  }

  export interface Variant2 {
    /**
     * Body param: Admission policy used when a user attempts to enter this tenant.
     */
    entry_mode: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

    /**
     * Header param: Authority used for this operation: service or user.
     */
    'X-Hercules-IAM-Actor': 'service' | 'user';

    /**
     * Body param: Role assigned automatically to users admitted to this tenant.
     */
    default_role?: Variant2.ID | Variant2.Key;

    /**
     * Body param: New tenant name.
     */
    name?: string;

    /**
     * Header param: Signed Hercules Auth ID token. Required for user and omitted for
     * service.
     */
    'X-Hercules-User-ID-Token'?: string;
  }

  export namespace Variant2 {
    export interface ID {
      /**
       * Existing IAM role ID.
       */
      id: string;
    }

    export interface Key {
      /**
       * Stable role key from the deployment's IAM catalog.
       */
      key: string;
    }
  }
}

export interface TenantArchiveParams {
  /**
   * Must be service for this trusted backend operation.
   */
  'X-Hercules-IAM-Actor': 'service';
}

export interface TenantEvaluateEntryParams {
  /**
   * Must be user for this signed-in user operation.
   */
  'X-Hercules-IAM-Actor': 'user';

  /**
   * Signed Hercules Auth ID token. Required for user and omitted for service.
   */
  'X-Hercules-User-ID-Token': string;
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
    type TenantEvaluateEntryResponse as TenantEvaluateEntryResponse,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantArchiveParams as TenantArchiveParams,
    type TenantEvaluateEntryParams as TenantEvaluateEntryParams,
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
    type UserListPermissionOverridesResponse as UserListPermissionOverridesResponse,
    type UserRemoveResponse as UserRemoveResponse,
    type UserReplacePermissionOverridesResponse as UserReplacePermissionOverridesResponse,
    type UserReplaceRolesResponse as UserReplaceRolesResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListPermissionOverridesParams as UserListPermissionOverridesParams,
    type UserRemoveParams as UserRemoveParams,
    type UserReplacePermissionOverridesParams as UserReplacePermissionOverridesParams,
    type UserReplaceRolesParams as UserReplaceRolesParams,
  };

  export {
    Groups as Groups,
    type GroupCreateResponse as GroupCreateResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupArchiveResponse as GroupArchiveResponse,
    type GroupListPermissionOverridesResponse as GroupListPermissionOverridesResponse,
    type GroupReplacePermissionOverridesResponse as GroupReplacePermissionOverridesResponse,
    type GroupReplaceRolesResponse as GroupReplaceRolesResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupArchiveParams as GroupArchiveParams,
    type GroupListPermissionOverridesParams as GroupListPermissionOverridesParams,
    type GroupReplacePermissionOverridesParams as GroupReplacePermissionOverridesParams,
    type GroupReplaceRolesParams as GroupReplaceRolesParams,
  };

  export {
    Roles as Roles,
    type RoleCreateResponse as RoleCreateResponse,
    type RoleUpdateResponse as RoleUpdateResponse,
    type RoleArchiveResponse as RoleArchiveResponse,
    type RoleEvaluateGrantabilityResponse as RoleEvaluateGrantabilityResponse,
    type RoleListPermissionOverridesResponse as RoleListPermissionOverridesResponse,
    type RoleReplacePermissionOverridesResponse as RoleReplacePermissionOverridesResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleArchiveParams as RoleArchiveParams,
    type RoleEvaluateGrantabilityParams as RoleEvaluateGrantabilityParams,
    type RoleListPermissionOverridesParams as RoleListPermissionOverridesParams,
    type RoleReplacePermissionOverridesParams as RoleReplacePermissionOverridesParams,
  };

  export {
    AdmissionRules as AdmissionRules,
    type AdmissionRuleCreateResponse as AdmissionRuleCreateResponse,
    type AdmissionRuleUpdateResponse as AdmissionRuleUpdateResponse,
    type AdmissionRuleListResponse as AdmissionRuleListResponse,
    type AdmissionRuleArchiveResponse as AdmissionRuleArchiveResponse,
    type AdmissionRuleCreateParams as AdmissionRuleCreateParams,
    type AdmissionRuleUpdateParams as AdmissionRuleUpdateParams,
    type AdmissionRuleListParams as AdmissionRuleListParams,
    type AdmissionRuleArchiveParams as AdmissionRuleArchiveParams,
  };

  export {
    AuditEvents as AuditEvents,
    type AuditEventListResponse as AuditEventListResponse,
    type AuditEventListParams as AuditEventListParams,
  };

  export {
    Invitations as Invitations,
    type InvitationCreateResponse as InvitationCreateResponse,
    type InvitationListResponse as InvitationListResponse,
    type InvitationRevokeResponse as InvitationRevokeResponse,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationListParams as InvitationListParams,
    type InvitationRevokeParams as InvitationRevokeParams,
  };

  export { Resources as Resources };
}
