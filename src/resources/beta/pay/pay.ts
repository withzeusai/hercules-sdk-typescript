// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CouponsAPI from './coupons';
import {
  Coupon,
  CouponCreateParams,
  CouponListParams,
  CouponUpdateParams,
  Coupons,
  CouponsCursorIDPage,
} from './coupons';
import * as CustomersAPI from './customers';
import {
  Customer,
  CustomerAddress,
  CustomerBillingPortalParams,
  CustomerBillingPortalResponse,
  CustomerCreateParams,
  CustomerListParams,
  CustomerUpdateParams,
  Customers,
  CustomersCursorIDPage,
} from './customers';
import * as EntitlementsAPI from './entitlements';
import {
  Entitlement,
  EntitlementCreateParams,
  EntitlementListParams,
  EntitlementUpdateParams,
  Entitlements,
  EntitlementsCursorIDPage,
} from './entitlements';
import * as ProductsAPI from './products/products';
import {
  Product,
  ProductCreateParams,
  ProductListParams,
  ProductUpdateParams,
  Products,
  ProductsCursorIDPage,
} from './products/products';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Pay extends APIResource {
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);
  coupons: CouponsAPI.Coupons = new CouponsAPI.Coupons(this._client);

  /**
   * Cancels a customer's subscription. By default, the subscription remains active
   * until the end of the current billing period. Set cancellation_timing to
   * 'immediate' to cancel immediately.
   */
  cancel(body: PayCancelParams, options?: RequestOptions): APIPromise<PayCancelResponse> {
    return this._client.post('/v1/pay/cancel', { body, ...options });
  }

  /**
   * Verifies if a customer has access to a specific feature. Use this to gate
   * features in your app based on the customer's active subscription and the
   * entitlements attached to their product. Hercules recommends calling this before
   * allowing access to premium features.
   */
  check(body: PayCheckParams, options?: RequestOptions): APIPromise<PayCheckResponse> {
    return this._client.post('/v1/pay/check', { body, ...options });
  }

  /**
   * Creates a checkout session for a customer to subscribe to a product. Returns a
   * URL to redirect the customer to for payment. After successful payment, the
   * customer is subscribed to the product and gains access to its entitlements.
   */
  checkout(body: PayCheckoutParams, options?: RequestOptions): APIPromise<PayCheckoutResponse> {
    return this._client.post('/v1/pay/checkout', { body, ...options });
  }
}

/**
 * Cancel subscription response
 */
export interface PayCancelResponse {
  /**
   * The subscription ID
   */
  id: string;

  /**
   * When the cancellation takes effect
   */
  cancellation_timing: 'immediate' | 'at_billing_period_end';

  /**
   * The subscription status
   */
  status: string;

  /**
   * When the subscription was canceled
   */
  canceled_at?: string | null;
}

/**
 * Check entitlement response
 */
export interface PayCheckResponse {
  /**
   * The entitlement ID that was checked
   */
  entitlement_id: string;

  /**
   * Whether the customer has the entitlement
   */
  has_entitlement: boolean;
}

/**
 * Checkout response. For new customers, returns a checkout URL. For existing
 * subscribers, returns the updated subscription.
 */
export interface PayCheckoutResponse {
  /**
   * The checkout session ID (for checkout action) or subscription ID (for update
   * action)
   */
  id: string;

  /**
   * The action taken: 'checkout' for new subscriptions (redirect to URL), 'update'
   * for subscription changes (already applied)
   */
  action: 'checkout' | 'update';

  /**
   * The checkout mode: subscription for recurring prices, payment for one-time
   * prices. Only present for 'checkout' action.
   */
  mode?: 'subscription' | 'payment' | null;

  /**
   * The updated subscription details. Only present for 'update' action.
   */
  subscription?: PayCheckoutResponse.Subscription | null;

  /**
   * The checkout URL to redirect the customer to. Only present for 'checkout'
   * action.
   */
  url?: string | null;
}

export namespace PayCheckoutResponse {
  /**
   * The updated subscription details. Only present for 'update' action.
   */
  export interface Subscription {
    /**
     * The subscription ID
     */
    id: string;

    /**
     * The product ID
     */
    product_id: string;

    /**
     * The subscription status
     */
    status: string;

    /**
     * The variant ID if applicable
     */
    variant_id?: string | null;
  }
}

export interface PayCancelParams {
  /**
   * The customer ID
   */
  customer_id: string;

  /**
   * The subscription ID to cancel
   */
  subscription_id: string;

  /**
   * When to cancel the subscription. Defaults to 'at_billing_period_end' to allow
   * customers to use remaining time.
   */
  cancellation_timing?: 'immediate' | 'at_billing_period_end';
}

export interface PayCheckParams {
  /**
   * The customer ID
   */
  customer_id: string;

  /**
   * The entitlement ID to check for access
   */
  entitlement_id: string;
}

export interface PayCheckoutParams {
  /**
   * The customer ID
   */
  customer_id: string;

  /**
   * The product ID to purchase
   */
  product_id: string;

  /**
   * Optional custom ID for the subscription or payment. If not provided, one will be
   * generated.
   */
  id?: string;

  /**
   * URL to redirect on cancel
   */
  cancel_url?: string;

  /**
   * Promotion code to apply
   */
  promotion_code?: string;

  /**
   * URL to redirect on success
   */
  success_url?: string;

  /**
   * Optional variant ID to specify a particular pricing tier. If not provided, the
   * product's default price is used.
   */
  variant_id?: string;
}

Pay.Customers = Customers;
Pay.Products = Products;
Pay.Entitlements = Entitlements;
Pay.Coupons = Coupons;

export declare namespace Pay {
  export {
    type PayCancelResponse as PayCancelResponse,
    type PayCheckResponse as PayCheckResponse,
    type PayCheckoutResponse as PayCheckoutResponse,
    type PayCancelParams as PayCancelParams,
    type PayCheckParams as PayCheckParams,
    type PayCheckoutParams as PayCheckoutParams,
  };

  export {
    Customers as Customers,
    type Customer as Customer,
    type CustomerAddress as CustomerAddress,
    type CustomerBillingPortalResponse as CustomerBillingPortalResponse,
    type CustomersCursorIDPage as CustomersCursorIDPage,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerBillingPortalParams as CustomerBillingPortalParams,
  };

  export {
    Products as Products,
    type Product as Product,
    type ProductsCursorIDPage as ProductsCursorIDPage,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };

  export {
    Entitlements as Entitlements,
    type Entitlement as Entitlement,
    type EntitlementsCursorIDPage as EntitlementsCursorIDPage,
    type EntitlementCreateParams as EntitlementCreateParams,
    type EntitlementUpdateParams as EntitlementUpdateParams,
    type EntitlementListParams as EntitlementListParams,
  };

  export {
    Coupons as Coupons,
    type Coupon as Coupon,
    type CouponsCursorIDPage as CouponsCursorIDPage,
    type CouponCreateParams as CouponCreateParams,
    type CouponUpdateParams as CouponUpdateParams,
    type CouponListParams as CouponListParams,
  };
}
