// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Groups extends APIResource {
  /**
   * Creates a group principal in an organization scope.
   */
  create(body: GroupCreateParams, options?: RequestOptions): APIPromise<GroupCreateResponse> {
    return this._client.post('/v1/access-control/groups/create', { body, ...options });
  }

  /**
   * Lists the group principals in an organization scope with member counts.
   */
  list(body: GroupListParams, options?: RequestOptions): APIPromise<GroupListResponse> {
    return this._client.post('/v1/access-control/groups/list', { body, ...options });
  }

  /**
   * Adds a user principal to a group in an organization scope.
   */
  addMember(body: GroupAddMemberParams, options?: RequestOptions): APIPromise<GroupAddMemberResponse> {
    return this._client.post('/v1/access-control/groups/members/add', { body, ...options });
  }

  /**
   * Archives a group principal in an organization scope.
   */
  archive(body: GroupArchiveParams, options?: RequestOptions): APIPromise<GroupArchiveResponse> {
    return this._client.post('/v1/access-control/groups/archive', { body, ...options });
  }

  /**
   * Removes a user principal from a group in an organization scope.
   */
  removeMember(
    body: GroupRemoveMemberParams,
    options?: RequestOptions,
  ): APIPromise<GroupRemoveMemberResponse> {
    return this._client.post('/v1/access-control/groups/members/remove', { body, ...options });
  }

  /**
   * Renames a group principal in an organization scope.
   */
  rename(body: GroupRenameParams, options?: RequestOptions): APIPromise<GroupRenameResponse> {
    return this._client.post('/v1/access-control/groups/rename', { body, ...options });
  }
}

/**
 * Access Control write result for one group principal.
 */
export interface GroupCreateResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Group principal changed by the operation.
   */
  group_principal_id: string;

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
 * Group principals in one organization scope.
 */
export interface GroupListResponse {
  /**
   * Scope whose groups were listed.
   */
  access_scope_id: string;

  /**
   * Groups visible to the actor in this scope.
   */
  groups: Array<GroupListResponse.Group>;
}

export namespace GroupListResponse {
  /**
   * Group principal and lifecycle summary.
   */
  export interface Group {
    /**
     * Whether the group is archived.
     */
    archived: boolean;

    /**
     * Archive timestamp, or null for an active group.
     */
    archived_at: string | null;

    /**
     * Group creation timestamp.
     */
    created_at: string;

    /**
     * Group principal ID.
     */
    group_principal_id: string;

    /**
     * Number of active user members in the group.
     */
    member_count: number;

    /**
     * Human-readable group name.
     */
    name: string | null;

    /**
     * Group last-updated timestamp.
     */
    updated_at: string;
  }
}

/**
 * Result of adding a user principal to a group.
 */
export interface GroupAddMemberResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Group principal receiving the member.
   */
  group_principal_id: string;

  /**
   * User principal added to the group.
   */
  member_principal_id: string;

  /**
   * Created group membership ID.
   */
  membership_id: string;

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
 * Access Control write result for one group principal.
 */
export interface GroupArchiveResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Group principal changed by the operation.
   */
  group_principal_id: string;

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
 * Result of removing a user principal from a group.
 */
export interface GroupRemoveMemberResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Group principal losing the member.
   */
  group_principal_id: string;

  /**
   * User principal removed from the group.
   */
  member_principal_id: string;

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
 * Access Control write result for one group principal.
 */
export interface GroupRenameResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Group principal changed by the operation.
   */
  group_principal_id: string;

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

export interface GroupCreateParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Human-readable group name.
   */
  name: string;

  /**
   * Organization scope that will own the group.
   */
  scope_id: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export interface GroupListParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Organization scope whose groups are returned.
   */
  scope_id: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;

  /**
   * Whether archived groups are included. Defaults to false.
   */
  include_archived?: boolean;
}

export interface GroupAddMemberParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Group principal receiving the member.
   */
  group_principal_id: string;

  /**
   * User principal to add to the group.
   */
  member_principal_id: string;

  /**
   * Organization scope containing both principals.
   */
  scope_id: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export interface GroupArchiveParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Group principal ID to archive.
   */
  group_principal_id: string;

  /**
   * Organization scope containing the group.
   */
  scope_id: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export interface GroupRemoveMemberParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Group principal losing the member.
   */
  group_principal_id: string;

  /**
   * User principal to remove from the group.
   */
  member_principal_id: string;

  /**
   * Organization scope containing both principals.
   */
  scope_id: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export interface GroupRenameParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Group principal ID to rename.
   */
  group_principal_id: string;

  /**
   * New human-readable group name.
   */
  name: string;

  /**
   * Organization scope containing the group.
   */
  scope_id: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export declare namespace Groups {
  export {
    type GroupCreateResponse as GroupCreateResponse,
    type GroupListResponse as GroupListResponse,
    type GroupAddMemberResponse as GroupAddMemberResponse,
    type GroupArchiveResponse as GroupArchiveResponse,
    type GroupRemoveMemberResponse as GroupRemoveMemberResponse,
    type GroupRenameResponse as GroupRenameResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupListParams as GroupListParams,
    type GroupAddMemberParams as GroupAddMemberParams,
    type GroupArchiveParams as GroupArchiveParams,
    type GroupRemoveMemberParams as GroupRemoveMemberParams,
    type GroupRenameParams as GroupRenameParams,
  };
}
