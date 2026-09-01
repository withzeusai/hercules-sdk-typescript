// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../core/pagination';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Files extends APIResource {
  /**
   * Retrieves a paginated list of files uploaded to the website. Supports filtering by MIME type, folder path, creation date, and filename search.
   *
   * @param {FileListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<FilesCursorIDPage, File>} A paginated list of file objects
   *
   * @example
   * ```ts
   * const page = await client.files.list();
   * ```
   */
  list(
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FilesCursorIDPage, File> {
    return this._client.getAPIList('/v1/files', CursorIDPage<File>, { query, ...options });
  }

  /**
   * Retrieves a file by its ID, including its CDN URL and metadata.
   *
   * @param {string} fileID - The unique identifier of the file
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<File>} The file object
   *
   * @example
   * ```ts
   * const file = await client.files.get('fileId');
   * ```
   */
  get(fileID: string, options?: RequestOptions): APIPromise<File> {
    return this._client.get(__scalarPath`/v1/files/${fileID}`, options);
  }
}

/**
 * A file uploaded to CDN storage, linked to a website.
 */
export interface File {
  /**
   * Unique identifier for the file
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
   * Public CDN URL to access the file
   */
  url: string;
  /**
   * Timestamp when the file was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * Timestamp when the file was last updated
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  updated: string;
  /**
   * SHA256 hash of the file content
   */
  content_hash?: string | null;
  /**
   * Folder path within the website (e.g., '/images/blog')
   */
  path?: string | null;
  /**
   * Additional file metadata
   */
  metadata?: Record<string, unknown> | null;
}

/**
 * Response containing an upload URL. PUT the file content to upload_url with the provided headers. The PUT response will contain the completed MediaFile object.
 */
export interface Upload {
  /**
   * File ID assigned to this upload
   */
  id: string;
  /**
   * URL to PUT the file content to. The upload proxy will store the file, create database records, and return the completed MediaFile object in the PUT response.
   */
  upload_url: string;
  /**
   * Headers to include with the PUT request
   */
  upload_headers: Record<string, string>;
}

export interface FileListParams extends CursorIDPageParams {
  /**
   * Filter by MIME type (supports wildcards like 'image/*')
   */
  mime_type?: string;
  /**
   * Filter by folder path
   */
  path?: string;
  /**
   * Filter by creation date
   */
  created?: FileListParams.Created;
  /**
   * Search in filename
   */
  query?: string;
}

export namespace FileListParams {
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

export type FilesCursorIDPage = CursorIDPage<File>;
export declare namespace Files {
  export {
    type File as File,
    type Upload as Upload,
    type FilesCursorIDPage as FilesCursorIDPage,
    type FileListParams as FileListParams,
  };
}
