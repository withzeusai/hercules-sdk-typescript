# Subscriptions

Types:

- <code><a href="./src/resources/subscriptions/subscriptions.ts">SubscriptionCancelResponse</a></code>
- <code><a href="./src/resources/subscriptions/subscriptions.ts">SubscriptionCheckResponse</a></code>
- <code><a href="./src/resources/subscriptions/subscriptions.ts">SubscriptionCheckoutResponse</a></code>

Methods:

- <code title="post /subscriptions/v1/cancel">client.subscriptions.<a href="./src/resources/subscriptions/subscriptions.ts">cancel</a>({ ...params }) -> SubscriptionCancelResponse</code>
- <code title="post /subscriptions/v1/check">client.subscriptions.<a href="./src/resources/subscriptions/subscriptions.ts">check</a>({ ...params }) -> SubscriptionCheckResponse</code>
- <code title="post /subscriptions/v1/checkout">client.subscriptions.<a href="./src/resources/subscriptions/subscriptions.ts">checkout</a>({ ...params }) -> SubscriptionCheckoutResponse</code>

## Customers

Types:

- <code><a href="./src/resources/subscriptions/customers.ts">Customer</a></code>
- <code><a href="./src/resources/subscriptions/customers.ts">CustomerAddress</a></code>
- <code><a href="./src/resources/subscriptions/customers.ts">CustomerBillingPortalResponse</a></code>

Methods:

- <code title="post /subscriptions/v1/customers">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">create</a>({ ...params }) -> Customer</code>
- <code title="patch /subscriptions/v1/customers/{customer_id}">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">update</a>(customerID, { ...params }) -> Customer</code>
- <code title="get /subscriptions/v1/customers">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">list</a>({ ...params }) -> CustomersCursorIDPage</code>
- <code title="delete /subscriptions/v1/customers/{customer_id}">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">delete</a>(customerID) -> void</code>
- <code title="post /subscriptions/v1/customers/{customer_id}/billing_portal">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">billingPortal</a>(customerID, { ...params }) -> CustomerBillingPortalResponse</code>
- <code title="get /subscriptions/v1/customers/{customer_id}">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">get</a>(customerID) -> Customer</code>

## Plans

Types:

- <code><a href="./src/resources/subscriptions/plans/plans.ts">Plan</a></code>

Methods:

- <code title="post /subscriptions/v1/plans">client.subscriptions.plans.<a href="./src/resources/subscriptions/plans/plans.ts">create</a>({ ...params }) -> Plan</code>
- <code title="patch /subscriptions/v1/plans/{plan_id}">client.subscriptions.plans.<a href="./src/resources/subscriptions/plans/plans.ts">update</a>(planID, { ...params }) -> Plan</code>
- <code title="get /subscriptions/v1/plans">client.subscriptions.plans.<a href="./src/resources/subscriptions/plans/plans.ts">list</a>({ ...params }) -> PlansCursorIDPage</code>
- <code title="delete /subscriptions/v1/plans/{plan_id}">client.subscriptions.plans.<a href="./src/resources/subscriptions/plans/plans.ts">archive</a>(planID) -> Plan</code>
- <code title="get /subscriptions/v1/plans/{plan_id}">client.subscriptions.plans.<a href="./src/resources/subscriptions/plans/plans.ts">get</a>(planID) -> Plan</code>

### Entitlements

Types:

- <code><a href="./src/resources/subscriptions/plans/entitlements.ts">PlanEntitlement</a></code>

Methods:

- <code title="get /subscriptions/v1/plans/{plan_id}/entitlements">client.subscriptions.plans.entitlements.<a href="./src/resources/subscriptions/plans/entitlements.ts">list</a>(planID, { ...params }) -> PlanEntitlementsCursorIDPage</code>
- <code title="post /subscriptions/v1/plans/{plan_id}/entitlements">client.subscriptions.plans.entitlements.<a href="./src/resources/subscriptions/plans/entitlements.ts">attach</a>(planID, { ...params }) -> PlanEntitlement</code>
- <code title="delete /subscriptions/v1/plans/{plan_id}/entitlements/{feature_id}">client.subscriptions.plans.entitlements.<a href="./src/resources/subscriptions/plans/entitlements.ts">remove</a>(featureID, { ...params }) -> void</code>

## Entitlements

Types:

- <code><a href="./src/resources/subscriptions/entitlements.ts">Entitlement</a></code>

Methods:

- <code title="post /subscriptions/v1/entitlements">client.subscriptions.entitlements.<a href="./src/resources/subscriptions/entitlements.ts">create</a>({ ...params }) -> Entitlement</code>
- <code title="patch /subscriptions/v1/entitlements/{entitlement_id}">client.subscriptions.entitlements.<a href="./src/resources/subscriptions/entitlements.ts">update</a>(entitlementID, { ...params }) -> Entitlement</code>
- <code title="get /subscriptions/v1/entitlements">client.subscriptions.entitlements.<a href="./src/resources/subscriptions/entitlements.ts">list</a>({ ...params }) -> EntitlementsCursorIDPage</code>
- <code title="get /subscriptions/v1/entitlements/{entitlement_id}">client.subscriptions.entitlements.<a href="./src/resources/subscriptions/entitlements.ts">get</a>(entitlementID) -> Entitlement</code>

## Coupons

Types:

- <code><a href="./src/resources/subscriptions/coupons.ts">Coupon</a></code>
- <code><a href="./src/resources/subscriptions/coupons.ts">CouponValidateResponse</a></code>

Methods:

- <code title="post /subscriptions/v1/coupons">client.subscriptions.coupons.<a href="./src/resources/subscriptions/coupons.ts">create</a>({ ...params }) -> Coupon</code>
- <code title="patch /subscriptions/v1/coupons/{coupon_id}">client.subscriptions.coupons.<a href="./src/resources/subscriptions/coupons.ts">update</a>(couponID, { ...params }) -> Coupon</code>
- <code title="get /subscriptions/v1/coupons">client.subscriptions.coupons.<a href="./src/resources/subscriptions/coupons.ts">list</a>({ ...params }) -> CouponsCursorIDPage</code>
- <code title="delete /subscriptions/v1/coupons/{coupon_id}">client.subscriptions.coupons.<a href="./src/resources/subscriptions/coupons.ts">delete</a>(couponID) -> void</code>
- <code title="get /subscriptions/v1/coupons/{coupon_id}">client.subscriptions.coupons.<a href="./src/resources/subscriptions/coupons.ts">get</a>(couponID) -> Coupon</code>
- <code title="post /subscriptions/v1/coupons/validate">client.subscriptions.coupons.<a href="./src/resources/subscriptions/coupons.ts">validate</a>({ ...params }) -> CouponValidateResponse</code>
