// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Invitations extends APIResource {
  /**
   * Returns a filtered page of pending tenant and resource invitations.
   */
  list(
    tenantID: string,
    query: InvitationListParams,
    options?: RequestOptions,
  ): APIPromise<InvitationListResponse> {
    return this._client.get(path`/v1/iam/tenants/${tenantID}/invitations`, { query, ...options });
  }

  /**
   * Creates an invitation to one exact resource.
   */
  createResource(
    resourceID: string,
    params: InvitationCreateResourceParams,
    options?: RequestOptions,
  ): APIPromise<InvitationCreateResourceResponse> {
    const { tenant_id, resource_type, ...body } = params;
    return this._client.post(
      path`/v1/iam/tenants/${tenant_id}/resources/${resource_type}/${resourceID}/invitations`,
      { body, ...options },
    );
  }

  /**
   * Creates an invitation to a tenant.
   */
  createTenant(
    tenantID: string,
    body: InvitationCreateTenantParams,
    options?: RequestOptions,
  ): APIPromise<InvitationCreateTenantResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/invitations`, { body, ...options });
  }

  /**
   * Revokes one pending tenant or resource invitation.
   */
  revoke(
    invitationID: string,
    params: InvitationRevokeParams,
    options?: RequestOptions,
  ): APIPromise<InvitationRevokeResponse> {
    const { tenant_id, user_token_identifier } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/invitations/${invitationID}`, {
      query: { user_token_identifier },
      ...options,
    });
  }
}

/**
 * Cursor-paginated pending invitations in one tenant.
 */
export interface InvitationListResponse {
  /**
   * Pending tenant and resource invitations.
   */
  invitations: Array<
    InvitationListResponse.IamTenantInvitationListItem | InvitationListResponse.IamResourceInvitationListItem
  >;

  /**
   * Tenant whose invitations were returned.
   */
  tenant_id: string;

  /**
   * Cursor for the next invitation page.
   */
  next_cursor?: string;
}

export namespace InvitationListResponse {
  /**
   * Pending tenant invitation.
   */
  export interface IamTenantInvitationListItem {
    /**
     * Invitation creation timestamp.
     */
    created_at: string;

    /**
     * Email address of the invited user.
     */
    email: string;

    /**
     * Invitation expiry timestamp.
     */
    expires_at: string;

    /**
     * Role grants created on acceptance.
     */
    grants: Array<IamTenantInvitationListItem.Grant>;

    /**
     * Tenant invitation ID.
     */
    invitation_id: string;

    /**
     * Identifies a tenant invitation.
     */
    type: 'tenant';

    /**
     * Invitation last-updated timestamp.
     */
    updated_at: string;
  }

  export namespace IamTenantInvitationListItem {
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
  }

  /**
   * Pending resource invitation.
   */
  export interface IamResourceInvitationListItem {
    /**
     * Invitation creation timestamp.
     */
    created_at: string;

    /**
     * Email address of the invited user.
     */
    email: string;

    /**
     * Invitation expiry timestamp.
     */
    expires_at: string;

    /**
     * Role or permission grant created on acceptance.
     */
    grant:
      | IamResourceInvitationListItem.IamResourceInvitationPendingRoleGrant
      | IamResourceInvitationListItem.IamResourceInvitationPendingPermissionGrant;

    /**
     * Resource invitation ID.
     */
    invitation_id: string;

    /**
     * Resource covered by the invitation.
     */
    resource: IamResourceInvitationListItem.Resource;

    /**
     * Identifies a resource invitation.
     */
    type: 'resource';

    /**
     * Invitation last-updated timestamp.
     */
    updated_at: string;
  }

  export namespace IamResourceInvitationListItem {
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
     * Resource covered by the invitation.
     */
    export interface Resource {
      /**
       * Exact application resource ID.
       */
      resource_id: string;

      /**
       * Canonical app resource type, such as app.projects.
       */
      resource_type: string;

      /**
       * Whether the grant applies only to this resource or also to descendants
       * authorized through it.
       */
      applies_to?: 'self' | 'self_and_descendants';
    }
  }
}

/**
 * Created resource invitation.
 */
export interface InvitationCreateResourceResponse {
  /**
   * One-time secret invitation token.
   */
  token: string;

  /**
   * URL the invited user can open to accept.
   */
  accept_url: string;

  /**
   * Email address of the invited user.
   */
  email: string;

  /**
   * Invitation expiry timestamp.
   */
  expires_at: string;

  /**
   * Role or permission grant created on acceptance.
   */
  grant:
    | InvitationCreateResourceResponse.IamResourceInvitationPendingRoleGrant
    | InvitationCreateResourceResponse.IamResourceInvitationPendingPermissionGrant;

  /**
   * Created resource invitation ID.
   */
  invitation_id: string;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * Resource covered by the invitation.
   */
  resource: InvitationCreateResourceResponse.Resource;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant containing the invited resource.
   */
  tenant_id: string;

  /**
   * Identifies a resource invitation.
   */
  type: 'resource';
}

