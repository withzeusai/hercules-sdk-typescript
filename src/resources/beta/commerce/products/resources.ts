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
   * Unique identifier for the topic subscription
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
  type: 'custom_entitlement';

  /**
   * Custom entitlement data. Required when type is 'custom_entitlement'.
   */
  custom_entitlement?: ResourceListResponse.CustomEntitlement | null;
}

export namespace ResourceListResponse {
  /**
   * Custom entitlement data. Required when type is 'custom_entitlement'.
   */
  export interface CustomEntitlement {
    /**
     * Unique identifier for the custom entitlement. Must start with 'ent\_' and must
     * not contain '.'
     */
    id: string;

    /**
     * Custom metadata for the entitlement
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
   * Unique identifier for the topic subscription
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
  type: 'custom_entitlement';

  /**
   * Custom entitlement data. Required when type is 'custom_entitlement'.
   */
  custom_entitlement?: ResourceAttachResponse.CustomEntitlement | null;
}

export namespace ResourceAttachResponse {
  /**
   * Custom entitlement data. Required when type is 'custom_entitlement'.
   */
  export interface CustomEntitlement {
    /**
     * Unique identifier for the custom entitlement. Must start with 'ent\_' and must
     * not contain '.'
     */
    id: string;

    /**
     * Custom metadata for the entitlement
     */
    metadata?: { [key: string]: unknown };
  }
}

export interface ResourceListParams extends CursorIDPageParams {
  /**
   * Filter by active status
   */
  active?: 'true' | 'false';

  /**
   * Filter by resource type
   */
  type?: 'custom_entitlement';
}

export interface ResourceAttachParams {
  /**
   * Custom entitlement data. Required when type is 'custom_entitlement'.
   */
  custom_entitlement: ResourceAttachParams.CustomEntitlement;

  /**
   * Type of resource
   */
  type: 'custom_entitlement';

  /**
   * Optional custom ID for the resource. Must start with 'res\_'. If not provided,
   * one will be generated.
   */
  id?: string;
}

export namespace ResourceAttachParams {
  /**
   * Custom entitlement data. Required when type is 'custom_entitlement'.
   */
  export interface CustomEntitlement {
    /**
     * Unique identifier for the custom entitlement. Must start with 'ent\_' and must
     * not contain '.'
     */
    id: string;

    /**
     * Custom metadata for the entitlement
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
