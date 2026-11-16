// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource features', () => {
  smokeCase(
    'commerce.features.list:required',
    { operation: 'list', path: '/v1/commerce/features' },
    'list: only required params',
    async () => {
      const page = await client.commerce.features.list();
    },
  );
  smokeCase(
    'commerce.features.list:all',
    { operation: 'list', path: '/v1/commerce/features' },
    'list: required and optional params',
    async () => {
      const page = await client.commerce.features.list({
        active: true,
      });
    },
  );
  smokeCase(
    'commerce.features.get:single',
    { operation: 'get', path: '/v1/commerce/features/{feature_id}' },
    'get',
    async () => {
      const feature = await client.commerce.features.get('featureId');
    },
  );
  smokeCase(
    'commerce.features.create:required',
    { operation: 'create', path: '/v1/commerce/features' },
    'create: only required params',
    async () => {
      const feature = await client.commerce.features.create({
        name: 'x',
        metadata: {},
      });
    },
  );
  smokeCase(
    'commerce.features.create:all',
    { operation: 'create', path: '/v1/commerce/features' },
    'create: required and optional params',
    async () => {
      const feature = await client.commerce.features.create({
        id: 'xxxxxx',
        name: 'x',
        description: '',
        metadata: {},
      });
    },
  );
  smokeCase(
    'commerce.features.update:required',
    { operation: 'update', path: '/v1/commerce/features/{feature_id}' },
    'update: only required params',
    async () => {
      const feature = await client.commerce.features.update('featureId', {});
    },
  );
  smokeCase(
    'commerce.features.update:all',
    { operation: 'update', path: '/v1/commerce/features/{feature_id}' },
    'update: required and optional params',
    async () => {
      const feature = await client.commerce.features.update('featureId', {
        name: 'x',
        description: '',
        active: false,
        metadata: {},
      });
    },
  );
});
