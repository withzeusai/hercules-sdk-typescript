// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import type { RequestOptions } from '../../../internal/request-options';
import { buildHeaders } from '../../../internal/headers';
import { path as __scalarPath } from '../../../internal/utils/path';
import type * as CollectionsAPI from './collections';

export class Fields extends APIResource {
  /**
   * Adds a new field to a content collection. Fields define the structure of entries. The collection must not be locked. Adding a field increments the collection version.
   *
   * @param {string} collectionID - The unique identifier of the content collection
   * @param {FieldCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CollectionsAPI.Field>} The created field object
   *
   * @example
   * ```ts
   * const field = await client.content.collections.fields.create('collectionId', {
   *   api_id: 'x',
   *   name: '',
   *   type: 'text',
   *   localized: false,
   * });
   * ```
   */
  create(
    collectionID: string,
    body: FieldCreateParams,
    options?: RequestOptions,
  ): APIPromise<CollectionsAPI.Field> {
    return this._client.post(__scalarPath`/v1/content/collections/${collectionID}/fields`, {
      body,
      ...options,
    });
  }

  /**
   * Updates an existing field in a content collection. The field type cannot be changed after creation. The collection must not be locked.
   *
   * @param {string} fieldID - The unique identifier of the field
   * @param {FieldUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CollectionsAPI.Field>} The updated field object
   *
   * @example
   * ```ts
   * const field = await client.content.collections.fields.update('fieldId', {
   *   collection_id: 'collectionId',
   * });
   * ```
   */
  update(
    fieldID: string,
    params: FieldUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CollectionsAPI.Field> {
    const { collection_id, ...body } = params;
    return this._client.patch(__scalarPath`/v1/content/collections/${collection_id}/fields/${fieldID}`, {
      body,
      ...options,
    });
  }

  /**
   * Removes a field from a content collection. Existing entry data for this field is preserved but will no longer be validated. The collection must not be locked.
   *
   * @param {string} fieldID - The unique identifier of the field
   * @param {FieldDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Field successfully removed
   *
   * @example
   * ```ts
   * await client.content.collections.fields.delete('fieldId', {
   *   collection_id: 'collectionId',
   * });
   * ```
   */
  delete(fieldID: string, params: FieldDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { collection_id } = params;
    return this._client.delete(__scalarPath`/v1/content/collections/${collection_id}/fields/${fieldID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FieldCreateParams {
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
  validation?: FieldCreateParams.Validation;
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

export namespace FieldCreateParams {
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

export interface FieldUpdateParams {
  /**
   * Path param: The unique identifier of the content collection
   */
  collection_id: string;
  /**
   * Body param: Display name for the field
   */
  name?: string;
  /**
   * Body param: Description of the field
   */
  description?: string;
  /**
   * Body param: Validation rules
   */
  validation?: FieldUpdateParams.Validation;
  /**
   * Body param: Whether field values are localized
   */
  localized?: boolean;
  /**
   * Body param: Display order
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  display_order?: number;
}

export namespace FieldUpdateParams {
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

export interface FieldDeleteParams {
  /**
   * The unique identifier of the content collection
   */
  collection_id: string;
}
export declare namespace Fields {
  export {
    type FieldCreateParams as FieldCreateParams,
    type FieldUpdateParams as FieldUpdateParams,
    type FieldDeleteParams as FieldDeleteParams,
  };
}
