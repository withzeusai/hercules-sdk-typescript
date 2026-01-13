// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Resources extends APIResource {
  /**
   * Retrieves all resources attached to a product. Resources define the entitlements
   * customers gain access to when purchasing this product.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const resourceListResponse of client.commerce.products.resources.list(
   *   'product_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    productID: string,
    query: ResourceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ResourceListResponsesCursorIDPage, ResourceListResponse> {
    return this._client.getAPIList(
      path`/v1/commerce/products/${productID}/resources`,
      CursorIDPage<ResourceListResponse>,
      { query, ...options },
    );
  }

  /**
   * Attaches an existing resource to a product. Customers who purchase this product
   * will gain access to the attached resource. Resource type is inferred from the ID
   * prefix (e.g., 'feat\_' for features).
   *
   * @example
   * ```ts
   * const response =
   *   await client.commerce.products.resources.attach(
   *     'product_id',
   *     { resource_id: 'resource_id' },
   *   );
   * ```
   */
  attach(
    productID: string,
    body: ResourceAttachParams,
    options?: RequestOptions,
  ): APIPromise<ResourceAttachResponse> {
    return this._client.post(path`/v1/commerce/products/${productID}/resources`, { body, ...options });
  }

  /**
   * Detaches a resource from a product. Customers will lose access to this resource
   * when they purchase this product.
   *
   * @example
   * ```ts
   * await client.commerce.products.resources.detach(
   *   'resource_id',
   *   { product_id: 'product_id' },
   * );
   * ```
   */
  detach(resourceID: string, params: ResourceDetachParams, options?: RequestOptions): APIPromise<void> {
    const { product_id } = params;
    return this._client.delete(path`/v1/commerce/products/${product_id}/resources/${resourceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ResourceListResponsesCursorIDPage = CursorIDPage<ResourceListResponse>;

/**
 * A resource that can be attached to products to grant access to customers.
 * Resources represent monetizable content or features in your app.
 */
export interface ResourceListResponse {
  /**
   * Unique identifier for the resource
   */
  id: string;

  /**
   * Whether the resource is active and grants access
   */
  active: boolean;

  /**
   * Timestamp when the resource was created
   */
  created: string;

  /**
   * Type of resource
   */
  type: 'feature';

  /**
   * Feature grant that provides access to features or functionality in your app
   */
  feature?: ResourceListResponse.Feature | null;
}

export namespace ResourceListResponse {
  /**
   * Feature grant that provides access to features or functionality in your app
   */
  export interface Feature {
    /**
     * The feature key that identifies what access is granted (e.g., 'pro_features')
     */
    id: string;

    /**
     * Custom metadata for the feature grant
     */
    metadata?: { [key: string]: unknown };
  }
}

/**
 * A resource that can be attached to products to grant access to customers.
 * Resources represent monetizable content or features in your app.
 */
export interface ResourceAttachResponse {
  /**
   * Unique identifier for the resource
   */
  id: string;

  /**
   * Whether the resource is active and grants access
   */
  active: boolean;

  /**
   * Timestamp when the resource was created
   */
  created: string;

  /**
   * Type of resource
   */
  type: 'feature';

  /**
   * Feature grant that provides access to features or functionality in your app
   */
  feature?: ResourceAttachResponse.Feature | null;
}

export namespace ResourceAttachResponse {
  /**
   * Feature grant that provides access to features or functionality in your app
   */
  export interface Feature {
    /**
     * The feature key that identifies what access is granted (e.g., 'pro_features')
     */
    id: string;

    /**
     * Custom metadata for the feature grant
     */
    metadata?: { [key: string]: unknown };
  }
}

export interface ResourceListParams extends CursorIDPageParams {
  /**
   * Filter by active status
   */
  active?: boolean;

  /**
   * Filter by resource type
   */
  type?: 'feature';
}

export interface ResourceAttachParams {
  /**
   * The ID of the resource to attach. Type is inferred from the ID prefix (e.g.,
   * 'feat\_' for features).
   */
  resource_id: string;
}

export interface ResourceDetachParams {
  /**
   * The product ID
   */
  product_id: string;
}

export declare namespace Resources {
  export {
    type ResourceListResponse as ResourceListResponse,
    type ResourceAttachResponse as ResourceAttachResponse,
    type ResourceListResponsesCursorIDPage as ResourceListResponsesCursorIDPage,
    type ResourceListParams as ResourceListParams,
    type ResourceAttachParams as ResourceAttachParams,
    type ResourceDetachParams as ResourceDetachParams,
  };
}
