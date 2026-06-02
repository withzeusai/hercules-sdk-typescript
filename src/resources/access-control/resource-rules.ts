// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class ResourceRules extends APIResource {
  /**
   * Allows or denies one permission on all or one resource for a user or role.
   */
  set(body: ResourceRuleSetParams, options?: RequestOptions): APIPromise<ResourceRuleSetResponse> {
    return this._client.post('/v1/access-control/resource-rules/set', { body, ...options });
  }
}

export interface ResourceRuleSetResponse {
  access_scope_id: string;

  projection_ids: Array<string>;

  source_version: number;

  changed?: boolean;

  created?: boolean;

  [k: string]: unknown;
}

export interface ResourceRuleSetParams {
  effect: 'allow' | 'deny';

  permission_key: string;

  resource_type: string;

  scope_id: string;

  subject: ResourceRuleSetParams.UnionMember0 | ResourceRuleSetParams.UnionMember1;

  target: ResourceRuleSetParams.Mode | ResourceRuleSetParams.UnionMember1;

  expires_at?: string | null;
}

export namespace ResourceRuleSetParams {
  export interface UnionMember0 {
    principal_id: string;

    type: 'principal';
  }

  export interface UnionMember1 {
    role_key: string;

    type: 'role';
  }

  export interface Mode {
    mode: 'all';
  }

  export interface UnionMember1 {
    mode: 'specific';

    resource_id: string;
  }
}

export declare namespace ResourceRules {
  export {
    type ResourceRuleSetResponse as ResourceRuleSetResponse,
    type ResourceRuleSetParams as ResourceRuleSetParams,
  };
}
