// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource topics', () => {
  smokeCase(
    'pushNotifications.topics.subscribe:required',
    { operation: 'subscribe', path: '/v1/push-notifications/topics/subscribe' },
    'subscribe: only required params',
    async () => {
      const topic = await client.pushNotifications.topics.subscribe({
        topics: ['x'],
      });
    },
  );
  smokeCase(
    'pushNotifications.topics.subscribe:all',
    { operation: 'subscribe', path: '/v1/push-notifications/topics/subscribe' },
    'subscribe: required and optional params',
    async () => {
      const topic = await client.pushNotifications.topics.subscribe({
        visitorId: 'x',
        topics: ['x'],
      });
    },
  );
  smokeCase(
    'pushNotifications.topics.unsubscribe:required',
    { operation: 'unsubscribe', path: '/v1/push-notifications/topics/unsubscribe' },
    'unsubscribe: only required params',
    async () => {
      const topic = await client.pushNotifications.topics.unsubscribe({
        topics: ['x'],
      });
    },
  );
  smokeCase(
    'pushNotifications.topics.unsubscribe:all',
    { operation: 'unsubscribe', path: '/v1/push-notifications/topics/unsubscribe' },
    'unsubscribe: required and optional params',
    async () => {
      const topic = await client.pushNotifications.topics.unsubscribe({
        visitorId: 'x',
        topics: ['x'],
      });
    },
  );
  smokeCase(
    'pushNotifications.topics.list:required',
    { operation: 'list', path: '/v1/push-notifications/topics' },
    'list: only required params',
    async () => {
      const page = await client.pushNotifications.topics.list();
    },
  );
  smokeCase(
    'pushNotifications.topics.list:all',
    { operation: 'list', path: '/v1/push-notifications/topics' },
    'list: required and optional params',
    async () => {
      const page = await client.pushNotifications.topics.list({
        visitor_id: 'visitorId',
        visitorId: 'visitorId',
      });
    },
  );
});
