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
  VariantArchiveParams,
  VariantArchiveResponse,
  VariantCreateParams,
  VariantCreateResponse,
  VariantGetParams,
  VariantGetResponse,
  VariantListParams,
  VariantListResponse,
  VariantListResponsesCursorIDPage,
  VariantUpdateParams,
  VariantUpdateResponse,
  Variants,
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
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<ProductCreateResponse> {
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
  ): APIPromise<ProductUpdateResponse> {
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
  ): PagePromise<ProductListResponsesCursorIDPage, ProductListResponse> {
    return this._client.getAPIList('/v1/commerce/products', CursorIDPage<ProductListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Archives a product, preventing new subscriptions. Existing subscriptions remain
   * active. Use this instead of deletion to preserve subscription history.
   */
  archive(productID: string, options?: RequestOptions): APIPromise<ProductArchiveResponse> {
    return this._client.delete(path`/v1/commerce/products/${productID}`, options);
  }

  /**
   * Retrieves a product by ID. Returns the product object including pricing details
   * and status.
   */
  get(productID: string, options?: RequestOptions): APIPromise<ProductGetResponse> {
    return this._client.get(path`/v1/commerce/products/${productID}`, options);
  }
}

export type ProductListResponsesCursorIDPage = CursorIDPage<ProductListResponse>;

/**
 * A product that customers can purchase. Products can be one-time purchases or
 * recurring subscriptions. Attach resources to a product to grant features to
 * customers.
 */
export interface ProductCreateResponse {
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
  product_group_id: string;

  /**
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  default_price?: ProductCreateResponse.DefaultPrice | null;

  /**
   * Detailed description of what the product includes
   */
  description?: string | null;

  /**
   * Media attachments (images, videos) for the product
   */
  media?: Array<ProductCreateResponse.Media>;

  /**
   * Custom metadata for the product
   */
  metadata?: { [key: string]: unknown };

  /**
   * Resources attached to this product. Customers get access to these resources when
   * they purchase the product.
   */
  resources?: Array<ProductCreateResponse.Resource>;

  /**
   * Tags for categorizing and filtering products
   */
  tags?: Array<string>;
}

export namespace ProductCreateResponse {
  /**
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  export interface DefaultPrice {
    /**
     * Unique identifier for the topic subscription
     */
    id: string;

    /**
     * Three-letter ISO currency code (e.g., usd, eur)
     */
    currency: string;

    /**
     * Billing frequency for recurring prices: day, week, month, or year. Null for
     * one-time prices.
     */
    interval: 'day' | 'week' | 'month' | 'year' | null;

    /**
     * Number of intervals between billings for recurring prices. Null for one-time
     * prices.
     */
    interval_count: number | null;

    /**
     * Price type: one_time for single purchases, recurring for subscriptions
     */
    type: 'one_time' | 'recurring';

    /**
     * Price amount in the smallest currency unit (e.g., cents)
     */
    unit_amount: number | null;
  }

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
    type: 'custom_entitlement';

    /**
     * Custom entitlement data. Required when type is 'custom_entitlement'.
     */
    custom_entitlement?: Resource.CustomEntitlement | null;
  }

  export namespace Resource {
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
}

/**
 * A product that customers can purchase. Products can be one-time purchases or
 * recurring subscriptions. Attach resources to a product to grant features to
 * customers.
 */
export interface ProductUpdateResponse {
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
  product_group_id: string;

  /**
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  default_price?: ProductUpdateResponse.DefaultPrice | null;

  /**
   * Detailed description of what the product includes
   */
  description?: string | null;

  /**
   * Media attachments (images, videos) for the product
   */
  media?: Array<ProductUpdateResponse.Media>;

  /**
   * Custom metadata for the product
   */
  metadata?: { [key: string]: unknown };

  /**
   * Resources attached to this product. Customers get access to these resources when
   * they purchase the product.
   */
  resources?: Array<ProductUpdateResponse.Resource>;

  /**
   * Tags for categorizing and filtering products
   */
  tags?: Array<string>;
}

export namespace ProductUpdateResponse {
  /**
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  export interface DefaultPrice {
    /**
     * Unique identifier for the topic subscription
     */
    id: string;

    /**
     * Three-letter ISO currency code (e.g., usd, eur)
     */
    currency: string;

