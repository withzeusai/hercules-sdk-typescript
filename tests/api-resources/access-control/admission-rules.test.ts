// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: 'My API Key',
  apiVersion: '2025-12-09',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource admissionRules', () => {
  // Mock server tests are disabled
  test.skip('archive: only required params', async () => {
    const responsePromise = client.accessControl.admissionRules.archive({
      actor_mode: 'service',
      rule_id: 'x',
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
    const response = await client.accessControl.admissionRules.archive({
      actor_mode: 'service',
      rule_id: 'x',
      scope_id: 'x',
      id_token: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.accessControl.admissionRules.upsert({
      actor_mode: 'service',
      effect: 'allow',
      scope_id: 'x',
      subject_type: 'email',
      subject_value: 'x',
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
  test.skip('upsert: required and optional params', async () => {
    const response = await client.accessControl.admissionRules.upsert({
      actor_mode: 'service',
      effect: 'allow',
      scope_id: 'x',
      subject_type: 'email',
      subject_value: 'x',
      id_token: 'x',
      reason: 'reason',
    });
  });
});
