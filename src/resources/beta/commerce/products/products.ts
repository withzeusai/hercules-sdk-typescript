// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ResourcesAPI from './resources';
import {
  ResourceAttachParams,
  ResourceAttachResponse,
  ResourceListParams,
  ResourceListResponse,
  ResourceListResponsesCursorIDPage,
  ResourceRemoveParams,
  Resources,
} from './resources';
import * as VariantsAPI from './variants';
import {
  Variant as VariantsAPIVariant,
  VariantArchiveParams,
  VariantCreateParams,
  VariantGetParams,
  VariantListParams,
  VariantUpdateParams,
  Variants,
  VariantsCursorIDPage,
} from './variants';
import { APIPromise } from '../../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Products extends APIResource {
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);
  variants: VariantsAPI.Variants = new VariantsAPI.Variants(this._client);

  /**
   * Creates a new subscription product with a recurring price. Common examples
   * include Free, Pro, Business, or Teams tiers. After creating a product, attach
   * resources to define which features or content customers on this product can
   * access.
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<Product> {
    return this._client.post('/v1/commerce/products', { body, ...options });
  }

  /**
   * Updates an existing product. Use this to modify the product name, description,
   * or active status. Pricing cannot be changed after creation—create a new product
   * instead.
   */
  update(
    productID: string,
    body: ProductUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Product> {
    return this._client.patch(path`/v1/commerce/products/${productID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of subscription products. Products define the pricing
   * and billing intervals for subscriptions. Each product can have resources
   * attached that grant access to features or content.
   */
  list(
    query: ProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProductsCursorIDPage, Product> {
    return this._client.getAPIList('/v1/commerce/products', CursorIDPage<Product>, { query, ...options });
  }

  /**
   * Archives a product, preventing new subscriptions. Existing subscriptions remain
   * active. Use this instead of deletion to preserve subscription history.
   */
  archive(productID: string, options?: RequestOptions): APIPromise<Product> {
    return this._client.delete(path`/v1/commerce/products/${productID}`, options);
  }

  /**
   * Retrieves a product by ID. Returns the product object including pricing details
   * and status.
   */
  get(productID: string, options?: RequestOptions): APIPromise<Product> {
    return this._client.get(path`/v1/commerce/products/${productID}`, options);
  }
}

export type ProductsCursorIDPage = CursorIDPage<Product>;

/**
 * A product that customers can purchase. Products can be one-time purchases or
 * recurring subscriptions. Attach resources to a product to grant features to
 * customers.
 */
export interface Product {
  /**
   * Unique identifier for the topic subscription
   */
  id: string;

  /**
   * Whether the product is available for new purchases
   */
  active: boolean;

  /**
   * Timestamp when the product was created
   */
  created: string;

  /**
   * Display name for the product (e.g., Pro, Business, Teams)
   */
  name: string;

  /**
   * ID of the subscription group this product belongs to. Subscription groups define
   * shared billing configuration. All products must belong to a subscription group.
   */
  subscription_group_id: string;

  /**
   * Detailed description of what the product includes
   */
  description?: string | null;

  /**
   * Media attachments (images, videos) for the product
   */
  media?: Array<Product.Media>;

  /**
   * Custom metadata for the product
   */
  metadata?: { [key: string]: unknown };

  /**
   * Resources attached to this product. Customers get access to these resources when
   * they purchase the product.
   */
  resources?: Array<Product.Resource>;

  /**
   * Tags for categorizing and filtering products
   */
  tags?: Array<string>;
}

export namespace Product {
  /**
   * Media attachment for products or variants
   */
  export interface Media {
    /**
     * CDN file ID
     */
    id: string;

    /**
     * Display order in gallery (0-indexed)
     */
    display_order: number;

    /**
     * Type of media: image or video
     */
    type: 'image' | 'video';

    /**
     * CDN URL of the media resource
     */
    url: string;

    /**
     * File size in bytes
     */
    file_size?: number;

    /**
     * Original filename
     */
    filename?: string;

    /**
     * Optimized thumbnail URL for images
     */
    thumbnail_url?: string;
  }

  /**
   * A resource that can be attached to products to grant access to customers.
   * Resources represent monetizable content or features in your app.
   */
  export interface Resource {
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
    type: 'feature';

    /**
     * Feature grant data. Required when type is 'feature'.
     */
    custom_entitlement?: Resource.CustomEntitlement | null;
  }

  export namespace Resource {
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
}

export interface ProductCreateParams {
  /**
   * Display name for the product (e.g., Pro, Business, Teams)
   */
  name: string;

  /**
   * Variants to create with the product. Each variant has its own pricing. At least
   * one variant is required.
   */
  variants: Array<ProductCreateParams.Variant>;

  /**
   * Optional custom ID for the product. Must start with 'prod\_'. If not provided,
   * one will be generated.
   */
  id?: string;

  /**
   * Detailed description of what the product includes
   */
  description?: string;

  /**
   * Media attachments by CDN file ID
   */
  media?: Array<ProductCreateParams.Media>;

  /**
   * Custom metadata for the product
   */
  metadata?: { [key: string]: unknown };

  /**
   * ID of the subscription group this product belongs to. Subscription groups define
   * shared billing configuration.
   */
  subscription_group_id?: string;

  /**
   * Tags for categorizing and filtering products
   */
  tags?: Array<string>;
}

export namespace ProductCreateParams {
  /**
   * Variant configuration for inline creation with a product
   */
  export interface Variant {
    /**
     * Display name for the variant
     */
    name: string;

    /**
     * Optional custom ID for the variant. Must start with 'var\_'.
     */
    id?: string;

    /**
     * Three-letter ISO currency code
     */
    currency?: string;

    /**
     * Detailed description of what this variant includes
     */
    description?: string;

    /**
     * Mark as the default variant for checkout. Only one variant can be default.
     */
    is_default?: boolean;

    /**
     * Media attachments by CDN file ID
     */
    media?: Array<Variant.Media>;

    /**
     * Custom metadata for the variant
     */
    metadata?: { [key: string]: unknown };

    /**
     * Recurring billing configuration for subscription variants
     */
    recurring?: Variant.Recurring;

    /**
     * Price amount in smallest currency unit (e.g., cents)
     */
    unit_amount?: number;
  }

  export namespace Variant {
    /**
     * Media input for attaching to products or variants
     */
    export interface Media {
      /**
       * CDN file ID from upload
       */
      cdn_file_id: string;

      /**
       * Type of media: image or video
       */
      type: 'image' | 'video';

      /**
       * Display order in gallery (0-indexed)
       */
      display_order?: number;
    }

    /**
     * Recurring billing configuration for subscription variants
     */
    export interface Recurring {
      /**
       * Billing frequency: day, week, month, or year
       */
      interval: 'day' | 'week' | 'month' | 'year';

      /**
       * Number of intervals between billings
       */
      interval_count?: number;
    }
  }

  /**
   * Media input for attaching to products or variants
   */
  export interface Media {
    /**
     * CDN file ID from upload
     */
    cdn_file_id: string;

    /**
     * Type of media: image or video
     */
    type: 'image' | 'video';

    /**
     * Display order in gallery (0-indexed)
     */
    display_order?: number;
  }
}

export interface ProductUpdateParams {
  /**
   * Whether the product is available for new subscriptions
   */
  active?: boolean;

  /**
   * Detailed description of what the product includes
   */
  description?: string;

  /**
   * Replace all media attachments. Pass empty array to remove all media.
   */
  media?: Array<ProductUpdateParams.Media>;

  /**
   * Custom metadata for the product
   */
  metadata?: { [key: string]: unknown };

  /**
   * Display name for the product
   */
  name?: string;

  /**
   * ID of the subscription group to move this product to. All products must belong
   * to a subscription group.
   */
  subscription_group_id?: string;

  /**
   * Tags for categorizing and filtering products
   */
  tags?: Array<string>;
}

export namespace ProductUpdateParams {
  /**
   * Media input for attaching to products or variants
   */
  export interface Media {
    /**
     * CDN file ID from upload
     */
    cdn_file_id: string;

    /**
     * Type of media: image or video
     */
    type: 'image' | 'video';

    /**
     * Display order in gallery (0-indexed)
     */
    display_order?: number;
  }
}

export interface ProductListParams extends CursorIDPageParams {
  /**
   * Filter by active status
   */
  active?: boolean;
}

Products.Resources = Resources;
Products.Variants = Variants;

export declare namespace Products {
  export {
    type Product as Product,
    type ProductsCursorIDPage as ProductsCursorIDPage,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };

  export {
    Resources as Resources,
    type ResourceListResponse as ResourceListResponse,
    type ResourceAttachResponse as ResourceAttachResponse,
    type ResourceListResponsesCursorIDPage as ResourceListResponsesCursorIDPage,
    type ResourceListParams as ResourceListParams,
    type ResourceAttachParams as ResourceAttachParams,
    type ResourceRemoveParams as ResourceRemoveParams,
  };

  export {
    Variants as Variants,
    type VariantsAPIVariant as Variant,
    type VariantsCursorIDPage as VariantsCursorIDPage,
    type VariantCreateParams as VariantCreateParams,
    type VariantUpdateParams as VariantUpdateParams,
    type VariantListParams as VariantListParams,
    type VariantArchiveParams as VariantArchiveParams,
    type VariantGetParams as VariantGetParams,
  };
}
