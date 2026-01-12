// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ItemsAPI from './items';
import { ItemAddParams, ItemRemoveParams, Items } from './items';
import { APIPromise } from '../../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Releases extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Creates a new release. Add items using the add items endpoint, then publish or
   * schedule the release.
   */
  create(body: ReleaseCreateParams, options?: RequestOptions): APIPromise<Release> {
    return this._client.post('/v1/content/releases', { body, ...options });
  }

  /**
   * Updates a release name and description. Only draft releases can be updated.
   */
  update(
    releaseID: string,
    body: ReleaseUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Release> {
    return this._client.patch(path`/v1/content/releases/${releaseID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of releases. Releases group entries and assets for
   * atomic publishing.
   */
  list(
    query: ReleaseListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ReleasesCursorIDPage, Release> {
    return this._client.getAPIList('/v1/content/releases', CursorIDPage<Release>, { query, ...options });
  }

  /**
   * Deletes a draft release. Published releases cannot be deleted.
   */
  delete(releaseID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/content/releases/${releaseID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a release by ID with all its items.
   */
  get(releaseID: string, options?: RequestOptions): APIPromise<Release> {
    return this._client.get(path`/v1/content/releases/${releaseID}`, options);
  }

  /**
   * Publishes all items in the release immediately. Each item's action (publish or
   * unpublish) is executed atomically.
   */
  publish(releaseID: string, options?: RequestOptions): APIPromise<Release> {
    return this._client.post(path`/v1/content/releases/${releaseID}/publish`, options);
  }

  /**
   * Schedules a release for future publication. The release will be automatically
   * published at the specified time.
   */
  schedule(releaseID: string, body: ReleaseScheduleParams, options?: RequestOptions): APIPromise<Release> {
    return this._client.post(path`/v1/content/releases/${releaseID}/schedule`, { body, ...options });
  }
}

export type ReleasesCursorIDPage = CursorIDPage<Release>;

/**
 * A release groups multiple entries and assets to be published atomically.
 * Releases can be scheduled for future publication.
 */
export interface Release {
  /**
   * Unique identifier for the topic subscription
   */
  id: string;

  /**
   * Timestamp when the release was created
   */
  created: string;

  /**
   * Name of the release
   */
  name: string;

  /**
   * Status: draft, scheduled, published, or failed
   */
  status: 'draft' | 'scheduled' | 'published' | 'failed';

  /**
   * Timestamp when the release was last updated
   */
  updated: string;

  /**
   * Description of the release
   */
  description?: string | null;

  /**
   * Error message if the release failed
   */
  error_message?: string | null;

  /**
   * Items included in this release
   */
  items?: Array<ReleaseItem>;

  /**
   * Timestamp when the release was published
   */
  published_at?: string | null;

  /**
   * Scheduled publish time (if scheduled)
   */
  scheduled_at?: string | null;
}

/**
 * An item included in a release
 */
export interface ReleaseItem {
  /**
   * Unique identifier for the topic subscription
   */
  id: string;

  /**
   * Action to perform: publish or unpublish
   */
  action: 'publish' | 'unpublish';

  /**
   * ID of the entry or asset
   */
  item_id: string;

  /**
   * Type of item: entry or asset
   */
  type: 'entry' | 'asset';
}

export interface ReleaseCreateParams {
  /**
   * Name of the release
   */
  name: string;

  /**
   * Optional custom ID for the release. Must start with 'cr\_'. If not provided, one
   * will be generated.
   */
  id?: string;

  /**
   * Description of the release
   */
  description?: string;
}

export interface ReleaseUpdateParams {
  /**
   * Description of the release
   */
  description?: string;

  /**
   * Name of the release
   */
  name?: string;
}

export interface ReleaseListParams extends CursorIDPageParams {
  /**
   * Filter by status
   */
  status?: 'draft' | 'scheduled' | 'published' | 'failed';
}

export interface ReleaseScheduleParams {
  /**
   * Time to publish the release
   */
  scheduled_at: string;
}

Releases.Items = Items;

export declare namespace Releases {
  export {
    type Release as Release,
    type ReleaseItem as ReleaseItem,
    type ReleasesCursorIDPage as ReleasesCursorIDPage,
    type ReleaseCreateParams as ReleaseCreateParams,
    type ReleaseUpdateParams as ReleaseUpdateParams,
    type ReleaseListParams as ReleaseListParams,
    type ReleaseScheduleParams as ReleaseScheduleParams,
  };

  export { Items as Items, type ItemAddParams as ItemAddParams, type ItemRemoveParams as ItemRemoveParams };
}
