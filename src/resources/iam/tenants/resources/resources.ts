// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as GrantsAPI from './grants';
import {
  GrantCreateParams,
  GrantCreateResponse,
  GrantUpdateParams,
  GrantUpdateResponse,
  Grants,
} from './grants';
import * as PermissionOverridesAPI from './permission-overrides';
import {
  PermissionOverrideUpdateParams,
  PermissionOverrideUpdateResponse,
  PermissionOverrides,
} from './permission-overrides';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Resources extends APIResource {
  grants: GrantsAPI.Grants = new GrantsAPI.Grants(this._client);
  permissionOverrides: PermissionOverridesAPI.PermissionOverrides =
    new PermissionOverridesAPI.PermissionOverrides(this._client);

  /**
   * Lists roles the signed-in user or trusted server code can assign on a resource.
   * Use this operation to populate resource-sharing role pickers; the write
   * operation checks access again.
   */
  accessGrantingRoles(
    resourceID: string,
    params: ResourceAccessGrantingRolesParams,
    options?: RequestOptions,
  ): APIPromise<ResourceAccessGrantingRolesResponse> {
    const { tenant_id, resource_type, ...query } = params;
    return this._client.get(
      path`/v1/iam/tenants/${tenant_id}/resources/${resource_type}/${resourceID}/access-granting-roles`,
      { query, ...options },
    );
  }

  /**
   * Invites a recipient to receive one role or permission on a resource. The grant
   * can apply only to that resource or also to its descendants, and is created only
   * after the invitation is accepted.
   */
  createInvitation(
    resourceID: string,
    params: ResourceCreateInvitationParams,
    options?: RequestOptions,
  ): APIPromise<ResourceCreateInvitationResponse> {
    const { tenant_id, resource_type, ...body } = params;
    return this._client.post(
      path`/v1/iam/tenants/${tenant_id}/resources/${resource_type}/${resourceID}/invitations`,
      { body, ...options },
    );
  }
}

/**
 * Grantable IAM roles for one tenant or exact resource.
 */
export interface ResourceAccessGrantingRolesResponse {
  /**
   * Roles the supplied authority may grant.
   */
  roles: Array<ResourceAccessGrantingRolesResponse.Role>;

  /**
   * Tenant used for the grantability decision.
   */
  tenant_id: string;
}

export namespace ResourceAccessGrantingRolesResponse {
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
 * Created resource invitation.
 */
export interface ResourceCreateInvitationResponse {
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
  convex_source_data: ResourceCreateInvitationResponse.ConvexSourceData;

  /**
   * Invitation expiry timestamp.
   */
  expires_at: string;

  /**
   * Role or permission grant created on acceptance.
   */
  grant:
    | ResourceCreateInvitationResponse.IamResourceInvitationPendingRoleGrant
    | ResourceCreateInvitationResponse.IamResourceInvitationPendingPermissionGrant;

  /**
   * Created resource invitation ID.
   */
  invitation_id: string;

  /**
   * Recipient of an invitation.
   */
  recipient: ResourceCreateInvitationResponse.Recipient;

  /**
   * Resource covered by the invitation.
   */
  resource: ResourceCreateInvitationResponse.Resource;

  /**
   * Tenant containing the invited resource.
   */
  tenant_id: string;

  /**
   * Identifies a resource invitation.
   */
  type: 'resource';
}

export namespace ResourceCreateInvitationResponse {
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

  export interface IamResourceInvitationPendingRoleGrant {
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
     * Identifies a resource role grant.
     */
    type: 'resource_role';
  }

  export interface IamResourceInvitationPendingPermissionGrant {
    /**
     * Pending permission conferral ID.
     */
    conferral_id: string;

    /**
     * Resource invitations grant the permission.
     */
    effect: 'allow';

    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at: string | null;

    /**
     * IAM permission granted on acceptance.
     */
    permission_id: string;

    /**
     * Stable IAM permission key.
     */
    permission_key: string;

    /**
     * Identifies a resource permission grant.
     */
    type: 'resource_permission';
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

  /**
   * Resource covered by the invitation.
   */
  export interface Resource {
    /**
     * Whether the grant applies only to this resource or also to descendants.
     */
    applies_to: 'self' | 'self_and_descendants';

