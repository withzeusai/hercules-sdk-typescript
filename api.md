# Beta

## Pay

Types:

- <code><a href="./src/resources/beta/pay/pay.ts">PayCancelResponse</a></code>
- <code><a href="./src/resources/beta/pay/pay.ts">PayCheckResponse</a></code>
- <code><a href="./src/resources/beta/pay/pay.ts">PayCheckoutResponse</a></code>

Methods:

- <code title="post /v1/pay/cancel">client.beta.pay.<a href="./src/resources/beta/pay/pay.ts">cancel</a>({ ...params }) -> PayCancelResponse</code>
- <code title="post /v1/pay/check">client.beta.pay.<a href="./src/resources/beta/pay/pay.ts">check</a>({ ...params }) -> PayCheckResponse</code>
- <code title="post /v1/pay/checkout">client.beta.pay.<a href="./src/resources/beta/pay/pay.ts">checkout</a>({ ...params }) -> PayCheckoutResponse</code>

### Customers

Types:

- <code><a href="./src/resources/beta/pay/customers.ts">CustomerCreateResponse</a></code>
- <code><a href="./src/resources/beta/pay/customers.ts">CustomerUpdateResponse</a></code>
- <code><a href="./src/resources/beta/pay/customers.ts">CustomerListResponse</a></code>
- <code><a href="./src/resources/beta/pay/customers.ts">CustomerBillingPortalResponse</a></code>
- <code><a href="./src/resources/beta/pay/customers.ts">CustomerGetResponse</a></code>

Methods:

- <code title="post /v1/pay/customers">client.beta.pay.customers.<a href="./src/resources/beta/pay/customers.ts">create</a>({ ...params }) -> CustomerCreateResponse</code>
- <code title="patch /v1/pay/customers/{customer_id}">client.beta.pay.customers.<a href="./src/resources/beta/pay/customers.ts">update</a>(customerID, { ...params }) -> CustomerUpdateResponse</code>
- <code title="get /v1/pay/customers">client.beta.pay.customers.<a href="./src/resources/beta/pay/customers.ts">list</a>({ ...params }) -> CustomerListResponsesCursorIDPage</code>
- <code title="delete /v1/pay/customers/{customer_id}">client.beta.pay.customers.<a href="./src/resources/beta/pay/customers.ts">delete</a>(customerID) -> void</code>
- <code title="post /v1/pay/customers/{customer_id}/billing_portal">client.beta.pay.customers.<a href="./src/resources/beta/pay/customers.ts">billingPortal</a>(customerID, { ...params }) -> CustomerBillingPortalResponse</code>
- <code title="get /v1/pay/customers/{customer_id}">client.beta.pay.customers.<a href="./src/resources/beta/pay/customers.ts">get</a>(customerID) -> CustomerGetResponse</code>

### Products

Types:

- <code><a href="./src/resources/beta/pay/products/products.ts">ProductCreateResponse</a></code>
- <code><a href="./src/resources/beta/pay/products/products.ts">ProductUpdateResponse</a></code>
- <code><a href="./src/resources/beta/pay/products/products.ts">ProductListResponse</a></code>
- <code><a href="./src/resources/beta/pay/products/products.ts">ProductArchiveResponse</a></code>
- <code><a href="./src/resources/beta/pay/products/products.ts">ProductGetResponse</a></code>

Methods:

- <code title="post /v1/pay/products">client.beta.pay.products.<a href="./src/resources/beta/pay/products/products.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="patch /v1/pay/products/{product_id}">client.beta.pay.products.<a href="./src/resources/beta/pay/products/products.ts">update</a>(productID, { ...params }) -> ProductUpdateResponse</code>
- <code title="get /v1/pay/products">client.beta.pay.products.<a href="./src/resources/beta/pay/products/products.ts">list</a>({ ...params }) -> ProductListResponsesCursorIDPage</code>
- <code title="delete /v1/pay/products/{product_id}">client.beta.pay.products.<a href="./src/resources/beta/pay/products/products.ts">archive</a>(productID) -> ProductArchiveResponse</code>
- <code title="get /v1/pay/products/{product_id}">client.beta.pay.products.<a href="./src/resources/beta/pay/products/products.ts">get</a>(productID) -> ProductGetResponse</code>

