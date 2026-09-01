// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../core/pagination';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Entries extends APIResource {
  /**
   * Retrieves a paginated list of content entries. Supports filtering by collection, status, locale, and custom field queries. Use the 'where' parameter for field-based filtering with operators like $eq, $contains, $gt, etc.
   *
   * @param {EntryListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<EntriesCursorIDPage, Entry>} A paginated list of content entry objects
   *
   * @example
   * ```ts
   * const page = await client.content.entries.list({
   *   include_depth: 0,
   * });
   * ```
   */
  list(
    query: EntryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EntriesCursorIDPage, Entry> {
    return this._client.getAPIList('/v1/content/entries', CursorIDPage<Entry>, { query, ...options });
  }

  /**
   * Retrieves a content entry by ID. Optionally specify a locale to get localized field values with fallback resolution.
   *
   * @param {string} entryID - The unique identifier of the entry
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Entry>} The content entry object
   *
   * @example
   * ```ts
   * const entry = await client.content.entries.get('entryId');
   * ```
   */
  get(entryID: string, options?: RequestOptions): APIPromise<Entry> {
    return this._client.get(__scalarPath`/v1/content/entries/${entryID}`, options);
  }

  /**
   * Creates a new content entry for a given collection. Entries start as drafts by default. Use the publish endpoint to make entries publicly accessible.
   *
   * @param {EntryCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Entry>} The created content entry object
   *
   * @example
   * ```ts
   * const entry = await client.content.entries.create({
   *   collection: 'x',
   *   fields: {},
   *   status: 'draft',
   * });
   * ```
   */
  create(body: EntryCreateParams, options?: RequestOptions): APIPromise<Entry> {
    return this._client.post('/v1/content/entries', { body, ...options });
  }

  /**
   * Updates an existing content entry. Supports partial updates - only specified fields are modified. Use the version parameter for optimistic locking to prevent concurrent update conflicts.
   *
   * @param {string} entryID - The unique identifier of the entry
   * @param {EntryUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Entry>} The updated content entry object
   *
   * @example
   * ```ts
   * const entry = await client.content.entries.update('entryId', {});
   * ```
   */
  update(entryID: string, body: EntryUpdateParams, options?: RequestOptions): APIPromise<Entry> {
    return this._client.patch(__scalarPath`/v1/content/entries/${entryID}`, { body, ...options });
  }

  /**
   * Archives a content entry, hiding it from the API and public access. The entry data is preserved and can be restored later.
   *
   * @param {string} entryID - The unique identifier of the entry
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Entry>} The archived content entry object
   *
   * @example
   * ```ts
   * const entry = await client.content.entries.archive('entryId');
   * ```
   */
  archive(entryID: string, options?: RequestOptions): APIPromise<Entry> {
    return this._client.delete(__scalarPath`/v1/content/entries/${entryID}`, options);
  }

  /**
   * Publishes a content entry, making it publicly accessible. Optionally schedule publishing for a future time. Publishing validates that all required fields have values.
   *
   * @param {string} entryID - The unique identifier of the entry
   * @param {EntryPublishParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Entry>} The published content entry object
   *
   * @example
   * ```ts
   * const entry = await client.content.entries.publish('entryId', {});
   * ```
   */
  publish(entryID: string, body: EntryPublishParams, options?: RequestOptions): APIPromise<Entry> {
    return this._client.post(__scalarPath`/v1/content/entries/${entryID}/publish`, { body, ...options });
  }

  /**
   * Unpublishes a content entry, reverting it to draft status. The entry will no longer be publicly accessible but all data is preserved.
   *
   * @param {string} entryID - The unique identifier of the entry
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Entry>} The unpublished content entry object
   *
   * @example
   * ```ts
   * const entry = await client.content.entries.unpublish('entryId');
   * ```
   */
  unpublish(entryID: string, options?: RequestOptions): APIPromise<Entry> {
    return this._client.post(__scalarPath`/v1/content/entries/${entryID}/unpublish`, options);
  }
}

