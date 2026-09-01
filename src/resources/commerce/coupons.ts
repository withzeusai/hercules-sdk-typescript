// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../core/pagination';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as CommerceAPI from './commerce';

export class Coupons extends APIResource {
  /**
   * Retrieves a paginated list of all coupons. Coupons provide discounts that customers can apply during checkout using a promo code.
   *
   * @param {CouponListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<CouponsCursorIDPage, Coupon>} A paginated list of coupon objects
   *
   * @example
   * ```ts
   * const page = await client.commerce.coupons.list();
   * ```
   */
  list(
    query: CouponListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CouponsCursorIDPage, Coupon> {
    return this._client.getAPIList('/v1/commerce/coupons', CursorIDPage<Coupon>, { query, ...options });
  }

  /**
   * Retrieves a coupon by ID. Returns the coupon object including discount details and redemption statistics.
   *
   * @param {string} couponID - The unique identifier of the coupon
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Coupon>} The coupon object
   *
   * @example
   * ```ts
   * const coupon = await client.commerce.coupons.get('coupon_1234567890');
   * ```
   */
  get(couponID: string, options?: RequestOptions): APIPromise<Coupon> {
    return this._client.get(__scalarPath`/v1/commerce/coupons/${couponID}`, options);
  }

  /**
   * Creates a discount coupon with a promo code. Coupons can offer percentage or fixed-amount discounts and can be limited by redemption count or expiration date. Customers can apply coupons during checkout.
   *
   * @param {CouponCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Coupon>} The created coupon object
   *
   * @example
   * ```ts
   * const coupon = await client.commerce.coupons.create({
   *   code: 'LAUNCH20',
   *   duration: 'once',
   * });
   * ```
   */
  create(body: CouponCreateParams, options?: RequestOptions): APIPromise<Coupon> {
    return this._client.post('/v1/commerce/coupons', { body, ...options });
  }

  /**
   * Updates an existing coupon. Use this to modify the display name or deactivate the coupon. Discount amounts and codes cannot be changed after creation.
   *
   * @param {string} couponID - The unique identifier of the coupon
   * @param {CouponUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Coupon>} The updated coupon object
   *
   * @example
   * ```ts
   * const coupon = await client.commerce.coupons.update('coupon_1234567890', {});
   * ```
   */
  update(couponID: string, body: CouponUpdateParams, options?: RequestOptions): APIPromise<Coupon> {
    return this._client.patch(__scalarPath`/v1/commerce/coupons/${couponID}`, { body, ...options });
  }
}

/**
 * A discount coupon that customers can apply during checkout using a promo code
 */
export interface Coupon {
  /**
   * Unique identifier for the coupon
   */
  id: string;
  /**
   * Timestamp when the coupon was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * The promo code customers enter to apply the discount
   */
  code: string;
  /**
   * How long the discount applies: once (first payment only), repeating (for duration_in_months), or forever
   */
  duration: 'once' | 'repeating' | 'forever';
  /**
   * Number of times this coupon has been successfully redeemed
   * @minimum 0
   * @maximum 9007199254740991
   */
  times_redeemed: number;
  /**
   * Whether the coupon is currently active and can be redeemed
   */
  active: boolean;
  /**
   * Environment this response was served from. Sandbox data and live data never mix; the environment comes from the credential and the surface, not from the request.
   */
  environment: 'sandbox' | 'live';
  /**
   * Display name for the coupon (shown to customers)
   */
  name?: string | null;
  /**
   * Percentage discount (1-100). Mutually exclusive with amount_off.
   */
  percent_off?: number | null;
  /**
   * Fixed discount amount in the smallest currency unit (e.g., cents). Mutually exclusive with percent_off.
   * @minimum 0
   * @maximum 9007199254740991
   */
  amount_off?: number | null;
  /**
   * Three-letter ISO currency code for amount_off discounts
   */
  currency?: string | null;
  /**
   * Number of months the discount applies when duration is 'repeating'
   * @minimum 0
   * @maximum 9007199254740991
   */
  duration_in_months?: number | null;
  /**
   * Maximum number of times this coupon can be redeemed across all customers
   * @minimum 0
   * @maximum 9007199254740991
   */
  max_redemptions?: number | null;
  /**
   * Expiration date after which the coupon can no longer be redeemed
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  redeem_by?: string | null;
}

export interface CouponListParams extends CursorIDPageParams {
  /**
   * Filter by active status
   */
  active?: boolean;
}

export type CouponsCursorIDPage = CursorIDPage<Coupon>;

export interface CouponCreateParams {
  /**
   * The promo code customers will enter to apply the discount
   * @minLength 1
   * @maxLength 50
   * @pattern ^[A-Z0-9_-]+$
   */
  code: string;
  /**
   * Optional custom ID for the coupon. Must start with 'coupon_'. If not provided, one will be generated.
   * @minLength 8
   * @maxLength 255
   * @pattern ^coupon_[\w-]+$
   */
  id?: string;
  /**
   * Display name for the coupon (shown to customers)
   */
  name?: string;
  /**
   * Percentage discount (1-100). Mutually exclusive with amount_off.
   * @minimum 1
   * @maximum 100
   */
  percent_off?: number;
  /**
   * Fixed discount in the smallest currency unit (e.g., cents). Mutually exclusive with percent_off.
   * @minimum 1
   * @maximum 9007199254740991
   */
  amount_off?: number;
  /**
   * Three-letter ISO currency code.
   *
   * Supported currencies: USD, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BIF, BMD, BND, BOB, BRL, BSD, BWP, BYN, BZD, CAD, CDF, CHF, CLP, CNY, COP, CRC, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ETB, EUR, FJD, FKP, GBP, GEL, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HTG, HUF, IDR, ILS, INR, ISK, JMD, JPY, KES, KGS, KHR, KMF, KRW, KYD, KZT, LAK, LBP, LKR, LRD, LSL, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SEK, SGD, SHP, SLE, SOS, SRD, STD, SZL, THB, TJS, TOP, TRY, TTD, TWD, TZS, UAH, UGX, UYU, UZS, VND, VUV, WST, XAF, XCD, XCG, XOF, XPF, YER, ZAR, ZMW.
   */
  currency?: CommerceAPI.Currency;
  /**
   * How long the discount applies: once (first payment only), repeating (for duration_in_months), or forever
   * @default once
   */
  duration?: 'once' | 'repeating' | 'forever';
  /**
   * Number of months the discount applies when duration is 'repeating'
   * @minimum 1
   * @maximum 36
   */
  duration_in_months?: number;
  /**
   * Maximum number of times this coupon can be redeemed
   * @minimum 1
   * @maximum 9007199254740991
   */
  max_redemptions?: number;
  /**
   * Expiration date after which the coupon can no longer be redeemed
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  redeem_by?: string;
}

export interface CouponUpdateParams {
  /**
   * Display name for the coupon
   * @maxLength 250
   */
  name?: string;
  /**
   * Whether the coupon is active and can be redeemed
   */
  active?: boolean;
}
export declare namespace Coupons {
  export {
    type Coupon as Coupon,
    type CouponsCursorIDPage as CouponsCursorIDPage,
    type CouponListParams as CouponListParams,
    type CouponCreateParams as CouponCreateParams,
    type CouponUpdateParams as CouponUpdateParams,
  };
}
