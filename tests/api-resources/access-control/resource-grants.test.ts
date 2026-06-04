// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource resourceGrants', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.accessControl.resourceGrants.create({
      actor_mode: 'service',
      resource_id: 'x',
      resource_type: 'x',
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
    const response = await client.accessControl.resourceGrants.create({
      actor_mode: 'service',
      resource_id: 'x',
      resource_type: 'x',
      expires_at: '2019-12-27T18:11:19.117Z',
      hercules_auth_user_id: 'x',
      id_token: 'x',
      permission_key: 'x',
      principal_id: 'x',
      role_key: 'x',
      scope_id: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('revoke: only required params', async () => {
    const responsePromise = client.accessControl.resourceGrants.revoke({
      actor_mode: 'service',
      grant_id: 'x',
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
  test.skip('revoke: required and optional params', async () => {
    const response = await client.accessControl.resourceGrants.revoke({
      actor_mode: 'service',
      grant_id: 'x',
      scope_id: 'x',
      id_token: 'x',
    });
  });
});
