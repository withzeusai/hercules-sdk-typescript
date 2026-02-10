// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FieldsAPI from './fields';
import { FieldCreateParams, FieldDeleteParams, FieldUpdateParams, Fields } from './fields';
import { APIPromise } from '../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Collections extends APIResource {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);

  /**
   * Creates a new content collection with optional initial fields. Content
   * collections define the schema for entries. Example collections: 'Blog Post',
   * 'Product', 'Author'.
   */
  create(body: CollectionCreateParams, options?: RequestOptions): APIPromise<Collection> {
    return this._client.post('/v1/content/collections', { body, ...options });
  }

  /**
   * Updates an existing content collection. Use this to modify the name,
   * description, or lock status. The api_id cannot be changed after creation.
   */
  update(
    collectionID: string,
    body: CollectionUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Collection> {
    return this._client.patch(path`/v1/content/collections/${collectionID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of content collections. Content collections define
   * the schema/structure for content entries.
   */
  list(
    query: CollectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CollectionsCursorIDPage, Collection> {
    return this._client.getAPIList('/v1/content/collections', CursorIDPage<Collection>, {
      query,
      ...options,
    });
  }

  /**
   * Archives a content collection, hiding it from the API. Existing entries are
   * preserved. Use this instead of deletion to maintain data integrity.
   */
  archive(collectionID: string, options?: RequestOptions): APIPromise<Collection> {
    return this._client.delete(path`/v1/content/collections/${collectionID}`, options);
  }

  /**
   * Retrieves a content collection by ID. Returns the collection object including
   * all field definitions.
   */
  get(collectionID: string, options?: RequestOptions): APIPromise<Collection> {
    return this._client.get(path`/v1/content/collections/${collectionID}`, options);
  }
}

export type CollectionsCursorIDPage = CursorIDPage<Collection>;

/**
 * A content collection defines the schema/structure for content entries. Each
 * collection has fields that define what data entries can contain.
 */
export interface Collection {
  /**
   * Unique identifier for the content collection
   */
  id: string;

  /**
   * API identifier for the collection (camelCase, e.g., 'blogPost', 'product')
   */
  api_id: string;

  /**
   * Timestamp when the collection was created
   */
  created: string;

  /**
   * Whether field modifications are locked (for production safety)
   */
  locked: boolean;

  /**
   * Display name for the collection
   */
  name: string;

  /**
   * Timestamp when the collection was last updated
   */
  updated: string;

  /**
   * Schema version number
   */
  version: number;

  /**
   * Description of the collection
   */
  description?: string | null;

  /**
   * Fields defined in this collection
   */
  fields?: Array<Field>;
}

/**
 * A field definition within a content collection
 */
export interface Field {
  /**
   * Unique identifier for the field
   */
  id: string;

  /**
   * API identifier for the field (camelCase, e.g., 'title', 'publishDate')
   */
  api_id: string;

  /**
   * Timestamp when the field was created
   */
  created: string;

  /**
   * Display name for the field
   */
  name: string;

  /**
   * Field data type
   */
  type:
    | 'text'
    | 'markdown'
    | 'number'
    | 'boolean'
    | 'date'
    | 'datetime'
    | 'json'
    | 'reference'
    | 'asset'
    | 'enum'
    | 'array';

  /**
   * Description of the field
   */
  description?: string | null;

  /**
   * Display order within the collection
   */
  display_order?: number;

  /**
   * Whether field values are stored per-locale
   */
  localized?: boolean;

  /**
   * Validation rules
   */
  validation?: Field.Validation;
}

export namespace Field {
  /**
   * Validation rules
   */
  export interface Validation {
    /**
     * Allowed collection apiIds for reference fields
     */
    allowed_collections?: Array<string>;

    /**
     * Allowed MIME types for asset fields (e.g., 'image/\*', 'application/pdf')
     */
    allowed_mime_types?: Array<string>;

    /**
     * Allowed values for enum fields
     */
    allowed_values?: Array<string>;

    /**
     * Type of items for array fields
     */
    array_item_type?:
      | 'text'
      | 'markdown'
      | 'number'
      | 'boolean'
      | 'date'
      | 'datetime'
      | 'json'
      | 'reference'
      | 'asset'
      | 'enum'
      | 'array';

    /**
     * Default value for the field
     */
    default_value?: unknown;

    /**
     * Maximum value for numbers, maximum length for text/arrays
     */
    max?: number;

    /**
     * Minimum value for numbers, minimum length for text/arrays
     */
    min?: number;

    /**
     * Regex pattern for text field validation
     */
    pattern?: string;

    /**
     * Whether the field is required
     */
    required?: boolean;

    /**
     * Whether field values must be unique
     */
    unique?: boolean;
  }
}

export interface CollectionCreateParams {
  /**
   * API identifier for the collection (camelCase, e.g., 'blogPost')
   */
  api_id: string;

  /**
   * Display name for the collection
   */
  name: string;

  /**
   * Optional custom ID for the collection. Must start with 'cm\_'. If not provided,
   * one will be generated.
   */
  id?: string;

  /**
   * Description of the collection
   */
  description?: string;

  /**
   * Initial fields to create with the collection
   */
  fields?: Array<CollectionCreateParams.Field>;
}

export namespace CollectionCreateParams {
  /**
   * Request to add a new field to a content collection
   */
  export interface Field {
    /**
     * API identifier for the field (camelCase, e.g., 'title')
     */
    api_id: string;

    /**
     * Display name for the field
     */
    name: string;

    /**
     * Field data type
     */
    type:
      | 'text'
      | 'markdown'
      | 'number'
      | 'boolean'
      | 'date'
      | 'datetime'
      | 'json'
      | 'reference'
      | 'asset'
      | 'enum'
      | 'array';

    /**
     * Optional custom ID for the field. Must start with 'cf\_'. If not provided, one
     * will be generated.
     */
    id?: string;

    /**
     * Description of the field
     */
    description?: string;

    /**
     * Display order within the collection
     */
    display_order?: number;

    /**
     * Whether field values are stored per-locale
     */
    localized?: boolean;

    /**
     * Validation rules
     */
    validation?: Field.Validation;
  }

  export namespace Field {
    /**
     * Validation rules
     */
    export interface Validation {
      /**
       * Allowed collection apiIds for reference fields
       */
      allowed_collections?: Array<string>;

      /**
       * Allowed MIME types for asset fields (e.g., 'image/\*', 'application/pdf')
       */
      allowed_mime_types?: Array<string>;

      /**
       * Allowed values for enum fields
       */
      allowed_values?: Array<string>;

      /**
       * Type of items for array fields
       */
      array_item_type?:
        | 'text'
        | 'markdown'
        | 'number'
        | 'boolean'
        | 'date'
        | 'datetime'
        | 'json'
        | 'reference'
        | 'asset'
        | 'enum'
        | 'array';

      /**
       * Default value for the field
       */
      default_value?: unknown;

      /**
       * Maximum value for numbers, maximum length for text/arrays
       */
      max?: number;

      /**
       * Minimum value for numbers, minimum length for text/arrays
       */
      min?: number;

      /**
       * Regex pattern for text field validation
       */
      pattern?: string;

      /**
       * Whether the field is required
       */
      required?: boolean;

      /**
       * Whether field values must be unique
       */
      unique?: boolean;
    }
  }
}

export interface CollectionUpdateParams {
  /**
   * Description of the collection
   */
  description?: string;

  /**
   * Lock the collection to prevent field modifications
   */
  locked?: boolean;

  /**
   * Display name for the collection
   */
  name?: string;
}

export interface CollectionListParams extends CursorIDPageParams {}

Collections.Fields = Fields;

export declare namespace Collections {
  export {
    type Collection as Collection,
    type Field as Field,
    type CollectionsCursorIDPage as CollectionsCursorIDPage,
    type CollectionCreateParams as CollectionCreateParams,
    type CollectionUpdateParams as CollectionUpdateParams,
    type CollectionListParams as CollectionListParams,
  };

  export {
    Fields as Fields,
    type FieldCreateParams as FieldCreateParams,
    type FieldUpdateParams as FieldUpdateParams,
    type FieldDeleteParams as FieldDeleteParams,
  };
}
