// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../core/pagination';
import type { RequestOptions } from '../../internal/request-options';

export class Topics extends APIResource {
  /**
   * Subscribes a visitor to topics. Topics are per-visitor, so all devices for this visitor will receive notifications sent to these topics.
   *
   * @param {TopicSubscribeParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TopicSubscribeResponse>} The visitor's updated topic subscriptions
   *
   * @example
   * ```ts
   * const topic = await client.pushNotifications.topics.subscribe({
   *   visitorId: 'x',
   *   topics: [],
   * });
   * ```
   */
  subscribe(body: TopicSubscribeParams, options?: RequestOptions): APIPromise<TopicSubscribeResponse> {
    return this._client.post('/v1/push-notifications/topics/subscribe', { body, ...options });
  }

  /**
   * Unsubscribes a visitor from specified topics.
   *
   * @param {TopicUnsubscribeParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TopicUnsubscribeResponse>} The visitor's remaining topic subscriptions
   *
   * @example
   * ```ts
   * const topic = await client.pushNotifications.topics.unsubscribe({
   *   visitorId: 'x',
   *   topics: [],
   * });
   * ```
   */
  unsubscribe(body: TopicUnsubscribeParams, options?: RequestOptions): APIPromise<TopicUnsubscribeResponse> {
    return this._client.post('/v1/push-notifications/topics/unsubscribe', { body, ...options });
  }

  /**
   * Lists topics a visitor is subscribed to.
   *
   * @param {TopicListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<PushNotificationTopicsCursorIDPage, TopicListResponse>} Paginated list of topics the visitor is subscribed to
   *
   * @example
   * ```ts
   * const page = await client.pushNotifications.topics.list({
   *   visitorId: 'visitorId',
   * });
   * ```
   */
  list(
    query: TopicListParams,
    options?: RequestOptions,
  ): PagePromise<PushNotificationTopicsCursorIDPage, TopicListResponse> {
    return this._client.getAPIList('/v1/push-notifications/topics', CursorIDPage<TopicListResponse>, {
      query,
      ...options,
    });
  }
}

export interface TopicSubscribeParams {
  /**
   * Visitor ID to subscribe to topics
   * @minLength 1
   * @maxLength 255
   */
  visitorId: string;
  /**
   * Topic names to subscribe to (e.g., 'announcements', 'channel:general')
   * @minItems 1
   * @maxItems 50
   */
  topics: Array<string>;
}

export interface TopicSubscribeResponse {
  /**
   * Topics the visitor is now subscribed to
   */
  topics: Array<string>;
}

export interface TopicUnsubscribeParams {
  /**
   * Visitor ID to unsubscribe from topics
   * @minLength 1
   * @maxLength 255
   */
  visitorId: string;
  /**
   * Topic names to unsubscribe from
   * @minItems 1
   * @maxItems 50
   */
  topics: Array<string>;
}

export interface TopicUnsubscribeResponse {
  /**
   * Topics the visitor is still subscribed to
   */
  topics: Array<string>;
}

export interface TopicListParams extends CursorIDPageParams {
  /**
   * Visitor ID to list topics for
   * @minLength 1
   * @maxLength 255
   */
  visitorId: string;
}

export interface TopicListResponse {
  /**
   * Unique identifier for the topic subscription
   */
  id: string;
  /**
   * Topic name (e.g., 'announcements', 'channel:general')
   */
  topic: string;
}

export type PushNotificationTopicsCursorIDPage = CursorIDPage<TopicListResponse>;
export declare namespace Topics {
  export {
    type TopicSubscribeResponse as TopicSubscribeResponse,
    type TopicUnsubscribeResponse as TopicUnsubscribeResponse,
    type TopicListResponse as TopicListResponse,
    type PushNotificationTopicsCursorIDPage as PushNotificationTopicsCursorIDPage,
    type TopicSubscribeParams as TopicSubscribeParams,
    type TopicUnsubscribeParams as TopicUnsubscribeParams,
    type TopicListParams as TopicListParams,
  };
}
