// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Topics extends APIResource {
  /**
   * Lists topics a visitor is subscribed to.
   */
  list(
    query: TopicListParams,
    options?: RequestOptions,
  ): PagePromise<TopicListResponsesCursorIDPage, TopicListResponse> {
    return this._client.getAPIList('/v1/push-notifications/topics', CursorIDPage<TopicListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Subscribes a visitor to topics. Topics are per-visitor, so all devices for this
   * visitor will receive notifications sent to these topics.
   */
  subscribe(body: TopicSubscribeParams, options?: RequestOptions): APIPromise<TopicSubscribeResponse> {
    return this._client.post('/v1/push-notifications/topics/subscribe', { body, ...options });
  }

  /**
   * Unsubscribes a visitor from specified topics.
   */
  unsubscribe(body: TopicUnsubscribeParams, options?: RequestOptions): APIPromise<TopicUnsubscribeResponse> {
    return this._client.post('/v1/push-notifications/topics/unsubscribe', { body, ...options });
  }
}

export type TopicListResponsesCursorIDPage = CursorIDPage<TopicListResponse>;

/**
 * A topic subscription for a visitor.
 */
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

/**
 * The visitor's updated topic subscriptions.
 */
export interface TopicSubscribeResponse {
  /**
   * Topics the visitor is now subscribed to
   */
  topics: Array<string>;
}

/**
 * The visitor's remaining topic subscriptions after unsubscribing.
 */
export interface TopicUnsubscribeResponse {
  /**
   * Topics the visitor is still subscribed to
   */
  topics: Array<string>;
}

export interface TopicListParams extends CursorIDPageParams {
  /**
   * Visitor ID to list topics for
   */
  visitorId: string;
}

export interface TopicSubscribeParams {
  /**
   * Topic names to subscribe to (e.g., 'announcements', 'channel:general')
   */
  topics: Array<string>;

  /**
   * Visitor ID to subscribe to topics
   */
  visitorId: string;
}

export interface TopicUnsubscribeParams {
  /**
   * Topic names to unsubscribe from
   */
  topics: Array<string>;

  /**
   * Visitor ID to unsubscribe from topics
   */
  visitorId: string;
}

export declare namespace Topics {
  export {
    type TopicListResponse as TopicListResponse,
    type TopicSubscribeResponse as TopicSubscribeResponse,
    type TopicUnsubscribeResponse as TopicUnsubscribeResponse,
    type TopicListResponsesCursorIDPage as TopicListResponsesCursorIDPage,
    type TopicListParams as TopicListParams,
    type TopicSubscribeParams as TopicSubscribeParams,
    type TopicUnsubscribeParams as TopicUnsubscribeParams,
  };
}
