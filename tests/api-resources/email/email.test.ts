// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource email', () => {
  smokeCase(
    'email.send:required',
    { operation: 'send', path: '/v1/email' },
    'send: only required params',
    async () => {
      const email = await client.email.send({
        from: 'x',
        to: 'user@example.com',
        subject: 'x',
      });
    },
  );
  smokeCase(
    'email.send:all',
    { operation: 'send', path: '/v1/email' },
    'send: required and optional params',
    async () => {
      const email = await client.email.send({
        from: 'x',
        to: 'user@example.com',
        subject: 'x',
        html: '',
        text: '',
        cc: 'user@example.com',
        bcc: 'user@example.com',
        reply_to: 'user@example.com',
        reply_to_email_id: 'x',
        headers: {},
        attachments: [
          {
            filename: 'x',
            content: '',
          },
        ],
        tags: [
          {
            name: 'x',
            value: 'x',
          },
        ],
      });
    },
  );
  smokeCase(
    'email.list:required',
    { operation: 'list', path: '/v1/email' },
    'list: only required params',
    async () => {
      const page = await client.email.list();
    },
  );
  smokeCase(
    'email.list:all',
    { operation: 'list', path: '/v1/email' },
    'list: required and optional params',
    async () => {
      const page = await client.email.list({
        query: 'query',
        from: 'from',
        to: 'to',
        'created[gt]': 1,
        'created[gte]': 1,
        'created[lt]': 1,
        'created[lte]': 1,
        sort: 'sort',
      });
    },
  );
  smokeCase('email.get:single', { operation: 'get', path: '/v1/email/{email_id}' }, 'get', async () => {
    const email = await client.email.get('emailId');
  });
});
