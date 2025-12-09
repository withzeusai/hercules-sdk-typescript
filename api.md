# Subscriptions

## Customers

Types:

- <code><a href="./src/resources/subscriptions/customers.ts">Customer</a></code>
- <code><a href="./src/resources/subscriptions/customers.ts">CustomerBillingPortalResponse</a></code>

Methods:

- <code title="post /subscriptions/v1/customers">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">create</a>({ ...params }) -> Customer</code>
- <code title="patch /subscriptions/v1/customers/{id}">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">update</a>(id, { ...params }) -> Customer</code>
- <code title="get /subscriptions/v1/customers">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">list</a>({ ...params }) -> CustomersCursorIDPage</code>
- <code title="delete /subscriptions/v1/customers/{id}">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">delete</a>(id) -> void</code>
- <code title="post /subscriptions/v1/customers/{id}/billing_portal">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">billingPortal</a>(id, { ...params }) -> CustomerBillingPortalResponse</code>
- <code title="get /subscriptions/v1/customers/{id}">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">get</a>(id) -> Customer</code>

## Plans

Types:

- <code><a href="./src/resources/subscriptions/plans.ts">Plan</a></code>

Methods:

- <code title="post /subscriptions/v1/plans">client.subscriptions.plans.<a href="./src/resources/subscriptions/plans.ts">create</a>({ ...params }) -> Plan</code>
- <code title="patch /subscriptions/v1/plans/{id}">client.subscriptions.plans.<a href="./src/resources/subscriptions/plans.ts">update</a>(id, { ...params }) -> Plan</code>
- <code title="get /subscriptions/v1/plans">client.subscriptions.plans.<a href="./src/resources/subscriptions/plans.ts">list</a>({ ...params }) -> PlansCursorIDPage</code>
- <code title="delete /subscriptions/v1/plans/{id}">client.subscriptions.plans.<a href="./src/resources/subscriptions/plans.ts">archive</a>(id) -> Plan</code>
- <code title="get /subscriptions/v1/plans/{id}">client.subscriptions.plans.<a href="./src/resources/subscriptions/plans.ts">get</a>(id) -> Plan</code>
