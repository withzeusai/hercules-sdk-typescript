// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class PermissionOverrides extends APIResource {
  /**
   * Replaces direct allow and deny permission overrides for one user, group, or
   * role. An empty list clears the selected overrides; omitting the list makes no
   * change. Overrides can target one resource or every resource of a type and can
   * optionally apply to descendants.
   */
  update(
    tenantID: string,
    body: PermissionOverrideUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PermissionOverrideUpdateResponse> {
    return this._client.patch(path`/v1/iam/tenants/${tenantID}/resource/permission-overrides`, {
      body,
      ...options,
    });
  }
}

/**
 * Result of updating direct resource permission overrides.
 */
export interface PermissionOverrideUpdateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: PermissionOverrideUpdateResponse.ConvexSourceData;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * Complete resulting direct permission override set.
   */
  grants?: Array<PermissionOverrideUpdateResponse.Grant>;
}

export namespace PermissionOverrideUpdateResponse {
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

  /**
   * One persisted resource permission grant.
   */
  export interface Grant {
    /**
     * Whether the grant applies only to this resource or also to descendants.
     */
    applies_to: 'self' | 'self_and_descendants';

    /**
     * Whether the permission is allowed or denied.
     */
    effect: 'allow' | 'deny';

    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at: string | null;

    /**
     * Persisted IAM grant ID.
     */
    grant_id: string;

    /**
     * IAM permission granted or denied by this grant.
     */
    permission_id: string;

    /**
     * Stable IAM permission key.
     */
    permission_key: string;

    /**
     * Identifies a resource permission grant.
     */
    type: 'resource_permission';
  }
}

export interface PermissionOverrideUpdateParams {
  /**
   * The signed-in actor's Convex identity tokenIdentifier, passed unchanged by the
   * trusted app backend.
   */
  actor_token_identifier: string | null;

  /**
   * Resource selection receiving permission overrides.
   */
  resource:
    | PermissionOverrideUpdateParams.IamAllResourcesSelection
    | PermissionOverrideUpdateParams.IamExactResourceSelection;

  /**
   * Canonical app resource type, such as app.projects.
   */
  resource_type: string;

  /**
   * User, group, or role receiving resource permission overrides.
   */
  subject:
    | PermissionOverrideUpdateParams.IamResourcePermissionOverrideUserSubject
    | PermissionOverrideUpdateParams.IamResourcePermissionOverrideGroupSubject
    | PermissionOverrideUpdateParams.IamResourcePermissionOverrideRoleSubject;

  /**
   * Whether the grant applies only to this resource or also to descendants
   * authorized through it. Defaults to `self`.
   */
  applies_to?: 'self' | 'self_and_descendants';

  /**
   * Complete desired permission override set.
   */
  overrides?: Array<PermissionOverrideUpdateParams.Override>;
}

export namespace PermissionOverrideUpdateParams {
  /**
   * All resources of this type.
   */
  export interface IamAllResourcesSelection {
    /**
     * Apply to every resource of this type.
     */
    type: 'all';
  }

  /**
   * One exact resource.
   */
  export interface IamExactResourceSelection {
    /**
     * Exact application resource ID.
     */
    resource_id: string;

    /**
     * Apply to one exact resource.
     */
    type: 'resource';
  }

  export interface IamResourcePermissionOverrideUserSubject {
    /**
     * Apply overrides to one tenant user.
     */
    type: 'user';

    /**
     * Target tenant user ID receiving the overrides. Do not pass a token identifier.
     */
    user_id: string;
  }

  export interface IamResourcePermissionOverrideGroupSubject {
    /**
     * Tenant group ID receiving the overrides.
     */
    group_id: string;

    /**
     * Apply overrides to one tenant group.
     */
    type: 'group';
  }

  export interface IamResourcePermissionOverrideRoleSubject {
    /**
     * Role receiving the overrides.
     */
    role:
      | IamResourcePermissionOverrideRoleSubject.IamRoleIDReference
      | IamResourcePermissionOverrideRoleSubject.IamRoleKeyReference;

    /**
     * Apply overrides to one IAM role.
     */
    type: 'role';
  }

  export namespace IamResourcePermissionOverrideRoleSubject {
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

  /**
   * One resource permission override.
   */
  export interface Override {
    /**
     * Whether the permission is allowed or denied.
     */
    effect: 'allow' | 'deny';

    /**
     * Permission changed by this override.
     */
    permission_key: string;

    /**
     * Override expiry, or null for a non-expiring override.
     */
    expires_at?: string | null;
  }
}

export declare namespace PermissionOverrides {
  export {
    type PermissionOverrideUpdateResponse as PermissionOverrideUpdateResponse,
    type PermissionOverrideUpdateParams as PermissionOverrideUpdateParams,
  };
}
