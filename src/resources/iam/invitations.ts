// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Invitations extends APIResource {
  /**
   * Accepts a tenant or resource invitation for the signed-in user.
   */
  accept(params: InvitationAcceptParams, options?: RequestOptions): APIPromise<InvitationAcceptResponse> {
    const {
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.post('/v1/iam/invitations/accept', {
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
 * Accepted tenant or resource invitation.
 */
export interface InvitationAcceptResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Resulting grants assigned by the invitation.
   */
  grants: Array<
    | InvitationAcceptResponse.UnionMember0
    | InvitationAcceptResponse.UnionMember1
    | InvitationAcceptResponse.UnionMember2
    | InvitationAcceptResponse.UnionMember3
  >;

  /**
   * Accepted invitation ID.
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
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

export namespace InvitationAcceptResponse {
  /**
   * One persisted direct role grant.
   */
  export interface UnionMember0 {
    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at: string | null;

    /**
     * Persisted IAM grant ID.
     */
    grant_id: string;

    /**
     * IAM role granted by this binding.
     */
    role_id: string;

    /**
     * Identifies a role grant.
     */
    type: 'role';
  }

  /**
   * One persisted direct permission grant.
   */
  export interface UnionMember1 {
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
     * IAM permission granted or denied by this binding.
     */
    permission_id: string;

    /**
     * Stable IAM permission key.
     */
    permission_key: string;

    /**
     * Identifies a direct permission grant.
     */
    type: 'permission';
  }

  /**
   * One persisted resource role grant.
   */
  export interface UnionMember2 {
    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at: string | null;

    /**
     * Persisted IAM grant ID.
     */
    grant_id: string;

    /**
     * IAM role granted by this binding.
     */
    role_id: string;

    /**
     * Identifies a role grant.
     */
    type: 'role';

    /**
     * Whether the access entry applies only to this resource or also to descendants
     * authorized through it.
     */
    applies_to?: 'self' | 'self_and_descendants';
  }

  /**
   * One persisted resource permission grant.
   */
  export interface UnionMember3 {
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
     * IAM permission granted or denied by this binding.
     */
    permission_id: string;

    /**
     * Stable IAM permission key.
     */
    permission_key: string;

    /**
     * Identifies a direct permission grant.
     */
    type: 'permission';

    /**
     * Whether the access entry applies only to this resource or also to descendants
     * authorized through it.
     */
    applies_to?: 'self' | 'self_and_descendants';
  }
}

export interface InvitationAcceptParams {
  /**
   * Body param: Secret invitation token.
   */
  token: string;

  /**
   * Header param: Must be user for this signed-in user operation.
   */
  'X-Hercules-IAM-Actor': 'user';

  /**
   * Header param: Signed Hercules Auth ID token. Required for user and omitted for
   * service.
   */
  'X-Hercules-User-ID-Token': string;
}

export declare namespace Invitations {
  export {
    type InvitationAcceptResponse as InvitationAcceptResponse,
    type InvitationAcceptParams as InvitationAcceptParams,
  };
}
