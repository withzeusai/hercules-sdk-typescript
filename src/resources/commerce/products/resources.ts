// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../../core/pagination';
import type { RequestOptions } from '../../../internal/request-options';
import { buildHeaders } from '../../../internal/headers';
import { path as __scalarPath } from '../../../internal/utils/path';

export class Resources extends APIResource {
  /**
   * Retrieves all resources attached to a product. Resources define the entitlements customers gain access to when purchasing this product.
   *
   * @param {string} productID - The unique identifier of the product
   * @param {ResourceListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<CommerceResourcesCursorIDPage, ResourceListResponse>} A paginated list of resources attached to the product
   *
   * @example
   * ```ts
   * const page = await client.commerce.products.resources.list('productId');
   * ```
   */
  list(
    productID: string,
    query: ResourceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CommerceResourcesCursorIDPage, ResourceListResponse> {
    return this._client.getAPIList(
      __scalarPath`/v1/commerce/products/${productID}/resources`,
      CursorIDPage<ResourceListResponse>,
      { query, ...options },
    );
  }

  /**
   * Attaches one or more resources to a product. Customers who purchase this product will gain access to the attached resources. Resource type is inferred from the ID prefix (e.g., 'feat_' for features).
   *
   * @param {string} productID - The unique identifier of the product
   * @param {ResourceAttachParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ResourceAttachResponse>} The attached resource objects
   *
   * @example
   * ```ts
   * const resource = await client.commerce.products.resources.attach('productId', {
   *   resource_ids: [],
   * });
   * ```
   */
  attach(
    productID: string,
    body: ResourceAttachParams,
    options?: RequestOptions,
  ): APIPromise<ResourceAttachResponse> {
    return this._client.post(__scalarPath`/v1/commerce/products/${productID}/resources`, {
      body,
      ...options,
    });
  }

  /**
   * Detaches one or more resources from a product. Customers will lose access to these resources when they purchase this product.
   *
   * @param {string} productID - The unique identifier of the product
   * @param {ResourceDetachParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Resources successfully detached from product
   *
   * @example
   * ```ts
   * await client.commerce.products.resources.detach('productId', {
   *   resource_ids: [],
   * });
   * ```
   */
  detach(productID: string, body: ResourceDetachParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(__scalarPath`/v1/commerce/products/${productID}/resources`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ResourceListParams extends CursorIDPageParams {
  /**
   * Filter by resource type
   */
  type?: 'feature';
  /**
   * Filter by active status
   */
  active?: boolean;
  /**
   * The customer this catalog is being read for. Used only to resolve their environment when they hold a test-mode grant; it never filters the results.
   * @minLength 5
   * @maxLength 255
   * @pattern ^cus_[\w-]+$
   */
  customer_id?: string;
}

export interface ResourceListResponse {
  /**
   * Unique identifier for the resource
   */
  id: string;
  /**
   * Timestamp when the resource was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * Type of resource
   */
  type: 'feature';
  /**
   * Whether the resource is active and grants access
   */
  active: boolean;
  /**
   * Environment this response was served from. Sandbox data and live data never mix; the environment comes from the credential and the surface, not from the request.
   */
  environment: 'sandbox' | 'live';
  /**
   * Feature data. Present when type is 'feature'.
   */
  feature?: ResourceListResponse.Feature | null;
}

export namespace ResourceListResponse {
  export interface Feature {
    /**
     * The feature key that identifies what access is granted (e.g., 'pro_features')
     * @maxLength 255
     */
    id: string;
    /**
     * Custom metadata for the feature grant
     * @default {}
     */
    metadata?: Record<string, string>;
  }
}

export type CommerceResourcesCursorIDPage = CursorIDPage<ResourceListResponse>;

export interface ResourceAttachParams {
  /**
   * Resource IDs to attach. Type is inferred from ID prefix (e.g., 'feat_' for features).
   * @minItems 1
   * @maxItems 100
   */
  resource_ids: Array<string>;
}

export interface ResourceAttachResponse {
  /**
   * Array of attached resource objects
   */
  data: Array<ResourceAttachResponse.Data>;
  /**
   * Environment this response was served from. Sandbox data and live data never mix; the environment comes from the credential and the surface, not from the request.
   */
  environment: 'sandbox' | 'live';
}

export namespace ResourceAttachResponse {
  export interface Data {
    /**
     * Unique identifier for the resource
     */
    id: string;
    /**
     * Timestamp when the resource was created
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
     */
    created: string;
    /**
     * Type of resource
     */
    type: 'feature';
    /**
     * Whether the resource is active and grants access
     */
    active: boolean;
    /**
     * Environment this response was served from. Sandbox data and live data never mix; the environment comes from the credential and the surface, not from the request.
     */
    environment: 'sandbox' | 'live';
    /**
     * Feature data. Present when type is 'feature'.
     */
    feature?: Data.Feature | null;
  }

  export namespace Data {
    export interface Feature {
      /**
       * The feature key that identifies what access is granted (e.g., 'pro_features')
       * @maxLength 255
       */
      id: string;
      /**
       * Custom metadata for the feature grant
       * @default {}
       */
      metadata?: Record<string, string>;
    }
  }
}

export interface ResourceDetachParams {
  /**
   * Resource IDs to detach from the product.
   * @minItems 1
   * @maxItems 100
   */
  resource_ids: Array<string>;
}
export declare namespace Resources {
  export {
    type ResourceListResponse as ResourceListResponse,
    type ResourceAttachResponse as ResourceAttachResponse,
    type CommerceResourcesCursorIDPage as CommerceResourcesCursorIDPage,
    type ResourceListParams as ResourceListParams,
    type ResourceAttachParams as ResourceAttachParams,
    type ResourceDetachParams as ResourceDetachParams,
  };
}
