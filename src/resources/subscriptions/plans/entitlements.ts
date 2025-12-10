// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EntitlementsAPI from '../entitlements';
import { APIPromise } from '../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Entitlements extends APIResource {
  /**
   * List Plan Entitlements
   */
  list(
    planID: string,
    query: EntitlementListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PlanEntitlementsCursorIDPage, PlanEntitlement> {
    return this._client.getAPIList(
      path`/subscriptions/v1/plans/${planID}/entitlements`,
      CursorIDPage<PlanEntitlement>,
      { query, ...options },
    );
  }

  /**
   * Attach Entitlement to Plan
   */
  attach(
    planID: string,
    body: EntitlementAttachParams,
    options?: RequestOptions,
  ): APIPromise<PlanEntitlement> {
    return this._client.post(path`/subscriptions/v1/plans/${planID}/entitlements`, { body, ...options });
  }

  /**
   * Remove Entitlement from Plan
   */
  remove(featureID: string, params: EntitlementRemoveParams, options?: RequestOptions): APIPromise<void> {
    const { plan_id } = params;
    return this._client.delete(path`/subscriptions/v1/plans/${plan_id}/entitlements/${featureID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type PlanEntitlementsCursorIDPage = CursorIDPage<PlanEntitlement>;

/**
 * An entitlement attached to a plan
 */
export interface PlanEntitlement {
  /**
   * An id for a data item
   */
  id: string;

  /**
   * An entitlement that can be attached to products
   */
  entitlement: EntitlementsAPI.Entitlement;
}

export interface EntitlementListParams extends CursorIDPageParams {}

export interface EntitlementAttachParams {
  /**
   * The ID of the entitlement to attach
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
