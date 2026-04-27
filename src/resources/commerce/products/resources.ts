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
   * Attaches one or more resources to a product. Customers who purchase this product
   * will gain access to the attached resources. Resource type is inferred from the
   * ID prefix (e.g., 'feat\_' for features).
   *
   * @example
   * ```ts
   * const response =
   *   await client.commerce.products.resources.attach(
   *     'product_id',
   *     { resource_ids: ['string'] },
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
   * Detaches one or more resources from a product. Customers will lose access to
   * these resources when they purchase this product.
   *
   * @example
   * ```ts
   * await client.commerce.products.resources.detach(
   *   'product_id',
   *   { resource_ids: ['string'] },
   * );
   * ```
   */
  detach(productID: string, body: ResourceDetachParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/commerce/products/${productID}/resources`, {
      body,
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
    metadata?: { [key: string]: string };
  }
}

/**
 * Response containing attached resources
 */
export interface ResourceAttachResponse {
  /**
   * Array of attached resource objects
   */
  data: Array<ResourceAttachResponse.Data>;
}

export namespace ResourceAttachResponse {
  /**
   * A resource that can be attached to products to grant access to customers.
   * Resources represent monetizable content or features in your app.
   */
  export interface Data {
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
    feature?: Data.Feature | null;
  }

  export namespace Data {
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
      metadata?: { [key: string]: string };
    }
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
   * Resource IDs to attach. Type is inferred from ID prefix (e.g., 'feat\_' for
   * features).
   */
  resource_ids: Array<string>;
}

export interface ResourceDetachParams {
  /**
   * Resource IDs to detach from the product.
   */
  resource_ids: Array<string>;
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
