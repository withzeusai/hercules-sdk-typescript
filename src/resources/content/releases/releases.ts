// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../../core/pagination';
import type { RequestOptions } from '../../../internal/request-options';
import { buildHeaders } from '../../../internal/headers';
import { path as __scalarPath } from '../../../internal/utils/path';
import * as ItemsAPI from './items';
import { Items, type ItemAddParams, type ItemRemoveParams } from './items';

export class Releases extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Retrieves a paginated list of releases. Releases group entries and assets for atomic publishing.
   *
   * @param {ReleaseListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<ReleasesCursorIDPage, Release>} A paginated list of release objects
   *
   * @example
   * ```ts
   * const page = await client.content.releases.list();
   * ```
   */
  list(
    query: ReleaseListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ReleasesCursorIDPage, Release> {
    return this._client.getAPIList('/v1/content/releases', CursorIDPage<Release>, { query, ...options });
  }

  /**
   * Retrieves a release by ID with all its items.
   *
   * @param {string} releaseID - The unique identifier of the release
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Release>} The release object
   *
   * @example
   * ```ts
   * const release = await client.content.releases.get('releaseId');
   * ```
   */
  get(releaseID: string, options?: RequestOptions): APIPromise<Release> {
    return this._client.get(__scalarPath`/v1/content/releases/${releaseID}`, options);
  }

  /**
   * Creates a new release. Add items using the add items endpoint, then publish or schedule the release.
   *
   * @param {ReleaseCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Release>} The created release object
   *
   * @example
   * ```ts
   * const release = await client.content.releases.create({
   *   name: '',
   * });
   * ```
   */
  create(body: ReleaseCreateParams, options?: RequestOptions): APIPromise<Release> {
    return this._client.post('/v1/content/releases', { body, ...options });
  }

  /**
   * Updates a release name and description. Only draft releases can be updated.
   *
   * @param {string} releaseID - The unique identifier of the release
   * @param {ReleaseUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Release>} The updated release object
   *
   * @example
   * ```ts
   * const release = await client.content.releases.update('releaseId', {});
   * ```
   */
  update(releaseID: string, body: ReleaseUpdateParams, options?: RequestOptions): APIPromise<Release> {
    return this._client.patch(__scalarPath`/v1/content/releases/${releaseID}`, { body, ...options });
  }

  /**
   * Deletes a draft release. Published releases cannot be deleted.
   *
   * @param {string} releaseID - The unique identifier of the release
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Release successfully deleted
   *
   * @example
   * ```ts
   * await client.content.releases.delete('releaseId');
   * ```
   */
  delete(releaseID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(__scalarPath`/v1/content/releases/${releaseID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Publishes all items in the release immediately. Each item's action (publish or unpublish) is executed atomically.
   *
   * @param {string} releaseID - The unique identifier of the release
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Release>} The published release object
   *
   * @example
   * ```ts
   * const release = await client.content.releases.publish('releaseId');
   * ```
   */
  publish(releaseID: string, options?: RequestOptions): APIPromise<Release> {
    return this._client.post(__scalarPath`/v1/content/releases/${releaseID}/publish`, options);
  }

  /**
   * Schedules a release for future publication. The release will be automatically published at the specified time.
   *
   * @param {string} releaseID - The unique identifier of the release
   * @param {ReleaseScheduleParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Release>} The scheduled release object
   *
   * @example
   * ```ts
   * const release = await client.content.releases.schedule('releaseId', {
   *   scheduled_at: '2024-01-01T00:00:00.000Z',
   * });
   * ```
   */
  schedule(releaseID: string, body: ReleaseScheduleParams, options?: RequestOptions): APIPromise<Release> {
    return this._client.post(__scalarPath`/v1/content/releases/${releaseID}/schedule`, { body, ...options });
  }
}

/**
 * A release groups multiple entries and assets to be published atomically. Releases can be scheduled for future publication.
 */
export interface Release {
  /**
   * Unique identifier for the release
   */
  id: string;
  /**
   * Name of the release
   */
  name: string;
  /**
   * Status: draft, scheduled, published, or failed
   */
  status: 'draft' | 'scheduled' | 'published' | 'failed';
  /**
   * Timestamp when the release was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * Timestamp when the release was last updated
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  updated: string;
  /**
   * Description of the release
   */
  description?: string | null;
  /**
   * Items included in this release
   * @default []
   */
  items?: Array<ReleaseItem>;
  /**
   * Scheduled publish time (if scheduled)
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  scheduled_at?: string | null;
  /**
   * Timestamp when the release was published
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  published_at?: string | null;
  /**
   * Error message if the release failed
   */
  error_message?: string | null;
}

/**
 * An item included in a release
 */
export interface ReleaseItem {
  /**
   * Unique identifier for the release item
   */
  id: string;
  /**
   * Type of item: entry or asset
   */
  type: 'entry' | 'asset';
  /**
   * ID of the entry or asset
   */
  item_id: string;
  /**
   * Action to perform: publish or unpublish
   */
  action: 'publish' | 'unpublish';
}

export interface ReleaseListParams extends CursorIDPageParams {
  /**
   * Filter by status
   */
  status?: 'draft' | 'scheduled' | 'published' | 'failed';
}

export type ReleasesCursorIDPage = CursorIDPage<Release>;

export interface ReleaseCreateParams {
  /**
   * Name of the release
   */
  name: string;
  /**
   * Optional custom ID for the release. Must start with 'cr_'. If not provided, one will be generated.
   * @pattern ^cr_[\w-]+$
   */
  id?: string;
  /**
   * Description of the release
   */
  description?: string;
}

export interface ReleaseUpdateParams {
  /**
   * Name of the release
   */
  name?: string;
  /**
   * Description of the release
   */
  description?: string;
}

export interface ReleaseScheduleParams {
  /**
   * Time to publish the release
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  scheduled_at: string;
}
Releases.Items = Items;

export declare namespace Releases {
  export {
    type Release as Release,
    type ReleaseItem as ReleaseItem,
    type ReleasesCursorIDPage as ReleasesCursorIDPage,
    type ReleaseListParams as ReleaseListParams,
    type ReleaseCreateParams as ReleaseCreateParams,
    type ReleaseUpdateParams as ReleaseUpdateParams,
    type ReleaseScheduleParams as ReleaseScheduleParams,
  };

  export { Items as Items, type ItemAddParams as ItemAddParams, type ItemRemoveParams as ItemRemoveParams };
}