    /**
     * Billing frequency for recurring prices: day, week, month, or year. Null for
     * one-time prices.
     */
    interval: 'day' | 'week' | 'month' | 'year' | null;

    /**
     * Number of intervals between billings for recurring prices. Null for one-time
     * prices.
     */
    interval_count: number | null;

    /**
     * Price type: one_time for single purchases, recurring for subscriptions
     */
    type: 'one_time' | 'recurring';

    /**
     * Price amount in the smallest currency unit (e.g., cents)
     */
    unit_amount: number | null;
  }

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
    type: 'custom_entitlement';

    /**
     * Custom entitlement data. Required when type is 'custom_entitlement'.
     */
    custom_entitlement?: Resource.CustomEntitlement | null;
  }

  export namespace Resource {
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
}

/**
 * A product that customers can purchase. Products can be one-time purchases or
 * recurring subscriptions. Attach resources to a product to grant features to
 * customers.
 */
export interface ProductListResponse {
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
  product_group_id: string;

  /**
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  default_price?: ProductListResponse.DefaultPrice | null;

  /**
   * Detailed description of what the product includes
   */
  description?: string | null;

  /**
   * Media attachments (images, videos) for the product
   */
  media?: Array<ProductListResponse.Media>;

  /**
   * Custom metadata for the product
   */
  metadata?: { [key: string]: unknown };

  /**
   * Resources attached to this product. Customers get access to these resources when
   * they purchase the product.
   */
  resources?: Array<ProductListResponse.Resource>;

  /**
   * Tags for categorizing and filtering products
   */
  tags?: Array<string>;
}

export namespace ProductListResponse {
  /**
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  export interface DefaultPrice {
    /**
     * Unique identifier for the topic subscription
     */
    id: string;

    /**
     * Three-letter ISO currency code (e.g., usd, eur)
     */
    currency: string;

    /**
     * Billing frequency for recurring prices: day, week, month, or year. Null for
     * one-time prices.
     */
    interval: 'day' | 'week' | 'month' | 'year' | null;

    /**
     * Number of intervals between billings for recurring prices. Null for one-time
     * prices.
     */
    interval_count: number | null;

    /**
     * Price type: one_time for single purchases, recurring for subscriptions
     */
    type: 'one_time' | 'recurring';

    /**
     * Price amount in the smallest currency unit (e.g., cents)
     */
    unit_amount: number | null;
  }

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
    type: 'custom_entitlement';

    /**
     * Custom entitlement data. Required when type is 'custom_entitlement'.
     */
    custom_entitlement?: Resource.CustomEntitlement | null;
  }

  export namespace Resource {
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
}

/**
 * A product that customers can purchase. Products can be one-time purchases or
 * recurring subscriptions. Attach resources to a product to grant features to
 * customers.
 */
export interface ProductArchiveResponse {
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
  product_group_id: string;

  /**
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  default_price?: ProductArchiveResponse.DefaultPrice | null;

  /**
   * Detailed description of what the product includes
   */
  description?: string | null;

  /**
   * Media attachments (images, videos) for the product
   */
  media?: Array<ProductArchiveResponse.Media>;

  /**
   * Custom metadata for the product
   */
  metadata?: { [key: string]: unknown };

  /**
   * Resources attached to this product. Customers get access to these resources when
   * they purchase the product.
   */
  resources?: Array<ProductArchiveResponse.Resource>;

  /**
   * Tags for categorizing and filtering products
   */
  tags?: Array<string>;
}

export namespace ProductArchiveResponse {
  /**
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  export interface DefaultPrice {
    /**
     * Unique identifier for the topic subscription
     */
    id: string;

    /**
     * Three-letter ISO currency code (e.g., usd, eur)
     */
    currency: string;

    /**
     * Billing frequency for recurring prices: day, week, month, or year. Null for
     * one-time prices.
     */
    interval: 'day' | 'week' | 'month' | 'year' | null;

    /**
     * Number of intervals between billings for recurring prices. Null for one-time
     * prices.
     */
    interval_count: number | null;

    /**
     * Price type: one_time for single purchases, recurring for subscriptions
     */
    type: 'one_time' | 'recurring';

    /**
     * Price amount in the smallest currency unit (e.g., cents)
     */
    unit_amount: number | null;
  }

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
    type: 'custom_entitlement';

    /**
     * Custom entitlement data. Required when type is 'custom_entitlement'.
     */
    custom_entitlement?: Resource.CustomEntitlement | null;
  }

  export namespace Resource {
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
}

