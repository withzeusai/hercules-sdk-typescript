// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../../core/pagination';
import type { RequestOptions } from '../../../internal/request-options';
import { path as __scalarPath } from '../../../internal/utils/path';

export class Invitations extends APIResource {
  /**
   * Lists active, unexpired invitation links in a tenant.
   *
   * @param {string} tenantID - The tenant ID. Pass `primary` to target the deployment's primary tenant.
   * @param {InvitationListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<IamInvitationsCursorIDPage, InvitationListResponse>} The active invitation link page
   *
   * @example
   * ```ts
   * const page = await client.iam.tenants.invitations.list('tenantId');
   * ```
   */
  list(
    tenantID: string,
    query: InvitationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<IamInvitationsCursorIDPage, InvitationListResponse> {
    return this._client.getAPIList(
      __scalarPath`/v1/iam/tenants/${tenantID}/invitations`,
      CursorIDPage<InvitationListResponse>,
      { query, ...options },
    );
  }

  /**
   * Revokes a pending invitation. Access already granted by an accepted invitation is unaffected.
   *
   * @param {string} invitationID - The unique identifier of the pending invitation.
   * @param {InvitationRevokeParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InvitationRevokeResponse>} The revoked invitation
   *
   * @example
   * ```ts
   * const invitation = await client.iam.tenants.invitations.revoke('invitationId', {
   *   tenant_id: 'tenantId',
   * });
   * ```
   */
  revoke(
    invitationID: string,
    params: InvitationRevokeParams,
    options?: RequestOptions,
  ): APIPromise<InvitationRevokeResponse> {
    const { tenant_id, actor_user_id } = params;
    return this._client.delete(__scalarPath`/v1/iam/tenants/${tenant_id}/invitations/${invitationID}`, {
      query: { actor_user_id },
      ...options,
    });
  }
}

export interface InvitationListParams extends CursorIDPageParams {}

export interface InvitationListResponse {
  /**
   * Invitation ID.
   * @minLength 1
   */
  invitation_id: string;
  /**
   * Tenant the invitation belongs to.
   * @minLength 1
   */
  tenant_id: string;
  /**
   * The full shareable invitation link, re-derivable at any time. Null only for invitations created before links were stored or when the app's auth domain cannot be resolved.
   */
  link: string | null;
  /**
   * Signup constraint, or null for an open link.
   */
  constraint:
    | InvitationListResponse.IamInvitationEmailConstraint
    | InvitationListResponse.IamInvitationDomainConstraint
    | null;
  /**
   * Signup cap, or null for unlimited.
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  max_uses: number | null;
  /**
   * Number of users who have accepted so far.
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  use_count: number;
  /**
   * Roles conferred on acceptance. Empty means the tenant's default role is conferred instead.
   */
  role_ids: Array<string>;
  /**
   * Email delivery config, or null for a manual link.
   */
  delivery: InvitationListResponse.Delivery | null;
  /**
   * Invitation expiry timestamp, or null if it never expires.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  expires_at: string | null;
  /**
   * Invitation creation timestamp.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created_at: string;
}

export namespace InvitationListResponse {
  export interface IamInvitationEmailConstraint {
    /**
     * Only this exact email address may accept.
     */
    type: 'email';
    /**
     * The invited email address.
     * @format email
     * @maxLength 255
     * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
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
     * @minLength 1
     * @maxLength 255
     */
    value: string;
  }

  export interface Delivery {
    /**
     * Recipients the invitation email is sent to.
     * @minItems 1
     * @maxItems 50
     */
    to_emails: Array<string>;
    /**
     * Sender address the invitation is emailed from. Null or omitted uses the verified sender configured in Auth branding.
     * @format email
     * @maxLength 255
     * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
     */
    from_email?: string | null;
  }
}

export type IamInvitationsCursorIDPage = CursorIDPage<InvitationListResponse>;

export interface InvitationRevokeParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
  /**
   * Query param: The signed-in end user's ID to attribute the operation to that user, or omitted for service authority.
   */
  actor_user_id?: string;
}

export interface InvitationRevokeResponse {
  /**
   * Revoked invitation ID.
   * @minLength 1
   */
  invitation_id: string;
  /**
   * Whether the invitation was revoked.
   */
  revoked: boolean;
}
export declare namespace Invitations {
  export {
    type InvitationListResponse as InvitationListResponse,
    type InvitationRevokeResponse as InvitationRevokeResponse,
    type IamInvitationsCursorIDPage as IamInvitationsCursorIDPage,
    type InvitationListParams as InvitationListParams,
    type InvitationRevokeParams as InvitationRevokeParams,
  };
}
