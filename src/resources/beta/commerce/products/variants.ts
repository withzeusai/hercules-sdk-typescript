// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Variants extends APIResource {
  /**
   * Creates a new variant with pricing for a product. Use variants to offer multiple
   * pricing tiers or configurations (e.g., Basic at $10/month, Pro at $25/month). A
   * Stripe Price is automatically created.
   */
  create(
    productID: string,
    body: VariantCreateParams,
    options?: RequestOptions,
  ): APIPromise<VariantCreateResponse> {
    return this._client.post(path`/v1/commerce/products/${productID}/variants`, { body, ...options });
  }

  /**
   * Updates an existing variant. Use this to modify the name, description, or active
   * status. Pricing cannot be changed after creation—create a new variant instead.
   */
  update(
    variantID: string,
    params: VariantUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VariantUpdateResponse> {
    const { product_id, ...body } = params;
    return this._client.patch(path`/v1/commerce/products/${product_id}/variants/${variantID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves all variants for a product. Variants represent different pricing tiers
   * or configurations (e.g., Basic, Pro, Enterprise) within a single product.
   */
  list(
    productID: string,
    query: VariantListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VariantListResponsesCursorIDPage, VariantListResponse> {
    return this._client.getAPIList(
      path`/v1/commerce/products/${productID}/variants`,
      CursorIDPage<VariantListResponse>,
      { query, ...options },
    );
  }

  /**
   * Archives a variant, preventing new subscriptions. The associated Stripe Price is
   * also archived. Existing subscriptions remain active.
   */
  archive(
    variantID: string,
    params: VariantArchiveParams,
    options?: RequestOptions,
  ): APIPromise<VariantArchiveResponse> {
    const { product_id } = params;
    return this._client.delete(path`/v1/commerce/products/${product_id}/variants/${variantID}`, options);
  }

  /**
   * Retrieves a variant by ID. Returns the variant object including pricing details
   * and status.
   */
  get(variantID: string, params: VariantGetParams, options?: RequestOptions): APIPromise<VariantGetResponse> {
    const { product_id } = params;
    return this._client.get(path`/v1/commerce/products/${product_id}/variants/${variantID}`, options);
  }
}

export type VariantListResponsesCursorIDPage = CursorIDPage<VariantListResponse>;

/**
 * A product variant representing a specific tier or configuration. Each variant
 * has its own pricing. Variants allow a single product to have multiple pricing
 * options (e.g., Basic, Pro, Enterprise tiers).
 */
export interface VariantCreateResponse {
  /**
   * Unique identifier for the topic subscription
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
  currency?: string;

  /**
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  default_price?: VariantCreateResponse.DefaultPrice | null;

  /**
   * Detailed description of what this variant includes
   */
  description?: string | null;

  /**
   * Media attachments (images, videos) for the variant
   */
  media?: Array<VariantCreateResponse.Media>;

  /**
   * Custom metadata for the variant
   */
  metadata?: { [key: string]: unknown };

  /**
   * Recurring billing configuration for subscription variants
   */
  recurring?: VariantCreateResponse.Recurring | null;

  /**
   * Price amount in the smallest currency unit (e.g., cents). 0 for free variants.
   */
  unit_amount?: number;
}

export namespace VariantCreateResponse {
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
 * A product variant representing a specific tier or configuration. Each variant
 * has its own pricing. Variants allow a single product to have multiple pricing
 * options (e.g., Basic, Pro, Enterprise tiers).
 */
export interface VariantUpdateResponse {
  /**
   * Unique identifier for the topic subscription
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
  currency?: string;

  /**
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  default_price?: VariantUpdateResponse.DefaultPrice | null;

  /**
   * Detailed description of what this variant includes
   */
  description?: string | null;

  /**
   * Media attachments (images, videos) for the variant
   */
  media?: Array<VariantUpdateResponse.Media>;

  /**
   * Custom metadata for the variant
   */
  metadata?: { [key: string]: unknown };

  /**
   * Recurring billing configuration for subscription variants
   */
  recurring?: VariantUpdateResponse.Recurring | null;

  /**
   * Price amount in the smallest currency unit (e.g., cents). 0 for free variants.
   */
  unit_amount?: number;
}

export namespace VariantUpdateResponse {
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
 * A product variant representing a specific tier or configuration. Each variant
 * has its own pricing. Variants allow a single product to have multiple pricing
 * options (e.g., Basic, Pro, Enterprise tiers).
 */
export interface VariantListResponse {
  /**
   * Unique identifier for the topic subscription
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
  currency?: string;

  /**
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  default_price?: VariantListResponse.DefaultPrice | null;

  /**
   * Detailed description of what this variant includes
   */
  description?: string | null;

  /**
   * Media attachments (images, videos) for the variant
   */
  media?: Array<VariantListResponse.Media>;

  /**
   * Custom metadata for the variant
   */
  metadata?: { [key: string]: unknown };

  /**
   * Recurring billing configuration for subscription variants
   */
  recurring?: VariantListResponse.Recurring | null;

  /**
   * Price amount in the smallest currency unit (e.g., cents). 0 for free variants.
   */
  unit_amount?: number;
}

export namespace VariantListResponse {
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
 * A product variant representing a specific tier or configuration. Each variant
 * has its own pricing. Variants allow a single product to have multiple pricing
 * options (e.g., Basic, Pro, Enterprise tiers).
 */
export interface VariantArchiveResponse {
  /**
   * Unique identifier for the topic subscription
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
  currency?: string;

  /**
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  default_price?: VariantArchiveResponse.DefaultPrice | null;

  /**
   * Detailed description of what this variant includes
   */
  description?: string | null;

  /**
   * Media attachments (images, videos) for the variant
   */
  media?: Array<VariantArchiveResponse.Media>;

  /**
   * Custom metadata for the variant
   */
  metadata?: { [key: string]: unknown };

  /**
   * Recurring billing configuration for subscription variants
   */
  recurring?: VariantArchiveResponse.Recurring | null;

  /**
   * Price amount in the smallest currency unit (e.g., cents). 0 for free variants.
   */
  unit_amount?: number;
}

export namespace VariantArchiveResponse {
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
 * A product variant representing a specific tier or configuration. Each variant
 * has its own pricing. Variants allow a single product to have multiple pricing
 * options (e.g., Basic, Pro, Enterprise tiers).
 */
export interface VariantGetResponse {
  /**
   * Unique identifier for the topic subscription
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
  currency?: string;

  /**
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  default_price?: VariantGetResponse.DefaultPrice | null;

  /**
   * Detailed description of what this variant includes
   */
  description?: string | null;

  /**
   * Media attachments (images, videos) for the variant
   */
  media?: Array<VariantGetResponse.Media>;

  /**
   * Custom metadata for the variant
   */
  metadata?: { [key: string]: unknown };

  /**
   * Recurring billing configuration for subscription variants
   */
  recurring?: VariantGetResponse.Recurring | null;

  /**
   * Price amount in the smallest currency unit (e.g., cents). 0 for free variants.
   */
  unit_amount?: number;
}

export namespace VariantGetResponse {
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
   * Three-letter ISO currency code
   */
  currency?: string;

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
  metadata?: { [key: string]: unknown };

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
  metadata?: { [key: string]: unknown };

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
  active?: 'true' | 'false';
}

export interface VariantArchiveParams {
  /**
   * The unique identifier of the product
   */
  product_id: string;
}

export interface VariantGetParams {
  /**
   * The unique identifier of the product
   */
  product_id: string;
}

export declare namespace Variants {
  export {
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
