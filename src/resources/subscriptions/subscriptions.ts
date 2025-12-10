// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CouponsAPI from './coupons';
import {
  Coupon,
  CouponCreateParams,
  CouponListParams,
  CouponUpdateParams,
  CouponValidateParams,
  CouponValidateResponse,
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
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Subscriptions extends APIResource {
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  plans: PlansAPI.Plans = new PlansAPI.Plans(this._client);
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);
  coupons: CouponsAPI.Coupons = new CouponsAPI.Coupons(this._client);

  /**
   * Cancel Subscription
   */
  cancel(body: SubscriptionCancelParams, options?: RequestOptions): APIPromise<SubscriptionCancelResponse> {
    return this._client.post('/subscriptions/v1/cancel', { body, ...options });
  }

  /**
   * Check Entitlement
   */
  check(body: SubscriptionCheckParams, options?: RequestOptions): APIPromise<SubscriptionCheckResponse> {
    return this._client.post('/subscriptions/v1/check', { body, ...options });
  }

  /**
   * Create Checkout Session
   */
  checkout(
    body: SubscriptionCheckoutParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionCheckoutResponse> {
    return this._client.post('/subscriptions/v1/checkout', { body, ...options });
  }
}

/**
 * Cancel subscription response
 */
export interface SubscriptionCancelResponse {
  /**
   * The subscription ID
   */
  id: string;

  /**
   * Whether the subscription will cancel at period end
   */
  cancel_at_period_end: boolean;

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
export interface SubscriptionCheckResponse {
  /**
   * Whether the customer has the entitlement
   */
  has_entitlement: boolean;

  /**
   * The entitlement lookup key that was checked
   */
  lookup_key: string;

  /**
   * The active entitlement ID if present
   */
  entitlement_id?: string | null;
}

/**
 * Checkout session response
 */
export interface SubscriptionCheckoutResponse {
  /**
   * The checkout session ID
   */
  id: string;

  /**
   * The checkout URL to redirect the customer to
   */
  url: string;
}

export interface SubscriptionCancelParams {
  /**
   * The customer ID
   */
  customer_id: string;

  /**
   * The subscription ID to cancel
   */
  subscription_id: string;

  /**
   * Whether to cancel at period end or immediately
   */
  cancel_at_period_end?: boolean;
}

export interface SubscriptionCheckParams {
  /**
   * The customer ID
   */
  customer_id: string;

  /**
   * The entitlement feature lookup key to check
   */
  entitlement_lookup_key: string;
}

export interface SubscriptionCheckoutParams {
  /**
   * The customer ID
   */
  customer_id: string;

  /**
   * The plan ID to subscribe to
   */
  plan_id: string;

  /**
   * URL to redirect on cancel
   */
  cancel_url?: string;

  /**
   * URL to redirect on success
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
    type CouponValidateResponse as CouponValidateResponse,
    type CouponsCursorIDPage as CouponsCursorIDPage,
    type CouponCreateParams as CouponCreateParams,
    type CouponUpdateParams as CouponUpdateParams,
    type CouponListParams as CouponListParams,
    type CouponValidateParams as CouponValidateParams,
  };
}
