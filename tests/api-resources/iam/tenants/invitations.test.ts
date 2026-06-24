// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invitations', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.iam.tenants.invitations.create('tenant_id', {
      email: 'dev@stainless.com',
      target: { type: 'tenant' },
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
  test.skip('create: required and optional params', async () => {
    const response = await client.iam.tenants.invitations.create('tenant_id', {
      email: 'dev@stainless.com',
      target: { type: 'tenant' },
      'X-Hercules-IAM-Actor': 'service',
      expires_at: '2019-12-27T18:11:19.117Z',
      grants: [
        {
          role: { id: 'x' },
          expires_at: '2019-12-27T18:11:19.117Z',
        },
      ],
      'X-Hercules-User-ID-Token': 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.iam.tenants.invitations.list('tenant_id', {
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
    const response = await client.iam.tenants.invitations.list('tenant_id', {
      'X-Hercules-IAM-Actor': 'service',
      cursor: 'x',
      email: 'dev@stainless.com',
      limit: 1,
      resource_id: 'x',
      resource_type: 'x',
      target_type: 'tenant',
      'X-Hercules-User-ID-Token': 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('revoke: only required params', async () => {
    const responsePromise = client.iam.tenants.invitations.revoke('invitation_id', {
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
  test.skip('revoke: required and optional params', async () => {
    const response = await client.iam.tenants.invitations.revoke('invitation_id', {
      tenant_id: 'tenant_id',
      'X-Hercules-IAM-Actor': 'service',
      'X-Hercules-User-ID-Token': 'x',
    });
  });
});
