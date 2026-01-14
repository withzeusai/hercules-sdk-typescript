// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customers', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.commerce.customers.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.commerce.customers.create(
        {
          id: 'cus_1234567890',
          address: {
            city: 'city',
            country: 'xx',
            line1: 'line1',
            line2: 'line2',
            postal_code: 'postal_code',
            state: 'state',
          },
          email: 'dev@stainless.com',
          name: 'name',
          phone: '+4699102',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hercules.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.commerce.customers.update('cus_1234567890');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.commerce.customers.update(
        'cus_1234567890',
        {
          address: {
            city: 'city',
            country: 'xx',
            line1: 'line1',
            line2: 'line2',
            postal_code: 'postal_code',
            state: 'state',
          },
          email: 'dev@stainless.com',
          name: 'name',
          phone: '+4699102',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hercules.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.commerce.customers.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.commerce.customers.list(
        {
          created: {
            gt: 0,
            gte: 0,
            lt: 0,
            lte: 0,
          },
          email: 'email',
          ending_before: 'ending_before',
          limit: 1,
          query: 'query',
          sort: '-created',
          starting_after: 'starting_after',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hercules.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('billingPortal', async () => {
    const responsePromise = client.commerce.customers.billingPortal('cus_1234567890');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('billingPortal: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.commerce.customers.billingPortal(
        'cus_1234567890',
        { return_url: 'https://example.com' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hercules.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.commerce.customers.get('cus_1234567890');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
