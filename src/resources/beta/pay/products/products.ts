// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as EntitlementsAPI from './entitlements';
import {
  EntitlementAttachParams,
  EntitlementAttachResponse,
  EntitlementListParams,
  EntitlementListResponse,
  EntitlementListResponsesCursorIDPage,
  EntitlementRemoveParams,
  Entitlements,
} from './entitlements';
import { APIPromise } from '../../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Products extends APIResource {
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);

  /**
   * Creates a new subscription product with a recurring price. Common examples
   * include Free, Pro, Business, or Teams tiers. After creating a product, attach
   * entitlements to define which features customers on this product can access.
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<ProductCreateResponse> {
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
  ): APIPromise<ProductUpdateResponse> {
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
  ): PagePromise<ProductListResponsesCursorIDPage, ProductListResponse> {
    return this._client.getAPIList('/v1/pay/products', CursorIDPage<ProductListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Archives a product, preventing new subscriptions. Existing subscriptions remain
   * active. Use this instead of deletion to preserve subscription history.
   */
  archive(productID: string, options?: RequestOptions): APIPromise<ProductArchiveResponse> {
    return this._client.delete(path`/v1/pay/products/${productID}`, options);
  }

  /**
   * Retrieves a product by ID. Returns the product object including pricing details
   * and status.
   */
  get(productID: string, options?: RequestOptions): APIPromise<ProductGetResponse> {
    return this._client.get(path`/v1/pay/products/${productID}`, options);
  }
}

export type ProductListResponsesCursorIDPage = CursorIDPage<ProductListResponse>;

/**
 * A subscription product that customers can subscribe to. Products define pricing
 * and billing intervals. Attach entitlements to a product to grant features to all
 * subscribed customers.
 */
export interface ProductCreateResponse {
  /**
   * Unique identifier for the entitlement
   */
  id: string;

  /**
   * Whether the product is available for new subscriptions
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
   * The recurring price configuration for a product
   */
  default_price?: ProductCreateResponse.DefaultPrice | null;

  /**
   * Detailed description of what the product includes
   */
  description?: string | null;
}

export namespace ProductCreateResponse {
  /**
   * The recurring price configuration for a product
   */
  export interface DefaultPrice {
    /**
     * Unique identifier for the entitlement
     */
    id: string;

    /**
     * Three-letter ISO currency code (e.g., usd, eur)
     */
    currency: string;

    /**
     * Billing frequency: day, week, month, or year
     */
    interval: 'day' | 'week' | 'month' | 'year';

    /**
     * Number of intervals between billings (e.g., 2 for biweekly)
     */
    interval_count: number;

    /**
     * Price amount in the smallest currency unit (e.g., cents)
     */
    unit_amount: number | null;
  }
}

/**
 * A subscription product that customers can subscribe to. Products define pricing
 * and billing intervals. Attach entitlements to a product to grant features to all
 * subscribed customers.
 */
export interface ProductUpdateResponse {
  /**
   * Unique identifier for the entitlement
   */
  id: string;

  /**
   * Whether the product is available for new subscriptions
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
   * The recurring price configuration for a product
   */
  default_price?: ProductUpdateResponse.DefaultPrice | null;

  /**
   * Detailed description of what the product includes
   */
  description?: string | null;
}

export namespace ProductUpdateResponse {
  /**
   * The recurring price configuration for a product
   */
  export interface DefaultPrice {
    /**
     * Unique identifier for the entitlement
     */
    id: string;

    /**
     * Three-letter ISO currency code (e.g., usd, eur)
     */
    currency: string;

    /**
     * Billing frequency: day, week, month, or year
     */
    interval: 'day' | 'week' | 'month' | 'year';

    /**
     * Number of intervals between billings (e.g., 2 for biweekly)
     */
    interval_count: number;

    /**
     * Price amount in the smallest currency unit (e.g., cents)
     */
    unit_amount: number | null;
  }
}

