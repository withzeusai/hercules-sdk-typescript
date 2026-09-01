// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../../core/pagination';
import type { RequestOptions } from '../../../internal/request-options';
import { path as __scalarPath } from '../../../internal/utils/path';
import * as FieldsAPI from './fields';
import { Fields, type FieldCreateParams, type FieldUpdateParams, type FieldDeleteParams } from './fields';

export class Collections extends APIResource {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);

  /**
   * Retrieves a paginated list of content collections. Content collections define the schema/structure for content entries.
   *
   * @param {CollectionListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<CollectionsCursorIDPage, Collection>} A paginated list of content collection objects
   *
   * @example
   * ```ts
   * const page = await client.content.collections.list();
   * ```
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
   * Retrieves a content collection by ID. Returns the collection object including all field definitions.
   *
   * @param {string} collectionID - The unique identifier of the content collection
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Collection>} The content collection object
   *
   * @example
   * ```ts
   * const collection = await client.content.collections.get('collectionId');
   * ```
   */
  get(collectionID: string, options?: RequestOptions): APIPromise<Collection> {
    return this._client.get(__scalarPath`/v1/content/collections/${collectionID}`, options);
  }

  /**
   * Creates a new content collection with optional initial fields. Content collections define the schema for entries. Example collections: 'Blog Post', 'Product', 'Author'.
   *
   * @param {CollectionCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Collection>} The created content collection object
   *
   * @example
   * ```ts
   * const collection = await client.content.collections.create({
   *   api_id: 'x',
   *   name: '',
   *   fields: [],
   * });
   * ```
   */
  create(body: CollectionCreateParams, options?: RequestOptions): APIPromise<Collection> {
    return this._client.post('/v1/content/collections', { body, ...options });
  }

  /**
   * Updates an existing content collection. Use this to modify the name, description, or lock status. The api_id cannot be changed after creation.
   *
   * @param {string} collectionID - The unique identifier of the content collection
   * @param {CollectionUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Collection>} The updated content collection object
   *
   * @example
   * ```ts
   * const collection = await client.content.collections.update('collectionId', {});
   * ```
   */
  update(
    collectionID: string,
    body: CollectionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Collection> {
    return this._client.patch(__scalarPath`/v1/content/collections/${collectionID}`, { body, ...options });
  }

  /**
   * Archives a content collection, hiding it from the API. Existing entries are preserved. Use this instead of deletion to maintain data integrity.
   *
   * @param {string} collectionID - The unique identifier of the content collection
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Collection>} The archived content collection object
   *
   * @example
   * ```ts
   * const collection = await client.content.collections.archive('collectionId');
   * ```
   */
  archive(collectionID: string, options?: RequestOptions): APIPromise<Collection> {
    return this._client.delete(__scalarPath`/v1/content/collections/${collectionID}`, options);
  }
}

/**
 * A content collection defines the schema/structure for content entries. Each collection has fields that define what data entries can contain.
 */
export interface Collection {
  /**
   * Unique identifier for the content collection
   */
  id: string;
  /**
   * API identifier for the collection (camelCase, e.g., 'blogPost', 'product')
   * @minLength 1
   * @maxLength 100
   * @pattern ^[a-z][\dA-Za-z]*$
   */
  api_id: string;
  /**
   * Display name for the collection
   */
  name: string;
  /**
   * Schema version number
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  version: number;
  /**
   * Whether field modifications are locked (for production safety)
   */
  locked: boolean;
  /**
   * Timestamp when the collection was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * Timestamp when the collection was last updated
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  updated: string;
  /**
   * Description of the collection
   */
  description?: string | null;
  /**
   * Fields defined in this collection
   * @default []
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
   * @minLength 1
   * @maxLength 100
   * @pattern ^[a-z][\dA-Za-z]*$
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
   * Timestamp when the field was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * Description of the field
   */
  description?: string | null;
  /**
   * Validation rules
   */
  validation?: Field.Validation;
  /**
   * Whether field values are stored per-locale
   * @default false
   */
  localized?: boolean;
  /**
   * Display order within the collection
   * @default 0
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  display_order?: number;
}

export namespace Field {
  export interface Validation {
    /**
     * Whether the field is required
     */
    required?: boolean;
    /**
     * Whether field values must be unique
     */
    unique?: boolean;
    /**
     * Minimum value for numbers, minimum length for text/arrays
     */
    min?: number;
    /**
     * Maximum value for numbers, maximum length for text/arrays
     */
    max?: number;
    /**
     * Regex pattern for text field validation
     */
    pattern?: string;
    /**
     * Allowed values for enum fields
     */
    allowed_values?: Array<string>;
    /**
     * Allowed collection apiIds for reference fields
     */
    allowed_collections?: Array<string>;
    /**
     * Allowed MIME types for asset fields (e.g., 'image/*', 'application/pdf')
     */
    allowed_mime_types?: Array<string>;
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
  }
}

