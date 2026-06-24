// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
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
    const {
      tenant_id,
      resource_type,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.post(
      path`/v1/iam/tenants/${tenant_id}/resources/${resource_type}/${resourceID}/grants`,
      {
        body,
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
      },
    );
  }

  /**
   * Replaces direct resource role grants for the listed users and groups.
   */
  replace(
    resourceID: string,
    params: GrantReplaceParams,
    options?: RequestOptions,
  ): APIPromise<GrantReplaceResponse> {
    const {
      tenant_id,
      resource_type,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.put(
      path`/v1/iam/tenants/${tenant_id}/resources/${resource_type}/${resourceID}/grants`,
      {
        body,
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
      },
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
   * Resource grant changed by the operation.
   */
  grant: GrantCreateResponse.UnionMember0 | GrantCreateResponse.UnionMember1;

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
  export interface UnionMember0 {
    /**
     * Grant expiry, or null for a permanent grant.
     */
    expires_at: string | null;

    /**
     * Persisted IAM grant ID.
     */
    grant_id: string;

    /**
     * IAM role granted by this binding.
     */
    role_id: string;

    /**
     * Identifies a role grant.
     */
    type: 'role';

    /**
     * Whether the access entry applies only to this resource or also to descendants
     * authorized through it.
     */
    applies_to?: 'self' | 'self_and_descendants';
  }

  /**
   * One persisted resource permission grant.
   */
  export interface UnionMember1 {
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
     * IAM permission granted or denied by this binding.
     */
    permission_id: string;

    /**
     * Stable IAM permission key.
     */
    permission_key: string;

    /**
     * Identifies a direct permission grant.
     */
    type: 'permission';

    /**
     * Whether the access entry applies only to this resource or also to descendants
     * authorized through it.
     */
    applies_to?: 'self' | 'self_and_descendants';
  }
}

/**
 * Result of replacing direct role grants on one resource.
 */
export interface GrantReplaceResponse {
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
   * Subjects reconciled by the replacement.
   */
  subjects: Array<GrantReplaceResponse.Subject>;

  /**
   * Tenant containing the resource.
   */
  tenant_id: string;
}

export namespace GrantReplaceResponse {
  /**
   * One subject and its complete resulting resource grants.
   */
  export interface Subject {
    /**
     * Complete resulting grant set.
     */
    grants: Array<Subject.UnionMember0 | Subject.UnionMember1>;

    /**
     * User or group receiving a resource role grant.
     */
    subject: Subject.UnionMember0 | Subject.UnionMember1;
  }

  export namespace Subject {
    /**
     * One persisted resource role grant.
     */
    export interface UnionMember0 {
      /**
       * Grant expiry, or null for a permanent grant.
       */
      expires_at: string | null;

      /**
       * Persisted IAM grant ID.
       */
      grant_id: string;

      /**
       * IAM role granted by this binding.
       */
      role_id: string;

      /**
       * Identifies a role grant.
       */
      type: 'role';

      /**
       * Whether the access entry applies only to this resource or also to descendants
       * authorized through it.
       */
      applies_to?: 'self' | 'self_and_descendants';
    }

    /**
     * One persisted resource permission grant.
     */
    export interface UnionMember1 {
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
       * IAM permission granted or denied by this binding.
       */
      permission_id: string;

      /**
       * Stable IAM permission key.
       */
      permission_key: string;

      /**
       * Identifies a direct permission grant.
       */
      type: 'permission';

      /**
       * Whether the access entry applies only to this resource or also to descendants
       * authorized through it.
       */
      applies_to?: 'self' | 'self_and_descendants';
    }

    export interface UnionMember0 {
      /**
       * Grant access directly to a tenant user.
       */
      type: 'user';

      /**
       * Hercules Auth user ID receiving the grant.
       */
      user_id: string;
    }

    export interface UnionMember1 {
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
   * Body param: Role conferred by this grant.
   */
  role: GrantCreateParams.ID | GrantCreateParams.Key;

  /**
   * Body param: User or group receiving a resource role grant.
   */
  subject: GrantCreateParams.UnionMember0 | GrantCreateParams.UnionMember1;

  /**
   * Header param: Authority used for this operation: service or user.
   */
  'X-Hercules-IAM-Actor': 'service' | 'user';

  /**
   * Body param: Whether the access entry applies only to this resource or also to
   * descendants authorized through it.
   */
  applies_to?: 'self' | 'self_and_descendants';

  /**
   * Body param: Grant expiry, or null for a permanent grant.
   */
  expires_at?: string | null;

  /**
   * Header param: Signed Hercules Auth ID token. Required for user and omitted for
   * service.
   */
  'X-Hercules-User-ID-Token'?: string;
}

export namespace GrantCreateParams {
  export interface ID {
    /**
     * Existing IAM role ID.
     */
    id: string;
  }

  export interface Key {
    /**
     * Stable role key from the deployment's IAM catalog.
     */
    key: string;
  }

  export interface UnionMember0 {
    /**
     * Grant access directly to a tenant user.
     */
    type: 'user';

    /**
     * Hercules Auth user ID receiving the grant.
     */
    user_id: string;
  }

  export interface UnionMember1 {
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

export interface GrantReplaceParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Path param
   */
  resource_type: string;

  /**
   * Body param: Subjects whose complete direct resource grants are replaced.
   */
  subjects: Array<GrantReplaceParams.Subject>;

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

export namespace GrantReplaceParams {
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
    subject: Subject.UnionMember0 | Subject.UnionMember1;
  }

  export namespace Subject {
    /**
     * One role grant on a resource.
     */
    export interface Grant {
      /**
       * Role conferred by this grant.
       */
      role: Grant.ID | Grant.Key;

      /**
       * Whether the access entry applies only to this resource or also to descendants
       * authorized through it.
       */
      applies_to?: 'self' | 'self_and_descendants';

      /**
       * Grant expiry, or null for a permanent grant.
       */
      expires_at?: string | null;
    }

    export namespace Grant {
      export interface ID {
        /**
         * Existing IAM role ID.
         */
        id: string;
      }

      export interface Key {
        /**
         * Stable role key from the deployment's IAM catalog.
         */
        key: string;
      }
    }

    export interface UnionMember0 {
      /**
       * Grant access directly to a tenant user.
       */
      type: 'user';

      /**
       * Hercules Auth user ID receiving the grant.
       */
      user_id: string;
    }

    export interface UnionMember1 {
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
    type GrantReplaceResponse as GrantReplaceResponse,
    type GrantCreateParams as GrantCreateParams,
    type GrantReplaceParams as GrantReplaceParams,
  };
}
