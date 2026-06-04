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
   * Revokes an existing resource grant.
   */
  revoke(body: ResourceGrantRevokeParams, options?: RequestOptions): APIPromise<ResourceGrantRevokeResponse> {
    return this._client.post('/v1/access-control/resource-grants/revoke', { body, ...options });
  }
}

export interface ResourceGrantCreateResponse {
  access_scope_id: string;

  projection_ids: Array<string>;

  source_version: number;

  changed?: boolean;

  created?: boolean;

  [k: string]: unknown;
}

export interface ResourceGrantRevokeResponse {
  access_scope_id: string;

  projection_ids: Array<string>;

  source_version: number;

  changed?: boolean;

  created?: boolean;

  [k: string]: unknown;
}

export interface ResourceGrantCreateParams {
  actor_mode: 'service' | 'app_user';

  resource_id: string;

  resource_type: string;

  expires_at?: string | null;

  hercules_auth_user_id?: string;

  id_token?: string;

  permission_key?: string;

  principal_id?: string;

  role_key?: string;

  scope_id?: string;
}

export interface ResourceGrantRevokeParams {
  actor_mode: 'service' | 'app_user';

  grant_id: string;

  scope_id: string;

  id_token?: string;
}

export declare namespace ResourceGrants {
  export {
    type ResourceGrantCreateResponse as ResourceGrantCreateResponse,
    type ResourceGrantRevokeResponse as ResourceGrantRevokeResponse,
    type ResourceGrantCreateParams as ResourceGrantCreateParams,
    type ResourceGrantRevokeParams as ResourceGrantRevokeParams,
  };
}
