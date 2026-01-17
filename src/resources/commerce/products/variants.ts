// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Variants extends APIResource {
  /**
   * Creates a new variant with pricing for a product. Use variants to offer multiple
   * pricing tiers or configurations (e.g., Basic at $10/month, Pro at $25/month). A
   * Stripe Price is automatically created.
   *
   * @example
   * ```ts
   * const variant =
   *   await client.commerce.products.variants.create(
   *     'product_id',
   *     { name: 'x' },
   *   );
   * ```
   */
  create(productID: string, body: VariantCreateParams, options?: RequestOptions): APIPromise<Variant> {
    return this._client.post(path`/v1/commerce/products/${productID}/variants`, { body, ...options });
  }

  /**
   * Updates an existing variant. Use this to modify the name, description, or active
   * status. Pricing cannot be changed after creation—create a new variant instead.
   *
   * @example
   * ```ts
   * const variant =
   *   await client.commerce.products.variants.update(
   *     'variant_id',
   *     { product_id: 'product_id' },
   *   );
   * ```
   */
  update(variantID: string, params: VariantUpdateParams, options?: RequestOptions): APIPromise<Variant> {
    const { product_id, ...body } = params;
    return this._client.patch(path`/v1/commerce/products/${product_id}/variants/${variantID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves all variants for a product. Variants represent different pricing tiers
   * or configurations (e.g., Basic, Pro, Enterprise) within a single product.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const variant of client.commerce.products.variants.list(
   *   'product_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    productID: string,
    query: VariantListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VariantsCursorIDPage, Variant> {
    return this._client.getAPIList(path`/v1/commerce/products/${productID}/variants`, CursorIDPage<Variant>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves a variant by ID. Returns the variant object including pricing details
   * and status.
   *
   * @example
   * ```ts
   * const variant = await client.commerce.products.variants.get(
   *   'variant_id',
   *   { product_id: 'product_id' },
   * );
   * ```
   */
  get(variantID: string, params: VariantGetParams, options?: RequestOptions): APIPromise<Variant> {
    const { product_id } = params;
    return this._client.get(path`/v1/commerce/products/${product_id}/variants/${variantID}`, options);
  }
}

export type VariantsCursorIDPage = CursorIDPage<Variant>;

/**
 * A product variant representing a specific tier or configuration. Each variant
 * has its own pricing. Variants allow a single product to have multiple pricing
 * options (e.g., Basic, Pro, Enterprise tiers).
 */
export interface Variant {
  /**
   * Unique identifier for the variant
   */
  id: string;

  /**
   * Whether the variant is available for new purchases
   */
  active: boolean;

  /**
   * Timestamp when the variant was created
   */
  created: string;

  /**
   * Display name for the variant (e.g., Basic, Standard, Premium)
   */
  name: string;

  /**
   * Three-letter ISO currency code
   */
  currency?:
    | 'USD'
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BWP'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'ISK'
    | 'JMD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KRW'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLE'
    | 'SOS'
    | 'SRD'
    | 'STD'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'UYU'
    | 'UZS'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XCG'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';

  /**
   * Detailed description of what this variant includes
   */
  description?: string | null;

  /**
   * Media attachments (images, videos) for the variant
   */
  media?: Array<Variant.Media>;

  /**
   * Custom metadata for the variant
   */
  metadata?: { [key: string]: string };

  /**
   * Recurring billing configuration for subscription variants
   */
  recurring?: Variant.Recurring | null;

  /**
   * Price amount in the smallest currency unit (e.g., cents). 0 for free variants.
   */
  unit_amount?: number;
}

export namespace Variant {
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

export interface VariantCreateParams {
  /**
   * Display name for the variant (e.g., Basic, Standard, Premium)
   */
  name: string;

  /**
   * Optional custom ID for the variant. Must start with 'var\_'. If not provided,
   * one will be generated.
   */
  id?: string;

  /**
   * Three-letter ISO currency code.
   */
  currency?:
    | 'USD'
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BWP'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'ISK'
    | 'JMD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KRW'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLE'
    | 'SOS'
    | 'SRD'
    | 'STD'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'UYU'
    | 'UZS'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XCG'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';

  /**
   * Detailed description of what this variant includes
   */
  description?: string;

  /**
   * Media attachments by CDN file ID
   */
  media?: Array<VariantCreateParams.Media>;

  /**
   * Custom metadata for the variant
   */
  metadata?: { [key: string]: string };

  /**
   * Recurring billing configuration for subscription variants
   */
  recurring?: VariantCreateParams.Recurring;

  /**
   * Price amount in the smallest currency unit (e.g., cents). Use 0 for free
   * variants.
   */
  unit_amount?: number;
}

export namespace VariantCreateParams {
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

export interface VariantUpdateParams {
  /**
   * Path param: The unique identifier of the product
   */
  product_id: string;

  /**
   * Body param: Whether the variant is available for new purchases
   */
  active?: boolean;

  /**
   * Body param: Detailed description of what this variant includes
   */
  description?: string;

  /**
   * Body param: Replace all media attachments. Pass empty array to remove all media.
   */
  media?: Array<VariantUpdateParams.Media>;

  /**
   * Body param: Custom metadata for the variant
   */
  metadata?: { [key: string]: string };

  /**
   * Body param: Display name for the variant
   */
  name?: string;
}

export namespace VariantUpdateParams {
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

export interface VariantListParams extends CursorIDPageParams {
  /**
   * Filter by active status
   */
  active?: boolean;
}

export interface VariantGetParams {
  /**
   * The unique identifier of the product
   */
  product_id: string;
}

export declare namespace Variants {
  export {
    type Variant as Variant,
    type VariantsCursorIDPage as VariantsCursorIDPage,
    type VariantCreateParams as VariantCreateParams,
    type VariantUpdateParams as VariantUpdateParams,
    type VariantListParams as VariantListParams,
    type VariantGetParams as VariantGetParams,
  };
}