/**
 * A product that customers can purchase. Products can be one-time purchases or
 * recurring subscriptions. Attach resources to a product to grant features to
 * customers.
 */
export interface ProductGetResponse {
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
  product_group_id: string;

  /**
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  default_price?: ProductGetResponse.DefaultPrice | null;

  /**
   * Detailed description of what the product includes
   */
  description?: string | null;

  /**
   * Media attachments (images, videos) for the product
   */
  media?: Array<ProductGetResponse.Media>;

  /**
   * Custom metadata for the product
   */
  metadata?: { [key: string]: unknown };

  /**
   * Resources attached to this product. Customers get access to these resources when
   * they purchase the product.
   */
  resources?: Array<ProductGetResponse.Resource>;

  /**
   * Tags for categorizing and filtering products
   */
  tags?: Array<string>;
}

export namespace ProductGetResponse {
  /**
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  export interface DefaultPrice {
    /**
     * Unique identifier for the topic subscription
     */
    id: string;

    /**
     * Three-letter ISO currency code (e.g., usd, eur)
     */
    currency: string;

    /**
     * Billing frequency for recurring prices: day, week, month, or year. Null for
     * one-time prices.
     */
    interval: 'day' | 'week' | 'month' | 'year' | null;

    /**
     * Number of intervals between billings for recurring prices. Null for one-time
     * prices.
     */
    interval_count: number | null;

    /**
     * Price type: one_time for single purchases, recurring for subscriptions
     */
    type: 'one_time' | 'recurring';

    /**
     * Price amount in the smallest currency unit (e.g., cents)
     */
    unit_amount: number | null;
  }

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
    type: 'custom_entitlement';

    /**
     * Custom entitlement data. Required when type is 'custom_entitlement'.
     */
    custom_entitlement?: Resource.CustomEntitlement | null;
  }

  export namespace Resource {
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
}

export interface ProductCreateParams {
  /**
   * Display name for the product (e.g., Pro, Business, Teams)
   */
  name: string;

  /**
   * Price amount in the smallest currency unit (e.g., cents). Use 0 for free
   * products.
   */
  unit_amount: number;

  /**
   * Optional custom ID for the product. Must start with 'prod\_'. If not provided,
   * one will be generated.
   */
  id?: string;

  /**
   * Three-letter ISO currency code
   */
  currency?: string;

  /**
   * Detailed description of what the product includes
   */
  description?: string;

  /**
   * Billing frequency for recurring prices: day, week, month, or year. Required for
   * recurring type, ignored for one_time.
   */
  interval?: 'day' | 'week' | 'month' | 'year';

  /**
   * Number of intervals between billings for recurring prices. Required for
   * recurring type, ignored for one_time.
   */
  interval_count?: number;

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
  product_group_id?: string;

  /**
   * Tags for categorizing and filtering products
   */
  tags?: Array<string>;

  /**
   * Price type: one_time for single purchases, recurring for subscriptions
   */
  type?: 'one_time' | 'recurring';
}

export namespace ProductCreateParams {
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
  product_group_id?: string;

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
  active?: 'true' | 'false';
}

Products.Resources = Resources;
Products.Variants = Variants;

export declare namespace Products {
  export {
    type ProductCreateResponse as ProductCreateResponse,
    type ProductUpdateResponse as ProductUpdateResponse,
    type ProductListResponse as ProductListResponse,
    type ProductArchiveResponse as ProductArchiveResponse,
    type ProductGetResponse as ProductGetResponse,
    type ProductListResponsesCursorIDPage as ProductListResponsesCursorIDPage,
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
    type VariantCreateResponse as VariantCreateResponse,
    type VariantUpdateResponse as VariantUpdateResponse,
    type VariantListResponse as VariantListResponse,
    type VariantArchiveResponse as VariantArchiveResponse,
    type VariantGetResponse as VariantGetResponse,
    type VariantListResponsesCursorIDPage as VariantListResponsesCursorIDPage,
    type VariantCreateParams as VariantCreateParams,
    type VariantUpdateParams as VariantUpdateParams,
    type VariantListParams as VariantListParams,
    type VariantArchiveParams as VariantArchiveParams,
    type VariantGetParams as VariantGetParams,
  };
}