export interface CollectionListParams extends CursorIDPageParams {}

export type CollectionsCursorIDPage = CursorIDPage<Collection>;

export interface CollectionCreateParams {
  /**
   * API identifier for the collection (camelCase, e.g., 'blogPost')
   * @minLength 1
   * @maxLength 100
   * @pattern ^[a-z][\dA-Za-z]*$
   */
  api_id: string;
  /**
   * Display name for the collection
   */
  name: string;
  /**
   * Optional custom ID for the collection. Must start with 'cm_'. If not provided, one will be generated.
   * @pattern ^cm_[\w-]+$
   */
  id?: string;
  /**
   * Description of the collection
   */
  description?: string;
  /**
   * Initial fields to create with the collection
   * @default []
   */
  fields?: Array<CollectionCreateParams.Field>;
}

export namespace CollectionCreateParams {
  export interface Field {
    /**
     * API identifier for the field (camelCase, e.g., 'title')
     * @minLength 1
     * @maxLength 100
     * @pattern ^[a-z][\dA-Za-z]*$
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
     * Optional custom ID for the field. Must start with 'cf_'. If not provided, one will be generated.
     * @pattern ^cf_[\w-]+$
     */
    id?: string;
    /**
     * Description of the field
     */
    description?: string;
    /**
     * Validation rules
     */
    validation?: Field.Validation;
    /**
     * Whether field values are stored per-locale
     * @default false
     */
    localized?: boolean;
    /**
     * Display order within the collection
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    display_order?: number;
  }

  export namespace Field {
    export interface Validation {
      /**
       * Whether the field is required
       */
      required?: boolean;
      /**
       * Whether field values must be unique
       */
      unique?: boolean;
      /**
       * Minimum value for numbers, minimum length for text/arrays
       */
      min?: number;
      /**
       * Maximum value for numbers, maximum length for text/arrays
       */
      max?: number;
      /**
       * Regex pattern for text field validation
       */
      pattern?: string;
      /**
       * Allowed values for enum fields
       */
      allowed_values?: Array<string>;
      /**
       * Allowed collection apiIds for reference fields
       */
      allowed_collections?: Array<string>;
      /**
       * Allowed MIME types for asset fields (e.g., 'image/*', 'application/pdf')
       */
      allowed_mime_types?: Array<string>;
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
    }
  }
}

export interface CollectionUpdateParams {
  /**
   * Display name for the collection
   */
  name?: string;
  /**
   * Description of the collection
   */
  description?: string;
  /**
   * Lock the collection to prevent field modifications
   */
  locked?: boolean;
}
Collections.Fields = Fields;

export declare namespace Collections {
  export {
    type Collection as Collection,
    type Field as Field,
    type CollectionsCursorIDPage as CollectionsCursorIDPage,
    type CollectionListParams as CollectionListParams,
    type CollectionCreateParams as CollectionCreateParams,
    type CollectionUpdateParams as CollectionUpdateParams,
  };

  export {
    Fields as Fields,
    type FieldCreateParams as FieldCreateParams,
    type FieldUpdateParams as FieldUpdateParams,
    type FieldDeleteParams as FieldDeleteParams,
  };
}
