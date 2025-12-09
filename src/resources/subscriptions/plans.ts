// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Plans extends APIResource {
  /**
   * Create Plan
   */
  create(body: PlanCreateParams, options?: RequestOptions): APIPromise<Plan> {
    return this._client.post('/subscriptions/v1/plans', { body, ...options });
  }

  /**
   * Update Plan
   */
  update(
    id: string,
    body: PlanUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Plan> {
    return this._client.patch(path`/subscriptions/v1/plans/${id}`, { body, ...options });
  }

  /**
   * List Plans
   */
  list(
    query: PlanListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PlansCursorIDPage, Plan> {
    return this._client.getAPIList('/subscriptions/v1/plans', CursorIDPage<Plan>, { query, ...options });
  }

  /**
   * Archive Plan
   */
  archive(id: string, options?: RequestOptions): APIPromise<Plan> {
    return this._client.delete(path`/subscriptions/v1/plans/${id}`, options);
  }

  /**
   * Get Plan
   */
  get(id: string, options?: RequestOptions): APIPromise<Plan> {
    return this._client.get(path`/subscriptions/v1/plans/${id}`, options);
  }
}

export type PlansCursorIDPage = CursorIDPage<Plan>;

/**
 * A subscription plan
 */
export interface Plan {
  /**
   * An id for a data item
   */
  id: string;

  active: boolean;

  created: string;

  name: string;

  stripe_product_id: string;

  /**
   * A recurring price for a plan
   */
  default_price?: Plan.DefaultPrice | null;

  description?: string | null;
}

export namespace Plan {
  /**
   * A recurring price for a plan
   */
  export interface DefaultPrice {
    /**
     * An id for a data item
     */
    id: string;

    currency: string;

    interval: 'day' | 'week' | 'month' | 'year';

    interval_count: number;

    unit_amount: number | null;
  }
}

export interface PlanCreateParams {
  name: string;

  /**
   * Amount in cents
   */
  unit_amount: number;

  currency?: string;

  description?: string;

  interval?: 'day' | 'week' | 'month' | 'year';

  interval_count?: number;
}

export interface PlanUpdateParams {
  active?: boolean;

  description?: string;

  name?: string;
}

export interface PlanListParams extends CursorIDPageParams {
  active?: boolean;
}

export declare namespace Plans {
  export {
    type Plan as Plan,
    type PlansCursorIDPage as PlansCursorIDPage,
    type PlanCreateParams as PlanCreateParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanListParams as PlanListParams,
  };
}
