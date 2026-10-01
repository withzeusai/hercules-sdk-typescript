// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import * as CheckoutSessionsAPI from './checkout-sessions';
import { CheckoutSessions, type CheckoutSession, type CheckoutSessionGetParams } from './checkout-sessions';
import * as CustomersAPI from './customers';
import {
  Customers,
  type Customer,
  type CustomerAddress,
  type CustomersCursorIDPage,
  type CustomerGetResponse,
  type CustomerBillingPortalResponse,
  type CustomerListParams,
  type CustomerCreateParams,
  type CustomerUpdateParams,
  type CustomerBillingPortalParams,
} from './customers';
import * as ProductsAPI from './products/products';
import {
  Products,
  type Product,
  type ProductsCursorIDPage,
  type ProductCreateResponse,
  type ProductListParams,
  type ProductGetParams,
  type ProductCreateParams,
  type ProductUpdateParams,
} from './products/products';
import * as CouponsAPI from './coupons';
import {
  Coupons,
  type Coupon,
  type CouponsCursorIDPage,
  type CouponListParams,
  type CouponCreateParams,
  type CouponUpdateParams,
} from './coupons';
import * as FeaturesAPI from './features';
import {
  Features,
  type Feature,
  type FeaturesCursorIDPage,
  type FeatureListParams,
  type FeatureCreateParams,
  type FeatureUpdateParams,
} from './features';
import * as EntitlementsAPI from './entitlements';
import {
  Entitlements,
  type EntitlementGrant,
  type EntitlementGrantsCursorIDPage,
  type EntitlementListParams,
  type EntitlementGetParams,
  type EntitlementCreateParams,
  type EntitlementUpdateParams,
} from './entitlements';

export class Commerce extends APIResource {
  checkoutSessions: CheckoutSessionsAPI.CheckoutSessions = new CheckoutSessionsAPI.CheckoutSessions(
    this._client,
  );
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
  coupons: CouponsAPI.Coupons = new CouponsAPI.Coupons(this._client);
  features: FeaturesAPI.Features = new FeaturesAPI.Features(this._client);
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);

  /**
   * Creates a checkout session for a customer to subscribe to a product. Returns a URL to redirect the customer to for payment. After successful payment, the customer is subscribed to the product and gains access to its entitlements.
   *
   * @param {CommerceCheckoutParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CommerceCheckoutResponse>} The checkout session containing the URL to redirect the customer to
   *
   * @example
   * ```ts
   * const commerce = await client.commerce.checkout({
   *   customer_id: 'cus_1234567890',
   *   line_items: [],
   *   success_url: 'https://example.com',
   * });
   * ```
   */
  checkout(body: CommerceCheckoutParams, options?: RequestOptions): APIPromise<CommerceCheckoutResponse> {
    return this._client.post('/v1/commerce/checkout', { body, ...options });
  }

  /**
   * Cancels a customer's subscription. By default, the subscription remains active until the end of the current billing period. Set cancellation_timing to 'immediate' to cancel immediately.
   *
   * @param {CommerceCancelParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CommerceCancelResponse>} The canceled subscription object with updated status
   *
   * @example
   * ```ts
   * const commerce = await client.commerce.cancel({
   *   customer_id: 'cus_1234567890',
   *   subscription_id: 'sub_1234567890',
   *   cancellation_timing: 'at_billing_period_end',
   * });
   * ```
   */
  cancel(body: CommerceCancelParams, options?: RequestOptions): APIPromise<CommerceCancelResponse> {
    return this._client.post('/v1/commerce/cancel', { body, ...options });
  }

  /**
   * Verifies if a customer has access to a specific feature. Use this to gate features in your app based on the customer's active subscription and the entitlements attached to their product. Hercules recommends calling this before allowing access to premium features.
   *
   * @param {CommerceCheckParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CommerceCheckResponse>} The entitlement check result indicating whether access is granted
   *
   * @example
   * ```ts
   * const commerce = await client.commerce.check({
   *   customer_id: 'cus_1234567890',
   *   resource_id: 'feat_1234567890',
   * });
   * ```
   */
  check(body: CommerceCheckParams, options?: RequestOptions): APIPromise<CommerceCheckResponse> {
    return this._client.post('/v1/commerce/check', { body, ...options });
  }
}