/**
 * A content entry containing field values based on its collection schema. Entries can be drafts, published, or archived.
 */
export interface Entry {
  /**
   * Unique identifier for the entry
   */
  id: string;
  /**
   * ID of the content collection this entry belongs to
   */
  collection_id: string;
  /**
   * Field values. Localization is field-level: localized fields use { fieldApiId: { locale: value } }, non-localized use { fieldApiId: value }.
   */
  fields: Record<string, unknown>;
  /**
   * Publishing status: draft, published, or archived
   */
  status: 'draft' | 'published' | 'archived';
  /**
   * Version number for optimistic locking
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  version: number;
  /**
   * Timestamp when the entry was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * Timestamp when the entry was last updated
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  updated: string;
  /**
   * API ID of the content collection (included when populated)
   */
  collection_api_id?: string;
  /**
   * Timestamp when last published
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  published_at?: string | null;
  /**
   * Timestamp when first published
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  first_published_at?: string | null;
  /**
   * Scheduled publish time
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  scheduled_publish_at?: string | null;
  /**
   * Scheduled unpublish time
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  scheduled_unpublish_at?: string | null;
}

export interface EntryListParams extends CursorIDPageParams {
  /**
   * Filter by content collection API ID (e.g., 'blogPost')
   * @minLength 1
   * @maxLength 100
   * @pattern ^[a-z][\dA-Za-z]*$
   */
  collection?: string;
  /**
   * Filter by status
   */
  status?: 'draft' | 'published' | 'archived';
  /**
   * Filter by creation date
   */
  created?: EntryListParams.Created;
  /**
   * Filter by update date
   */
  updated?: EntryListParams.Updated;
  /**
   * Filter by publish date
   */
  published?: EntryListParams.Published;
  /**
   * Full-text search across text fields
   */
  query?: string;
  /**
   * JSON-encoded field filters. Example: {"title":{"$contains":"hello"}}
   */
  where?: string;
  /**
   * JSON-encoded sort order. Example: {"field":"publishedAt","direction":"desc"}
   */
  order_by?: string;
  /**
   * Depth for populating reference fields (0-3)
   * @default 0
   * @minimum 0
   * @maximum 3
   */
  include_depth?: number;
}

export namespace EntryListParams {
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
}

export type EntriesCursorIDPage = CursorIDPage<Entry>;

export interface EntryCreateParams {
  /**
   * API ID of the content collection (e.g., 'blogPost')
   * @minLength 1
   * @maxLength 100
   * @pattern ^[a-z][\dA-Za-z]*$
   */
  collection: string;
  /**
   * Optional custom ID for the entry. Must start with 'ce_'. If not provided, one will be generated.
   * @pattern ^ce_[\w-]+$
   */
  id?: string;
  /**
   * Field values. Localization is field-level: localized fields use { fieldApiId: { locale: value } }, non-localized use { fieldApiId: value }.
   * @default {}
   */
  fields?: Record<string, unknown>;
  /**
   * Initial status (default: draft)
   */
  status?: 'draft' | 'published' | 'archived';
}

export interface EntryUpdateParams {
  /**
   * Field values to update. Supports partial updates - only specified fields are changed.
   */
  fields?: Record<string, unknown>;
  /**
   * Expected version for optimistic locking. Update fails if version mismatch.
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  version?: number;
}

export interface EntryPublishParams {
  /**
   * Schedule publish for a future time instead of publishing immediately
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  scheduled_at?: string;
}
export declare namespace Entries {
  export {
    type Entry as Entry,
    type EntriesCursorIDPage as EntriesCursorIDPage,
    type EntryListParams as EntryListParams,
    type EntryCreateParams as EntryCreateParams,
    type EntryUpdateParams as EntryUpdateParams,
    type EntryPublishParams as EntryPublishParams,
  };
}
