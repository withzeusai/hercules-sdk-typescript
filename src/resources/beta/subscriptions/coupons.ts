// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Coupons extends APIResource {
  /**
   * Creates a new coupon
   */
  create(body: CouponCreateParams, options?: RequestOptions): APIPromise<Coupon> {
    return this._client.post('/v1/subscriptions/coupons', { body, ...options });
  }

  /**
   * Updates a coupon by their ID
   */
  update(
    couponID: string,
    body: CouponUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Coupon> {
    return this._client.patch(path`/v1/subscriptions/coupons/${couponID}`, { body, ...options });
  }

  /**
   * Lists all coupons
   */
  list(
    query: CouponListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CouponsCursorIDPage, Coupon> {
    return this._client.getAPIList('/v1/subscriptions/coupons', CursorIDPage<Coupon>, { query, ...options });
  }

  /**
   * Deletes a coupon by their ID
   */
  delete(couponID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/subscriptions/coupons/${couponID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Gets a coupon by their ID
   */
  get(couponID: string, options?: RequestOptions): APIPromise<Coupon> {
    return this._client.get(path`/v1/subscriptions/coupons/${couponID}`, options);
  }
}

export type CouponsCursorIDPage = CursorIDPage<Coupon>;

/**
 * A coupon/promo code for discounts
 */
export interface Coupon {
  /**
   * An id for a data item
   */
  id: string;

  active: boolean;

  /**
   * The promo code
   */
  code: string;

  created: string;

  duration: 'once' | 'repeating' | 'forever';

  /**
   * Number of times this coupon has been redeemed
   */
  times_redeemed: number;

  /**
   * Fixed amount discount in cents
   */
  amount_off?: number | null;

  /**
   * Currency for amount_off
   */
  currency?: string | null;

  /**
   * Number of months for repeating duration
   */
  duration_in_months?: number | null;

  /**
   * Maximum number of times this coupon can be redeemed
   */
  max_redemptions?: number | null;

  name?: string | null;

  /**
   * Percentage discount (1-100)
   */
  percent_off?: number | null;

  /**
   * Date after which the coupon can no longer be redeemed
   */
  redeem_by?: string | null;
}

export interface CouponCreateParams {
  /**
   * The promo code customers will enter
   */
  code: string;

  /**
   * Fixed amount discount in cents
   */
  amount_off?: number;

  /**
   * Currency for amount_off
   */
  currency?: string;

  duration?: 'once' | 'repeating' | 'forever';

  /**
   * Number of months for repeating duration
   */
  duration_in_months?: number;

  /**
   * Maximum number of redemptions
   */
  max_redemptions?: number;

  /**
   * Display name for the coupon
   */
  name?: string;

  /**
   * Percentage discount (1-100)
   */
  percent_off?: number;

  /**
   * Expiration date for the coupon
   */
  redeem_by?: string;
}

export interface CouponUpdateParams {
  /**
   * Whether the coupon is active
   */
  active?: boolean;

  /**
   * Display name for the coupon
   */
  name?: string;
}

export interface CouponListParams extends CursorIDPageParams {
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
