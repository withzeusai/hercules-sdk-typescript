// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Expiries extends APIResource {
  /**
   * Sets or clears the expiry for an existing access grant.
   */
  set(body: ExpirySetParams, options?: RequestOptions): APIPromise<ExpirySetResponse> {
    return this._client.post('/v1/access-control/expiries/set', { body, ...options });
  }
}

export interface ExpirySetResponse {
  access_scope_id: string;

  projection_ids: Array<string>;

  source_version: number;

  changed?: boolean;

  created?: boolean;

  [k: string]: unknown;
}

export interface ExpirySetParams {
  expires_at: string | null;

  grant_id: string;

  scope_id: string;
}

export declare namespace Expiries {
  export { type ExpirySetResponse as ExpirySetResponse, type ExpirySetParams as ExpirySetParams };
}
