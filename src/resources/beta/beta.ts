// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import {
  SubscriptionCancelParams,
  SubscriptionCancelResponse,
  SubscriptionCheckParams,
  SubscriptionCheckResponse,
  SubscriptionCheckoutParams,
  SubscriptionCheckoutResponse,
  Subscriptions,
} from './subscriptions/subscriptions';

export class Beta extends APIResource {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Beta.Subscriptions = Subscriptions;

export declare namespace Beta {
  export {
    Subscriptions as Subscriptions,
    type SubscriptionCancelResponse as SubscriptionCancelResponse,
    type SubscriptionCheckResponse as SubscriptionCheckResponse,
    type SubscriptionCheckoutResponse as SubscriptionCheckoutResponse,
    type SubscriptionCancelParams as SubscriptionCancelParams,
    type SubscriptionCheckParams as SubscriptionCheckParams,
    type SubscriptionCheckoutParams as SubscriptionCheckoutParams,
  };
}
