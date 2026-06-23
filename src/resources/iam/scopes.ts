// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Scopes extends APIResource {
  /**
   * Creates an org scope for a website.
   */
  create(body: ScopeCreateParams, options?: RequestOptions): APIPromise<ScopeCreateResponse> {
    return this._client.post('/v1/iam/scopes/create', { body, ...options });
  }

  /**
   * Archives an org scope for a website.
   */
  archive(body: ScopeArchiveParams, options?: RequestOptions): APIPromise<ScopeArchiveResponse> {
    return this._client.post('/v1/iam/scopes/archive', { body, ...options });
  }

  /**
   * Sets the role assigned automatically to future members of a scope.
   */
  setDefaultRole(
    body: ScopeSetDefaultRoleParams,
    options?: RequestOptions,
  ): APIPromise<ScopeSetDefaultRoleResponse> {
    return this._client.post('/v1/iam/scopes/set-default-role', { body, ...options });
  }
}

/**
 * Common result envelope for IAM writes.
 */
export interface ScopeCreateResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Deployments whose IAM mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Whether persisted IAM state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;

  [k: string]: unknown;
}

/**
 * Common result envelope for IAM writes.
 */
export interface ScopeArchiveResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Deployments whose IAM mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Whether persisted IAM state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;

  [k: string]: unknown;
}

/**
 * Result of changing a scope's default role.
 */
export interface ScopeSetDefaultRoleResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Role now assigned to new members.
   */
  default_role_id: string;

  /**
   * Hercules IAM identifier.
   */
  previous_default_role_id: string | null;

  /**
   * Deployments whose IAM mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Whether persisted IAM state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;
}

export interface ScopeCreateParams {
  /**
   * Human-readable organization or scope name.
   */
  name: string;

  /**
   * Initial admission policy. Defaults to open when omitted.
   */
  account_entry_mode?: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

  /**
   * Role key assigned automatically to new members. Defaults to the deployment's
   * member role.
   */
  default_role_key?: string;

  /**
   * Hercules Auth user ID to bootstrap as the scope's initial Owner.
   */
  owner_hercules_auth_user_id?: string;
}

export interface ScopeArchiveParams {
  /**
   * Organization scope ID to archive.
   */
  scope_id: string;
}

export interface ScopeSetDefaultRoleParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by IAM.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Scope whose automatic member role will change.
   */
  scope_id: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;

  /**
   * ID of the new default role.
   */
  role_id?: string;

  /**
   * Key of the new default role.
   */
  role_key?: string;
}

export declare namespace Scopes {
  export {
    type ScopeCreateResponse as ScopeCreateResponse,
    type ScopeArchiveResponse as ScopeArchiveResponse,
    type ScopeSetDefaultRoleResponse as ScopeSetDefaultRoleResponse,
    type ScopeCreateParams as ScopeCreateParams,
    type ScopeArchiveParams as ScopeArchiveParams,
    type ScopeSetDefaultRoleParams as ScopeSetDefaultRoleParams,
  };
}
