// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class PermissionOverrides extends APIResource {
  /**
   * Replaces direct allow and deny permission overrides for one subject and resource
   * target.
   */
  replace(
    tenantID: string,
    params: PermissionOverrideReplaceParams,
    options?: RequestOptions,
  ): APIPromise<PermissionOverrideReplaceResponse> {
    const {
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.put(path`/v1/iam/tenants/${tenantID}/resource-permission-overrides`, {
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
    });
  }
}

/**
 * Result of replacing direct resource permission overrides.
 */
export interface PermissionOverrideReplaceResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Complete resulting direct permission override set.
   */
  grants: Array<PermissionOverrideReplaceResponse.Grant>;

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

export namespace PermissionOverrideReplaceResponse {
  /**
   * One persisted resource permission grant.
   */
  export interface Grant {
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

export type PermissionOverrideReplaceParams =
  | PermissionOverrideReplaceParams.Variant0
  | PermissionOverrideReplaceParams.Variant1;

export declare namespace PermissionOverrideReplaceParams {
  export interface Variant0 {
    /**
     * Body param: Complete desired permission override set.
     */
    overrides: Array<Variant0.Override>;

    /**
     * Body param: Canonical app resource type, such as app.projects.
     */
    resource_type: string;

    /**
     * Body param: User, group, or role receiving resource permission overrides.
     */
    subject: Variant0.UnionMember0 | Variant0.UnionMember1 | Variant0.UnionMember2;

    /**
     * Body param: All resources of this type.
     */
    target: Variant0.Target;

    /**
     * Header param: Authority used for this operation: service or user.
     */
    'X-Hercules-IAM-Actor': 'service' | 'user';

    /**
     * Body param: Type-wide overrides apply independently to each exact resource.
     */
    applies_to?: 'self';

    /**
     * Header param: Signed Hercules Auth ID token. Required for user and omitted for
     * service.
     */
    'X-Hercules-User-ID-Token'?: string;
  }

  export namespace Variant0 {
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

    export interface UnionMember0 {
      /**
       * Apply overrides to one tenant user.
       */
      type: 'user';

      /**
       * Hercules Auth user ID receiving the overrides.
       */
      user_id: string;
    }

    export interface UnionMember1 {
      /**
       * Tenant group ID receiving the overrides.
       */
      group_id: string;

      /**
       * Apply overrides to one tenant group.
       */
      type: 'group';
    }

    export interface UnionMember2 {
      /**
       * Role receiving the overrides.
       */
      role: UnionMember2.ID | UnionMember2.Key;

      /**
       * Apply overrides to one IAM role.
       */
      type: 'role';
    }

    export namespace UnionMember2 {
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

    /**
     * All resources of this type.
     */
    export interface Target {
      /**
       * Apply to every resource of this type.
       */
      type: 'all';
    }
  }

  export interface Variant1 {
    /**
     * Body param: Complete desired permission override set.
     */
    overrides: Array<Variant1.Override>;

    /**
     * Body param: Canonical app resource type, such as app.projects.
     */
    resource_type: string;

    /**
     * Body param: User, group, or role receiving resource permission overrides.
     */
    subject: Variant1.UnionMember0 | Variant1.UnionMember1 | Variant1.UnionMember2;

    /**
     * Body param: One exact resource.
     */
    target: Variant1.Target;

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
     * Header param: Signed Hercules Auth ID token. Required for user and omitted for
     * service.
     */
    'X-Hercules-User-ID-Token'?: string;
  }

  export namespace Variant1 {
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

    export interface UnionMember0 {
      /**
       * Apply overrides to one tenant user.
       */
      type: 'user';

      /**
       * Hercules Auth user ID receiving the overrides.
       */
      user_id: string;
    }

    export interface UnionMember1 {
      /**
       * Tenant group ID receiving the overrides.
       */
      group_id: string;

      /**
       * Apply overrides to one tenant group.
       */
      type: 'group';
    }

    export interface UnionMember2 {
      /**
       * Role receiving the overrides.
       */
      role: UnionMember2.ID | UnionMember2.Key;

      /**
       * Apply overrides to one IAM role.
       */
      type: 'role';
    }

    export namespace UnionMember2 {
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

    /**
     * One exact resource.
     */
    export interface Target {
      /**
       * Exact application resource ID.
       */
      resource_id: string;

      /**
       * Apply to one exact resource.
       */
      type: 'resource';
    }
  }
}

export declare namespace PermissionOverrides {
  export {
    type PermissionOverrideReplaceResponse as PermissionOverrideReplaceResponse,
    type PermissionOverrideReplaceParams as PermissionOverrideReplaceParams,
  };
}
