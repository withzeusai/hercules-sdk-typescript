// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Subscriptions extends APIResource {
  retrieveCustomer(id: string, options?: RequestOptions): APIPromise<SubscriptionRetrieveCustomerResponse> {
    return this._client.get(path`/subscriptions/customers/${id}`, options);
  }
}

/**
 * Customer
 */
export interface SubscriptionRetrieveCustomerResponse {
  id: string;
}

export declare namespace Subscriptions {
  export { type SubscriptionRetrieveCustomerResponse as SubscriptionRetrieveCustomerResponse };
}
