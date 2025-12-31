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
   * Retrieves all entitlements attached to a product. These entitlements define the
   * features that customers subscribed to this product can access.
   */
  list(
    productID: string,
    query: EntitlementListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProductEntitlementsCursorIDPage, ProductEntitlement> {
    return this._client.getAPIList(
      path`/v1/pay/products/${productID}/entitlements`,
      CursorIDPage<ProductEntitlement>,
      { query, ...options },
    );
  }

  /**
   * Attaches an entitlement to a product. All customers subscribed to this product
   * will gain access to the attached feature. Hercules recommends attaching
   * entitlements when creating or updating products to keep feature access in sync.
   */
  attach(
    productID: string,
    body: EntitlementAttachParams,
    options?: RequestOptions,
  ): APIPromise<ProductEntitlement> {
    return this._client.post(path`/v1/pay/products/${productID}/entitlements`, { body, ...options });
  }

  /**
   * Removes an entitlement from a product. Customers subscribed to this product will
   * lose access to the feature. Existing subscriptions are affected immediately.
   */
  remove(featureID: string, params: EntitlementRemoveParams, options?: RequestOptions): APIPromise<void> {
    const { product_id } = params;
    return this._client.delete(path`/v1/pay/products/${product_id}/entitlements/${featureID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ProductEntitlementsCursorIDPage = CursorIDPage<ProductEntitlement>;

/**
 * An entitlement attached to a product. All customers subscribed to the product
 * gain access to this entitlement.
 */
export interface ProductEntitlement {
  /**
   * Unique identifier for the entitlement
   */
  id: string;

  /**
   * The entitlement attached to the product
   */
  entitlement: EntitlementsAPI.Entitlement;
}

export interface EntitlementListParams extends CursorIDPageParams {}

export interface EntitlementAttachParams {
  /**
   * The ID of the entitlement to attach to the product
   */
  entitlement: string;
}

export interface EntitlementRemoveParams {
  product_id: string;
}

export declare namespace Entitlements {
  export {
    type ProductEntitlement as ProductEntitlement,
    type ProductEntitlementsCursorIDPage as ProductEntitlementsCursorIDPage,
    type EntitlementListParams as EntitlementListParams,
    type EntitlementAttachParams as EntitlementAttachParams,
    type EntitlementRemoveParams as EntitlementRemoveParams,
  };
}
