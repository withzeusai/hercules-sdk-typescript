// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Invitations extends APIResource {
  /**
   * Lists active, unexpired invitation links in a tenant.
   */
  list(
    tenantID: string,
    query: InvitationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvitationListResponse> {
    return this._client.get(path`/v1/iam/tenants/${tenantID}/invitations`, { query, ...options });
  }

  /**
   * Revokes a pending invitation. Access already granted by an accepted invitation
   * is unaffected.
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
 * Paginated active invitation links in one tenant.
 */
export interface InvitationListResponse {
  /**
   * Active invitation link page.
   */
  data: Array<InvitationListResponse.Data>;

  /**
   * Whether more records are available after this page.
   */
  has_more: boolean;
}

export namespace InvitationListResponse {
  /**
   * One active invitation link.
   */
  export interface Data {
    /**
     * Optional signup constraint. Omit for an open link anyone can accept.
     */
    constraint: Data.IamInvitationEmailConstraint | Data.IamInvitationDomainConstraint | null;

    /**
     * Invitation creation timestamp.
     */
    created_at: string;

    /**
     * Optional email delivery, independent of the signup constraint. Sends the
     * invitation from from_email to each recipient. Omit for a manual link you share
     * yourself.
     */
    delivery: Data.Delivery | null;

    /**
     * Invitation expiry timestamp, or null if it never expires.
     */
    expires_at: string | null;

    /**
     * Invitation ID.
     */
    invitation_id: string;

    /**
     * Signup cap, or null for unlimited.
     */
    max_uses: number | null;

    /**
     * Roles conferred on acceptance. Empty means the tenant's default role is
     * conferred instead.
     */
    role_ids: Array<string>;

    /**
     * Tenant the invitation belongs to.
     */
    tenant_id: string;

    /**
     * Number of users who have accepted so far.
     */
    use_count: number;
  }

  export namespace Data {
    export interface IamInvitationEmailConstraint {
      /**
       * Only this exact email address may accept.
       */
      type: 'email';

      /**
       * The invited email address.
       */
      value: string;
    }

    export interface IamInvitationDomainConstraint {
      /**
       * Any address in this email domain may accept.
       */
      type: 'domain';

      /**
       * The allowed email domain, e.g. acme.com.
       */
      value: string;
    }

    /**
     * Optional email delivery, independent of the signup constraint. Sends the
     * invitation from from_email to each recipient. Omit for a manual link you share
     * yourself.
     */
    export interface Delivery {
      /**
       * Sender address the invitation is emailed from.
       */
      from_email: string;

      /**
       * Recipients the invitation email is sent to.
       */
      to_emails: Array<string>;
    }
  }
}

/**
 * Revoked invitation.
 */
export interface InvitationRevokeResponse {
  /**
   * Revoked invitation ID.
   */
  invitation_id: string;

  /**
   * Whether the invitation was revoked.
   */
  revoked: boolean;
}

export interface InvitationListParams {
  /**
   * Maximum number of records to return. Defaults to 50.
   */
  limit?: number;

  /**
   * Cursor for forward pagination. Pass the ID of the last item from the previous
   * page.
   */
  starting_after?: string;
}

export interface InvitationRevokeParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary
   * tenant.
   */
  tenant_id: string;

  /**
   * Query param: The signed-in end user's tokenIdentifier to attribute the operation
   * to that user, or omitted for service authority.
   */
  actor_token_identifier?: string;
}

export declare namespace Invitations {
  export {
    type InvitationListResponse as InvitationListResponse,
    type InvitationRevokeResponse as InvitationRevokeResponse,
    type InvitationListParams as InvitationListParams,
    type InvitationRevokeParams as InvitationRevokeParams,
  };
}
