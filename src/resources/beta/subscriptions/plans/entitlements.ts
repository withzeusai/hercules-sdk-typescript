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
   * Retrieves all entitlements attached to a plan. These entitlements define the
   * features that customers subscribed to this plan can access.
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
   * Attaches an entitlement to a plan. All customers subscribed to this plan will
   * gain access to the attached feature. Hercules recommends attaching entitlements
   * when creating or updating plans to keep feature access in sync.
   */
  attach(
    planID: string,
    body: EntitlementAttachParams,
    options?: RequestOptions,
  ): APIPromise<PlanEntitlement> {
    return this._client.post(path`/v1/subscriptions/plans/${planID}/entitlements`, { body, ...options });
  }

  /**
   * Removes an entitlement from a plan. Customers subscribed to this plan will lose
   * access to the feature. Existing subscriptions are affected immediately.
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
 * An entitlement attached to a plan. All customers subscribed to the plan gain
 * access to this entitlement.
 */
export interface PlanEntitlement {
  /**
   * Unique identifier for the entitlement
   */
  id: string;

  /**
   * The entitlement attached to the plan
   */
  entitlement: EntitlementsAPI.Entitlement;
}

export interface EntitlementListParams extends CursorIDPageParams {}

export interface EntitlementAttachParams {
  /**
   * The ID of the entitlement to attach to the plan
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
