// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource purchased', () => {
  smokeCase(
    'domains.purchased.create:required',
    { operation: 'create', path: '/v1/domains/purchase' },
    'create: only required params',
    async () => {
      const purchased = await client.domains.purchased.create({
        domain_name: 'x',
        years: 1,
        autorenew: true,
      });
    },
  );
  smokeCase(
    'domains.purchased.create:all',
    { operation: 'create', path: '/v1/domains/purchase' },
    'create: required and optional params',
    async () => {
      const purchased = await client.domains.purchased.create({
        domain_name: 'x',
        website_id: 'x',
        payment_method_id: 'x',
        years: 1,
        autorenew: true,
        idn_language: 'x',
      });
    },
  );
  smokeCase(
    'domains.purchased.confirm:single',
    { operation: 'confirm', path: '/v1/domains/purchase/confirm' },
    'confirm',
    async () => {
      const purchased = await client.domains.purchased.confirm({
        invoice_id: 'x',
        domain_name: 'x',
        website_id: 'x',
        years: 1,
        autorenew: true,
      });
    },
  );
  smokeCase(
    'domains.purchased.list:required',
    { operation: 'list', path: '/v1/domains/purchased' },
    'list: only required params',
    async () => {
      const page = await client.domains.purchased.list();
    },
  );
  smokeCase(
    'domains.purchased.list:all',
    { operation: 'list', path: '/v1/domains/purchased' },
    'list: required and optional params',
    async () => {
      const page = await client.domains.purchased.list({
        status: 'pending',
      });
    },
  );
  smokeCase(
    'domains.purchased.get:single',
    { operation: 'get', path: '/v1/domains/purchased/{domain_id}' },
    'get',
    async () => {
      const purchasedDomain = await client.domains.purchased.get('domainId');
    },
  );
});