/**
 * A subscription product that customers can subscribe to. Products define pricing
 * and billing intervals. Attach entitlements to a product to grant features to all
 * subscribed customers.
 */
export interface ProductListResponse {
  /**
   * Unique identifier for the entitlement
   */
  id: string;

  /**
   * Whether the product is available for new subscriptions
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
   * The recurring price configuration for a product
   */
  default_price?: ProductListResponse.DefaultPrice | null;

  /**
   * Detailed description of what the product includes
   */
  description?: string | null;
}

export namespace ProductListResponse {
  /**
   * The recurring price configuration for a product
   */
  export interface DefaultPrice {
    /**
     * Unique identifier for the entitlement
     */
    id: string;

    /**
     * Three-letter ISO currency code (e.g., usd, eur)
     */
    currency: string;

    /**
     * Billing frequency: day, week, month, or year
     */
    interval: 'day' | 'week' | 'month' | 'year';

    /**
     * Number of intervals between billings (e.g., 2 for biweekly)
     */
    interval_count: number;

    /**
     * Price amount in the smallest currency unit (e.g., cents)
     */
    unit_amount: number | null;
  }
}

/**
 * A subscription product that customers can subscribe to. Products define pricing
 * and billing intervals. Attach entitlements to a product to grant features to all
 * subscribed customers.
 */
export interface ProductArchiveResponse {
  /**
   * Unique identifier for the entitlement
   */
  id: string;

  /**
   * Whether the product is available for new subscriptions
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
   * The recurring price configuration for a product
   */
  default_price?: ProductArchiveResponse.DefaultPrice | null;

  /**
   * Detailed description of what the product includes
   */
  description?: string | null;
}

export namespace ProductArchiveResponse {
  /**
   * The recurring price configuration for a product
   */
  export interface DefaultPrice {
    /**
     * Unique identifier for the entitlement
     */
    id: string;

    /**
     * Three-letter ISO currency code (e.g., usd, eur)
     */
    currency: string;

    /**
     * Billing frequency: day, week, month, or year
     */
    interval: 'day' | 'week' | 'month' | 'year';

    /**
     * Number of intervals between billings (e.g., 2 for biweekly)
     */
    interval_count: number;

    /**
     * Price amount in the smallest currency unit (e.g., cents)
     */
    unit_amount: number | null;
  }
}

/**
 * A subscription product that customers can subscribe to. Products define pricing
 * and billing intervals. Attach entitlements to a product to grant features to all
 * subscribed customers.
 */
export interface ProductGetResponse {
  /**
   * Unique identifier for the entitlement
   */
  id: string;

  /**
   * Whether the product is available for new subscriptions
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
   * The recurring price configuration for a product
   */
  default_price?: ProductGetResponse.DefaultPrice | null;

  /**
   * Detailed description of what the product includes
   */
  description?: string | null;
}

export namespace ProductGetResponse {
  /**
   * The recurring price configuration for a product
   */
  export interface DefaultPrice {
    /**
     * Unique identifier for the entitlement
     */
    id: string;

    /**
     * Three-letter ISO currency code (e.g., usd, eur)
     */
    currency: string;

    /**
     * Billing frequency: day, week, month, or year
     */
    interval: 'day' | 'week' | 'month' | 'year';

    /**
     * Number of intervals between billings (e.g., 2 for biweekly)
     */
    interval_count: number;

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
   * Billing frequency: day, week, month, or year
   */
  interval?: 'day' | 'week' | 'month' | 'year';

  /**
   * Number of intervals between billings
   */
  interval_count?: number;
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

Products.Entitlements = Entitlements;

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
    Entitlements as Entitlements,
    type EntitlementListResponse as EntitlementListResponse,
    type EntitlementAttachResponse as EntitlementAttachResponse,
    type EntitlementListResponsesCursorIDPage as EntitlementListResponsesCursorIDPage,
    type EntitlementListParams as EntitlementListParams,
    type EntitlementAttachParams as EntitlementAttachParams,
    type EntitlementRemoveParams as EntitlementRemoveParams,
  };
}
