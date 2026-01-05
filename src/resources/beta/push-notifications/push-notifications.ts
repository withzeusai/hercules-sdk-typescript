// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import {
  SubscriptionCreateParams,
  SubscriptionCreateResponse,
  SubscriptionDeleteResponse,
  Subscriptions,
} from './subscriptions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class PushNotifications extends APIResource {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);

  /**
   * Enables push notifications for the app by generating VAPID keys. Idempotent -
   * returns existing keys if already enabled. Hercules recommends calling this
   * during app initialization.
   */
  enable(options?: RequestOptions): APIPromise<PushNotificationEnableResponse> {
    return this._client.post('/v1/push-notifications/enable', options);
  }

  /**
   * Sends push notifications to specified visitors. Omit visitorIds to broadcast to
   * all subscribers. Returns the count of successful and failed deliveries.
   */
  send(body: PushNotificationSendParams, options?: RequestOptions): APIPromise<PushNotificationSendResponse> {
    return this._client.post('/v1/push-notifications/send', { body, ...options });
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
   * Icon URL
   */
  icon?: string;

  /**
   * URL to open when notification is clicked
   */
  url?: string;

  /**
   * Visitor IDs to send to. Omit to broadcast to all subscribers.
   */
  visitorIds?: Array<string>;
}

PushNotifications.Subscriptions = Subscriptions;

export declare namespace PushNotifications {
  export {
    type PushNotificationEnableResponse as PushNotificationEnableResponse,
    type PushNotificationSendResponse as PushNotificationSendResponse,
    type PushNotificationSendParams as PushNotificationSendParams,
  };

  export {
    Subscriptions as Subscriptions,
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
  };
}
