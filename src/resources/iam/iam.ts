// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InvitationsAPI from './invitations';
import { InvitationAcceptParams, InvitationAcceptResponse, Invitations } from './invitations';
import * as TenantsAPI from './tenants/tenants';
import {
  TenantArchiveParams,
  TenantArchiveResponse,
  TenantCreateInvitationParams,
  TenantCreateInvitationResponse,
  TenantCreateParams,
  TenantCreateResponse,
  TenantEvaluateAccessParams,
  TenantEvaluateAccessResponse,
  TenantGetResponse,
  TenantListParams,
  TenantListResourceRoleAssignmentsParams,
  TenantListResourceRoleAssignmentsResponse,
  TenantListResponse,
  TenantListRoleAssignmentsParams,
  TenantListRoleAssignmentsResponse,
  TenantUnarchiveParams,
  TenantUnarchiveResponse,
  TenantUpdateParams,
  TenantUpdateResponse,
  Tenants,
} from './tenants/tenants';

/**
 * Manage IAM tenants, members, groups, roles, access rules, invitations,
 * and tenant-wide / resource role assignments. Requires an API key with the
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
    type TenantCreateInvitationResponse as TenantCreateInvitationResponse,
    type TenantEvaluateAccessResponse as TenantEvaluateAccessResponse,
    type TenantGetResponse as TenantGetResponse,
    type TenantListResourceRoleAssignmentsResponse as TenantListResourceRoleAssignmentsResponse,
    type TenantListRoleAssignmentsResponse as TenantListRoleAssignmentsResponse,
    type TenantUnarchiveResponse as TenantUnarchiveResponse,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantListParams as TenantListParams,
    type TenantArchiveParams as TenantArchiveParams,
    type TenantCreateInvitationParams as TenantCreateInvitationParams,
    type TenantEvaluateAccessParams as TenantEvaluateAccessParams,
    type TenantListResourceRoleAssignmentsParams as TenantListResourceRoleAssignmentsParams,
    type TenantListRoleAssignmentsParams as TenantListRoleAssignmentsParams,
    type TenantUnarchiveParams as TenantUnarchiveParams,
  };
}
