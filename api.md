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

- <code><a href="./src/resources/beta/pay/customers.ts">Customer</a></code>
- <code><a href="./src/resources/beta/pay/customers.ts">CustomerAddress</a></code>
- <code><a href="./src/resources/beta/pay/customers.ts">CustomerBillingPortalResponse</a></code>

Methods:

- <code title="post /v1/pay/customers">client.beta.pay.customers.<a href="./src/resources/beta/pay/customers.ts">create</a>({ ...params }) -> Customer</code>
- <code title="patch /v1/pay/customers/{customer_id}">client.beta.pay.customers.<a href="./src/resources/beta/pay/customers.ts">update</a>(customerID, { ...params }) -> Customer</code>
- <code title="get /v1/pay/customers">client.beta.pay.customers.<a href="./src/resources/beta/pay/customers.ts">list</a>({ ...params }) -> CustomersCursorIDPage</code>
- <code title="delete /v1/pay/customers/{customer_id}">client.beta.pay.customers.<a href="./src/resources/beta/pay/customers.ts">delete</a>(customerID) -> void</code>
- <code title="post /v1/pay/customers/{customer_id}/billing_portal">client.beta.pay.customers.<a href="./src/resources/beta/pay/customers.ts">billingPortal</a>(customerID, { ...params }) -> CustomerBillingPortalResponse</code>
- <code title="get /v1/pay/customers/{customer_id}">client.beta.pay.customers.<a href="./src/resources/beta/pay/customers.ts">get</a>(customerID) -> Customer</code>

### Products

Types:

- <code><a href="./src/resources/beta/pay/products/products.ts">Product</a></code>

Methods:

- <code title="post /v1/pay/products">client.beta.pay.products.<a href="./src/resources/beta/pay/products/products.ts">create</a>({ ...params }) -> Product</code>
- <code title="patch /v1/pay/products/{product_id}">client.beta.pay.products.<a href="./src/resources/beta/pay/products/products.ts">update</a>(productID, { ...params }) -> Product</code>
- <code title="get /v1/pay/products">client.beta.pay.products.<a href="./src/resources/beta/pay/products/products.ts">list</a>({ ...params }) -> ProductsCursorIDPage</code>
- <code title="delete /v1/pay/products/{product_id}">client.beta.pay.products.<a href="./src/resources/beta/pay/products/products.ts">archive</a>(productID) -> Product</code>
- <code title="get /v1/pay/products/{product_id}">client.beta.pay.products.<a href="./src/resources/beta/pay/products/products.ts">get</a>(productID) -> Product</code>

#### Entitlements

Types:

- <code><a href="./src/resources/beta/pay/products/entitlements.ts">ProductEntitlement</a></code>

Methods:

- <code title="get /v1/pay/products/{product_id}/entitlements">client.beta.pay.products.entitlements.<a href="./src/resources/beta/pay/products/entitlements.ts">list</a>(productID, { ...params }) -> ProductEntitlementsCursorIDPage</code>
- <code title="post /v1/pay/products/{product_id}/entitlements">client.beta.pay.products.entitlements.<a href="./src/resources/beta/pay/products/entitlements.ts">attach</a>(productID, { ...params }) -> ProductEntitlement</code>
- <code title="delete /v1/pay/products/{product_id}/entitlements/{feature_id}">client.beta.pay.products.entitlements.<a href="./src/resources/beta/pay/products/entitlements.ts">remove</a>(featureID, { ...params }) -> void</code>

#### Variants

Types:

- <code><a href="./src/resources/beta/pay/products/variants.ts">Variant</a></code>

Methods:

- <code title="post /v1/pay/products/{product_id}/variants">client.beta.pay.products.variants.<a href="./src/resources/beta/pay/products/variants.ts">create</a>(productID, { ...params }) -> Variant</code>
- <code title="patch /v1/pay/products/{product_id}/variants/{variant_id}">client.beta.pay.products.variants.<a href="./src/resources/beta/pay/products/variants.ts">update</a>(variantID, { ...params }) -> Variant</code>
- <code title="get /v1/pay/products/{product_id}/variants">client.beta.pay.products.variants.<a href="./src/resources/beta/pay/products/variants.ts">list</a>(productID, { ...params }) -> VariantsCursorIDPage</code>
- <code title="delete /v1/pay/products/{product_id}/variants/{variant_id}">client.beta.pay.products.variants.<a href="./src/resources/beta/pay/products/variants.ts">archive</a>(variantID, { ...params }) -> Variant</code>
- <code title="get /v1/pay/products/{product_id}/variants/{variant_id}">client.beta.pay.products.variants.<a href="./src/resources/beta/pay/products/variants.ts">get</a>(variantID, { ...params }) -> Variant</code>

### Entitlements

Types:

