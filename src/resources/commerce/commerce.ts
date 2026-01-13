// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
  CustomerGetResponse,
  CustomerListParams,
  CustomerUpdateParams,
  Customers,
  CustomersCursorIDPage,
} from './customers';
import * as FeaturesAPI from './features';
import {
  Feature,
  FeatureCreateParams,
  FeatureListParams,
  FeatureUpdateParams,
  Features,
  FeaturesCursorIDPage,
} from './features';
import * as ProductsAPI from './products/products';
import {
  Product,
  ProductCreateParams,
  ProductListParams,
  ProductUpdateParams,
  Products,
  ProductsCursorIDPage,
} from './products/products';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Commerce APIs are currently in beta.
 */
export class Commerce extends APIResource {
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
  coupons: CouponsAPI.Coupons = new CouponsAPI.Coupons(this._client);
  features: FeaturesAPI.Features = new FeaturesAPI.Features(this._client);

  /**
   * Cancels a customer's subscription. By default, the subscription remains active
   * until the end of the current billing period. Set cancellation_timing to
   * 'immediate' to cancel immediately.
   *
   * @example
   * ```ts
   * const response = await client.commerce.cancel({
   *   customer_id: 'cus_1234567890',
   *   subscription_id: 'sub_1234567890',
   * });
   * ```
   */
  cancel(body: CommerceCancelParams, options?: RequestOptions): APIPromise<CommerceCancelResponse> {
    return this._client.post('/v1/commerce/cancel', { body, ...options });
  }

  /**
   * Verifies if a customer has access to a specific feature. Use this to gate
   * features in your app based on the customer's active subscription and the
   * entitlements attached to their product. Hercules recommends calling this before
   * allowing access to premium features.
   *
   * @example
   * ```ts
   * const response = await client.commerce.check({
   *   customer_id: 'cus_1234567890',
   *   resource_id: 'feat_1234567890',
   * });
   * ```
   */
  check(body: CommerceCheckParams, options?: RequestOptions): APIPromise<CommerceCheckResponse> {
    return this._client.post('/v1/commerce/check', { body, ...options });
  }

  /**
   * Creates a checkout session for a customer to subscribe to a product. Returns a
   * URL to redirect the customer to for payment. After successful payment, the
   * customer is subscribed to the product and gains access to its entitlements.
   *
   * @example
   * ```ts
   * const response = await client.commerce.checkout({
   *   customer_id: 'cus_1234567890',
   *   line_items: [{ variant_id: 'var_1234567890' }],
   *   success_url: 'https://example.com',
   * });
   * ```
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
 * Check resource access response.
 */
export interface CommerceCheckResponse {
  /**
   * Whether the customer has access to the resource
   */
  has_access: boolean;
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
   * List of items to purchase. Each item specifies a variant and quantity.
   */
  line_items: Array<CommerceCheckoutParams.LineItem>;

  /**
   * URL to redirect on success
   */
  success_url: string;

  /**
   * URL to redirect on cancel
   */
  cancel_url?: string;

  /**
   * Override charge timing for subscription updates. If not provided, uses the
   * subscription group's configured default.
   */
  charge_timing?: 'immediate' | 'end_of_period';

  /**
   * Override interval downgrade behavior for subscription updates. If not provided,
   * uses the subscription group's configured default.
   */
  interval_downgrade_behavior?: 'immediate' | 'end_of_period';

  /**
   * Override plan downgrade behavior for subscription updates. If not provided, uses
   * the subscription group's configured default.
   */
  plan_downgrade_behavior?: 'immediate' | 'end_of_period';

  /**
   * Promotion code to apply
   */
  promotion_code?: string;

  /**
   * Override proration behavior for subscription updates. If not provided, uses the
   * subscription group's configured default.
   */
  proration_behavior?: 'none' | 'prorate' | 'full_difference';
}

export namespace CommerceCheckoutParams {
  /**
   * A line item in the checkout
   */
  export interface LineItem {
    /**
     * The variant ID to purchase. Determines pricing and whether this is a
     * subscription or one-time payment.
     */
    variant_id: string;

    /**
     * Quantity of this item. For subscriptions, this typically represents seat count.
     * Defaults to 1.
     */
    quantity?: number;
  }
}

Commerce.Customers = Customers;
Commerce.Products = Products;
Commerce.Coupons = Coupons;
Commerce.Features = Features;

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
    type Customer as Customer,
    type CustomerAddress as CustomerAddress,
    type CustomerBillingPortalResponse as CustomerBillingPortalResponse,
    type CustomerGetResponse as CustomerGetResponse,
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
    Coupons as Coupons,
    type Coupon as Coupon,
    type CouponsCursorIDPage as CouponsCursorIDPage,
    type CouponCreateParams as CouponCreateParams,
    type CouponUpdateParams as CouponUpdateParams,
    type CouponListParams as CouponListParams,
  };

  export {
    Features as Features,
    type Feature as Feature,
    type FeaturesCursorIDPage as FeaturesCursorIDPage,
    type FeatureCreateParams as FeatureCreateParams,
    type FeatureUpdateParams as FeatureUpdateParams,
    type FeatureListParams as FeatureListParams,
  };
}
