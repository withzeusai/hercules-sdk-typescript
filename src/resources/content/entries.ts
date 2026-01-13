// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Entries extends APIResource {
  /**
   * Creates a new content entry for a given model. Entries start as drafts by
   * default. Use the publish endpoint to make entries publicly accessible.
   */
  create(body: EntryCreateParams, options?: RequestOptions): APIPromise<Entry> {
    return this._client.post('/v1/content/entries', { body, ...options });
  }

  /**
   * Updates an existing content entry. Supports partial updates - only specified
   * fields are modified. Use the version parameter for optimistic locking to prevent
   * concurrent update conflicts.
   */
  update(
    entryID: string,
    body: EntryUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Entry> {
    return this._client.patch(path`/v1/content/entries/${entryID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of content entries. Supports filtering by model,
   * status, locale, and custom field queries. Use the 'where' parameter for
   * field-based filtering with operators like $eq, $contains, $gt, etc.
   */
  list(
    query: EntryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EntriesCursorIDPage, Entry> {
    return this._client.getAPIList('/v1/content/entries', CursorIDPage<Entry>, { query, ...options });
  }

  /**
   * Archives a content entry, hiding it from the API and public access. The entry
   * data is preserved and can be restored later.
   */
  archive(entryID: string, options?: RequestOptions): APIPromise<Entry> {
    return this._client.delete(path`/v1/content/entries/${entryID}`, options);
  }

  /**
   * Retrieves a content entry by ID. Optionally specify a locale to get localized
   * field values with fallback resolution.
   */
  get(entryID: string, options?: RequestOptions): APIPromise<Entry> {
    return this._client.get(path`/v1/content/entries/${entryID}`, options);
  }

  /**
   * Publishes a content entry, making it publicly accessible. Optionally schedule
   * publishing for a future time. Publishing validates that all required fields have
   * values.
   */
  publish(
    entryID: string,
    body: EntryPublishParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Entry> {
    return this._client.post(path`/v1/content/entries/${entryID}/publish`, { body, ...options });
  }

  /**
   * Unpublishes a content entry, reverting it to draft status. The entry will no
   * longer be publicly accessible but all data is preserved.
   */
  unpublish(entryID: string, options?: RequestOptions): APIPromise<Entry> {
    return this._client.post(path`/v1/content/entries/${entryID}/unpublish`, options);
  }
}

export type EntriesCursorIDPage = CursorIDPage<Entry>;

/**
 * A content entry containing field values based on its model schema. Entries can
 * be drafts, published, or archived.
 */
export interface Entry {
  /**
   * Unique identifier for the entry
   */
  id: string;

  /**
   * Timestamp when the entry was created
   */
  created: string;

  /**
   * Field values. For localized fields: { fieldApiId: { locale: value } }. For
   * non-localized: { fieldApiId: value }
   */
  fields: { [key: string]: unknown };

  /**
   * Primary locale for this entry
   */
  locale: string;

  /**
   * ID of the content model this entry belongs to
   */
  model_id: string;

  /**
   * Publishing status: draft, published, or archived
   */
  status: 'draft' | 'published' | 'archived';

  /**
   * Timestamp when the entry was last updated
   */
  updated: string;

  /**
   * Version number for optimistic locking
   */
  version: number;

  /**
   * Timestamp when first published
   */
  first_published_at?: string | null;

  /**
   * API ID of the content model (included when populated)
   */
  model_api_id?: string;

  /**
   * Timestamp when last published
   */
  published_at?: string | null;

  /**
   * Scheduled publish time
   */
  scheduled_publish_at?: string | null;

  /**
   * Scheduled unpublish time
   */
  scheduled_unpublish_at?: string | null;
}

export interface EntryCreateParams {
  /**
   * API ID of the content model (e.g., 'blogPost')
   */
  model: string;

  /**
   * Optional custom ID for the entry. Must start with 'ce\_'. If not provided, one
   * will be generated.
   */
  id?: string;

  /**
   * Field values. For localized fields: { fieldApiId: { locale: value } }. For
   * non-localized: { fieldApiId: value }
   */
  fields?: { [key: string]: unknown };

  /**
   * Primary locale for this entry
   */
  locale?: string;

  /**
   * Initial status (default: draft)
   */
  status?: 'draft' | 'published' | 'archived';
}

export interface EntryUpdateParams {
  /**
   * Field values to update. Supports partial updates - only specified fields are
   * changed.
   */
  fields?: { [key: string]: unknown };

  /**
   * Primary locale
   */
  locale?: string;

  /**
   * Expected version for optimistic locking. Update fails if version mismatch.
   */
  version?: number;
}

export interface EntryListParams extends CursorIDPageParams {
  /**
   * Filter by creation date
   */
  created?: EntryListParams.Created;

  /**
   * Depth for populating reference fields (0-3)
   */
  include_depth?: number;

  /**
   * Filter by primary locale
   */
  locale?: string;

  /**
   * Filter by content model API ID (e.g., 'blogPost')
   */
  model?: string;

  /**
   * JSON-encoded sort order. Example: {"field":"publishedAt","direction":"desc"}
   */
  order_by?: string;

  /**
   * Filter by publish date
   */
  published?: EntryListParams.Published;

  /**
   * Full-text search across text fields
   */
  query?: string;

  /**
   * Filter by status
   */
  status?: 'draft' | 'published' | 'archived';

  /**
   * Filter by update date
   */
  updated?: EntryListParams.Updated;

  /**
   * JSON-encoded field filters. Example: {"title":{"$contains":"hello"}}
   */
  where?: string;
}

export namespace EntryListParams {
  /**
   * Filter by creation date
   */
  export interface Created {
    /**
     * Greater than (Unix timestamp in seconds)
     */
    gt?: number;

    /**
     * Greater than or equal (Unix timestamp in seconds)
     */
    gte?: number;

    /**
     * Less than (Unix timestamp in seconds)
     */
    lt?: number;

    /**
     * Less than or equal (Unix timestamp in seconds)
     */
    lte?: number;
  }

  /**
   * Filter by publish date
   */
  export interface Published {
    /**
     * Greater than (Unix timestamp in seconds)
     */
    gt?: number;

    /**
     * Greater than or equal (Unix timestamp in seconds)
     */
    gte?: number;

    /**
     * Less than (Unix timestamp in seconds)
     */
    lt?: number;

    /**
     * Less than or equal (Unix timestamp in seconds)
     */
    lte?: number;
  }

  /**
   * Filter by update date
   */
  export interface Updated {
    /**
     * Greater than (Unix timestamp in seconds)
     */
    gt?: number;

    /**
     * Greater than or equal (Unix timestamp in seconds)
     */
    gte?: number;

    /**
     * Less than (Unix timestamp in seconds)
     */
    lt?: number;

    /**
     * Less than or equal (Unix timestamp in seconds)
     */
    lte?: number;
  }
}

export interface EntryPublishParams {
  /**
   * Schedule publish for a future time instead of publishing immediately
   */
  scheduled_at?: string;
}

export declare namespace Entries {
  export {
    type Entry as Entry,
    type EntriesCursorIDPage as EntriesCursorIDPage,
    type EntryCreateParams as EntryCreateParams,
    type EntryUpdateParams as EntryUpdateParams,
    type EntryListParams as EntryListParams,
    type EntryPublishParams as EntryPublishParams,
  };
}
