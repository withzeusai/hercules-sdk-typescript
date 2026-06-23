// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource roles', () => {
  // Mock server tests are disabled
  test.skip('assign: only required params', async () => {
    const responsePromise = client.iam.roles.assign({ actor_mode: 'service' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('assign: required and optional params', async () => {
    const response = await client.iam.roles.assign({
      actor_mode: 'service',
      hercules_auth_user_id: 'x',
      id_token: 'x',
      principal_id: 'x',
      role_id: 'x',
      role_key: 'x',
      scope_id: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('createOrgCustom: only required params', async () => {
    const responsePromise = client.iam.roles.createOrgCustom({
      actor_mode: 'service',
      name: 'x',
      scope_id: 'x',
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
  test.skip('createOrgCustom: required and optional params', async () => {
    const response = await client.iam.roles.createOrgCustom({
      actor_mode: 'service',
      name: 'x',
      scope_id: 'x',
      description: 'description',
      id_token: 'x',
      key: 'x',
      permission_keys: ['x'],
    });
  });

  // Mock server tests are disabled
  test.skip('listGrantable: only required params', async () => {
    const responsePromise = client.iam.roles.listGrantable({
      actor_mode: 'service',
      scope_id: 'x',
      subject_type: 'user',
      target: { type: 'scope' },
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
  test.skip('listGrantable: required and optional params', async () => {
    const response = await client.iam.roles.listGrantable({
      actor_mode: 'service',
      scope_id: 'x',
      subject_type: 'user',
      target: { type: 'scope' },
      id_token: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('remove: only required params', async () => {
    const responsePromise = client.iam.roles.remove({ actor_mode: 'service' });
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
    const response = await client.iam.roles.remove({
      actor_mode: 'service',
      hercules_auth_user_id: 'x',
      id_token: 'x',
      principal_id: 'x',
      role_id: 'x',
      role_key: 'x',
      scope_id: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('replace: only required params', async () => {
    const responsePromise = client.iam.roles.replace({
      actor_mode: 'service',
      role_keys: ['x'],
      scope_id: 'x',
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
    const response = await client.iam.roles.replace({
      actor_mode: 'service',
      role_keys: ['x'],
      scope_id: 'x',
      hercules_auth_user_id: 'x',
      id_token: 'x',
      principal_id: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('updatePermissions: only required params', async () => {
    const responsePromise = client.iam.roles.updatePermissions({
      actor_mode: 'service',
      permission_keys: ['x'],
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
  test.skip('updatePermissions: required and optional params', async () => {
    const response = await client.iam.roles.updatePermissions({
      actor_mode: 'service',
      permission_keys: ['x'],
      id_token: 'x',
      role_id: 'x',
      role_key: 'x',
      scope_id: 'x',
    });
  });
});
