// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CommerceAPI from './commerce';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CheckoutSessions extends APIResource {
  /**
   * Retrieve current payment and session status for a customer of this app. Call
   * from your backend before fulfilling an order; do not trust the success redirect.
   * A complete session can still be unpaid, including delayed payment methods.
   * Test-mode payments must not fulfill live orders.
   *
   * @example
   * ```ts
   * const checkoutSession =
   *   await client.commerce.checkoutSessions.get('x', {
   *     customer_id: 'cus_1234567890',
   *   });
   * ```
   */
  get(
    checkoutSessionID: string,
    query: CheckoutSessionGetParams,
    options?: RequestOptions,
  ): APIPromise<CheckoutSession> {
    return this._client.get(path`/v1/commerce/checkout-sessions/${checkoutSessionID}`, { query, ...options });
  }
}

/**
 * Current Stripe checkout state. A complete session is not necessarily paid.
 * Verify payment_status server-side and match the stored session, customer,
 * amount, currency, and environment before fulfilling an order. A success redirect
 * alone is not payment verification.
 */
export interface CheckoutSession {
  id: string;

  amount_total: number | null;

  /**
   * Three-letter ISO currency code.
   *
   * Supported currencies: USD, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN,
   * BAM, BBD, BDT, BIF, BMD, BND, BOB, BRL, BSD, BWP, BYN, BZD, CAD, CDF, CHF, CLP,
   * CNY, COP, CRC, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ETB, EUR, FJD, FKP, GBP, GEL,
   * GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HTG, HUF, IDR, ILS, INR, ISK, JMD, JPY, KES,
   * KGS, KHR, KMF, KRW, KYD, KZT, LAK, LBP, LKR, LRD, LSL, MAD, MDL, MGA, MKD, MMK,
   * MNT, MOP, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, PAB, PEN,
   * PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SEK, SGD, SHP,
   * SLE, SOS, SRD, STD, SZL, THB, TJS, TOP, TRY, TTD, TWD, TZS, UAH, UGX, UYU, UZS,
   * VND, VUV, WST, XAF, XCD, XCG, XOF, XPF, YER, ZAR, ZMW.
   */
  currency: CommerceAPI.Currency | null;

  /**
   * Custom ID for the customer. Must start with "cus\_" followed by letters (A-Z,
   * a-z), numbers, underscores, and hyphens.
   */
  customer_id: string;

  /**
   * Environment this response was served from. Sandbox data and live data never mix;
   * the environment comes from the credential and the surface, not from the request.
   */
  environment: 'sandbox' | 'live';

  mode: 'payment' | 'subscription' | 'setup';

  payment_status: 'paid' | 'unpaid' | 'no_payment_required';

  status: 'open' | 'complete' | 'expired' | null;
}

export interface CheckoutSessionGetParams {
  /**
   * The customer who owns this checkout session
   */
  customer_id: string;
}

export declare namespace CheckoutSessions {
  export {
    type CheckoutSession as CheckoutSession,
    type CheckoutSessionGetParams as CheckoutSessionGetParams,
  };
}
