// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Coupons extends APIResource {
  /**
   * Creates a discount coupon with a promo code. Coupons can offer percentage or
   * fixed-amount discounts and can be limited by redemption count or expiration
   * date. Customers can apply coupons during checkout.
   *
   * @example
   * ```ts
   * const coupon = await client.beta.commerce.coupons.create({
   *   code: 'code',
   * });
   * ```
   */
  create(body: CouponCreateParams, options?: RequestOptions): APIPromise<Coupon> {
    return this._client.post('/v1/commerce/coupons', { body, ...options });
  }

  /**
   * Updates an existing coupon. Use this to modify the display name or deactivate
   * the coupon. Discount amounts and codes cannot be changed after creation.
   *
   * @example
   * ```ts
   * const coupon = await client.beta.commerce.coupons.update(
   *   'coupon_id',
   * );
   * ```
   */
  update(
    couponID: string,
    body: CouponUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Coupon> {
    return this._client.patch(path`/v1/commerce/coupons/${couponID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of all coupons. Coupons provide discounts that
   * customers can apply during checkout using a promo code.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const coupon of client.beta.commerce.coupons.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CouponListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CouponsCursorIDPage, Coupon> {
    return this._client.getAPIList('/v1/commerce/coupons', CursorIDPage<Coupon>, { query, ...options });
  }

  /**
   * Permanently deletes a coupon. The promo code can no longer be used. Existing
   * discounts applied to active subscriptions are not affected.
   *
   * @example
   * ```ts
   * await client.beta.commerce.coupons.delete('coupon_id');
   * ```
   */
  delete(couponID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/commerce/coupons/${couponID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a coupon by ID. Returns the coupon object including discount details
   * and redemption statistics.
   *
   * @example
   * ```ts
   * const coupon = await client.beta.commerce.coupons.get(
   *   'coupon_id',
   * );
   * ```
   */
  get(couponID: string, options?: RequestOptions): APIPromise<Coupon> {
    return this._client.get(path`/v1/commerce/coupons/${couponID}`, options);
  }
}

export type CouponsCursorIDPage = CursorIDPage<Coupon>;

/**
 * A discount coupon that customers can apply during checkout using a promo code
 */
export interface Coupon {
  /**
   * Unique identifier for the coupon
   */
  id: string;

  /**
   * Whether the coupon is currently active and can be redeemed
   */
  active: boolean;

  /**
   * The promo code customers enter to apply the discount
   */
  code: string;

  /**
   * Timestamp when the coupon was created
   */
  created: string;

  /**
   * How long the discount applies: once (first payment only), repeating (for
   * duration_in_months), or forever
   */
  duration: 'once' | 'repeating' | 'forever';

  /**
   * Number of times this coupon has been successfully redeemed
   */
  times_redeemed: number;

  /**
   * Fixed discount amount in the smallest currency unit (e.g., cents). Mutually
   * exclusive with percent_off.
   */
  amount_off?: number | null;

  /**
   * Three-letter ISO currency code for amount_off discounts
   */
  currency?: string | null;

  /**
   * Number of months the discount applies when duration is 'repeating'
   */
  duration_in_months?: number | null;

  /**
   * Maximum number of times this coupon can be redeemed across all customers
   */
  max_redemptions?: number | null;

  /**
   * Display name for the coupon (shown to customers)
   */
  name?: string | null;

  /**
   * Percentage discount (1-100). Mutually exclusive with amount_off.
   */
  percent_off?: number | null;

  /**
   * Expiration date after which the coupon can no longer be redeemed
   */
  redeem_by?: string | null;
}

export interface CouponCreateParams {
  /**
   * The promo code customers will enter to apply the discount
   */
  code: string;

  /**
   * Optional custom ID for the coupon. Must start with 'coupon\_'. If not provided,
   * one will be generated.
   */
  id?: string;

  /**
   * Fixed discount in the smallest currency unit (e.g., cents). Mutually exclusive
   * with percent_off.
   */
  amount_off?: number;

  /**
   * Three-letter ISO currency code for amount_off discounts
   */
  currency?: string;

  /**
   * How long the discount applies: once (first payment only), repeating (for
   * duration_in_months), or forever
   */
  duration?: 'once' | 'repeating' | 'forever';

  /**
   * Number of months the discount applies when duration is 'repeating'
   */
  duration_in_months?: number;

  /**
   * Maximum number of times this coupon can be redeemed
   */
  max_redemptions?: number;

  /**
   * Display name for the coupon (shown to customers)
   */
  name?: string;

  /**
   * Percentage discount (1-100). Mutually exclusive with amount_off.
   */
  percent_off?: number;

  /**
   * Expiration date after which the coupon can no longer be redeemed
   */
  redeem_by?: string;
}

export interface CouponUpdateParams {
  /**
   * Whether the coupon is active and can be redeemed
   */
  active?: boolean;

  /**
   * Display name for the coupon
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