    /**
     * Exact application resource ID.
     */
    resource_id: string;

    /**
     * Canonical app resource type, such as app.projects.
     */
    resource_type: string;
  }
}

export interface ResourceAccessGrantingRolesParams {
  /**
   * Path param: The tenant ID. Pass `default` to target the deployment's default
   * tenant.
   */
  tenant_id: string;

  /**
   * Path param: The canonical app resource type, such as `app.projects`.
   */
  resource_type: string;

  /**
   * Query param: The signed-in actor's Convex identity tokenIdentifier, passed
   * unchanged by the trusted app backend.
   */
  actor_token_identifier: string | null;

  /**
   * Query param: Recipient kind for the proposed grant.
   */
  subject_type: 'user' | 'group';

  /**
   * Query param: Whether the grant applies only to this resource or also to
   * descendants authorized through it. Defaults to `self`.
   */
  applies_to?: 'self' | 'self_and_descendants';
}

export interface ResourceCreateInvitationParams {
  /**
   * Path param: The tenant ID. Pass `default` to target the deployment's default
   * tenant.
   */
  tenant_id: string;

  /**
   * Path param: The canonical app resource type, such as `app.projects`.
   */
  resource_type: string;

  /**
   * Body param: The signed-in actor's Convex identity tokenIdentifier, passed
   * unchanged by the trusted app backend.
   */
  actor_token_identifier: string | null;

  /**
   * Body param: Exactly one role or permission grant created on acceptance.
   */
  grant:
    | ResourceCreateInvitationParams.IamResourceInvitationRoleGrantInput
    | ResourceCreateInvitationParams.IamResourceInvitationPermissionGrantInput;

  /**
   * Body param: Recipient of an invitation.
   */
  recipient: ResourceCreateInvitationParams.Recipient;

  /**
   * Body param: Whether the grant applies only to this resource or also to
   * descendants authorized through it. Defaults to `self`.
   */
  applies_to?: 'self' | 'self_and_descendants';

  /**
   * Body param: Invitation expiry timestamp. Defaults to 14 days after creation.
   */
  expires_at?: string;
}

export namespace ResourceCreateInvitationParams {
  /**
   * Role grant created on the resource when accepted.
   */
  export interface IamResourceInvitationRoleGrantInput {
    /**
     * Role receiving the overrides.
     */
    role:
      | IamResourceInvitationRoleGrantInput.IamRoleIDReference
      | IamResourceInvitationRoleGrantInput.IamRoleKeyReference;

    /**
     * Identifies a role grant.
     */
    type: 'role';

    /**
     * Grant expiry. Omit or pass null for a permanent grant.
     */
    expires_at?: string | null;
  }

  export namespace IamResourceInvitationRoleGrantInput {
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

  /**
   * Direct permission grant created on the resource when accepted.
   */
  export interface IamResourceInvitationPermissionGrantInput {
    /**
     * Permission granted on the resource.
     */
    permission_key: string;

    /**
     * Identifies a permission grant.
     */
    type: 'permission';

    /**
     * Grant expiry. Omit or pass null for a permanent grant.
     */
    expires_at?: string | null;
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

Resources.Grants = Grants;
Resources.PermissionOverrides = PermissionOverrides;

export declare namespace Resources {
  export {
    type ResourceAccessGrantingRolesResponse as ResourceAccessGrantingRolesResponse,
    type ResourceCreateInvitationResponse as ResourceCreateInvitationResponse,
    type ResourceAccessGrantingRolesParams as ResourceAccessGrantingRolesParams,
    type ResourceCreateInvitationParams as ResourceCreateInvitationParams,
  };

  export {
    Grants as Grants,
    type GrantCreateResponse as GrantCreateResponse,
    type GrantUpdateResponse as GrantUpdateResponse,
    type GrantCreateParams as GrantCreateParams,
    type GrantUpdateParams as GrantUpdateParams,
  };

  export {
    PermissionOverrides as PermissionOverrides,
    type PermissionOverrideUpdateResponse as PermissionOverrideUpdateResponse,
    type PermissionOverrideUpdateParams as PermissionOverrideUpdateParams,
  };
}
