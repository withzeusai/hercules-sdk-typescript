// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Invitations extends APIResource {
  /**
   * Lists pending, unexpired tenant and resource invitations. Accepted, revoked, and
   * expired invitations are not returned.
   */
  list(
    tenantID: string,
    query: InvitationListParams,
    options?: RequestOptions,
  ): APIPromise<InvitationListResponse> {
    return this._client.get(path`/v1/iam/tenants/${tenantID}/invitations`, { query, ...options });
  }

  /**
   * Revokes a pending tenant or resource invitation. It does not remove access
   * already granted by an accepted invitation.
   */
  revoke(
    invitationID: string,
    params: InvitationRevokeParams,
    options?: RequestOptions,
  ): APIPromise<InvitationRevokeResponse> {
    const { tenant_id, actor_token_identifier } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/invitations/${invitationID}`, {
      query: { actor_token_identifier },
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
     * Recipient of an invitation.
     */
    recipient: IamTenantInvitationListItem.Recipient;

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
   * Pending resource invitation.
   */
  export interface IamResourceInvitationListItem {
    /**
     * Invitation creation timestamp.
     */
    created_at: string;

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
     * Recipient of an invitation.
     */
    recipient: IamResourceInvitationListItem.Recipient;

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
}

/**
 * Revoked tenant or resource invitation.
 */
export interface InvitationRevokeResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: InvitationRevokeResponse.ConvexSourceData;

  /**
   * Revoked invitation ID.
   */
  invitation_id: string;

  /**
   * Whether the invitation was revoked.
   */
  revoked: boolean;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

export namespace InvitationRevokeResponse {
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

export interface InvitationListParams {
  /**
   * The signed-in actor's Convex identity tokenIdentifier, passed unchanged by the
   * trusted app backend.
   */
  actor_token_identifier: string | null;

  /**
   * Opaque cursor returned by the previous page.
   */
  cursor?: string;

  /**
   * Maximum number of records to return. Defaults to 50.
   */
  limit?: number;

  /**
   * Optional exact invitation recipient.
   */
  recipient?: InvitationListParams.Recipient;

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
   * Optional exact invitation recipient.
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

export interface InvitationRevokeParams {
  /**
   * Path param: The tenant ID. Pass `default` to target the deployment's default
   * tenant.
   */
  tenant_id: string;

  /**
   * Query param: The signed-in actor's Convex identity tokenIdentifier, passed
   * unchanged by the trusted app backend.
   */
  actor_token_identifier: string | null;
}

export declare namespace Invitations {
  export {
    type InvitationListResponse as InvitationListResponse,
    type InvitationRevokeResponse as InvitationRevokeResponse,
    type InvitationListParams as InvitationListParams,
    type InvitationRevokeParams as InvitationRevokeParams,
  };
}
