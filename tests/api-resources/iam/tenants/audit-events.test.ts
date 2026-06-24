// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auditEvents', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.iam.tenants.auditEvents.list('tenant_id', {
      'X-Hercules-IAM-Actor': 'service',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.iam.tenants.auditEvents.list('tenant_id', {
      'X-Hercules-IAM-Actor': 'service',
      action: 'x',
      actor_type: 'system',
      api_key_id: 'x',
      cursor: 'x',
      limit: 1,
      outcome: 'success',
      since: '2019-12-27T18:11:19.117Z',
      target_id: 'x',
      target_type: 'x',
      until: '2019-12-27T18:11:19.117Z',
      user_id: 'x',
      'X-Hercules-User-ID-Token': 'x',
    });
  });
});
