// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class UserExceptions extends APIResource {
  /**
   * Returns the raw per-user permission exceptions for a principal in a scope.
   */
  get(body: UserExceptionGetParams, options?: RequestOptions): APIPromise<UserExceptionGetResponse> {
    return this._client.post('/v1/iam/user-exceptions/get', { body, ...options });
  }

  /**
   * Replaces a user's direct allow and deny permission exceptions in a scope.
   */
  set(body: UserExceptionSetParams, options?: RequestOptions): APIPromise<UserExceptionSetResponse> {
    return this._client.post('/v1/iam/user-exceptions/set', { body, ...options });
  }
}

/**
 * Raw direct permission exceptions for one user in one scope.
 */
export interface UserExceptionGetResponse {
  /**
   * Scope containing the user exceptions.
   */
  access_scope_id: string;

  /**
   * Raw direct permission exceptions for the user.
   */
  exceptions: Array<UserExceptionGetResponse.Exception>;

  /**
   * User principal whose exceptions were read.
   */
  principal_id: string;
}

export namespace UserExceptionGetResponse {
  /**
   * One direct user permission exception.
   */
  export interface Exception {
    /**
     * Whether the exception directly allows or denies the permission.
     */
    effect: 'allow' | 'deny';

    /**
     * Exception expiry in ISO 8601 format, or null when non-expiring.
     */
    expires_at: string | null;

    /**
     * Exception permission ID.
     */
    permission_id: string;

    /**
     * Exception permission key.
     */
    permission_key: string;
  }
}

/**
 * IAM write result for one user principal.
 */
export interface UserExceptionSetResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * User principal changed by the operation.
   */
  principal_id: string;

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

export interface UserExceptionGetParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by IAM.
   */
  actor_mode: 'service' | 'app_user';

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
   * Existing IAM principal ID.
   */
  principal_id?: string;

  /**
   * Access scope ID. Omit only when the operation supports the deployment's default
   * scope.
   */
  scope_id?: string;
}

export interface UserExceptionSetParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by IAM.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Complete desired set of direct user allows.
   */
  allow?: Array<string>;

  /**
   * Complete desired set of direct user denies.
   */
  deny?: Array<string>;

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
   * Existing IAM principal ID.
   */
  principal_id?: string;

  /**
   * Access scope ID. Omit only when the operation supports the deployment's default
   * scope.
   */
  scope_id?: string;
}

export declare namespace UserExceptions {
  export {
    type UserExceptionGetResponse as UserExceptionGetResponse,
    type UserExceptionSetResponse as UserExceptionSetResponse,
    type UserExceptionGetParams as UserExceptionGetParams,
    type UserExceptionSetParams as UserExceptionSetParams,
  };
}
