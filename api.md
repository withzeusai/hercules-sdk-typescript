# hercules TypeScript API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`Commerce`](#commerce)
  - [Create Checkout Session](#create-checkout-session)
  - [Cancel Subscription](#cancel-subscription)
  - [Check Entitlement](#check-entitlement)
  - [`Commerce CheckoutSessions`](#commerce-checkoutsessions)
    - [Get Checkout Session](#get-checkout-session)
  - [`Commerce Customers`](#commerce-customers)
    - [List Customers](#list-customers)
    - [Get Customer](#get-customer)
    - [Create Customer](#create-customer)
    - [Update Customer](#update-customer)
    - [Create Billing Portal Session](#create-billing-portal-session)
  - [`Commerce Products`](#commerce-products)
    - [List Products](#list-products)
    - [Get Product](#get-product)
    - [Create Product](#create-product)
    - [Update Product](#update-product)
    - [`Commerce Products Resources`](#commerce-products-resources)
      - [List Product Resources](#list-product-resources)
      - [Attach Resources to Product](#attach-resources-to-product)
      - [Detach Resources from Product](#detach-resources-from-product)
    - [`Commerce Products Variants`](#commerce-products-variants)
      - [List Product Variants](#list-product-variants)
      - [Get Product Variant](#get-product-variant)
      - [Create Product Variant](#create-product-variant)
      - [Update Product Variant](#update-product-variant)
  - [`Commerce Coupons`](#commerce-coupons)
    - [List Coupons](#list-coupons)
    - [Get Coupon](#get-coupon)
    - [Create Coupon](#create-coupon)
    - [Update Coupon](#update-coupon)
  - [`Commerce Features`](#commerce-features)
    - [List Features](#list-features)
    - [Get Feature](#get-feature)
    - [Create Feature](#create-feature)
    - [Update Feature](#update-feature)
  - [`Commerce Entitlements`](#commerce-entitlements)
    - [List Entitlement Grants](#list-entitlement-grants)
    - [Get Entitlement Grant](#get-entitlement-grant)
    - [Create Entitlement Grant](#create-entitlement-grant)
    - [Update Entitlement Grant](#update-entitlement-grant)
- [`Connectors`](#connectors)
  - [Get Connector Credentials](#get-connector-credentials)
  - [Send Connector Request](#send-connector-request)
- [`Domains`](#domains)
  - [List Domains](#list-domains)
  - [Check Domain Availability](#check-domain-availability)
  - [Search Domains](#search-domains)
  - [`Domains Purchased`](#domains-purchased)
    - [Purchase Domain](#purchase-domain)
    - [Confirm Domain Purchase](#confirm-domain-purchase)
    - [List Purchased Domains](#list-purchased-domains)
    - [Get Purchased Domain](#get-purchased-domain)
- [`Email`](#email)
  - [Send Email](#send-email)
  - [List Emails](#list-emails)
  - [Get Email](#get-email)
  - [`Email Identities`](#email-identities)
    - [Create Identity](#create-identity)
    - [List Identities](#list-identities)
    - [Get Identity](#get-identity)
    - [Verify Identity](#verify-identity)
    - [Delete Identity](#delete-identity)
  - [`Email Suppressions`](#email-suppressions)
    - [Create Suppression](#create-suppression)
    - [List Suppressions](#list-suppressions)
    - [Get Suppression](#get-suppression)
    - [Remove Suppression](#remove-suppression)
    - [Add Batch Suppressions](#add-batch-suppressions)
    - [Remove Batch Suppressions](#remove-batch-suppressions)
- [`Files`](#files)
  - [List Files](#list-files)
  - [Get File](#get-file)
- [`PushNotifications`](#pushnotifications)
  - [Enable Notifications](#enable-notifications)
  - [Register Subscription](#register-subscription)
  - [Remove Subscription](#remove-subscription)
  - [Identify Subscription](#identify-subscription)
  - [Send Notification](#send-notification)
  - [`PushNotifications Topics`](#pushnotifications-topics)
    - [Subscribe to Topics](#subscribe-to-topics)
    - [Unsubscribe from Topics](#unsubscribe-from-topics)
    - [List Topics](#list-topics)

## Setup

```ts
import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: process.env['HERCULES_API_KEY'], // defaults to the HERCULES_API_KEY env var
});
```

## `Commerce`

Commerce APIs are currently in beta.

### Create Checkout Session

Creates a checkout session for a customer to subscribe to a product. Returns a URL to redirect the customer to for payment. After successful payment, the customer is subscribed to the product and gains access to its entitlements.

| Direction | Type |
| --- | --- |
| Request | [`CommerceCheckoutParams`](./src/resources/commerce/commerce.ts) |
| Response | [`CommerceCheckoutResponse`](./src/resources/commerce/commerce.ts) |

```ts
const commerce = await client.commerce.checkout({
  customer_id: 'cus_1234567890',
  line_items: [
    {
      variant_id: 'var_1234567890',
      quantity: 1,
    },
  ],
  success_url: 'https://example.com',
});
```

### Cancel Subscription

Cancels a customer's subscription. By default, the subscription remains active until the end of the current billing period. Set cancellation_timing to 'immediate' to cancel immediately.

| Direction | Type |
| --- | --- |
| Request | [`CommerceCancelParams`](./src/resources/commerce/commerce.ts) |
| Response | [`CommerceCancelResponse`](./src/resources/commerce/commerce.ts) |

```ts
const commerce = await client.commerce.cancel({
  customer_id: 'cus_1234567890',
  subscription_id: 'sub_1234567890',
  cancellation_timing: 'at_billing_period_end',
});
```

### Check Entitlement

Verifies if a customer has access to a specific feature. Use this to gate features in your app based on the customer's active subscription and the entitlements attached to their product. Hercules recommends calling this before allowing access to premium features.

| Direction | Type |
| --- | --- |
| Request | [`CommerceCheckParams`](./src/resources/commerce/commerce.ts) |
| Response | [`CommerceCheckResponse`](./src/resources/commerce/commerce.ts) |

```ts
const commerce = await client.commerce.check({
  customer_id: 'cus_1234567890',
  resource_id: 'feat_1234567890',
});
```

### `Commerce CheckoutSessions`

#### Get Checkout Session

Retrieve current payment and session status for a customer of this app. Call from your backend before fulfilling an order; do not trust the success redirect. A complete session can still be unpaid, including delayed payment methods. Test-mode payments must not fulfill live orders.

| Direction | Type |
| --- | --- |
| Request | [`CheckoutSessionGetParams`](./src/resources/commerce/checkout-sessions.ts) |
| Response | [`CheckoutSession`](./src/resources/commerce/checkout-sessions.ts) |

```ts
const checkoutSession = await client.commerce.checkoutSessions.get('checkoutSessionId', {
  customer_id: 'cus_1234567890',
});
```

### `Commerce Customers`

#### List Customers

Retrieves a paginated list of all customers. Customers are the billable entities in your app—typically users, organizations, or projects.

| Direction | Type |
| --- | --- |
| Request | [`CustomerListParams`](./src/resources/commerce/customers.ts) |
| Response | [`CustomersCursorIDPage`](./src/resources/commerce/customers.ts) |

```ts
const page = await client.commerce.customers.list();
```

#### Get Customer

Retrieves a customer by ID. Returns the customer object including contact information and billing address.

| Direction | Type |
| --- | --- |
| Response | [`CustomerGetResponse`](./src/resources/commerce/customers.ts) |

```ts
const customer = await client.commerce.customers.get('cus_1234567890');
```

#### Create Customer

Creates a new billable customer. A customer represents the entity in your app that will be charged—typically a user, organization, or project. Hercules recommends creating a customer immediately after creating the corresponding entity in your app.

| Direction | Type |
| --- | --- |
| Request | [`CustomerCreateParams`](./src/resources/commerce/customers.ts) |
| Response | [`Customer`](./src/resources/commerce/customers.ts) |

```ts
const customer = await client.commerce.customers.create({});
```

#### Update Customer

Updates an existing customer. Use this to modify contact information or billing address. Only provided fields are updated; omitted fields remain unchanged.

| Direction | Type |
| --- | --- |
| Request | [`CustomerUpdateParams`](./src/resources/commerce/customers.ts) |
| Response | [`Customer`](./src/resources/commerce/customers.ts) |

```ts
const customer = await client.commerce.customers.update('cus_1234567890', {});
```

#### Create Billing Portal Session

Generates a URL to a hosted billing portal where the customer can view invoices, update payment methods, and manage billing details. Redirect the customer to the returned URL.

| Direction | Type |
| --- | --- |
| Request | [`CustomerBillingPortalParams`](./src/resources/commerce/customers.ts) |
| Response | [`CustomerBillingPortalResponse`](./src/resources/commerce/customers.ts) |

```ts
const customer = await client.commerce.customers.billingPortal('cus_1234567890', {});
```

### `Commerce Products`

#### List Products

Retrieves a paginated list of subscription products. Products define the pricing and billing intervals for subscriptions. Each product can have resources attached that grant access to features or content.

| Direction | Type |
| --- | --- |
| Request | [`ProductListParams`](./src/resources/commerce/products/products.ts) |
| Response | [`ProductsCursorIDPage`](./src/resources/commerce/products/products.ts) |

```ts
const page = await client.commerce.products.list();
```

#### Get Product

Retrieves a product by ID. Returns the product object including pricing details and status.

| Direction | Type |
| --- | --- |
| Request | [`ProductGetParams`](./src/resources/commerce/products/products.ts) |
| Response | [`Product`](./src/resources/commerce/products/products.ts) |

```ts
const product = await client.commerce.products.get('productId');
```

#### Create Product

Creates a new subscription product with a recurring price. Common examples include Free, Pro, Business, or Teams tiers. After creating a product, attach resources to define which features or content customers on this product can access.

| Direction | Type |
| --- | --- |
| Request | [`ProductCreateParams`](./src/resources/commerce/products/products.ts) |
| Response | [`ProductCreateResponse`](./src/resources/commerce/products/products.ts) |

```ts
const product = await client.commerce.products.create({
  name: 'x',
  variants: [
    {
      name: 'x',
      unit_amount: 0,
    },
  ],
});
```

#### Update Product

Updates an existing product. Use this to modify the product name, description, or active status. Pricing cannot be changed after creation—create a new product instead.

| Direction | Type |
| --- | --- |
| Request | [`ProductUpdateParams`](./src/resources/commerce/products/products.ts) |
| Response | [`Product`](./src/resources/commerce/products/products.ts) |

```ts
const product = await client.commerce.products.update('productId', {});
```

#### `Commerce Products Resources`

##### List Product Resources

Retrieves all resources attached to a product. Resources define the entitlements customers gain access to when purchasing this product.

| Direction | Type |
| --- | --- |
| Request | [`ResourceListParams`](./src/resources/commerce/products/resources.ts) |
| Response | [`ResourceListResponse`](./src/resources/commerce/products/resources.ts) |

```ts
const page = await client.commerce.products.resources.list('productId');
```

##### Attach Resources to Product

Attaches one or more resources to a product. Customers who purchase this product will gain access to the attached resources. Resource type is inferred from the ID prefix (e.g., 'feat_' for features).

| Direction | Type |
| --- | --- |
| Request | [`ResourceAttachParams`](./src/resources/commerce/products/resources.ts) |
| Response | [`ResourceAttachResponse`](./src/resources/commerce/products/resources.ts) |

```ts
const resource = await client.commerce.products.resources.attach('productId', {
  resource_ids: [''],
});
```

##### Detach Resources from Product

Detaches one or more resources from a product. Customers will lose access to these resources when they purchase this product.

| Direction | Type |
| --- | --- |
| Request | [`ResourceDetachParams`](./src/resources/commerce/products/resources.ts) |

```ts
await client.commerce.products.resources.detach('productId', {
  resource_ids: [''],
});
```

#### `Commerce Products Variants`

##### List Product Variants

Retrieves all variants for a product. Variants represent different pricing tiers or configurations (e.g., Basic, Pro, Enterprise) within a single product.

| Direction | Type |
| --- | --- |
| Request | [`VariantListParams`](./src/resources/commerce/products/variants.ts) |
| Response | [`VariantsCursorIDPage`](./src/resources/commerce/products/variants.ts) |

```ts
const page = await client.commerce.products.variants.list('productId');
```

##### Get Product Variant

Retrieves a variant by ID. Returns the variant object including pricing details and status.

| Direction | Type |
| --- | --- |
| Request | [`VariantGetParams`](./src/resources/commerce/products/variants.ts) |
| Response | [`Variant`](./src/resources/commerce/products/variants.ts) |

```ts
const variant = await client.commerce.products.variants.get('variantId', {
  product_id: 'productId',
});
```

##### Create Product Variant

Creates a new variant with pricing for a product. Use variants to offer multiple pricing tiers or configurations (e.g., Basic at $10/month, Pro at $25/month). A Stripe Price is automatically created.

| Direction | Type |
| --- | --- |
| Request | [`VariantCreateParams`](./src/resources/commerce/products/variants.ts) |
| Response | [`Variant`](./src/resources/commerce/products/variants.ts) |

```ts
const variant = await client.commerce.products.variants.create('productId', {
  name: 'x',
  unit_amount: 0,
});
```

##### Update Product Variant

Updates an existing variant. Use this to modify the name, description, or active status. Pricing cannot be changed after creation—create a new variant instead.

| Direction | Type |
| --- | --- |
| Request | [`VariantUpdateParams`](./src/resources/commerce/products/variants.ts) |
| Response | [`Variant`](./src/resources/commerce/products/variants.ts) |

```ts
const variant = await client.commerce.products.variants.update('variantId', {
  product_id: 'productId',
});
```

### `Commerce Coupons`

#### List Coupons

Retrieves a paginated list of all coupons. Coupons provide discounts that customers can apply during checkout using a promo code.

| Direction | Type |
| --- | --- |
| Request | [`CouponListParams`](./src/resources/commerce/coupons.ts) |
| Response | [`CouponsCursorIDPage`](./src/resources/commerce/coupons.ts) |

```ts
const page = await client.commerce.coupons.list();
```

#### Get Coupon

Retrieves a coupon by ID. Returns the coupon object including discount details and redemption statistics.

| Direction | Type |
| --- | --- |
| Response | [`Coupon`](./src/resources/commerce/coupons.ts) |

```ts
const coupon = await client.commerce.coupons.get('coupon_1234567890');
```

#### Create Coupon

Creates a discount coupon with a promo code. Coupons can offer percentage or fixed-amount discounts and can be limited by redemption count or expiration date. Customers can apply coupons during checkout.

| Direction | Type |
| --- | --- |
| Request | [`CouponCreateParams`](./src/resources/commerce/coupons.ts) |
| Response | [`Coupon`](./src/resources/commerce/coupons.ts) |

```ts
const coupon = await client.commerce.coupons.create({
  code: 'LAUNCH20',
  duration: 'once',
});
```

#### Update Coupon

Updates an existing coupon. Use this to modify the display name or deactivate the coupon. Discount amounts and codes cannot be changed after creation.

| Direction | Type |
| --- | --- |
| Request | [`CouponUpdateParams`](./src/resources/commerce/coupons.ts) |
| Response | [`Coupon`](./src/resources/commerce/coupons.ts) |

```ts
const coupon = await client.commerce.coupons.update('coupon_1234567890', {});
```

### `Commerce Features`

#### List Features

Retrieves a paginated list of features. Features are reusable entitlements that can be attached to multiple products.

| Direction | Type |
| --- | --- |
| Request | [`FeatureListParams`](./src/resources/commerce/features.ts) |
| Response | [`FeaturesCursorIDPage`](./src/resources/commerce/features.ts) |

```ts
const page = await client.commerce.features.list();
```

#### Get Feature

Retrieves a feature by ID.

| Direction | Type |
| --- | --- |
| Response | [`Feature`](./src/resources/commerce/features.ts) |

```ts
const feature = await client.commerce.features.get('featureId');
```

#### Create Feature

Creates a new feature with a lookup key. Features can be attached to multiple products to grant customers access to the same entitlement across different subscription tiers.

| Direction | Type |
| --- | --- |
| Request | [`FeatureCreateParams`](./src/resources/commerce/features.ts) |
| Response | [`Feature`](./src/resources/commerce/features.ts) |

```ts
const feature = await client.commerce.features.create({
  name: 'x',
  metadata: {},
});
```

#### Update Feature

Updates an existing feature. Use this to modify metadata or active status.

| Direction | Type |
| --- | --- |
| Request | [`FeatureUpdateParams`](./src/resources/commerce/features.ts) |
| Response | [`Feature`](./src/resources/commerce/features.ts) |

```ts
const feature = await client.commerce.features.update('featureId', {});
```

### `Commerce Entitlements`

#### List Entitlement Grants

Retrieves a paginated list of entitlement grants. Grants represent customer access to features from one-time purchases or manual grants.

| Direction | Type |
| --- | --- |
| Request | [`EntitlementListParams`](./src/resources/commerce/entitlements.ts) |
| Response | [`EntitlementGrantsCursorIDPage`](./src/resources/commerce/entitlements.ts) |

```ts
const page = await client.commerce.entitlements.list();
```

#### Get Entitlement Grant

Retrieves an entitlement grant by ID.

| Direction | Type |
| --- | --- |
| Request | [`EntitlementGetParams`](./src/resources/commerce/entitlements.ts) |
| Response | [`EntitlementGrant`](./src/resources/commerce/entitlements.ts) |

```ts
const entitlementGrant = await client.commerce.entitlements.get('grantId');
```

#### Create Entitlement Grant

Manually creates an entitlement grant for a customer. Use this to grant access to features outside of the normal purchase flow, such as promotional access or support compensations.

| Direction | Type |
| --- | --- |
| Request | [`EntitlementCreateParams`](./src/resources/commerce/entitlements.ts) |
| Response | [`EntitlementGrant`](./src/resources/commerce/entitlements.ts) |

```ts
const entitlementGrant = await client.commerce.entitlements.create({
  customer_id: 'x',
  feature_id: 'x',
});
```

#### Update Entitlement Grant

Updates an entitlement grant. Use status: 'revoked' to void a grant and remove customer access.

| Direction | Type |
| --- | --- |
| Request | [`EntitlementUpdateParams`](./src/resources/commerce/entitlements.ts) |
| Response | [`EntitlementGrant`](./src/resources/commerce/entitlements.ts) |

```ts
const entitlementGrant = await client.commerce.entitlements.update('grantId', {});
```

## `Connectors`

Use the app connectors installed on the calling deployment. Requires a
deployment-bound API key. When several connections of one connector cover
the deployment, pass connection_id to select one.

Pull credentials with `credentials` and call the provider yourself. For
connectors whose provider is reached through a broker that never
discloses the token, `credentials` answers 409 and `request` sends the
call instead, signed server-side.

### Get Connector Credentials

Returns fresh credentials for the named connection of a connector, refreshing the OAuth access token on demand. Requires a deployment-bound API key, and the connection must be installed for the calling deployment. Secrets are keyed by role: access_token, api_key, or a credential field key. Errors carry a code: connector_not_installed (404), connection_not_linked (404), connector_not_connected (409), credentials_unavailable (409, reconnect in the dashboard), connector_brokered (409, use the request endpoint).

| Direction | Type |
| --- | --- |
| Request | [`ConnectorCredentialsParams`](./src/resources/connectors.ts) |
| Response | [`ConnectorCredentialsResponse`](./src/resources/connectors.ts) |

```ts
const connector = await client.connectors.credentials('slug', {
  connection_id: 'connectionId',
});
```

### Send Connector Request

Sends an HTTP request to a connector's provider API as the named connection, with credentials added server-side; the app never handles the token. Requires a deployment-bound API key, and the connection must be installed for the calling deployment. Answers 200 whenever the request reached the provider, with the provider's own status in the body. Errors carry a code: connector_not_installed (404), connection_not_linked (404), connector_not_connected (409), connector_not_brokered (400, use the credentials endpoint), provider_unreachable (502).

| Direction | Type |
| --- | --- |
| Request | [`ConnectorRequestParams`](./src/resources/connectors.ts) |
| Response | [`ConnectorRequestResponse`](./src/resources/connectors.ts) |

```ts
const connector = await client.connectors.request('slug', {
  endpoint: 'x',
  method: 'GET',
  connection_id: 'x',
});
```

## `Domains`

Manage custom domains linked to a website, check domain availability,
purchase and register new domains, and list previously purchased domains.

### List Domains

Retrieves a paginated list of custom domains linked to the website, including Cloudflare verification and SSL status.

| Direction | Type |
| --- | --- |
| Request | [`DomainListParams`](./src/resources/domains/domains.ts) |
| Response | [`DomainsCursorIDPage`](./src/resources/domains/domains.ts) |

```ts
const page = await client.domains.list();
```

### Check Domain Availability

Checks whether the specified domain names are available for registration and returns pricing information.

| Direction | Type |
| --- | --- |
| Request | [`DomainCheckAvailabilityParams`](./src/resources/domains/domains.ts) |
| Response | [`DomainCheckAvailabilityResponse`](./src/resources/domains/domains.ts) |

```ts
const domain = await client.domains.checkAvailability({
  domains: [''],
});
```

### Search Domains

Searches for available domain names based on a keyword and returns suggestions with pricing.

| Direction | Type |
| --- | --- |
| Request | [`DomainSearchParams`](./src/resources/domains/domains.ts) |
| Response | [`DomainSearchResponse`](./src/resources/domains/domains.ts) |

```ts
const domain = await client.domains.search({
  keyword: 'x',
});
```

### `Domains Purchased`

#### Purchase Domain

Initiates a domain purchase. Verifies availability, creates a payment invoice, and begins the registration process. If the payment requires 3D Secure authentication, the response includes a client_secret for confirmation.

| Direction | Type |
| --- | --- |
| Request | [`PurchasedCreateParams`](./src/resources/domains/purchased.ts) |
| Response | [`PurchasedCreateResponse`](./src/resources/domains/purchased.ts) |

```ts
const purchased = await client.domains.purchased.create({
  domain_name: 'x',
  years: 1,
  autorenew: true,
});
```

#### Confirm Domain Purchase

Confirms a domain purchase after 3D Secure authentication has been completed. Call this endpoint after the customer has authenticated with their bank.

| Direction | Type |
| --- | --- |
| Request | [`PurchasedConfirmParams`](./src/resources/domains/purchased.ts) |
| Response | [`PurchasedConfirmResponse`](./src/resources/domains/purchased.ts) |

```ts
const purchased = await client.domains.purchased.confirm({
  invoice_id: 'x',
  domain_name: 'x',
  website_id: 'x',
  years: 1,
  autorenew: true,
});
```

#### List Purchased Domains

Retrieves a paginated list of domains purchased by the organization.

| Direction | Type |
| --- | --- |
| Request | [`PurchasedListParams`](./src/resources/domains/purchased.ts) |
| Response | [`PurchasedDomainsCursorIDPage`](./src/resources/domains/purchased.ts) |

```ts
const page = await client.domains.purchased.list();
```

#### Get Purchased Domain

Retrieves details of a specific purchased domain by its ID.

| Direction | Type |
| --- | --- |
| Response | [`PurchasedDomain`](./src/resources/domains/purchased.ts) |

```ts
const purchasedDomain = await client.domains.purchased.get('domainId');
```

## `Email`

Send transactional emails, send batch emails, and retrieve sent email
history with delivery status tracking.

### Send Email

Sends a single email. The sender address must be a verified identity for this website. Optionally pass reply_to_email_id to thread a reply to a received email in this app and organization. Sender, recipients, subject, body, and attachments remain explicit; nothing is copied from the source. In-Reply-To and References are generated and cannot be supplied as custom headers (case-insensitive). References retains at most 20 valid, unique IDs and 870 characters, including the source Message-ID; malformed ancestors are omitted and oldest ancestry is trimmed. Without References, a single valid stored In-Reply-To is used as ancestry.

| Direction | Type |
| --- | --- |
| Request | [`EmailSendParams`](./src/resources/email/email.ts) |
| Response | [`EmailSendResponse`](./src/resources/email/email.ts) |

```ts
const email = await client.email.send({
  from: 'x',
  to: 'user@example.com',
  subject: 'x',
});
```

### List Emails

Retrieves a paginated list of sent emails. Returns email metadata including delivery status.

| Direction | Type |
| --- | --- |
| Request | [`EmailListParams`](./src/resources/email/email.ts) |
| Response | [`EmailsCursorIDPage`](./src/resources/email/email.ts) |

```ts
const page = await client.email.list();
```

### Get Email

Retrieves a single email by its unique identifier.

| Direction | Type |
| --- | --- |
| Response | [`EmailGetResponse`](./src/resources/email/email.ts) |

```ts
const email = await client.email.get('emailId');
```

### `Email Identities`

#### Create Identity

Creates a new sender identity for email verification. For email identities, a verification email is sent. For domain identities, DNS records are returned that must be configured to verify ownership.

| Direction | Type |
| --- | --- |
| Request | [`IdentityCreateParams`](./src/resources/email/identities.ts) |
| Response | [`Identity`](./src/resources/email/identities.ts) |

```ts
const identity = await client.email.identities.create({
  type: 'email',
  value: 'user@example.com',
});
```

#### List Identities

Retrieves a paginated list of sender identities (email addresses and domains) configured for this website. Pending email addresses are rechecked against AWS SES, so one reads verified shortly after its verification link is clicked.

| Direction | Type |
| --- | --- |
| Request | [`IdentityListParams`](./src/resources/email/identities.ts) |
| Response | [`IdentitiesCursorIDPage`](./src/resources/email/identities.ts) |

```ts
const page = await client.email.identities.list();
```

#### Get Identity

Retrieves a sender identity by ID, with its verification status and any required DNS records. A pending email address is rechecked against AWS SES, so it reads verified shortly after its verification link is clicked. Use Verify Identity to recheck a domain.

| Direction | Type |
| --- | --- |
| Response | [`Identity`](./src/resources/email/identities.ts) |

```ts
const identity = await client.email.identities.get('identityId');
```

#### Verify Identity

Triggers a manual recheck of the identity's verification status against AWS SES. Returns the identity with its updated status.

| Direction | Type |
| --- | --- |
| Request | [`IdentityVerifyParams`](./src/resources/email/identities.ts) |
| Response | [`Identity`](./src/resources/email/identities.ts) |

```ts
const identity = await client.email.identities.verify('identityId', {
  resend: false,
});
```

#### Delete Identity

Permanently deletes a sender identity. Emails can no longer be sent from this address or domain after deletion.

```ts
await client.email.identities.delete('identityId');
```

### `Email Suppressions`

#### Create Suppression

Adds a recipient address to the suppression list. SES drops later sends to it at send time, protecting your sending reputation. Adding an address that is already suppressed succeeds. The suppression list belongs to the organization and applies to every app and sender identity it owns.

| Direction | Type |
| --- | --- |
| Request | [`SuppressionCreateParams`](./src/resources/email/suppressions.ts) |
| Response | [`Suppression`](./src/resources/email/suppressions.ts) |

```ts
const suppression = await client.email.suppressions.create({
  email: 'user@example.com',
});
```

#### List Suppressions

Retrieves a paginated list of suppressed recipient addresses, newest first. Filter by `origin` to separate addresses you added yourself from those a bounce or a spam complaint added automatically. The suppression list belongs to the organization and applies to every app and sender identity it owns.

| Direction | Type |
| --- | --- |
| Request | [`SuppressionListParams`](./src/resources/email/suppressions.ts) |
| Response | [`SuppressionListResponse`](./src/resources/email/suppressions.ts) |

```ts
const suppression = await client.email.suppressions.list({
  limit: 100,
});
```

#### Get Suppression

Retrieves a single suppression by its ID or by the suppressed email address. The suppression list belongs to the organization and applies to every app and sender identity it owns.

| Direction | Type |
| --- | --- |
| Response | [`Suppression`](./src/resources/email/suppressions.ts) |

```ts
const suppression = await client.email.suppressions.get('suppression');
```

#### Remove Suppression

Removes an address from the suppression list, identified by its suppression ID or by the address itself, so sends to it are allowed again. Removing an address does not guarantee delivery — if it bounces or is reported as spam again, it is suppressed again. The suppression list belongs to the organization and applies to every app and sender identity it owns.

| Direction | Type |
| --- | --- |
| Response | [`SuppressionDeleteResponse`](./src/resources/email/suppressions.ts) |

```ts
const suppression = await client.email.suppressions.delete('suppression');
```

#### Add Batch Suppressions

Adds up to 100 recipient addresses to the suppression list in one call. Addresses that are already suppressed are returned unchanged rather than rejected, so an import can be retried safely. The suppression list belongs to the organization and applies to every app and sender identity it owns.

| Direction | Type |
| --- | --- |
| Request | [`SuppressionBatchAddParams`](./src/resources/email/suppressions.ts) |
| Response | [`SuppressionBatchAddResponse`](./src/resources/email/suppressions.ts) |

```ts
const suppression = await client.email.suppressions.batchAdd({
  emails: ['user@example.com'],
});
```

#### Remove Batch Suppressions

Removes up to 100 addresses from the suppression list in one call, identified by either `emails` or `ids` (exactly one of the two). Addresses that were not on the list are omitted from the response instead of failing the request. Removing an address does not guarantee delivery — if it bounces or is reported as spam again, it is suppressed again. The suppression list belongs to the organization and applies to every app and sender identity it owns.

| Direction | Type |
| --- | --- |
| Request | [`SuppressionBatchRemoveParams`](./src/resources/email/suppressions.ts) |
| Response | [`SuppressionBatchRemoveResponse`](./src/resources/email/suppressions.ts) |

```ts
const suppression = await client.email.suppressions.batchRemove({});
```

## `Files`

Upload, retrieve, and list files and media associated with a website.
Upload is a two-step process: first call create to get an upload URL,
then PUT the file content to that URL. The PUT response returns the
completed MediaFile object. No separate complete call is needed.

### List Files

Retrieves a paginated list of files uploaded to the website. Supports filtering by MIME type, folder path, creation date, and filename search.

| Direction | Type |
| --- | --- |
| Request | [`FileListParams`](./src/resources/files.ts) |
| Response | [`FilesCursorIDPage`](./src/resources/files.ts) |

```ts
const page = await client.files.list();
```

### Get File

Retrieves a file by its ID, including its CDN URL and metadata.

| Direction | Type |
| --- | --- |
| Response | [`File`](./src/resources/files.ts) |

```ts
const file = await client.files.get('fileId');
```

## `PushNotifications`

### Enable Notifications

Enables push notifications for the app by generating VAPID keys. Idempotent - returns existing keys if already enabled. Hercules recommends calling this during app initialization.

| Direction | Type |
| --- | --- |
| Response | [`PushNotificationEnableResponse`](./src/resources/push-notifications/push-notifications.ts) |

```ts
const pushNotification = await client.pushNotifications.enable();
```

### Register Subscription

Registers a push subscription with the provided visitorId: a Web Push `subscription` from a browser, or a `nativeDevice` token from the Hercules iOS app (APNs) or Android app (FCM). Use authenticated userId or generate a UUID for anonymous users. Upserts by endpoint (or device token) to handle re-subscriptions. Returns a secret for subscription ownership.

| Direction | Type |
| --- | --- |
| Request | [`PushNotificationSubscribeParams`](./src/resources/push-notifications/push-notifications.ts) |
| Response | [`PushNotificationSubscribeResponse`](./src/resources/push-notifications/push-notifications.ts) |

```ts
const pushNotification = await client.pushNotifications.subscribe({
  visitorId: 'x',
});
```

### Remove Subscription

Removes a push subscription by secret.

| Direction | Type |
| --- | --- |
| Request | [`PushNotificationUnsubscribeParams`](./src/resources/push-notifications/push-notifications.ts) |
| Response | [`PushNotificationUnsubscribeResponse`](./src/resources/push-notifications/push-notifications.ts) |

```ts
const pushNotification = await client.pushNotifications.unsubscribe({
  secret: 'x',
});
```

### Identify Subscription

Updates a subscription's visitorId to the provided userId. Call after sign-in to link the subscription to the authenticated user's account.

| Direction | Type |
| --- | --- |
| Request | [`PushNotificationIdentifyParams`](./src/resources/push-notifications/push-notifications.ts) |
| Response | [`PushNotificationIdentifyResponse`](./src/resources/push-notifications/push-notifications.ts) |

```ts
const pushNotification = await client.pushNotifications.identify({
  secret: 'x',
  userId: 'x',
});
```

### Send Notification

Sends push notifications to specified visitors and/or topics. Specify visitorIds, topics, or both (combined as union). Omit both to broadcast to all subscribers. Recipient lists above 100 are delivered in the background and reported as `queued`. Limited to 120 sends per minute per app, 6 of which may be broadcasts.

| Direction | Type |
| --- | --- |
| Request | [`PushNotificationSendParams`](./src/resources/push-notifications/push-notifications.ts) |
| Response | [`PushNotificationSendResponse`](./src/resources/push-notifications/push-notifications.ts) |

```ts
const pushNotification = await client.pushNotifications.send({
  title: 'x',
});
```

### `PushNotifications Topics`

#### Subscribe to Topics

Subscribes a visitor to topics. Topics are per-visitor, so all devices for this visitor will receive notifications sent to these topics.

| Direction | Type |
| --- | --- |
| Request | [`TopicSubscribeParams`](./src/resources/push-notifications/topics.ts) |
| Response | [`TopicSubscribeResponse`](./src/resources/push-notifications/topics.ts) |

```ts
const topic = await client.pushNotifications.topics.subscribe({
  visitorId: 'x',
  topics: ['x'],
});
```

#### Unsubscribe from Topics

Unsubscribes a visitor from specified topics.

| Direction | Type |
| --- | --- |
| Request | [`TopicUnsubscribeParams`](./src/resources/push-notifications/topics.ts) |
| Response | [`TopicUnsubscribeResponse`](./src/resources/push-notifications/topics.ts) |

```ts
const topic = await client.pushNotifications.topics.unsubscribe({
  visitorId: 'x',
  topics: ['x'],
});
```

#### List Topics

Lists topics a visitor is subscribed to.

| Direction | Type |
| --- | --- |
| Request | [`TopicListParams`](./src/resources/push-notifications/topics.ts) |
| Response | [`TopicListResponse`](./src/resources/push-notifications/topics.ts) |

```ts
const page = await client.pushNotifications.topics.list({
  visitorId: 'visitorId',
});
```
