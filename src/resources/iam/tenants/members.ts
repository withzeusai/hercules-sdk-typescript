// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Members extends APIResource {
  /**
   * Adds an end user to the tenant, optionally with a role.
   */
  create(
    tenantID: string,
    body: MemberCreateParams,
    options?: RequestOptions,
  ): APIPromise<MemberCreateResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/members`, { body, ...options });
  }

  /**
   * Lists a tenant's members, newest first. Filter by status, by a role the member
   * directly holds, or by the member's Hercules Auth user id.
   */
  list(
    tenantID: string,
    query: MemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MemberListResponse> {
    return this._client.get(path`/v1/iam/tenants/${tenantID}/members`, { query, ...options });
  }
}

/**
 * Added tenant member.
 */
export interface MemberCreateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: MemberCreateResponse.ConvexSourceData;

  /**
   * The user's tenant membership ID, created by adding them to the tenant.
   */
  membership_id: string;

  /**
   * Hercules IAM identifier.
   */
  role_assignment_id: string | null;
}

export namespace MemberCreateResponse {
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
 * Paginated tenant members.
 */
export interface MemberListResponse {
  /**
   * Member page.
   */
  data: Array<MemberListResponse.Data>;

  /**
   * Whether more records are available after this page.
   */
  has_more: boolean;
}

export namespace MemberListResponse {
  /**
   * One tenant member.
   */
  export interface Data {
    /**
     * Membership creation timestamp.
     */
    created_at: string;

    /**
     * The user's tenant membership ID.
     */
    membership_id: string;

    /**
     * Tenant user lifecycle status.
     */
    status: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';

    /**
     * Tenant the member belongs to.
     */
    tenant_id: string;

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

export interface MemberCreateParams {
  /**
   * The signed-in end user's Hercules Auth tokenIdentifier, passed unchanged by the
   * trusted app backend. Used for identity and audit only.
   */
  actor_token_identifier: string | null;

  /**
   * The end user's ID (their OIDC subject) to add to the tenant. Do not pass a token
   * identifier.
   */
  user_id: string;

  /**
   * Identifies exactly one IAM role by ID or stable key.
   */
  role?: MemberCreateParams.IamRoleIDReference | MemberCreateParams.IamRoleKeyReference;

  /**
   * Initial membership status. Defaults to `active`.
   */
  status?: 'active' | 'blocked' | 'suspended';
}

export namespace MemberCreateParams {
  export interface IamRoleIDReference {
    /**
     * Existing IAM role ID.
     */
    id: string;
  }

  export interface IamRoleKeyReference {
    /**
     * Stable role key from the deployment's IAM catalog.
     */
    key: string;
  }
}

export interface MemberListParams {
  /**
   * Maximum number of records to return. Defaults to 50.
   */
  limit?: number;

  /**
   * Return only members that directly hold this tenant-wide role.
   */
  role_id?: string;

  /**
   * Cursor for forward pagination. Pass the ID of the last item from the previous
   * page.
   */
  starting_after?: string;

  /**
   * Filter by membership status.
   */
  status?: 'active' | 'blocked' | 'suspended' | 'pending_approval' | 'removed';

  /**
   * Return the member for this Hercules Auth user id (the end user's OIDC subject);
   * an exact match.
   */
  user_id?: string;
}

export declare namespace Members {
  export {
    type MemberCreateResponse as MemberCreateResponse,
    type MemberListResponse as MemberListResponse,
    type MemberCreateParams as MemberCreateParams,
    type MemberListParams as MemberListParams,
  };
}
