// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource email', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.email.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.email.list(
        {
          'created[gt]': 0,
          'created[gte]': 0,
          'created[lt]': 0,
          'created[lte]': 0,
          ending_before: 'ending_before',
          from: 'from',
          limit: 1,
          query: 'query',
          sort: '-last_event',
          starting_after: 'starting_after',
          to: 'to',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hercules.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.email.get('email_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.email.send({
      from: 'x',
      subject: 'x',
      to: 'dev@stainless.com',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('send: required and optional params', async () => {
    const response = await client.email.send({
      from: 'x',
      subject: 'x',
      to: 'dev@stainless.com',
      attachments: [
        {
          content: 'content',
          filename: 'x',
          content_type: 'content_type',
        },
      ],
      bcc: 'dev@stainless.com',
      cc: 'dev@stainless.com',
      headers: { foo: 'string' },
      html: 'html',
      reply_to: 'dev@stainless.com',
      tags: [{ name: 'x', value: 'x' }],
      text: 'text',
    });
  });
});
