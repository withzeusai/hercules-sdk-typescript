// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource push', () => {
  // Prism tests are disabled
  test.skip('enable', async () => {
    const responsePromise = client.push.enable();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('identify: only required params', async () => {
    const responsePromise = client.push.identify({ secret: 'x', userId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('identify: required and optional params', async () => {
    const response = await client.push.identify({ secret: 'x', userId: 'x' });
  });

  // Prism tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.push.send({ title: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('send: required and optional params', async () => {
    const response = await client.push.send({
      title: 'x',
      badge: 'https://example.com',
      body: 'body',
      data: { foo: 'bar' },
      icon: 'https://example.com',
      image: 'https://example.com',
      topics: ['string'],
      visitorIds: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('subscribe: only required params', async () => {
    const responsePromise = client.push.subscribe({
      subscription: {
        endpoint: 'https://example.com',
        keys: { auth: 'auth', p256dh: 'p256dh' },
      },
      visitorId: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('subscribe: required and optional params', async () => {
    const response = await client.push.subscribe({
      subscription: {
        endpoint: 'https://example.com',
        keys: { auth: 'auth', p256dh: 'p256dh' },
        expirationTime: 0,
      },
      visitorId: 'x',
    });
  });

  // Prism tests are disabled
  test.skip('unsubscribe: only required params', async () => {
    const responsePromise = client.push.unsubscribe({ secret: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('unsubscribe: required and optional params', async () => {
    const response = await client.push.unsubscribe({ secret: 'x' });
  });
});
