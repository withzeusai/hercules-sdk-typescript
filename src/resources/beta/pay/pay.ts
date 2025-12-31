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
   * Whether the customer has the entitlement
   */
  has_entitlement: boolean;

  /**
   * The entitlement key that was checked
   */
  key: string;

  /**
   * The active entitlement ID if present
   */
  entitlement_id?: string | null;
}

/**
 * Checkout session response
 */
export interface PayCheckoutResponse {
  /**
   * The checkout session ID
   */
  id: string;

  /**
   * The checkout URL to redirect the customer to
   */
  url: string;
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
   * The entitlement key to check for access
   */
  entitlement_key: string;
}

export interface PayCheckoutParams {
  /**
   * The customer ID
   */
  customer_id: string;

  /**
   * The product ID to subscribe to
   */
  product_id: string;

  /**
   * Optional custom ID for the subscription. If not provided, one will be generated.
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
