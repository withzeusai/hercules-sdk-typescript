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
    const response = await client.iam.tenants.groups.create('tenant_id', {
      name: 'x',
      'X-Hercules-IAM-Actor': 'service',
      'X-Hercules-User-ID-Token': 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.update('group_id', {
      tenant_id: 'tenant_id',
      action: 'rename',
      name: 'x',
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
    const response = await client.iam.tenants.groups.update('group_id', {
      tenant_id: 'tenant_id',
      action: 'rename',
      name: 'x',
      'X-Hercules-IAM-Actor': 'service',
      'X-Hercules-User-ID-Token': 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('archive: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.archive('group_id', {
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
  test.skip('archive: required and optional params', async () => {
    const response = await client.iam.tenants.groups.archive('group_id', {
      tenant_id: 'tenant_id',
      'X-Hercules-IAM-Actor': 'service',
      'X-Hercules-User-ID-Token': 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('listPermissionOverrides: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.listPermissionOverrides('group_id', {
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
  test.skip('listPermissionOverrides: required and optional params', async () => {
    const response = await client.iam.tenants.groups.listPermissionOverrides('group_id', {
      tenant_id: 'tenant_id',
      'X-Hercules-IAM-Actor': 'service',
      'X-Hercules-User-ID-Token': 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('replacePermissionOverrides: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.replacePermissionOverrides('group_id', {
      tenant_id: 'tenant_id',
      overrides: [{ effect: 'allow', permission_key: 'x' }],
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
  test.skip('replacePermissionOverrides: required and optional params', async () => {
    const response = await client.iam.tenants.groups.replacePermissionOverrides('group_id', {
      tenant_id: 'tenant_id',
      overrides: [
        {
          effect: 'allow',
          permission_key: 'x',
          expires_at: '2019-12-27T18:11:19.117Z',
        },
      ],
      'X-Hercules-IAM-Actor': 'service',
      'X-Hercules-User-ID-Token': 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('replaceRoles: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.replaceRoles('group_id', {
      tenant_id: 'tenant_id',
      grants: [{ role: { id: 'x' } }],
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
  test.skip('replaceRoles: required and optional params', async () => {
    const response = await client.iam.tenants.groups.replaceRoles('group_id', {
      tenant_id: 'tenant_id',
      grants: [
        {
          role: { id: 'x' },
          expires_at: '2019-12-27T18:11:19.117Z',
        },
      ],
      'X-Hercules-IAM-Actor': 'service',
      'X-Hercules-User-ID-Token': 'x',
    });
  });
});
