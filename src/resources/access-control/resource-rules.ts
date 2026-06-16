// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class ResourceRules extends APIResource {
  /**
   * Atomically sets or clears multiple permission rules on all or one resource for a
   * user or role.
   */
  replace(
    body: ResourceRuleReplaceParams,
    options?: RequestOptions,
  ): APIPromise<ResourceRuleReplaceResponse> {
    return this._client.post('/v1/access-control/resource-rules/replace', { body, ...options });
  }

  /**
   * Allows or denies one permission on all or one resource for a user or role.
   */
  set(body: ResourceRuleSetParams, options?: RequestOptions): APIPromise<ResourceRuleSetResponse> {
    return this._client.post('/v1/access-control/resource-rules/set', { body, ...options });
  }
}

/**
 * Common result envelope for Access Control writes.
 */
export interface ResourceRuleReplaceResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

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

  [k: string]: unknown;
}

/**
 * Access Control write result for one grant.
 */
export interface ResourceRuleSetResponse {
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

export interface ResourceRuleReplaceParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Canonical resource type governed by the rules.
   */
  resource_type: string;

  /**
   * Complete rule changes to apply at this subject and resource target.
   */
  rules: Array<ResourceRuleReplaceParams.Rule>;

  /**
   * Scope in which the resource permission rules apply.
   */
  scope_id: string;

  /**
   * Principal or role affected by the replacement.
   */
  subject: ResourceRuleReplaceParams.UnionMember0 | ResourceRuleReplaceParams.UnionMember1;

  /**
   * All resources of the type or one exact resource.
   */
  target: ResourceRuleReplaceParams.Mode | ResourceRuleReplaceParams.UnionMember1;

  /**
   * Whether the access entry applies only to this resource or also to descendants
   * authorized through it.
   */
  applies_to?: 'self' | 'self_and_descendants';

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export namespace ResourceRuleReplaceParams {
  /**
   * Desired rule state for one permission.
   */
  export interface Rule {
    /**
     * Allow, deny, or remove the existing rule for this permission.
     */
    effect: 'allow' | 'deny' | 'clear';

    /**
     * Permission key controlled by this rule.
     */
    permission_key: string;

    /**
     * Optional ISO 8601 expiry for this rule.
     */
    expires_at?: string | null;
  }

  export interface UnionMember0 {
    /**
     * Principal ID the rules apply to.
     */
    principal_id: string;

    /**
     * Apply the rules to one principal.
     */
    type: 'principal';
  }

  export interface UnionMember1 {
    /**
     * Role key the rules apply to.
     */
    role_key: string;

    /**
     * Apply the rules to every holder of one role.
     */
    type: 'role';
  }

  export interface Mode {
    /**
     * Apply to every resource of this type in the scope.
     */
    mode: 'all';
  }

  export interface UnionMember1 {
    /**
     * Apply to one exact resource.
     */
    mode: 'specific';

    /**
     * Exact application resource ID governed by the rules.
     */
    resource_id: string;
  }
}

export interface ResourceRuleSetParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Whether the rule allows or denies the permission.
   */
  effect: 'allow' | 'deny';

  /**
   * Permission key explicitly allowed or denied.
   */
  permission_key: string;

  /**
   * Canonical resource type governed by the rule.
   */
  resource_type: string;

  /**
   * Scope in which the resource permission rule applies.
   */
  scope_id: string;

  /**
   * Principal or role affected by the rule.
   */
  subject: ResourceRuleSetParams.UnionMember0 | ResourceRuleSetParams.UnionMember1;

  /**
   * All resources of the type or one exact resource.
   */
  target: ResourceRuleSetParams.Mode | ResourceRuleSetParams.UnionMember1;

  /**
   * Whether the access entry applies only to this resource or also to descendants
   * authorized through it.
   */
  applies_to?: 'self' | 'self_and_descendants';

  /**
   * Optional ISO 8601 expiry for the rule.
   */
  expires_at?: string | null;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export namespace ResourceRuleSetParams {
  export interface UnionMember0 {
    /**
     * Principal ID the rule applies to.
     */
    principal_id: string;

    /**
     * Apply the rule to one principal.
     */
    type: 'principal';
  }

  export interface UnionMember1 {
    /**
     * Role key the rule applies to.
     */
    role_key: string;

    /**
     * Apply the rule to every holder of one role.
     */
    type: 'role';
  }

  export interface Mode {
    /**
     * Apply to every resource of this type in the scope.
     */
    mode: 'all';
  }

  export interface UnionMember1 {
    /**
     * Apply to one exact resource.
     */
    mode: 'specific';

    /**
     * Exact application resource ID governed by the rule.
     */
    resource_id: string;
  }
}

export declare namespace ResourceRules {
  export {
    type ResourceRuleReplaceResponse as ResourceRuleReplaceResponse,
    type ResourceRuleSetResponse as ResourceRuleSetResponse,
    type ResourceRuleReplaceParams as ResourceRuleReplaceParams,
    type ResourceRuleSetParams as ResourceRuleSetParams,
  };
}
