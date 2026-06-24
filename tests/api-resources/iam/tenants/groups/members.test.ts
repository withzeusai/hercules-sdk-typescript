// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource members', () => {
  // Mock server tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.members.add('user_id', {
      tenant_id: 'tenant_id',
      group_id: 'group_id',
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
  test.skip('add: required and optional params', async () => {
    const response = await client.iam.tenants.groups.members.add('user_id', {
      tenant_id: 'tenant_id',
      group_id: 'group_id',
      'X-Hercules-IAM-Actor': 'service',
      'X-Hercules-User-ID-Token': 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('remove: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.members.remove('user_id', {
      tenant_id: 'tenant_id',
      group_id: 'group_id',
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
  test.skip('remove: required and optional params', async () => {
    const response = await client.iam.tenants.groups.members.remove('user_id', {
      tenant_id: 'tenant_id',
      group_id: 'group_id',
      'X-Hercules-IAM-Actor': 'service',
      'X-Hercules-User-ID-Token': 'x',
    });
  });
});
