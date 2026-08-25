// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Suppressions extends APIResource {
  /**
   * Adds a recipient address to the suppression list. SES drops later sends to it at
   * send time, protecting your sending reputation. Adding an address that is already
   * suppressed succeeds. The suppression list belongs to the organization and
   * applies to every app and sender identity it owns.
   */
  create(body: SuppressionCreateParams, options?: RequestOptions): APIPromise<Suppression> {
    return this._client.post('/v1/email/suppressions', { body, ...options });
  }

  /**
   * Retrieves a paginated list of suppressed recipient addresses, newest first.
   * Filter by `origin` to separate addresses you added yourself from those a bounce
   * or a spam complaint added automatically. The suppression list belongs to the
   * organization and applies to every app and sender identity it owns.
   */
  list(
    query: SuppressionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SuppressionListResponse> {
    return this._client.get('/v1/email/suppressions', { query, ...options });
  }

  /**
   * Removes an address from the suppression list, identified by its suppression ID
   * or by the address itself, so sends to it are allowed again. Removing an address
   * does not guarantee delivery — if it bounces or is reported as spam again, it is
   * suppressed again. The suppression list belongs to the organization and applies
   * to every app and sender identity it owns.
   */
  delete(suppression: string, options?: RequestOptions): APIPromise<SuppressionDeleteResponse> {
    return this._client.delete(path`/v1/email/suppressions/${suppression}`, options);
  }

  /**
   * Adds up to 100 recipient addresses to the suppression list in one call.
   * Addresses that are already suppressed are returned unchanged rather than
   * rejected, so an import can be retried safely. The suppression list belongs to
   * the organization and applies to every app and sender identity it owns.
   */
  batchAdd(
    body: SuppressionBatchAddParams,
    options?: RequestOptions,
  ): APIPromise<SuppressionBatchAddResponse> {
    return this._client.post('/v1/email/suppressions/batch/add', { body, ...options });
  }

  /**
   * Removes up to 100 addresses from the suppression list in one call, identified by
   * either `emails` or `ids` (exactly one of the two). Addresses that were not on
   * the list are omitted from the response instead of failing the request. Removing
   * an address does not guarantee delivery — if it bounces or is reported as spam
   * again, it is suppressed again. The suppression list belongs to the organization
   * and applies to every app and sender identity it owns.
   */
  batchRemove(
    body: SuppressionBatchRemoveParams,
    options?: RequestOptions,
  ): APIPromise<SuppressionBatchRemoveResponse> {
    return this._client.post('/v1/email/suppressions/batch/remove', { body, ...options });
  }

  /**
   * Retrieves a single suppression by its ID or by the suppressed email address. The
   * suppression list belongs to the organization and applies to every app and sender
   * identity it owns.
   */
  get(suppression: string, options?: RequestOptions): APIPromise<Suppression> {
    return this._client.get(path`/v1/email/suppressions/${suppression}`, options);
  }
}

/**
 * A recipient address your organization will not send to. The list is shared
 * across every app and sender identity in the organization.
 */
export interface Suppression {
  /**
   * Identifier for the suppression — the suppressed email address
   */
  id: string;

  /**
   * Timestamp when the address was suppressed
   */
  created_at: string;

  /**
   * The suppressed recipient address, lowercased
   */
  email: string;

  /**
   * How the address reached the list: 'bounce' for a permanent delivery failure,
   * 'complaint' for a spam report, 'manual' for an address you added yourself. List
   * results never report 'manual' — a manually added address is listed as 'bounce'.
   * Retrieve a single suppression to recover its true origin.
   */
  origin: 'bounce' | 'complaint' | 'manual';

  /**
   * The SES message id of the bounce or complaint that created this suppression.
   * Null for a manually added address, and in list results (only a single lookup
   * carries it).
   */
  source_id: string | null;
}

/**
 * Paginated list of suppressed recipient addresses
 */
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

/**
 * The outcome of removing one address from the suppression list
 */
export interface SuppressionDeleteResponse {
  /**
   * Unique identifier of the removed suppression
   */
  id: string;

  /**
   * Whether an entry was removed. False in a batch response for an address or ID
   * that was not on the list.
   */
  deleted: boolean;

  /**
   * The address that is no longer suppressed
   */
  email: string;
}

/**
 * The suppressions created by a batch add
 */
export interface SuppressionBatchAddResponse {
  /**
   * The resulting suppression objects
   */
  data: Array<Suppression>;
}

/**
 * The suppressions removed by a batch remove
 */
export interface SuppressionBatchRemoveResponse {
  /**
   * One entry per address or ID that was on the list and has been removed
   */
  data: Array<SuppressionBatchRemoveResponse.Data>;
}

export namespace SuppressionBatchRemoveResponse {
  /**
   * The outcome of removing one address from the suppression list
   */
  export interface Data {
    /**
     * Unique identifier of the removed suppression
     */
    id: string;

    /**
     * Whether an entry was removed. False in a batch response for an address or ID
     * that was not on the list.
     */
    deleted: boolean;

    /**
     * The address that is no longer suppressed
     */
    email: string;
  }
}

export interface SuppressionCreateParams {
  /**
   * The recipient address to suppress
   */
  email: string;
}

export interface SuppressionListParams {
  /**
   * Opaque forward-pagination cursor. Pass the `next_cursor` from the previous page.
   * Forward only — there is no backward pagination.
   */
  cursor?: string;

  /**
   * Maximum number of suppressions to return (1-100)
   */
  limit?: number;

  /**
   * Only return suppressions with this origin. `manual` is not supported as a
   * filter.
   */
  origin?: 'bounce' | 'complaint' | 'manual';
}

export interface SuppressionBatchAddParams {
  /**
   * The recipient addresses to suppress (1-100)
   */
  emails: Array<string>;
}

export interface SuppressionBatchRemoveParams {
  /**
   * The addresses to remove (1-100). Omit when using 'ids'.
   */
  emails?: Array<string>;

  /**
   * The suppression IDs to remove (1-100); an ID is the suppressed address. Omit
   * when using 'emails'.
   */
  ids?: Array<string>;
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
