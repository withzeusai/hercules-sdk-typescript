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
   * Creates a new subscription plan with a recurring price. Common examples include
   * Free, Pro, Business, or Teams tiers. After creating a plan, attach entitlements
   * to define which features customers on this plan can access.
   */
  create(body: PlanCreateParams, options?: RequestOptions): APIPromise<Plan> {
    return this._client.post('/v1/subscriptions/plans', { body, ...options });
  }

  /**
   * Updates an existing plan. Use this to modify the plan name, description, or
   * active status. Pricing cannot be changed after creation—create a new plan
   * instead.
   */
  update(
    planID: string,
    body: PlanUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Plan> {
    return this._client.patch(path`/v1/subscriptions/plans/${planID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of subscription plans. Plans define the pricing and
   * billing intervals for subscriptions. Each plan can have entitlements attached
   * that grant features to subscribed customers.
   */
  list(
    query: PlanListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PlansCursorIDPage, Plan> {
    return this._client.getAPIList('/v1/subscriptions/plans', CursorIDPage<Plan>, { query, ...options });
  }

  /**
   * Archives a plan, preventing new subscriptions. Existing subscriptions remain
   * active. Use this instead of deletion to preserve subscription history.
   */
  archive(planID: string, options?: RequestOptions): APIPromise<Plan> {
    return this._client.delete(path`/v1/subscriptions/plans/${planID}`, options);
  }

  /**
   * Retrieves a plan by ID. Returns the plan object including pricing details and
   * status.
   */
  get(planID: string, options?: RequestOptions): APIPromise<Plan> {
    return this._client.get(path`/v1/subscriptions/plans/${planID}`, options);
  }
}

export type PlansCursorIDPage = CursorIDPage<Plan>;

/**
 * A subscription plan that customers can subscribe to. Plans define pricing and
 * billing intervals. Attach entitlements to a plan to grant features to all
 * subscribed customers.
 */
export interface Plan {
  /**
   * Unique identifier for the entitlement
   */
  id: string;

  /**
   * Whether the plan is available for new subscriptions
   */
  active: boolean;

  /**
   * Timestamp when the plan was created
   */
  created: string;

  /**
   * Display name for the plan (e.g., Pro, Business, Teams)
   */
  name: string;

  /**
   * Internal payment provider reference
   */
  stripe_product_id: string;

  /**
   * When to anchor the billing cycle. 'now' resets the billing period to start
   * today, 'unchanged' keeps the existing billing date.
   */
  billing_cycle_anchor?: 'now' | 'unchanged' | null;

  /**
   * The recurring price configuration for a plan
   */
  default_price?: Plan.DefaultPrice | null;

  /**
   * How to handle proration when changing plans. 'create_prorations' adds
   * credit/debit line items, 'none' ignores unused time, 'always_invoice'
   * immediately invoices prorations.
   */
  default_proration_behavior?: 'create_prorations' | 'none' | 'always_invoice' | null;

  /**
   * Detailed description of what the plan includes
   */
  description?: string | null;

  /**
   * When the plan change takes effect. 'immediate' applies changes now,
   * 'at_billing_period_end' schedules the change for the end of the current billing
   * period.
   */
  downgrade_timing?: 'immediate' | 'at_billing_period_end' | null;

  /**
   * When the plan change takes effect. 'immediate' applies changes now,
   * 'at_billing_period_end' schedules the change for the end of the current billing
   * period.
   */
  upgrade_timing?: 'immediate' | 'at_billing_period_end' | null;
}

export namespace Plan {
  /**
   * The recurring price configuration for a plan
   */
  export interface DefaultPrice {
    /**
     * Unique identifier for the entitlement
     */
    id: string;

    /**
     * Three-letter ISO currency code (e.g., usd, eur)
     */
    currency: string;

    /**
     * Billing frequency: day, week, month, or year
     */
    interval: 'day' | 'week' | 'month' | 'year';

    /**
     * Number of intervals between billings (e.g., 2 for biweekly)
     */
    interval_count: number;

    /**
     * Price amount in the smallest currency unit (e.g., cents)
     */
    unit_amount: number | null;
  }
}

export interface PlanCreateParams {
  /**
   * Display name for the plan (e.g., Pro, Business, Teams)
   */
  name: string;

  /**
   * Price amount in the smallest currency unit (e.g., cents). Use 0 for free plans.
   */
  unit_amount: number;

  /**
   * How billing cycle is handled when switching to this plan. Defaults to 'now' for
   * upgrades.
   */
  billing_cycle_anchor?: 'now' | 'unchanged';

  /**
   * Three-letter ISO currency code
   */
  currency?: string;

  /**
   * Default proration behavior when customers switch to this plan. Defaults to
   * 'create_prorations'.
   */
  default_proration_behavior?: 'create_prorations' | 'none' | 'always_invoice';

  /**
   * Detailed description of what the plan includes
   */
  description?: string;

  /**
   * When downgrades to this plan take effect. Defaults to 'at_billing_period_end'.
   */
  downgrade_timing?: 'immediate' | 'at_billing_period_end';

  /**
   * Billing frequency: day, week, month, or year
   */
  interval?: 'day' | 'week' | 'month' | 'year';

  /**
   * Number of intervals between billings
   */
  interval_count?: number;

  /**
   * When upgrades to this plan take effect. Defaults to 'immediate'.
   */
  upgrade_timing?: 'immediate' | 'at_billing_period_end';
}

export interface PlanUpdateParams {
  /**
   * Whether the plan is available for new subscriptions
   */
  active?: boolean;

  /**
   * How billing cycle is handled when switching to this plan
   */
  billing_cycle_anchor?: 'now' | 'unchanged';

  /**
   * Default proration behavior when customers switch to this plan
   */
  default_proration_behavior?: 'create_prorations' | 'none' | 'always_invoice';

  /**
   * Detailed description of what the plan includes
   */
  description?: string;

  /**
   * When downgrades to this plan take effect
   */
  downgrade_timing?: 'immediate' | 'at_billing_period_end';

  /**
   * Display name for the plan
   */
  name?: string;

  /**
   * When upgrades to this plan take effect
   */
  upgrade_timing?: 'immediate' | 'at_billing_period_end';
}

export interface PlanListParams extends CursorIDPageParams {
  /**
   * Filter by active status
   */
  active?: 'true' | 'false';
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
