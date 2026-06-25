// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InvitationsAPI from './invitations';
import { InvitationAcceptParams, InvitationAcceptResponse, Invitations } from './invitations';
import * as TenantsAPI from './tenants/tenants';
import {
  TenantArchiveParams,
  TenantArchiveResponse,
  TenantCreateParams,
  TenantCreateResponse,
  TenantEvaluateAccessParams,
  TenantEvaluateAccessResponse,
  TenantGetParams,
  TenantGetResponse,
  TenantGrantableRolesParams,
  TenantGrantableRolesResponse,
  TenantListParams,
  TenantListResponse,
  TenantUnarchiveParams,
  TenantUnarchiveResponse,
  TenantUpdateParams,
  TenantUpdateResponse,
  Tenants,
} from './tenants/tenants';

/**
 * Manage IAM tenants, users, groups, roles, admission rules, invitations,
 * resource grants, and permission overrides. Requires an API key with the
 * IAM administration permission.
 */
export class Iam extends APIResource {
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);
  tenants: TenantsAPI.Tenants = new TenantsAPI.Tenants(this._client);
}

Iam.Invitations = Invitations;
Iam.Tenants = Tenants;

export declare namespace Iam {
  export {
    Invitations as Invitations,
    type InvitationAcceptResponse as InvitationAcceptResponse,
    type InvitationAcceptParams as InvitationAcceptParams,
  };

  export {
    Tenants as Tenants,
    type TenantCreateResponse as TenantCreateResponse,
    type TenantUpdateResponse as TenantUpdateResponse,
    type TenantListResponse as TenantListResponse,
    type TenantArchiveResponse as TenantArchiveResponse,
    type TenantEvaluateAccessResponse as TenantEvaluateAccessResponse,
    type TenantGetResponse as TenantGetResponse,
    type TenantGrantableRolesResponse as TenantGrantableRolesResponse,
    type TenantUnarchiveResponse as TenantUnarchiveResponse,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantListParams as TenantListParams,
    type TenantArchiveParams as TenantArchiveParams,
    type TenantEvaluateAccessParams as TenantEvaluateAccessParams,
    type TenantGetParams as TenantGetParams,
    type TenantGrantableRolesParams as TenantGrantableRolesParams,
    type TenantUnarchiveParams as TenantUnarchiveParams,
  };
}
