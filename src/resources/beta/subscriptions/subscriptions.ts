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
import * as PlansAPI from './plans/plans';
import {
  Plan,
  PlanCreateParams,
  PlanListParams,
  PlanUpdateParams,
  Plans,
  PlansCursorIDPage,
} from './plans/plans';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Subscriptions extends APIResource {
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  plans: PlansAPI.Plans = new PlansAPI.Plans(this._client);
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);
  coupons: CouponsAPI.Coupons = new CouponsAPI.Coupons(this._client);

  /**
   * Cancel a customer's subscription. By default, cancellation occurs at the end of
   * the billing period. Set cancel_at_period_end to false for immediate
   * cancellation.
   */
  cancel(body: SubscriptionCancelParams, options?: RequestOptions): APIPromise<SubscriptionCancelResponse> {
    return this._client.post('/v1/subscriptions/cancel', { body, ...options });
  }

  /**
   * Verify if a customer has access to a specific feature based on their
   * subscription plan. Use this to control feature access in your app.
   */
  check(body: SubscriptionCheckParams, options?: RequestOptions): APIPromise<SubscriptionCheckResponse> {
    return this._client.post('/v1/subscriptions/check', { body, ...options });
  }

  /**
   * Create a Stripe checkout session for a customer to subscribe to a plan. Returns
   * a URL to redirect the customer to complete payment.
   */
  checkout(
    body: SubscriptionCheckoutParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionCheckoutResponse> {
    return this._client.post('/v1/subscriptions/checkout', { body, ...options });
  }
}

/**
 * Response containing subscription cancellation details and timing
 */
export interface SubscriptionCancelResponse {
  /**
   * Subscription ID
   */
  id: string;

  /**
   * If true, subscription remains active until period end. If false, canceled
   * immediately
   */
  cancel_at_period_end: boolean;

  /**
   * Current subscription status (e.g., active, canceled, past_due)
   */
  status: string;

  /**
   * Timestamp when subscription was canceled
   */
  canceled_at?: string | null;
}

/**
 * Response indicating whether customer has access to the requested feature
 */
export interface SubscriptionCheckResponse {
  /**
   * Whether the customer has access to the feature through their subscription
   */
  has_entitlement: boolean;

  /**
   * Entitlement lookup key that was checked
   */
  lookup_key: string;

  /**
   * Entitlement ID if customer has access, null otherwise
   */
  entitlement_id?: string | null;
}

/**
 * Response containing checkout session details and redirect URL
 */
export interface SubscriptionCheckoutResponse {
  /**
   * Stripe checkout session ID
   */
  id: string;

  /**
   * Checkout URL to redirect the customer to complete payment on Stripe
   */
  url: string;
}

export interface SubscriptionCancelParams {
  /**
   * Customer ID owning the subscription
   */
  customer_id: string;

  /**
   * Subscription ID to cancel
   */
  subscription_id: string;

  /**
   * If true, cancel at end of billing period. If false, cancel immediately
   */
  cancel_at_period_end?: boolean;
}

export interface SubscriptionCheckParams {
  /**
   * Customer ID to check access for
   */
  customer_id: string;

  /**
   * Entitlement lookup key to verify (e.g., advanced_analytics, custom_branding)
   */
  entitlement_lookup_key: string;
}

export interface SubscriptionCheckoutParams {
  /**
   * Customer ID to create subscription for
   */
  customer_id: string;

  /**
   * Plan ID to subscribe the customer to
   */
  plan_id: string;

  /**
   * URL to redirect customer if they cancel checkout
   */
  cancel_url?: string;

  /**
   * URL to redirect customer after successful payment
   */
  success_url?: string;
}

Subscriptions.Customers = Customers;
Subscriptions.Plans = Plans;
Subscriptions.Entitlements = Entitlements;
Subscriptions.Coupons = Coupons;

export declare namespace Subscriptions {
  export {
    type SubscriptionCancelResponse as SubscriptionCancelResponse,
    type SubscriptionCheckResponse as SubscriptionCheckResponse,
    type SubscriptionCheckoutResponse as SubscriptionCheckoutResponse,
    type SubscriptionCancelParams as SubscriptionCancelParams,
    type SubscriptionCheckParams as SubscriptionCheckParams,
    type SubscriptionCheckoutParams as SubscriptionCheckoutParams,
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
    Plans as Plans,
    type Plan as Plan,
    type PlansCursorIDPage as PlansCursorIDPage,
    type PlanCreateParams as PlanCreateParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanListParams as PlanListParams,
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
