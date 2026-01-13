// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fields', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.content.models.fields.create('model_id', {
      api_id: 'nXI',
      name: 'name',
      type: 'text',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.content.models.fields.create('model_id', {
      api_id: 'nXI',
      name: 'name',
      type: 'text',
      id: 'cf_-K0---P3EA--',
      description: 'description',
      display_order: -9007199254740991,
      localized: true,
      validation: {
        allowed_mime_types: ['string'],
        allowed_models: ['string'],
        allowed_values: ['string'],
        array_item_type: 'text',
        default_value: {},
        max: 0,
        min: 0,
        pattern: 'pattern',
        required: true,
        unique: true,
      },
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.content.models.fields.update('field_id', { model_id: 'model_id' });
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
    const response = await client.content.models.fields.update('field_id', {
      model_id: 'model_id',
      description: 'description',
      display_order: -9007199254740991,
      localized: true,
      name: 'name',
      validation: {
        allowed_mime_types: ['string'],
        allowed_models: ['string'],
        allowed_values: ['string'],
        array_item_type: 'text',
        default_value: {},
        max: 0,
        min: 0,
        pattern: 'pattern',
        required: true,
        unique: true,
      },
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.content.models.fields.delete('field_id', { model_id: 'model_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.content.models.fields.delete('field_id', { model_id: 'model_id' });
  });
});
