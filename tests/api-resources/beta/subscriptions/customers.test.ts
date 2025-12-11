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
    const responsePromise = client.beta.subscriptions.customers.create();
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
      client.beta.subscriptions.customers.create(
        {
          address: {
            city: 'city',
            country: 'country',
            line1: 'line1',
            line2: 'line2',
            postal_code: 'postal_code',
            state: 'state',
          },
          email: 'dev@stainless.com',
          name: 'name',
          phone: 'phone',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hercules.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.beta.subscriptions.customers.update('customer_id');
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
      client.beta.subscriptions.customers.update(
        'customer_id',
        {
          address: {
            city: 'city',
            country: 'country',
            line1: 'line1',
            line2: 'line2',
            postal_code: 'postal_code',
            state: 'state',
          },
          email: 'dev@stainless.com',
          name: 'name',
          phone: 'phone',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hercules.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.beta.subscriptions.customers.list();
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
      client.beta.subscriptions.customers.list(
        { ending_before: 'ending_before', limit: 1, starting_after: 'starting_after' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hercules.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.beta.subscriptions.customers.delete('customer_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('billingPortal', async () => {
    const responsePromise = client.beta.subscriptions.customers.billingPortal('customer_id');
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
      client.beta.subscriptions.customers.billingPortal(
        'customer_id',
        { return_url: 'https://example.com' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hercules.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.beta.subscriptions.customers.get('customer_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
