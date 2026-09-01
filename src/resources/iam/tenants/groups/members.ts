// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../../resource';
import { APIPromise } from '../../../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../../../core/pagination';
import type { RequestOptions } from '../../../../internal/request-options';
import { path as __scalarPath } from '../../../../internal/utils/path';

export class Members extends APIResource {
  /**
   * Adds a tenant member to a group.
   *
   * @param {string} membershipID - The user's tenant membership ID, as returned by IAM member reads. It identifies the user's membership in the tenant, not the user id.
   * @param {MemberAddParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberAddResponse>} The group membership
   *
   * @example
   * ```ts
   * const member = await client.iam.tenants.groups.members.add('membershipId', {
   *   tenant_id: 'tenantId',
   *   group_id: 'groupId',
   *   actor_user_id: 'x',
   * });
   * ```
   */
  add(
    membershipID: string,
    params: MemberAddParams,
    options?: RequestOptions,
  ): APIPromise<MemberAddResponse> {
    const { tenant_id, group_id, ...body } = params;
    return this._client.put(
      __scalarPath`/v1/iam/tenants/${tenant_id}/groups/${group_id}/members/${membershipID}`,
      { body, ...options },
    );
  }

  /**
   * Lists the active members of one tenant group, newest first.
   *
   * @param {string} groupID - The unique identifier of the tenant group.
   * @param {MemberListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<IamGroupMembersCursorIDPage, MemberListResponse>} The group member page
   *
   * @example
   * ```ts
   * const page = await client.iam.tenants.groups.members.list('groupId', {
   *   tenant_id: 'tenantId',
   * });
   * ```
   */
  list(
    groupID: string,
    params: MemberListParams,
    options?: RequestOptions,
  ): PagePromise<IamGroupMembersCursorIDPage, MemberListResponse> {
    const { tenant_id, ...query } = params;
    return this._client.getAPIList(
      __scalarPath`/v1/iam/tenants/${tenant_id}/groups/${groupID}/members`,
      CursorIDPage<MemberListResponse>,
      { query, ...options },
    );
  }

  /**
   * Removes a tenant member from a group.
   *
   * @param {string} membershipID - The user's tenant membership ID, as returned by IAM member reads. It identifies the user's membership in the tenant, not the user id.
   * @param {MemberRemoveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberRemoveResponse>} The removed group membership
   *
   * @example
   * ```ts
   * const member = await client.iam.tenants.groups.members.remove('membershipId', {
   *   tenant_id: 'tenantId',
   *   group_id: 'groupId',
   * });
   * ```
   */
  remove(
    membershipID: string,
    params: MemberRemoveParams,
    options?: RequestOptions,
  ): APIPromise<MemberRemoveResponse> {
    const { tenant_id, group_id, actor_user_id } = params;
    return this._client.delete(
      __scalarPath`/v1/iam/tenants/${tenant_id}/groups/${group_id}/members/${membershipID}`,
      { query: { actor_user_id }, ...options },
    );
  }
}

export interface MemberAddParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
  /**
   * Path param: The unique identifier of the tenant group.
   */
  group_id: string;
  /**
   * Body param: The signed-in end user's ID to attribute the write to that user, or null to attribute it to the service API key.
   * @minLength 1
   */
  actor_user_id: string | null;
}

export interface MemberAddResponse {
  /**
   * Tenant group changed by the operation.
   * @minLength 1
   */
  group_id: string;
  /**
   * The user's tenant membership ID added to or removed from the group.
   * @minLength 1
   */
  membership_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberAddResponse.ConvexSourceData;
}

export namespace MemberAddResponse {
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

export interface MemberListParams extends CursorIDPageParams {
  /**
   * The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
}

export interface MemberListResponse {
  /**
   * The group membership ID (the link between a tenant membership and a group).
   * @minLength 1
   */
  group_membership_id: string;
  /**
   * The user's tenant membership ID that belongs to the group.
   * @minLength 1
   */
  membership_id: string;
  /**
   * The member's Hercules Auth user id (the end user's OIDC subject).
   */
  user_id: string;
  /**
   * Tenant user lifecycle status.
   */
  status: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';
  /**
   * How the member was added to the group.
   */
  source: 'system' | 'manual';
  /**
   * The member's display name, if known.
   */
  user_name: string | null;
  /**
   * The member's email address, if known.
   */
  user_email: string | null;
  /**
   * The member's avatar URL, if any.
   */
  user_image: string | null;
  /**
   * When the member was added to the group.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created_at: string;
}

export type IamGroupMembersCursorIDPage = CursorIDPage<MemberListResponse>;

export interface MemberRemoveParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
  /**
   * Path param: The unique identifier of the tenant group.
   */
  group_id: string;
  /**
   * Query param: The signed-in end user's ID to attribute the operation to that user, or omitted for service authority.
   */
  actor_user_id?: string;
}

export interface MemberRemoveResponse {
  /**
   * Tenant group changed by the operation.
   * @minLength 1
   */
  group_id: string;
  /**
   * The user's tenant membership ID added to or removed from the group.
   * @minLength 1
   */
  membership_id: string;
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberRemoveResponse.ConvexSourceData;
}

export namespace MemberRemoveResponse {
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
export declare namespace Members {
  export {
    type MemberAddResponse as MemberAddResponse,
    type MemberListResponse as MemberListResponse,
    type MemberRemoveResponse as MemberRemoveResponse,
    type IamGroupMembersCursorIDPage as IamGroupMembersCursorIDPage,
    type MemberAddParams as MemberAddParams,
    type MemberListParams as MemberListParams,
    type MemberRemoveParams as MemberRemoveParams,
  };
}
