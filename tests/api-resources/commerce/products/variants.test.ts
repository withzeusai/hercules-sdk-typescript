// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource variants', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.commerce.products.variants.create('product_id', { name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.commerce.products.variants.create('product_id', {
      name: 'name',
      id: 'var_1234567890',
      currency: 'currency',
      description: 'description',
      media: [
        {
          cdn_file_id: 'cdn_file_id',
          type: 'image',
          display_order: 0,
        },
      ],
      metadata: { foo: 'bar' },
      recurring: { interval: 'day', interval_count: 1 },
      unit_amount: -9007199254740991,
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.commerce.products.variants.update('variant_id', {
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
  test.skip('update: required and optional params', async () => {
    const response = await client.commerce.products.variants.update('variant_id', {
      product_id: 'product_id',
      active: true,
      description: 'description',
      media: [
        {
          cdn_file_id: 'cdn_file_id',
          type: 'image',
          display_order: 0,
        },
      ],
      metadata: { foo: 'bar' },
      name: 'name',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.commerce.products.variants.list('product_id');
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
      client.commerce.products.variants.list(
        'product_id',
        {
          active: true,
          ending_before: 'ending_before',
          limit: 1,
          starting_after: 'starting_after',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hercules.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.commerce.products.variants.get('variant_id', { product_id: 'product_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.commerce.products.variants.get('variant_id', { product_id: 'product_id' });
  });
});
