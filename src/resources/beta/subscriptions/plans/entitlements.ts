// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as EntitlementsAPI from '../entitlements';
import { APIPromise } from '../../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Entitlements extends APIResource {
  /**
   * Retrieve all entitlements attached to a plan. Customers subscribed to this plan
   * can access these features.
   */
  list(
    planID: string,
    query: EntitlementListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PlanEntitlementsCursorIDPage, PlanEntitlement> {
    return this._client.getAPIList(
      path`/v1/subscriptions/plans/${planID}/entitlements`,
      CursorIDPage<PlanEntitlement>,
      { query, ...options },
    );
  }

  /**
   * Grant a feature entitlement to all customers subscribed to this plan.
   */
  attach(
    planID: string,
    body: EntitlementAttachParams,
    options?: RequestOptions,
  ): APIPromise<PlanEntitlement> {
    return this._client.post(path`/v1/subscriptions/plans/${planID}/entitlements`, { body, ...options });
  }

  /**
   * Remove a feature entitlement from a plan. Customers subscribed to this plan will
   * lose access to the feature.
   */
  remove(featureID: string, params: EntitlementRemoveParams, options?: RequestOptions): APIPromise<void> {
    const { plan_id } = params;
    return this._client.delete(path`/v1/subscriptions/plans/${plan_id}/entitlements/${featureID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type PlanEntitlementsCursorIDPage = CursorIDPage<PlanEntitlement>;

/**
 * Feature entitlement attached to a plan, granting access to all customers
 * subscribed to the plan
 */
export interface PlanEntitlement {
  /**
   * An id for a data item
   */
  id: string;

  /**
   * The feature entitlement granted to plan subscribers
   */
  entitlement: EntitlementsAPI.Entitlement;
}

export interface EntitlementListParams extends CursorIDPageParams {}

export interface EntitlementAttachParams {
  /**
   * Entitlement ID to grant to plan subscribers
   */
  entitlement: string;
}

export interface EntitlementRemoveParams {
  plan_id: string;
}

export declare namespace Entitlements {
  export {
    type PlanEntitlement as PlanEntitlement,
    type PlanEntitlementsCursorIDPage as PlanEntitlementsCursorIDPage,
    type EntitlementListParams as EntitlementListParams,
    type EntitlementAttachParams as EntitlementAttachParams,
    type EntitlementRemoveParams as EntitlementRemoveParams,
  };
}
