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
  create(productID: string, body: VariantCreateParams, options?: RequestOptions): APIPromise<Variant> {
    return this._client.post(path`/v1/pay/products/${productID}/variants`, { body, ...options });
  }

  /**
   * Updates an existing variant. Use this to modify the name, description, or active
   * status. Pricing cannot be changed after creation—create a new variant instead.
   */
  update(variantID: string, params: VariantUpdateParams, options?: RequestOptions): APIPromise<Variant> {
    const { product_id, ...body } = params;
    return this._client.patch(path`/v1/pay/products/${product_id}/variants/${variantID}`, {
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
  ): PagePromise<VariantsCursorIDPage, Variant> {
    return this._client.getAPIList(path`/v1/pay/products/${productID}/variants`, CursorIDPage<Variant>, {
      query,
      ...options,
    });
  }

  /**
   * Archives a variant, preventing new subscriptions. The associated Stripe Price is
   * also archived. Existing subscriptions remain active.
   */
  archive(variantID: string, params: VariantArchiveParams, options?: RequestOptions): APIPromise<Variant> {
    const { product_id } = params;
    return this._client.delete(path`/v1/pay/products/${product_id}/variants/${variantID}`, options);
  }

  /**
   * Retrieves a variant by ID. Returns the variant object including pricing details
   * and status.
   */
  get(variantID: string, params: VariantGetParams, options?: RequestOptions): APIPromise<Variant> {
    const { product_id } = params;
    return this._client.get(path`/v1/pay/products/${product_id}/variants/${variantID}`, options);
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
   * Unique identifier for the price
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
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  default_price?: Variant.DefaultPrice | null;

  /**
   * Detailed description of what this variant includes
   */
  description?: string | null;
}

export namespace Variant {
  /**
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  export interface DefaultPrice {
    /**
     * Unique identifier for the price
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
}

export interface VariantCreateParams {
  /**
   * Display name for the variant (e.g., Basic, Standard, Premium)
   */
  name: string;

  /**
   * Price amount in the smallest currency unit (e.g., cents). Use 0 for free
   * variants.
   */
  unit_amount: number;

  /**
   * Optional custom ID for the variant. If not provided, one will be generated.
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
   * Price type: one_time for single purchases, recurring for subscriptions
   */
  type?: 'one_time' | 'recurring';
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
   * Body param: Display name for the variant
   */
  name?: string;
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
    type Variant as Variant,
    type VariantsCursorIDPage as VariantsCursorIDPage,
    type VariantCreateParams as VariantCreateParams,
    type VariantUpdateParams as VariantUpdateParams,
    type VariantListParams as VariantListParams,
    type VariantArchiveParams as VariantArchiveParams,
    type VariantGetParams as VariantGetParams,
  };
}
