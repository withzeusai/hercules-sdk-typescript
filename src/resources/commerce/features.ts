// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../core/pagination';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Features extends APIResource {
  /**
   * Retrieves a paginated list of features. Features are reusable entitlements that can be attached to multiple products.
   *
   * @param {FeatureListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<FeaturesCursorIDPage, Feature>} A paginated list of feature objects
   *
   * @example
   * ```ts
   * const page = await client.commerce.features.list();
   * ```
   */
  list(
    query: FeatureListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FeaturesCursorIDPage, Feature> {
    return this._client.getAPIList('/v1/commerce/features', CursorIDPage<Feature>, { query, ...options });
  }

  /**
   * Retrieves a feature by ID.
   *
   * @param {string} featureID - The unique identifier of the feature
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Feature>} The feature object
   *
   * @example
   * ```ts
   * const feature = await client.commerce.features.get('featureId');
   * ```
   */
  get(featureID: string, options?: RequestOptions): APIPromise<Feature> {
    return this._client.get(__scalarPath`/v1/commerce/features/${featureID}`, options);
  }

  /**
   * Creates a new feature with a lookup key. Features can be attached to multiple products to grant customers access to the same entitlement across different subscription tiers.
   *
   * @param {FeatureCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Feature>} The created feature object
   *
   * @example
   * ```ts
   * const feature = await client.commerce.features.create({
   *   name: 'x',
   *   metadata: {},
   * });
   * ```
   */
  create(body: FeatureCreateParams, options?: RequestOptions): APIPromise<Feature> {
    return this._client.post('/v1/commerce/features', { body, ...options });
  }

  /**
   * Updates an existing feature. Use this to modify metadata or active status.
   *
   * @param {string} featureID - The unique identifier of the feature
   * @param {FeatureUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Feature>} The updated feature object
   *
   * @example
   * ```ts
   * const feature = await client.commerce.features.update('featureId', {});
   * ```
   */
  update(featureID: string, body: FeatureUpdateParams, options?: RequestOptions): APIPromise<Feature> {
    return this._client.patch(__scalarPath`/v1/commerce/features/${featureID}`, { body, ...options });
  }
}

/**
 * A feature that can be attached to multiple products. Features represent monetizable content or functionality in your app.
 */
export interface Feature {
  /**
   * Unique identifier for the feature
   */
  id: string;
  /**
   * Timestamp when the feature was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * Human-readable name for the feature
   */
  name: string;
  /**
   * Description of what this feature provides
   */
  description: string | null;
  /**
   * Whether the feature is active
   */
  active: boolean;
  /**
   * Environment this response was served from. Sandbox data and live data never mix; the environment comes from the credential and the surface, not from the request.
   */
  environment: 'sandbox' | 'live';
  /**
   * Custom metadata for the feature
   * @default {}
   */
  metadata?: Record<string, string>;
}

export interface FeatureListParams extends CursorIDPageParams {
  /**
   * Filter by active status
   */
  active?: boolean;
}

export type FeaturesCursorIDPage = CursorIDPage<Feature>;

export interface FeatureCreateParams {
  /**
   * Human-readable name for the feature
   * @minLength 1
   * @maxLength 250
   */
  name: string;
  /**
   * Optional custom ID for the feature. Must start with 'feat_'. If not provided, one will be generated.
   * @minLength 6
   * @maxLength 255
   * @pattern ^feat_[\w-]+$
   */
  id?: string;
  /**
   * Description of what this feature provides
   * @maxLength 1000
   */
  description?: string;
  /**
   * Custom metadata for the feature
   * @default {}
   */
  metadata?: Record<string, string>;
}

export interface FeatureUpdateParams {
  /**
   * Human-readable name for the feature
   * @minLength 1
   * @maxLength 250
   */
  name?: string;
  /**
   * Description of what this feature provides
   * @maxLength 1000
   */
  description?: string | null;
  /**
   * Whether the feature is active
   */
  active?: boolean;
  /**
   * Custom metadata for the feature
   */
  metadata?: Record<string, string>;
}
export declare namespace Features {
  export {
    type Feature as Feature,
    type FeaturesCursorIDPage as FeaturesCursorIDPage,
    type FeatureListParams as FeatureListParams,
    type FeatureCreateParams as FeatureCreateParams,
    type FeatureUpdateParams as FeatureUpdateParams,
  };
}
