// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as CommerceAPI from './commerce';

export class CheckoutSessions extends APIResource {
  /**
   * Retrieve current payment and session status for a customer of this app. Call from your backend before fulfilling an order; do not trust the success redirect. A complete session can still be unpaid, including delayed payment methods. Test-mode payments must not fulfill live orders.
   *
   * @param {string} checkoutSessionID - The Stripe checkout session ID returned by checkout
   * @param {CheckoutSessionGetParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CheckoutSession>} The checkout session's current payment state
   *
   * @example
   * ```ts
   * const checkoutSession = await client.commerce.checkoutSessions.get('checkoutSessionId', {
   *   customer_id: 'cus_1234567890',
   * });
   * ```
   */
  get(
    checkoutSessionID: string,
    query: CheckoutSessionGetParams,
    options?: RequestOptions,
  ): APIPromise<CheckoutSession> {
    return this._client.get(__scalarPath`/v1/commerce/checkout-sessions/${checkoutSessionID}`, {
      query,
      ...options,
    });
  }
}

/**
 * Current Stripe checkout state. A complete session is not necessarily paid. Verify payment_status server-side and match the stored session, customer, amount, currency, and environment before fulfilling an order. A success redirect alone is not payment verification.
 */
export interface CheckoutSession {
  id: string;
  /**
   * Custom ID for the customer. Must start with "cus_" followed by letters (A-Z, a-z), numbers, underscores, and hyphens.
   * @minLength 5
   * @maxLength 255
   * @pattern ^cus_[\w-]+$
   */
  customer_id: string;
  status: 'open' | 'complete' | 'expired' | null;
  payment_status: 'paid' | 'unpaid' | 'no_payment_required';
  mode: 'payment' | 'subscription' | 'setup';
  /**
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  amount_total: number | null;
  currency: CommerceAPI.Currency | null;
  /**
   * Environment this response was served from. Sandbox data and live data never mix; the environment comes from the credential and the surface, not from the request.
   */
  environment: 'sandbox' | 'live';
}

export interface CheckoutSessionGetParams {
  /**
   * The customer who owns this checkout session
   * @minLength 5
   * @maxLength 255
   * @pattern ^cus_[\w-]+$
   */
  customer_id: string;
}
export declare namespace CheckoutSessions {
  export {
    type CheckoutSession as CheckoutSession,
    type CheckoutSessionGetParams as CheckoutSessionGetParams,
  };
}