- <code><a href="./src/resources/beta/pay/entitlements.ts">Entitlement</a></code>

Methods:

- <code title="post /v1/pay/entitlements">client.beta.pay.entitlements.<a href="./src/resources/beta/pay/entitlements.ts">create</a>({ ...params }) -> Entitlement</code>
- <code title="patch /v1/pay/entitlements/{entitlement_id}">client.beta.pay.entitlements.<a href="./src/resources/beta/pay/entitlements.ts">update</a>(entitlementID, { ...params }) -> Entitlement</code>
- <code title="get /v1/pay/entitlements">client.beta.pay.entitlements.<a href="./src/resources/beta/pay/entitlements.ts">list</a>({ ...params }) -> EntitlementsCursorIDPage</code>
- <code title="get /v1/pay/entitlements/{entitlement_id}">client.beta.pay.entitlements.<a href="./src/resources/beta/pay/entitlements.ts">get</a>(entitlementID) -> Entitlement</code>

### Coupons

Types:

- <code><a href="./src/resources/beta/pay/coupons.ts">Coupon</a></code>

Methods:

- <code title="post /v1/pay/coupons">client.beta.pay.coupons.<a href="./src/resources/beta/pay/coupons.ts">create</a>({ ...params }) -> Coupon</code>
- <code title="patch /v1/pay/coupons/{coupon_id}">client.beta.pay.coupons.<a href="./src/resources/beta/pay/coupons.ts">update</a>(couponID, { ...params }) -> Coupon</code>
- <code title="get /v1/pay/coupons">client.beta.pay.coupons.<a href="./src/resources/beta/pay/coupons.ts">list</a>({ ...params }) -> CouponsCursorIDPage</code>
- <code title="delete /v1/pay/coupons/{coupon_id}">client.beta.pay.coupons.<a href="./src/resources/beta/pay/coupons.ts">delete</a>(couponID) -> void</code>
- <code title="get /v1/pay/coupons/{coupon_id}">client.beta.pay.coupons.<a href="./src/resources/beta/pay/coupons.ts">get</a>(couponID) -> Coupon</code>

# PushNotifications

Types:

- <code><a href="./src/resources/push-notifications/push-notifications.ts">PushNotificationEnableResponse</a></code>
- <code><a href="./src/resources/push-notifications/push-notifications.ts">PushNotificationIdentifyResponse</a></code>
- <code><a href="./src/resources/push-notifications/push-notifications.ts">PushNotificationSendResponse</a></code>
- <code><a href="./src/resources/push-notifications/push-notifications.ts">PushNotificationSubscribeResponse</a></code>
- <code><a href="./src/resources/push-notifications/push-notifications.ts">PushNotificationUnsubscribeResponse</a></code>

Methods:

- <code title="post /v1/push-notifications/enable">client.pushNotifications.<a href="./src/resources/push-notifications/push-notifications.ts">enable</a>() -> PushNotificationEnableResponse</code>
- <code title="post /v1/push-notifications/identify">client.pushNotifications.<a href="./src/resources/push-notifications/push-notifications.ts">identify</a>({ ...params }) -> PushNotificationIdentifyResponse</code>
- <code title="post /v1/push-notifications/send">client.pushNotifications.<a href="./src/resources/push-notifications/push-notifications.ts">send</a>({ ...params }) -> PushNotificationSendResponse</code>
- <code title="post /v1/push-notifications/subscribe">client.pushNotifications.<a href="./src/resources/push-notifications/push-notifications.ts">subscribe</a>({ ...params }) -> PushNotificationSubscribeResponse</code>
- <code title="post /v1/push-notifications/unsubscribe">client.pushNotifications.<a href="./src/resources/push-notifications/push-notifications.ts">unsubscribe</a>({ ...params }) -> PushNotificationUnsubscribeResponse</code>

## Topics

Types:

- <code><a href="./src/resources/push-notifications/topics.ts">TopicListResponse</a></code>
- <code><a href="./src/resources/push-notifications/topics.ts">TopicSubscribeResponse</a></code>
- <code><a href="./src/resources/push-notifications/topics.ts">TopicUnsubscribeResponse</a></code>

Methods:

- <code title="get /v1/push-notifications/topics">client.pushNotifications.topics.<a href="./src/resources/push-notifications/topics.ts">list</a>({ ...params }) -> TopicListResponsesCursorIDPage</code>
- <code title="post /v1/push-notifications/topics/subscribe">client.pushNotifications.topics.<a href="./src/resources/push-notifications/topics.ts">subscribe</a>({ ...params }) -> TopicSubscribeResponse</code>
- <code title="post /v1/push-notifications/topics/unsubscribe">client.pushNotifications.topics.<a href="./src/resources/push-notifications/topics.ts">unsubscribe</a>({ ...params }) -> TopicUnsubscribeResponse</code>
