# Subscriptions

## Customers

Types:

- <code><a href="./src/resources/subscriptions/customers.ts">Customer</a></code>
- <code><a href="./src/resources/subscriptions/customers.ts">CustomerListResponse</a></code>
- <code><a href="./src/resources/subscriptions/customers.ts">CustomerCreateBillingPortalResponse</a></code>

Methods:

- <code title="post /subscriptions/v1/customers">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">create</a>({ ...params }) -> Customer</code>
- <code title="patch /subscriptions/v1/customers/{id}">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">update</a>(id, { ...params }) -> Customer</code>
- <code title="get /subscriptions/v1/customers">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">list</a>() -> CustomerListResponse</code>
- <code title="delete /subscriptions/v1/customers/{id}">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">delete</a>(id) -> void</code>
- <code title="post /subscriptions/v1/customers/{id}/billing_portal">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">createBillingPortal</a>(id, { ...params }) -> CustomerCreateBillingPortalResponse</code>
- <code title="get /subscriptions/v1/customers/{id}">client.subscriptions.customers.<a href="./src/resources/subscriptions/customers.ts">get</a>(id) -> Customer</code>
