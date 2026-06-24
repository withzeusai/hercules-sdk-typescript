// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource grants', () => {
  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iam.tenants.grants.update('grant_id', {
      tenant_id: 'tenant_id',
      expires_at: '2019-12-27T18:11:19.117Z',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.iam.tenants.grants.update('grant_id', {
      tenant_id: 'tenant_id',
      expires_at: '2019-12-27T18:11:19.117Z',
      'X-Hercules-IAM-Actor': 'service',
      'X-Hercules-User-ID-Token': 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.iam.tenants.grants.delete('grant_id', {
      tenant_id: 'tenant_id',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.iam.tenants.grants.delete('grant_id', {
      tenant_id: 'tenant_id',
      'X-Hercules-IAM-Actor': 'service',
      'X-Hercules-User-ID-Token': 'x',
    });
  });
});
