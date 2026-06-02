// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource expiries', () => {
  // Mock server tests are disabled
  test.skip('set: only required params', async () => {
    const responsePromise = client.accessControl.expiries.set({
      expires_at: '2019-12-27T18:11:19.117Z',
      grant_id: 'x',
      scope_id: 'x',
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
  test.skip('set: required and optional params', async () => {
    const response = await client.accessControl.expiries.set({
      expires_at: '2019-12-27T18:11:19.117Z',
      grant_id: 'x',
      scope_id: 'x',
    });
  });
});
