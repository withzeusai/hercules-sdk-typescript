// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource roles', () => {
  // Mock server tests are disabled
  test.skip('assign', async () => {
    const responsePromise = client.accessControl.roles.assign({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createOrgCustom: only required params', async () => {
    const responsePromise = client.accessControl.roles.createOrgCustom({ name: 'x', scope_id: 'x' });
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
    const response = await client.accessControl.roles.createOrgCustom({
      name: 'x',
      scope_id: 'x',
      description: 'description',
      key: 'x',
      permission_keys: ['x'],
    });
  });

  // Mock server tests are disabled
  test.skip('remove', async () => {
    const responsePromise = client.accessControl.roles.remove({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updatePermissions: only required params', async () => {
    const responsePromise = client.accessControl.roles.updatePermissions({ permission_keys: ['x'] });
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
    const response = await client.accessControl.roles.updatePermissions({
      permission_keys: ['x'],
      role_id: 'x',
      role_key: 'x',
      scope_id: 'x',
    });
  });
});
