// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import * as TopicsAPI from './topics';
import {
  Topics,
  type TopicSubscribeResponse,
  type TopicUnsubscribeResponse,
  type TopicListResponse,
  type PushNotificationTopicsCursorIDPage,
  type TopicSubscribeParams,
  type TopicUnsubscribeParams,
  type TopicListParams,
} from './topics';

export class PushNotifications extends APIResource {
  topics: TopicsAPI.Topics = new TopicsAPI.Topics(this._client);

  /**
   * Enables push notifications for the app by generating VAPID keys. Idempotent - returns existing keys if already enabled. Hercules recommends calling this during app initialization.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PushNotificationEnableResponse>} The VAPID public key for configuring push subscriptions
   *
   * @example
   * ```ts
   * const pushNotification = await client.pushNotifications.enable();
   * ```
   */
  enable(options?: RequestOptions): APIPromise<PushNotificationEnableResponse> {
    return this._client.post('/v1/push-notifications/enable', options);
  }

  /**
   * Registers a push subscription with the provided visitorId. Use authenticated userId or generate a UUID for anonymous users. Upserts by endpoint to handle re-subscriptions. Returns a secret for subscription ownership.
   *
   * @param {PushNotificationSubscribeParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PushNotificationSubscribeResponse>} The subscription secret for ownership verification
   *
   * @example
   * ```ts
   * const pushNotification = await client.pushNotifications.subscribe({
   *   visitorId: 'x',
   *   subscription: {
   *     endpoint: 'https://example.com',
   *     keys: {
   *       p256dh: 'x',
   *       auth: 'x',
   *     },
   *   },
   * });
   * ```
   */
  subscribe(
    body: PushNotificationSubscribeParams,
    options?: RequestOptions,
  ): APIPromise<PushNotificationSubscribeResponse> {
    return this._client.post('/v1/push-notifications/subscribe', { body, ...options });
  }

  /**
   * Removes a push subscription by secret.
   *
   * @param {PushNotificationUnsubscribeParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PushNotificationUnsubscribeResponse>} Result of the unsubscribe operation
   *
   * @example
   * ```ts
   * const pushNotification = await client.pushNotifications.unsubscribe({
   *   secret: 'x',
   * });
   * ```
   */
  unsubscribe(
    body: PushNotificationUnsubscribeParams,
    options?: RequestOptions,
  ): APIPromise<PushNotificationUnsubscribeResponse> {
    return this._client.post('/v1/push-notifications/unsubscribe', { body, ...options });
  }

  /**
   * Updates a subscription's visitorId to the provided userId. Call after sign-in to link the subscription to the authenticated user's account.
   *
   * @param {PushNotificationIdentifyParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PushNotificationIdentifyResponse>} Result of the identify operation
   *
   * @example
   * ```ts
   * const pushNotification = await client.pushNotifications.identify({
   *   secret: 'x',
   *   userId: 'x',
   * });
   * ```
   */
  identify(
    body: PushNotificationIdentifyParams,
    options?: RequestOptions,
  ): APIPromise<PushNotificationIdentifyResponse> {
    return this._client.post('/v1/push-notifications/identify', { body, ...options });
  }

  /**
   * Sends push notifications to specified visitors and/or topics. Specify visitorIds, topics, or both (combined as union). Omit both to broadcast to all subscribers.
   *
   * @param {PushNotificationSendParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PushNotificationSendResponse>} Result with success and failure counts
   *
   * @example
   * ```ts
   * const pushNotification = await client.pushNotifications.send({
   *   title: 'x',
   * });
   * ```
   */
  send(body: PushNotificationSendParams, options?: RequestOptions): APIPromise<PushNotificationSendResponse> {
    return this._client.post('/v1/push-notifications/send', { body, ...options });
  }
}

export interface PushNotificationEnableResponse {
  /**
   * VAPID public key for push subscription (base64url encoded)
   * @pattern ^[\w-]+$
   */
  vapidPublicKey: string;
}

export interface PushNotificationSubscribeParams {
  /**
   * Visitor identifier. Use authenticated userId or generate a UUID for anonymous users.
   * @minLength 1
   * @maxLength 255
   */
  visitorId: string;
  /**
   * Web Push subscription object from pushManager.subscribe()
   */
  subscription: PushNotificationSubscribeParams.Subscription;
  /**
   * Optional end-user identity snapshot supplied by the app. Hercules stores it only with this app's push subscription.
   */
  subscriber?: PushNotificationSubscribeParams.Subscriber;
}

