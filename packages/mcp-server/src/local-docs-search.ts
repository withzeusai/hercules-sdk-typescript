// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'cancel',
    endpoint: '/v1/commerce/cancel',
    httpMethod: 'post',
    summary: 'Cancel Subscription',
    description:
      "Cancels a customer's subscription. By default, the subscription remains active until the end of the current billing period. Set cancellation_timing to 'immediate' to cancel immediately.",
    stainlessPath: '(resource) commerce > (method) cancel',
    qualified: 'client.commerce.cancel',
    params: [
      'customer_id: string;',
      'subscription_id: string;',
      "cancellation_timing?: 'immediate' | 'at_billing_period_end';",
    ],
    response:
      "{ id: string; cancellation_timing: 'immediate' | 'at_billing_period_end'; status: string; canceled_at?: string; }",
    markdown:
      "## cancel\n\n`client.commerce.cancel(customer_id: string, subscription_id: string, cancellation_timing?: 'immediate' | 'at_billing_period_end'): { id: string; cancellation_timing: 'immediate' | 'at_billing_period_end'; status: string; canceled_at?: string; }`\n\n**post** `/v1/commerce/cancel`\n\nCancels a customer's subscription. By default, the subscription remains active until the end of the current billing period. Set cancellation_timing to 'immediate' to cancel immediately.\n\n### Parameters\n\n- `customer_id: string`\n  The customer ID\n\n- `subscription_id: string`\n  The subscription ID to cancel\n\n- `cancellation_timing?: 'immediate' | 'at_billing_period_end'`\n  When to cancel the subscription. Defaults to 'at_billing_period_end' to allow customers to use remaining time.\n\n### Returns\n\n- `{ id: string; cancellation_timing: 'immediate' | 'at_billing_period_end'; status: string; canceled_at?: string; }`\n  Cancel subscription response\n\n  - `id: string`\n  - `cancellation_timing: 'immediate' | 'at_billing_period_end'`\n  - `status: string`\n  - `canceled_at?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst response = await client.commerce.cancel({ customer_id: 'cus_1234567890', subscription_id: 'sub_1234567890' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'check',
    endpoint: '/v1/commerce/check',
    httpMethod: 'post',
    summary: 'Check Entitlement',
    description:
      "Verifies if a customer has access to a specific feature. Use this to gate features in your app based on the customer's active subscription and the entitlements attached to their product. Hercules recommends calling this before allowing access to premium features.",
    stainlessPath: '(resource) commerce > (method) check',
    qualified: 'client.commerce.check',
    params: ['customer_id: string;', 'resource_id: string;'],
    response: '{ has_access: boolean; }',
    markdown:
      "## check\n\n`client.commerce.check(customer_id: string, resource_id: string): { has_access: boolean; }`\n\n**post** `/v1/commerce/check`\n\nVerifies if a customer has access to a specific feature. Use this to gate features in your app based on the customer's active subscription and the entitlements attached to their product. Hercules recommends calling this before allowing access to premium features.\n\n### Parameters\n\n- `customer_id: string`\n  The customer ID\n\n- `resource_id: string`\n  The resource ID to check for access\n\n### Returns\n\n- `{ has_access: boolean; }`\n  Check resource access response.\n\n  - `has_access: boolean`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst response = await client.commerce.check({ customer_id: 'cus_1234567890', resource_id: 'feat_1234567890' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'checkout',
    endpoint: '/v1/commerce/checkout',
    httpMethod: 'post',
    summary: 'Create Checkout Session',
    description:
      'Creates a checkout session for a customer to subscribe to a product. Returns a URL to redirect the customer to for payment. After successful payment, the customer is subscribed to the product and gains access to its entitlements.',
    stainlessPath: '(resource) commerce > (method) checkout',
    qualified: 'client.commerce.checkout',
    params: [
      'customer_id: string;',
      'line_items: { variant_id: string; quantity?: number; }[];',
      'success_url: string;',
      'cancel_url?: string;',
      "charge_timing?: 'immediate' | 'end_of_period';",
      "interval_downgrade_behavior?: 'immediate' | 'end_of_period';",
      "plan_downgrade_behavior?: 'immediate' | 'end_of_period';",
      'promotion_code?: string;',
      "proration_behavior?: 'none' | 'prorate' | 'full_difference';",
    ],
    response:
      "{ id: string; action: 'checkout' | 'update'; mode?: 'subscription' | 'payment'; subscription?: { id: string; product_id: string; status: string; variant_id?: string; }; url?: string; }",
    markdown:
      "## checkout\n\n`client.commerce.checkout(customer_id: string, line_items: { variant_id: string; quantity?: number; }[], success_url: string, cancel_url?: string, charge_timing?: 'immediate' | 'end_of_period', interval_downgrade_behavior?: 'immediate' | 'end_of_period', plan_downgrade_behavior?: 'immediate' | 'end_of_period', promotion_code?: string, proration_behavior?: 'none' | 'prorate' | 'full_difference'): { id: string; action: 'checkout' | 'update'; mode?: 'subscription' | 'payment'; subscription?: object; url?: string; }`\n\n**post** `/v1/commerce/checkout`\n\nCreates a checkout session for a customer to subscribe to a product. Returns a URL to redirect the customer to for payment. After successful payment, the customer is subscribed to the product and gains access to its entitlements.\n\n### Parameters\n\n- `customer_id: string`\n  The customer ID\n\n- `line_items: { variant_id: string; quantity?: number; }[]`\n  List of items to purchase. Each item specifies a variant and quantity.\n\n- `success_url: string`\n  URL to redirect on success\n\n- `cancel_url?: string`\n  URL to redirect on cancel\n\n- `charge_timing?: 'immediate' | 'end_of_period'`\n  Override charge timing for subscription updates. If not provided, uses the subscription group's configured default.\n\n- `interval_downgrade_behavior?: 'immediate' | 'end_of_period'`\n  Override interval downgrade behavior for subscription updates. If not provided, uses the subscription group's configured default.\n\n- `plan_downgrade_behavior?: 'immediate' | 'end_of_period'`\n  Override plan downgrade behavior for subscription updates. If not provided, uses the subscription group's configured default.\n\n- `promotion_code?: string`\n  Promotion code to apply\n\n- `proration_behavior?: 'none' | 'prorate' | 'full_difference'`\n  Override proration behavior for subscription updates. If not provided, uses the subscription group's configured default.\n\n### Returns\n\n- `{ id: string; action: 'checkout' | 'update'; mode?: 'subscription' | 'payment'; subscription?: { id: string; product_id: string; status: string; variant_id?: string; }; url?: string; }`\n  Checkout response. For new customers, returns a checkout URL. For existing subscribers, returns the updated subscription.\n\n  - `id: string`\n  - `action: 'checkout' | 'update'`\n  - `mode?: 'subscription' | 'payment'`\n  - `subscription?: { id: string; product_id: string; status: string; variant_id?: string; }`\n  - `url?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst response = await client.commerce.checkout({\n  customer_id: 'cus_1234567890',\n  line_items: [{ variant_id: 'var_1234567890' }],\n  success_url: 'https://example.com',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/commerce/customers',
    httpMethod: 'post',
    summary: 'Create Customer',
    description:
      'Creates a new billable customer. A customer represents the entity in your app that will be charged—typically a user, organization, or project. Hercules recommends creating a customer immediately after creating the corresponding entity in your app.',
    stainlessPath: '(resource) commerce.customers > (method) create',
    qualified: 'client.commerce.customers.create',
    params: [
      'id?: string;',
      'address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; };',
      'email?: string;',
      'name?: string;',
      'phone?: string;',
    ],
    response:
      '{ id: string; created: string; address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; }; email?: string; name?: string; phone?: string; }',
    markdown:
      "## create\n\n`client.commerce.customers.create(id?: string, address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; }, email?: string, name?: string, phone?: string): { id: string; created: string; address?: customer_address; email?: string; name?: string; phone?: string; }`\n\n**post** `/v1/commerce/customers`\n\nCreates a new billable customer. A customer represents the entity in your app that will be charged—typically a user, organization, or project. Hercules recommends creating a customer immediately after creating the corresponding entity in your app.\n\n### Parameters\n\n- `id?: string`\n  Optional custom ID for the customer. Must start with 'cus_'. If not provided, one will be generated.\n\n- `address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; }`\n  The customer's billing address\n  - `city?: string`\n    City name\n  - `country?: string`\n    Two-letter ISO country code\n  - `line1?: string`\n    Street address line 1\n  - `line2?: string`\n    Street address line 2 (apartment, suite, etc.)\n  - `postal_code?: string`\n    Postal or ZIP code\n  - `state?: string`\n    State, province, or region\n\n- `email?: string`\n  The customer's email address for receipts and notifications\n\n- `name?: string`\n  The customer's full name\n\n- `phone?: string`\n  The customer's phone number in E.164 format (e.g., +14155551234)\n\n### Returns\n\n- `{ id: string; created: string; address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; }; email?: string; name?: string; phone?: string; }`\n  A billable customer. Represents the entity in your app that will be charged—typically a user, organization, or project.\n\n  - `id: string`\n  - `created: string`\n  - `address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; }`\n  - `email?: string`\n  - `name?: string`\n  - `phone?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst customer = await client.commerce.customers.create();\n\nconsole.log(customer);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/commerce/customers/{customer_id}',
    httpMethod: 'patch',
    summary: 'Update Customer',
    description:
      'Updates an existing customer. Use this to modify contact information or billing address. Only provided fields are updated; omitted fields remain unchanged.',
    stainlessPath: '(resource) commerce.customers > (method) update',
    qualified: 'client.commerce.customers.update',
    params: [
      'customer_id: string;',
      'address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; };',
      'email?: string;',
      'name?: string;',
      'phone?: string;',
    ],
    response:
      '{ id: string; created: string; address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; }; email?: string; name?: string; phone?: string; }',
    markdown:
      "## update\n\n`client.commerce.customers.update(customer_id: string, address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; }, email?: string, name?: string, phone?: string): { id: string; created: string; address?: customer_address; email?: string; name?: string; phone?: string; }`\n\n**patch** `/v1/commerce/customers/{customer_id}`\n\nUpdates an existing customer. Use this to modify contact information or billing address. Only provided fields are updated; omitted fields remain unchanged.\n\n### Parameters\n\n- `customer_id: string`\n\n- `address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; }`\n  The customer's billing address\n  - `city?: string`\n    City name\n  - `country?: string`\n    Two-letter ISO country code\n  - `line1?: string`\n    Street address line 1\n  - `line2?: string`\n    Street address line 2 (apartment, suite, etc.)\n  - `postal_code?: string`\n    Postal or ZIP code\n  - `state?: string`\n    State, province, or region\n\n- `email?: string`\n  The customer's email address for receipts and notifications\n\n- `name?: string`\n  The customer's full name\n\n- `phone?: string`\n  The customer's phone number in E.164 format (e.g., +14155551234)\n\n### Returns\n\n- `{ id: string; created: string; address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; }; email?: string; name?: string; phone?: string; }`\n  A billable customer. Represents the entity in your app that will be charged—typically a user, organization, or project.\n\n  - `id: string`\n  - `created: string`\n  - `address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; }`\n  - `email?: string`\n  - `name?: string`\n  - `phone?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst customer = await client.commerce.customers.update('cus_1234567890');\n\nconsole.log(customer);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/commerce/customers',
    httpMethod: 'get',
    summary: 'List Customers',
    description:
      'Retrieves a paginated list of all customers. Customers are the billable entities in your app—typically users, organizations, or projects.',
    stainlessPath: '(resource) commerce.customers > (method) list',
    qualified: 'client.commerce.customers.list',
    params: [
      'created?: { gt?: number; gte?: number; lt?: number; lte?: number; };',
      'email?: string;',
      'ending_before?: string;',
      'limit?: number;',
      'query?: string;',
      'sort?: string;',
      'starting_after?: string;',
    ],
    response:
      '{ id: string; created: string; address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; }; email?: string; name?: string; phone?: string; }',
    markdown:
      "## list\n\n`client.commerce.customers.list(created?: { gt?: number; gte?: number; lt?: number; lte?: number; }, email?: string, ending_before?: string, limit?: number, query?: string, sort?: string, starting_after?: string): { id: string; created: string; address?: customer_address; email?: string; name?: string; phone?: string; }`\n\n**get** `/v1/commerce/customers`\n\nRetrieves a paginated list of all customers. Customers are the billable entities in your app—typically users, organizations, or projects.\n\n### Parameters\n\n- `created?: { gt?: number; gte?: number; lt?: number; lte?: number; }`\n  Filter by creation date. Accepts an object with gt, gte, lt, lte operators using Unix timestamps.\n  - `gt?: number`\n    Greater than (Unix timestamp)\n  - `gte?: number`\n    Greater than or equal to (Unix timestamp)\n  - `lt?: number`\n    Less than (Unix timestamp)\n  - `lte?: number`\n    Less than or equal to (Unix timestamp)\n\n- `email?: string`\n  Filter by exact email address match.\n\n- `ending_before?: string`\n  Cursor for backward pagination. Pass the ID of the first customer from the previous page.\n\n- `limit?: number`\n  Maximum number of customers to return (1-100)\n\n- `query?: string`\n  Search query to filter customers. Searches across name, email, and ID fields (case-insensitive).\n\n- `sort?: string`\n  Sort order for customers. Prefix with '-' for descending order. Valid values: name, -name, email, -email, created, -created. Default: -created (newest first).\n\n- `starting_after?: string`\n  Cursor for forward pagination. Pass the ID of the last customer from the previous page.\n\n### Returns\n\n- `{ id: string; created: string; address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; }; email?: string; name?: string; phone?: string; }`\n  A billable customer. Represents the entity in your app that will be charged—typically a user, organization, or project.\n\n  - `id: string`\n  - `created: string`\n  - `address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; }`\n  - `email?: string`\n  - `name?: string`\n  - `phone?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\n// Automatically fetches more pages as needed.\nfor await (const customer of client.commerce.customers.list()) {\n  console.log(customer);\n}\n```",
  },
  {
    name: 'billing_portal',
    endpoint: '/v1/commerce/customers/{customer_id}/billing_portal',
    httpMethod: 'post',
    summary: 'Create Billing Portal Session',
    description:
      'Generates a URL to a hosted billing portal where the customer can view invoices, update payment methods, and manage billing details. Redirect the customer to the returned URL.',
    stainlessPath: '(resource) commerce.customers > (method) billing_portal',
    qualified: 'client.commerce.customers.billingPortal',
    params: ['customer_id: string;', 'return_url?: string;'],
    response: '{ url: string; }',
    markdown:
      "## billing_portal\n\n`client.commerce.customers.billingPortal(customer_id: string, return_url?: string): { url: string; }`\n\n**post** `/v1/commerce/customers/{customer_id}/billing_portal`\n\nGenerates a URL to a hosted billing portal where the customer can view invoices, update payment methods, and manage billing details. Redirect the customer to the returned URL.\n\n### Parameters\n\n- `customer_id: string`\n\n- `return_url?: string`\n  URL to redirect the customer to after they exit the billing portal\n\n### Returns\n\n- `{ url: string; }`\n  Response containing the billing portal URL\n\n  - `url: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst response = await client.commerce.customers.billingPortal('cus_1234567890');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/commerce/customers/{customer_id}',
    httpMethod: 'get',
    summary: 'Get Customer',
    description:
      'Retrieves a customer by ID. Returns the customer object including contact information and billing address.',
    stainlessPath: '(resource) commerce.customers > (method) get',
    qualified: 'client.commerce.customers.get',
    params: ['customer_id: string;'],
    response:
      '{ id: string; created: string; address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; }; email?: string; name?: string; phone?: string; }',
    markdown:
      "## get\n\n`client.commerce.customers.get(customer_id: string): { id: string; created: string; address?: customer_address; email?: string; name?: string; phone?: string; }`\n\n**get** `/v1/commerce/customers/{customer_id}`\n\nRetrieves a customer by ID. Returns the customer object including contact information and billing address.\n\n### Parameters\n\n- `customer_id: string`\n\n### Returns\n\n- `{ id: string; created: string; address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; }; email?: string; name?: string; phone?: string; }`\n  A billable customer with detailed subscription, invoice, and payment method information.\n\n  - `id: string`\n  - `created: string`\n  - `address?: { city?: string; country?: string; line1?: string; line2?: string; postal_code?: string; state?: string; }`\n  - `email?: string`\n  - `name?: string`\n  - `phone?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst customer = await client.commerce.customers.get('cus_1234567890');\n\nconsole.log(customer);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/commerce/products',
    httpMethod: 'post',
    summary: 'Create Product',
    description:
      'Creates a new subscription product with a recurring price. Common examples include Free, Pro, Business, or Teams tiers. After creating a product, attach resources to define which features or content customers on this product can access.',
    stainlessPath: '(resource) commerce.products > (method) create',
    qualified: 'client.commerce.products.create',
    params: [
      'name: string;',
      "variants: { name: string; id?: string; currency?: string; description?: string; is_default?: boolean; media?: { cdn_file_id: string; type: 'image' | 'video'; display_order?: number; }[]; metadata?: object; recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }; unit_amount?: number; }[];",
      'id?: string;',
      'description?: string;',
      "media?: { cdn_file_id: string; type: 'image' | 'video'; display_order?: number; }[];",
      'metadata?: object;',
      'subscription_group_id?: string;',
      'tags?: string[];',
    ],
    response:
      "{ id: string; active: boolean; created: string; name: string; subscription_group_id: string; variants: { id: string; active: boolean; created: string; name: string; currency?: currency; description?: string; media?: object[]; metadata?: object; recurring?: object; unit_amount?: number; }[]; description?: string; media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]; metadata?: object; resources?: { id: string; active: boolean; created: string; type: 'feature'; feature?: { id: string; metadata?: object; }; }[]; tags?: string[]; }",
    markdown:
      "## create\n\n`client.commerce.products.create(name: string, variants: { name: string; id?: string; currency?: string; description?: string; is_default?: boolean; media?: { cdn_file_id: string; type: 'image' | 'video'; display_order?: number; }[]; metadata?: object; recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }; unit_amount?: number; }[], id?: string, description?: string, media?: { cdn_file_id: string; type: 'image' | 'video'; display_order?: number; }[], metadata?: object, subscription_group_id?: string, tags?: string[]): { id: string; active: boolean; created: string; name: string; subscription_group_id: string; variants: variant[]; description?: string; media?: object[]; metadata?: object; resources?: object[]; tags?: string[]; }`\n\n**post** `/v1/commerce/products`\n\nCreates a new subscription product with a recurring price. Common examples include Free, Pro, Business, or Teams tiers. After creating a product, attach resources to define which features or content customers on this product can access.\n\n### Parameters\n\n- `name: string`\n  Display name for the product (e.g., Pro, Business, Teams)\n\n- `variants: { name: string; id?: string; currency?: string; description?: string; is_default?: boolean; media?: { cdn_file_id: string; type: 'image' | 'video'; display_order?: number; }[]; metadata?: object; recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }; unit_amount?: number; }[]`\n  Variants to create with the product. Each variant has its own pricing. At least one variant is required.\n\n- `id?: string`\n  Optional custom ID for the product. Must start with 'prod_'. If not provided, one will be generated.\n\n- `description?: string`\n  Detailed description of what the product includes\n\n- `media?: { cdn_file_id: string; type: 'image' | 'video'; display_order?: number; }[]`\n  Media attachments by CDN file ID\n\n- `metadata?: object`\n  Custom metadata for the product\n\n- `subscription_group_id?: string`\n  ID of the subscription group this product belongs to. Subscription groups define shared billing configuration.\n\n- `tags?: string[]`\n  Tags for categorizing and filtering products\n\n### Returns\n\n- `{ id: string; active: boolean; created: string; name: string; subscription_group_id: string; variants: { id: string; active: boolean; created: string; name: string; currency?: currency; description?: string; media?: object[]; metadata?: object; recurring?: object; unit_amount?: number; }[]; description?: string; media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]; metadata?: object; resources?: { id: string; active: boolean; created: string; type: 'feature'; feature?: { id: string; metadata?: object; }; }[]; tags?: string[]; }`\n  Response from creating a product, including the created variants.\n\n  - `id: string`\n  - `active: boolean`\n  - `created: string`\n  - `name: string`\n  - `subscription_group_id: string`\n  - `variants: { id: string; active: boolean; created: string; name: string; currency?: string; description?: string; media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]; metadata?: object; recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }; unit_amount?: number; }[]`\n  - `description?: string`\n  - `media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]`\n  - `metadata?: object`\n  - `resources?: { id: string; active: boolean; created: string; type: 'feature'; feature?: { id: string; metadata?: object; }; }[]`\n  - `tags?: string[]`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst product = await client.commerce.products.create({ name: 'x', variants: [{ name: 'x' }] });\n\nconsole.log(product);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/commerce/products/{product_id}',
    httpMethod: 'patch',
    summary: 'Update Product',
    description:
      'Updates an existing product. Use this to modify the product name, description, or active status. Pricing cannot be changed after creation—create a new product instead.',
    stainlessPath: '(resource) commerce.products > (method) update',
    qualified: 'client.commerce.products.update',
    params: [
      'product_id: string;',
      'active?: boolean;',
      'description?: string;',
      "media?: { cdn_file_id: string; type: 'image' | 'video'; display_order?: number; }[];",
      'metadata?: object;',
      'name?: string;',
      'subscription_group_id?: string;',
      'tags?: string[];',
    ],
    response:
      "{ id: string; active: boolean; created: string; name: string; subscription_group_id: string; description?: string; media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]; metadata?: object; resources?: { id: string; active: boolean; created: string; type: 'feature'; feature?: { id: string; metadata?: object; }; }[]; tags?: string[]; }",
    markdown:
      "## update\n\n`client.commerce.products.update(product_id: string, active?: boolean, description?: string, media?: { cdn_file_id: string; type: 'image' | 'video'; display_order?: number; }[], metadata?: object, name?: string, subscription_group_id?: string, tags?: string[]): { id: string; active: boolean; created: string; name: string; subscription_group_id: string; description?: string; media?: object[]; metadata?: object; resources?: object[]; tags?: string[]; }`\n\n**patch** `/v1/commerce/products/{product_id}`\n\nUpdates an existing product. Use this to modify the product name, description, or active status. Pricing cannot be changed after creation—create a new product instead.\n\n### Parameters\n\n- `product_id: string`\n\n- `active?: boolean`\n  Whether the product is available for new subscriptions\n\n- `description?: string`\n  Detailed description of what the product includes\n\n- `media?: { cdn_file_id: string; type: 'image' | 'video'; display_order?: number; }[]`\n  Replace all media attachments. Pass empty array to remove all media.\n\n- `metadata?: object`\n  Custom metadata for the product\n\n- `name?: string`\n  Display name for the product\n\n- `subscription_group_id?: string`\n  ID of the subscription group to move this product to. All products must belong to a subscription group.\n\n- `tags?: string[]`\n  Tags for categorizing and filtering products\n\n### Returns\n\n- `{ id: string; active: boolean; created: string; name: string; subscription_group_id: string; description?: string; media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]; metadata?: object; resources?: { id: string; active: boolean; created: string; type: 'feature'; feature?: { id: string; metadata?: object; }; }[]; tags?: string[]; }`\n  A product that customers can purchase. Products can be one-time purchases or recurring subscriptions. Attach resources to a product to grant features to customers.\n\n  - `id: string`\n  - `active: boolean`\n  - `created: string`\n  - `name: string`\n  - `subscription_group_id: string`\n  - `description?: string`\n  - `media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]`\n  - `metadata?: object`\n  - `resources?: { id: string; active: boolean; created: string; type: 'feature'; feature?: { id: string; metadata?: object; }; }[]`\n  - `tags?: string[]`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst product = await client.commerce.products.update('product_id');\n\nconsole.log(product);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/commerce/products',
    httpMethod: 'get',
    summary: 'List Products',
    description:
      'Retrieves a paginated list of subscription products. Products define the pricing and billing intervals for subscriptions. Each product can have resources attached that grant access to features or content.',
    stainlessPath: '(resource) commerce.products > (method) list',
    qualified: 'client.commerce.products.list',
    params: ['active?: boolean;', 'ending_before?: string;', 'limit?: number;', 'starting_after?: string;'],
    response:
      "{ id: string; active: boolean; created: string; name: string; subscription_group_id: string; description?: string; media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]; metadata?: object; resources?: { id: string; active: boolean; created: string; type: 'feature'; feature?: { id: string; metadata?: object; }; }[]; tags?: string[]; }",
    markdown:
      "## list\n\n`client.commerce.products.list(active?: boolean, ending_before?: string, limit?: number, starting_after?: string): { id: string; active: boolean; created: string; name: string; subscription_group_id: string; description?: string; media?: object[]; metadata?: object; resources?: object[]; tags?: string[]; }`\n\n**get** `/v1/commerce/products`\n\nRetrieves a paginated list of subscription products. Products define the pricing and billing intervals for subscriptions. Each product can have resources attached that grant access to features or content.\n\n### Parameters\n\n- `active?: boolean`\n  Filter by active status\n\n- `ending_before?: string`\n  Cursor for backward pagination. Pass the ID of the first product from the previous page.\n\n- `limit?: number`\n  Maximum number of products to return (1-100)\n\n- `starting_after?: string`\n  Cursor for forward pagination. Pass the ID of the last product from the previous page.\n\n### Returns\n\n- `{ id: string; active: boolean; created: string; name: string; subscription_group_id: string; description?: string; media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]; metadata?: object; resources?: { id: string; active: boolean; created: string; type: 'feature'; feature?: { id: string; metadata?: object; }; }[]; tags?: string[]; }`\n  A product that customers can purchase. Products can be one-time purchases or recurring subscriptions. Attach resources to a product to grant features to customers.\n\n  - `id: string`\n  - `active: boolean`\n  - `created: string`\n  - `name: string`\n  - `subscription_group_id: string`\n  - `description?: string`\n  - `media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]`\n  - `metadata?: object`\n  - `resources?: { id: string; active: boolean; created: string; type: 'feature'; feature?: { id: string; metadata?: object; }; }[]`\n  - `tags?: string[]`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\n// Automatically fetches more pages as needed.\nfor await (const product of client.commerce.products.list()) {\n  console.log(product);\n}\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/commerce/products/{product_id}',
    httpMethod: 'get',
    summary: 'Get Product',
    description:
      'Retrieves a product by ID. Returns the product object including pricing details and status.',
    stainlessPath: '(resource) commerce.products > (method) get',
    qualified: 'client.commerce.products.get',
    params: ['product_id: string;'],
    response:
      "{ id: string; active: boolean; created: string; name: string; subscription_group_id: string; description?: string; media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]; metadata?: object; resources?: { id: string; active: boolean; created: string; type: 'feature'; feature?: { id: string; metadata?: object; }; }[]; tags?: string[]; }",
    markdown:
      "## get\n\n`client.commerce.products.get(product_id: string): { id: string; active: boolean; created: string; name: string; subscription_group_id: string; description?: string; media?: object[]; metadata?: object; resources?: object[]; tags?: string[]; }`\n\n**get** `/v1/commerce/products/{product_id}`\n\nRetrieves a product by ID. Returns the product object including pricing details and status.\n\n### Parameters\n\n- `product_id: string`\n\n### Returns\n\n- `{ id: string; active: boolean; created: string; name: string; subscription_group_id: string; description?: string; media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]; metadata?: object; resources?: { id: string; active: boolean; created: string; type: 'feature'; feature?: { id: string; metadata?: object; }; }[]; tags?: string[]; }`\n  A product that customers can purchase. Products can be one-time purchases or recurring subscriptions. Attach resources to a product to grant features to customers.\n\n  - `id: string`\n  - `active: boolean`\n  - `created: string`\n  - `name: string`\n  - `subscription_group_id: string`\n  - `description?: string`\n  - `media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]`\n  - `metadata?: object`\n  - `resources?: { id: string; active: boolean; created: string; type: 'feature'; feature?: { id: string; metadata?: object; }; }[]`\n  - `tags?: string[]`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst product = await client.commerce.products.get('product_id');\n\nconsole.log(product);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/commerce/products/{product_id}/resources',
    httpMethod: 'get',
    summary: 'List Product Resources',
    description:
      'Retrieves all resources attached to a product. Resources define the entitlements customers gain access to when purchasing this product.',
    stainlessPath: '(resource) commerce.products.resources > (method) list',
    qualified: 'client.commerce.products.resources.list',
    params: [
      'product_id: string;',
      'active?: boolean;',
      'ending_before?: string;',
      'limit?: number;',
      'starting_after?: string;',
      "type?: 'feature';",
    ],
    response:
      "{ id: string; active: boolean; created: string; type: 'feature'; feature?: { id: string; metadata?: object; }; }",
    markdown:
      "## list\n\n`client.commerce.products.resources.list(product_id: string, active?: boolean, ending_before?: string, limit?: number, starting_after?: string, type?: 'feature'): { id: string; active: boolean; created: string; type: 'feature'; feature?: object; }`\n\n**get** `/v1/commerce/products/{product_id}/resources`\n\nRetrieves all resources attached to a product. Resources define the entitlements customers gain access to when purchasing this product.\n\n### Parameters\n\n- `product_id: string`\n\n- `active?: boolean`\n  Filter by active status\n\n- `ending_before?: string`\n  Cursor for backward pagination. Pass the ID of the first resource from the previous page.\n\n- `limit?: number`\n  Maximum number of resources to return (1-100)\n\n- `starting_after?: string`\n  Cursor for forward pagination. Pass the ID of the last resource from the previous page.\n\n- `type?: 'feature'`\n  Filter by resource type\n\n### Returns\n\n- `{ id: string; active: boolean; created: string; type: 'feature'; feature?: { id: string; metadata?: object; }; }`\n  A resource that can be attached to products to grant access to customers. Resources represent monetizable content or features in your app.\n\n  - `id: string`\n  - `active: boolean`\n  - `created: string`\n  - `type: 'feature'`\n  - `feature?: { id: string; metadata?: object; }`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\n// Automatically fetches more pages as needed.\nfor await (const resourceListResponse of client.commerce.products.resources.list('product_id')) {\n  console.log(resourceListResponse);\n}\n```",
  },
  {
    name: 'attach',
    endpoint: '/v1/commerce/products/{product_id}/resources',
    httpMethod: 'post',
    summary: 'Attach Resources to Product',
    description:
      "Attaches one or more resources to a product. Customers who purchase this product will gain access to the attached resources. Resource type is inferred from the ID prefix (e.g., 'feat_' for features).",
    stainlessPath: '(resource) commerce.products.resources > (method) attach',
    qualified: 'client.commerce.products.resources.attach',
    params: ['product_id: string;', 'resource_ids: string[];'],
    response:
      "{ data: { id: string; active: boolean; created: string; type: 'feature'; feature?: { id: string; metadata?: object; }; }[]; }",
    markdown:
      "## attach\n\n`client.commerce.products.resources.attach(product_id: string, resource_ids: string[]): { data: object[]; }`\n\n**post** `/v1/commerce/products/{product_id}/resources`\n\nAttaches one or more resources to a product. Customers who purchase this product will gain access to the attached resources. Resource type is inferred from the ID prefix (e.g., 'feat_' for features).\n\n### Parameters\n\n- `product_id: string`\n\n- `resource_ids: string[]`\n  Resource IDs to attach. Type is inferred from ID prefix (e.g., 'feat_' for features).\n\n### Returns\n\n- `{ data: { id: string; active: boolean; created: string; type: 'feature'; feature?: { id: string; metadata?: object; }; }[]; }`\n  Response containing attached resources\n\n  - `data: { id: string; active: boolean; created: string; type: 'feature'; feature?: { id: string; metadata?: object; }; }[]`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst response = await client.commerce.products.resources.attach('product_id', { resource_ids: ['string'] });\n\nconsole.log(response);\n```",
  },
  {
    name: 'detach',
    endpoint: '/v1/commerce/products/{product_id}/resources',
    httpMethod: 'delete',
    summary: 'Detach Resources from Product',
    description:
      'Detaches one or more resources from a product. Customers will lose access to these resources when they purchase this product.',
    stainlessPath: '(resource) commerce.products.resources > (method) detach',
    qualified: 'client.commerce.products.resources.detach',
    params: ['product_id: string;', 'resource_ids: string[];'],
    markdown:
      "## detach\n\n`client.commerce.products.resources.detach(product_id: string, resource_ids: string[]): void`\n\n**delete** `/v1/commerce/products/{product_id}/resources`\n\nDetaches one or more resources from a product. Customers will lose access to these resources when they purchase this product.\n\n### Parameters\n\n- `product_id: string`\n\n- `resource_ids: string[]`\n  Resource IDs to detach from the product.\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nawait client.commerce.products.resources.detach('product_id', { resource_ids: ['string'] })\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/commerce/products/{product_id}/variants',
    httpMethod: 'post',
    summary: 'Create Product Variant',
    description:
      'Creates a new variant with pricing for a product. Use variants to offer multiple pricing tiers or configurations (e.g., Basic at $10/month, Pro at $25/month). A Stripe Price is automatically created.',
    stainlessPath: '(resource) commerce.products.variants > (method) create',
    qualified: 'client.commerce.products.variants.create',
    params: [
      'product_id: string;',
      'name: string;',
      'id?: string;',
      'currency?: string;',
      'description?: string;',
      "media?: { cdn_file_id: string; type: 'image' | 'video'; display_order?: number; }[];",
      'metadata?: object;',
      "recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; };",
      'unit_amount?: number;',
    ],
    response:
      "{ id: string; active: boolean; created: string; name: string; currency?: string; description?: string; media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]; metadata?: object; recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }; unit_amount?: number; }",
    markdown:
      "## create\n\n`client.commerce.products.variants.create(product_id: string, name: string, id?: string, currency?: string, description?: string, media?: { cdn_file_id: string; type: 'image' | 'video'; display_order?: number; }[], metadata?: object, recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }, unit_amount?: number): { id: string; active: boolean; created: string; name: string; currency?: currency; description?: string; media?: object[]; metadata?: object; recurring?: object; unit_amount?: number; }`\n\n**post** `/v1/commerce/products/{product_id}/variants`\n\nCreates a new variant with pricing for a product. Use variants to offer multiple pricing tiers or configurations (e.g., Basic at $10/month, Pro at $25/month). A Stripe Price is automatically created.\n\n### Parameters\n\n- `product_id: string`\n\n- `name: string`\n  Display name for the variant (e.g., Basic, Standard, Premium)\n\n- `id?: string`\n  Optional custom ID for the variant. Must start with 'var_'. If not provided, one will be generated.\n\n- `currency?: string`\n  Three-letter ISO currency code.\n\nSupported currencies: USD, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BIF, BMD, BND, BOB, BRL, BSD, BWP, BYN, BZD, CAD, CDF, CHF, CLP, CNY, COP, CRC, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ETB, EUR, FJD, FKP, GBP, GEL, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HTG, HUF, IDR, ILS, INR, ISK, JMD, JPY, KES, KGS, KHR, KMF, KRW, KYD, KZT, LAK, LBP, LKR, LRD, LSL, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SEK, SGD, SHP, SLE, SOS, SRD, STD, SZL, THB, TJS, TOP, TRY, TTD, TWD, TZS, UAH, UGX, UYU, UZS, VND, VUV, WST, XAF, XCD, XCG, XOF, XPF, YER, ZAR, ZMW.\n\n- `description?: string`\n  Detailed description of what this variant includes\n\n- `media?: { cdn_file_id: string; type: 'image' | 'video'; display_order?: number; }[]`\n  Media attachments by CDN file ID\n\n- `metadata?: object`\n  Custom metadata for the variant\n\n- `recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }`\n  Recurring billing configuration for subscription variants\n  - `interval: 'day' | 'week' | 'month' | 'year'`\n    Billing frequency: day, week, month, or year\n  - `interval_count?: number`\n    Number of intervals between billings\n\n- `unit_amount?: number`\n  Price amount in the smallest currency unit (e.g., cents). Use 0 for free variants.\n\n### Returns\n\n- `{ id: string; active: boolean; created: string; name: string; currency?: string; description?: string; media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]; metadata?: object; recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }; unit_amount?: number; }`\n  A product variant representing a specific tier or configuration. Each variant has its own pricing. Variants allow a single product to have multiple pricing options (e.g., Basic, Pro, Enterprise tiers).\n\n  - `id: string`\n  - `active: boolean`\n  - `created: string`\n  - `name: string`\n  - `currency?: string`\n  - `description?: string`\n  - `media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]`\n  - `metadata?: object`\n  - `recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }`\n  - `unit_amount?: number`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst variant = await client.commerce.products.variants.create('product_id', { name: 'x' });\n\nconsole.log(variant);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/commerce/products/{product_id}/variants/{variant_id}',
    httpMethod: 'patch',
    summary: 'Update Product Variant',
    description:
      'Updates an existing variant. Use this to modify the name, description, or active status. Pricing cannot be changed after creation—create a new variant instead.',
    stainlessPath: '(resource) commerce.products.variants > (method) update',
    qualified: 'client.commerce.products.variants.update',
    params: [
      'product_id: string;',
      'variant_id: string;',
      'active?: boolean;',
      'description?: string;',
      "media?: { cdn_file_id: string; type: 'image' | 'video'; display_order?: number; }[];",
      'metadata?: object;',
      'name?: string;',
    ],
    response:
      "{ id: string; active: boolean; created: string; name: string; currency?: string; description?: string; media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]; metadata?: object; recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }; unit_amount?: number; }",
    markdown:
      "## update\n\n`client.commerce.products.variants.update(product_id: string, variant_id: string, active?: boolean, description?: string, media?: { cdn_file_id: string; type: 'image' | 'video'; display_order?: number; }[], metadata?: object, name?: string): { id: string; active: boolean; created: string; name: string; currency?: currency; description?: string; media?: object[]; metadata?: object; recurring?: object; unit_amount?: number; }`\n\n**patch** `/v1/commerce/products/{product_id}/variants/{variant_id}`\n\nUpdates an existing variant. Use this to modify the name, description, or active status. Pricing cannot be changed after creation—create a new variant instead.\n\n### Parameters\n\n- `product_id: string`\n\n- `variant_id: string`\n\n- `active?: boolean`\n  Whether the variant is available for new purchases\n\n- `description?: string`\n  Detailed description of what this variant includes\n\n- `media?: { cdn_file_id: string; type: 'image' | 'video'; display_order?: number; }[]`\n  Replace all media attachments. Pass empty array to remove all media.\n\n- `metadata?: object`\n  Custom metadata for the variant\n\n- `name?: string`\n  Display name for the variant\n\n### Returns\n\n- `{ id: string; active: boolean; created: string; name: string; currency?: string; description?: string; media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]; metadata?: object; recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }; unit_amount?: number; }`\n  A product variant representing a specific tier or configuration. Each variant has its own pricing. Variants allow a single product to have multiple pricing options (e.g., Basic, Pro, Enterprise tiers).\n\n  - `id: string`\n  - `active: boolean`\n  - `created: string`\n  - `name: string`\n  - `currency?: string`\n  - `description?: string`\n  - `media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]`\n  - `metadata?: object`\n  - `recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }`\n  - `unit_amount?: number`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst variant = await client.commerce.products.variants.update('variant_id', { product_id: 'product_id' });\n\nconsole.log(variant);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/commerce/products/{product_id}/variants',
    httpMethod: 'get',
    summary: 'List Product Variants',
    description:
      'Retrieves all variants for a product. Variants represent different pricing tiers or configurations (e.g., Basic, Pro, Enterprise) within a single product.',
    stainlessPath: '(resource) commerce.products.variants > (method) list',
    qualified: 'client.commerce.products.variants.list',
    params: [
      'product_id: string;',
      'active?: boolean;',
      'ending_before?: string;',
      'limit?: number;',
      'starting_after?: string;',
    ],
    response:
      "{ id: string; active: boolean; created: string; name: string; currency?: string; description?: string; media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]; metadata?: object; recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }; unit_amount?: number; }",
    markdown:
      "## list\n\n`client.commerce.products.variants.list(product_id: string, active?: boolean, ending_before?: string, limit?: number, starting_after?: string): { id: string; active: boolean; created: string; name: string; currency?: currency; description?: string; media?: object[]; metadata?: object; recurring?: object; unit_amount?: number; }`\n\n**get** `/v1/commerce/products/{product_id}/variants`\n\nRetrieves all variants for a product. Variants represent different pricing tiers or configurations (e.g., Basic, Pro, Enterprise) within a single product.\n\n### Parameters\n\n- `product_id: string`\n\n- `active?: boolean`\n  Filter by active status\n\n- `ending_before?: string`\n  Cursor for backward pagination. Pass the ID of the first variant from the previous page.\n\n- `limit?: number`\n  Maximum number of variants to return (1-100)\n\n- `starting_after?: string`\n  Cursor for forward pagination. Pass the ID of the last variant from the previous page.\n\n### Returns\n\n- `{ id: string; active: boolean; created: string; name: string; currency?: string; description?: string; media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]; metadata?: object; recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }; unit_amount?: number; }`\n  A product variant representing a specific tier or configuration. Each variant has its own pricing. Variants allow a single product to have multiple pricing options (e.g., Basic, Pro, Enterprise tiers).\n\n  - `id: string`\n  - `active: boolean`\n  - `created: string`\n  - `name: string`\n  - `currency?: string`\n  - `description?: string`\n  - `media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]`\n  - `metadata?: object`\n  - `recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }`\n  - `unit_amount?: number`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\n// Automatically fetches more pages as needed.\nfor await (const variant of client.commerce.products.variants.list('product_id')) {\n  console.log(variant);\n}\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/commerce/products/{product_id}/variants/{variant_id}',
    httpMethod: 'get',
    summary: 'Get Product Variant',
    description:
      'Retrieves a variant by ID. Returns the variant object including pricing details and status.',
    stainlessPath: '(resource) commerce.products.variants > (method) get',
    qualified: 'client.commerce.products.variants.get',
    params: ['product_id: string;', 'variant_id: string;'],
    response:
      "{ id: string; active: boolean; created: string; name: string; currency?: string; description?: string; media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]; metadata?: object; recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }; unit_amount?: number; }",
    markdown:
      "## get\n\n`client.commerce.products.variants.get(product_id: string, variant_id: string): { id: string; active: boolean; created: string; name: string; currency?: currency; description?: string; media?: object[]; metadata?: object; recurring?: object; unit_amount?: number; }`\n\n**get** `/v1/commerce/products/{product_id}/variants/{variant_id}`\n\nRetrieves a variant by ID. Returns the variant object including pricing details and status.\n\n### Parameters\n\n- `product_id: string`\n\n- `variant_id: string`\n\n### Returns\n\n- `{ id: string; active: boolean; created: string; name: string; currency?: string; description?: string; media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]; metadata?: object; recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }; unit_amount?: number; }`\n  A product variant representing a specific tier or configuration. Each variant has its own pricing. Variants allow a single product to have multiple pricing options (e.g., Basic, Pro, Enterprise tiers).\n\n  - `id: string`\n  - `active: boolean`\n  - `created: string`\n  - `name: string`\n  - `currency?: string`\n  - `description?: string`\n  - `media?: { id: string; display_order: number; type: 'image' | 'video'; url: string; file_size?: number; filename?: string; thumbnail_url?: string; }[]`\n  - `metadata?: object`\n  - `recurring?: { interval: 'day' | 'week' | 'month' | 'year'; interval_count?: number; }`\n  - `unit_amount?: number`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst variant = await client.commerce.products.variants.get('variant_id', { product_id: 'product_id' });\n\nconsole.log(variant);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/commerce/coupons',
    httpMethod: 'post',
    summary: 'Create Coupon',
    description:
      'Creates a discount coupon with a promo code. Coupons can offer percentage or fixed-amount discounts and can be limited by redemption count or expiration date. Customers can apply coupons during checkout.',
    stainlessPath: '(resource) commerce.coupons > (method) create',
    qualified: 'client.commerce.coupons.create',
    params: [
      'code: string;',
      'id?: string;',
      'amount_off?: number;',
      'currency?: string;',
      "duration?: 'once' | 'repeating' | 'forever';",
      'duration_in_months?: number;',
      'max_redemptions?: number;',
      'name?: string;',
      'percent_off?: number;',
      'redeem_by?: string;',
    ],
    response:
      "{ id: string; active: boolean; code: string; created: string; duration: 'once' | 'repeating' | 'forever'; times_redeemed: number; amount_off?: number; currency?: string; duration_in_months?: number; max_redemptions?: number; name?: string; percent_off?: number; redeem_by?: string; }",
    markdown:
      "## create\n\n`client.commerce.coupons.create(code: string, id?: string, amount_off?: number, currency?: string, duration?: 'once' | 'repeating' | 'forever', duration_in_months?: number, max_redemptions?: number, name?: string, percent_off?: number, redeem_by?: string): { id: string; active: boolean; code: string; created: string; duration: 'once' | 'repeating' | 'forever'; times_redeemed: number; amount_off?: number; currency?: string; duration_in_months?: number; max_redemptions?: number; name?: string; percent_off?: number; redeem_by?: string; }`\n\n**post** `/v1/commerce/coupons`\n\nCreates a discount coupon with a promo code. Coupons can offer percentage or fixed-amount discounts and can be limited by redemption count or expiration date. Customers can apply coupons during checkout.\n\n### Parameters\n\n- `code: string`\n  The promo code customers will enter to apply the discount\n\n- `id?: string`\n  Optional custom ID for the coupon. Must start with 'coupon_'. If not provided, one will be generated.\n\n- `amount_off?: number`\n  Fixed discount in the smallest currency unit (e.g., cents). Mutually exclusive with percent_off.\n\n- `currency?: string`\n  Three-letter ISO currency code.\n\nSupported currencies: USD, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BIF, BMD, BND, BOB, BRL, BSD, BWP, BYN, BZD, CAD, CDF, CHF, CLP, CNY, COP, CRC, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ETB, EUR, FJD, FKP, GBP, GEL, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HTG, HUF, IDR, ILS, INR, ISK, JMD, JPY, KES, KGS, KHR, KMF, KRW, KYD, KZT, LAK, LBP, LKR, LRD, LSL, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SEK, SGD, SHP, SLE, SOS, SRD, STD, SZL, THB, TJS, TOP, TRY, TTD, TWD, TZS, UAH, UGX, UYU, UZS, VND, VUV, WST, XAF, XCD, XCG, XOF, XPF, YER, ZAR, ZMW.\n\n- `duration?: 'once' | 'repeating' | 'forever'`\n  How long the discount applies: once (first payment only), repeating (for duration_in_months), or forever\n\n- `duration_in_months?: number`\n  Number of months the discount applies when duration is 'repeating'\n\n- `max_redemptions?: number`\n  Maximum number of times this coupon can be redeemed\n\n- `name?: string`\n  Display name for the coupon (shown to customers)\n\n- `percent_off?: number`\n  Percentage discount (1-100). Mutually exclusive with amount_off.\n\n- `redeem_by?: string`\n  Expiration date after which the coupon can no longer be redeemed\n\n### Returns\n\n- `{ id: string; active: boolean; code: string; created: string; duration: 'once' | 'repeating' | 'forever'; times_redeemed: number; amount_off?: number; currency?: string; duration_in_months?: number; max_redemptions?: number; name?: string; percent_off?: number; redeem_by?: string; }`\n  A discount coupon that customers can apply during checkout using a promo code\n\n  - `id: string`\n  - `active: boolean`\n  - `code: string`\n  - `created: string`\n  - `duration: 'once' | 'repeating' | 'forever'`\n  - `times_redeemed: number`\n  - `amount_off?: number`\n  - `currency?: string`\n  - `duration_in_months?: number`\n  - `max_redemptions?: number`\n  - `name?: string`\n  - `percent_off?: number`\n  - `redeem_by?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst coupon = await client.commerce.coupons.create({ code: 'LAUNCH20' });\n\nconsole.log(coupon);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/commerce/coupons/{coupon_id}',
    httpMethod: 'patch',
    summary: 'Update Coupon',
    description:
      'Updates an existing coupon. Use this to modify the display name or deactivate the coupon. Discount amounts and codes cannot be changed after creation.',
    stainlessPath: '(resource) commerce.coupons > (method) update',
    qualified: 'client.commerce.coupons.update',
    params: ['coupon_id: string;', 'active?: boolean;', 'name?: string;'],
    response:
      "{ id: string; active: boolean; code: string; created: string; duration: 'once' | 'repeating' | 'forever'; times_redeemed: number; amount_off?: number; currency?: string; duration_in_months?: number; max_redemptions?: number; name?: string; percent_off?: number; redeem_by?: string; }",
    markdown:
      "## update\n\n`client.commerce.coupons.update(coupon_id: string, active?: boolean, name?: string): { id: string; active: boolean; code: string; created: string; duration: 'once' | 'repeating' | 'forever'; times_redeemed: number; amount_off?: number; currency?: string; duration_in_months?: number; max_redemptions?: number; name?: string; percent_off?: number; redeem_by?: string; }`\n\n**patch** `/v1/commerce/coupons/{coupon_id}`\n\nUpdates an existing coupon. Use this to modify the display name or deactivate the coupon. Discount amounts and codes cannot be changed after creation.\n\n### Parameters\n\n- `coupon_id: string`\n\n- `active?: boolean`\n  Whether the coupon is active and can be redeemed\n\n- `name?: string`\n  Display name for the coupon\n\n### Returns\n\n- `{ id: string; active: boolean; code: string; created: string; duration: 'once' | 'repeating' | 'forever'; times_redeemed: number; amount_off?: number; currency?: string; duration_in_months?: number; max_redemptions?: number; name?: string; percent_off?: number; redeem_by?: string; }`\n  A discount coupon that customers can apply during checkout using a promo code\n\n  - `id: string`\n  - `active: boolean`\n  - `code: string`\n  - `created: string`\n  - `duration: 'once' | 'repeating' | 'forever'`\n  - `times_redeemed: number`\n  - `amount_off?: number`\n  - `currency?: string`\n  - `duration_in_months?: number`\n  - `max_redemptions?: number`\n  - `name?: string`\n  - `percent_off?: number`\n  - `redeem_by?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst coupon = await client.commerce.coupons.update('coupon_1234567890');\n\nconsole.log(coupon);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/commerce/coupons',
    httpMethod: 'get',
    summary: 'List Coupons',
    description:
      'Retrieves a paginated list of all coupons. Coupons provide discounts that customers can apply during checkout using a promo code.',
    stainlessPath: '(resource) commerce.coupons > (method) list',
    qualified: 'client.commerce.coupons.list',
    params: ['active?: boolean;', 'ending_before?: string;', 'limit?: number;', 'starting_after?: string;'],
    response:
      "{ id: string; active: boolean; code: string; created: string; duration: 'once' | 'repeating' | 'forever'; times_redeemed: number; amount_off?: number; currency?: string; duration_in_months?: number; max_redemptions?: number; name?: string; percent_off?: number; redeem_by?: string; }",
    markdown:
      "## list\n\n`client.commerce.coupons.list(active?: boolean, ending_before?: string, limit?: number, starting_after?: string): { id: string; active: boolean; code: string; created: string; duration: 'once' | 'repeating' | 'forever'; times_redeemed: number; amount_off?: number; currency?: string; duration_in_months?: number; max_redemptions?: number; name?: string; percent_off?: number; redeem_by?: string; }`\n\n**get** `/v1/commerce/coupons`\n\nRetrieves a paginated list of all coupons. Coupons provide discounts that customers can apply during checkout using a promo code.\n\n### Parameters\n\n- `active?: boolean`\n  Filter by active status\n\n- `ending_before?: string`\n  Cursor for backward pagination. Pass the ID of the first coupon from the previous page.\n\n- `limit?: number`\n  Maximum number of coupons to return (1-100)\n\n- `starting_after?: string`\n  Cursor for forward pagination. Pass the ID of the last coupon from the previous page.\n\n### Returns\n\n- `{ id: string; active: boolean; code: string; created: string; duration: 'once' | 'repeating' | 'forever'; times_redeemed: number; amount_off?: number; currency?: string; duration_in_months?: number; max_redemptions?: number; name?: string; percent_off?: number; redeem_by?: string; }`\n  A discount coupon that customers can apply during checkout using a promo code\n\n  - `id: string`\n  - `active: boolean`\n  - `code: string`\n  - `created: string`\n  - `duration: 'once' | 'repeating' | 'forever'`\n  - `times_redeemed: number`\n  - `amount_off?: number`\n  - `currency?: string`\n  - `duration_in_months?: number`\n  - `max_redemptions?: number`\n  - `name?: string`\n  - `percent_off?: number`\n  - `redeem_by?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\n// Automatically fetches more pages as needed.\nfor await (const coupon of client.commerce.coupons.list()) {\n  console.log(coupon);\n}\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/commerce/coupons/{coupon_id}',
    httpMethod: 'get',
    summary: 'Get Coupon',
    description:
      'Retrieves a coupon by ID. Returns the coupon object including discount details and redemption statistics.',
    stainlessPath: '(resource) commerce.coupons > (method) get',
    qualified: 'client.commerce.coupons.get',
    params: ['coupon_id: string;'],
    response:
      "{ id: string; active: boolean; code: string; created: string; duration: 'once' | 'repeating' | 'forever'; times_redeemed: number; amount_off?: number; currency?: string; duration_in_months?: number; max_redemptions?: number; name?: string; percent_off?: number; redeem_by?: string; }",
    markdown:
      "## get\n\n`client.commerce.coupons.get(coupon_id: string): { id: string; active: boolean; code: string; created: string; duration: 'once' | 'repeating' | 'forever'; times_redeemed: number; amount_off?: number; currency?: string; duration_in_months?: number; max_redemptions?: number; name?: string; percent_off?: number; redeem_by?: string; }`\n\n**get** `/v1/commerce/coupons/{coupon_id}`\n\nRetrieves a coupon by ID. Returns the coupon object including discount details and redemption statistics.\n\n### Parameters\n\n- `coupon_id: string`\n\n### Returns\n\n- `{ id: string; active: boolean; code: string; created: string; duration: 'once' | 'repeating' | 'forever'; times_redeemed: number; amount_off?: number; currency?: string; duration_in_months?: number; max_redemptions?: number; name?: string; percent_off?: number; redeem_by?: string; }`\n  A discount coupon that customers can apply during checkout using a promo code\n\n  - `id: string`\n  - `active: boolean`\n  - `code: string`\n  - `created: string`\n  - `duration: 'once' | 'repeating' | 'forever'`\n  - `times_redeemed: number`\n  - `amount_off?: number`\n  - `currency?: string`\n  - `duration_in_months?: number`\n  - `max_redemptions?: number`\n  - `name?: string`\n  - `percent_off?: number`\n  - `redeem_by?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst coupon = await client.commerce.coupons.get('coupon_1234567890');\n\nconsole.log(coupon);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/commerce/features',
    httpMethod: 'post',
    summary: 'Create Feature',
    description:
      'Creates a new feature with a lookup key. Features can be attached to multiple products to grant customers access to the same entitlement across different subscription tiers.',
    stainlessPath: '(resource) commerce.features > (method) create',
    qualified: 'client.commerce.features.create',
    params: ['name: string;', 'id?: string;', 'description?: string;', 'metadata?: object;'],
    response:
      '{ id: string; active: boolean; created: string; description: string; name: string; metadata?: object; }',
    markdown:
      "## create\n\n`client.commerce.features.create(name: string, id?: string, description?: string, metadata?: object): { id: string; active: boolean; created: string; description: string; name: string; metadata?: object; }`\n\n**post** `/v1/commerce/features`\n\nCreates a new feature with a lookup key. Features can be attached to multiple products to grant customers access to the same entitlement across different subscription tiers.\n\n### Parameters\n\n- `name: string`\n  Human-readable name for the feature\n\n- `id?: string`\n  Optional custom ID for the feature. Must start with 'feat_'. If not provided, one will be generated.\n\n- `description?: string`\n  Description of what this feature provides\n\n- `metadata?: object`\n  Custom metadata for the feature\n\n### Returns\n\n- `{ id: string; active: boolean; created: string; description: string; name: string; metadata?: object; }`\n  A feature that can be attached to multiple products. Features represent monetizable content or functionality in your app.\n\n  - `id: string`\n  - `active: boolean`\n  - `created: string`\n  - `description: string`\n  - `name: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst feature = await client.commerce.features.create({ name: 'x' });\n\nconsole.log(feature);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/commerce/features/{feature_id}',
    httpMethod: 'patch',
    summary: 'Update Feature',
    description: 'Updates an existing feature. Use this to modify metadata or active status.',
    stainlessPath: '(resource) commerce.features > (method) update',
    qualified: 'client.commerce.features.update',
    params: [
      'feature_id: string;',
      'active?: boolean;',
      'description?: string;',
      'metadata?: object;',
      'name?: string;',
    ],
    response:
      '{ id: string; active: boolean; created: string; description: string; name: string; metadata?: object; }',
    markdown:
      "## update\n\n`client.commerce.features.update(feature_id: string, active?: boolean, description?: string, metadata?: object, name?: string): { id: string; active: boolean; created: string; description: string; name: string; metadata?: object; }`\n\n**patch** `/v1/commerce/features/{feature_id}`\n\nUpdates an existing feature. Use this to modify metadata or active status.\n\n### Parameters\n\n- `feature_id: string`\n\n- `active?: boolean`\n  Whether the feature is active\n\n- `description?: string`\n  Description of what this feature provides\n\n- `metadata?: object`\n  Custom metadata for the feature\n\n- `name?: string`\n  Human-readable name for the feature\n\n### Returns\n\n- `{ id: string; active: boolean; created: string; description: string; name: string; metadata?: object; }`\n  A feature that can be attached to multiple products. Features represent monetizable content or functionality in your app.\n\n  - `id: string`\n  - `active: boolean`\n  - `created: string`\n  - `description: string`\n  - `name: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst feature = await client.commerce.features.update('feature_id');\n\nconsole.log(feature);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/commerce/features',
    httpMethod: 'get',
    summary: 'List Features',
    description:
      'Retrieves a paginated list of features. Features are reusable entitlements that can be attached to multiple products.',
    stainlessPath: '(resource) commerce.features > (method) list',
    qualified: 'client.commerce.features.list',
    params: ['active?: boolean;', 'ending_before?: string;', 'limit?: number;', 'starting_after?: string;'],
    response:
      '{ id: string; active: boolean; created: string; description: string; name: string; metadata?: object; }',
    markdown:
      "## list\n\n`client.commerce.features.list(active?: boolean, ending_before?: string, limit?: number, starting_after?: string): { id: string; active: boolean; created: string; description: string; name: string; metadata?: object; }`\n\n**get** `/v1/commerce/features`\n\nRetrieves a paginated list of features. Features are reusable entitlements that can be attached to multiple products.\n\n### Parameters\n\n- `active?: boolean`\n  Filter by active status\n\n- `ending_before?: string`\n  Cursor for backward pagination. Pass the ID of the first feature from the previous page.\n\n- `limit?: number`\n  Maximum number of features to return (1-100)\n\n- `starting_after?: string`\n  Cursor for forward pagination. Pass the ID of the last feature from the previous page.\n\n### Returns\n\n- `{ id: string; active: boolean; created: string; description: string; name: string; metadata?: object; }`\n  A feature that can be attached to multiple products. Features represent monetizable content or functionality in your app.\n\n  - `id: string`\n  - `active: boolean`\n  - `created: string`\n  - `description: string`\n  - `name: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\n// Automatically fetches more pages as needed.\nfor await (const feature of client.commerce.features.list()) {\n  console.log(feature);\n}\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/commerce/features/{feature_id}',
    httpMethod: 'get',
    summary: 'Get Feature',
    description: 'Retrieves a feature by ID.',
    stainlessPath: '(resource) commerce.features > (method) get',
    qualified: 'client.commerce.features.get',
    params: ['feature_id: string;'],
    response:
      '{ id: string; active: boolean; created: string; description: string; name: string; metadata?: object; }',
    markdown:
      "## get\n\n`client.commerce.features.get(feature_id: string): { id: string; active: boolean; created: string; description: string; name: string; metadata?: object; }`\n\n**get** `/v1/commerce/features/{feature_id}`\n\nRetrieves a feature by ID.\n\n### Parameters\n\n- `feature_id: string`\n\n### Returns\n\n- `{ id: string; active: boolean; created: string; description: string; name: string; metadata?: object; }`\n  A feature that can be attached to multiple products. Features represent monetizable content or functionality in your app.\n\n  - `id: string`\n  - `active: boolean`\n  - `created: string`\n  - `description: string`\n  - `name: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst feature = await client.commerce.features.get('feature_id');\n\nconsole.log(feature);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/content/collections',
    httpMethod: 'post',
    summary: 'Create Content Collection',
    description:
      "Creates a new content collection with optional initial fields. Content collections define the schema for entries. Example collections: 'Blog Post', 'Product', 'Author'.",
    stainlessPath: '(resource) content.collections > (method) create',
    qualified: 'client.content.collections.create',
    params: [
      'api_id: string;',
      'name: string;',
      'id?: string;',
      'description?: string;',
      'fields?: { api_id: string; name: string; type: string; id?: string; description?: string; display_order?: number; localized?: boolean; validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }; }[];',
    ],
    response:
      '{ id: string; api_id: string; created: string; locked: boolean; name: string; updated: string; version: number; description?: string; fields?: { id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: object; }[]; }',
    markdown:
      "## create\n\n`client.content.collections.create(api_id: string, name: string, id?: string, description?: string, fields?: { api_id: string; name: string; type: string; id?: string; description?: string; display_order?: number; localized?: boolean; validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }; }[]): { id: string; api_id: string; created: string; locked: boolean; name: string; updated: string; version: number; description?: string; fields?: field[]; }`\n\n**post** `/v1/content/collections`\n\nCreates a new content collection with optional initial fields. Content collections define the schema for entries. Example collections: 'Blog Post', 'Product', 'Author'.\n\n### Parameters\n\n- `api_id: string`\n  API identifier for the collection (camelCase, e.g., 'blogPost')\n\n- `name: string`\n  Display name for the collection\n\n- `id?: string`\n  Optional custom ID for the collection. Must start with 'cm_'. If not provided, one will be generated.\n\n- `description?: string`\n  Description of the collection\n\n- `fields?: { api_id: string; name: string; type: string; id?: string; description?: string; display_order?: number; localized?: boolean; validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }; }[]`\n  Initial fields to create with the collection\n\n### Returns\n\n- `{ id: string; api_id: string; created: string; locked: boolean; name: string; updated: string; version: number; description?: string; fields?: { id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: object; }[]; }`\n  A content collection defines the schema/structure for content entries. Each collection has fields that define what data entries can contain.\n\n  - `id: string`\n  - `api_id: string`\n  - `created: string`\n  - `locked: boolean`\n  - `name: string`\n  - `updated: string`\n  - `version: number`\n  - `description?: string`\n  - `fields?: { id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }; }[]`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst collection = await client.content.collections.create({ api_id: 'nXI', name: 'name' });\n\nconsole.log(collection);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/content/collections/{collection_id}',
    httpMethod: 'patch',
    summary: 'Update Content Collection',
    description:
      'Updates an existing content collection. Use this to modify the name, description, or lock status. The api_id cannot be changed after creation.',
    stainlessPath: '(resource) content.collections > (method) update',
    qualified: 'client.content.collections.update',
    params: ['collection_id: string;', 'description?: string;', 'locked?: boolean;', 'name?: string;'],
    response:
      '{ id: string; api_id: string; created: string; locked: boolean; name: string; updated: string; version: number; description?: string; fields?: { id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: object; }[]; }',
    markdown:
      "## update\n\n`client.content.collections.update(collection_id: string, description?: string, locked?: boolean, name?: string): { id: string; api_id: string; created: string; locked: boolean; name: string; updated: string; version: number; description?: string; fields?: field[]; }`\n\n**patch** `/v1/content/collections/{collection_id}`\n\nUpdates an existing content collection. Use this to modify the name, description, or lock status. The api_id cannot be changed after creation.\n\n### Parameters\n\n- `collection_id: string`\n\n- `description?: string`\n  Description of the collection\n\n- `locked?: boolean`\n  Lock the collection to prevent field modifications\n\n- `name?: string`\n  Display name for the collection\n\n### Returns\n\n- `{ id: string; api_id: string; created: string; locked: boolean; name: string; updated: string; version: number; description?: string; fields?: { id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: object; }[]; }`\n  A content collection defines the schema/structure for content entries. Each collection has fields that define what data entries can contain.\n\n  - `id: string`\n  - `api_id: string`\n  - `created: string`\n  - `locked: boolean`\n  - `name: string`\n  - `updated: string`\n  - `version: number`\n  - `description?: string`\n  - `fields?: { id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }; }[]`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst collection = await client.content.collections.update('collection_id');\n\nconsole.log(collection);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/content/collections',
    httpMethod: 'get',
    summary: 'List Content Collections',
    description:
      'Retrieves a paginated list of content collections. Content collections define the schema/structure for content entries.',
    stainlessPath: '(resource) content.collections > (method) list',
    qualified: 'client.content.collections.list',
    params: ['ending_before?: string;', 'limit?: number;', 'starting_after?: string;'],
    response:
      '{ id: string; api_id: string; created: string; locked: boolean; name: string; updated: string; version: number; description?: string; fields?: { id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: object; }[]; }',
    markdown:
      "## list\n\n`client.content.collections.list(ending_before?: string, limit?: number, starting_after?: string): { id: string; api_id: string; created: string; locked: boolean; name: string; updated: string; version: number; description?: string; fields?: field[]; }`\n\n**get** `/v1/content/collections`\n\nRetrieves a paginated list of content collections. Content collections define the schema/structure for content entries.\n\n### Parameters\n\n- `ending_before?: string`\n  Cursor for backward pagination. Pass the ID of the first collection from the previous page.\n\n- `limit?: number`\n  Maximum number of collections to return (1-100)\n\n- `starting_after?: string`\n  Cursor for forward pagination. Pass the ID of the last collection from the previous page.\n\n### Returns\n\n- `{ id: string; api_id: string; created: string; locked: boolean; name: string; updated: string; version: number; description?: string; fields?: { id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: object; }[]; }`\n  A content collection defines the schema/structure for content entries. Each collection has fields that define what data entries can contain.\n\n  - `id: string`\n  - `api_id: string`\n  - `created: string`\n  - `locked: boolean`\n  - `name: string`\n  - `updated: string`\n  - `version: number`\n  - `description?: string`\n  - `fields?: { id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }; }[]`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\n// Automatically fetches more pages as needed.\nfor await (const collection of client.content.collections.list()) {\n  console.log(collection);\n}\n```",
  },
  {
    name: 'archive',
    endpoint: '/v1/content/collections/{collection_id}',
    httpMethod: 'delete',
    summary: 'Archive Content Collection',
    description:
      'Archives a content collection, hiding it from the API. Existing entries are preserved. Use this instead of deletion to maintain data integrity.',
    stainlessPath: '(resource) content.collections > (method) archive',
    qualified: 'client.content.collections.archive',
    params: ['collection_id: string;'],
    response:
      '{ id: string; api_id: string; created: string; locked: boolean; name: string; updated: string; version: number; description?: string; fields?: { id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: object; }[]; }',
    markdown:
      "## archive\n\n`client.content.collections.archive(collection_id: string): { id: string; api_id: string; created: string; locked: boolean; name: string; updated: string; version: number; description?: string; fields?: field[]; }`\n\n**delete** `/v1/content/collections/{collection_id}`\n\nArchives a content collection, hiding it from the API. Existing entries are preserved. Use this instead of deletion to maintain data integrity.\n\n### Parameters\n\n- `collection_id: string`\n\n### Returns\n\n- `{ id: string; api_id: string; created: string; locked: boolean; name: string; updated: string; version: number; description?: string; fields?: { id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: object; }[]; }`\n  A content collection defines the schema/structure for content entries. Each collection has fields that define what data entries can contain.\n\n  - `id: string`\n  - `api_id: string`\n  - `created: string`\n  - `locked: boolean`\n  - `name: string`\n  - `updated: string`\n  - `version: number`\n  - `description?: string`\n  - `fields?: { id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }; }[]`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst collection = await client.content.collections.archive('collection_id');\n\nconsole.log(collection);\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/content/collections/{collection_id}',
    httpMethod: 'get',
    summary: 'Get Content Collection',
    description:
      'Retrieves a content collection by ID. Returns the collection object including all field definitions.',
    stainlessPath: '(resource) content.collections > (method) get',
    qualified: 'client.content.collections.get',
    params: ['collection_id: string;'],
    response:
      '{ id: string; api_id: string; created: string; locked: boolean; name: string; updated: string; version: number; description?: string; fields?: { id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: object; }[]; }',
    markdown:
      "## get\n\n`client.content.collections.get(collection_id: string): { id: string; api_id: string; created: string; locked: boolean; name: string; updated: string; version: number; description?: string; fields?: field[]; }`\n\n**get** `/v1/content/collections/{collection_id}`\n\nRetrieves a content collection by ID. Returns the collection object including all field definitions.\n\n### Parameters\n\n- `collection_id: string`\n\n### Returns\n\n- `{ id: string; api_id: string; created: string; locked: boolean; name: string; updated: string; version: number; description?: string; fields?: { id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: object; }[]; }`\n  A content collection defines the schema/structure for content entries. Each collection has fields that define what data entries can contain.\n\n  - `id: string`\n  - `api_id: string`\n  - `created: string`\n  - `locked: boolean`\n  - `name: string`\n  - `updated: string`\n  - `version: number`\n  - `description?: string`\n  - `fields?: { id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }; }[]`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst collection = await client.content.collections.get('collection_id');\n\nconsole.log(collection);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/content/collections/{collection_id}/fields',
    httpMethod: 'post',
    summary: 'Add Field to Collection',
    description:
      'Adds a new field to a content collection. Fields define the structure of entries. The collection must not be locked. Adding a field increments the collection version.',
    stainlessPath: '(resource) content.collections.fields > (method) create',
    qualified: 'client.content.collections.fields.create',
    params: [
      'collection_id: string;',
      'api_id: string;',
      'name: string;',
      'type: string;',
      'id?: string;',
      'description?: string;',
      'display_order?: number;',
      'localized?: boolean;',
      'validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; };',
    ],
    response:
      '{ id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }; }',
    markdown:
      "## create\n\n`client.content.collections.fields.create(collection_id: string, api_id: string, name: string, type: string, id?: string, description?: string, display_order?: number, localized?: boolean, validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }): { id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: object; }`\n\n**post** `/v1/content/collections/{collection_id}/fields`\n\nAdds a new field to a content collection. Fields define the structure of entries. The collection must not be locked. Adding a field increments the collection version.\n\n### Parameters\n\n- `collection_id: string`\n\n- `api_id: string`\n  API identifier for the field (camelCase, e.g., 'title')\n\n- `name: string`\n  Display name for the field\n\n- `type: string`\n  Field data type\n\n- `id?: string`\n  Optional custom ID for the field. Must start with 'cf_'. If not provided, one will be generated.\n\n- `description?: string`\n  Description of the field\n\n- `display_order?: number`\n  Display order within the collection\n\n- `localized?: boolean`\n  Whether field values are stored per-locale\n\n- `validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }`\n  Validation rules\n  - `allowed_collections?: string[]`\n    Allowed collection apiIds for reference fields\n  - `allowed_mime_types?: string[]`\n    Allowed MIME types for asset fields (e.g., 'image/*', 'application/pdf')\n  - `allowed_values?: string[]`\n    Allowed values for enum fields\n  - `array_item_type?: string`\n    Type of items for array fields\n  - `default_value?: object`\n    Default value for the field\n  - `max?: number`\n    Maximum value for numbers, maximum length for text/arrays\n  - `min?: number`\n    Minimum value for numbers, minimum length for text/arrays\n  - `pattern?: string`\n    Regex pattern for text field validation\n  - `required?: boolean`\n    Whether the field is required\n  - `unique?: boolean`\n    Whether field values must be unique\n\n### Returns\n\n- `{ id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }; }`\n  A field definition within a content collection\n\n  - `id: string`\n  - `api_id: string`\n  - `created: string`\n  - `name: string`\n  - `type: string`\n  - `description?: string`\n  - `display_order?: number`\n  - `localized?: boolean`\n  - `validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst field = await client.content.collections.fields.create('collection_id', {\n  api_id: 'nXI',\n  name: 'name',\n  type: 'text',\n});\n\nconsole.log(field);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/content/collections/{collection_id}/fields/{field_id}',
    httpMethod: 'patch',
    summary: 'Update Field',
    description:
      'Updates an existing field in a content collection. The field type cannot be changed after creation. The collection must not be locked.',
    stainlessPath: '(resource) content.collections.fields > (method) update',
    qualified: 'client.content.collections.fields.update',
    params: [
      'collection_id: string;',
      'field_id: string;',
      'description?: string;',
      'display_order?: number;',
      'localized?: boolean;',
      'name?: string;',
      'validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; };',
    ],
    response:
      '{ id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }; }',
    markdown:
      "## update\n\n`client.content.collections.fields.update(collection_id: string, field_id: string, description?: string, display_order?: number, localized?: boolean, name?: string, validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }): { id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: object; }`\n\n**patch** `/v1/content/collections/{collection_id}/fields/{field_id}`\n\nUpdates an existing field in a content collection. The field type cannot be changed after creation. The collection must not be locked.\n\n### Parameters\n\n- `collection_id: string`\n\n- `field_id: string`\n\n- `description?: string`\n  Description of the field\n\n- `display_order?: number`\n  Display order\n\n- `localized?: boolean`\n  Whether field values are localized\n\n- `name?: string`\n  Display name for the field\n\n- `validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }`\n  Validation rules\n  - `allowed_collections?: string[]`\n    Allowed collection apiIds for reference fields\n  - `allowed_mime_types?: string[]`\n    Allowed MIME types for asset fields (e.g., 'image/*', 'application/pdf')\n  - `allowed_values?: string[]`\n    Allowed values for enum fields\n  - `array_item_type?: string`\n    Type of items for array fields\n  - `default_value?: object`\n    Default value for the field\n  - `max?: number`\n    Maximum value for numbers, maximum length for text/arrays\n  - `min?: number`\n    Minimum value for numbers, minimum length for text/arrays\n  - `pattern?: string`\n    Regex pattern for text field validation\n  - `required?: boolean`\n    Whether the field is required\n  - `unique?: boolean`\n    Whether field values must be unique\n\n### Returns\n\n- `{ id: string; api_id: string; created: string; name: string; type: string; description?: string; display_order?: number; localized?: boolean; validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }; }`\n  A field definition within a content collection\n\n  - `id: string`\n  - `api_id: string`\n  - `created: string`\n  - `name: string`\n  - `type: string`\n  - `description?: string`\n  - `display_order?: number`\n  - `localized?: boolean`\n  - `validation?: { allowed_collections?: string[]; allowed_mime_types?: string[]; allowed_values?: string[]; array_item_type?: string; default_value?: object; max?: number; min?: number; pattern?: string; required?: boolean; unique?: boolean; }`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst field = await client.content.collections.fields.update('field_id', { collection_id: 'collection_id' });\n\nconsole.log(field);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/content/collections/{collection_id}/fields/{field_id}',
    httpMethod: 'delete',
    summary: 'Remove Field from Collection',
    description:
      'Removes a field from a content collection. Existing entry data for this field is preserved but will no longer be validated. The collection must not be locked.',
    stainlessPath: '(resource) content.collections.fields > (method) delete',
    qualified: 'client.content.collections.fields.delete',
    params: ['collection_id: string;', 'field_id: string;'],
    markdown:
      "## delete\n\n`client.content.collections.fields.delete(collection_id: string, field_id: string): void`\n\n**delete** `/v1/content/collections/{collection_id}/fields/{field_id}`\n\nRemoves a field from a content collection. Existing entry data for this field is preserved but will no longer be validated. The collection must not be locked.\n\n### Parameters\n\n- `collection_id: string`\n\n- `field_id: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nawait client.content.collections.fields.delete('field_id', { collection_id: 'collection_id' })\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/content/entries',
    httpMethod: 'post',
    summary: 'Create Content Entry',
    description:
      'Creates a new content entry for a given collection. Entries start as drafts by default. Use the publish endpoint to make entries publicly accessible.',
    stainlessPath: '(resource) content.entries > (method) create',
    qualified: 'client.content.entries.create',
    params: [
      'collection: string;',
      'id?: string;',
      'fields?: object;',
      'locale?: string;',
      "status?: 'draft' | 'published' | 'archived';",
    ],
    response:
      "{ id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }",
    markdown:
      "## create\n\n`client.content.entries.create(collection: string, id?: string, fields?: object, locale?: string, status?: 'draft' | 'published' | 'archived'): { id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }`\n\n**post** `/v1/content/entries`\n\nCreates a new content entry for a given collection. Entries start as drafts by default. Use the publish endpoint to make entries publicly accessible.\n\n### Parameters\n\n- `collection: string`\n  API ID of the content collection (e.g., 'blogPost')\n\n- `id?: string`\n  Optional custom ID for the entry. Must start with 'ce_'. If not provided, one will be generated.\n\n- `fields?: object`\n  Field values. For localized fields: { fieldApiId: { locale: value } }. For non-localized: { fieldApiId: value }\n\n- `locale?: string`\n  Primary locale for this entry\n\n- `status?: 'draft' | 'published' | 'archived'`\n  Initial status (default: draft)\n\n### Returns\n\n- `{ id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }`\n  A content entry containing field values based on its collection schema. Entries can be drafts, published, or archived.\n\n  - `id: string`\n  - `collection_id: string`\n  - `created: string`\n  - `fields: object`\n  - `locale: string`\n  - `status: 'draft' | 'published' | 'archived'`\n  - `updated: string`\n  - `version: number`\n  - `collection_api_id?: string`\n  - `first_published_at?: string`\n  - `published_at?: string`\n  - `scheduled_publish_at?: string`\n  - `scheduled_unpublish_at?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst entry = await client.content.entries.create({ collection: 'collection' });\n\nconsole.log(entry);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/content/entries/{entry_id}',
    httpMethod: 'patch',
    summary: 'Update Content Entry',
    description:
      'Updates an existing content entry. Supports partial updates - only specified fields are modified. Use the version parameter for optimistic locking to prevent concurrent update conflicts.',
    stainlessPath: '(resource) content.entries > (method) update',
    qualified: 'client.content.entries.update',
    params: ['entry_id: string;', 'fields?: object;', 'locale?: string;', 'version?: number;'],
    response:
      "{ id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }",
    markdown:
      "## update\n\n`client.content.entries.update(entry_id: string, fields?: object, locale?: string, version?: number): { id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }`\n\n**patch** `/v1/content/entries/{entry_id}`\n\nUpdates an existing content entry. Supports partial updates - only specified fields are modified. Use the version parameter for optimistic locking to prevent concurrent update conflicts.\n\n### Parameters\n\n- `entry_id: string`\n\n- `fields?: object`\n  Field values to update. Supports partial updates - only specified fields are changed.\n\n- `locale?: string`\n  Primary locale\n\n- `version?: number`\n  Expected version for optimistic locking. Update fails if version mismatch.\n\n### Returns\n\n- `{ id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }`\n  A content entry containing field values based on its collection schema. Entries can be drafts, published, or archived.\n\n  - `id: string`\n  - `collection_id: string`\n  - `created: string`\n  - `fields: object`\n  - `locale: string`\n  - `status: 'draft' | 'published' | 'archived'`\n  - `updated: string`\n  - `version: number`\n  - `collection_api_id?: string`\n  - `first_published_at?: string`\n  - `published_at?: string`\n  - `scheduled_publish_at?: string`\n  - `scheduled_unpublish_at?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst entry = await client.content.entries.update('entry_id');\n\nconsole.log(entry);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/content/entries',
    httpMethod: 'get',
    summary: 'List Content Entries',
    description:
      "Retrieves a paginated list of content entries. Supports filtering by collection, status, locale, and custom field queries. Use the 'where' parameter for field-based filtering with operators like $eq, $contains, $gt, etc.",
    stainlessPath: '(resource) content.entries > (method) list',
    qualified: 'client.content.entries.list',
    params: [
      'collection?: string;',
      'created?: { gt?: number; gte?: number; lt?: number; lte?: number; };',
      'ending_before?: string;',
      'include_depth?: number;',
      'limit?: number;',
      'locale?: string;',
      'order_by?: string;',
      'published?: { gt?: number; gte?: number; lt?: number; lte?: number; };',
      'query?: string;',
      'starting_after?: string;',
      "status?: 'draft' | 'published' | 'archived';",
      'updated?: { gt?: number; gte?: number; lt?: number; lte?: number; };',
      'where?: string;',
    ],
    response:
      "{ id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }",
    markdown:
      "## list\n\n`client.content.entries.list(collection?: string, created?: { gt?: number; gte?: number; lt?: number; lte?: number; }, ending_before?: string, include_depth?: number, limit?: number, locale?: string, order_by?: string, published?: { gt?: number; gte?: number; lt?: number; lte?: number; }, query?: string, starting_after?: string, status?: 'draft' | 'published' | 'archived', updated?: { gt?: number; gte?: number; lt?: number; lte?: number; }, where?: string): { id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }`\n\n**get** `/v1/content/entries`\n\nRetrieves a paginated list of content entries. Supports filtering by collection, status, locale, and custom field queries. Use the 'where' parameter for field-based filtering with operators like $eq, $contains, $gt, etc.\n\n### Parameters\n\n- `collection?: string`\n  Filter by content collection API ID (e.g., 'blogPost')\n\n- `created?: { gt?: number; gte?: number; lt?: number; lte?: number; }`\n  Filter by creation date\n  - `gt?: number`\n    Greater than (Unix timestamp in seconds)\n  - `gte?: number`\n    Greater than or equal (Unix timestamp in seconds)\n  - `lt?: number`\n    Less than (Unix timestamp in seconds)\n  - `lte?: number`\n    Less than or equal (Unix timestamp in seconds)\n\n- `ending_before?: string`\n  Cursor for backward pagination. Pass the ID of the first entry from the previous page.\n\n- `include_depth?: number`\n  Depth for populating reference fields (0-3)\n\n- `limit?: number`\n  Maximum number of entries to return (1-100)\n\n- `locale?: string`\n  Filter by primary locale\n\n- `order_by?: string`\n  JSON-encoded sort order. Example: {\"field\":\"publishedAt\",\"direction\":\"desc\"}\n\n- `published?: { gt?: number; gte?: number; lt?: number; lte?: number; }`\n  Filter by publish date\n  - `gt?: number`\n    Greater than (Unix timestamp in seconds)\n  - `gte?: number`\n    Greater than or equal (Unix timestamp in seconds)\n  - `lt?: number`\n    Less than (Unix timestamp in seconds)\n  - `lte?: number`\n    Less than or equal (Unix timestamp in seconds)\n\n- `query?: string`\n  Full-text search across text fields\n\n- `starting_after?: string`\n  Cursor for forward pagination. Pass the ID of the last entry from the previous page.\n\n- `status?: 'draft' | 'published' | 'archived'`\n  Filter by status\n\n- `updated?: { gt?: number; gte?: number; lt?: number; lte?: number; }`\n  Filter by update date\n  - `gt?: number`\n    Greater than (Unix timestamp in seconds)\n  - `gte?: number`\n    Greater than or equal (Unix timestamp in seconds)\n  - `lt?: number`\n    Less than (Unix timestamp in seconds)\n  - `lte?: number`\n    Less than or equal (Unix timestamp in seconds)\n\n- `where?: string`\n  JSON-encoded field filters. Example: {\"title\":{\"$contains\":\"hello\"}}\n\n### Returns\n\n- `{ id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }`\n  A content entry containing field values based on its collection schema. Entries can be drafts, published, or archived.\n\n  - `id: string`\n  - `collection_id: string`\n  - `created: string`\n  - `fields: object`\n  - `locale: string`\n  - `status: 'draft' | 'published' | 'archived'`\n  - `updated: string`\n  - `version: number`\n  - `collection_api_id?: string`\n  - `first_published_at?: string`\n  - `published_at?: string`\n  - `scheduled_publish_at?: string`\n  - `scheduled_unpublish_at?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\n// Automatically fetches more pages as needed.\nfor await (const entry of client.content.entries.list()) {\n  console.log(entry);\n}\n```",
  },
  {
    name: 'archive',
    endpoint: '/v1/content/entries/{entry_id}',
    httpMethod: 'delete',
    summary: 'Archive Content Entry',
    description:
      'Archives a content entry, hiding it from the API and public access. The entry data is preserved and can be restored later.',
    stainlessPath: '(resource) content.entries > (method) archive',
    qualified: 'client.content.entries.archive',
    params: ['entry_id: string;'],
    response:
      "{ id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }",
    markdown:
      "## archive\n\n`client.content.entries.archive(entry_id: string): { id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }`\n\n**delete** `/v1/content/entries/{entry_id}`\n\nArchives a content entry, hiding it from the API and public access. The entry data is preserved and can be restored later.\n\n### Parameters\n\n- `entry_id: string`\n\n### Returns\n\n- `{ id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }`\n  A content entry containing field values based on its collection schema. Entries can be drafts, published, or archived.\n\n  - `id: string`\n  - `collection_id: string`\n  - `created: string`\n  - `fields: object`\n  - `locale: string`\n  - `status: 'draft' | 'published' | 'archived'`\n  - `updated: string`\n  - `version: number`\n  - `collection_api_id?: string`\n  - `first_published_at?: string`\n  - `published_at?: string`\n  - `scheduled_publish_at?: string`\n  - `scheduled_unpublish_at?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst entry = await client.content.entries.archive('entry_id');\n\nconsole.log(entry);\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/content/entries/{entry_id}',
    httpMethod: 'get',
    summary: 'Get Content Entry',
    description:
      'Retrieves a content entry by ID. Optionally specify a locale to get localized field values with fallback resolution.',
    stainlessPath: '(resource) content.entries > (method) get',
    qualified: 'client.content.entries.get',
    params: ['entry_id: string;'],
    response:
      "{ id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }",
    markdown:
      "## get\n\n`client.content.entries.get(entry_id: string): { id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }`\n\n**get** `/v1/content/entries/{entry_id}`\n\nRetrieves a content entry by ID. Optionally specify a locale to get localized field values with fallback resolution.\n\n### Parameters\n\n- `entry_id: string`\n\n### Returns\n\n- `{ id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }`\n  A content entry containing field values based on its collection schema. Entries can be drafts, published, or archived.\n\n  - `id: string`\n  - `collection_id: string`\n  - `created: string`\n  - `fields: object`\n  - `locale: string`\n  - `status: 'draft' | 'published' | 'archived'`\n  - `updated: string`\n  - `version: number`\n  - `collection_api_id?: string`\n  - `first_published_at?: string`\n  - `published_at?: string`\n  - `scheduled_publish_at?: string`\n  - `scheduled_unpublish_at?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst entry = await client.content.entries.get('entry_id');\n\nconsole.log(entry);\n```",
  },
  {
    name: 'publish',
    endpoint: '/v1/content/entries/{entry_id}/publish',
    httpMethod: 'post',
    summary: 'Publish Content Entry',
    description:
      'Publishes a content entry, making it publicly accessible. Optionally schedule publishing for a future time. Publishing validates that all required fields have values.',
    stainlessPath: '(resource) content.entries > (method) publish',
    qualified: 'client.content.entries.publish',
    params: ['entry_id: string;', 'scheduled_at?: string;'],
    response:
      "{ id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }",
    markdown:
      "## publish\n\n`client.content.entries.publish(entry_id: string, scheduled_at?: string): { id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }`\n\n**post** `/v1/content/entries/{entry_id}/publish`\n\nPublishes a content entry, making it publicly accessible. Optionally schedule publishing for a future time. Publishing validates that all required fields have values.\n\n### Parameters\n\n- `entry_id: string`\n\n- `scheduled_at?: string`\n  Schedule publish for a future time instead of publishing immediately\n\n### Returns\n\n- `{ id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }`\n  A content entry containing field values based on its collection schema. Entries can be drafts, published, or archived.\n\n  - `id: string`\n  - `collection_id: string`\n  - `created: string`\n  - `fields: object`\n  - `locale: string`\n  - `status: 'draft' | 'published' | 'archived'`\n  - `updated: string`\n  - `version: number`\n  - `collection_api_id?: string`\n  - `first_published_at?: string`\n  - `published_at?: string`\n  - `scheduled_publish_at?: string`\n  - `scheduled_unpublish_at?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst entry = await client.content.entries.publish('entry_id');\n\nconsole.log(entry);\n```",
  },
  {
    name: 'unpublish',
    endpoint: '/v1/content/entries/{entry_id}/unpublish',
    httpMethod: 'post',
    summary: 'Unpublish Content Entry',
    description:
      'Unpublishes a content entry, reverting it to draft status. The entry will no longer be publicly accessible but all data is preserved.',
    stainlessPath: '(resource) content.entries > (method) unpublish',
    qualified: 'client.content.entries.unpublish',
    params: ['entry_id: string;'],
    response:
      "{ id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }",
    markdown:
      "## unpublish\n\n`client.content.entries.unpublish(entry_id: string): { id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }`\n\n**post** `/v1/content/entries/{entry_id}/unpublish`\n\nUnpublishes a content entry, reverting it to draft status. The entry will no longer be publicly accessible but all data is preserved.\n\n### Parameters\n\n- `entry_id: string`\n\n### Returns\n\n- `{ id: string; collection_id: string; created: string; fields: object; locale: string; status: 'draft' | 'published' | 'archived'; updated: string; version: number; collection_api_id?: string; first_published_at?: string; published_at?: string; scheduled_publish_at?: string; scheduled_unpublish_at?: string; }`\n  A content entry containing field values based on its collection schema. Entries can be drafts, published, or archived.\n\n  - `id: string`\n  - `collection_id: string`\n  - `created: string`\n  - `fields: object`\n  - `locale: string`\n  - `status: 'draft' | 'published' | 'archived'`\n  - `updated: string`\n  - `version: number`\n  - `collection_api_id?: string`\n  - `first_published_at?: string`\n  - `published_at?: string`\n  - `scheduled_publish_at?: string`\n  - `scheduled_unpublish_at?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst entry = await client.content.entries.unpublish('entry_id');\n\nconsole.log(entry);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/content/assets',
    httpMethod: 'post',
    summary: 'Create Content Asset',
    description:
      'Creates a new content asset with metadata. For now, this creates asset metadata only - provide a URL for an externally hosted file. Full upload support coming soon.',
    stainlessPath: '(resource) content.assets > (method) create',
    qualified: 'client.content.assets.create',
    params: [
      'filename: string;',
      'mime_type: string;',
      'size: number;',
      'id?: string;',
      'description?: string;',
      'folder?: string;',
      'height?: number;',
      'metadata?: object;',
      'title?: string;',
      'url?: string;',
      'width?: number;',
    ],
    response:
      "{ id: string; created: string; filename: string; folder: string; mime_type: string; size: number; status: 'draft' | 'published'; updated: string; description?: string; height?: number; metadata?: object; published_at?: string; title?: string; url?: string; width?: number; }",
    markdown:
      "## create\n\n`client.content.assets.create(filename: string, mime_type: string, size: number, id?: string, description?: string, folder?: string, height?: number, metadata?: object, title?: string, url?: string, width?: number): { id: string; created: string; filename: string; folder: string; mime_type: string; size: number; status: 'draft' | 'published'; updated: string; description?: string; height?: number; metadata?: object; published_at?: string; title?: string; url?: string; width?: number; }`\n\n**post** `/v1/content/assets`\n\nCreates a new content asset with metadata. For now, this creates asset metadata only - provide a URL for an externally hosted file. Full upload support coming soon.\n\n### Parameters\n\n- `filename: string`\n  Original filename\n\n- `mime_type: string`\n  MIME type (e.g., 'image/jpeg')\n\n- `size: number`\n  File size in bytes\n\n- `id?: string`\n  Optional custom ID for the asset. Must start with 'ca_'. If not provided, one will be generated.\n\n- `description?: string`\n  Description\n\n- `folder?: string`\n  Folder path for organization\n\n- `height?: number`\n  Height in pixels (for images)\n\n- `metadata?: object`\n  Custom metadata\n\n- `title?: string`\n  Display title\n\n- `url?: string`\n  URL to access the asset (external URL)\n\n- `width?: number`\n  Width in pixels (for images)\n\n### Returns\n\n- `{ id: string; created: string; filename: string; folder: string; mime_type: string; size: number; status: 'draft' | 'published'; updated: string; description?: string; height?: number; metadata?: object; published_at?: string; title?: string; url?: string; width?: number; }`\n  A media asset (image, video, document, etc.) that can be referenced by content entries.\n\n  - `id: string`\n  - `created: string`\n  - `filename: string`\n  - `folder: string`\n  - `mime_type: string`\n  - `size: number`\n  - `status: 'draft' | 'published'`\n  - `updated: string`\n  - `description?: string`\n  - `height?: number`\n  - `metadata?: object`\n  - `published_at?: string`\n  - `title?: string`\n  - `url?: string`\n  - `width?: number`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst asset = await client.content.assets.create({\n  filename: 'filename',\n  mime_type: 'mime_type',\n  size: -9007199254740991,\n});\n\nconsole.log(asset);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/content/assets/{asset_id}',
    httpMethod: 'patch',
    summary: 'Update Content Asset',
    description: 'Updates asset metadata including URL, folder, title, description, and custom metadata.',
    stainlessPath: '(resource) content.assets > (method) update',
    qualified: 'client.content.assets.update',
    params: [
      'asset_id: string;',
      'description?: string;',
      'folder?: string;',
      'metadata?: object;',
      'title?: string;',
      'url?: string;',
    ],
    response:
      "{ id: string; created: string; filename: string; folder: string; mime_type: string; size: number; status: 'draft' | 'published'; updated: string; description?: string; height?: number; metadata?: object; published_at?: string; title?: string; url?: string; width?: number; }",
    markdown:
      "## update\n\n`client.content.assets.update(asset_id: string, description?: string, folder?: string, metadata?: object, title?: string, url?: string): { id: string; created: string; filename: string; folder: string; mime_type: string; size: number; status: 'draft' | 'published'; updated: string; description?: string; height?: number; metadata?: object; published_at?: string; title?: string; url?: string; width?: number; }`\n\n**patch** `/v1/content/assets/{asset_id}`\n\nUpdates asset metadata including URL, folder, title, description, and custom metadata.\n\n### Parameters\n\n- `asset_id: string`\n\n- `description?: string`\n  Description\n\n- `folder?: string`\n  Folder path\n\n- `metadata?: object`\n  Custom metadata\n\n- `title?: string`\n  Display title\n\n- `url?: string`\n  URL to access the asset\n\n### Returns\n\n- `{ id: string; created: string; filename: string; folder: string; mime_type: string; size: number; status: 'draft' | 'published'; updated: string; description?: string; height?: number; metadata?: object; published_at?: string; title?: string; url?: string; width?: number; }`\n  A media asset (image, video, document, etc.) that can be referenced by content entries.\n\n  - `id: string`\n  - `created: string`\n  - `filename: string`\n  - `folder: string`\n  - `mime_type: string`\n  - `size: number`\n  - `status: 'draft' | 'published'`\n  - `updated: string`\n  - `description?: string`\n  - `height?: number`\n  - `metadata?: object`\n  - `published_at?: string`\n  - `title?: string`\n  - `url?: string`\n  - `width?: number`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst asset = await client.content.assets.update('asset_id');\n\nconsole.log(asset);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/content/assets',
    httpMethod: 'get',
    summary: 'List Content Assets',
    description:
      'Retrieves a paginated list of content assets (images, videos, documents, etc.). Supports filtering by status, MIME type, folder, and search.',
    stainlessPath: '(resource) content.assets > (method) list',
    qualified: 'client.content.assets.list',
    params: [
      'created?: { gt?: number; gte?: number; lt?: number; lte?: number; };',
      'ending_before?: string;',
      'folder?: string;',
      'limit?: number;',
      'mime_type?: string;',
      'query?: string;',
      'starting_after?: string;',
      "status?: 'draft' | 'published';",
    ],
    response:
      "{ id: string; created: string; filename: string; folder: string; mime_type: string; size: number; status: 'draft' | 'published'; updated: string; description?: string; height?: number; metadata?: object; published_at?: string; title?: string; url?: string; width?: number; }",
    markdown:
      "## list\n\n`client.content.assets.list(created?: { gt?: number; gte?: number; lt?: number; lte?: number; }, ending_before?: string, folder?: string, limit?: number, mime_type?: string, query?: string, starting_after?: string, status?: 'draft' | 'published'): { id: string; created: string; filename: string; folder: string; mime_type: string; size: number; status: 'draft' | 'published'; updated: string; description?: string; height?: number; metadata?: object; published_at?: string; title?: string; url?: string; width?: number; }`\n\n**get** `/v1/content/assets`\n\nRetrieves a paginated list of content assets (images, videos, documents, etc.). Supports filtering by status, MIME type, folder, and search.\n\n### Parameters\n\n- `created?: { gt?: number; gte?: number; lt?: number; lte?: number; }`\n  Filter by creation date\n  - `gt?: number`\n    Greater than (Unix timestamp in seconds)\n  - `gte?: number`\n    Greater than or equal (Unix timestamp in seconds)\n  - `lt?: number`\n    Less than (Unix timestamp in seconds)\n  - `lte?: number`\n    Less than or equal (Unix timestamp in seconds)\n\n- `ending_before?: string`\n  Cursor for backward pagination\n\n- `folder?: string`\n  Filter by folder path\n\n- `limit?: number`\n  Maximum number of assets to return (1-100)\n\n- `mime_type?: string`\n  Filter by MIME type (supports wildcards like 'image/*')\n\n- `query?: string`\n  Search in filename, title, and description\n\n- `starting_after?: string`\n  Cursor for forward pagination\n\n- `status?: 'draft' | 'published'`\n  Filter by status\n\n### Returns\n\n- `{ id: string; created: string; filename: string; folder: string; mime_type: string; size: number; status: 'draft' | 'published'; updated: string; description?: string; height?: number; metadata?: object; published_at?: string; title?: string; url?: string; width?: number; }`\n  A media asset (image, video, document, etc.) that can be referenced by content entries.\n\n  - `id: string`\n  - `created: string`\n  - `filename: string`\n  - `folder: string`\n  - `mime_type: string`\n  - `size: number`\n  - `status: 'draft' | 'published'`\n  - `updated: string`\n  - `description?: string`\n  - `height?: number`\n  - `metadata?: object`\n  - `published_at?: string`\n  - `title?: string`\n  - `url?: string`\n  - `width?: number`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\n// Automatically fetches more pages as needed.\nfor await (const asset of client.content.assets.list()) {\n  console.log(asset);\n}\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/content/assets/{asset_id}',
    httpMethod: 'delete',
    summary: 'Delete Content Asset',
    description:
      'Permanently deletes a content asset. This action cannot be undone. Entries referencing this asset will have broken references.',
    stainlessPath: '(resource) content.assets > (method) delete',
    qualified: 'client.content.assets.delete',
    params: ['asset_id: string;'],
    markdown:
      "## delete\n\n`client.content.assets.delete(asset_id: string): void`\n\n**delete** `/v1/content/assets/{asset_id}`\n\nPermanently deletes a content asset. This action cannot be undone. Entries referencing this asset will have broken references.\n\n### Parameters\n\n- `asset_id: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nawait client.content.assets.delete('asset_id')\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/content/assets/{asset_id}',
    httpMethod: 'get',
    summary: 'Get Content Asset',
    description: 'Retrieves a content asset by ID with its metadata.',
    stainlessPath: '(resource) content.assets > (method) get',
    qualified: 'client.content.assets.get',
    params: ['asset_id: string;'],
    response:
      "{ id: string; created: string; filename: string; folder: string; mime_type: string; size: number; status: 'draft' | 'published'; updated: string; description?: string; height?: number; metadata?: object; published_at?: string; title?: string; url?: string; width?: number; }",
    markdown:
      "## get\n\n`client.content.assets.get(asset_id: string): { id: string; created: string; filename: string; folder: string; mime_type: string; size: number; status: 'draft' | 'published'; updated: string; description?: string; height?: number; metadata?: object; published_at?: string; title?: string; url?: string; width?: number; }`\n\n**get** `/v1/content/assets/{asset_id}`\n\nRetrieves a content asset by ID with its metadata.\n\n### Parameters\n\n- `asset_id: string`\n\n### Returns\n\n- `{ id: string; created: string; filename: string; folder: string; mime_type: string; size: number; status: 'draft' | 'published'; updated: string; description?: string; height?: number; metadata?: object; published_at?: string; title?: string; url?: string; width?: number; }`\n  A media asset (image, video, document, etc.) that can be referenced by content entries.\n\n  - `id: string`\n  - `created: string`\n  - `filename: string`\n  - `folder: string`\n  - `mime_type: string`\n  - `size: number`\n  - `status: 'draft' | 'published'`\n  - `updated: string`\n  - `description?: string`\n  - `height?: number`\n  - `metadata?: object`\n  - `published_at?: string`\n  - `title?: string`\n  - `url?: string`\n  - `width?: number`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst asset = await client.content.assets.get('asset_id');\n\nconsole.log(asset);\n```",
  },
  {
    name: 'publish',
    endpoint: '/v1/content/assets/{asset_id}/publish',
    httpMethod: 'post',
    summary: 'Publish Content Asset',
    description: 'Publishes a content asset, making it publicly accessible via its URL.',
    stainlessPath: '(resource) content.assets > (method) publish',
    qualified: 'client.content.assets.publish',
    params: ['asset_id: string;'],
    response:
      "{ id: string; created: string; filename: string; folder: string; mime_type: string; size: number; status: 'draft' | 'published'; updated: string; description?: string; height?: number; metadata?: object; published_at?: string; title?: string; url?: string; width?: number; }",
    markdown:
      "## publish\n\n`client.content.assets.publish(asset_id: string): { id: string; created: string; filename: string; folder: string; mime_type: string; size: number; status: 'draft' | 'published'; updated: string; description?: string; height?: number; metadata?: object; published_at?: string; title?: string; url?: string; width?: number; }`\n\n**post** `/v1/content/assets/{asset_id}/publish`\n\nPublishes a content asset, making it publicly accessible via its URL.\n\n### Parameters\n\n- `asset_id: string`\n\n### Returns\n\n- `{ id: string; created: string; filename: string; folder: string; mime_type: string; size: number; status: 'draft' | 'published'; updated: string; description?: string; height?: number; metadata?: object; published_at?: string; title?: string; url?: string; width?: number; }`\n  A media asset (image, video, document, etc.) that can be referenced by content entries.\n\n  - `id: string`\n  - `created: string`\n  - `filename: string`\n  - `folder: string`\n  - `mime_type: string`\n  - `size: number`\n  - `status: 'draft' | 'published'`\n  - `updated: string`\n  - `description?: string`\n  - `height?: number`\n  - `metadata?: object`\n  - `published_at?: string`\n  - `title?: string`\n  - `url?: string`\n  - `width?: number`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst asset = await client.content.assets.publish('asset_id');\n\nconsole.log(asset);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/content/locales',
    httpMethod: 'post',
    summary: 'Create Content Locale',
    description:
      'Creates a new locale for content localization. Configure fallback chains by setting the fallback_locale to another locale code.',
    stainlessPath: '(resource) content.locales > (method) create',
    qualified: 'client.content.locales.create',
    params: [
      'code: string;',
      'name: string;',
      'id?: string;',
      'fallback_locale?: string;',
      'is_default?: boolean;',
    ],
    response:
      '{ id: string; active: boolean; code: string; created: string; is_default: boolean; name: string; fallback_locale?: string; }',
    markdown:
      "## create\n\n`client.content.locales.create(code: string, name: string, id?: string, fallback_locale?: string, is_default?: boolean): { id: string; active: boolean; code: string; created: string; is_default: boolean; name: string; fallback_locale?: string; }`\n\n**post** `/v1/content/locales`\n\nCreates a new locale for content localization. Configure fallback chains by setting the fallback_locale to another locale code.\n\n### Parameters\n\n- `code: string`\n  Locale code (e.g., 'en', 'en-US', 'fr-CA')\n\n- `name: string`\n  Display name (e.g., 'English', 'French (Canada)')\n\n- `id?: string`\n  Optional custom ID for the locale. Must start with 'cl_'. If not provided, one will be generated.\n\n- `fallback_locale?: string`\n  Fallback locale code for missing translations\n\n- `is_default?: boolean`\n  Set as the default locale (only one per website)\n\n### Returns\n\n- `{ id: string; active: boolean; code: string; created: string; is_default: boolean; name: string; fallback_locale?: string; }`\n  A locale configuration for content localization. Locales define supported languages and fallback chains.\n\n  - `id: string`\n  - `active: boolean`\n  - `code: string`\n  - `created: string`\n  - `is_default: boolean`\n  - `name: string`\n  - `fallback_locale?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst locale = await client.content.locales.create({ code: 'xx', name: 'name' });\n\nconsole.log(locale);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/content/locales/{locale_code}',
    httpMethod: 'patch',
    summary: 'Update Content Locale',
    description:
      "Updates a locale's configuration including name, fallback, default status, and active status.",
    stainlessPath: '(resource) content.locales > (method) update',
    qualified: 'client.content.locales.update',
    params: [
      'locale_code: string;',
      'active?: boolean;',
      'fallback_locale?: string;',
      'is_default?: boolean;',
      'name?: string;',
    ],
    response:
      '{ id: string; active: boolean; code: string; created: string; is_default: boolean; name: string; fallback_locale?: string; }',
    markdown:
      "## update\n\n`client.content.locales.update(locale_code: string, active?: boolean, fallback_locale?: string, is_default?: boolean, name?: string): { id: string; active: boolean; code: string; created: string; is_default: boolean; name: string; fallback_locale?: string; }`\n\n**patch** `/v1/content/locales/{locale_code}`\n\nUpdates a locale's configuration including name, fallback, default status, and active status.\n\n### Parameters\n\n- `locale_code: string`\n\n- `active?: boolean`\n  Whether the locale is active\n\n- `fallback_locale?: string`\n  Fallback locale code\n\n- `is_default?: boolean`\n  Set as the default locale\n\n- `name?: string`\n  Display name\n\n### Returns\n\n- `{ id: string; active: boolean; code: string; created: string; is_default: boolean; name: string; fallback_locale?: string; }`\n  A locale configuration for content localization. Locales define supported languages and fallback chains.\n\n  - `id: string`\n  - `active: boolean`\n  - `code: string`\n  - `created: string`\n  - `is_default: boolean`\n  - `name: string`\n  - `fallback_locale?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst locale = await client.content.locales.update('locale_code');\n\nconsole.log(locale);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/content/locales',
    httpMethod: 'get',
    summary: 'List Content Locales',
    description:
      'Retrieves a list of configured locales. Locales define the languages available for content localization.',
    stainlessPath: '(resource) content.locales > (method) list',
    qualified: 'client.content.locales.list',
    params: ['active?: boolean;', 'ending_before?: string;', 'limit?: number;', 'starting_after?: string;'],
    response:
      '{ id: string; active: boolean; code: string; created: string; is_default: boolean; name: string; fallback_locale?: string; }',
    markdown:
      "## list\n\n`client.content.locales.list(active?: boolean, ending_before?: string, limit?: number, starting_after?: string): { id: string; active: boolean; code: string; created: string; is_default: boolean; name: string; fallback_locale?: string; }`\n\n**get** `/v1/content/locales`\n\nRetrieves a list of configured locales. Locales define the languages available for content localization.\n\n### Parameters\n\n- `active?: boolean`\n  Filter by active status\n\n- `ending_before?: string`\n  Cursor for backward pagination\n\n- `limit?: number`\n  Maximum number of locales to return (1-100)\n\n- `starting_after?: string`\n  Cursor for forward pagination\n\n### Returns\n\n- `{ id: string; active: boolean; code: string; created: string; is_default: boolean; name: string; fallback_locale?: string; }`\n  A locale configuration for content localization. Locales define supported languages and fallback chains.\n\n  - `id: string`\n  - `active: boolean`\n  - `code: string`\n  - `created: string`\n  - `is_default: boolean`\n  - `name: string`\n  - `fallback_locale?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\n// Automatically fetches more pages as needed.\nfor await (const locale of client.content.locales.list()) {\n  console.log(locale);\n}\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/content/locales/{locale_code}',
    httpMethod: 'delete',
    summary: 'Delete Content Locale',
    description:
      'Deletes a locale. The default locale cannot be deleted - set another locale as default first. Existing localized content is preserved.',
    stainlessPath: '(resource) content.locales > (method) delete',
    qualified: 'client.content.locales.delete',
    params: ['locale_code: string;'],
    markdown:
      "## delete\n\n`client.content.locales.delete(locale_code: string): void`\n\n**delete** `/v1/content/locales/{locale_code}`\n\nDeletes a locale. The default locale cannot be deleted - set another locale as default first. Existing localized content is preserved.\n\n### Parameters\n\n- `locale_code: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nawait client.content.locales.delete('locale_code')\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/content/locales/{locale_code}',
    httpMethod: 'get',
    summary: 'Get Content Locale',
    description: 'Retrieves a locale by its code.',
    stainlessPath: '(resource) content.locales > (method) get',
    qualified: 'client.content.locales.get',
    params: ['locale_code: string;'],
    response:
      '{ id: string; active: boolean; code: string; created: string; is_default: boolean; name: string; fallback_locale?: string; }',
    markdown:
      "## get\n\n`client.content.locales.get(locale_code: string): { id: string; active: boolean; code: string; created: string; is_default: boolean; name: string; fallback_locale?: string; }`\n\n**get** `/v1/content/locales/{locale_code}`\n\nRetrieves a locale by its code.\n\n### Parameters\n\n- `locale_code: string`\n\n### Returns\n\n- `{ id: string; active: boolean; code: string; created: string; is_default: boolean; name: string; fallback_locale?: string; }`\n  A locale configuration for content localization. Locales define supported languages and fallback chains.\n\n  - `id: string`\n  - `active: boolean`\n  - `code: string`\n  - `created: string`\n  - `is_default: boolean`\n  - `name: string`\n  - `fallback_locale?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst locale = await client.content.locales.get('locale_code');\n\nconsole.log(locale);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/content/releases',
    httpMethod: 'post',
    summary: 'Create Content Release',
    description:
      'Creates a new release. Add items using the add items endpoint, then publish or schedule the release.',
    stainlessPath: '(resource) content.releases > (method) create',
    qualified: 'client.content.releases.create',
    params: ['name: string;', 'id?: string;', 'description?: string;'],
    response:
      "{ id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]; published_at?: string; scheduled_at?: string; }",
    markdown:
      "## create\n\n`client.content.releases.create(name: string, id?: string, description?: string): { id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: release_item[]; published_at?: string; scheduled_at?: string; }`\n\n**post** `/v1/content/releases`\n\nCreates a new release. Add items using the add items endpoint, then publish or schedule the release.\n\n### Parameters\n\n- `name: string`\n  Name of the release\n\n- `id?: string`\n  Optional custom ID for the release. Must start with 'cr_'. If not provided, one will be generated.\n\n- `description?: string`\n  Description of the release\n\n### Returns\n\n- `{ id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]; published_at?: string; scheduled_at?: string; }`\n  A release groups multiple entries and assets to be published atomically. Releases can be scheduled for future publication.\n\n  - `id: string`\n  - `created: string`\n  - `name: string`\n  - `status: 'draft' | 'scheduled' | 'published' | 'failed'`\n  - `updated: string`\n  - `description?: string`\n  - `error_message?: string`\n  - `items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]`\n  - `published_at?: string`\n  - `scheduled_at?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst release = await client.content.releases.create({ name: 'name' });\n\nconsole.log(release);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/content/releases/{release_id}',
    httpMethod: 'patch',
    summary: 'Update Content Release',
    description: 'Updates a release name and description. Only draft releases can be updated.',
    stainlessPath: '(resource) content.releases > (method) update',
    qualified: 'client.content.releases.update',
    params: ['release_id: string;', 'description?: string;', 'name?: string;'],
    response:
      "{ id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]; published_at?: string; scheduled_at?: string; }",
    markdown:
      "## update\n\n`client.content.releases.update(release_id: string, description?: string, name?: string): { id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: release_item[]; published_at?: string; scheduled_at?: string; }`\n\n**patch** `/v1/content/releases/{release_id}`\n\nUpdates a release name and description. Only draft releases can be updated.\n\n### Parameters\n\n- `release_id: string`\n\n- `description?: string`\n  Description of the release\n\n- `name?: string`\n  Name of the release\n\n### Returns\n\n- `{ id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]; published_at?: string; scheduled_at?: string; }`\n  A release groups multiple entries and assets to be published atomically. Releases can be scheduled for future publication.\n\n  - `id: string`\n  - `created: string`\n  - `name: string`\n  - `status: 'draft' | 'scheduled' | 'published' | 'failed'`\n  - `updated: string`\n  - `description?: string`\n  - `error_message?: string`\n  - `items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]`\n  - `published_at?: string`\n  - `scheduled_at?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst release = await client.content.releases.update('release_id');\n\nconsole.log(release);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/content/releases',
    httpMethod: 'get',
    summary: 'List Content Releases',
    description:
      'Retrieves a paginated list of releases. Releases group entries and assets for atomic publishing.',
    stainlessPath: '(resource) content.releases > (method) list',
    qualified: 'client.content.releases.list',
    params: [
      'ending_before?: string;',
      'limit?: number;',
      'starting_after?: string;',
      "status?: 'draft' | 'scheduled' | 'published' | 'failed';",
    ],
    response:
      "{ id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]; published_at?: string; scheduled_at?: string; }",
    markdown:
      "## list\n\n`client.content.releases.list(ending_before?: string, limit?: number, starting_after?: string, status?: 'draft' | 'scheduled' | 'published' | 'failed'): { id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: release_item[]; published_at?: string; scheduled_at?: string; }`\n\n**get** `/v1/content/releases`\n\nRetrieves a paginated list of releases. Releases group entries and assets for atomic publishing.\n\n### Parameters\n\n- `ending_before?: string`\n  Cursor for backward pagination\n\n- `limit?: number`\n  Maximum number of releases to return (1-100)\n\n- `starting_after?: string`\n  Cursor for forward pagination\n\n- `status?: 'draft' | 'scheduled' | 'published' | 'failed'`\n  Filter by status\n\n### Returns\n\n- `{ id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]; published_at?: string; scheduled_at?: string; }`\n  A release groups multiple entries and assets to be published atomically. Releases can be scheduled for future publication.\n\n  - `id: string`\n  - `created: string`\n  - `name: string`\n  - `status: 'draft' | 'scheduled' | 'published' | 'failed'`\n  - `updated: string`\n  - `description?: string`\n  - `error_message?: string`\n  - `items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]`\n  - `published_at?: string`\n  - `scheduled_at?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\n// Automatically fetches more pages as needed.\nfor await (const release of client.content.releases.list()) {\n  console.log(release);\n}\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/content/releases/{release_id}',
    httpMethod: 'delete',
    summary: 'Delete Content Release',
    description: 'Deletes a draft release. Published releases cannot be deleted.',
    stainlessPath: '(resource) content.releases > (method) delete',
    qualified: 'client.content.releases.delete',
    params: ['release_id: string;'],
    markdown:
      "## delete\n\n`client.content.releases.delete(release_id: string): void`\n\n**delete** `/v1/content/releases/{release_id}`\n\nDeletes a draft release. Published releases cannot be deleted.\n\n### Parameters\n\n- `release_id: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nawait client.content.releases.delete('release_id')\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/content/releases/{release_id}',
    httpMethod: 'get',
    summary: 'Get Content Release',
    description: 'Retrieves a release by ID with all its items.',
    stainlessPath: '(resource) content.releases > (method) get',
    qualified: 'client.content.releases.get',
    params: ['release_id: string;'],
    response:
      "{ id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]; published_at?: string; scheduled_at?: string; }",
    markdown:
      "## get\n\n`client.content.releases.get(release_id: string): { id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: release_item[]; published_at?: string; scheduled_at?: string; }`\n\n**get** `/v1/content/releases/{release_id}`\n\nRetrieves a release by ID with all its items.\n\n### Parameters\n\n- `release_id: string`\n\n### Returns\n\n- `{ id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]; published_at?: string; scheduled_at?: string; }`\n  A release groups multiple entries and assets to be published atomically. Releases can be scheduled for future publication.\n\n  - `id: string`\n  - `created: string`\n  - `name: string`\n  - `status: 'draft' | 'scheduled' | 'published' | 'failed'`\n  - `updated: string`\n  - `description?: string`\n  - `error_message?: string`\n  - `items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]`\n  - `published_at?: string`\n  - `scheduled_at?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst release = await client.content.releases.get('release_id');\n\nconsole.log(release);\n```",
  },
  {
    name: 'publish',
    endpoint: '/v1/content/releases/{release_id}/publish',
    httpMethod: 'post',
    summary: 'Publish Release',
    description:
      "Publishes all items in the release immediately. Each item's action (publish or unpublish) is executed atomically.",
    stainlessPath: '(resource) content.releases > (method) publish',
    qualified: 'client.content.releases.publish',
    params: ['release_id: string;'],
    response:
      "{ id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]; published_at?: string; scheduled_at?: string; }",
    markdown:
      "## publish\n\n`client.content.releases.publish(release_id: string): { id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: release_item[]; published_at?: string; scheduled_at?: string; }`\n\n**post** `/v1/content/releases/{release_id}/publish`\n\nPublishes all items in the release immediately. Each item's action (publish or unpublish) is executed atomically.\n\n### Parameters\n\n- `release_id: string`\n\n### Returns\n\n- `{ id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]; published_at?: string; scheduled_at?: string; }`\n  A release groups multiple entries and assets to be published atomically. Releases can be scheduled for future publication.\n\n  - `id: string`\n  - `created: string`\n  - `name: string`\n  - `status: 'draft' | 'scheduled' | 'published' | 'failed'`\n  - `updated: string`\n  - `description?: string`\n  - `error_message?: string`\n  - `items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]`\n  - `published_at?: string`\n  - `scheduled_at?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst release = await client.content.releases.publish('release_id');\n\nconsole.log(release);\n```",
  },
  {
    name: 'schedule',
    endpoint: '/v1/content/releases/{release_id}/schedule',
    httpMethod: 'post',
    summary: 'Schedule Release',
    description:
      'Schedules a release for future publication. The release will be automatically published at the specified time.',
    stainlessPath: '(resource) content.releases > (method) schedule',
    qualified: 'client.content.releases.schedule',
    params: ['release_id: string;', 'scheduled_at: string;'],
    response:
      "{ id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]; published_at?: string; scheduled_at?: string; }",
    markdown:
      "## schedule\n\n`client.content.releases.schedule(release_id: string, scheduled_at: string): { id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: release_item[]; published_at?: string; scheduled_at?: string; }`\n\n**post** `/v1/content/releases/{release_id}/schedule`\n\nSchedules a release for future publication. The release will be automatically published at the specified time.\n\n### Parameters\n\n- `release_id: string`\n\n- `scheduled_at: string`\n  Time to publish the release\n\n### Returns\n\n- `{ id: string; created: string; name: string; status: 'draft' | 'scheduled' | 'published' | 'failed'; updated: string; description?: string; error_message?: string; items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]; published_at?: string; scheduled_at?: string; }`\n  A release groups multiple entries and assets to be published atomically. Releases can be scheduled for future publication.\n\n  - `id: string`\n  - `created: string`\n  - `name: string`\n  - `status: 'draft' | 'scheduled' | 'published' | 'failed'`\n  - `updated: string`\n  - `description?: string`\n  - `error_message?: string`\n  - `items?: { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }[]`\n  - `published_at?: string`\n  - `scheduled_at?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst release = await client.content.releases.schedule('release_id', { scheduled_at: '2019-12-27T18:11:19.117Z' });\n\nconsole.log(release);\n```",
  },
  {
    name: 'add',
    endpoint: '/v1/content/releases/{release_id}/items',
    httpMethod: 'post',
    summary: 'Add Item to Release',
    description:
      'Adds an entry or asset to a release with a specified action (publish or unpublish). Only draft releases can have items added.',
    stainlessPath: '(resource) content.releases.items > (method) add',
    qualified: 'client.content.releases.items.add',
    params: [
      'release_id: string;',
      'item_id: string;',
      "type: 'entry' | 'asset';",
      "action?: 'publish' | 'unpublish';",
    ],
    response: "{ id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }",
    markdown:
      "## add\n\n`client.content.releases.items.add(release_id: string, item_id: string, type: 'entry' | 'asset', action?: 'publish' | 'unpublish'): { id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }`\n\n**post** `/v1/content/releases/{release_id}/items`\n\nAdds an entry or asset to a release with a specified action (publish or unpublish). Only draft releases can have items added.\n\n### Parameters\n\n- `release_id: string`\n\n- `item_id: string`\n  ID of the entry or asset to add\n\n- `type: 'entry' | 'asset'`\n  Type of item: entry or asset\n\n- `action?: 'publish' | 'unpublish'`\n  Action to perform: publish or unpublish\n\n### Returns\n\n- `{ id: string; action: 'publish' | 'unpublish'; item_id: string; type: 'entry' | 'asset'; }`\n  An item included in a release\n\n  - `id: string`\n  - `action: 'publish' | 'unpublish'`\n  - `item_id: string`\n  - `type: 'entry' | 'asset'`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst releaseItem = await client.content.releases.items.add('release_id', { item_id: 'item_id', type: 'entry' });\n\nconsole.log(releaseItem);\n```",
  },
  {
    name: 'remove',
    endpoint: '/v1/content/releases/{release_id}/items/{item_id}',
    httpMethod: 'delete',
    summary: 'Remove Item from Release',
    description: 'Removes an item from a release. Only draft releases can have items removed.',
    stainlessPath: '(resource) content.releases.items > (method) remove',
    qualified: 'client.content.releases.items.remove',
    params: ['release_id: string;', 'item_id: string;'],
    markdown:
      "## remove\n\n`client.content.releases.items.remove(release_id: string, item_id: string): void`\n\n**delete** `/v1/content/releases/{release_id}/items/{item_id}`\n\nRemoves an item from a release. Only draft releases can have items removed.\n\n### Parameters\n\n- `release_id: string`\n\n- `item_id: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nawait client.content.releases.items.remove('item_id', { release_id: 'release_id' })\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/domains',
    httpMethod: 'get',
    summary: 'List Domains',
    description:
      'Retrieves a paginated list of custom domains linked to the website, including Cloudflare verification and SSL status.',
    stainlessPath: '(resource) domains > (method) list',
    qualified: 'client.domains.list',
    params: ['ending_before?: string;', 'limit?: number;', 'starting_after?: string;'],
    response:
      '{ id: string; created: string; hostname: string; updated: string; wildcard: boolean; ssl_status?: string; status?: string; }',
    markdown:
      "## list\n\n`client.domains.list(ending_before?: string, limit?: number, starting_after?: string): { id: string; created: string; hostname: string; updated: string; wildcard: boolean; ssl_status?: string; status?: string; }`\n\n**get** `/v1/domains`\n\nRetrieves a paginated list of custom domains linked to the website, including Cloudflare verification and SSL status.\n\n### Parameters\n\n- `ending_before?: string`\n  Cursor for backward pagination\n\n- `limit?: number`\n  Maximum number of domains to return (1-100)\n\n- `starting_after?: string`\n  Cursor for forward pagination\n\n### Returns\n\n- `{ id: string; created: string; hostname: string; updated: string; wildcard: boolean; ssl_status?: string; status?: string; }`\n  A custom domain linked to a website.\n\n  - `id: string`\n  - `created: string`\n  - `hostname: string`\n  - `updated: string`\n  - `wildcard: boolean`\n  - `ssl_status?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\n// Automatically fetches more pages as needed.\nfor await (const domain of client.domains.list()) {\n  console.log(domain);\n}\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/email',
    httpMethod: 'get',
    summary: 'List Emails',
    description:
      'Retrieves a paginated list of sent emails. Returns email metadata including delivery status.',
    stainlessPath: '(resource) email > (method) list',
    qualified: 'client.email.list',
    params: ['ending_before?: string;', 'limit?: number;', 'starting_after?: string;'],
    response:
      "{ id: string; created_at: string; from: string; subject: string; to: string[]; bcc?: string[]; cc?: string[]; last_event?: 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'complained'; reply_to?: string[]; }",
    markdown:
      "## list\n\n`client.email.list(ending_before?: string, limit?: number, starting_after?: string): { id: string; created_at: string; from: string; subject: string; to: string[]; bcc?: string[]; cc?: string[]; last_event?: 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'complained'; reply_to?: string[]; }`\n\n**get** `/v1/email`\n\nRetrieves a paginated list of sent emails. Returns email metadata including delivery status.\n\n### Parameters\n\n- `ending_before?: string`\n  Cursor for backward pagination. Pass the ID of the first email from the previous page.\n\n- `limit?: number`\n  Maximum number of emails to return (1-100)\n\n- `starting_after?: string`\n  Cursor for forward pagination. Pass the ID of the last email from the previous page.\n\n### Returns\n\n- `{ id: string; created_at: string; from: string; subject: string; to: string[]; bcc?: string[]; cc?: string[]; last_event?: 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'complained'; reply_to?: string[]; }`\n  A sent email object\n\n  - `id: string`\n  - `created_at: string`\n  - `from: string`\n  - `subject: string`\n  - `to: string[]`\n  - `bcc?: string[]`\n  - `cc?: string[]`\n  - `last_event?: 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'complained'`\n  - `reply_to?: string[]`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\n// Automatically fetches more pages as needed.\nfor await (const email of client.email.list()) {\n  console.log(email);\n}\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/email/{email_id}',
    httpMethod: 'get',
    summary: 'Get Email',
    description: 'Retrieves a single email by its unique identifier.',
    stainlessPath: '(resource) email > (method) get',
    qualified: 'client.email.get',
    params: ['email_id: string;'],
    response:
      "{ id: string; created_at: string; from: string; subject: string; to: string[]; bcc?: string[]; cc?: string[]; html?: string; last_event?: 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'complained'; reply_to?: string[]; text?: string; }",
    markdown:
      "## get\n\n`client.email.get(email_id: string): { id: string; created_at: string; from: string; subject: string; to: string[]; bcc?: string[]; cc?: string[]; html?: string; last_event?: 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'complained'; reply_to?: string[]; text?: string; }`\n\n**get** `/v1/email/{email_id}`\n\nRetrieves a single email by its unique identifier.\n\n### Parameters\n\n- `email_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; from: string; subject: string; to: string[]; bcc?: string[]; cc?: string[]; html?: string; last_event?: 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'complained'; reply_to?: string[]; text?: string; }`\n  A sent email object with full body content\n\n  - `id: string`\n  - `created_at: string`\n  - `from: string`\n  - `subject: string`\n  - `to: string[]`\n  - `bcc?: string[]`\n  - `cc?: string[]`\n  - `html?: string`\n  - `last_event?: 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'complained'`\n  - `reply_to?: string[]`\n  - `text?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst email = await client.email.get('email_id');\n\nconsole.log(email);\n```",
  },
  {
    name: 'send',
    endpoint: '/v1/email',
    httpMethod: 'post',
    summary: 'Send Email',
    description: 'Sends a single email. The sender address must be a verified identity for this website.',
    stainlessPath: '(resource) email > (method) send',
    qualified: 'client.email.send',
    params: [
      'from: string;',
      'subject: string;',
      'to: string | string[];',
      'attachments?: { content: string; filename: string; content_type?: string; }[];',
      'bcc?: string | string[];',
      'cc?: string | string[];',
      'headers?: object;',
      'html?: string;',
      'reply_to?: string | string[];',
      'tags?: { name: string; value: string; }[];',
      'text?: string;',
    ],
    response: '{ id: string; }',
    markdown:
      "## send\n\n`client.email.send(from: string, subject: string, to: string | string[], attachments?: { content: string; filename: string; content_type?: string; }[], bcc?: string | string[], cc?: string | string[], headers?: object, html?: string, reply_to?: string | string[], tags?: { name: string; value: string; }[], text?: string): { id: string; }`\n\n**post** `/v1/email`\n\nSends a single email. The sender address must be a verified identity for this website.\n\n### Parameters\n\n- `from: string`\n  Sender email address. To include a friendly name, use the format 'Your Name <sender@domain.com>'.\n\n- `subject: string`\n  Email subject line\n\n- `to: string | string[]`\n  Recipient email address(es). Maximum 50.\n\n- `attachments?: { content: string; filename: string; content_type?: string; }[]`\n  List of file attachments. Total size must not exceed 40MB after Base64 encoding.\n\n- `bcc?: string | string[]`\n  Blind carbon copy recipient(s)\n\n- `cc?: string | string[]`\n  Carbon copy recipient(s)\n\n- `headers?: object`\n  Custom email headers as key-value pairs\n\n- `html?: string`\n  The HTML version of the message body\n\n- `reply_to?: string | string[]`\n  Reply-to email address(es)\n\n- `tags?: { name: string; value: string; }[]`\n  Custom metadata tags for the email (max 50)\n\n- `text?: string`\n  The plain text version of the message body\n\n### Returns\n\n- `{ id: string; }`\n  Response after sending an email\n\n  - `id: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst response = await client.email.send({\n  from: 'x',\n  subject: 'x',\n  to: 'dev@stainless.com',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/email/identities',
    httpMethod: 'post',
    summary: 'Create Identity',
    description:
      'Creates a new sender identity for email verification. For email identities, a verification email is sent. For domain identities, DNS records are returned that must be configured to verify ownership.',
    stainlessPath: '(resource) email.identities > (method) create',
    qualified: 'client.email.identities.create',
    params: [
      "{ type: 'email'; value: string; } | { type: 'domain'; value: string; mail_from_enabled?: boolean; mail_from_subdomain?: string; };",
    ],
    response:
      "{ id: string; created_at: string; mail_from_enabled: boolean; status: 'pending' | 'verified' | 'failed'; type: 'email' | 'domain'; value: string; mail_from_subdomain?: string; verification_records?: { name: string; status: 'pending' | 'verified' | 'failed'; type: 'TXT' | 'CNAME' | 'MX'; value: string; priority?: number; }[]; }",
  },
  {
    name: 'list',
    endpoint: '/v1/email/identities',
    httpMethod: 'get',
    summary: 'List Identities',
    description:
      'Retrieves a paginated list of sender identities (email addresses and domains) configured for this website.',
    stainlessPath: '(resource) email.identities > (method) list',
    qualified: 'client.email.identities.list',
    params: ['ending_before?: string;', 'limit?: number;', 'starting_after?: string;'],
    response:
      "{ id: string; created_at: string; mail_from_enabled: boolean; status: 'pending' | 'verified' | 'failed'; type: 'email' | 'domain'; value: string; mail_from_subdomain?: string; verification_records?: { name: string; status: 'pending' | 'verified' | 'failed'; type: 'TXT' | 'CNAME' | 'MX'; value: string; priority?: number; }[]; }",
    markdown:
      "## list\n\n`client.email.identities.list(ending_before?: string, limit?: number, starting_after?: string): { id: string; created_at: string; mail_from_enabled: boolean; status: 'pending' | 'verified' | 'failed'; type: 'email' | 'domain'; value: string; mail_from_subdomain?: string; verification_records?: object[]; }`\n\n**get** `/v1/email/identities`\n\nRetrieves a paginated list of sender identities (email addresses and domains) configured for this website.\n\n### Parameters\n\n- `ending_before?: string`\n  Cursor for backward pagination. Pass the ID of the first identity from the previous page.\n\n- `limit?: number`\n  Maximum number of identities to return (1-100)\n\n- `starting_after?: string`\n  Cursor for forward pagination. Pass the ID of the last identity from the previous page.\n\n### Returns\n\n- `{ id: string; created_at: string; mail_from_enabled: boolean; status: 'pending' | 'verified' | 'failed'; type: 'email' | 'domain'; value: string; mail_from_subdomain?: string; verification_records?: { name: string; status: 'pending' | 'verified' | 'failed'; type: 'TXT' | 'CNAME' | 'MX'; value: string; priority?: number; }[]; }`\n  A verified sender identity (email address or domain) for sending emails\n\n  - `id: string`\n  - `created_at: string`\n  - `mail_from_enabled: boolean`\n  - `status: 'pending' | 'verified' | 'failed'`\n  - `type: 'email' | 'domain'`\n  - `value: string`\n  - `mail_from_subdomain?: string`\n  - `verification_records?: { name: string; status: 'pending' | 'verified' | 'failed'; type: 'TXT' | 'CNAME' | 'MX'; value: string; priority?: number; }[]`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\n// Automatically fetches more pages as needed.\nfor await (const identity of client.email.identities.list()) {\n  console.log(identity);\n}\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/email/identities/{identity_id}',
    httpMethod: 'delete',
    summary: 'Delete Identity',
    description:
      'Permanently deletes a sender identity. Emails can no longer be sent from this address or domain after deletion.',
    stainlessPath: '(resource) email.identities > (method) delete',
    qualified: 'client.email.identities.delete',
    params: ['identity_id: string;'],
    markdown:
      "## delete\n\n`client.email.identities.delete(identity_id: string): void`\n\n**delete** `/v1/email/identities/{identity_id}`\n\nPermanently deletes a sender identity. Emails can no longer be sent from this address or domain after deletion.\n\n### Parameters\n\n- `identity_id: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nawait client.email.identities.delete('identity_id')\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/email/identities/{identity_id}',
    httpMethod: 'get',
    summary: 'Get Identity',
    description:
      'Retrieves a sender identity by ID. Returns the identity with its current verification status and any required DNS records.',
    stainlessPath: '(resource) email.identities > (method) get',
    qualified: 'client.email.identities.get',
    params: ['identity_id: string;'],
    response:
      "{ id: string; created_at: string; mail_from_enabled: boolean; status: 'pending' | 'verified' | 'failed'; type: 'email' | 'domain'; value: string; mail_from_subdomain?: string; verification_records?: { name: string; status: 'pending' | 'verified' | 'failed'; type: 'TXT' | 'CNAME' | 'MX'; value: string; priority?: number; }[]; }",
    markdown:
      "## get\n\n`client.email.identities.get(identity_id: string): { id: string; created_at: string; mail_from_enabled: boolean; status: 'pending' | 'verified' | 'failed'; type: 'email' | 'domain'; value: string; mail_from_subdomain?: string; verification_records?: object[]; }`\n\n**get** `/v1/email/identities/{identity_id}`\n\nRetrieves a sender identity by ID. Returns the identity with its current verification status and any required DNS records.\n\n### Parameters\n\n- `identity_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; mail_from_enabled: boolean; status: 'pending' | 'verified' | 'failed'; type: 'email' | 'domain'; value: string; mail_from_subdomain?: string; verification_records?: { name: string; status: 'pending' | 'verified' | 'failed'; type: 'TXT' | 'CNAME' | 'MX'; value: string; priority?: number; }[]; }`\n  A verified sender identity (email address or domain) for sending emails\n\n  - `id: string`\n  - `created_at: string`\n  - `mail_from_enabled: boolean`\n  - `status: 'pending' | 'verified' | 'failed'`\n  - `type: 'email' | 'domain'`\n  - `value: string`\n  - `mail_from_subdomain?: string`\n  - `verification_records?: { name: string; status: 'pending' | 'verified' | 'failed'; type: 'TXT' | 'CNAME' | 'MX'; value: string; priority?: number; }[]`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst identity = await client.email.identities.get('identity_id');\n\nconsole.log(identity);\n```",
  },
  {
    name: 'verify',
    endpoint: '/v1/email/identities/{identity_id}/verify',
    httpMethod: 'post',
    summary: 'Verify Identity',
    description:
      "Triggers a manual recheck of the identity's verification status against AWS SES. Returns the identity with its updated status.",
    stainlessPath: '(resource) email.identities > (method) verify',
    qualified: 'client.email.identities.verify',
    params: ['identity_id: string;', 'resend?: boolean;'],
    response:
      "{ id: string; created_at: string; mail_from_enabled: boolean; status: 'pending' | 'verified' | 'failed'; type: 'email' | 'domain'; value: string; mail_from_subdomain?: string; verification_records?: { name: string; status: 'pending' | 'verified' | 'failed'; type: 'TXT' | 'CNAME' | 'MX'; value: string; priority?: number; }[]; }",
    markdown:
      "## verify\n\n`client.email.identities.verify(identity_id: string, resend?: boolean): { id: string; created_at: string; mail_from_enabled: boolean; status: 'pending' | 'verified' | 'failed'; type: 'email' | 'domain'; value: string; mail_from_subdomain?: string; verification_records?: object[]; }`\n\n**post** `/v1/email/identities/{identity_id}/verify`\n\nTriggers a manual recheck of the identity's verification status against AWS SES. Returns the identity with its updated status.\n\n### Parameters\n\n- `identity_id: string`\n\n- `resend?: boolean`\n  If true and the identity is an unverified email address, resend the verification email.\n\n### Returns\n\n- `{ id: string; created_at: string; mail_from_enabled: boolean; status: 'pending' | 'verified' | 'failed'; type: 'email' | 'domain'; value: string; mail_from_subdomain?: string; verification_records?: { name: string; status: 'pending' | 'verified' | 'failed'; type: 'TXT' | 'CNAME' | 'MX'; value: string; priority?: number; }[]; }`\n  A verified sender identity (email address or domain) for sending emails\n\n  - `id: string`\n  - `created_at: string`\n  - `mail_from_enabled: boolean`\n  - `status: 'pending' | 'verified' | 'failed'`\n  - `type: 'email' | 'domain'`\n  - `value: string`\n  - `mail_from_subdomain?: string`\n  - `verification_records?: { name: string; status: 'pending' | 'verified' | 'failed'; type: 'TXT' | 'CNAME' | 'MX'; value: string; priority?: number; }[]`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst identity = await client.email.identities.verify('identity_id');\n\nconsole.log(identity);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/files',
    httpMethod: 'get',
    summary: 'List Files',
    description:
      'Retrieves a paginated list of files uploaded to the website. Supports filtering by MIME type, folder path, creation date, and filename search.',
    stainlessPath: '(resource) files > (method) list',
    qualified: 'client.files.list',
    params: [
      'created?: { gt?: number; gte?: number; lt?: number; lte?: number; };',
      'ending_before?: string;',
      'limit?: number;',
      'mime_type?: string;',
      'path?: string;',
      'query?: string;',
      'starting_after?: string;',
    ],
    response:
      '{ id: string; created: string; filename: string; mime_type: string; size: number; updated: string; url: string; content_hash?: string; metadata?: object; path?: string; }',
    markdown:
      "## list\n\n`client.files.list(created?: { gt?: number; gte?: number; lt?: number; lte?: number; }, ending_before?: string, limit?: number, mime_type?: string, path?: string, query?: string, starting_after?: string): { id: string; created: string; filename: string; mime_type: string; size: number; updated: string; url: string; content_hash?: string; metadata?: object; path?: string; }`\n\n**get** `/v1/files`\n\nRetrieves a paginated list of files uploaded to the website. Supports filtering by MIME type, folder path, creation date, and filename search.\n\n### Parameters\n\n- `created?: { gt?: number; gte?: number; lt?: number; lte?: number; }`\n  Filter by creation date\n  - `gt?: number`\n    Greater than (Unix timestamp in seconds)\n  - `gte?: number`\n    Greater than or equal (Unix timestamp in seconds)\n  - `lt?: number`\n    Less than (Unix timestamp in seconds)\n  - `lte?: number`\n    Less than or equal (Unix timestamp in seconds)\n\n- `ending_before?: string`\n  Cursor for backward pagination\n\n- `limit?: number`\n  Maximum number of files to return (1-100)\n\n- `mime_type?: string`\n  Filter by MIME type (supports wildcards like 'image/*')\n\n- `path?: string`\n  Filter by folder path\n\n- `query?: string`\n  Search in filename\n\n- `starting_after?: string`\n  Cursor for forward pagination\n\n### Returns\n\n- `{ id: string; created: string; filename: string; mime_type: string; size: number; updated: string; url: string; content_hash?: string; metadata?: object; path?: string; }`\n  A file uploaded to CDN storage, linked to a website.\n\n  - `id: string`\n  - `created: string`\n  - `filename: string`\n  - `mime_type: string`\n  - `size: number`\n  - `updated: string`\n  - `url: string`\n  - `content_hash?: string`\n  - `metadata?: object`\n  - `path?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\n// Automatically fetches more pages as needed.\nfor await (const file of client.files.list()) {\n  console.log(file);\n}\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/files/{file_id}',
    httpMethod: 'get',
    summary: 'Get File',
    description: 'Retrieves a file by its ID, including its CDN URL and metadata.',
    stainlessPath: '(resource) files > (method) get',
    qualified: 'client.files.get',
    params: ['file_id: string;'],
    response:
      '{ id: string; created: string; filename: string; mime_type: string; size: number; updated: string; url: string; content_hash?: string; metadata?: object; path?: string; }',
    markdown:
      "## get\n\n`client.files.get(file_id: string): { id: string; created: string; filename: string; mime_type: string; size: number; updated: string; url: string; content_hash?: string; metadata?: object; path?: string; }`\n\n**get** `/v1/files/{file_id}`\n\nRetrieves a file by its ID, including its CDN URL and metadata.\n\n### Parameters\n\n- `file_id: string`\n\n### Returns\n\n- `{ id: string; created: string; filename: string; mime_type: string; size: number; updated: string; url: string; content_hash?: string; metadata?: object; path?: string; }`\n  A file uploaded to CDN storage, linked to a website.\n\n  - `id: string`\n  - `created: string`\n  - `filename: string`\n  - `mime_type: string`\n  - `size: number`\n  - `updated: string`\n  - `url: string`\n  - `content_hash?: string`\n  - `metadata?: object`\n  - `path?: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst file = await client.files.get('file_id');\n\nconsole.log(file);\n```",
  },
  {
    name: 'enable',
    endpoint: '/v1/push-notifications/enable',
    httpMethod: 'post',
    summary: 'Enable Notifications',
    description:
      'Enables push notifications for the app by generating VAPID keys. Idempotent - returns existing keys if already enabled. Hercules recommends calling this during app initialization.',
    stainlessPath: '(resource) push_notifications > (method) enable',
    qualified: 'client.pushNotifications.enable',
    response: '{ vapidPublicKey: string; }',
    markdown:
      "## enable\n\n`client.pushNotifications.enable(): { vapidPublicKey: string; }`\n\n**post** `/v1/push-notifications/enable`\n\nEnables push notifications for the app by generating VAPID keys. Idempotent - returns existing keys if already enabled. Hercules recommends calling this during app initialization.\n\n### Returns\n\n- `{ vapidPublicKey: string; }`\n  Response containing the VAPID public key for push subscriptions.\n\n  - `vapidPublicKey: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst response = await client.pushNotifications.enable();\n\nconsole.log(response);\n```",
  },
  {
    name: 'identify',
    endpoint: '/v1/push-notifications/identify',
    httpMethod: 'post',
    summary: 'Identify Subscription',
    description:
      "Updates a subscription's visitorId to the provided userId. Call after sign-in to link the subscription to the authenticated user's account.",
    stainlessPath: '(resource) push_notifications > (method) identify',
    qualified: 'client.pushNotifications.identify',
    params: ['secret: string;', 'userId: string;'],
    response: '{ success: boolean; alreadyIdentified?: boolean; }',
    markdown:
      "## identify\n\n`client.pushNotifications.identify(secret: string, userId: string): { success: boolean; alreadyIdentified?: boolean; }`\n\n**post** `/v1/push-notifications/identify`\n\nUpdates a subscription's visitorId to the provided userId. Call after sign-in to link the subscription to the authenticated user's account.\n\n### Parameters\n\n- `secret: string`\n  Subscription secret from a previous anonymous subscription\n\n- `userId: string`\n  Authenticated user ID to link the subscription to\n\n### Returns\n\n- `{ success: boolean; alreadyIdentified?: boolean; }`\n  Result of the identify operation.\n\n  - `success: boolean`\n  - `alreadyIdentified?: boolean`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst response = await client.pushNotifications.identify({ secret: 'x', userId: 'x' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'send',
    endpoint: '/v1/push-notifications/send',
    httpMethod: 'post',
    summary: 'Send Notification',
    description:
      'Sends push notifications to specified visitors and/or topics. Specify visitorIds, topics, or both (combined as union). Omit both to broadcast to all subscribers.',
    stainlessPath: '(resource) push_notifications > (method) send',
    qualified: 'client.pushNotifications.send',
    params: [
      'title: string;',
      'badge?: string;',
      'body?: string;',
      'data?: object;',
      'icon?: string;',
      'image?: string;',
      'topics?: string[];',
      'visitorIds?: string[];',
    ],
    response: '{ failed: number; sent: number; }',
    markdown:
      "## send\n\n`client.pushNotifications.send(title: string, badge?: string, body?: string, data?: object, icon?: string, image?: string, topics?: string[], visitorIds?: string[]): { failed: number; sent: number; }`\n\n**post** `/v1/push-notifications/send`\n\nSends push notifications to specified visitors and/or topics. Specify visitorIds, topics, or both (combined as union). Omit both to broadcast to all subscribers.\n\n### Parameters\n\n- `title: string`\n  Notification title\n\n- `badge?: string`\n  Badge URL for mobile devices\n\n- `body?: string`\n  Notification body text\n\n- `data?: object`\n  Custom data payload to include with the notification\n\n- `icon?: string`\n  Icon URL (small icon displayed in the notification)\n\n- `image?: string`\n  Image URL (larger image displayed in the notification body)\n\n- `topics?: string[]`\n  Topics to send to. All visitors subscribed to any of these topics will receive the notification. Combined with visitorIds as a union.\n\n- `visitorIds?: string[]`\n  Visitor IDs to send to. Combined with topics as a union.\n\n### Returns\n\n- `{ failed: number; sent: number; }`\n  Result of the send operation with success and failure counts.\n\n  - `failed: number`\n  - `sent: number`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst response = await client.pushNotifications.send({ title: 'x' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'subscribe',
    endpoint: '/v1/push-notifications/subscribe',
    httpMethod: 'post',
    summary: 'Register Subscription',
    description:
      'Registers a push subscription with the provided visitorId. Use authenticated userId or generate a UUID for anonymous users. Upserts by endpoint to handle re-subscriptions. Returns a secret for subscription ownership.',
    stainlessPath: '(resource) push_notifications > (method) subscribe',
    qualified: 'client.pushNotifications.subscribe',
    params: [
      'subscription: { endpoint: string; keys: { auth: string; p256dh: string; }; expirationTime?: number; };',
      'visitorId: string;',
    ],
    response: '{ secret: string; }',
    markdown:
      "## subscribe\n\n`client.pushNotifications.subscribe(subscription: { endpoint: string; keys: { auth: string; p256dh: string; }; expirationTime?: number; }, visitorId: string): { secret: string; }`\n\n**post** `/v1/push-notifications/subscribe`\n\nRegisters a push subscription with the provided visitorId. Use authenticated userId or generate a UUID for anonymous users. Upserts by endpoint to handle re-subscriptions. Returns a secret for subscription ownership.\n\n### Parameters\n\n- `subscription: { endpoint: string; keys: { auth: string; p256dh: string; }; expirationTime?: number; }`\n  Web Push subscription object from pushManager.subscribe()\n  - `endpoint: string`\n    Push service endpoint URL\n  - `keys: { auth: string; p256dh: string; }`\n  - `expirationTime?: number`\n    Subscription expiration timestamp\n\n- `visitorId: string`\n  Visitor identifier. Use authenticated userId or generate a UUID for anonymous users.\n\n### Returns\n\n- `{ secret: string; }`\n  The created or updated subscription.\n\n  - `secret: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst response = await client.pushNotifications.subscribe({\n  subscription: {\n  endpoint: 'https://example.com',\n  keys: { auth: 'auth', p256dh: 'p256dh' },\n},\n  visitorId: 'x',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'unsubscribe',
    endpoint: '/v1/push-notifications/unsubscribe',
    httpMethod: 'post',
    summary: 'Remove Subscription',
    description: 'Removes a push subscription by secret.',
    stainlessPath: '(resource) push_notifications > (method) unsubscribe',
    qualified: 'client.pushNotifications.unsubscribe',
    params: ['secret: string;'],
    response: '{ success: boolean; }',
    markdown:
      "## unsubscribe\n\n`client.pushNotifications.unsubscribe(secret: string): { success: boolean; }`\n\n**post** `/v1/push-notifications/unsubscribe`\n\nRemoves a push subscription by secret.\n\n### Parameters\n\n- `secret: string`\n  Subscription secret to remove\n\n### Returns\n\n- `{ success: boolean; }`\n  Result of the unsubscribe operation.\n\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst response = await client.pushNotifications.unsubscribe({ secret: 'x' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/push-notifications/topics',
    httpMethod: 'get',
    summary: 'List Topics',
    description: 'Lists topics a visitor is subscribed to.',
    stainlessPath: '(resource) push_notifications.topics > (method) list',
    qualified: 'client.pushNotifications.topics.list',
    params: ['visitorId: string;', 'ending_before?: string;', 'limit?: number;', 'starting_after?: string;'],
    response: '{ id: string; topic: string; }',
    markdown:
      "## list\n\n`client.pushNotifications.topics.list(visitorId: string, ending_before?: string, limit?: number, starting_after?: string): { id: string; topic: string; }`\n\n**get** `/v1/push-notifications/topics`\n\nLists topics a visitor is subscribed to.\n\n### Parameters\n\n- `visitorId: string`\n  Visitor ID to list topics for\n\n- `ending_before?: string`\n  Cursor for backward pagination\n\n- `limit?: number`\n  Maximum number of topics to return (1-100)\n\n- `starting_after?: string`\n  Cursor for forward pagination\n\n### Returns\n\n- `{ id: string; topic: string; }`\n  A topic subscription for a visitor.\n\n  - `id: string`\n  - `topic: string`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\n// Automatically fetches more pages as needed.\nfor await (const topicListResponse of client.pushNotifications.topics.list({ visitorId: 'x' })) {\n  console.log(topicListResponse);\n}\n```",
  },
  {
    name: 'subscribe',
    endpoint: '/v1/push-notifications/topics/subscribe',
    httpMethod: 'post',
    summary: 'Subscribe to Topics',
    description:
      'Subscribes a visitor to topics. Topics are per-visitor, so all devices for this visitor will receive notifications sent to these topics.',
    stainlessPath: '(resource) push_notifications.topics > (method) subscribe',
    qualified: 'client.pushNotifications.topics.subscribe',
    params: ['topics: string[];', 'visitorId: string;'],
    response: '{ topics: string[]; }',
    markdown:
      "## subscribe\n\n`client.pushNotifications.topics.subscribe(topics: string[], visitorId: string): { topics: string[]; }`\n\n**post** `/v1/push-notifications/topics/subscribe`\n\nSubscribes a visitor to topics. Topics are per-visitor, so all devices for this visitor will receive notifications sent to these topics.\n\n### Parameters\n\n- `topics: string[]`\n  Topic names to subscribe to (e.g., 'announcements', 'channel:general')\n\n- `visitorId: string`\n  Visitor ID to subscribe to topics\n\n### Returns\n\n- `{ topics: string[]; }`\n  The visitor's updated topic subscriptions.\n\n  - `topics: string[]`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst response = await client.pushNotifications.topics.subscribe({ topics: ['x'], visitorId: 'x' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'unsubscribe',
    endpoint: '/v1/push-notifications/topics/unsubscribe',
    httpMethod: 'post',
    summary: 'Unsubscribe from Topics',
    description: 'Unsubscribes a visitor from specified topics.',
    stainlessPath: '(resource) push_notifications.topics > (method) unsubscribe',
    qualified: 'client.pushNotifications.topics.unsubscribe',
    params: ['topics: string[];', 'visitorId: string;'],
    response: '{ topics: string[]; }',
    markdown:
      "## unsubscribe\n\n`client.pushNotifications.topics.unsubscribe(topics: string[], visitorId: string): { topics: string[]; }`\n\n**post** `/v1/push-notifications/topics/unsubscribe`\n\nUnsubscribes a visitor from specified topics.\n\n### Parameters\n\n- `topics: string[]`\n  Topic names to unsubscribe from\n\n- `visitorId: string`\n  Visitor ID to unsubscribe from topics\n\n### Returns\n\n- `{ topics: string[]; }`\n  The visitor's remaining topic subscriptions after unsubscribing.\n\n  - `topics: string[]`\n\n### Example\n\n```typescript\nimport Hercules from '@usehercules/sdk';\n\nconst client = new Hercules();\n\nconst response = await client.pushNotifications.topics.unsubscribe({ topics: ['x'], visitorId: 'x' });\n\nconsole.log(response);\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}
