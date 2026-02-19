// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource commerce', () => {
  // Mock server tests are disabled
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.commerce.cancel({
      customer_id: 'cus_1234567890',
      subscription_id: 'sub_1234567890',
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
  test.skip('cancel: required and optional params', async () => {
    const response = await client.commerce.cancel({
      customer_id: 'cus_1234567890',
      subscription_id: 'sub_1234567890',
      cancellation_timing: 'immediate',
    });
  });

  // Mock server tests are disabled
  test.skip('check: only required params', async () => {
    const responsePromise = client.commerce.check({
      customer_id: 'cus_1234567890',
      resource_id: 'feat_1234567890',
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
  test.skip('check: required and optional params', async () => {
    const response = await client.commerce.check({
      customer_id: 'cus_1234567890',
      resource_id: 'feat_1234567890',
    });
  });

  // Mock server tests are disabled
  test.skip('checkout: only required params', async () => {
    const responsePromise = client.commerce.checkout({
      customer_id: 'cus_1234567890',
      line_items: [{ variant_id: 'var_1234567890' }],
      success_url: 'https://example.com',
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
  test.skip('checkout: required and optional params', async () => {
    const response = await client.commerce.checkout({
      customer_id: 'cus_1234567890',
      line_items: [{ variant_id: 'var_1234567890', quantity: 1 }],
      success_url: 'https://example.com',
      cancel_url: 'https://example.com',
      charge_timing: 'immediate',
      interval_downgrade_behavior: 'immediate',
      plan_downgrade_behavior: 'immediate',
      promotion_code: 'promotion_code',
      proration_behavior: 'none',
    });
  });
});