export namespace PushNotificationSubscribeParams {
  export interface Subscription {
    /**
     * Push service endpoint URL
     * @format uri
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
       * P-256 Diffie-Hellman public key (base64url encoded)
       * @minLength 1
       * @pattern ^[\w-]+$
       */
      p256dh: string;
      /**
       * Authentication secret (base64url encoded)
       * @minLength 1
       * @pattern ^[\w-]+$
       */
      auth: string;
    }
  }

  export interface Subscriber {
    /**
     * @minLength 1
     * @maxLength 255
     */
    displayName?: string;
    /**
     * @format email
     * @maxLength 255
     * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
     */
    email?: string;
  }
}

export interface PushNotificationSubscribeResponse {
  /**
   * Subscription secret for ownership verification. Store securely and use for unsubscribe/identify.
   */
  secret: string;
}

export interface PushNotificationUnsubscribeParams {
  /**
   * Subscription secret to remove
   * @minLength 1
   */
  secret: string;
}

export interface PushNotificationUnsubscribeResponse {
  /**
   * Whether the subscription was removed
   */
  success: boolean;
}

export interface PushNotificationIdentifyParams {
  /**
   * Subscription secret from a previous anonymous subscription
   * @minLength 1
   */
  secret: string;
  /**
   * Authenticated user ID to link the subscription to
   * @minLength 1
   * @maxLength 255
   */
  userId: string;
  /**
   * Optional end-user identity snapshot supplied by the app. Hercules stores it only with this app's push subscription.
   */
  subscriber?: PushNotificationIdentifyParams.Subscriber;
}

export namespace PushNotificationIdentifyParams {
  export interface Subscriber {
    /**
     * @minLength 1
     * @maxLength 255
     */
    displayName?: string;
    /**
     * @format email
     * @maxLength 255
     * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
     */
    email?: string;
  }
}

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

export interface PushNotificationSendParams {
  /**
   * Notification title
   * @minLength 1
   * @maxLength 200
   */
  title: string;
  /**
   * Visitor IDs to send to. Combined with topics as a union.
   */
  visitorIds?: Array<string>;
  /**
   * Topics to send to. All visitors subscribed to any of these topics will receive the notification. Combined with visitorIds as a union.
   */
  topics?: Array<string>;
  /**
   * Notification body text
   * @maxLength 500
   */
  body?: string;
  /**
   * Icon URL (small icon displayed in the notification)
   * @format uri
   */
  icon?: string;
  /**
   * Badge URL for mobile devices
   * @format uri
   */
  badge?: string;
  /**
   * Image URL (larger image displayed in the notification body)
   * @format uri
   */
  image?: string;
  /**
   * Custom data payload to include with the notification
   */
  data?: Record<string, unknown>;
  /**
   * Delivery urgency. Use 'high' for time-sensitive notifications so push services wake dozing devices immediately instead of holding the message until the device next wakes. Defaults to 'normal'.
   */
  urgency?: 'very-low' | 'low' | 'normal' | 'high';
  /**
   * Time to live in seconds. How long the push service retains the notification if the device is offline before discarding it. Defaults to 2419200 (four weeks).
   * @minimum 0
   * @maximum 9007199254740991
   */
  ttl?: number;
}

export interface PushNotificationSendResponse {
  /**
   * Number of notifications successfully sent
   */
  sent: number;
  /**
   * Number of notifications that failed to send
   */
  failed: number;
}
PushNotifications.Topics = Topics;

export declare namespace PushNotifications {
  export {
    type PushNotificationEnableResponse as PushNotificationEnableResponse,
    type PushNotificationSubscribeResponse as PushNotificationSubscribeResponse,
    type PushNotificationUnsubscribeResponse as PushNotificationUnsubscribeResponse,
    type PushNotificationIdentifyResponse as PushNotificationIdentifyResponse,
    type PushNotificationSendResponse as PushNotificationSendResponse,
    type PushNotificationSubscribeParams as PushNotificationSubscribeParams,
    type PushNotificationUnsubscribeParams as PushNotificationUnsubscribeParams,
    type PushNotificationIdentifyParams as PushNotificationIdentifyParams,
    type PushNotificationSendParams as PushNotificationSendParams,
  };

  export {
    Topics as Topics,
    type TopicSubscribeResponse as TopicSubscribeResponse,
    type TopicUnsubscribeResponse as TopicUnsubscribeResponse,
    type TopicListResponse as TopicListResponse,
    type PushNotificationTopicsCursorIDPage as PushNotificationTopicsCursorIDPage,
    type TopicSubscribeParams as TopicSubscribeParams,
    type TopicUnsubscribeParams as TopicUnsubscribeParams,
    type TopicListParams as TopicListParams,
  };
}
