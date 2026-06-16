// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Members extends APIResource {
  /**
   * Adds an app user to an organization scope, or restores a removed or suspended
   * member.
   */
  add(body: MemberAddParams, options?: RequestOptions): APIPromise<MemberAddResponse> {
    return this._client.post('/v1/access-control/members/add', { body, ...options });
  }

  /**
   * Approves a pending member, admitting them into an organization scope.
   */
  approve(body: MemberApproveParams, options?: RequestOptions): APIPromise<MemberApproveResponse> {
    return this._client.post('/v1/access-control/members/approve', { body, ...options });
  }

  /**
   * Evicts a member principal from an organization scope.
   */
  remove(body: MemberRemoveParams, options?: RequestOptions): APIPromise<MemberRemoveResponse> {
    return this._client.post('/v1/access-control/members/remove', { body, ...options });
  }

  /**
   * Suspends or unsuspends a member principal in an organization scope.
   */
  setStatus(body: MemberSetStatusParams, options?: RequestOptions): APIPromise<MemberSetStatusResponse> {
    return this._client.post('/v1/access-control/members/status', { body, ...options });
  }
}

/**
 * Result of adding or restoring an organization member.
 */
export interface MemberAddResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Added or restored member principal ID.
   */
  principal_id: string;

  /**
   * Deployments whose Access Control mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * Role assigned to the member.
   */
  role_id: string;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Whether persisted Access Control state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;
}

/**
 * Result of approving a pending organization member.
 */
export interface MemberApproveResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Member status before approval.
   */
  previous_status: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';

  /**
   * Approved member principal ID.
   */
  principal_id: string;

  /**
   * Deployments whose Access Control mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * Hercules Access Control identifier.
   */
  role_id: string | null;

  /**
   * Hercules Access Control identifier.
   */
  rule_id: string | null;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Member status after approval.
   */
  status: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';

  /**
   * Whether persisted Access Control state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;
}

/**
 * Access Control write result for one user principal.
 */
export interface MemberRemoveResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * User principal changed by the operation.
   */
  principal_id: string;

  /**
   * Deployments whose Access Control mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Whether persisted Access Control state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;
}

/**
 * Result of suspending or reactivating an organization member.
 */
export interface MemberSetStatusResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Member status before the operation.
   */
  previous_status: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';

  /**
   * Member principal whose status changed.
   */
  principal_id: string;

  /**
   * Deployments whose Access Control mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Member status after the operation.
   */
  status: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';

  /**
   * Whether persisted Access Control state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;
}

export interface MemberAddParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Hercules Auth user ID to add or restore.
   */
  hercules_auth_user_id: string;

  /**
   * Organization scope the user will join or rejoin.
   */
  scope_id: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;

  /**
   * Existing Access Control role ID.
   */
  role_id?: string;

  /**
   * Stable role key from the deployment catalog.
   */
  role_key?: string;
}

export interface MemberApproveParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Pending member principal ID to approve.
   */
  principal_id: string;

  /**
   * Organization scope awaiting member approval.
   */
  scope_id: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export interface MemberRemoveParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Active member principal ID to remove.
   */
  principal_id: string;

  /**
   * Organization scope the member will leave.
   */
  scope_id: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export interface MemberSetStatusParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Member principal ID whose status will change.
   */
  principal_id: string;

  /**
   * Organization scope containing the member.
   */
  scope_id: string;

  /**
   * Manual member status: active to restore access or suspended to revoke it.
   */
  status: 'active' | 'suspended';

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export declare namespace Members {
  export {
    type MemberAddResponse as MemberAddResponse,
    type MemberApproveResponse as MemberApproveResponse,
    type MemberRemoveResponse as MemberRemoveResponse,
    type MemberSetStatusResponse as MemberSetStatusResponse,
    type MemberAddParams as MemberAddParams,
    type MemberApproveParams as MemberApproveParams,
    type MemberRemoveParams as MemberRemoveParams,
    type MemberSetStatusParams as MemberSetStatusParams,
  };
}
