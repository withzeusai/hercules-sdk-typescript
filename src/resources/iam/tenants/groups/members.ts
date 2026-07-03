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

export declare namespace Members {
  export { type MemberListResponse as MemberListResponse, type MemberListParams as MemberListParams };
}
