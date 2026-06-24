// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Members extends APIResource {
  /**
   * Adds one tenant user as a member of a group.
   */
  add(userID: string, params: MemberAddParams, options?: RequestOptions): APIPromise<MemberAddResponse> {
    const {
      tenant_id,
      group_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
    } = params;
    return this._client.put(path`/v1/iam/tenants/${tenant_id}/groups/${group_id}/members/${userID}`, {
      ...options,
      headers: buildHeaders([
        {
          'X-Hercules-IAM-Actor': xHerculesIamActor.toString(),
          ...(xHerculesUserIDToken != null ?
            { 'X-Hercules-User-ID-Token': xHerculesUserIDToken }
          : undefined),
        },
        options?.headers,
      ]),
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
    const {
      tenant_id,
      group_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
    } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/groups/${group_id}/members/${userID}`, {
      ...options,
      headers: buildHeaders([
        {
          'X-Hercules-IAM-Actor': xHerculesIamActor.toString(),
          ...(xHerculesUserIDToken != null ?
            { 'X-Hercules-User-ID-Token': xHerculesUserIDToken }
          : undefined),
        },
        options?.headers,
      ]),
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
   * Header param: Authority used for this operation: service or user.
   */
  'X-Hercules-IAM-Actor': 'service' | 'user';

  /**
   * Header param: Signed Hercules Auth ID token. Required for user and omitted for
   * service.
   */
  'X-Hercules-User-ID-Token'?: string;
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
   * Header param: Authority used for this operation: service or user.
   */
  'X-Hercules-IAM-Actor': 'service' | 'user';

  /**
   * Header param: Signed Hercules Auth ID token. Required for user and omitted for
   * service.
   */
  'X-Hercules-User-ID-Token'?: string;
}

export declare namespace Members {
  export {
    type MemberAddResponse as MemberAddResponse,
    type MemberRemoveResponse as MemberRemoveResponse,
    type MemberAddParams as MemberAddParams,
    type MemberRemoveParams as MemberRemoveParams,
  };
}
