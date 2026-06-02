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
    const responsePromise = client.accessControl.invitations.create({
      email: 'dev@stainless.com',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.accessControl.invitations.create({
      email: 'dev@stainless.com',
      scope_id: 'x',
      expires_in_days: 1,
      role_ids: ['x'],
      role_keys: ['x'],
    });
  });

  // Mock server tests are disabled
  test.skip('accept: only required params', async () => {
    const responsePromise = client.accessControl.invitations.accept({ token: 'x', id_token: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('accept: required and optional params', async () => {
    const response = await client.accessControl.invitations.accept({ token: 'x', id_token: 'x' });
  });

  // Mock server tests are disabled
  test.skip('revoke: only required params', async () => {
    const responsePromise = client.accessControl.invitations.revoke({ invitation_id: 'x', scope_id: 'x' });
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
    const response = await client.accessControl.invitations.revoke({ invitation_id: 'x', scope_id: 'x' });
  });
});