export namespace InvitationCreateResourceResponse {
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
   * Resource covered by the invitation.
   */
  export interface Resource {
    /**
     * Exact application resource ID.
     */
    resource_id: string;

    /**
     * Canonical app resource type, such as app.projects.
     */
    resource_type: string;

    /**
     * Whether the grant applies only to this resource or also to descendants
     * authorized through it.
     */
    applies_to?: 'self' | 'self_and_descendants';
  }
}

/**
 * Created tenant invitation.
 */
export interface InvitationCreateTenantResponse {
  /**
   * One-time secret invitation token.
   */
  token: string;

  /**
   * URL the invited user can open to accept.
   */
  accept_url: string;

  /**
   * Email address of the invited user.
   */
  email: string;

  /**
   * Invitation expiry timestamp.
   */
  expires_at: string;

  /**
   * Role grants created on acceptance.
   */
  grants: Array<InvitationCreateTenantResponse.Grant>;

  /**
   * Created tenant invitation ID.
   */
  invitation_id: string;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant receiving the invited user.
   */
  tenant_id: string;

  /**
   * Identifies a tenant invitation.
   */
  type: 'tenant';
}

export namespace InvitationCreateTenantResponse {
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
}

/**
 * Revoked tenant or resource invitation.
 */
export interface InvitationRevokeResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Revoked invitation ID.
   */
  invitation_id: string;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * Whether the invitation was revoked.
   */
  revoked: boolean;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

export interface InvitationListParams {
  /**
   * Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;

  /**
   * Opaque cursor returned by the previous page.
   */
  cursor?: string;

  /**
   * Filter by exact invitation email.
   */
  email?: string;

  /**
   * Maximum number of records to return.
   */
  limit?: number;

  /**
   * Optional tenant, all-resource, or exact-resource invitation selection.
   */
  target?:
    | InvitationListParams.IamInvitationListTenantTarget
    | InvitationListParams.IamInvitationListAllResourcesTarget
    | InvitationListParams.IamInvitationListExactResourceTarget;
}

export namespace InvitationListParams {
  /**
   * Selects pending tenant invitations.
   */
  export interface IamInvitationListTenantTarget {
    /**
     * Select tenant invitations.
     */
    type: 'tenant';
  }

  /**
   * Selects all pending resource invitations.
   */
  export interface IamInvitationListAllResourcesTarget {
    /**
     * Select resource invitations.
     */
    type: 'resource';
  }

  /**
   * Selects pending invitations for one exact resource.
   */
  export interface IamInvitationListExactResourceTarget {
    /**
     * Filter by exact resource ID.
     */
    resource_id: string;

    /**
     * Filter by exact resource type.
     */
    resource_type: string;

    /**
     * Select resource invitations.
     */
    type: 'resource';
  }
}

export interface InvitationCreateResourceParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Path param
   */
  resource_type: string;

  /**
   * Body param: Email address of the invited user.
   */
  email: string;

  /**
   * Body param: Exactly one role or permission grant created on acceptance.
   */
  grant:
    | InvitationCreateResourceParams.IamResourceInvitationRoleGrantInput
    | InvitationCreateResourceParams.IamResourceInvitationPermissionGrantInput;

  /**
   * Body param: Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;

  /**
   * Body param: Whether the grant applies only to this resource or also to
   * descendants authorized through it.
   */
  applies_to?: 'self' | 'self_and_descendants';

  /**
   * Body param: Invitation expiry timestamp. The service default is used when
   * omitted.
   */
  expires_at?: string;
}

export namespace InvitationCreateResourceParams {
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
     * Grant expiry, or null for a permanent grant.
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
     * Grant expiry, or null for a permanent grant.
     */
    expires_at?: string | null;
  }
}

export interface InvitationCreateTenantParams {
  /**
   * Email address of the invited user.
   */
  email: string;

  /**
   * Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;

  /**
   * Invitation expiry timestamp. The service default is used when omitted.
   */
  expires_at?: string;

  /**
   * Role grants created on acceptance. The permanent tenant default is used when
   * omitted.
   */
  grants?: Array<InvitationCreateTenantParams.Grant>;
}

export namespace InvitationCreateTenantParams {
  /**
   * One direct role grant.
   */
  export interface Grant {
    /**
     * Role receiving the overrides.
     */
    role: Grant.IamRoleIDReference | Grant.IamRoleKeyReference;

    /**
     * Grant expiry, or null for a permanent grant.
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

export interface InvitationRevokeParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Query param: Convex identity tokenIdentifier asserted by the trusted app
   * backend.
   */
  user_token_identifier: string | null;
}

export declare namespace Invitations {
  export {
    type InvitationListResponse as InvitationListResponse,
    type InvitationCreateResourceResponse as InvitationCreateResourceResponse,
    type InvitationCreateTenantResponse as InvitationCreateTenantResponse,
    type InvitationRevokeResponse as InvitationRevokeResponse,
    type InvitationListParams as InvitationListParams,
    type InvitationCreateResourceParams as InvitationCreateResourceParams,
    type InvitationCreateTenantParams as InvitationCreateTenantParams,
    type InvitationRevokeParams as InvitationRevokeParams,
  };
}
