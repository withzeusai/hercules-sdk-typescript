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
    const responsePromise = client.iam.tenants.groups.create('tenant_id', { actor_user_id: 'x', name: 'x' });
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
      actor_user_id: 'x',
      name: 'x',
      description: 'description',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.update('group_id', {
      tenant_id: 'tenant_id',
      actor_user_id: 'x',
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
      actor_user_id: 'x',
      description: 'description',
      name: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.iam.tenants.groups.list('tenant_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iam.tenants.groups.list(
        'tenant_id',
        { limit: 1, starting_after: 'starting_after' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hercules.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.delete('group_id', { tenant_id: 'tenant_id' });
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
    const response = await client.iam.tenants.groups.delete('group_id', {
      tenant_id: 'tenant_id',
      actor_user_id: 'actor_user_id',
    });
  });

  // Mock server tests are disabled
  test.skip('archive: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.archive('group_id', {
      tenant_id: 'tenant_id',
      actor_user_id: 'x',
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
      actor_user_id: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('assignResourceRole: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.assignResourceRole('group_id', {
      tenant_id: 'tenant_id',
      actor_user_id: 'x',
      external_id: 'x',
      resource_type: { id: 'x' },
      role: { id: 'x' },
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
  test.skip('assignResourceRole: required and optional params', async () => {
    const response = await client.iam.tenants.groups.assignResourceRole('group_id', {
      tenant_id: 'tenant_id',
      actor_user_id: 'x',
      external_id: 'x',
      resource_type: { id: 'x' },
      role: { id: 'x' },
      expires_at: '2019-12-27T18:11:19.117Z',
    });
  });

  // Mock server tests are disabled
  test.skip('assignRole: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.assignRole('group_id', {
      tenant_id: 'tenant_id',
      actor_user_id: 'x',
      role: { id: 'x' },
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
  test.skip('assignRole: required and optional params', async () => {
    const response = await client.iam.tenants.groups.assignRole('group_id', {
      tenant_id: 'tenant_id',
      actor_user_id: 'x',
      role: { id: 'x' },
      expires_at: '2019-12-27T18:11:19.117Z',
    });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.get('group_id', { tenant_id: 'tenant_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.iam.tenants.groups.get('group_id', { tenant_id: 'tenant_id' });
  });

  // Mock server tests are disabled
  test.skip('listResourceRoleAssignments: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.listResourceRoleAssignments('group_id', {
      tenant_id: 'tenant_id',
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
  test.skip('listResourceRoleAssignments: required and optional params', async () => {
    const response = await client.iam.tenants.groups.listResourceRoleAssignments('group_id', {
      tenant_id: 'tenant_id',
      limit: 1,
      starting_after: 'starting_after',
    });
  });

  // Mock server tests are disabled
  test.skip('listRoleAssignments: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.listRoleAssignments('group_id', {
      tenant_id: 'tenant_id',
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
  test.skip('listRoleAssignments: required and optional params', async () => {
    const response = await client.iam.tenants.groups.listRoleAssignments('group_id', {
      tenant_id: 'tenant_id',
      limit: 1,
      starting_after: 'starting_after',
    });
  });

  // Mock server tests are disabled
  test.skip('unarchive: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.unarchive('group_id', {
      tenant_id: 'tenant_id',
      actor_user_id: 'x',
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
      actor_user_id: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('unassignResourceRole: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.unassignResourceRole('assignment_id', {
      tenant_id: 'tenant_id',
      group_id: 'group_id',
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
  test.skip('unassignResourceRole: required and optional params', async () => {
    const response = await client.iam.tenants.groups.unassignResourceRole('assignment_id', {
      tenant_id: 'tenant_id',
      group_id: 'group_id',
      actor_user_id: 'actor_user_id',
    });
  });

  // Mock server tests are disabled
  test.skip('unassignRole: only required params', async () => {
    const responsePromise = client.iam.tenants.groups.unassignRole('assignment_id', {
      tenant_id: 'tenant_id',
      group_id: 'group_id',
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
  test.skip('unassignRole: required and optional params', async () => {
    const response = await client.iam.tenants.groups.unassignRole('assignment_id', {
      tenant_id: 'tenant_id',
      group_id: 'group_id',
      actor_user_id: 'actor_user_id',
    });
  });
});
