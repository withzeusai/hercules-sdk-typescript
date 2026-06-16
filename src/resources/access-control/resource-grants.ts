// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class ResourceGrants extends APIResource {
  /**
   * Grants a role or permission on one resource.
   */
  create(body: ResourceGrantCreateParams, options?: RequestOptions): APIPromise<ResourceGrantCreateResponse> {
    return this._client.post('/v1/access-control/resource-grants/create', { body, ...options });
  }

  /**
   * Replaces the complete direct role and permission allow grants on one exact
   * resource for explicitly listed existing subjects.
   */
  replace(
    body: ResourceGrantReplaceParams,
    options?: RequestOptions,
  ): APIPromise<ResourceGrantReplaceResponse> {
    return this._client.post('/v1/access-control/resource-grants/replace', { body, ...options });
  }

  /**
   * Revokes an existing resource grant.
   */
  revoke(body: ResourceGrantRevokeParams, options?: RequestOptions): APIPromise<ResourceGrantRevokeResponse> {
    return this._client.post('/v1/access-control/resource-grants/revoke', { body, ...options });
  }
}

/**
 * Access Control write result for one grant.
 */
export interface ResourceGrantCreateResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Role, permission, or resource rule grant ID.
   */
  grant_id: string;

  /**
   * Deployments whose Access Control mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Whether persisted Access Control state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;
}

/**
 * Result of atomically replacing grants on one resource.
 */
export interface ResourceGrantReplaceResponse {
  /**
   * Scope containing the managed resource.
   */
  access_scope_id: string;

  /**
   * Whether any persisted grants changed.
   */
  changed: boolean;

  /**
   * Deployments whose Access Control mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * Exact application resource ID that was updated.
   */
  resource_id: string;

  /**
   * Canonical type of the managed resource.
   */
  resource_type: string;

  /**
   * New deployment source version after the replacement.
   */
  source_version: number;

  /**
   * Final grant sets for the requested principals.
   */
  subjects: Array<ResourceGrantReplaceResponse.Subject>;
}

export namespace ResourceGrantReplaceResponse {
  /**
   * One principal's final resource grant set.
   */
  export interface Subject {
    /**
     * Final persisted grant set for this principal.
     */
    grants: Array<Subject.Grant>;

    /**
     * Principal whose resource grants were replaced.
     */
    principal_id: string;
  }

  export namespace Subject {
    /**
     * Persisted role or permission grant on the resource.
     */
    export interface Grant {
      /**
       * Resource applicability stored for the grant.
       */
      applies_to: 'self' | 'self_and_descendants';

      /**
       * Grant expiry in ISO 8601 format, or null when non-expiring.
       */
      expires_at: string | null;

      /**
       * Persisted resource grant ID.
       */
      grant_id: string;

      /**
       * Hercules Access Control identifier.
       */
      permission_id: string | null;

      /**
       * Hercules Access Control identifier.
       */
      role_id: string | null;
    }
  }
}

/**
 * Access Control write result for one grant.
 */
export interface ResourceGrantRevokeResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Role, permission, or resource rule grant ID.
   */
  grant_id: string;

  /**
   * Deployments whose Access Control mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Whether persisted Access Control state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;
}

export interface ResourceGrantCreateParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Exact application resource ID receiving the grant.
   */
  resource_id: string;

  /**
   * Canonical type of the target resource.
   */
  resource_type: string;

  /**
   * Whether the access entry applies only to this resource or also to descendants
   * authorized through it.
   */
  applies_to?: 'self' | 'self_and_descendants';

  /**
   * Optional ISO 8601 expiry. Null or omission creates a non-expiring grant.
   */
  expires_at?: string | null;

  /**
   * Hercules Auth user ID used to resolve the user's principal in this scope.
   */
  hercules_auth_user_id?: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;

  /**
   * Single permission granted on the resource.
   */
  permission_key?: string;

  /**
   * Existing Access Control principal ID.
   */
  principal_id?: string;

  /**
   * Role granted on the resource.
   */
  role_key?: string;

  /**
   * Access scope ID. Omit only when the operation supports the deployment's default
   * scope.
   */
  scope_id?: string;
}

export interface ResourceGrantReplaceParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Exact application resource ID being managed.
   */
  resource_id: string;

  /**
   * Canonical type of the target resource.
   */
  resource_type: string;

  /**
   * Scope containing the target resource and recipients.
   */
  scope_id: string;

  /**
   * Principals whose grants on this resource will be replaced.
   */
  subjects: Array<ResourceGrantReplaceParams.Subject>;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export namespace ResourceGrantReplaceParams {
  /**
   * One principal and their complete desired grant set for the resource.
   */
  export interface Subject {
    /**
     * Complete desired resource grant set for this principal.
     */
    grants: Array<Subject.Grant>;

    /**
     * Hercules Auth user ID used to resolve the user's principal in this scope.
     */
    hercules_auth_user_id?: string;

    /**
     * Existing Access Control principal ID.
     */
    principal_id?: string;
  }

  export namespace Subject {
    /**
     * Desired role or permission grant for one resource recipient.
     */
    export interface Grant {
      /**
       * Whether the access entry applies only to this resource or also to descendants
       * authorized through it.
       */
      applies_to?: 'self' | 'self_and_descendants';

      /**
       * Optional ISO 8601 expiry for this grant.
       */
      expires_at?: string | null;

      /**
       * Permission key to grant on the resource.
       */
      permission_key?: string;

      /**
       * Role key to grant on the resource.
       */
      role_key?: string;
    }
  }
}

export interface ResourceGrantRevokeParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Resource grant ID to revoke.
   */
  grant_id: string;

  /**
   * Scope containing the resource grant.
   */
  scope_id: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export declare namespace ResourceGrants {
  export {
    type ResourceGrantCreateResponse as ResourceGrantCreateResponse,
    type ResourceGrantReplaceResponse as ResourceGrantReplaceResponse,
    type ResourceGrantRevokeResponse as ResourceGrantRevokeResponse,
    type ResourceGrantCreateParams as ResourceGrantCreateParams,
    type ResourceGrantReplaceParams as ResourceGrantReplaceParams,
    type ResourceGrantRevokeParams as ResourceGrantRevokeParams,
  };
}
