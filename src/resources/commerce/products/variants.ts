// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../../core/pagination';
import type { RequestOptions } from '../../../internal/request-options';
import { path as __scalarPath } from '../../../internal/utils/path';
import type * as CommerceAPI from '../commerce';

export class Variants extends APIResource {
  /**
   * Retrieves all variants for a product. Variants represent different pricing tiers or configurations (e.g., Basic, Pro, Enterprise) within a single product.
   *
   * @param {string} productID - The unique identifier of the product
   * @param {VariantListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<VariantsCursorIDPage, Variant>} A paginated list of variant objects
   *
   * @example
   * ```ts
   * const page = await client.commerce.products.variants.list('productId');
   * ```
   */
  list(
    productID: string,
    query: VariantListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VariantsCursorIDPage, Variant> {
    return this._client.getAPIList(
      __scalarPath`/v1/commerce/products/${productID}/variants`,
      CursorIDPage<Variant>,
      { query, ...options },
    );
  }

  /**
   * Retrieves a variant by ID. Returns the variant object including pricing details and status.
   *
   * @param {string} variantID - The unique identifier of the variant
   * @param {VariantGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Variant>} The variant object
   *
   * @example
   * ```ts
   * const variant = await client.commerce.products.variants.get('variantId', {
   *   product_id: 'productId',
   * });
   * ```
   */
  get(variantID: string, params: VariantGetParams, options?: RequestOptions): APIPromise<Variant> {
    const { product_id, ...query } = params;
    return this._client.get(__scalarPath`/v1/commerce/products/${product_id}/variants/${variantID}`, {
      query,
      ...options,
    });
  }

  /**
   * Creates a new variant with pricing for a product. Use variants to offer multiple pricing tiers or configurations (e.g., Basic at $10/month, Pro at $25/month). A Stripe Price is automatically created.
   *
   * @param {string} productID - The unique identifier of the product
   * @param {VariantCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Variant>} The created variant object
   *
   * @example
   * ```ts
   * const variant = await client.commerce.products.variants.create('productId', {
   *   name: 'x',
   *   unit_amount: 0,
   * });
   * ```
   */
  create(productID: string, body: VariantCreateParams, options?: RequestOptions): APIPromise<Variant> {
    return this._client.post(__scalarPath`/v1/commerce/products/${productID}/variants`, { body, ...options });
  }

  /**
   * Updates an existing variant. Use this to modify the name, description, or active status. Pricing cannot be changed after creation—create a new variant instead.
   *
   * @param {string} variantID - The unique identifier of the variant
   * @param {VariantUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Variant>} The updated variant object
   *
   * @example
   * ```ts
   * const variant = await client.commerce.products.variants.update('variantId', {
   *   product_id: 'productId',
   * });
   * ```
   */
  update(variantID: string, params: VariantUpdateParams, options?: RequestOptions): APIPromise<Variant> {
    const { product_id, ...body } = params;
    return this._client.patch(__scalarPath`/v1/commerce/products/${product_id}/variants/${variantID}`, {
      body,
      ...options,
    });
  }
}

/**
 * A product variant representing a specific tier or configuration. Each variant has its own pricing. Variants allow a single product to have multiple pricing options (e.g., Basic, Pro, Enterprise tiers).
 */
export interface Variant {
  /**
   * Unique identifier for the variant
   */
  id: string;
  /**
   * Timestamp when the variant was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * Display name for the variant (e.g., Basic, Standard, Premium)
   */
  name: string;
  /**
   * Whether the variant is available for new purchases
   */
  active: boolean;
  /**
   * Environment this response was served from. Sandbox data and live data never mix; the environment comes from the credential and the surface, not from the request.
   */
  environment: 'sandbox' | 'live';
  /**
   * Detailed description of what this variant includes
   */
  description?: string | null;
  /**
   * Media attachments (images, videos) for the variant
   * @default []
   */
  media?: Array<Variant.Media>;
  /**
   * Custom metadata for the variant
   * @default {}
   */
  metadata?: Record<string, string>;
  /**
   * Price amount in the smallest currency unit (e.g., cents). 0 for free variants.
   * @default 0
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  unit_amount?: number;
  /**
   * Three-letter ISO currency code.
   *
   * Supported currencies: USD, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BIF, BMD, BND, BOB, BRL, BSD, BWP, BYN, BZD, CAD, CDF, CHF, CLP, CNY, COP, CRC, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ETB, EUR, FJD, FKP, GBP, GEL, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HTG, HUF, IDR, ILS, INR, ISK, JMD, JPY, KES, KGS, KHR, KMF, KRW, KYD, KZT, LAK, LBP, LKR, LRD, LSL, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SEK, SGD, SHP, SLE, SOS, SRD, STD, SZL, THB, TJS, TOP, TRY, TTD, TWD, TZS, UAH, UGX, UYU, UZS, VND, VUV, WST, XAF, XCD, XCG, XOF, XPF, YER, ZAR, ZMW.
   */
  currency?: CommerceAPI.Currency;
  /**
   * Recurring billing configuration. Null for one-time purchase variants.
   */
  recurring?: Variant.Recurring | null;
}

export namespace Variant {
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

export interface VariantListParams extends CursorIDPageParams {
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

export type VariantsCursorIDPage = CursorIDPage<Variant>;

export interface VariantGetParams {
  /**
   * Path param: The unique identifier of the product
   * @maxLength 255
   */
  product_id: string;
  /**
   * Query param: The customer this catalog is being read for. Used only to resolve their environment when they hold a test-mode grant; it never filters the results.
   * @minLength 5
   * @maxLength 255
   * @pattern ^cus_[\w-]+$
   */
  customer_id?: string;
}

export interface VariantCreateParams {
  /**
   * Display name for the variant (e.g., Basic, Standard, Premium)
   * @minLength 1
   * @maxLength 250
   */
  name: string;
  /**
   * Optional custom ID for the variant. Must start with 'var_'. If not provided, one will be generated.
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
  media?: Array<VariantCreateParams.Media>;
  /**
   * Custom metadata for the variant
   */
  metadata?: Record<string, string>;
  /**
   * Price amount in the smallest currency unit (e.g., cents). Use 0 for free variants.
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
  recurring?: VariantCreateParams.Recurring;
}

export namespace VariantCreateParams {
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

export interface VariantUpdateParams {
  /**
   * Path param: The unique identifier of the product
   * @maxLength 255
   */
  product_id: string;
  /**
   * Body param: Display name for the variant
   * @maxLength 250
   */
  name?: string;
  /**
   * Body param: Detailed description of what this variant includes
   * @maxLength 1000
   */
  description?: string;
  /**
   * Body param: Replace all media attachments. Pass empty array to remove all media.
   */
  media?: Array<VariantUpdateParams.Media>;
  /**
   * Body param: Custom metadata for the variant
   */
  metadata?: Record<string, string>;
  /**
   * Body param: Whether the variant is available for new purchases
   */
  active?: boolean;
}

export namespace VariantUpdateParams {
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
export declare namespace Variants {
  export {
    type Variant as Variant,
    type VariantsCursorIDPage as VariantsCursorIDPage,
    type VariantListParams as VariantListParams,
    type VariantGetParams as VariantGetParams,
    type VariantCreateParams as VariantCreateParams,
    type VariantUpdateParams as VariantUpdateParams,
  };
}
