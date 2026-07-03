// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Members extends APIResource {
  /**
   * Lists the active members of one tenant group, newest first.
   */
  list(groupID: string, params: MemberListParams, options?: RequestOptions): APIPromise<MemberListResponse> {
    const { tenant_id, ...query } = params;
    return this._client.get(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}/members`, {
      query,
      ...options,
    });
  }

  /**
   * Adds a tenant member to a group.
   */
  add(
    membershipID: string,
    params: MemberAddParams,
    options?: RequestOptions,
  ): APIPromise<MemberAddResponse> {
    const { tenant_id, group_id, ...body } = params;
    return this._client.put(path`/v1/iam/tenants/${tenant_id}/groups/${group_id}/members/${membershipID}`, {
      body,
      ...options,
    });
  }

  /**
   * Removes a tenant member from a group.
   */
  remove(
    membershipID: string,
    params: MemberRemoveParams,
    options?: RequestOptions,
  ): APIPromise<MemberRemoveResponse> {
    const { tenant_id, group_id, actor_token_identifier } = params;
    return this._client.delete(
      path`/v1/iam/tenants/${tenant_id}/groups/${group_id}/members/${membershipID}`,
      { query: { actor_token_identifier }, ...options },
    );
  }
}

/**
 * Paginated members of a tenant group.
 */
export interface MemberListResponse {
  /**
   * Group member page.
   */
  data: Array<MemberListResponse.Data>;

  /**
   * Whether more records are available after this page.
   */
  has_more: boolean;
}

export namespace MemberListResponse {
  /**
   * One member of a tenant group.
   */
  export interface Data {
    /**
     * When the member was added to the group.
     */
    created_at: string;

    /**
     * The group membership ID (the link between a tenant membership and a group).
     */
    group_membership_id: string;

    /**
     * The user's tenant membership ID that belongs to the group.
     */
    membership_id: string;

    /**
     * How the member was added to the group.
     */
    source: 'system' | 'manual' | 'invite' | 'migration';

    /**
     * Tenant user lifecycle status.
     */
    status: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';

    /**
     * The member's email address, if known.
     */
    user_email: string | null;

    /**
     * The member's Hercules Auth user id (the end user's OIDC subject).
     */
    user_id: string;

    /**
     * The member's avatar URL, if any.
     */
    user_image: string | null;

    /**
     * The member's display name, if known.
     */
    user_name: string | null;
  }
}

/**
 * Result of changing a tenant group membership.
 */
export interface MemberAddResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberAddResponse.ConvexSourceData;

  /**
   * Tenant group changed by the operation.
   */
  group_id: string;

  /**
   * The user's tenant membership ID added to or removed from the group.
   */
  membership_id: string;
}

export namespace MemberAddResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  export interface ConvexSourceData {
    /**
     * Whether persisted IAM source data changed.
     */
    changed: boolean;

    /**
     * Convex deployment IDs whose IAM mirrors will receive the updated state.
     */
    projection_ids: Array<string>;

    /**
     * Deployment IAM state version after the operation. Before relying on Convex IAM
     * mirror reads, wait for the projection to reach at least this version.
     */
    version: number;
  }
}

/**
 * Result of changing a tenant group membership.
 */
export interface MemberRemoveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberRemoveResponse.ConvexSourceData;

  /**
   * Tenant group changed by the operation.
   */
  group_id: string;

  /**
   * The user's tenant membership ID added to or removed from the group.
   */
  membership_id: string;
}

export namespace MemberRemoveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  export interface ConvexSourceData {
    /**
     * Whether persisted IAM source data changed.
     */
    changed: boolean;

    /**
     * Convex deployment IDs whose IAM mirrors will receive the updated state.
     */
    projection_ids: Array<string>;

    /**
     * Deployment IAM state version after the operation. Before relying on Convex IAM
     * mirror reads, wait for the projection to reach at least this version.
     */
    version: number;
  }
}

export interface MemberListParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary
   * tenant.
   */
  tenant_id: string;

  /**
   * Query param: Maximum number of records to return. Defaults to 50.
   */
  limit?: number;

  /**
   * Query param: Cursor for forward pagination. Pass the ID of the last item from
   * the previous page.
   */
  starting_after?: string;
}

export interface MemberAddParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary
   * tenant.
   */
  tenant_id: string;

  /**
   * Path param: The unique identifier of the tenant group.
   */
  group_id: string;

  /**
   * Body param: The signed-in end user's Hercules Auth tokenIdentifier, passed
   * unchanged by the trusted app backend. Used for identity and audit only.
   */
  actor_token_identifier: string | null;
}

export interface MemberRemoveParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary
   * tenant.
   */
  tenant_id: string;

  /**
   * Path param: The unique identifier of the tenant group.
   */
  group_id: string;

  /**
   * Query param: The signed-in end user's tokenIdentifier to attribute the operation
   * to that user, or omitted for service authority.
   */
  actor_token_identifier?: string;
}

export declare namespace Members {
  export {
    type MemberListResponse as MemberListResponse,
    type MemberAddResponse as MemberAddResponse,
    type MemberRemoveResponse as MemberRemoveResponse,
    type MemberListParams as MemberListParams,
    type MemberAddParams as MemberAddParams,
    type MemberRemoveParams as MemberRemoveParams,
  };
}
