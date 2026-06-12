// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Scopes extends APIResource {
  /**
   * Creates an org scope for a website.
   */
  create(body: ScopeCreateParams, options?: RequestOptions): APIPromise<ScopeCreateResponse> {
    return this._client.post('/v1/access-control/scopes/create', { body, ...options });
  }

  /**
   * Archives an org scope for a website.
   */
  archive(body: ScopeArchiveParams, options?: RequestOptions): APIPromise<ScopeArchiveResponse> {
    return this._client.post('/v1/access-control/scopes/archive', { body, ...options });
  }

  /**
   * Sets the role assigned automatically to future members of a scope.
   */
  setDefaultRole(
    body: ScopeSetDefaultRoleParams,
    options?: RequestOptions,
  ): APIPromise<ScopeSetDefaultRoleResponse> {
    return this._client.post('/v1/access-control/scopes/set-default-role', { body, ...options });
  }
}

export interface ScopeCreateResponse {
  access_scope_id: string;

  projection_ids: Array<string>;

  source_version: number;

  changed?: boolean;

  created?: boolean;

  [k: string]: unknown;
}

export interface ScopeArchiveResponse {
  access_scope_id: string;

  projection_ids: Array<string>;

  source_version: number;

  changed?: boolean;

  created?: boolean;

  [k: string]: unknown;
}

export interface ScopeSetDefaultRoleResponse {
  access_scope_id: string;

  projection_ids: Array<string>;

  source_version: number;

  changed?: boolean;

  created?: boolean;

  [k: string]: unknown;
}

export interface ScopeCreateParams {
  name: string;

  account_entry_mode?: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

  default_role_key?: string;

  owner_hercules_auth_user_id?: string;
}

export interface ScopeArchiveParams {
  scope_id: string;
}

export interface ScopeSetDefaultRoleParams {
  actor_mode: 'service' | 'app_user';

  scope_id: string;

  id_token?: string;

  role_id?: string;

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
