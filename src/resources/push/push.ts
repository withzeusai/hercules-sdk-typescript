// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TopicsAPI from './topics';
import {
  TopicListParams,
  TopicListResponse,
  TopicListResponsesCursorIDPage,
  TopicSubscribeParams,
  TopicSubscribeResponse,
  TopicUnsubscribeParams,
  TopicUnsubscribeResponse,
  Topics,
} from './topics';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Push extends APIResource {
  topics: TopicsAPI.Topics = new TopicsAPI.Topics(this._client);

  /**
   * Enables push notifications for the app by generating VAPID keys. Idempotent -
   * returns existing keys if already enabled. Hercules recommends calling this
   * during app initialization.
   */
  enable(options?: RequestOptions): APIPromise<PushEnableResponse> {
    return this._client.post('/v1/push/enable', options);
  }

  /**
   * Updates a subscription's visitorId to the provided userId. Call after sign-in to
   * link the subscription to the authenticated user's account.
   */
  identify(body: PushIdentifyParams, options?: RequestOptions): APIPromise<PushIdentifyResponse> {
    return this._client.post('/v1/push/identify', { body, ...options });
  }

  /**
   * Sends push notifications to specified visitors and/or topics. Specify
   * visitorIds, topics, or both (combined as union). Omit both to broadcast to all
   * subscribers.
   */
  send(body: PushSendParams, options?: RequestOptions): APIPromise<PushSendResponse> {
    return this._client.post('/v1/push/send', { body, ...options });
  }

  /**
   * Registers a push subscription with the provided visitorId. Use authenticated
   * userId or generate a UUID for anonymous users. Upserts by endpoint to handle
   * re-subscriptions. Returns a secret for subscription ownership.
   */
  subscribe(body: PushSubscribeParams, options?: RequestOptions): APIPromise<PushSubscribeResponse> {
    return this._client.post('/v1/push/subscribe', { body, ...options });
  }

  /**
   * Removes a push subscription by secret.
   */
  unsubscribe(body: PushUnsubscribeParams, options?: RequestOptions): APIPromise<PushUnsubscribeResponse> {
    return this._client.post('/v1/push/unsubscribe', { body, ...options });
  }
}

/**
 * Response containing the VAPID public key for push subscriptions.
 */
export interface PushEnableResponse {
  /**
   * VAPID public key for push subscription (base64url encoded)
   */
  vapidPublicKey: string;
}

/**
 * Result of the identify operation.
 */
export interface PushIdentifyResponse {
  /**
   * Whether the subscription was successfully identified
   */
  success: boolean;

  /**
   * True if the subscription was already identified (not anonymous)
   */
  alreadyIdentified?: boolean;
}

/**
 * Result of the send operation with success and failure counts.
 */
export interface PushSendResponse {
  /**
   * Number of notifications that failed to send
   */
  failed: number;

  /**
   * Number of notifications successfully sent
   */
  sent: number;
}

/**
 * The created or updated subscription.
 */
export interface PushSubscribeResponse {
  /**
   * Subscription secret for ownership verification. Store securely and use for
   * unsubscribe/identify.
   */
  secret: string;
}

/**
 * Result of the unsubscribe operation.
 */
export interface PushUnsubscribeResponse {
  /**
   * Whether the subscription was removed
   */
  success: boolean;
}

export interface PushIdentifyParams {
  /**
   * Subscription secret from a previous anonymous subscription
   */
  secret: string;

  /**
   * Authenticated user ID to link the subscription to
   */
  userId: string;
}

export interface PushSendParams {
  /**
   * Notification title
   */
  title: string;

  /**
   * Badge URL for mobile devices
   */
  badge?: string;

  /**
   * Notification body text
   */
  body?: string;

  /**
   * Custom data payload to include with the notification
   */
  data?: { [key: string]: unknown };

  /**
   * Icon URL (small icon displayed in the notification)
   */
  icon?: string;

  /**
   * Image URL (larger image displayed in the notification body)
   */
  image?: string;

  /**
   * Topics to send to. All visitors subscribed to any of these topics will receive
   * the notification. Combined with visitorIds as a union.
   */
  topics?: Array<string>;

  /**
   * Visitor IDs to send to. Combined with topics as a union.
   */
  visitorIds?: Array<string>;
}

export interface PushSubscribeParams {
  /**
   * Web Push subscription object from pushManager.subscribe()
   */
  subscription: PushSubscribeParams.Subscription;

  /**
   * Visitor identifier. Use authenticated userId or generate a UUID for anonymous
   * users.
   */
  visitorId: string;
}

export namespace PushSubscribeParams {
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

export interface PushUnsubscribeParams {
  /**
   * Subscription secret to remove
   */
  secret: string;
}

Push.Topics = Topics;

export declare namespace Push {
  export {
    type PushEnableResponse as PushEnableResponse,
    type PushIdentifyResponse as PushIdentifyResponse,
    type PushSendResponse as PushSendResponse,
    type PushSubscribeResponse as PushSubscribeResponse,
    type PushUnsubscribeResponse as PushUnsubscribeResponse,
    type PushIdentifyParams as PushIdentifyParams,
    type PushSendParams as PushSendParams,
    type PushSubscribeParams as PushSubscribeParams,
    type PushUnsubscribeParams as PushUnsubscribeParams,
  };

  export {
    Topics as Topics,
    type TopicListResponse as TopicListResponse,
    type TopicSubscribeResponse as TopicSubscribeResponse,
    type TopicUnsubscribeResponse as TopicUnsubscribeResponse,
    type TopicListResponsesCursorIDPage as TopicListResponsesCursorIDPage,
    type TopicListParams as TopicListParams,
    type TopicSubscribeParams as TopicSubscribeParams,
    type TopicUnsubscribeParams as TopicUnsubscribeParams,
  };
}
