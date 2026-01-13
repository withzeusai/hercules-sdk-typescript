// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as FeaturesAPI from '../features';
import { FeaturesCursorIDPage } from '../features';
import { APIPromise } from '../../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Features extends APIResource {
  /**
   * Retrieves all features attached to a product. Features define the entitlements
   * customers gain access to when purchasing this product.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const feature of client.beta.commerce.products.features.list(
   *   'product_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    productID: string,
    query: FeatureListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FeaturesCursorIDPage, FeaturesAPI.Feature> {
    return this._client.getAPIList(
      path`/v1/commerce/products/${productID}/features`,
      CursorIDPage<FeaturesAPI.Feature>,
      { query, ...options },
    );
  }

  /**
   * Attaches an existing feature to a product. Customers who purchase this product
   * will gain access to the attached feature.
   *
   * @example
   * ```ts
   * const feature =
   *   await client.beta.commerce.products.features.attach(
   *     'product_id',
   *     { feature_id: 'feature_id' },
   *   );
   * ```
   */
  attach(
    productID: string,
    body: FeatureAttachParams,
    options?: RequestOptions,
  ): APIPromise<FeaturesAPI.Feature> {
    return this._client.post(path`/v1/commerce/products/${productID}/features`, { body, ...options });
  }

  /**
   * Detaches a feature from a product. Customers will lose access to this feature
   * when they purchase this product.
   *
   * @example
   * ```ts
   * await client.beta.commerce.products.features.remove(
   *   'feature_id',
   *   { product_id: 'product_id' },
   * );
   * ```
   */
  remove(featureID: string, params: FeatureRemoveParams, options?: RequestOptions): APIPromise<void> {
    const { product_id } = params;
    return this._client.delete(path`/v1/commerce/products/${product_id}/features/${featureID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FeatureListParams extends CursorIDPageParams {
  /**
   * Filter by active status
   */
  active?: boolean;
}

export interface FeatureAttachParams {
  /**
   * The ID of the feature to attach
   */
  feature_id: string;
}

export interface FeatureRemoveParams {
  product_id: string;
}

export declare namespace Features {
  export {
    type FeatureListParams as FeatureListParams,
    type FeatureAttachParams as FeatureAttachParams,
    type FeatureRemoveParams as FeatureRemoveParams,
  };
}

export { type FeaturesCursorIDPage };
