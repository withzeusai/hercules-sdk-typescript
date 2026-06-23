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
    const responsePromise = client.iam.groups.create({
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
  test.skip('create: required and optional params', async () => {
    const response = await client.iam.groups.create({
      actor_mode: 'service',
      name: 'x',
      scope_id: 'x',
      id_token: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.iam.groups.list({ actor_mode: 'service', scope_id: 'x' });
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
    const response = await client.iam.groups.list({
      actor_mode: 'service',
      scope_id: 'x',
      id_token: 'x',
      include_archived: true,
    });
  });

  // Mock server tests are disabled
  test.skip('addMember: only required params', async () => {
    const responsePromise = client.iam.groups.addMember({
      actor_mode: 'service',
      group_principal_id: 'x',
      member_principal_id: 'x',
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
  test.skip('addMember: required and optional params', async () => {
    const response = await client.iam.groups.addMember({
      actor_mode: 'service',
      group_principal_id: 'x',
      member_principal_id: 'x',
      scope_id: 'x',
      id_token: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('archive: only required params', async () => {
    const responsePromise = client.iam.groups.archive({
      actor_mode: 'service',
      group_principal_id: 'x',
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
  test.skip('archive: required and optional params', async () => {
    const response = await client.iam.groups.archive({
      actor_mode: 'service',
      group_principal_id: 'x',
      scope_id: 'x',
      id_token: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('removeMember: only required params', async () => {
    const responsePromise = client.iam.groups.removeMember({
      actor_mode: 'service',
      group_principal_id: 'x',
      member_principal_id: 'x',
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
  test.skip('removeMember: required and optional params', async () => {
    const response = await client.iam.groups.removeMember({
      actor_mode: 'service',
      group_principal_id: 'x',
      member_principal_id: 'x',
      scope_id: 'x',
      id_token: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('rename: only required params', async () => {
    const responsePromise = client.iam.groups.rename({
      actor_mode: 'service',
      group_principal_id: 'x',
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
  test.skip('rename: required and optional params', async () => {
    const response = await client.iam.groups.rename({
      actor_mode: 'service',
      group_principal_id: 'x',
      name: 'x',
      scope_id: 'x',
      id_token: 'x',
    });
  });
});
