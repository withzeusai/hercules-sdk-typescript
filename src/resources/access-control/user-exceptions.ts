// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class UserExceptions extends APIResource {
  /**
   * Replaces a user's direct allow and deny permission exceptions in a scope.
   */
  set(body: UserExceptionSetParams, options?: RequestOptions): APIPromise<UserExceptionSetResponse> {
    return this._client.post('/v1/access-control/user-exceptions/set', { body, ...options });
  }
}

export interface UserExceptionSetResponse {
  access_scope_id: string;

  projection_ids: Array<string>;

  source_version: number;

  changed?: boolean;

  created?: boolean;

  [k: string]: unknown;
}

export interface UserExceptionSetParams {
  allow?: Array<string>;

  deny?: Array<string>;

  hercules_auth_user_id?: string;

  principal_id?: string;

  scope_id?: string;
}

export declare namespace UserExceptions {
  export {
    type UserExceptionSetResponse as UserExceptionSetResponse,
    type UserExceptionSetParams as UserExceptionSetParams,
  };
}
