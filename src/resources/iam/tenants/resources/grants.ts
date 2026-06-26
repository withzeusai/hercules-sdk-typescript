// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Grants extends APIResource {
  /**
   * Grants a role to one user or group on an exact resource. The grant can apply
   * only to that resource or also to its descendants.
   */
  create(
    resourceID: string,
    params: GrantCreateParams,
    options?: RequestOptions,
  ): APIPromise<GrantCreateResponse> {
    const { tenant_id, resource_type, ...body } = params;
    return this._client.post(
      path`/v1/iam/tenants/${tenant_id}/resources/${resource_type}/${resourceID}/grants`,
      { body, ...options },
    );
  }

  /**
   * Replaces the complete direct resource role grants for each listed user or group.
   * Empty grant lists clear those role grants; unlisted users, groups, and
   * permission overrides are unchanged.
   */
  update(
    resourceID: string,
    params: GrantUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GrantUpdateResponse> {
    const { tenant_id, resource_type, ...body } = params;
    return this._client.patch(
      path`/v1/iam/tenants/${tenant_id}/resources/${resource_type}/${resourceID}/grants`,
      { body, ...options },
    );
  }
}

/**
 * Result of changing one resource role grant.
 */
export interface GrantCreateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GrantCreateResponse.ConvexSourceData;

  /**
   * One persisted resource role or permission grant.
   */
  grant:
    | GrantCreateResponse.IamResourceRoleGrantResult
    | GrantCreateResponse.IamResourcePermissionGrantResult;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

export namespace GrantCreateResponse {
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
   * One persisted resource role grant.
   */
  export interface IamResourceRoleGrantResult {
    /**
     * Whether the grant applies only to this resource or also to descendants.
     */
    applies_to: 'self' | 'self_and_descendants';

    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at: string | null;

    /**
     * Persisted IAM grant ID.
     */
    grant_id: string;

    /**
     * IAM role conferred by this grant.
     */
    role_id: string;

    /**
     * Identifies a resource role grant.
     */
    type: 'resource_role';
  }

  /**
   * One persisted resource permission grant.
   */
  export interface IamResourcePermissionGrantResult {
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

/**
 * Result of updating direct role grants on one resource.
 */
export interface GrantUpdateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: GrantUpdateResponse.ConvexSourceData;

  /**
   * Exact application resource ID.
   */
  resource_id: string;

  /**
   * Canonical app resource type, such as app.projects.
   */
  resource_type: string;

  /**
   * Subjects reconciled by the update.
   */
  subjects: Array<GrantUpdateResponse.Subject>;

  /**
   * Tenant containing the resource.
   */
  tenant_id: string;
}

export namespace GrantUpdateResponse {
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
   * One subject and its complete resulting resource grants.
   */
  export interface Subject {
    /**
     * Complete resulting grant set.
     */
    grants: Array<Subject.IamResourceRoleGrantResult | Subject.IamResourcePermissionGrantResult>;

    /**
     * User or group receiving a resource role grant.
     */
    subject: Subject.IamResourceGrantUserSubject | Subject.IamResourceGrantGroupSubject;
  }

  export namespace Subject {
    /**
     * One persisted resource role grant.
     */
    export interface IamResourceRoleGrantResult {
      /**
       * Whether the grant applies only to this resource or also to descendants.
       */
      applies_to: 'self' | 'self_and_descendants';

      /**
       * Grant expiry, or null for a permanent grant.
       */
      expires_at: string | null;

      /**
       * Persisted IAM grant ID.
       */
      grant_id: string;

      /**
       * IAM role conferred by this grant.
       */
      role_id: string;

      /**
       * Identifies a resource role grant.
       */
      type: 'resource_role';
    }

    /**
     * One persisted resource permission grant.
     */
    export interface IamResourcePermissionGrantResult {
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

    export interface IamResourceGrantUserSubject {
      /**
       * Grant access directly to a tenant user.
       */
      type: 'user';

      /**
       * Target tenant user ID receiving the grant. Do not pass a token identifier.
       */
      user_id: string;
    }

