// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../../core/pagination';
import type { RequestOptions } from '../../../internal/request-options';
import { path as __scalarPath } from '../../../internal/utils/path';
import type * as CommerceAPI from '../commerce';
import type * as VariantsAPI from './variants';
import * as ResourcesAPI from './resources';
import {
  Resources,
  type ResourceListResponse,
  type ResourceAttachResponse,
  type CommerceResourcesCursorIDPage,
  type ResourceListParams,
  type ResourceAttachParams,
  type ResourceDetachParams,
} from './resources';
import * as VariantsAPI2 from './variants';
import {
  Variants,
  type Variant,
  type VariantsCursorIDPage,
  type VariantListParams,
  type VariantGetParams,
  type VariantCreateParams,
  type VariantUpdateParams,
} from './variants';

export class Products extends APIResource {
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);
  variants: VariantsAPI2.Variants = new VariantsAPI2.Variants(this._client);

  /**
   * Retrieves a paginated list of subscription products. Products define the pricing and billing intervals for subscriptions. Each product can have resources attached that grant access to features or content.
   *
   * @param {ProductListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<ProductsCursorIDPage, Product>} A paginated list of product objects
   *
   * @example
   * ```ts
   * const page = await client.commerce.products.list();
   * ```
   */
  list(
    query: ProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProductsCursorIDPage, Product> {
    return this._client.getAPIList('/v1/commerce/products', CursorIDPage<Product>, { query, ...options });
  }

  /**
   * Retrieves a product by ID. Returns the product object including pricing details and status.
   *
   * @param {string} productID - The unique identifier of the product
   * @param {ProductGetParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Product>} The product object
   *
   * @example
   * ```ts
   * const product = await client.commerce.products.get('productId');
   * ```
   */
  get(
    productID: string,
    query: ProductGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Product> {
    return this._client.get(__scalarPath`/v1/commerce/products/${productID}`, { query, ...options });
  }

  /**
   * Creates a new subscription product with a recurring price. Common examples include Free, Pro, Business, or Teams tiers. After creating a product, attach resources to define which features or content customers on this product can access.
   *
   * @param {ProductCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProductCreateResponse>} The created product object with its variants
   *
   * @example
   * ```ts
   * const product = await client.commerce.products.create({
   *   name: 'x',
   *   variants: [],
   * });
   * ```
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<ProductCreateResponse> {
    return this._client.post('/v1/commerce/products', { body, ...options });
  }

  /**
   * Updates an existing product. Use this to modify the product name, description, or active status. Pricing cannot be changed after creation—create a new product instead.
   *
   * @param {string} productID - The unique identifier of the product
   * @param {ProductUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Product>} The updated product object
   *
   * @example
   * ```ts
   * const product = await client.commerce.products.update('productId', {});
   * ```
   */
  update(productID: string, body: ProductUpdateParams, options?: RequestOptions): APIPromise<Product> {
    return this._client.patch(__scalarPath`/v1/commerce/products/${productID}`, { body, ...options });
  }
}

/**
 * A product that customers can purchase. Products can be one-time purchases or recurring subscriptions. Attach resources to a product to grant features to customers.
 */
export interface Product {
  /**
   * Unique identifier for the product
   */
  id: string;
  /**
   * Timestamp when the product was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * Display name for the product (e.g., Pro, Business, Teams)
   */
  name: string;
  /**
   * Whether the product is available for new purchases
   */
  active: boolean;
  /**
   * ID of the subscription group this product belongs to. Subscription groups define shared billing configuration. All products must belong to a subscription group.
   */
  subscription_group_id: string;
  /**
   * Environment this response was served from. Sandbox data and live data never mix; the environment comes from the credential and the surface, not from the request.
   */
  environment: 'sandbox' | 'live';
  /**
   * Detailed description of what the product includes
   */
  description?: string | null;
  /**
   * Media attachments (images, videos) for the product
   * @default []
   */
  media?: Array<Product.Media>;
  /**
   * Tags for categorizing and filtering products
   * @default []
   */
  tags?: Array<string>;
  /**
   * Custom metadata for the product
   * @default {}
   */
  metadata?: Record<string, string>;
  /**
   * Resources attached to this product. Customers get access to these resources when they purchase the product.
   * @default []
   */
  resources?: Array<Product.Resource>;
}

export namespace Product {
  export interface Media {
    /**
     * CDN file ID
     */
    id: string;
    /**
     * Type of media: image or video
     */
    type: 'image' | 'video';
    /**
     * CDN URL of the media resource
     * @format uri
     */
    url: string;
    /**
     * Display order in gallery (0-indexed)
     */
    display_order: number;
    /**
     * Optimized thumbnail URL for images
     * @format uri
     */
    thumbnail_url?: string;
    /**
     * Original filename
     */
    filename?: string;
    /**
     * File size in bytes
     */
    file_size?: number;
  }

  export interface Resource {
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
    feature?: Resource.Feature | null;
  }

  export namespace Resource {
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

export interface ProductListParams extends CursorIDPageParams {
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

export type ProductsCursorIDPage = CursorIDPage<Product>;

export interface ProductGetParams {
  /**
   * The customer this catalog is being read for. Used only to resolve their environment when they hold a test-mode grant; it never filters the results.
   * @minLength 5
   * @maxLength 255
   * @pattern ^cus_[\w-]+$
   */
  customer_id?: string;
}

export interface ProductCreateParams {
  /**
   * Display name for the product (e.g., Pro, Business, Teams)
   * @minLength 1
   * @maxLength 250
   */
  name: string;
  /**
   * Variants to create with the product. Each variant has its own pricing. At least one variant is required.
   * @minItems 1
   */
  variants: Array<ProductCreateParams.Variant>;
  /**
   * Optional custom ID for the product. Must start with 'prod_'. If not provided, one will be generated.
   * @minLength 6
   * @maxLength 255
   * @pattern ^prod_[\w-]+$
   */
  id?: string;
  /**
   * Detailed description of what the product includes
   * @minLength 1
   * @maxLength 1000
   */
  description?: string;
  /**
   * ID of the subscription group this product belongs to. Subscription groups define shared billing configuration.
   * @maxLength 255
   */
  subscription_group_id?: string;
  /**
   * Media attachments by CDN file ID
   */
  media?: Array<ProductCreateParams.Media>;
  /**
   * Tags for categorizing and filtering products
   * @maxItems 50
   */
  tags?: Array<string>;
  /**
   * Custom metadata for the product
   */
  metadata?: Record<string, string>;
}

export namespace ProductCreateParams {
  export interface Variant {
    /**
     * Display name for the variant
     * @minLength 1
     * @maxLength 250
     */
    name: string;
    /**
     * Optional custom ID for the variant. Must start with 'var_'.
     * @minLength 5
     * @maxLength 255
     * @pattern ^var_[\w-]+$
     */
    id?: string;
    /**
     * Detailed description of what this variant includes
     * @maxLength 1000
     */
    description?: string;
    /**
     * Media attachments by CDN file ID
     */
    media?: Array<Variant.Media>;
    /**
     * Custom metadata for the variant
     */
    metadata?: Record<string, string>;
    /**
     * Price amount in smallest currency unit (e.g., cents)
     * @default 0
     * @minimum 0
     * @maximum 99999999
     */
    unit_amount?: number;
    /**
     * Three-letter ISO currency code.
     *
     * Supported currencies: USD, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BIF, BMD, BND, BOB, BRL, BSD, BWP, BYN, BZD, CAD, CDF, CHF, CLP, CNY, COP, CRC, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ETB, EUR, FJD, FKP, GBP, GEL, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HTG, HUF, IDR, ILS, INR, ISK, JMD, JPY, KES, KGS, KHR, KMF, KRW, KYD, KZT, LAK, LBP, LKR, LRD, LSL, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SEK, SGD, SHP, SLE, SOS, SRD, STD, SZL, THB, TJS, TOP, TRY, TTD, TWD, TZS, UAH, UGX, UYU, UZS, VND, VUV, WST, XAF, XCD, XCG, XOF, XPF, YER, ZAR, ZMW.
     */
    currency?: CommerceAPI.Currency;
    /**
     * Recurring billing configuration for subscription variants
     */
    recurring?: Variant.Recurring;
    /**
     * Mark as the default variant for checkout. Only one variant can be default.
     */
    is_default?: boolean;
  }

  export namespace Variant {
    export interface Media {
      /**
       * CDN file ID from upload
       * @maxLength 255
       */
      cdn_file_id: string;
      /**
       * Type of media: image or video
       */
      type: 'image' | 'video';
      /**
       * Display order in gallery (0-indexed)
       * @minimum 0
       * @maximum 9007199254740991
       */
      display_order?: number;
    }

    export interface Recurring {
      /**
       * Billing frequency: day, week, month, or year
       */
      interval: 'day' | 'week' | 'month' | 'year';
      /**
       * Number of intervals between billings
       * @default 1
       * @minimum 1
       * @maximum 365
       */
      interval_count?: number;
    }
  }

  export interface Media {
    /**
     * CDN file ID from upload
     * @maxLength 255
     */
    cdn_file_id: string;
    /**
     * Type of media: image or video
     */
    type: 'image' | 'video';
    /**
     * Display order in gallery (0-indexed)
     * @minimum 0
     * @maximum 9007199254740991
     */
    display_order?: number;
  }
}

export interface ProductCreateResponse {
  /**
   * Unique identifier for the product
   */
  id: string;
  /**
   * Timestamp when the product was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * Display name for the product (e.g., Pro, Business, Teams)
   */
  name: string;
  /**
   * Whether the product is available for new purchases
   */
  active: boolean;
  /**
   * ID of the subscription group this product belongs to. Subscription groups define shared billing configuration. All products must belong to a subscription group.
   */
  subscription_group_id: string;
  /**
   * Environment this response was served from. Sandbox data and live data never mix; the environment comes from the credential and the surface, not from the request.
   */
  environment: 'sandbox' | 'live';
  /**
   * The created variants for this product. Each variant represents a pricing tier or configuration.
   */
  variants: Array<VariantsAPI.Variant>;
  /**
   * Detailed description of what the product includes
   */
  description?: string | null;
  /**
   * Media attachments (images, videos) for the product
   * @default []
   */
  media?: Array<ProductCreateResponse.Media>;
  /**
   * Tags for categorizing and filtering products
   * @default []
   */
  tags?: Array<string>;
  /**
   * Custom metadata for the product
   * @default {}
   */
  metadata?: Record<string, string>;
  /**
   * Resources attached to this product. Customers get access to these resources when they purchase the product.
   * @default []
   */
  resources?: Array<ProductCreateResponse.Resource>;
}

export namespace ProductCreateResponse {
  export interface Media {
    /**
     * CDN file ID
     */
    id: string;
    /**
     * Type of media: image or video
     */
    type: 'image' | 'video';
    /**
     * CDN URL of the media resource
     * @format uri
     */
    url: string;
    /**
     * Display order in gallery (0-indexed)
     */
    display_order: number;
    /**
     * Optimized thumbnail URL for images
     * @format uri
     */
    thumbnail_url?: string;
    /**
     * Original filename
     */
    filename?: string;
    /**
     * File size in bytes
     */
    file_size?: number;
  }

  export interface Resource {
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
    feature?: Resource.Feature | null;
  }

  export namespace Resource {
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

export interface ProductUpdateParams {
  /**
   * Display name for the product
   * @maxLength 250
   */
  name?: string;
  /**
   * Detailed description of what the product includes
   * @maxLength 1000
   */
  description?: string;
  /**
   * ID of the subscription group to move this product to. All products must belong to a subscription group.
   * @maxLength 255
   */
  subscription_group_id?: string;
  /**
   * Replace all media attachments. Pass empty array to remove all media.
   */
  media?: Array<ProductUpdateParams.Media>;
  /**
   * Tags for categorizing and filtering products
   * @maxItems 50
   */
  tags?: Array<string>;
  /**
   * Custom metadata for the product
   */
  metadata?: Record<string, string>;
  /**
   * Whether the product is available for new subscriptions
   */
  active?: boolean;
}

export namespace ProductUpdateParams {
  export interface Media {
    /**
     * CDN file ID from upload
     * @maxLength 255
     */
    cdn_file_id: string;
    /**
     * Type of media: image or video
     */
    type: 'image' | 'video';
    /**
     * Display order in gallery (0-indexed)
     * @minimum 0
     * @maximum 9007199254740991
     */
    display_order?: number;
  }
}
Products.Resources = Resources;
Products.Variants = Variants;

export declare namespace Products {
  export {
    type Product as Product,
    type ProductsCursorIDPage as ProductsCursorIDPage,
    type ProductCreateResponse as ProductCreateResponse,
    type ProductListParams as ProductListParams,
    type ProductGetParams as ProductGetParams,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
  };

  export {
    Resources as Resources,
    type ResourceListResponse as ResourceListResponse,
    type ResourceAttachResponse as ResourceAttachResponse,
    type CommerceResourcesCursorIDPage as CommerceResourcesCursorIDPage,
    type ResourceListParams as ResourceListParams,
    type ResourceAttachParams as ResourceAttachParams,
    type ResourceDetachParams as ResourceDetachParams,
  };

  export {
    Variants as Variants,
    type Variant as Variant,
    type VariantsCursorIDPage as VariantsCursorIDPage,
    type VariantListParams as VariantListParams,
    type VariantGetParams as VariantGetParams,
    type VariantCreateParams as VariantCreateParams,
    type VariantUpdateParams as VariantUpdateParams,
  };
}
