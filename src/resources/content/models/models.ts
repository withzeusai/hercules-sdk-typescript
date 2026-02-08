// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FieldsAPI from './fields';
import { Fields } from './fields';

export class Models extends APIResource {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);
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

Models.Fields = Fields;

export declare namespace Models {
  export { type Field as Field };

  export { Fields as Fields };
}
