// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource topics', () => {
  smokeCase(
    'pushNotifications.topics.subscribe:single',
    { operation: 'subscribe', path: '/v1/push-notifications/topics/subscribe' },
    'subscribe',
    async () => {
      const topic = await client.pushNotifications.topics.subscribe({
        visitorId: 'x',
        topics: ['x'],
      });
    },
  );
  smokeCase(
    'pushNotifications.topics.unsubscribe:single',
    { operation: 'unsubscribe', path: '/v1/push-notifications/topics/unsubscribe' },
    'unsubscribe',
    async () => {
      const topic = await client.pushNotifications.topics.unsubscribe({
        visitorId: 'x',
        topics: ['x'],
      });
    },
  );
  smokeCase(
    'pushNotifications.topics.list:single',
    { operation: 'list', path: '/v1/push-notifications/topics' },
    'list',
    async () => {
      const page = await client.pushNotifications.topics.list({
        visitorId: 'visitorId',
      });
    },
  );
});
