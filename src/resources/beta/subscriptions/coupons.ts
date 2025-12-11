// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Coupons extends APIResource {
  /**
   * Create a new discount coupon for subscriptions. Coupons can offer percentage or
   * fixed-amount discounts.
   */
  create(body: CouponCreateParams, options?: RequestOptions): APIPromise<Coupon> {
    return this._client.post('/v1/subscriptions/coupons', { body, ...options });
  }

  /**
   * Update coupon metadata. Discount amount and type cannot be changed after
   * creation.
   */
  update(
    couponID: string,
    body: CouponUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Coupon> {
    return this._client.patch(path`/v1/subscriptions/coupons/${couponID}`, { body, ...options });
  }

  /**
   * Retrieve all discount coupons. Coupons can be applied to subscriptions to
   * provide discounts to customers.
   */
  list(
    query: CouponListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CouponsCursorIDPage, Coupon> {
    return this._client.getAPIList('/v1/subscriptions/coupons', CursorIDPage<Coupon>, { query, ...options });
  }

  /**
   * Delete a coupon to prevent future use. Existing subscriptions using this coupon
   * remain unaffected.
   */
  delete(couponID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/subscriptions/coupons/${couponID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a specific coupon by ID, including discount details and validity
   * status.
   */
  get(couponID: string, options?: RequestOptions): APIPromise<Coupon> {
    return this._client.get(path`/v1/subscriptions/coupons/${couponID}`, options);
  }
}

export type CouponsCursorIDPage = CursorIDPage<Coupon>;

/**
 * Discount coupon for subscription payments. Offers percentage or fixed-amount
 * discounts
 */
export interface Coupon {
  /**
   * An id for a data item
   */
  id: string;

  /**
   * Whether the coupon can be redeemed
   */
  active: boolean;

  /**
   * Promo code customers enter at checkout
   */
  code: string;

  /**
   * Coupon creation timestamp
   */
  created: string;

  /**
   * How long the discount applies (once, repeating, or forever)
   */
  duration: 'once' | 'repeating' | 'forever';

  /**
   * Current number of times redeemed
   */
  times_redeemed: number;

  /**
   * Fixed discount in cents (e.g., 1000 = $10.00). Mutually exclusive with
   * percent_off
   */
  amount_off?: number | null;

  /**
   * Three-letter ISO currency code for amount_off
   */
  currency?: string | null;

  /**
   * Number of months discount applies (for repeating duration)
   */
  duration_in_months?: number | null;

  /**
   * Maximum total redemptions allowed. Null for unlimited
   */
  max_redemptions?: number | null;

  /**
   * Coupon display name
   */
  name?: string | null;

  /**
   * Percentage discount (1-100). Mutually exclusive with amount_off
   */
  percent_off?: number | null;

  /**
   * Expiration timestamp. Null for no expiration
   */
  redeem_by?: string | null;
}

export interface CouponCreateParams {
  /**
   * Promo code customers enter (e.g., SUMMER2024, SAVE20)
   */
  code: string;

  /**
   * Fixed discount in cents (e.g., 1000 = $10.00). Must specify either percent_off
   * or amount_off
   */
  amount_off?: number;

  /**
   * Three-letter ISO currency code (required for amount_off)
   */
  currency?: string;

  /**
   * Discount duration: once (single use), repeating (multiple months), or forever
   */
  duration?: 'once' | 'repeating' | 'forever';

  /**
   * Number of months for repeating duration
   */
  duration_in_months?: number;

  /**
   * Maximum total redemptions. Omit for unlimited
   */
  max_redemptions?: number;

  /**
   * Coupon display name
   */
  name?: string;

  /**
   * Percentage discount (1-100). Must specify either percent_off or amount_off
   */
  percent_off?: number;

  /**
   * Expiration timestamp. Omit for no expiration
   */
  redeem_by?: string;
}

export interface CouponUpdateParams {
  /**
   * Whether the coupon can be redeemed
   */
  active?: boolean;

  /**
   * Coupon display name
   */
  name?: string;
}

export interface CouponListParams extends CursorIDPageParams {
  /**
   * Filter by active status
   */
  active?: boolean;
}

export declare namespace Coupons {
  export {
    type Coupon as Coupon,
    type CouponsCursorIDPage as CouponsCursorIDPage,
    type CouponCreateParams as CouponCreateParams,
    type CouponUpdateParams as CouponUpdateParams,
    type CouponListParams as CouponListParams,
  };
}