#### Entitlements

Types:

- <code><a href="./src/resources/beta/pay/products/entitlements.ts">EntitlementListResponse</a></code>
- <code><a href="./src/resources/beta/pay/products/entitlements.ts">EntitlementAttachResponse</a></code>

Methods:

- <code title="get /v1/pay/products/{product_id}/entitlements">client.beta.pay.products.entitlements.<a href="./src/resources/beta/pay/products/entitlements.ts">list</a>(productID, { ...params }) -> EntitlementListResponsesCursorIDPage</code>
- <code title="post /v1/pay/products/{product_id}/entitlements">client.beta.pay.products.entitlements.<a href="./src/resources/beta/pay/products/entitlements.ts">attach</a>(productID, { ...params }) -> EntitlementAttachResponse</code>
- <code title="delete /v1/pay/products/{product_id}/entitlements/{feature_id}">client.beta.pay.products.entitlements.<a href="./src/resources/beta/pay/products/entitlements.ts">remove</a>(featureID, { ...params }) -> void</code>

### Entitlements

Types:

- <code><a href="./src/resources/beta/pay/entitlements.ts">EntitlementCreateResponse</a></code>
- <code><a href="./src/resources/beta/pay/entitlements.ts">EntitlementUpdateResponse</a></code>
- <code><a href="./src/resources/beta/pay/entitlements.ts">EntitlementListResponse</a></code>
- <code><a href="./src/resources/beta/pay/entitlements.ts">EntitlementGetResponse</a></code>

Methods:

- <code title="post /v1/pay/entitlements">client.beta.pay.entitlements.<a href="./src/resources/beta/pay/entitlements.ts">create</a>({ ...params }) -> EntitlementCreateResponse</code>
- <code title="patch /v1/pay/entitlements/{entitlement_id}">client.beta.pay.entitlements.<a href="./src/resources/beta/pay/entitlements.ts">update</a>(entitlementID, { ...params }) -> EntitlementUpdateResponse</code>
- <code title="get /v1/pay/entitlements">client.beta.pay.entitlements.<a href="./src/resources/beta/pay/entitlements.ts">list</a>({ ...params }) -> EntitlementListResponsesCursorIDPage</code>
- <code title="get /v1/pay/entitlements/{entitlement_id}">client.beta.pay.entitlements.<a href="./src/resources/beta/pay/entitlements.ts">get</a>(entitlementID) -> EntitlementGetResponse</code>

### Coupons

Types:

- <code><a href="./src/resources/beta/pay/coupons.ts">CouponCreateResponse</a></code>
- <code><a href="./src/resources/beta/pay/coupons.ts">CouponUpdateResponse</a></code>
- <code><a href="./src/resources/beta/pay/coupons.ts">CouponListResponse</a></code>
- <code><a href="./src/resources/beta/pay/coupons.ts">CouponGetResponse</a></code>

Methods:

- <code title="post /v1/pay/coupons">client.beta.pay.coupons.<a href="./src/resources/beta/pay/coupons.ts">create</a>({ ...params }) -> CouponCreateResponse</code>
- <code title="patch /v1/pay/coupons/{coupon_id}">client.beta.pay.coupons.<a href="./src/resources/beta/pay/coupons.ts">update</a>(couponID, { ...params }) -> CouponUpdateResponse</code>
- <code title="get /v1/pay/coupons">client.beta.pay.coupons.<a href="./src/resources/beta/pay/coupons.ts">list</a>({ ...params }) -> CouponListResponsesCursorIDPage</code>
- <code title="delete /v1/pay/coupons/{coupon_id}">client.beta.pay.coupons.<a href="./src/resources/beta/pay/coupons.ts">delete</a>(couponID) -> void</code>
- <code title="get /v1/pay/coupons/{coupon_id}">client.beta.pay.coupons.<a href="./src/resources/beta/pay/coupons.ts">get</a>(couponID) -> CouponGetResponse</code>
