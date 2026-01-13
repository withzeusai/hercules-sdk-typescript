// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Resources extends APIResource {
  /**
   * Retrieves all resources attached to a product. Resources define the features,
   * content, or entitlements that customers gain access to when purchasing this
   * product.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const resourceListResponse of client.beta.commerce.products.resources.list(
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
   * Attaches a resource to a product. All customers who purchase this product (via
   * subscription or one-time payment) will gain access to the attached resource. For
   * subscriptions, access is granted while active. For one-time purchases, access is
   * permanent.
   *
   * @example
   * ```ts
   * const response =
   *   await client.beta.commerce.products.resources.attach(
   *     'product_id',
   *     {
   *       custom_entitlement: { id: 'id' },
   *       type: 'feature',
   *     },
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
   * Removes a resource from a product. Customers will lose access to this resource.
   * For subscriptions, access is revoked immediately. For one-time purchases,
   * existing grants are not affected.
   *
   * @example
   * ```ts
   * await client.beta.commerce.products.resources.remove(
   *   'resource_id',
   *   { product_id: 'product_id' },
   * );
   * ```
   */
  remove(resourceID: string, params: ResourceRemoveParams, options?: RequestOptions): APIPromise<void> {
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
   * Feature grant data. Required when type is 'feature'.
   */
  custom_entitlement?: ResourceListResponse.CustomEntitlement | null;
}

export namespace ResourceListResponse {
  /**
   * Feature grant data. Required when type is 'feature'.
   */
  export interface CustomEntitlement {
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
   * Feature grant data. Required when type is 'feature'.
   */
  custom_entitlement?: ResourceAttachResponse.CustomEntitlement | null;
}

export namespace ResourceAttachResponse {
  /**
   * Feature grant data. Required when type is 'feature'.
   */
  export interface CustomEntitlement {
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
   * Feature grant data. Required when type is 'feature'.
   */
  custom_entitlement: ResourceAttachParams.CustomEntitlement;

  /**
   * Type of resource
   */
  type: 'feature';

  /**
   * Optional custom ID for the resource. Must start with 'res\_'. If not provided,
   * one will be generated.
   */
  id?: string;
}

export namespace ResourceAttachParams {
  /**
   * Feature grant data. Required when type is 'feature'.
   */
  export interface CustomEntitlement {
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

export interface ResourceRemoveParams {
  product_id: string;
}

export declare namespace Resources {
  export {
    type ResourceListResponse as ResourceListResponse,
    type ResourceAttachResponse as ResourceAttachResponse,
    type ResourceListResponsesCursorIDPage as ResourceListResponsesCursorIDPage,
    type ResourceListParams as ResourceListParams,
    type ResourceAttachParams as ResourceAttachParams,
    type ResourceRemoveParams as ResourceRemoveParams,
  };
}
