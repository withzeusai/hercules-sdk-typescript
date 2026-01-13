// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ReleasesAPI from './releases';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Items extends APIResource {
  /**
   * Adds an entry or asset to a release with a specified action (publish or
   * unpublish). Only draft releases can have items added.
   */
  add(releaseID: string, body: ItemAddParams, options?: RequestOptions): APIPromise<ReleasesAPI.ReleaseItem> {
    return this._client.post(path`/v1/content/releases/${releaseID}/items`, { body, ...options });
  }

  /**
   * Removes an item from a release. Only draft releases can have items removed.
   */
  remove(itemID: string, params: ItemRemoveParams, options?: RequestOptions): APIPromise<void> {
    const { release_id } = params;
    return this._client.delete(path`/v1/content/releases/${release_id}/items/${itemID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ItemAddParams {
  /**
   * ID of the entry or asset to add
   */
  item_id: string;

  /**
   * Type of item: entry or asset
   */
  type: 'entry' | 'asset';

  /**
   * Action to perform: publish or unpublish
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
