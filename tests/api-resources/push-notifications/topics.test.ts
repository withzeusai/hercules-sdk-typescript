// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource topics', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.pushNotifications.topics.list({ visitorId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.pushNotifications.topics.list({
      visitorId: 'x',
      ending_before: 'ending_before',
      limit: 1,
      starting_after: 'starting_after',
    });
  });

  // Mock server tests are disabled
  test.skip('subscribe: only required params', async () => {
    const responsePromise = client.pushNotifications.topics.subscribe({ topics: ['x'], visitorId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('subscribe: required and optional params', async () => {
    const response = await client.pushNotifications.topics.subscribe({ topics: ['x'], visitorId: 'x' });
  });

  // Mock server tests are disabled
  test.skip('unsubscribe: only required params', async () => {
    const responsePromise = client.pushNotifications.topics.unsubscribe({ topics: ['x'], visitorId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('unsubscribe: required and optional params', async () => {
    const response = await client.pushNotifications.topics.unsubscribe({ topics: ['x'], visitorId: 'x' });
  });
});
