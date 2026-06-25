// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Invitations extends APIResource {
  /**
   * Accepts a tenant or resource invitation for the signed-in user.
   */
  accept(body: InvitationAcceptParams, options?: RequestOptions): APIPromise<InvitationAcceptResponse> {
    return this._client.post('/v1/iam/invitations/accept', { body, ...options });
  }
}

/**
 * Accepted tenant or resource invitation.
 */
export interface InvitationAcceptResponse {
  /**
   * Convex projection source data produced by the acceptance.
   */
  convex_source_data: InvitationAcceptResponse.ConvexSourceData;

  /**
   * Resulting grants assigned by the invitation.
   */
  grants: Array<
    | InvitationAcceptResponse.IamTenantRoleGrantResult
    | InvitationAcceptResponse.IamTenantPermissionGrantResult
    | InvitationAcceptResponse.IamResourceRoleGrantResult
    | InvitationAcceptResponse.IamResourcePermissionGrantResult
  >;

  /**
   * Accepted invitation ID.
   */
  invitation_id: string;

  /**
   * Tenant containing the accepted invitation.
   */
  tenant_id: string;
}

export namespace InvitationAcceptResponse {
  /**
   * Convex projection source data produced by the acceptance.
   */
  export interface ConvexSourceData {
    /**
     * Whether persisted IAM source data changed.
     */
    changed: boolean;

    /**
     * Projection IDs scheduled to receive the updated IAM state.
     */
    projection_ids: Array<string>;

    /**
     * IAM source version after the operation.
     */
    version: number;
  }

  /**
   * One persisted tenant role grant.
   */
  export interface IamTenantRoleGrantResult {
    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at: string | null;

    /**
     * Persisted IAM grant ID.
     */
    grant_id: string;

    /**
     * IAM role conferred by this grant.
     */
    role_id: string;

    /**
     * Identifies a tenant role grant.
     */
    type: 'tenant_role';
  }

  /**
   * One persisted tenant permission grant.
   */
  export interface IamTenantPermissionGrantResult {
    /**
     * Whether the permission is allowed or denied.
     */
    effect: 'allow' | 'deny';

    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at: string | null;

    /**
     * Persisted IAM grant ID.
     */
    grant_id: string;

    /**
     * IAM permission granted or denied by this grant.
     */
    permission_id: string;

    /**
     * Stable IAM permission key.
     */
    permission_key: string;

    /**
     * Identifies a tenant permission grant.
     */
    type: 'tenant_permission';
  }

  /**
   * One persisted resource role grant.
   */
  export interface IamResourceRoleGrantResult {
    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at: string | null;

    /**
     * Persisted IAM grant ID.
     */
    grant_id: string;

    /**
     * IAM role conferred by this grant.
     */
    role_id: string;

    /**
     * Identifies a resource role grant.
     */
    type: 'resource_role';

    /**
     * Whether the grant applies only to this resource or also to descendants
     * authorized through it.
     */
    applies_to?: 'self' | 'self_and_descendants';
  }

  /**
   * One persisted resource permission grant.
   */
  export interface IamResourcePermissionGrantResult {
    /**
     * Whether the permission is allowed or denied.
     */
    effect: 'allow' | 'deny';

    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at: string | null;

    /**
     * Persisted IAM grant ID.
     */
    grant_id: string;

    /**
     * IAM permission granted or denied by this grant.
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

    /**
     * Whether the grant applies only to this resource or also to descendants
     * authorized through it.
     */
    applies_to?: 'self' | 'self_and_descendants';
  }
}

export interface InvitationAcceptParams {
  /**
   * Secret invitation token.
   */
  invitation_token: string;

  /**
   * Convex identity tokenIdentifier required for user authority.
   */
  user_token_identifier: string;
}

export declare namespace Invitations {
  export {
    type InvitationAcceptResponse as InvitationAcceptResponse,
    type InvitationAcceptParams as InvitationAcceptParams,
  };
}
