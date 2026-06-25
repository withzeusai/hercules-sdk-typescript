// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invitations', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.iam.tenants.invitations.list('tenant_id', { user_token_identifier: 'x' });
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
      user_token_identifier: 'x',
      cursor: 'x',
      email: 'dev@stainless.com',
      limit: 1,
      target: { type: 'tenant' },
    });
  });

  // Mock server tests are disabled
  test.skip('createResource: only required params', async () => {
    const responsePromise = client.iam.tenants.invitations.createResource('resource_id', {
      tenant_id: 'tenant_id',
      resource_type: 'resource_type',
      email: 'dev@stainless.com',
      grant: {
        role: { id: 'x' },
        type: 'role',
      },
      user_token_identifier: 'x',
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
  test.skip('createResource: required and optional params', async () => {
    const response = await client.iam.tenants.invitations.createResource('resource_id', {
      tenant_id: 'tenant_id',
      resource_type: 'resource_type',
      email: 'dev@stainless.com',
      grant: {
        role: { id: 'x' },
        type: 'role',
        expires_at: '2019-12-27T18:11:19.117Z',
      },
      user_token_identifier: 'x',
      applies_to: 'self',
      expires_at: '2019-12-27T18:11:19.117Z',
    });
  });

  // Mock server tests are disabled
  test.skip('createTenant: only required params', async () => {
    const responsePromise = client.iam.tenants.invitations.createTenant('tenant_id', {
      email: 'dev@stainless.com',
      user_token_identifier: 'x',
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
  test.skip('createTenant: required and optional params', async () => {
    const response = await client.iam.tenants.invitations.createTenant('tenant_id', {
      email: 'dev@stainless.com',
      user_token_identifier: 'x',
      expires_at: '2019-12-27T18:11:19.117Z',
      grants: [
        {
          role: { id: 'x' },
          expires_at: '2019-12-27T18:11:19.117Z',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('revoke: only required params', async () => {
    const responsePromise = client.iam.tenants.invitations.revoke('invitation_id', {
      tenant_id: 'tenant_id',
      user_token_identifier: 'x',
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
      user_token_identifier: 'x',
    });
  });
});
