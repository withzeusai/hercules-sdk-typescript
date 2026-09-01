// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../core/pagination';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import { path as __scalarPath } from '../../internal/utils/path';

export class Assets extends APIResource {
  /**
   * Retrieves a paginated list of content assets (images, videos, documents, etc.). Supports filtering by status, MIME type, folder, and search.
   *
   * @param {AssetListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<AssetsCursorIDPage, Asset>} A paginated list of content asset objects
   *
   * @example
   * ```ts
   * const page = await client.content.assets.list();
   * ```
   */
  list(
    query: AssetListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AssetsCursorIDPage, Asset> {
    return this._client.getAPIList('/v1/content/assets', CursorIDPage<Asset>, { query, ...options });
  }

  /**
   * Retrieves a content asset by ID with its metadata.
   *
   * @param {string} assetID - The unique identifier of the asset
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Asset>} The content asset object
   *
   * @example
   * ```ts
   * const asset = await client.content.assets.get('assetId');
   * ```
   */
  get(assetID: string, options?: RequestOptions): APIPromise<Asset> {
    return this._client.get(__scalarPath`/v1/content/assets/${assetID}`, options);
  }

  /**
   * Creates a new content asset with metadata. For now, this creates asset metadata only - provide a URL for an externally hosted file. Full upload support coming soon.
   *
   * @param {AssetCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Asset>} The created content asset object
   *
   * @example
   * ```ts
   * const asset = await client.content.assets.create({
   *   filename: '',
   *   mime_type: '',
   *   size: 0,
   *   metadata: {},
   *   folder: '/',
   * });
   * ```
   */
  create(body: AssetCreateParams, options?: RequestOptions): APIPromise<Asset> {
    return this._client.post('/v1/content/assets', { body, ...options });
  }

  /**
   * Updates asset metadata including URL, folder, title, description, and custom metadata.
   *
   * @param {string} assetID - The unique identifier of the asset
   * @param {AssetUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Asset>} The updated content asset object
   *
   * @example
   * ```ts
   * const asset = await client.content.assets.update('assetId', {});
   * ```
   */
  update(assetID: string, body: AssetUpdateParams, options?: RequestOptions): APIPromise<Asset> {
    return this._client.patch(__scalarPath`/v1/content/assets/${assetID}`, { body, ...options });
  }

  /**
   * Permanently deletes a content asset. This action cannot be undone. Entries referencing this asset will have broken references.
   *
   * @param {string} assetID - The unique identifier of the asset
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Asset successfully deleted
   *
   * @example
   * ```ts
   * await client.content.assets.delete('assetId');
   * ```
   */
  delete(assetID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(__scalarPath`/v1/content/assets/${assetID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Publishes a content asset, making it publicly accessible via its URL.
   *
   * @param {string} assetID - The unique identifier of the asset
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Asset>} The published content asset object
   *
   * @example
   * ```ts
   * const asset = await client.content.assets.publish('assetId');
   * ```
   */
  publish(assetID: string, options?: RequestOptions): APIPromise<Asset> {
    return this._client.post(__scalarPath`/v1/content/assets/${assetID}/publish`, options);
  }
}

/**
 * A media asset (image, video, document, etc.) that can be referenced by content entries.
 */
export interface Asset {
  /**
   * Unique identifier for the asset
   */
  id: string;
  /**
   * Original filename
   */
  filename: string;
  /**
   * MIME type (e.g., 'image/jpeg', 'application/pdf')
   */
  mime_type: string;
  /**
   * File size in bytes
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  size: number;
  /**
   * Publishing status: draft or published
   */
  status: 'draft' | 'published';
  /**
   * Folder path for organization (e.g., '/images/blog')
   */
  folder: string;
  /**
   * Timestamp when the asset was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * Timestamp when the asset was last updated
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  updated: string;
  /**
   * URL to access the asset (CDN URL when published)
   */
  url?: string | null;
  /**
   * Width in pixels (for images)
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  width?: number | null;
  /**
   * Height in pixels (for images)
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  height?: number | null;
  /**
   * Custom metadata (alt text, caption, tags, etc.)
   * @default {}
   */
  metadata?: Record<string, string>;
  /**
   * Timestamp when published
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  published_at?: string | null;
  /**
   * Display title (optional, defaults to filename)
   */
  title?: string | null;
  /**
   * Description of the asset
   */
  description?: string | null;
}

export interface AssetListParams extends CursorIDPageParams {
  /**
   * Filter by status
   */
  status?: 'draft' | 'published';
  /**
   * Filter by MIME type (supports wildcards like 'image/*')
   */
  mime_type?: string;
  /**
   * Filter by folder path
   */
  folder?: string;
  /**
   * Filter by creation date
   */
  created?: AssetListParams.Created;
  /**
   * Search in filename, title, and description
   */
  query?: string;
}

export namespace AssetListParams {
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
}

export type AssetsCursorIDPage = CursorIDPage<Asset>;

export interface AssetCreateParams {
  /**
   * Original filename
   */
  filename: string;
  /**
   * MIME type (e.g., 'image/jpeg')
   */
  mime_type: string;
  /**
   * File size in bytes
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  size: number;
  /**
   * Optional custom ID for the asset. Must start with 'ca_'. If not provided, one will be generated.
   * @pattern ^ca_[\w-]+$
   */
  id?: string;
  /**
   * URL to access the asset (external URL)
   */
  url?: string;
  /**
   * Width in pixels (for images)
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  width?: number;
  /**
   * Height in pixels (for images)
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  height?: number;
  /**
   * Custom metadata
   * @default {}
   */
  metadata?: Record<string, string>;
  /**
   * Folder path for organization
   * @default /
   */
  folder?: string;
  /**
   * Display title
   */
  title?: string;
  /**
   * Description
   */
  description?: string;
}

export interface AssetUpdateParams {
  /**
   * URL to access the asset
   */
  url?: string;
  /**
   * Custom metadata
   */
  metadata?: Record<string, string>;
  /**
   * Folder path
   */
  folder?: string;
  /**
   * Display title
   */
  title?: string;
  /**
   * Description
   */
  description?: string;
}
export declare namespace Assets {
  export {
    type Asset as Asset,
    type AssetsCursorIDPage as AssetsCursorIDPage,
    type AssetListParams as AssetListParams,
    type AssetCreateParams as AssetCreateParams,
    type AssetUpdateParams as AssetUpdateParams,
  };
}
