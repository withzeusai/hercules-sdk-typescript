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

export class PushNotifications extends APIResource {
  topics: TopicsAPI.Topics = new TopicsAPI.Topics(this._client);

  /**
   * Enables push notifications for the app by generating VAPID keys. Idempotent -
   * returns existing keys if already enabled. Hercules recommends calling this
   * during app initialization.
   */
  enable(options?: RequestOptions): APIPromise<PushNotificationEnableResponse> {
    return this._client.post('/v1/push-notifications/enable', options);
  }

  /**
   * Links an anonymous subscription to an authenticated user. Call after sign-in to
   * merge the user's anonymous subscription with their account. Hercules recommends
   * calling this immediately after authentication.
   */
  identify(
    body: PushNotificationIdentifyParams,
    options?: RequestOptions,
  ): APIPromise<PushNotificationIdentifyResponse> {
    return this._client.post('/v1/push-notifications/identify', { body, ...options });
  }

  /**
   * Sends push notifications to specified visitors and/or topics. Specify
   * visitorIds, topics, or both (combined as union). Omit both to broadcast to all
   * subscribers.
   */
  send(body: PushNotificationSendParams, options?: RequestOptions): APIPromise<PushNotificationSendResponse> {
    return this._client.post('/v1/push-notifications/send', { body, ...options });
  }

  /**
   * Registers a push subscription. Server generates visitorId (uses userId if
   * provided, else anonymous). Upserts by endpoint to handle re-subscriptions.
   * Returns a secret for subscription ownership.
   */
  subscribe(
    body: PushNotificationSubscribeParams,
    options?: RequestOptions,
  ): APIPromise<PushNotificationSubscribeResponse> {
    return this._client.post('/v1/push-notifications/subscribe', { body, ...options });
  }

  /**
   * Removes a push subscription by secret.
   */
  unsubscribe(
    body: PushNotificationUnsubscribeParams,
    options?: RequestOptions,
  ): APIPromise<PushNotificationUnsubscribeResponse> {
    return this._client.post('/v1/push-notifications/unsubscribe', { body, ...options });
  }
}

/**
 * Response containing the VAPID public key for push subscriptions.
 */
export interface PushNotificationEnableResponse {
  /**
   * VAPID public key for push subscription (base64url encoded)
   */
  vapidPublicKey: string;
}

/**
 * Result of the identify operation.
 */
export interface PushNotificationIdentifyResponse {
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
export interface PushNotificationSendResponse {
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
export interface PushNotificationSubscribeResponse {
  /**
   * Subscription secret for ownership verification. Store securely and use for
   * unsubscribe/identify.
   */
  secret: string;
}

/**
 * Result of the unsubscribe operation.
 */
export interface PushNotificationUnsubscribeResponse {
  /**
   * Whether the subscription was removed
   */
  success: boolean;
}

export interface PushNotificationIdentifyParams {
  /**
   * Subscription secret from a previous anonymous subscription
   */
  secret: string;

  /**
   * Authenticated user ID to link the subscription to
   */
  userId: string;
}

export interface PushNotificationSendParams {
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

export interface PushNotificationSubscribeParams {
  /**
   * Web Push subscription object from pushManager.subscribe()
   */
  subscription: PushNotificationSubscribeParams.Subscription;

  /**
   * Authenticated user ID. Omit for anonymous subscriptions (server generates a
   * visitor ID).
   */
  userId?: string;
}

export namespace PushNotificationSubscribeParams {
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

export interface PushNotificationUnsubscribeParams {
  /**
   * Subscription secret to remove
   */
  secret: string;
}

PushNotifications.Topics = Topics;

export declare namespace PushNotifications {
  export {
    type PushNotificationEnableResponse as PushNotificationEnableResponse,
    type PushNotificationIdentifyResponse as PushNotificationIdentifyResponse,
    type PushNotificationSendResponse as PushNotificationSendResponse,
    type PushNotificationSubscribeResponse as PushNotificationSubscribeResponse,
    type PushNotificationUnsubscribeResponse as PushNotificationUnsubscribeResponse,
    type PushNotificationIdentifyParams as PushNotificationIdentifyParams,
    type PushNotificationSendParams as PushNotificationSendParams,
    type PushNotificationSubscribeParams as PushNotificationSubscribeParams,
    type PushNotificationUnsubscribeParams as PushNotificationUnsubscribeParams,
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
