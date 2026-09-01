// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Suppressions extends APIResource {
  /**
   * Adds a recipient address to the suppression list. SES drops later sends to it at send time, protecting your sending reputation. Adding an address that is already suppressed succeeds. The suppression list belongs to the organization and applies to every app and sender identity it owns.
   *
   * @param {SuppressionCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Suppression>} The created suppression
   *
   * @example
   * ```ts
   * const suppression = await client.email.suppressions.create({
   *   email: 'user@example.com',
   * });
   * ```
   */
  create(body: SuppressionCreateParams, options?: RequestOptions): APIPromise<Suppression> {
    return this._client.post('/v1/email/suppressions', { body, ...options });
  }

  /**
   * Retrieves a paginated list of suppressed recipient addresses, newest first. Filter by `origin` to separate addresses you added yourself from those a bounce or a spam complaint added automatically. The suppression list belongs to the organization and applies to every app and sender identity it owns.
   *
   * @param {SuppressionListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SuppressionListResponse>} A paginated list of suppression objects
   *
   * @example
   * ```ts
   * const suppression = await client.email.suppressions.list({
   *   limit: 100,
   * });
   * ```
   */
  list(
    query: SuppressionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SuppressionListResponse> {
    return this._client.get('/v1/email/suppressions', { query, ...options });
  }

  /**
   * Retrieves a single suppression by its ID or by the suppressed email address. The suppression list belongs to the organization and applies to every app and sender identity it owns.
   *
   * @param {string} suppression - The suppression's ID, or the suppressed email address
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Suppression>} The suppression object
   *
   * @example
   * ```ts
   * const suppression = await client.email.suppressions.get('suppression');
   * ```
   */
  get(suppression: string, options?: RequestOptions): APIPromise<Suppression> {
    return this._client.get(__scalarPath`/v1/email/suppressions/${suppression}`, options);
  }

  /**
   * Removes an address from the suppression list, identified by its suppression ID or by the address itself, so sends to it are allowed again. Removing an address does not guarantee delivery — if it bounces or is reported as spam again, it is suppressed again. The suppression list belongs to the organization and applies to every app and sender identity it owns.
   *
   * @param {string} suppression - The suppression's ID, or the suppressed email address
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SuppressionDeleteResponse>} The suppression was removed
   *
   * @example
   * ```ts
   * const suppression = await client.email.suppressions.delete('suppression');
   * ```
   */
  delete(suppression: string, options?: RequestOptions): APIPromise<SuppressionDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/email/suppressions/${suppression}`, options);
  }

  /**
   * Adds up to 100 recipient addresses to the suppression list in one call. Addresses that are already suppressed are returned unchanged rather than rejected, so an import can be retried safely. The suppression list belongs to the organization and applies to every app and sender identity it owns.
   *
   * @param {SuppressionBatchAddParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SuppressionBatchAddResponse>} The suppressions for every address in the request
   *
   * @example
   * ```ts
   * const suppression = await client.email.suppressions.batchAdd({
   *   emails: [],
   * });
   * ```
   */
  batchAdd(
    body: SuppressionBatchAddParams,
    options?: RequestOptions,
  ): APIPromise<SuppressionBatchAddResponse> {
    return this._client.post('/v1/email/suppressions/batch/add', { body, ...options });
  }

  /**
   * Removes up to 100 addresses from the suppression list in one call, identified by either `emails` or `ids` (exactly one of the two). Addresses that were not on the list are omitted from the response instead of failing the request. Removing an address does not guarantee delivery — if it bounces or is reported as spam again, it is suppressed again. The suppression list belongs to the organization and applies to every app and sender identity it owns.
   *
   * @param {SuppressionBatchRemoveParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SuppressionBatchRemoveResponse>} The suppressions that were removed
   *
   * @example
   * ```ts
   * const suppression = await client.email.suppressions.batchRemove({});
   * ```
   */
  batchRemove(
    body: SuppressionBatchRemoveParams,
    options?: RequestOptions,
  ): APIPromise<SuppressionBatchRemoveResponse> {
    return this._client.post('/v1/email/suppressions/batch/remove', { body, ...options });
  }
}

/**
 * A recipient address your organization will not send to. The list is shared across every app and sender identity in the organization.
 */
export interface Suppression {
  /**
   * Identifier for the suppression — the suppressed email address
   */
  id: string;
  /**
   * The suppressed recipient address, lowercased
   */
  email: string;
  /**
   * How the address reached the list: 'bounce' for a permanent delivery failure, 'complaint' for a spam report, 'manual' for an address you added yourself. List results never report 'manual' — a manually added address is listed as 'bounce'. Retrieve a single suppression to recover its true origin.
   */
  origin: 'bounce' | 'complaint' | 'manual';
  /**
   * The SES message id of the bounce or complaint that created this suppression. Null for a manually added address, and in list results (only a single lookup carries it).
   */
  source_id: string | null;
  /**
   * Timestamp when the address was suppressed
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created_at: string;
}

export interface SuppressionCreateParams {
  /**
   * The recipient address to suppress
   * @format email
   * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
   */
  email: string;
}

export interface SuppressionListParams {
  /**
   * Maximum number of suppressions to return (1-100)
   * @default 100
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * Opaque forward-pagination cursor. Pass the `next_cursor` from the previous page. Forward only — there is no backward pagination.
   */
  cursor?: string;
  /**
   * Only return suppressions with this origin. `manual` is not supported as a filter.
   */
  origin?: 'bounce' | 'complaint' | 'manual';
}

export interface SuppressionListResponse {
  /**
   * Array of suppression objects
   */
  data: Array<Suppression>;
  /**
   * Whether there are more suppressions available after this page
   */
  has_more: boolean;
  /**
   * Cursor to pass as `cursor` for the next page, or null when there are no more
   */
  next_cursor: string | null;
}

export interface SuppressionDeleteResponse {
  /**
   * Unique identifier of the removed suppression
   */
  id: string;
  /**
   * The address that is no longer suppressed
   */
  email: string;
  /**
   * Whether an entry was removed. False in a batch response for an address or ID that was not on the list.
   */
  deleted: boolean;
}

export interface SuppressionBatchAddParams {
  /**
   * The recipient addresses to suppress (1-100)
   * @minItems 1
   * @maxItems 100
   */
  emails: Array<string>;
}

export interface SuppressionBatchAddResponse {
  /**
   * The resulting suppression objects
   */
  data: Array<Suppression>;
}

export interface SuppressionBatchRemoveParams {
  /**
   * The addresses to remove (1-100). Omit when using 'ids'.
   * @minItems 1
   * @maxItems 100
   */
  emails?: Array<string>;
  /**
   * The suppression IDs to remove (1-100); an ID is the suppressed address. Omit when using 'emails'.
   * @minItems 1
   * @maxItems 100
   */
  ids?: Array<string>;
}

export interface SuppressionBatchRemoveResponse {
  /**
   * One entry per address or ID that was on the list and has been removed
   */
  data: Array<SuppressionBatchRemoveResponse.Data>;
}

export namespace SuppressionBatchRemoveResponse {
  export interface Data {
    /**
     * Unique identifier of the removed suppression
     */
    id: string;
    /**
     * The address that is no longer suppressed
     */
    email: string;
    /**
     * Whether an entry was removed. False in a batch response for an address or ID that was not on the list.
     */
    deleted: boolean;
  }
}
export declare namespace Suppressions {
  export {
    type Suppression as Suppression,
    type SuppressionListResponse as SuppressionListResponse,
    type SuppressionDeleteResponse as SuppressionDeleteResponse,
    type SuppressionBatchAddResponse as SuppressionBatchAddResponse,
    type SuppressionBatchRemoveResponse as SuppressionBatchRemoveResponse,
    type SuppressionCreateParams as SuppressionCreateParams,
    type SuppressionListParams as SuppressionListParams,
    type SuppressionBatchAddParams as SuppressionBatchAddParams,
    type SuppressionBatchRemoveParams as SuppressionBatchRemoveParams,
  };
}
