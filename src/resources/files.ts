// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Upload, retrieve, and list files and media associated with a website.
 * Upload is a two-step process: first call create to get an upload URL,
 * then PUT the file content to that URL. The PUT response returns the
 * completed MediaFile object. No separate complete call is needed.
 */
export class Files extends APIResource {
  /**
   * Prepares a file upload by returning an upload URL. PUT your file content to the
   * returned upload_url with the provided headers. The PUT response will contain the
   * completed MediaFile object with its CDN URL.
   */
  create(body: FileCreateParams, options?: RequestOptions): APIPromise<Upload> {
    return this._client.post('/v1/files', { body, ...options });
  }

  /**
   * Retrieves a paginated list of files uploaded to the website. Supports filtering
   * by MIME type, folder path, creation date, and filename search.
   */
  list(
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FilesCursorIDPage, File> {
    return this._client.getAPIList('/v1/files', CursorIDPage<File>, { query, ...options });
  }

  /**
   * Retrieves a file by its ID, including its CDN URL and metadata.
   */
  get(fileID: string, options?: RequestOptions): APIPromise<File> {
    return this._client.get(path`/v1/files/${fileID}`, options);
  }
}

export type FilesCursorIDPage = CursorIDPage<File>;

/**
 * A file uploaded to CDN storage, linked to a website.
 */
export interface File {
  /**
   * Unique identifier for the file
   */
  id: string;

  /**
   * Timestamp when the file was created
   */
  created: string;

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
   */
  size: number;

  /**
   * Timestamp when the file was last updated
   */
  updated: string;

  /**
   * Public CDN URL to access the file
   */
  url: string;

  /**
   * SHA256 hash of the file content
   */
  content_hash?: string | null;

  /**
   * Additional file metadata
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * Folder path within the website (e.g., '/images/blog')
   */
  path?: string | null;
}

/**
 * Response containing an upload URL. PUT the file content to upload_url with the
 * provided headers. The PUT response will contain the completed MediaFile object.
 */
export interface Upload {
  /**
   * File ID assigned to this upload
   */
  id: string;

  /**
   * Headers to include with the PUT request
   */
  upload_headers: { [key: string]: string };

  /**
   * URL to PUT the file content to. The upload proxy will store the file, create
   * database records, and return the completed MediaFile object in the PUT response.
   */
  upload_url: string;
}

export interface FileCreateParams {
  /**
   * Original filename of the file to upload
   */
  filename: string;

  /**
   * MIME type of the file (e.g., 'image/jpeg')
   */
  mime_type: string;

  /**
   * File size in bytes
   */
  size: number;

  /**
   * Optional folder path within the website
   */
  path?: string;
}

export interface FileListParams extends CursorIDPageParams {
  /**
   * Filter by creation date
   */
  created?: FileListParams.Created;

  /**
   * Filter by MIME type (supports wildcards like 'image/\*')
   */
  mime_type?: string;

  /**
   * Filter by folder path
   */
  path?: string;

  /**
   * Search in filename
   */
  query?: string;
}

export namespace FileListParams {
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

export declare namespace Files {
  export {
    type File as File,
    type Upload as Upload,
    type FilesCursorIDPage as FilesCursorIDPage,
    type FileCreateParams as FileCreateParams,
    type FileListParams as FileListParams,
  };
}
