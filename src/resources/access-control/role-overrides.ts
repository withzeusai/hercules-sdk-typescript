// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class RoleOverrides extends APIResource {
  /**
   * Replaces an org-specific override for an app role.
   */
  set(body: RoleOverrideSetParams, options?: RequestOptions): APIPromise<RoleOverrideSetResponse> {
    return this._client.post('/v1/access-control/role-overrides/set', { body, ...options });
  }
}

export interface RoleOverrideSetResponse {
  access_scope_id: string;

  projection_ids: Array<string>;

  source_version: number;

  changed?: boolean;

  created?: boolean;

  [k: string]: unknown;
}

export interface RoleOverrideSetParams {
  actor_mode: 'service' | 'app_user';

  role_key: string;

  scope_id: string;

  allow?: Array<string>;

  deny?: Array<string>;

  id_token?: string;
}

export declare namespace RoleOverrides {
  export {
    type RoleOverrideSetResponse as RoleOverrideSetResponse,
    type RoleOverrideSetParams as RoleOverrideSetParams,
  };
}
