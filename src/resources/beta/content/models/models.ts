// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as FieldsAPI from './fields';
import { FieldCreateParams, FieldDeleteParams, FieldUpdateParams, Fields } from './fields';
import { APIPromise } from '../../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Models extends APIResource {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);

  /**
   * Creates a new content model with optional initial fields. Content models define
   * the schema for entries. Example models: 'Blog Post', 'Product', 'Author'.
   */
  create(body: ModelCreateParams, options?: RequestOptions): APIPromise<Model> {
    return this._client.post('/v1/content/models', { body, ...options });
  }

  /**
   * Updates an existing content model. Use this to modify the name, description, or
   * lock status. The api_id cannot be changed after creation.
   */
  update(
    modelID: string,
    body: ModelUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Model> {
    return this._client.patch(path`/v1/content/models/${modelID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of content models. Content models define the
   * schema/structure for content entries.
   */
  list(
    query: ModelListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ModelsCursorIDPage, Model> {
    return this._client.getAPIList('/v1/content/models', CursorIDPage<Model>, { query, ...options });
  }

  /**
   * Archives a content model, hiding it from the API. Existing entries are
   * preserved. Use this instead of deletion to maintain data integrity.
   */
  archive(modelID: string, options?: RequestOptions): APIPromise<Model> {
    return this._client.delete(path`/v1/content/models/${modelID}`, options);
  }

  /**
   * Retrieves a content model by ID. Returns the model object including all field
   * definitions.
   */
  get(modelID: string, options?: RequestOptions): APIPromise<Model> {
    return this._client.get(path`/v1/content/models/${modelID}`, options);
  }
}

export type ModelsCursorIDPage = CursorIDPage<Model>;

/**
 * A field definition within a content model
 */
export interface Field {
  /**
   * Unique identifier for the topic subscription
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
    | 'richtext'
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
  validation?: Field.Validation;
}

export namespace Field {
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
      | 'richtext'
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

/**
 * A content model defines the schema/structure for content entries. Each model has
 * fields that define what data entries can contain.
 */
export interface Model {
  /**
   * Unique identifier for the topic subscription
   */
  id: string;

  /**
   * API identifier for the model (camelCase, e.g., 'blogPost', 'product')
   */
  api_id: string;

  /**
   * Timestamp when the model was created
   */
  created: string;

  /**
   * Whether field modifications are locked (for production safety)
   */
  locked: boolean;

  /**
   * Display name for the model
   */
  name: string;

  /**
   * Timestamp when the model was last updated
   */
  updated: string;

  /**
   * Schema version number
   */
  version: number;

  /**
   * Description of the model
   */
  description?: string | null;

  /**
   * Fields defined in this model
   */
  fields?: Array<Field>;
}

export interface ModelCreateParams {
  /**
   * API identifier for the model (camelCase, e.g., 'blogPost')
   */
  api_id: string;

  /**
   * Display name for the model
   */
  name: string;

  /**
   * Optional custom ID for the model. Must start with 'cm\_'. If not provided, one
   * will be generated.
   */
  id?: string;

  /**
   * Description of the model
   */
  description?: string;

  /**
   * Initial fields to create with the model
   */
  fields?: Array<ModelCreateParams.Field>;
}

export namespace ModelCreateParams {
  /**
   * Request to add a new field to a content model
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
      | 'richtext'
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
    validation?: Field.Validation;
  }

  export namespace Field {
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
        | 'richtext'
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

export interface ModelUpdateParams {
  /**
   * Description of the model
   */
  description?: string;

  /**
   * Lock the model to prevent field modifications
   */
  locked?: boolean;

  /**
   * Display name for the model
   */
  name?: string;
}

export interface ModelListParams extends CursorIDPageParams {}

Models.Fields = Fields;

export declare namespace Models {
  export {
    type Field as Field,
    type Model as Model,
    type ModelsCursorIDPage as ModelsCursorIDPage,
    type ModelCreateParams as ModelCreateParams,
    type ModelUpdateParams as ModelUpdateParams,
    type ModelListParams as ModelListParams,
  };

  export {
    Fields as Fields,
    type FieldCreateParams as FieldCreateParams,
    type FieldUpdateParams as FieldUpdateParams,
    type FieldDeleteParams as FieldDeleteParams,
  };
}
