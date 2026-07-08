// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Invitations extends APIResource {
  /**
   * Accepts a pending invitation as the signed-in end user and materializes its
   * tenant-wide role assignments.
   */
  accept(body: InvitationAcceptParams, options?: RequestOptions): APIPromise<InvitationAcceptResponse> {
    return this._client.post('/v1/iam/invitations/accept', { body, ...options });
  }
}

/**
 * Accepted invitation.
 */
export interface InvitationAcceptResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: InvitationAcceptResponse.ConvexSourceData;

  /**
   * Accepted invitation ID.
   */
  invitation_id: string;

  /**
   * The accepting user's tenant membership ID.
   */
  membership_id: string;

  /**
   * Tenant-wide role assignments created.
   */
  role_assignment_ids: Array<string>;

  /**
   * Tenant the invitation conferred access to.
   */
  tenant_id: string;
}

export namespace InvitationAcceptResponse {
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
     * The deployment's IAM source version after the operation. Before relying on
     * Convex IAM mirror reads, wait for the projection to reach at least this source
     * version.
     */
    source_version: number;
  }
}

export interface InvitationAcceptParams {
  /**
   * The signed-in end user's ID (their OIDC subject), asserted by the trusted app
   * backend.
   */
  actor_user_id: string;

  /**
   * Secret invitation token.
   */
  invitation_token: string;
}

export declare namespace Invitations {
  export {
    type InvitationAcceptResponse as InvitationAcceptResponse,
    type InvitationAcceptParams as InvitationAcceptParams,
  };
}