/**
 * Three-letter ISO currency code.
 *
 * Supported currencies: USD, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BIF, BMD, BND, BOB, BRL, BSD, BWP, BYN, BZD, CAD, CDF, CHF, CLP, CNY, COP, CRC, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ETB, EUR, FJD, FKP, GBP, GEL, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HTG, HUF, IDR, ILS, INR, ISK, JMD, JPY, KES, KGS, KHR, KMF, KRW, KYD, KZT, LAK, LBP, LKR, LRD, LSL, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SEK, SGD, SHP, SLE, SOS, SRD, STD, SZL, THB, TJS, TOP, TRY, TTD, TWD, TZS, UAH, UGX, UYU, UZS, VND, VUV, WST, XAF, XCD, XCG, XOF, XPF, YER, ZAR, ZMW.
 */
export type Currency =
  | 'USD'
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'ISK'
  | 'JMD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KRW'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLE'
  | 'SOS'
  | 'SRD'
  | 'STD'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'UYU'
  | 'UZS'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XCD'
  | 'XCG'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'ZAR'
  | 'ZMW';

export interface CommerceCheckoutParams {
  /**
   * The customer ID
   * @minLength 5
   * @maxLength 255
   * @pattern ^cus_[\w-]+$
   */
  customer_id: string;
  /**
   * List of items to purchase. Each item specifies a variant and quantity.
   * @minItems 1
   */
  line_items: Array<CommerceCheckoutParams.LineItem>;
  /**
   * URL to redirect on success
   * @format uri
   */
  success_url: string;
  /**
   * URL to redirect on cancel
   * @format uri
   */
  cancel_url?: string;
  /**
   * Promotion code to apply
   * @maxLength 50
   */
  promotion_code?: string;
  /**
   * Override the free trial period for new subscriptions, in days (0-365). If not provided, uses the subscription group's configured trial period. Set to 0 to disable the group's trial for this checkout. Ignored when updating an existing subscription.
   * @minimum 0
   * @maximum 365
   */
  trial_period_days?: number;
  /**
   * Override proration behavior for subscription updates. If not provided, uses the subscription group's configured default.
   */
  proration_behavior?: 'none' | 'prorate' | 'full_difference';
  /**
   * Override charge timing for subscription updates. If not provided, uses the subscription group's configured default.
   */
  charge_timing?: 'immediate' | 'end_of_period';
  /**
   * Override plan downgrade behavior for subscription updates. If not provided, uses the subscription group's configured default.
   */
  plan_downgrade_behavior?: 'immediate' | 'end_of_period';
  /**
   * Override interval downgrade behavior for subscription updates. If not provided, uses the subscription group's configured default.
   */
  interval_downgrade_behavior?: 'immediate' | 'end_of_period';
}

export namespace CommerceCheckoutParams {
  export interface LineItem {
    /**
     * The variant ID to purchase. Determines pricing and whether this is a subscription or one-time payment.
     * @minLength 5
     * @maxLength 255
     * @pattern ^var_[\w-]+$
     */
    variant_id: string;
    /**
     * Quantity of this item. For subscriptions, this typically represents seat count. Defaults to 1.
     * @minimum 1
     * @maximum 9999
     */
    quantity?: number;
  }
}

export interface CommerceCheckoutResponse {
  /**
   * The action taken: 'checkout' for new subscriptions (redirect to URL), 'update' for subscription changes (already applied)
   */
  action: 'checkout' | 'update';
  /**
   * The checkout session ID (for checkout action) or subscription ID (for update action)
   */
  id: string;
  /**
   * Environment this response was served from. Sandbox data and live data never mix; the environment comes from the credential and the surface, not from the request.
   */
  environment: 'sandbox' | 'live';
  /**
   * The checkout URL to redirect the customer to. Only present for 'checkout' action.
   */
  url?: string | null;
  /**
   * The checkout mode: subscription for recurring prices, payment for one-time prices. Only present for 'checkout' action.
   */
  mode?: 'subscription' | 'payment' | null;
  /**
   * The updated subscription details. Only present for 'update' action.
   */
  subscription?: CommerceCheckoutResponse.Subscription | null;
}

export namespace CommerceCheckoutResponse {
  export interface Subscription {
    /**
     * The subscription ID
     */
    id: string;
    /**
     * The subscription status
     */
    status: string;
    /**
     * The product ID
     */
    product_id: string;
    /**
     * The variant ID if applicable
     */
    variant_id?: string | null;
  }
}

