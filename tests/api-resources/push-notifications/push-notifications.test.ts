// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource pushNotifications', () => {
  smokeCase(
    'pushNotifications.enable:single',
    { operation: 'enable', path: '/v1/push-notifications/enable' },
    'enable',
    async () => {
      const pushNotification = await client.pushNotifications.enable();
    },
  );
  smokeCase(
    'pushNotifications.subscribe:required',
    { operation: 'subscribe', path: '/v1/push-notifications/subscribe' },
    'subscribe: only required params',
    async () => {
      const pushNotification = await client.pushNotifications.subscribe({});
    },
  );
  smokeCase(
    'pushNotifications.subscribe:all',
    { operation: 'subscribe', path: '/v1/push-notifications/subscribe' },
    'subscribe: required and optional params',
    async () => {
      const pushNotification = await client.pushNotifications.subscribe({
        visitorId: 'x',
        subscriber: {},
        subscription: {
          endpoint: 'https://example.com',
          keys: {
            p256dh: 'x',
            auth: 'x',
          },
        },
        nativeDevice: {
          platform: 'ios',
          token: '',
        },
      });
    },
  );
  smokeCase(
    'pushNotifications.unsubscribe:single',
    { operation: 'unsubscribe', path: '/v1/push-notifications/unsubscribe' },
    'unsubscribe',
    async () => {
      const pushNotification = await client.pushNotifications.unsubscribe({
        secret: 'x',
      });
    },
  );
  smokeCase(
    'pushNotifications.identify:required',
    { operation: 'identify', path: '/v1/push-notifications/identify' },
    'identify: only required params',
    async () => {
      const pushNotification = await client.pushNotifications.identify({
        secret: 'x',
      });
    },
  );
  smokeCase(
    'pushNotifications.identify:all',
    { operation: 'identify', path: '/v1/push-notifications/identify' },
    'identify: required and optional params',
    async () => {
      const pushNotification = await client.pushNotifications.identify({
        secret: 'x',
        userId: 'x',
        subscriber: {},
      });
    },
  );
  smokeCase(
    'pushNotifications.send:required',
    { operation: 'send', path: '/v1/push-notifications/send' },
    'send: only required params',
    async () => {
      const pushNotification = await client.pushNotifications.send({
        title: 'x',
      });
    },
  );
  smokeCase(
    'pushNotifications.send:all',
    { operation: 'send', path: '/v1/push-notifications/send' },
    'send: required and optional params',
    async () => {
      const pushNotification = await client.pushNotifications.send({
        visitorIds: [''],
        topics: [''],
        title: 'x',
        body: '',
        icon: 'https://example.com',
        badge: 'https://example.com',
        image: 'https://example.com',
        data: {},
        urgency: 'very-low',
        ttl: 0,
      });
    },
  );
});
