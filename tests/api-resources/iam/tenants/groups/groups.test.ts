// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource groups', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.create('tenant_id', {
      name: 'x',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.iam.tenants.groups.create('tenant_id', {
      name: 'x',
      user_token_identifier: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.update('group_id', {
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
  test.skip('update: required and optional params', async () => {
    const response = await client.iam.tenants.groups.update('group_id', {
      tenant_id: 'tenant_id',
      user_token_identifier: 'x',
      action: 'suspend',
      name: 'x',
      roles: [
        {
          role: { id: 'x' },
          expires_at: '2019-12-27T18:11:19.117Z',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('archive: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.archive('group_id', {
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
  test.skip('archive: required and optional params', async () => {
    const response = await client.iam.tenants.groups.archive('group_id', {
      tenant_id: 'tenant_id',
      user_token_identifier: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('unarchive: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.unarchive('group_id', {
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
  test.skip('unarchive: required and optional params', async () => {
    const response = await client.iam.tenants.groups.unarchive('group_id', {
      tenant_id: 'tenant_id',
      user_token_identifier: 'x',
    });
  });
});
