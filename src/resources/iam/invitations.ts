// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';

export class Invitations extends APIResource {
  /**
   * Accepts a pending invitation as the signed-in end user and materializes its tenant-wide role assignments.
   *
   * @param {InvitationAcceptParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InvitationAcceptResponse>} The accepted invitation
   *
   * @example
   * ```ts
   * const invitation = await client.iam.invitations.accept({
   *   actor_user_id: 'x',
   *   invitation_token: 'x',
   * });
   * ```
   */
  accept(body: InvitationAcceptParams, options?: RequestOptions): APIPromise<InvitationAcceptResponse> {
    return this._client.post('/v1/iam/invitations/accept', { body, ...options });
  }
}

export interface InvitationAcceptParams {
  /**
   * The signed-in end user's ID (their OIDC subject), asserted by the trusted app backend.
   * @minLength 1
   */
  actor_user_id: string;
  /**
   * Secret invitation token.
   * @minLength 1
   */
  invitation_token: string;
}

export interface InvitationAcceptResponse {
  /**
   * Accepted invitation ID.
   * @minLength 1
   */
  invitation_id: string;
  /**
   * Tenant the invitation conferred access to.
   * @minLength 1
   */
  tenant_id: string;
  /**
   * The accepting user's tenant membership ID.
   * @minLength 1
   */
  membership_id: string;
  /**
   * Tenant-wide role assignments created.
   */
  role_assignment_ids: Array<string>;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: InvitationAcceptResponse.ConvexSourceData;
}

export namespace InvitationAcceptResponse {
  export interface ConvexSourceData {
    /**
     * Whether persisted IAM source data changed.
     */
    changed: boolean;
    /**
     * The deployment's IAM source version after the operation. Before relying on Convex IAM mirror reads, wait for the projection to reach at least this source version.
     * @minimum 0
     * @maximum 9007199254740991
     */
    source_version: number;
    /**
     * Convex deployment IDs whose IAM mirrors will receive the updated state.
     */
    projection_ids: Array<string>;
  }
}
export declare namespace Invitations {
  export {
    type InvitationAcceptResponse as InvitationAcceptResponse,
    type InvitationAcceptParams as InvitationAcceptParams,
  };
}
