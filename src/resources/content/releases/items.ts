// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import type { RequestOptions } from '../../../internal/request-options';
import { buildHeaders } from '../../../internal/headers';
import { path as __scalarPath } from '../../../internal/utils/path';
import type * as ReleasesAPI from './releases';

export class Items extends APIResource {
  /**
   * Adds an entry or asset to a release with a specified action (publish or unpublish). Only draft releases can have items added.
   *
   * @param {string} releaseID - The unique identifier of the release
   * @param {ItemAddParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReleasesAPI.ReleaseItem>} The created release item object
   *
   * @example
   * ```ts
   * const releaseItem = await client.content.releases.items.add('releaseId', {
   *   type: 'entry',
   *   item_id: '',
   *   action: 'publish',
   * });
   * ```
   */
  add(releaseID: string, body: ItemAddParams, options?: RequestOptions): APIPromise<ReleasesAPI.ReleaseItem> {
    return this._client.post(__scalarPath`/v1/content/releases/${releaseID}/items`, { body, ...options });
  }

  /**
   * Removes an item from a release. Only draft releases can have items removed.
   *
   * @param {string} itemID - The unique identifier of the release item
   * @param {ItemRemoveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Item successfully removed from release
   *
   * @example
   * ```ts
   * await client.content.releases.items.remove('itemId', {
   *   release_id: 'releaseId',
   * });
   * ```
   */
  remove(itemID: string, params: ItemRemoveParams, options?: RequestOptions): APIPromise<void> {
    const { release_id } = params;
    return this._client.delete(__scalarPath`/v1/content/releases/${release_id}/items/${itemID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ItemAddParams {
  /**
   * Type of item: entry or asset
   */
  type: 'entry' | 'asset';
  /**
   * ID of the entry or asset to add
   */
  item_id: string;
  /**
   * Action to perform: publish or unpublish
   * @default publish
   */
  action?: 'publish' | 'unpublish';
}

export interface ItemRemoveParams {
  /**
   * The unique identifier of the release
   */
  release_id: string;
}
export declare namespace Items {
  export { type ItemAddParams as ItemAddParams, type ItemRemoveParams as ItemRemoveParams };
}
