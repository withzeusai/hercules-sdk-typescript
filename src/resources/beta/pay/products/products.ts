// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ResourcesAPI from './resources';
import { Resources } from './resources';
import * as VariantsAPI from './variants';
import {
  Variant,
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
   * entitlements to define which features customers on this product can access.
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<Product> {
    return this._client.post('/v1/pay/products', { body, ...options });
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
    return this._client.patch(path`/v1/pay/products/${productID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of subscription products. Products define the pricing
   * and billing intervals for subscriptions. Each product can have entitlements
   * attached that grant features to subscribed customers.
   */
  list(
    query: ProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProductsCursorIDPage, Product> {
    return this._client.getAPIList('/v1/pay/products', CursorIDPage<Product>, { query, ...options });
  }

  /**
   * Archives a product, preventing new subscriptions. Existing subscriptions remain
   * active. Use this instead of deletion to preserve subscription history.
   */
  archive(productID: string, options?: RequestOptions): APIPromise<Product> {
    return this._client.delete(path`/v1/pay/products/${productID}`, options);
  }

  /**
   * Retrieves a product by ID. Returns the product object including pricing details
   * and status.
   */
  get(productID: string, options?: RequestOptions): APIPromise<Product> {
    return this._client.get(path`/v1/pay/products/${productID}`, options);
  }
}

export type ProductsCursorIDPage = CursorIDPage<Product>;

/**
 * A product that customers can purchase. Products can be one-time purchases or
 * recurring subscriptions. Attach entitlements to a product to grant features to
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
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  default_price?: Product.DefaultPrice | null;

  /**
   * Detailed description of what the product includes
   */
  description?: string | null;
}

export namespace Product {
  /**
   * Price configuration for a product. Can be one-time or recurring (subscription).
   */
  export interface DefaultPrice {
    /**
     * Unique identifier for the topic subscription
     */
    id: string;

    /**
     * How to handle the billing cycle when switching plans. 'now' resets to current
     * time, 'unchanged' keeps the original anchor. Null for one-time prices.
     */
    billing_cycle_anchor: 'now' | 'unchanged' | null;

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
     * How to handle prorations when switching plans. 'default' creates prorations,
     * 'none' disables them. Null for one-time prices.
     */
    proration_behavior: 'default' | 'none' | null;

    /**
     * When to calculate proration. 'now' uses current time, 'start_of_period' uses the
     * billing period start. Null for one-time prices or to use Stripe's default.
     */
    proration_date: 'now' | 'start_of_period' | null;

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
   * Optional custom ID for the product. If not provided, one will be generated.
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
   * Price type: one_time for single purchases, recurring for subscriptions
   */
  type?: 'one_time' | 'recurring';
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
   * Display name for the product
   */
  name?: string;
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
    type Product as Product,
    type ProductsCursorIDPage as ProductsCursorIDPage,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };

  export { Resources as Resources };

  export {
    Variants as Variants,
    type Variant as Variant,
    type VariantsCursorIDPage as VariantsCursorIDPage,
    type VariantCreateParams as VariantCreateParams,
    type VariantUpdateParams as VariantUpdateParams,
    type VariantListParams as VariantListParams,
    type VariantArchiveParams as VariantArchiveParams,
    type VariantGetParams as VariantGetParams,
  };
}
