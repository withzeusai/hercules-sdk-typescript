// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tenants', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.iam.tenants.create({
      name: 'x',
      owner_user_id: 'x',
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
    const response = await client.iam.tenants.create({
      name: 'x',
      owner_user_id: 'x',
      'X-Hercules-IAM-Actor': 'service',
      default_role: { id: 'x' },
      entry_mode: 'open',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iam.tenants.update('tenant_id', {
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
    const response = await client.iam.tenants.update('tenant_id', {
      name: 'x',
      'X-Hercules-IAM-Actor': 'service',
      default_role: { id: 'x' },
      entry_mode: 'open',
      'X-Hercules-User-ID-Token': 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('archive: only required params', async () => {
    const responsePromise = client.iam.tenants.archive('tenant_id', { 'X-Hercules-IAM-Actor': 'service' });
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
    const response = await client.iam.tenants.archive('tenant_id', { 'X-Hercules-IAM-Actor': 'service' });
  });

  // Mock server tests are disabled
  test.skip('evaluateEntry: only required params', async () => {
    const responsePromise = client.iam.tenants.evaluateEntry('tenant_id', {
      'X-Hercules-IAM-Actor': 'user',
      'X-Hercules-User-ID-Token': 'x',
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
  test.skip('evaluateEntry: required and optional params', async () => {
    const response = await client.iam.tenants.evaluateEntry('tenant_id', {
      'X-Hercules-IAM-Actor': 'user',
      'X-Hercules-User-ID-Token': 'x',
    });
  });
});
