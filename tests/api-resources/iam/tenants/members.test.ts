// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource members', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.iam.tenants.members.create('tenant_id', {
      actor_user_id: 'x',
      user_id: 'x',
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
    const response = await client.iam.tenants.members.create('tenant_id', {
      actor_user_id: 'x',
      user_id: 'x',
      role: { id: 'x' },
      status: 'active',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.iam.tenants.members.list('tenant_id');
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
      client.iam.tenants.members.list(
        'tenant_id',
        {
          limit: 1,
          role_id: 'x',
          starting_after: 'starting_after',
          status: 'active',
          user_id: 'x',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hercules.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('assignResourceRole: only required params', async () => {
    const responsePromise = client.iam.tenants.members.assignResourceRole('membership_id', {
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
    const response = await client.iam.tenants.members.assignResourceRole('membership_id', {
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
    const responsePromise = client.iam.tenants.members.assignRole('membership_id', {
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
    const response = await client.iam.tenants.members.assignRole('membership_id', {
      tenant_id: 'tenant_id',
      actor_user_id: 'x',
      role: { id: 'x' },
      expires_at: '2019-12-27T18:11:19.117Z',
    });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.iam.tenants.members.get('membership_id', { tenant_id: 'tenant_id' });
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
    const response = await client.iam.tenants.members.get('membership_id', { tenant_id: 'tenant_id' });
  });

  // Mock server tests are disabled
  test.skip('listResourceRoleAssignments: only required params', async () => {
    const responsePromise = client.iam.tenants.members.listResourceRoleAssignments('membership_id', {
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
    const response = await client.iam.tenants.members.listResourceRoleAssignments('membership_id', {
      tenant_id: 'tenant_id',
      limit: 1,
      starting_after: 'starting_after',
    });
  });

  // Mock server tests are disabled
  test.skip('listRoleAssignments: only required params', async () => {
    const responsePromise = client.iam.tenants.members.listRoleAssignments('membership_id', {
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
    const response = await client.iam.tenants.members.listRoleAssignments('membership_id', {
      tenant_id: 'tenant_id',
      limit: 1,
      starting_after: 'starting_after',
    });
  });

  // Mock server tests are disabled
  test.skip('remove: only required params', async () => {
    const responsePromise = client.iam.tenants.members.remove('membership_id', { tenant_id: 'tenant_id' });
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
    const response = await client.iam.tenants.members.remove('membership_id', {
      tenant_id: 'tenant_id',
      actor_user_id: 'actor_user_id',
    });
  });

  // Mock server tests are disabled
  test.skip('replaceResourceRoles: only required params', async () => {
    const responsePromise = client.iam.tenants.members.replaceResourceRoles('membership_id', {
      tenant_id: 'tenant_id',
      actor_user_id: 'x',
      external_id: 'x',
      resource_type: { id: 'x' },
      roles: [{ id: 'x' }],
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
  test.skip('replaceResourceRoles: required and optional params', async () => {
    const response = await client.iam.tenants.members.replaceResourceRoles('membership_id', {
      tenant_id: 'tenant_id',
      actor_user_id: 'x',
      external_id: 'x',
      resource_type: { id: 'x' },
      roles: [{ id: 'x' }],
    });
  });

  // Mock server tests are disabled
  test.skip('replaceRoles: only required params', async () => {
    const responsePromise = client.iam.tenants.members.replaceRoles('membership_id', {
      tenant_id: 'tenant_id',
      actor_user_id: 'x',
      roles: [{ id: 'x' }],
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
    const response = await client.iam.tenants.members.replaceRoles('membership_id', {
      tenant_id: 'tenant_id',
      actor_user_id: 'x',
      roles: [{ id: 'x' }],
    });
  });

  // Mock server tests are disabled
  test.skip('unassignResourceRole: only required params', async () => {
    const responsePromise = client.iam.tenants.members.unassignResourceRole('assignment_id', {
      tenant_id: 'tenant_id',
      membership_id: 'membership_id',
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
    const response = await client.iam.tenants.members.unassignResourceRole('assignment_id', {
      tenant_id: 'tenant_id',
      membership_id: 'membership_id',
      actor_user_id: 'actor_user_id',
    });
  });

  // Mock server tests are disabled
  test.skip('unassignRole: only required params', async () => {
    const responsePromise = client.iam.tenants.members.unassignRole('assignment_id', {
      tenant_id: 'tenant_id',
      membership_id: 'membership_id',
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
    const response = await client.iam.tenants.members.unassignRole('assignment_id', {
      tenant_id: 'tenant_id',
      membership_id: 'membership_id',
      actor_user_id: 'actor_user_id',
    });
  });

  // Mock server tests are disabled
  test.skip('updateStatus: only required params', async () => {
    const responsePromise = client.iam.tenants.members.updateStatus('membership_id', {
      tenant_id: 'tenant_id',
      actor_user_id: 'x',
      status: 'active',
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
  test.skip('updateStatus: required and optional params', async () => {
    const response = await client.iam.tenants.members.updateStatus('membership_id', {
      tenant_id: 'tenant_id',
      actor_user_id: 'x',
      status: 'active',
    });
  });
});
