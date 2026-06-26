// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Members extends APIResource {
  /**
   * Adds a tenant user to a group. The user immediately receives access provided by
   * the group's roles and permission overrides.
   */
  add(userID: string, params: MemberAddParams, options?: RequestOptions): APIPromise<MemberAddResponse> {
    const { tenant_id, group_id, ...body } = params;
    return this._client.put(path`/v1/iam/tenants/${tenant_id}/groups/${group_id}/members/${userID}`, {
      body,
      ...options,
    });
  }

  /**
   * Removes a user from a group without changing the user's direct roles or
   * permission overrides.
   */
  remove(
    userID: string,
    params: MemberRemoveParams,
    options?: RequestOptions,
  ): APIPromise<MemberRemoveResponse> {
    const { tenant_id, group_id, actor_token_identifier } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/groups/${group_id}/members/${userID}`, {
      query: { actor_token_identifier },
      ...options,
    });
  }
}

/**
 * Added a user as a tenant group member.
 */
export interface MemberAddResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberAddResponse.ConvexSourceData;

  /**
   * Tenant group receiving the member.
   */
  group_id: string;

  /**
   * Created or existing group membership ID.
   */
  membership_id: string;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * User ID added to the group.
   */
  user_id: string;
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
     * IAM source version after the operation. Before relying on Convex IAM mirror
     * reads, wait for each returned projection to reach at least this version.
     */
    version: number;
  }
}

/**
 * Removed a user from a tenant group.
 */
export interface MemberRemoveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberRemoveResponse.ConvexSourceData;

  /**
   * Tenant group losing the member.
   */
  group_id: string;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * User ID removed from the group.
   */
  user_id: string;
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
     * IAM source version after the operation. Before relying on Convex IAM mirror
     * reads, wait for each returned projection to reach at least this version.
     */
    version: number;
  }
}

export interface MemberAddParams {
  /**
   * Path param: The tenant ID. Pass `default` to target the deployment's default
   * tenant.
   */
  tenant_id: string;

  /**
   * Path param: The unique identifier of the tenant group.
   */
  group_id: string;

  /**
   * Body param: The signed-in actor's Convex identity tokenIdentifier, passed
   * unchanged by the trusted app backend.
   */
  actor_token_identifier: string | null;
}

export interface MemberRemoveParams {
  /**
   * Path param: The tenant ID. Pass `default` to target the deployment's default
   * tenant.
   */
  tenant_id: string;

  /**
   * Path param: The unique identifier of the tenant group.
   */
  group_id: string;

  /**
   * Query param: The signed-in actor's Convex identity tokenIdentifier, passed
   * unchanged by the trusted app backend.
   */
  actor_token_identifier: string | null;
}

export declare namespace Members {
  export {
    type MemberAddResponse as MemberAddResponse,
    type MemberRemoveResponse as MemberRemoveResponse,
    type MemberAddParams as MemberAddParams,
    type MemberRemoveParams as MemberRemoveParams,
  };
}
