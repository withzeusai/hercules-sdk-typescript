// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Registers a push subscription for a visitor. Upserts by endpoint to handle
   * re-subscriptions gracefully.
   */
  create(body: SubscriptionCreateParams, options?: RequestOptions): APIPromise<SubscriptionCreateResponse> {
    return this._client.post('/v1/push-notifications/subscriptions', { body, ...options });
  }

  /**
   * Removes a push subscription by ID.
   */
  delete(id: string, options?: RequestOptions): APIPromise<SubscriptionDeleteResponse> {
    return this._client.delete(path`/v1/push-notifications/subscriptions/${id}`, options);
  }
}

/**
 * The created or updated subscription.
 */
export interface SubscriptionCreateResponse {
  /**
   * Subscription ID
   */
  id: string;
}

/**
 * Result of the unsubscribe operation.
 */
export interface SubscriptionDeleteResponse {
  /**
   * Whether the subscription was removed
   */
  success: boolean;
}

export interface SubscriptionCreateParams {
  /**
   * Web Push subscription object from pushManager.subscribe()
   */
  subscription: SubscriptionCreateParams.Subscription;

  /**
   * Unique identifier for the subscriber (e.g., userId)
   */
  visitorId: string;
}

export namespace SubscriptionCreateParams {
  /**
   * Web Push subscription object from pushManager.subscribe()
   */
  export interface Subscription {
    /**
     * Push service endpoint URL
     */
    endpoint: string;

    keys: Subscription.Keys;

    /**
     * Subscription expiration timestamp
     */
    expirationTime?: number | null;
  }

  export namespace Subscription {
    export interface Keys {
      /**
       * Authentication secret (base64url encoded)
       */
      auth: string;

      /**
       * P-256 Diffie-Hellman public key (base64url encoded)
       */
      p256dh: string;
    }
  }
}

export declare namespace Subscriptions {
  export {
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
  };
}