export interface CommerceCancelParams {
  /**
   * The customer ID
   * @minLength 5
   * @maxLength 255
   * @pattern ^cus_[\w-]+$
   */
  customer_id: string;
  /**
   * The subscription ID to cancel
   * @minLength 5
   * @maxLength 255
   * @pattern ^sub_[\w-]+$
   */
  subscription_id: string;
  /**
   * When to cancel the subscription. Defaults to 'at_billing_period_end' to allow customers to use remaining time.
   */
  cancellation_timing?: 'immediate' | 'at_billing_period_end';
}

export interface CommerceCancelResponse {
  /**
   * The subscription ID
   */
  id: string;
  /**
   * The subscription status
   */
  status: string;
  /**
   * When the cancellation takes effect
   */
  cancellation_timing: 'immediate' | 'at_billing_period_end';
  /**
   * Environment this response was served from. Sandbox data and live data never mix; the environment comes from the credential and the surface, not from the request.
   */
  environment: 'sandbox' | 'live';
  /**
   * When the subscription was canceled
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  canceled_at?: string | null;
}

export interface CommerceCheckParams {
  /**
   * The customer ID
   * @minLength 5
   * @maxLength 255
   * @pattern ^cus_[\w-]+$
   */
  customer_id: string;
  /**
   * The resource ID to check for access
   * @maxLength 255
   */
  resource_id: string;
}

export interface CommerceCheckResponse {
  /**
   * Whether the customer has access to the resource
   */
  has_access: boolean;
  /**
   * Environment this response was served from. Sandbox data and live data never mix; the environment comes from the credential and the surface, not from the request.
   */
  environment: 'sandbox' | 'live';
}
Commerce.CheckoutSessions = CheckoutSessions;
Commerce.Customers = Customers;
Commerce.Products = Products;
Commerce.Coupons = Coupons;
Commerce.Features = Features;
Commerce.Entitlements = Entitlements;

export declare namespace Commerce {
  export {
    type Currency as Currency,
    type CommerceCheckoutResponse as CommerceCheckoutResponse,
    type CommerceCancelResponse as CommerceCancelResponse,
    type CommerceCheckResponse as CommerceCheckResponse,
    type CommerceCheckoutParams as CommerceCheckoutParams,
    type CommerceCancelParams as CommerceCancelParams,
    type CommerceCheckParams as CommerceCheckParams,
  };

  export {
    CheckoutSessions as CheckoutSessions,
    type CheckoutSession as CheckoutSession,
    type CheckoutSessionGetParams as CheckoutSessionGetParams,
  };

  export {
    Customers as Customers,
    type Customer as Customer,
    type CustomerAddress as CustomerAddress,
    type CustomersCursorIDPage as CustomersCursorIDPage,
    type CustomerGetResponse as CustomerGetResponse,
    type CustomerBillingPortalResponse as CustomerBillingPortalResponse,
    type CustomerListParams as CustomerListParams,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerBillingPortalParams as CustomerBillingPortalParams,
  };

  export {
    Products as Products,
    type Product as Product,
    type ProductsCursorIDPage as ProductsCursorIDPage,
    type ProductCreateResponse as ProductCreateResponse,
    type ProductListParams as ProductListParams,
    type ProductGetParams as ProductGetParams,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
  };

  export {
    Coupons as Coupons,
    type Coupon as Coupon,
    type CouponsCursorIDPage as CouponsCursorIDPage,
    type CouponListParams as CouponListParams,
    type CouponCreateParams as CouponCreateParams,
    type CouponUpdateParams as CouponUpdateParams,
  };

  export {
    Features as Features,
    type Feature as Feature,
    type FeaturesCursorIDPage as FeaturesCursorIDPage,
    type FeatureListParams as FeatureListParams,
    type FeatureCreateParams as FeatureCreateParams,
    type FeatureUpdateParams as FeatureUpdateParams,
  };

  export {
    Entitlements as Entitlements,
    type EntitlementGrant as EntitlementGrant,
    type EntitlementGrantsCursorIDPage as EntitlementGrantsCursorIDPage,
    type EntitlementListParams as EntitlementListParams,
    type EntitlementGetParams as EntitlementGetParams,
    type EntitlementCreateParams as EntitlementCreateParams,
    type EntitlementUpdateParams as EntitlementUpdateParams,
  };
}
