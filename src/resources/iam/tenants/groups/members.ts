// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Members extends APIResource {
  /**
   * Adds one tenant user as a member of a group.
   */
  add(userID: string, params: MemberAddParams, options?: RequestOptions): APIPromise<MemberAddResponse> {
    const { tenant_id, group_id, ...body } = params;
    return this._client.put(path`/v1/iam/tenants/${tenant_id}/groups/${group_id}/members/${userID}`, {
      body,
      ...options,
    });
  }

  /**
   * Removes one tenant user from a group.
   */
  remove(
    userID: string,
    params: MemberRemoveParams,
    options?: RequestOptions,
  ): APIPromise<MemberRemoveResponse> {
    const { tenant_id, group_id, user_token_identifier } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/groups/${group_id}/members/${userID}`, {
      query: { user_token_identifier },
      ...options,
    });
  }
}

/**
 * Added a user as a tenant group member.
 */
export interface MemberAddResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Tenant group receiving the member.
   */
  group_id: string;

  /**
   * Created or existing group membership ID.
   */
  membership_id: string;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * Hercules Auth user ID added to the group.
   */
  user_id: string;
}

/**
 * Removed a user from a tenant group.
 */
export interface MemberRemoveResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Tenant group losing the member.
   */
  group_id: string;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * Hercules Auth user ID removed from the group.
   */
  user_id: string;
}

export interface MemberAddParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Path param
   */
  group_id: string;

  /**
   * Body param: Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;
}

export interface MemberRemoveParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Path param
   */
  group_id: string;

  /**
   * Query param: Convex identity tokenIdentifier asserted by the trusted app
   * backend.
   */
  user_token_identifier: string | null;
}

export declare namespace Members {
  export {
    type MemberAddResponse as MemberAddResponse,
    type MemberRemoveResponse as MemberRemoveResponse,
    type MemberAddParams as MemberAddParams,
    type MemberRemoveParams as MemberRemoveParams,
  };
}
