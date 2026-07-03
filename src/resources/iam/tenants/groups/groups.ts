// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MembersAPI from './members';
import { Members } from './members';
import * as PermissionOverridesAPI from './permission-overrides';
import { PermissionOverrides } from './permission-overrides';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Groups extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  permissionOverrides: PermissionOverridesAPI.PermissionOverrides =
    new PermissionOverridesAPI.PermissionOverrides(this._client);

  /**
   * Creates an active group with no members in a tenant.
   */
  create(
    tenantID: string,
    body: GroupCreateParams,
    options?: RequestOptions,
  ): APIPromise<GroupCreateResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/groups`, { body, ...options });
  }

  /**
   * Updates a tenant group's name or description.
   */
  update(
    groupID: string,
    params: GroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GroupUpdateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}`, { body, ...options });
  }

  /**
   * Archives a tenant group so it stops granting access.
   */
  archive(
    groupID: string,
    params: GroupArchiveParams,
    options?: RequestOptions,
  ): APIPromise<GroupArchiveResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}/archive`, {
      body,
      ...options,
    });
  }

  /**
   * Restores an archived tenant group so it grants access again.
   */
  unarchive(
    groupID: string,
    params: GroupUnarchiveParams,
    options?: RequestOptions,
  ): APIPromise<GroupUnarchiveResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(path`/v1/iam/tenants/${tenant_id}/groups/${groupID}/unarchive`, {
      body,
      ...options,
    });
  }
}

/**
 * Created tenant group.
 */
export interface GroupCreateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupCreateResponse.ConvexSourceData;

  /**
   * Created tenant group ID.
   */
  group_id: string;
}

export namespace GroupCreateResponse {
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
 * Result of changing a tenant group.
 */
export interface GroupUpdateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupUpdateResponse.ConvexSourceData;

  /**
   * Tenant group changed by the operation.
   */
  group_id: string;
}

export namespace GroupUpdateResponse {
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
 * Result of changing a tenant group.
 */
export interface GroupArchiveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupArchiveResponse.ConvexSourceData;

  /**
   * Tenant group changed by the operation.
   */
  group_id: string;
}

export namespace GroupArchiveResponse {
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
 * Result of changing a tenant group.
 */
export interface GroupUnarchiveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GroupUnarchiveResponse.ConvexSourceData;

  /**
   * Tenant group changed by the operation.
   */
  group_id: string;
}

export namespace GroupUnarchiveResponse {
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

export interface GroupCreateParams {
  /**
   * The signed-in end user's Hercules Auth tokenIdentifier, passed unchanged by the
   * trusted app backend. Used for identity and audit only.
   */
  actor_token_identifier: string | null;

  /**
   * Human-readable group name.
   */
  name: string;

  /**
   * Optional human-readable group description.
   */
  description?: string | null;
}

export interface GroupUpdateParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary
   * tenant.
   */
  tenant_id: string;

  /**
   * Body param: The signed-in end user's Hercules Auth tokenIdentifier, passed
   * unchanged by the trusted app backend. Used for identity and audit only.
   */
  actor_token_identifier: string | null;

  /**
   * Body param: Optional human-readable group description.
   */
  description?: string | null;

  /**
   * Body param: New human-readable group name. Omit to keep the current name.
   */
  name?: string;
}

export interface GroupArchiveParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary
   * tenant.
   */
  tenant_id: string;

  /**
   * Body param: The signed-in end user's Hercules Auth tokenIdentifier, passed
   * unchanged by the trusted app backend. Used for identity and audit only.
   */
  actor_token_identifier: string | null;
}

export interface GroupUnarchiveParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary
   * tenant.
   */
  tenant_id: string;

  /**
   * Body param: The signed-in end user's Hercules Auth tokenIdentifier, passed
   * unchanged by the trusted app backend. Used for identity and audit only.
   */
  actor_token_identifier: string | null;
}

Groups.Members = Members;
Groups.PermissionOverrides = PermissionOverrides;

export declare namespace Groups {
  export {
    type GroupCreateResponse as GroupCreateResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupArchiveResponse as GroupArchiveResponse,
    type GroupUnarchiveResponse as GroupUnarchiveResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupArchiveParams as GroupArchiveParams,
    type GroupUnarchiveParams as GroupUnarchiveParams,
  };

  export { Members as Members };

  export { PermissionOverrides as PermissionOverrides };
}
