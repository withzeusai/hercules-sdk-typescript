// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource permissionOverrides', () => {
  // Mock server tests are disabled
  test.skip('replace: only required params', async () => {
    const responsePromise = client.iam.tenants.resources.permissionOverrides.replace('tenant_id', {
      overrides: [{ effect: 'allow', permission_key: 'x' }],
      resource_type: 'x',
      subject: { type: 'user', user_id: 'x' },
      target: { type: 'all' },
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
  test.skip('replace: required and optional params', async () => {
    const response = await client.iam.tenants.resources.permissionOverrides.replace('tenant_id', {
      overrides: [
        {
          effect: 'allow',
          permission_key: 'x',
          expires_at: '2019-12-27T18:11:19.117Z',
        },
      ],
      resource_type: 'x',
      subject: { type: 'user', user_id: 'x' },
      target: { type: 'all' },
      'X-Hercules-IAM-Actor': 'service',
      applies_to: 'self',
      'X-Hercules-User-ID-Token': 'x',
    });
  });
});
