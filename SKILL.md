---
name: hercules-typescript-sdk
description: "TypeScript SDK for hercules API. Use when writing TypeScript code that calls hercules API with the @usehercules/sdk package: installing it, constructing and authenticating the client, and calling API operations."
---

# hercules TypeScript SDK

Generated TypeScript client for hercules API, published as `@usehercules/sdk`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
npm install @usehercules/sdk
```

## Client setup and authentication

```ts
import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: process.env['HERCULES_API_KEY'], // defaults to the HERCULES_API_KEY env var
});
```

Provide credentials using the options below. Environment variables are read automatically when the target runtime supports them:

- `apiKey` (env: `HERCULES_API_KEY`) — Credential for the bearerAuth scheme.

## Calling operations

```ts
import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: process.env['HERCULES_API_KEY'], // defaults to the HERCULES_API_KEY env var
});

const customer = await client.commerce.customers.get('REPLACE_ME');

console.log(customer);
```

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](./api.md) before writing a call.

## Pagination

List endpoints return paginated results you can iterate directly; the SDK fetches subsequent pages for you.

```ts
const page = await client.commerce.customers.list({
  starting_after: 'id_123',
  limit: 100,
});
```

## Error handling

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

```ts
import { APIError } from '@usehercules/sdk';

try {
  const customer = await client.commerce.customers.get('REPLACE_ME');
} catch (err) {
  if (err instanceof APIError) {
    console.log(err.status, err.name, err.headers);
  }
  throw err;
}
```

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

## Reference files

- [README.md](./README.md) — full feature tour: client options, request options, retries and timeouts, logging.
- [api.md](./api.md) — complete catalogue of every operation with request and response types.
