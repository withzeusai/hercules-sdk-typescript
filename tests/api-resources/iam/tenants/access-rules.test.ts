// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accessRules', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.iam.tenants.accessRules.create('tenant_id', {
      actor_user_id: 'x',
      effect: 'allow',
      subject: { type: 'email', value: 'dev@stainless.com' },
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
    const response = await client.iam.tenants.accessRules.create('tenant_id', {
      actor_user_id: 'x',
      effect: 'allow',
      subject: { type: 'email', value: 'dev@stainless.com' },
      reason: 'reason',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.iam.tenants.accessRules.list('tenant_id');
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
      client.iam.tenants.accessRules.list(
        'tenant_id',
        {
          effect: 'allow',
          include_archived: 'include_archived',
          limit: 1,
          starting_after: 'starting_after',
          subject_type: 'email',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hercules.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('archive: only required params', async () => {
    const responsePromise = client.iam.tenants.accessRules.archive('rule_id', {
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
    const response = await client.iam.tenants.accessRules.archive('rule_id', {
      tenant_id: 'tenant_id',
      actor_user_id: 'x',
    });
  });
});
