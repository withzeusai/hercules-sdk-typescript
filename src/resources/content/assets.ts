// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Assets extends APIResource {
  /**
   * Creates a new content asset with metadata. For now, this creates asset metadata
   * only - provide a URL for an externally hosted file. Full upload support coming
   * soon.
   */
  create(body: AssetCreateParams, options?: RequestOptions): APIPromise<Asset> {
    return this._client.post('/v1/content/assets', { body, ...options });
  }

  /**
   * Updates asset metadata including URL, folder, title, description, and custom
   * metadata.
   */
  update(
    assetID: string,
    body: AssetUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Asset> {
    return this._client.patch(path`/v1/content/assets/${assetID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of content assets (images, videos, documents, etc.).
   * Supports filtering by status, MIME type, folder, and search.
   */
  list(
    query: AssetListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AssetsCursorIDPage, Asset> {
    return this._client.getAPIList('/v1/content/assets', CursorIDPage<Asset>, { query, ...options });
  }

  /**
   * Permanently deletes a content asset. This action cannot be undone. Entries
   * referencing this asset will have broken references.
   */
  delete(assetID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/content/assets/${assetID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a content asset by ID with its metadata.
   */
  get(assetID: string, options?: RequestOptions): APIPromise<Asset> {
    return this._client.get(path`/v1/content/assets/${assetID}`, options);
  }

  /**
   * Publishes a content asset, making it publicly accessible via its URL.
   */
  publish(assetID: string, options?: RequestOptions): APIPromise<Asset> {
    return this._client.post(path`/v1/content/assets/${assetID}/publish`, options);
  }
}

export type AssetsCursorIDPage = CursorIDPage<Asset>;

/**
 * A media asset (image, video, document, etc.) that can be referenced by content
 * entries.
 */
export interface Asset {
  /**
   * Unique identifier for the asset
   */
  id: string;

  /**
   * Timestamp when the asset was created
   */
  created: string;

  /**
   * Original filename
   */
  filename: string;

  /**
   * Folder path for organization (e.g., '/images/blog')
   */
  folder: string;

  /**
   * MIME type (e.g., 'image/jpeg', 'application/pdf')
   */
  mime_type: string;

  /**
   * File size in bytes
   */
  size: number;

  /**
   * Publishing status: draft or published
   */
  status: 'draft' | 'published';

  /**
   * Timestamp when the asset was last updated
   */
  updated: string;

  /**
   * Description of the asset
   */
  description?: string | null;

  /**
   * Height in pixels (for images)
   */
  height?: number | null;

  /**
   * Custom metadata (alt text, caption, tags, etc.)
   */
  metadata?: { [key: string]: string };

  /**
   * Timestamp when published
   */
  published_at?: string | null;

  /**
   * Display title (optional, defaults to filename)
   */
  title?: string | null;

  /**
   * URL to access the asset (CDN URL when published)
   */
  url?: string | null;

  /**
   * Width in pixels (for images)
   */
  width?: number | null;
}

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
   */
  size: number;

  /**
   * Optional custom ID for the asset. Must start with 'ca\_'. If not provided, one
   * will be generated.
   */
  id?: string;

  /**
   * Description
   */
  description?: string;

  /**
   * Folder path for organization
   */
  folder?: string;

  /**
   * Height in pixels (for images)
   */
  height?: number;

  /**
   * Custom metadata
   */
  metadata?: { [key: string]: string };

  /**
   * Display title
   */
  title?: string;

  /**
   * URL to access the asset (external URL)
   */
  url?: string;

  /**
   * Width in pixels (for images)
   */
  width?: number;
}

export interface AssetUpdateParams {
  /**
   * Description
   */
  description?: string;

  /**
   * Folder path
   */
  folder?: string;

  /**
   * Custom metadata
   */
  metadata?: { [key: string]: string };

  /**
   * Display title
   */
  title?: string;

  /**
   * URL to access the asset
   */
  url?: string;
}

export interface AssetListParams extends CursorIDPageParams {
  /**
   * Filter by creation date
   */
  created?: AssetListParams.Created;

  /**
   * Filter by folder path
   */
  folder?: string;

  /**
   * Filter by MIME type (supports wildcards like 'image/\*')
   */
  mime_type?: string;

  /**
   * Search in filename, title, and description
   */
  query?: string;

  /**
   * Filter by status
   */
  status?: 'draft' | 'published';
}

export namespace AssetListParams {
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
}

export declare namespace Assets {
  export {
    type Asset as Asset,
    type AssetsCursorIDPage as AssetsCursorIDPage,
    type AssetCreateParams as AssetCreateParams,
    type AssetUpdateParams as AssetUpdateParams,
    type AssetListParams as AssetListParams,
  };
}
