# Beta

## Subscriptions

Types:

- <code><a href="./src/resources/beta/subscriptions/subscriptions.ts">SubscriptionCancelResponse</a></code>
- <code><a href="./src/resources/beta/subscriptions/subscriptions.ts">SubscriptionCheckResponse</a></code>
- <code><a href="./src/resources/beta/subscriptions/subscriptions.ts">SubscriptionCheckoutResponse</a></code>

Methods:

- <code title="post /v1/subscriptions/cancel">client.beta.subscriptions.<a href="./src/resources/beta/subscriptions/subscriptions.ts">cancel</a>({ ...params }) -> SubscriptionCancelResponse</code>
- <code title="post /v1/subscriptions/check">client.beta.subscriptions.<a href="./src/resources/beta/subscriptions/subscriptions.ts">check</a>({ ...params }) -> SubscriptionCheckResponse</code>
- <code title="post /v1/subscriptions/checkout">client.beta.subscriptions.<a href="./src/resources/beta/subscriptions/subscriptions.ts">checkout</a>({ ...params }) -> SubscriptionCheckoutResponse</code>

### Customers

Types:

- <code><a href="./src/resources/beta/subscriptions/customers.ts">Customer</a></code>
- <code><a href="./src/resources/beta/subscriptions/customers.ts">CustomerAddress</a></code>
- <code><a href="./src/resources/beta/subscriptions/customers.ts">CustomerBillingPortalResponse</a></code>

Methods:

- <code title="post /v1/subscriptions/customers">client.beta.subscriptions.customers.<a href="./src/resources/beta/subscriptions/customers.ts">create</a>({ ...params }) -> Customer</code>
- <code title="patch /v1/subscriptions/customers/{customer_id}">client.beta.subscriptions.customers.<a href="./src/resources/beta/subscriptions/customers.ts">update</a>(customerID, { ...params }) -> Customer</code>
- <code title="get /v1/subscriptions/customers">client.beta.subscriptions.customers.<a href="./src/resources/beta/subscriptions/customers.ts">list</a>({ ...params }) -> CustomersCursorIDPage</code>
- <code title="delete /v1/subscriptions/customers/{customer_id}">client.beta.subscriptions.customers.<a href="./src/resources/beta/subscriptions/customers.ts">delete</a>(customerID) -> void</code>
- <code title="post /v1/subscriptions/customers/{customer_id}/billing_portal">client.beta.subscriptions.customers.<a href="./src/resources/beta/subscriptions/customers.ts">billingPortal</a>(customerID, { ...params }) -> CustomerBillingPortalResponse</code>
- <code title="get /v1/subscriptions/customers/{customer_id}">client.beta.subscriptions.customers.<a href="./src/resources/beta/subscriptions/customers.ts">get</a>(customerID) -> Customer</code>

### Plans

Types:

- <code><a href="./src/resources/beta/subscriptions/plans/plans.ts">Plan</a></code>

Methods:

- <code title="post /v1/subscriptions/plans">client.beta.subscriptions.plans.<a href="./src/resources/beta/subscriptions/plans/plans.ts">create</a>({ ...params }) -> Plan</code>
- <code title="patch /v1/subscriptions/plans/{plan_id}">client.beta.subscriptions.plans.<a href="./src/resources/beta/subscriptions/plans/plans.ts">update</a>(planID, { ...params }) -> Plan</code>
- <code title="get /v1/subscriptions/plans">client.beta.subscriptions.plans.<a href="./src/resources/beta/subscriptions/plans/plans.ts">list</a>({ ...params }) -> PlansCursorIDPage</code>
- <code title="delete /v1/subscriptions/plans/{plan_id}">client.beta.subscriptions.plans.<a href="./src/resources/beta/subscriptions/plans/plans.ts">archive</a>(planID) -> Plan</code>
- <code title="get /v1/subscriptions/plans/{plan_id}">client.beta.subscriptions.plans.<a href="./src/resources/beta/subscriptions/plans/plans.ts">get</a>(planID) -> Plan</code>

#### Entitlements

Types:

- <code><a href="./src/resources/beta/subscriptions/plans/entitlements.ts">PlanEntitlement</a></code>

Methods:

- <code title="get /v1/subscriptions/plans/{plan_id}/entitlements">client.beta.subscriptions.plans.entitlements.<a href="./src/resources/beta/subscriptions/plans/entitlements.ts">list</a>(planID, { ...params }) -> PlanEntitlementsCursorIDPage</code>
- <code title="post /v1/subscriptions/plans/{plan_id}/entitlements">client.beta.subscriptions.plans.entitlements.<a href="./src/resources/beta/subscriptions/plans/entitlements.ts">attach</a>(planID, { ...params }) -> PlanEntitlement</code>
- <code title="delete /v1/subscriptions/plans/{plan_id}/entitlements/{feature_id}">client.beta.subscriptions.plans.entitlements.<a href="./src/resources/beta/subscriptions/plans/entitlements.ts">remove</a>(featureID, { ...params }) -> void</code>

### Entitlements

Types:

- <code><a href="./src/resources/beta/subscriptions/entitlements.ts">Entitlement</a></code>

Methods:

- <code title="post /v1/subscriptions/entitlements">client.beta.subscriptions.entitlements.<a href="./src/resources/beta/subscriptions/entitlements.ts">create</a>({ ...params }) -> Entitlement</code>
- <code title="patch /v1/subscriptions/entitlements/{entitlement_id}">client.beta.subscriptions.entitlements.<a href="./src/resources/beta/subscriptions/entitlements.ts">update</a>(entitlementID, { ...params }) -> Entitlement</code>
- <code title="get /v1/subscriptions/entitlements">client.beta.subscriptions.entitlements.<a href="./src/resources/beta/subscriptions/entitlements.ts">list</a>({ ...params }) -> EntitlementsCursorIDPage</code>
- <code title="get /v1/subscriptions/entitlements/{entitlement_id}">client.beta.subscriptions.entitlements.<a href="./src/resources/beta/subscriptions/entitlements.ts">get</a>(entitlementID) -> Entitlement</code>

### Coupons

Types:

- <code><a href="./src/resources/beta/subscriptions/coupons.ts">Coupon</a></code>
- <code><a href="./src/resources/beta/subscriptions/coupons.ts">CouponValidateResponse</a></code>

Methods:

- <code title="post /v1/subscriptions/coupons">client.beta.subscriptions.coupons.<a href="./src/resources/beta/subscriptions/coupons.ts">create</a>({ ...params }) -> Coupon</code>
- <code title="patch /v1/subscriptions/coupons/{coupon_id}">client.beta.subscriptions.coupons.<a href="./src/resources/beta/subscriptions/coupons.ts">update</a>(couponID, { ...params }) -> Coupon</code>
- <code title="get /v1/subscriptions/coupons">client.beta.subscriptions.coupons.<a href="./src/resources/beta/subscriptions/coupons.ts">list</a>({ ...params }) -> CouponsCursorIDPage</code>
- <code title="delete /v1/subscriptions/coupons/{coupon_id}">client.beta.subscriptions.coupons.<a href="./src/resources/beta/subscriptions/coupons.ts">delete</a>(couponID) -> void</code>
- <code title="get /v1/subscriptions/coupons/{coupon_id}">client.beta.subscriptions.coupons.<a href="./src/resources/beta/subscriptions/coupons.ts">get</a>(couponID) -> Coupon</code>
- <code title="post /v1/subscriptions/coupons/validate">client.beta.subscriptions.coupons.<a href="./src/resources/beta/subscriptions/coupons.ts">validate</a>({ ...params }) -> CouponValidateResponse</code>
