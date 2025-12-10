# Hercules TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:withzeusai/hercules-sdk-typescript.git
cd hercules-sdk-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export HERCULES_API_KEY="My API Key"
export HERCULES_API_VERSION="My API Version"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y @usehercules/mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "usehercules_sdk_api": {
      "command": "node",
      "args": [
        "/path/to/local/hercules-sdk-typescript/packages/mcp-server",
        "--client=claude",
        "--tools=dynamic"
      ],
      "env": {
        "HERCULES_API_KEY": "My API Key",
        "HERCULES_API_VERSION": "My API Version"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are three ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API
3. Exposing a docs search tool and a code execution tool, allowing the client to write code to be executed against the TypeScript client

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Code execution

If you specify `--tools=code` to the MCP server, it will expose just two tools:

- `search_docs` - Searches the API documentation and returns a list of markdown results
- `execute` - Runs code against the TypeScript client

This allows the LLM to implement more complex logic by chaining together many API calls without loading
intermediary results into its context window.

The code execution itself happens in a Deno sandbox that has network access only to the base URL for the API.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| -------------------- | ------------------------ | --------------- |
| `x-hercules-api-key` | `apiKey` | bearerAuth |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "usehercules_sdk_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "@usehercules/mcp/server";

// import a specific tool
import cancelSubscriptions from "@usehercules/mcp/tools/subscriptions/cancel-subscriptions";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [cancelSubscriptions, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `subscriptions`:

- `cancel_subscriptions` (`write`): Cancel Subscription
- `check_subscriptions` (`write`): Check Entitlement
- `checkout_subscriptions` (`write`): Create Checkout Session

### Resource `subscriptions.customers`:

- `create_subscriptions_customers` (`write`): Create Customer
- `update_subscriptions_customers` (`write`): Update Customer
- `list_subscriptions_customers` (`read`): List Customers
- `delete_subscriptions_customers` (`write`): Delete Customer
- `billing_portal_subscriptions_customers` (`write`): Open Customer Portal
- `get_subscriptions_customers` (`read`): Get Customer

### Resource `subscriptions.plans`:

- `create_subscriptions_plans` (`write`): Create Plan
- `update_subscriptions_plans` (`write`): Update Plan
- `list_subscriptions_plans` (`read`): List Plans
- `archive_subscriptions_plans` (`write`): Archive Plan
- `get_subscriptions_plans` (`read`): Get Plan

### Resource `subscriptions.plans.entitlements`:

- `list_plans_subscriptions_entitlements` (`read`): List Plan Entitlements
- `attach_plans_subscriptions_entitlements` (`write`): Attach Entitlement to Plan
- `remove_plans_subscriptions_entitlements` (`write`): Remove Entitlement from Plan

### Resource `subscriptions.entitlements`:

- `create_subscriptions_entitlements` (`write`): Create Entitlement
- `update_subscriptions_entitlements` (`write`): Update Entitlement
- `list_subscriptions_entitlements` (`read`): List Entitlements
- `get_subscriptions_entitlements` (`read`): Get Entitlement

### Resource `subscriptions.coupons`:

- `create_subscriptions_coupons` (`write`): Create Coupon
- `update_subscriptions_coupons` (`write`): Update Coupon
- `list_subscriptions_coupons` (`read`): List Coupons
- `delete_subscriptions_coupons` (`write`): Delete Coupon
- `get_subscriptions_coupons` (`read`): Get Coupon
- `validate_subscriptions_coupons` (`write`): Validate Promo Code
