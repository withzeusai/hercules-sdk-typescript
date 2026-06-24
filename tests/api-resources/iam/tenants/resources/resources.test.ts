// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource resources', () => {
  // Mock server tests are disabled
  test.skip('accessGrantingRoles: only required params', async () => {
    const responsePromise = client.iam.tenants.resources.accessGrantingRoles('resource_id', {
      tenant_id: 'tenant_id',
      resource_type: 'resource_type',
      subject_type: 'user',
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
  test.skip('accessGrantingRoles: required and optional params', async () => {
    const response = await client.iam.tenants.resources.accessGrantingRoles('resource_id', {
      tenant_id: 'tenant_id',
      resource_type: 'resource_type',
      subject_type: 'user',
      user_token_identifier: 'x',
      applies_to: 'self',
    });
  });
});
