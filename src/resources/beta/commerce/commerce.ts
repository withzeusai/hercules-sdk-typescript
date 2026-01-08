// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CouponsAPI from './coupons';
import {
  CouponCreateParams,
  CouponCreateResponse,
  CouponGetResponse,
  CouponListParams,
  CouponListResponse,
  CouponListResponsesCursorIDPage,
  CouponUpdateParams,
  CouponUpdateResponse,
  Coupons,
} from './coupons';
import * as CustomersAPI from './customers';
import {
  CustomerBillingPortalParams,
  CustomerBillingPortalResponse,
  CustomerCreateParams,
  CustomerCreateResponse,
  CustomerGetResponse,
  CustomerListParams,
  CustomerListResponse,
  CustomerListResponsesCursorIDPage,
  CustomerUpdateParams,
  CustomerUpdateResponse,
  Customers,
} from './customers';
import * as ProductsAPI from './products/products';
import {
  ProductArchiveResponse,
  ProductCreateParams,
  ProductCreateResponse,
  ProductGetResponse,
  ProductListParams,
  ProductListResponse,
  ProductListResponsesCursorIDPage,
  ProductUpdateParams,
  ProductUpdateResponse,
  Products,
} from './products/products';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Commerce extends APIResource {
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
  coupons: CouponsAPI.Coupons = new CouponsAPI.Coupons(this._client);

  /**
   * Cancels a customer's subscription. By default, the subscription remains active
   * until the end of the current billing period. Set cancellation_timing to
   * 'immediate' to cancel immediately.
   */
  cancel(body: CommerceCancelParams, options?: RequestOptions): APIPromise<CommerceCancelResponse> {
    return this._client.post('/v1/commerce/cancel', { body, ...options });
  }

  /**
   * Verifies if a customer has access to a specific feature. Use this to gate
   * features in your app based on the customer's active subscription and the
   * entitlements attached to their product. Hercules recommends calling this before
   * allowing access to premium features.
   */
  check(body: CommerceCheckParams, options?: RequestOptions): APIPromise<CommerceCheckResponse> {
    return this._client.post('/v1/commerce/check', { body, ...options });
  }

  /**
   * Creates a checkout session for a customer to subscribe to a product. Returns a
   * URL to redirect the customer to for payment. After successful payment, the
   * customer is subscribed to the product and gains access to its entitlements.
   */
  checkout(body: CommerceCheckoutParams, options?: RequestOptions): APIPromise<CommerceCheckoutResponse> {
    return this._client.post('/v1/commerce/checkout', { body, ...options });
  }
}

/**
 * Cancel subscription response
 */
export interface CommerceCancelResponse {
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
 * Check resource access response. Indicates whether access is granted and through
 * what means.
 */
export interface CommerceCheckResponse {
  /**
   * How the customer has access: through a subscription, one-time purchase, manual
   * grant, or no access
   */
  access_type: 'subscription' | 'one_time_purchase' | 'manual_grant' | 'none';

  /**
   * Whether the customer has access to the resource
   */
  has_access: boolean;

  /**
   * The resource ID that was checked
   */
  resource_id: string;
}

/**
 * Checkout response. For new customers, returns a checkout URL. For existing
 * subscribers, returns the updated subscription.
 */
export interface CommerceCheckoutResponse {
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
  subscription?: CommerceCheckoutResponse.Subscription | null;

  /**
   * The checkout URL to redirect the customer to. Only present for 'checkout'
   * action.
   */
  url?: string | null;
}

export namespace CommerceCheckoutResponse {
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

export interface CommerceCancelParams {
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

export interface CommerceCheckParams {
  /**
   * The customer ID
   */
  customer_id: string;

  /**
   * The resource ID to check for access
   */
  resource_id: string;
}

export interface CommerceCheckoutParams {
  /**
   * The customer ID
   */
  customer_id: string;

  /**
   * The variant ID to purchase. Determines pricing and whether this is a
   * subscription or one-time payment.
   */
  variant_id: string;

  /**
   * Optional custom ID for the subscription or payment. If not provided, one will be
   * generated.
   */
  id?: string;

  /**
   * Override billing cycle anchor behavior for subscription updates. If not
   * provided, uses the product group's configured default.
   */
  billing_cycle_anchor?: 'now' | 'unchanged' | 'reset';

  /**
   * URL to redirect on cancel
   */
  cancel_url?: string;

  /**
   * Promotion code to apply
   */
  promotion_code?: string;

  /**
   * Override proration behavior for subscription updates. If not provided, uses the
   * product group's configured default.
   */
  proration_behavior?: 'create_prorations' | 'none' | 'always_invoice';

  /**
   * Override proration date calculation for subscription updates. If not provided,
   * uses the product group's configured default.
   */
  proration_date?: 'now' | 'start_of_period';

  /**
   * URL to redirect on success
   */
  success_url?: string;
}

Commerce.Customers = Customers;
Commerce.Products = Products;
Commerce.Coupons = Coupons;

export declare namespace Commerce {
  export {
    type CommerceCancelResponse as CommerceCancelResponse,
    type CommerceCheckResponse as CommerceCheckResponse,
    type CommerceCheckoutResponse as CommerceCheckoutResponse,
    type CommerceCancelParams as CommerceCancelParams,
    type CommerceCheckParams as CommerceCheckParams,
    type CommerceCheckoutParams as CommerceCheckoutParams,
  };

  export {
    Customers as Customers,
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerUpdateResponse as CustomerUpdateResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerBillingPortalResponse as CustomerBillingPortalResponse,
    type CustomerGetResponse as CustomerGetResponse,
    type CustomerListResponsesCursorIDPage as CustomerListResponsesCursorIDPage,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerBillingPortalParams as CustomerBillingPortalParams,
  };

  export {
    Products as Products,
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
    Coupons as Coupons,
    type CouponCreateResponse as CouponCreateResponse,
    type CouponUpdateResponse as CouponUpdateResponse,
    type CouponListResponse as CouponListResponse,
    type CouponGetResponse as CouponGetResponse,
    type CouponListResponsesCursorIDPage as CouponListResponsesCursorIDPage,
    type CouponCreateParams as CouponCreateParams,
    type CouponUpdateParams as CouponUpdateParams,
    type CouponListParams as CouponListParams,
  };
}
