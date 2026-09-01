// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import * as InvitationsAPI from './invitations';
import { Invitations, type InvitationAcceptResponse, type InvitationAcceptParams } from './invitations';
import * as TenantsAPI from './tenants/tenants';
import {
  Tenants,
  type TenantListResponse,
  type TenantCreateResponse,
  type TenantGetResponse,
  type TenantUpdateResponse,
  type TenantArchiveResponse,
  type TenantUnarchiveResponse,
  type TenantEvaluateAccessResponse,
  type TenantCreateInvitationResponse,
  type TenantListRoleAssignmentsResponse,
  type TenantListResourceRoleAssignmentsResponse,
  type IamTenantsCursorIDPage,
  type IamRoleAssignmentsCursorIDPage,
  type IamResourceRoleAssignmentsCursorIDPage,
  type TenantListParams,
  type TenantCreateParams,
  type TenantUpdateParams,
  type TenantArchiveParams,
  type TenantUnarchiveParams,
  type TenantEvaluateAccessParams,
  type TenantCreateInvitationParams,
  type TenantListRoleAssignmentsParams,
  type TenantListResourceRoleAssignmentsParams,
} from './tenants/tenants';

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
    type TenantListResponse as TenantListResponse,
    type TenantCreateResponse as TenantCreateResponse,
    type TenantGetResponse as TenantGetResponse,
    type TenantUpdateResponse as TenantUpdateResponse,
    type TenantArchiveResponse as TenantArchiveResponse,
    type TenantUnarchiveResponse as TenantUnarchiveResponse,
    type TenantEvaluateAccessResponse as TenantEvaluateAccessResponse,
    type TenantCreateInvitationResponse as TenantCreateInvitationResponse,
    type TenantListRoleAssignmentsResponse as TenantListRoleAssignmentsResponse,
    type TenantListResourceRoleAssignmentsResponse as TenantListResourceRoleAssignmentsResponse,
    type IamTenantsCursorIDPage as IamTenantsCursorIDPage,
    type IamRoleAssignmentsCursorIDPage as IamRoleAssignmentsCursorIDPage,
    type IamResourceRoleAssignmentsCursorIDPage as IamResourceRoleAssignmentsCursorIDPage,
    type TenantListParams as TenantListParams,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantArchiveParams as TenantArchiveParams,
    type TenantUnarchiveParams as TenantUnarchiveParams,
    type TenantEvaluateAccessParams as TenantEvaluateAccessParams,
    type TenantCreateInvitationParams as TenantCreateInvitationParams,
    type TenantListRoleAssignmentsParams as TenantListRoleAssignmentsParams,
    type TenantListResourceRoleAssignmentsParams as TenantListResourceRoleAssignmentsParams,
  };
}
