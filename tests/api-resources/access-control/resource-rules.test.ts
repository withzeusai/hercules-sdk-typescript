// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource resourceRules', () => {
  // Mock server tests are disabled
  test.skip('replace: only required params', async () => {
    const responsePromise = client.accessControl.resourceRules.replace({
      actor_mode: 'service',
      resource_type: 'x',
      rules: [{ effect: 'allow', permission_key: 'x' }],
      scope_id: 'x',
      subject: { principal_id: 'x', type: 'principal' },
      target: { mode: 'all' },
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
  test.skip('replace: required and optional params', async () => {
    const response = await client.accessControl.resourceRules.replace({
      actor_mode: 'service',
      resource_type: 'x',
      rules: [
        {
          effect: 'allow',
          permission_key: 'x',
          expires_at: '2019-12-27T18:11:19.117Z',
        },
      ],
      scope_id: 'x',
      subject: { principal_id: 'x', type: 'principal' },
      target: { mode: 'all' },
      applies_to: 'self',
      id_token: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('set: only required params', async () => {
    const responsePromise = client.accessControl.resourceRules.set({
      actor_mode: 'service',
      effect: 'allow',
      permission_key: 'x',
      resource_type: 'x',
      scope_id: 'x',
      subject: { principal_id: 'x', type: 'principal' },
      target: { mode: 'all' },
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
    const response = await client.accessControl.resourceRules.set({
      actor_mode: 'service',
      effect: 'allow',
      permission_key: 'x',
      resource_type: 'x',
      scope_id: 'x',
      subject: { principal_id: 'x', type: 'principal' },
      target: { mode: 'all' },
      applies_to: 'self',
      expires_at: '2019-12-27T18:11:19.117Z',
      id_token: 'x',
    });
  });
});
