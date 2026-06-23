// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Invitations extends APIResource {
  /**
   * Creates an invitation link for an org scope.
   */
  create(body: InvitationCreateParams, options?: RequestOptions): APIPromise<InvitationCreateResponse> {
    return this._client.post('/v1/iam/invitations/create', { body, ...options });
  }

  /**
   * Accepts an invitation for the signed-in app user.
   */
  accept(body: InvitationAcceptParams, options?: RequestOptions): APIPromise<InvitationAcceptResponse> {
    return this._client.post('/v1/iam/invitations/accept', { body, ...options });
  }

  /**
   * Creates an invitation that confers a single grant on one exact resource on
   * accept.
   */
  createResource(
    body: InvitationCreateResourceParams,
    options?: RequestOptions,
  ): APIPromise<InvitationCreateResourceResponse> {
    return this._client.post('/v1/iam/invitations/create-resource', { body, ...options });
  }

  /**
   * Lists the pending, unexpired resource invitations in an organization scope.
   */
  listResource(
    body: InvitationListResourceParams,
    options?: RequestOptions,
  ): APIPromise<InvitationListResourceResponse> {
    return this._client.post('/v1/iam/invitations/list-resource', { body, ...options });
  }

  /**
   * Revokes a pending org invitation.
   */
  revoke(body: InvitationRevokeParams, options?: RequestOptions): APIPromise<InvitationRevokeResponse> {
    return this._client.post('/v1/iam/invitations/revoke', { body, ...options });
  }
}

/**
 * Created scope or resource invitation, including its one-time acceptance secret.
 */
export interface InvitationCreateResponse {
  /**
   * Secret invitation token. Send it only to the intended invitee.
   */
  token: string;

  /**
   * Hosted URL where the invitee can accept the invitation.
   */
  accept_url: string;

  /**
   * Scope the invitation belongs to.
   */
  access_scope_id: string;

  /**
   * Email address of the invitee.
   */
  email: string;

  /**
   * Invitation expiry timestamp.
   */
  expires_at: string;

  /**
   * Created invitation ID.
   */
  invitation_id: string;

  /**
   * Deployments whose IAM mirrors must receive this invitation.
   */
  projection_ids: Array<string>;

  /**
   * Roles attached to the invitation.
   */
  role_ids: Array<string>;

  /**
   * New deployment source version.
   */
  source_version: number;
}

/**
 * Result of accepting a scope or resource invitation.
 */
export interface InvitationAcceptResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Accepted invitation ID.
   */
  invitation_id: string;

  /**
   * Invitee's principal ID in the target scope.
   */
  principal_id: string;

  /**
   * Deployments whose IAM mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * Roles assigned when the invitation was accepted.
   */
  role_ids: Array<string>;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Whether persisted IAM state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;
}

/**
 * Created scope or resource invitation, including its one-time acceptance secret.
 */
export interface InvitationCreateResourceResponse {
  /**
   * Secret invitation token. Send it only to the intended invitee.
   */
  token: string;

  /**
   * Hosted URL where the invitee can accept the invitation.
   */
  accept_url: string;

  /**
   * Scope the invitation belongs to.
   */
  access_scope_id: string;

  /**
   * Email address of the invitee.
   */
  email: string;

  /**
   * Invitation expiry timestamp.
   */
  expires_at: string;

  /**
   * Created invitation ID.
   */
  invitation_id: string;

  /**
   * Deployments whose IAM mirrors must receive this invitation.
   */
  projection_ids: Array<string>;

  /**
   * Roles attached to the invitation.
   */
  role_ids: Array<string>;

  /**
   * New deployment source version.
   */
  source_version: number;
}

/**
 * Pending resource invitations in one organization scope.
 */
export interface InvitationListResourceResponse {
  /**
   * Scope whose resource invitations were listed.
   */
  access_scope_id: string;

  /**
   * Pending, unexpired resource invitations in the scope.
   */
  invitations: Array<InvitationListResourceResponse.Invitation>;
}

export namespace InvitationListResourceResponse {
  /**
   * Pending resource invitation without its secret bearer token.
   */
  export interface Invitation {
    /**
     * Resource applicability conferred by the invitation.
     */
    applies_to: 'self' | 'self_and_descendants';

    /**
     * Whether acceptance grants a role or one permission.
     */
    conferral_type: 'role' | 'permission' | null;

    /**
     * Invitation creation timestamp.
     */
    created_at: string;

    /**
     * Email address of the invitee.
     */
    email: string;

    /**
     * Invitation expiry timestamp.
     */
    expires_at: string;

    /**
     * Resource invitation ID.
     */
    invitation_id: string;

    /**
     * Hercules IAM identifier.
     */
    permission_id: string | null;

    /**
     * Exact application resource ID being shared.
     */
    resource_id: string;

    /**
     * Canonical type of the invited resource.
     */
    resource_type: string;

    /**
     * Hercules IAM identifier.
     */
    role_id: string | null;

    /**
     * Invitation last-updated timestamp.
     */
    updated_at: string;
  }
}

/**
 * Result of revoking a pending invitation.
 */
export interface InvitationRevokeResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Invitation ID targeted for revocation.
   */
  invitation_id: string;

  /**
   * Deployments whose IAM mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * Whether a pending invitation was revoked.
   */
  revoked: boolean;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Whether persisted IAM state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;
}

export interface InvitationCreateParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by IAM.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Email address of the invited user.
   */
  email: string;

  /**
   * Organization scope the recipient is invited to join.
   */
  scope_id: string;

  /**
   * Invitation lifetime in days.
   */
  expires_in_days?: number;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;

  /**
   * Role IDs to assign on acceptance. Use either role_ids or role_keys.
   */
  role_ids?: Array<string>;

  /**
   * Role keys to assign on acceptance. Use either role_keys or role_ids.
   */
  role_keys?: Array<string>;
}

export interface InvitationAcceptParams {
  /**
   * Secret invitation token received by the invitee.
   */
  token: string;

  /**
   * Signed Hercules Auth ID token for the user accepting the invitation.
   */
  id_token: string;
}

export interface InvitationCreateResourceParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by IAM.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Email address of the invited user.
   */
  email: string;

  /**
   * Application resource ID the invitation grants access to.
   */
  resource_id: string;

  /**
   * Canonical type of the invited resource.
   */
  resource_type: string;

  /**
   * Scope containing the invited resource.
   */
  scope_id: string;

  /**
   * Whether the access entry applies only to this resource or also to descendants
   * authorized through it.
   */
  applies_to?: 'self' | 'self_and_descendants';

  /**
   * Invitation lifetime in days.
   */
  expires_in_days?: number;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;

  /**
   * Single permission conferred on acceptance.
   */
  permission_key?: string;

  /**
   * Resource role conferred on acceptance.
   */
  role_key?: string;
}

export interface InvitationListResourceParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by IAM.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Scope whose pending resource invitations are returned.
   */
  scope_id: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export interface InvitationRevokeParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by IAM.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Pending invitation ID to revoke.
   */
  invitation_id: string;

  /**
   * Scope containing the invitation.
   */
  scope_id: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export declare namespace Invitations {
  export {
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
}
