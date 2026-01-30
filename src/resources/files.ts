// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Upload, retrieve, and list files and media associated with a website.
 * Upload is a two-step process: first create an upload to get a presigned URL,
 * then complete the upload after putting the file content to the presigned URL.
 */
export class Files extends APIResource {
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
 * Response containing a presigned upload URL. PUT the file content to upload_url
 * with the provided headers, then call complete to finalize.
 */
export interface Upload {
  /**
   * File ID to use when completing the upload
   */
  id: string;

  /**
   * Headers to include with the PUT request
   */
  upload_headers: { [key: string]: string };

  /**
   * Presigned URL to PUT the file content to
   */
  upload_url: string;
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
    type FileListParams as FileListParams,
  };
}
