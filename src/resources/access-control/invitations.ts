// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Invitations extends APIResource {
  /**
   * Creates an invitation link for an org scope.
   */
  create(body: InvitationCreateParams, options?: RequestOptions): APIPromise<InvitationCreateResponse> {
    return this._client.post('/v1/access-control/invitations/create', { body, ...options });
  }

  /**
   * Accepts an invitation for the signed-in app user.
   */
  accept(body: InvitationAcceptParams, options?: RequestOptions): APIPromise<InvitationAcceptResponse> {
    return this._client.post('/v1/access-control/invitations/accept', { body, ...options });
  }

  /**
   * Revokes a pending org invitation.
   */
  revoke(body: InvitationRevokeParams, options?: RequestOptions): APIPromise<InvitationRevokeResponse> {
    return this._client.post('/v1/access-control/invitations/revoke', { body, ...options });
  }
}

export interface InvitationCreateResponse {
  access_scope_id: string;

  projection_ids: Array<string>;

  source_version: number;

  changed?: boolean;

  created?: boolean;

  [k: string]: unknown;
}

export interface InvitationAcceptResponse {
  access_scope_id: string;

  projection_ids: Array<string>;

  source_version: number;

  changed?: boolean;

  created?: boolean;

  [k: string]: unknown;
}

export interface InvitationRevokeResponse {
  access_scope_id: string;

  projection_ids: Array<string>;

  source_version: number;

  changed?: boolean;

  created?: boolean;

  [k: string]: unknown;
}

export interface InvitationCreateParams {
  email: string;

  scope_id: string;

  expires_in_days?: number;

  role_ids?: Array<string>;

  role_keys?: Array<string>;
}

export interface InvitationAcceptParams {
  token: string;

  id_token: string;
}

export interface InvitationRevokeParams {
  invitation_id: string;

  scope_id: string;
}

export declare namespace Invitations {
  export {
    type InvitationCreateResponse as InvitationCreateResponse,
    type InvitationAcceptResponse as InvitationAcceptResponse,
    type InvitationRevokeResponse as InvitationRevokeResponse,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationAcceptParams as InvitationAcceptParams,
    type InvitationRevokeParams as InvitationRevokeParams,
  };
}
