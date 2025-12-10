// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptions', () => {
  // Prism tests are disabled
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.subscriptions.cancel({
      customer_id: 'customer_id',
      subscription_id: 'subscription_id',
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
  test.skip('cancel: required and optional params', async () => {
    const response = await client.subscriptions.cancel({
      customer_id: 'customer_id',
      subscription_id: 'subscription_id',
      cancel_at_period_end: true,
    });
  });

  // Prism tests are disabled
  test.skip('check: only required params', async () => {
    const responsePromise = client.subscriptions.check({
      customer_id: 'customer_id',
      entitlement_lookup_key: 'entitlement_lookup_key',
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
  test.skip('check: required and optional params', async () => {
    const response = await client.subscriptions.check({
      customer_id: 'customer_id',
      entitlement_lookup_key: 'entitlement_lookup_key',
    });
  });

  // Prism tests are disabled
  test.skip('checkout: only required params', async () => {
    const responsePromise = client.subscriptions.checkout({ customer_id: 'customer_id', plan_id: 'plan_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('checkout: required and optional params', async () => {
    const response = await client.subscriptions.checkout({
      customer_id: 'customer_id',
      plan_id: 'plan_id',
      cancel_url: 'https://example.com',
      success_url: 'https://example.com',
    });
  });
});
