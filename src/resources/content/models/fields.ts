// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ModelsAPI from './models';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Fields extends APIResource {
  /**
   * Adds a new field to a content model. Fields define the structure of entries. The
   * model must not be locked. Adding a field increments the model version.
   */
  create(modelID: string, body: FieldCreateParams, options?: RequestOptions): APIPromise<ModelsAPI.Field> {
    return this._client.post(path`/v1/content/models/${modelID}/fields`, { body, ...options });
  }

  /**
   * Updates an existing field in a content model. The field type cannot be changed
   * after creation. The model must not be locked.
   */
  update(fieldID: string, params: FieldUpdateParams, options?: RequestOptions): APIPromise<ModelsAPI.Field> {
    const { model_id, ...body } = params;
    return this._client.patch(path`/v1/content/models/${model_id}/fields/${fieldID}`, { body, ...options });
  }

  /**
   * Removes a field from a content model. Existing entry data for this field is
   * preserved but will no longer be validated. The model must not be locked.
   */
  delete(fieldID: string, params: FieldDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { model_id } = params;
    return this._client.delete(path`/v1/content/models/${model_id}/fields/${fieldID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FieldCreateParams {
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
   * Display order within the model
   */
  display_order?: number;

  /**
   * Whether field values are stored per-locale
   */
  localized?: boolean;

  /**
   * Validation rules
   */
  validation?: FieldCreateParams.Validation;
}

export namespace FieldCreateParams {
  /**
   * Validation rules
   */
  export interface Validation {
    /**
     * Allowed MIME types for asset fields (e.g., 'image/\*', 'application/pdf')
     */
    allowed_mime_types?: Array<string>;

    /**
     * Allowed model apiIds for reference fields
     */
    allowed_models?: Array<string>;

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

export interface FieldUpdateParams {
  /**
   * Path param: The unique identifier of the content model
   */
  model_id: string;

  /**
   * Body param: Description of the field
   */
  description?: string;

  /**
   * Body param: Display order
   */
  display_order?: number;

  /**
   * Body param: Whether field values are localized
   */
  localized?: boolean;

  /**
   * Body param: Display name for the field
   */
  name?: string;

  /**
   * Body param: Validation rules
   */
  validation?: FieldUpdateParams.Validation;
}

export namespace FieldUpdateParams {
  /**
   * Validation rules
   */
  export interface Validation {
    /**
     * Allowed MIME types for asset fields (e.g., 'image/\*', 'application/pdf')
     */
    allowed_mime_types?: Array<string>;

    /**
     * Allowed model apiIds for reference fields
     */
    allowed_models?: Array<string>;

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

export interface FieldDeleteParams {
  /**
   * The unique identifier of the content model
   */
  model_id: string;
}

export declare namespace Fields {
  export {
    type FieldCreateParams as FieldCreateParams,
    type FieldUpdateParams as FieldUpdateParams,
    type FieldDeleteParams as FieldDeleteParams,
  };
}
