// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pay', () => {
  // Prism tests are disabled
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.beta.pay.cancel({
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
    const response = await client.beta.pay.cancel({
      customer_id: 'customer_id',
      subscription_id: 'subscription_id',
      cancellation_timing: 'immediate',
    });
  });

  // Prism tests are disabled
  test.skip('check: only required params', async () => {
    const responsePromise = client.beta.pay.check({
      customer_id: 'customer_id',
      entitlement_id: 'entitlement_id',
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
    const response = await client.beta.pay.check({
      customer_id: 'customer_id',
      entitlement_id: 'entitlement_id',
    });
  });

  // Prism tests are disabled
  test.skip('checkout: only required params', async () => {
    const responsePromise = client.beta.pay.checkout({
      customer_id: 'customer_id',
      product_id: 'product_id',
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
  test.skip('checkout: required and optional params', async () => {
    const response = await client.beta.pay.checkout({
      customer_id: 'customer_id',
      product_id: 'product_id',
      id: 'id',
      cancel_url: 'https://example.com',
      promotion_code: 'promotion_code',
      success_url: 'https://example.com',
      variant_id: 'variant_id',
    });
  });
});
