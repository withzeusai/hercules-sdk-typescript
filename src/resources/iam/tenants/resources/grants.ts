// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Grants extends APIResource {
  /**
   * Grants one IAM role to a tenant user or group on an exact resource.
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
   * Updates direct resource role grants for the listed users and groups.
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
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * One persisted resource role or permission grant.
   */
  grant:
    | GrantCreateResponse.IamResourceRoleGrantResult
    | GrantCreateResponse.IamResourcePermissionGrantResult;

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
}

export namespace GrantCreateResponse {
  /**
   * One persisted resource role grant.
   */
  export interface IamResourceRoleGrantResult {
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

    /**
     * Whether the grant applies only to this resource or also to descendants
     * authorized through it.
     */
    applies_to?: 'self' | 'self_and_descendants';
  }

  /**
   * One persisted resource permission grant.
   */
  export interface IamResourcePermissionGrantResult {
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

    /**
     * Whether the grant applies only to this resource or also to descendants
     * authorized through it.
     */
    applies_to?: 'self' | 'self_and_descendants';
  }
}

/**
 * Result of updating direct role grants on one resource.
 */
export interface GrantUpdateResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * Exact application resource ID.
   */
  resource_id: string;

  /**
   * Canonical app resource type, such as app.projects.
   */
  resource_type: string;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

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

      /**
       * Whether the grant applies only to this resource or also to descendants
       * authorized through it.
       */
      applies_to?: 'self' | 'self_and_descendants';
    }

    /**
     * One persisted resource permission grant.
     */
    export interface IamResourcePermissionGrantResult {
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

      /**
       * Whether the grant applies only to this resource or also to descendants
       * authorized through it.
       */
      applies_to?: 'self' | 'self_and_descendants';
    }

    export interface IamResourceGrantUserSubject {
      /**
       * Grant access directly to a tenant user.
       */
      type: 'user';

      /**
       * Hercules Auth user ID receiving the grant.
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
   * Path param
   */
  tenant_id: string;

  /**
   * Path param
   */
  resource_type: string;

  /**
   * Body param: Role receiving the overrides.
   */
  role: GrantCreateParams.IamRoleIDReference | GrantCreateParams.IamRoleKeyReference;

  /**
   * Body param: User or group receiving a resource role grant.
   */
  subject: GrantCreateParams.IamResourceGrantUserSubject | GrantCreateParams.IamResourceGrantGroupSubject;

  /**
   * Body param: Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;

  /**
   * Body param: Whether the grant applies only to this resource or also to
   * descendants authorized through it.
   */
  applies_to?: 'self' | 'self_and_descendants';

  /**
   * Body param: Grant expiry, or null for a permanent grant.
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
     * Hercules Auth user ID receiving the grant.
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
   * Path param
   */
  tenant_id: string;

  /**
   * Path param
   */
  resource_type: string;

  /**
   * Body param: Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;

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
       * authorized through it.
       */
      applies_to?: 'self' | 'self_and_descendants';

      /**
       * Grant expiry, or null for a permanent grant.
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
       * Hercules Auth user ID receiving the grant.
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
