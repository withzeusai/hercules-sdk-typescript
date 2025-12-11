// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as EntitlementsAPI from './entitlements';
import {
  EntitlementAttachParams,
  EntitlementListParams,
  EntitlementRemoveParams,
  Entitlements,
  PlanEntitlement,
  PlanEntitlementsCursorIDPage,
} from './entitlements';
import { APIPromise } from '../../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Plans extends APIResource {
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);

  /**
   * Create a new subscription plan with recurring pricing. Plans can have
   * entitlements attached to control which features customers can access.
   */
  create(body: PlanCreateParams, options?: RequestOptions): APIPromise<Plan> {
    return this._client.post('/v1/subscriptions/plans', { body, ...options });
  }

  /**
   * Update plan details such as name, description, or active status. Pricing cannot
   * be changed after creation.
   */
  update(
    planID: string,
    body: PlanUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Plan> {
    return this._client.patch(path`/v1/subscriptions/plans/${planID}`, { body, ...options });
  }

  /**
   * Retrieve all subscription plans. Plans define recurring payment tiers (e.g.,
   * Free, Pro, Business) and their associated entitlements.
   */
  list(
    query: PlanListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PlansCursorIDPage, Plan> {
    return this._client.getAPIList('/v1/subscriptions/plans', CursorIDPage<Plan>, { query, ...options });
  }

  /**
   * Archive a plan to prevent new subscriptions. Existing subscriptions remain
   * active.
   */
  archive(planID: string, options?: RequestOptions): APIPromise<Plan> {
    return this._client.delete(path`/v1/subscriptions/plans/${planID}`, options);
  }

  /**
   * Retrieve a specific subscription plan by ID, including pricing details and
   * status.
   */
  get(planID: string, options?: RequestOptions): APIPromise<Plan> {
    return this._client.get(path`/v1/subscriptions/plans/${planID}`, options);
  }
}

export type PlansCursorIDPage = CursorIDPage<Plan>;

/**
 * Subscription plan defining recurring payment tiers and associated entitlements
 */
export interface Plan {
  /**
   * An id for a data item
   */
  id: string;

  /**
   * Whether the plan accepts new subscriptions
   */
  active: boolean;

  /**
   * Plan creation timestamp
   */
  created: string;

  /**
   * Plan display name (e.g., Free, Pro, Business)
   */
  name: string;

  /**
   * Associated Stripe product ID
   */
  stripe_product_id: string;

  /**
   * Recurring price configuration for a subscription plan
   */
  default_price?: Plan.DefaultPrice | null;

  /**
   * Plan description
   */
  description?: string | null;
}

export namespace Plan {
  /**
   * Recurring price configuration for a subscription plan
   */
  export interface DefaultPrice {
    /**
     * An id for a data item
     */
    id: string;

    /**
     * Three-letter ISO currency code (e.g., usd)
     */
    currency: string;

    /**
     * Billing frequency
     */
    interval: 'day' | 'week' | 'month' | 'year';

    /**
     * Number of intervals between billings (e.g., 3 for quarterly)
     */
    interval_count: number;

    /**
     * Price amount in cents (e.g., 1000 = $10.00)
     */
    unit_amount: number | null;
  }
}

export interface PlanCreateParams {
  /**
   * Plan display name (e.g., Free, Pro, Business)
   */
  name: string;

  /**
   * Price amount in cents (e.g., 1000 = $10.00)
   */
  unit_amount: number;

  /**
   * Three-letter ISO currency code
   */
  currency?: string;

  /**
   * Plan description
   */
  description?: string;

  /**
   * Billing frequency (day, week, month, or year)
   */
  interval?: 'day' | 'week' | 'month' | 'year';

  /**
   * Number of intervals between billings
   */
  interval_count?: number;
}

export interface PlanUpdateParams {
  /**
   * Whether the plan accepts new subscriptions
   */
  active?: boolean;

  /**
   * Plan description
   */
  description?: string;

  /**
   * Plan display name
   */
  name?: string;
}

export interface PlanListParams extends CursorIDPageParams {
  /**
   * Filter by active status
   */
  active?: boolean;
}

Plans.Entitlements = Entitlements;

export declare namespace Plans {
  export {
    type Plan as Plan,
    type PlansCursorIDPage as PlansCursorIDPage,
    type PlanCreateParams as PlanCreateParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanListParams as PlanListParams,
  };

  export {
    Entitlements as Entitlements,
    type PlanEntitlement as PlanEntitlement,
    type PlanEntitlementsCursorIDPage as PlanEntitlementsCursorIDPage,
    type EntitlementListParams as EntitlementListParams,
    type EntitlementAttachParams as EntitlementAttachParams,
    type EntitlementRemoveParams as EntitlementRemoveParams,
  };
}
