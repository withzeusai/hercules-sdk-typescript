// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Features extends APIResource {
  /**
   * Creates a new feature with a lookup key. Features can be attached to multiple
   * products to grant customers access to the same entitlement across different
   * subscription tiers.
   *
   * @example
   * ```ts
   * const feature = await client.commerce.features.create({
   *   lookup_key: 'lookup_key',
   *   name: 'x',
   * });
   * ```
   */
  create(body: FeatureCreateParams, options?: RequestOptions): APIPromise<Feature> {
    return this._client.post('/v1/commerce/features', { body, ...options });
  }

  /**
   * Updates an existing feature. Use this to modify metadata or active status.
   *
   * @example
   * ```ts
   * const feature = await client.commerce.features.update(
   *   'feature_id',
   * );
   * ```
   */
  update(
    featureID: string,
    body: FeatureUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Feature> {
    return this._client.patch(path`/v1/commerce/features/${featureID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of features. Features are reusable entitlements that
   * can be attached to multiple products.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const feature of client.commerce.features.list()) {
   *   // ...
   * }
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
   * @example
   * ```ts
   * const feature = await client.commerce.features.get(
   *   'feature_id',
   * );
   * ```
   */
  get(featureID: string, options?: RequestOptions): APIPromise<Feature> {
    return this._client.get(path`/v1/commerce/features/${featureID}`, options);
  }
}

export type FeaturesCursorIDPage = CursorIDPage<Feature>;

/**
 * A feature that can be attached to multiple products. Features represent
 * monetizable content or functionality in your app.
 */
export interface Feature {
  /**
   * Unique identifier for the feature
   */
  id: string;

  /**
   * Whether the feature is active
   */
  active: boolean;

  /**
   * Timestamp when the feature was created
   */
  created: string;

  /**
   * Description of what this feature provides
   */
  description: string | null;

  /**
   * The lookup key used to check access (e.g., 'feature.pro_features')
   */
  lookup_key: string;

  /**
   * Human-readable name for the feature
   */
  name: string;

  /**
   * Type of feature
   */
  type: 'feature';

  /**
   * Custom metadata for the feature
   */
  metadata?: { [key: string]: unknown };
}

export interface FeatureCreateParams {
  /**
   * The lookup key used to check access. Will be prefixed with 'feature.'
   * automatically.
   */
  lookup_key: string;

  /**
   * Human-readable name for the feature
   */
  name: string;

  /**
   * Optional custom ID for the feature. Must start with 'feat\_'. If not provided,
   * one will be generated.
   */
  id?: string;

  /**
   * Description of what this feature provides
   */
  description?: string;

  /**
   * Custom metadata for the feature
   */
  metadata?: { [key: string]: unknown };
}

export interface FeatureUpdateParams {
  /**
   * Whether the feature is active
   */
  active?: boolean;

  /**
   * Description of what this feature provides
   */
  description?: string | null;

  /**
   * Custom metadata for the feature
   */
  metadata?: { [key: string]: unknown };

  /**
   * Human-readable name for the feature
   */
  name?: string;
}

export interface FeatureListParams extends CursorIDPageParams {
  /**
   * Filter by active status
   */
  active?: boolean;
}

export declare namespace Features {
  export {
    type Feature as Feature,
    type FeaturesCursorIDPage as FeaturesCursorIDPage,
    type FeatureCreateParams as FeatureCreateParams,
    type FeatureUpdateParams as FeatureUpdateParams,
    type FeatureListParams as FeatureListParams,
  };
}