    export interface IamResourceGrantGroupSubject {
      /**
       * Tenant group ID receiving the grant.
       */
      group_id: string;

      /**
       * Grant access to a tenant group.
       */
      type: 'group';
    }
  }
}

export interface GrantCreateParams {
  /**
   * Path param: The tenant ID. Pass `root` to target the deployment's root tenant.
   */
  tenant_id: string;

  /**
   * Path param: The canonical app resource type, such as `app.projects`.
   */
  resource_type: string;

  /**
   * Body param: The signed-in actor's Convex identity tokenIdentifier, passed
   * unchanged by the trusted app backend.
   */
  actor_token_identifier: string | null;

  /**
   * Body param: Role receiving the overrides.
   */
  role: GrantCreateParams.IamRoleIDReference | GrantCreateParams.IamRoleKeyReference;

  /**
   * Body param: User or group receiving a resource role grant.
   */
  subject: GrantCreateParams.IamResourceGrantUserSubject | GrantCreateParams.IamResourceGrantGroupSubject;

  /**
   * Body param: Whether the grant applies only to this resource or also to
   * descendants authorized through it. Defaults to `self`.
   */
  applies_to?: 'self' | 'self_and_descendants';

  /**
   * Body param: Grant expiry. Omit or pass null for a permanent grant.
   */
  expires_at?: string | null;
}

export namespace GrantCreateParams {
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

  export interface IamResourceGrantUserSubject {
    /**
     * Grant access directly to a tenant user.
     */
    type: 'user';

    /**
     * Target tenant user ID receiving the grant. Do not pass a token identifier.
     */
    user_id: string;
  }

  export interface IamResourceGrantGroupSubject {
    /**
     * Tenant group ID receiving the grant.
     */
    group_id: string;

    /**
     * Grant access to a tenant group.
     */
    type: 'group';
  }
}

export interface GrantUpdateParams {
  /**
   * Path param: The tenant ID. Pass `root` to target the deployment's root tenant.
   */
  tenant_id: string;

  /**
   * Path param: The canonical app resource type, such as `app.projects`.
   */
  resource_type: string;

  /**
   * Body param: The signed-in actor's Convex identity tokenIdentifier, passed
   * unchanged by the trusted app backend.
   */
  actor_token_identifier: string | null;

  /**
   * Body param: Subjects whose complete direct resource grants are updated.
   */
  subjects?: Array<GrantUpdateParams.Subject>;
}

export namespace GrantUpdateParams {
  /**
   * One subject and its complete desired resource grants.
   */
  export interface Subject {
    /**
     * Complete desired role grants for this subject.
     */
    grants: Array<Subject.Grant>;

    /**
     * User or group receiving a resource role grant.
     */
    subject: Subject.IamResourceGrantUserSubject | Subject.IamResourceGrantGroupSubject;
  }

  export namespace Subject {
    /**
     * One role grant on a resource.
     */
    export interface Grant {
      /**
       * Role receiving the overrides.
       */
      role: Grant.IamRoleIDReference | Grant.IamRoleKeyReference;

      /**
       * Whether the grant applies only to this resource or also to descendants
       * authorized through it. Defaults to `self`.
       */
      applies_to?: 'self' | 'self_and_descendants';

      /**
       * Grant expiry. Omit or pass null for a permanent grant.
       */
      expires_at?: string | null;
    }

    export namespace Grant {
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

    export interface IamResourceGrantUserSubject {
      /**
       * Grant access directly to a tenant user.
       */
      type: 'user';

      /**
       * Target tenant user ID receiving the grant. Do not pass a token identifier.
       */
      user_id: string;
    }

    export interface IamResourceGrantGroupSubject {
      /**
       * Tenant group ID receiving the grant.
       */
      group_id: string;

      /**
       * Grant access to a tenant group.
       */
      type: 'group';
    }
  }
}

export declare namespace Grants {
  export {
    type GrantCreateResponse as GrantCreateResponse,
    type GrantUpdateResponse as GrantUpdateResponse,
    type GrantCreateParams as GrantCreateParams,
    type GrantUpdateParams as GrantUpdateParams,
  };
}
