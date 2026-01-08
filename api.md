# Beta

## Commerce

Types:

- <code><a href="./src/resources/beta/commerce/commerce.ts">CommerceCancelResponse</a></code>
- <code><a href="./src/resources/beta/commerce/commerce.ts">CommerceCheckResponse</a></code>
- <code><a href="./src/resources/beta/commerce/commerce.ts">CommerceCheckoutResponse</a></code>

Methods:

- <code title="post /v1/commerce/cancel">client.beta.commerce.<a href="./src/resources/beta/commerce/commerce.ts">cancel</a>({ ...params }) -> CommerceCancelResponse</code>
- <code title="post /v1/commerce/check">client.beta.commerce.<a href="./src/resources/beta/commerce/commerce.ts">check</a>({ ...params }) -> CommerceCheckResponse</code>
- <code title="post /v1/commerce/checkout">client.beta.commerce.<a href="./src/resources/beta/commerce/commerce.ts">checkout</a>({ ...params }) -> CommerceCheckoutResponse</code>

### Customers

Types:

- <code><a href="./src/resources/beta/commerce/customers.ts">CustomerCreateResponse</a></code>
- <code><a href="./src/resources/beta/commerce/customers.ts">CustomerUpdateResponse</a></code>
- <code><a href="./src/resources/beta/commerce/customers.ts">CustomerListResponse</a></code>
- <code><a href="./src/resources/beta/commerce/customers.ts">CustomerBillingPortalResponse</a></code>
- <code><a href="./src/resources/beta/commerce/customers.ts">CustomerGetResponse</a></code>

Methods:

- <code title="post /v1/commerce/customers">client.beta.commerce.customers.<a href="./src/resources/beta/commerce/customers.ts">create</a>({ ...params }) -> CustomerCreateResponse</code>
- <code title="patch /v1/commerce/customers/{customer_id}">client.beta.commerce.customers.<a href="./src/resources/beta/commerce/customers.ts">update</a>(customerID, { ...params }) -> CustomerUpdateResponse</code>
- <code title="get /v1/commerce/customers">client.beta.commerce.customers.<a href="./src/resources/beta/commerce/customers.ts">list</a>({ ...params }) -> CustomerListResponsesCursorIDPage</code>
- <code title="delete /v1/commerce/customers/{customer_id}">client.beta.commerce.customers.<a href="./src/resources/beta/commerce/customers.ts">delete</a>(customerID) -> void</code>
- <code title="post /v1/commerce/customers/{customer_id}/billing_portal">client.beta.commerce.customers.<a href="./src/resources/beta/commerce/customers.ts">billingPortal</a>(customerID, { ...params }) -> CustomerBillingPortalResponse</code>
- <code title="get /v1/commerce/customers/{customer_id}">client.beta.commerce.customers.<a href="./src/resources/beta/commerce/customers.ts">get</a>(customerID) -> CustomerGetResponse</code>

### Products

Types:

- <code><a href="./src/resources/beta/commerce/products/products.ts">ProductCreateResponse</a></code>
- <code><a href="./src/resources/beta/commerce/products/products.ts">ProductUpdateResponse</a></code>
- <code><a href="./src/resources/beta/commerce/products/products.ts">ProductListResponse</a></code>
- <code><a href="./src/resources/beta/commerce/products/products.ts">ProductArchiveResponse</a></code>
- <code><a href="./src/resources/beta/commerce/products/products.ts">ProductGetResponse</a></code>

Methods:

- <code title="post /v1/commerce/products">client.beta.commerce.products.<a href="./src/resources/beta/commerce/products/products.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="patch /v1/commerce/products/{product_id}">client.beta.commerce.products.<a href="./src/resources/beta/commerce/products/products.ts">update</a>(productID, { ...params }) -> ProductUpdateResponse</code>
- <code title="get /v1/commerce/products">client.beta.commerce.products.<a href="./src/resources/beta/commerce/products/products.ts">list</a>({ ...params }) -> ProductListResponsesCursorIDPage</code>
- <code title="delete /v1/commerce/products/{product_id}">client.beta.commerce.products.<a href="./src/resources/beta/commerce/products/products.ts">archive</a>(productID) -> ProductArchiveResponse</code>
- <code title="get /v1/commerce/products/{product_id}">client.beta.commerce.products.<a href="./src/resources/beta/commerce/products/products.ts">get</a>(productID) -> ProductGetResponse</code>

#### Resources

Types:

- <code><a href="./src/resources/beta/commerce/products/resources.ts">ResourceListResponse</a></code>
- <code><a href="./src/resources/beta/commerce/products/resources.ts">ResourceAttachResponse</a></code>

Methods:

- <code title="get /v1/commerce/products/{product_id}/resources">client.beta.commerce.products.resources.<a href="./src/resources/beta/commerce/products/resources.ts">list</a>(productID, { ...params }) -> ResourceListResponsesCursorIDPage</code>
- <code title="post /v1/commerce/products/{product_id}/resources">client.beta.commerce.products.resources.<a href="./src/resources/beta/commerce/products/resources.ts">attach</a>(productID, { ...params }) -> ResourceAttachResponse</code>
- <code title="delete /v1/commerce/products/{product_id}/resources/{resource_id}">client.beta.commerce.products.resources.<a href="./src/resources/beta/commerce/products/resources.ts">remove</a>(resourceID, { ...params }) -> void</code>

#### Variants

Types:

- <code><a href="./src/resources/beta/commerce/products/variants.ts">VariantCreateResponse</a></code>
- <code><a href="./src/resources/beta/commerce/products/variants.ts">VariantUpdateResponse</a></code>
- <code><a href="./src/resources/beta/commerce/products/variants.ts">VariantListResponse</a></code>
- <code><a href="./src/resources/beta/commerce/products/variants.ts">VariantArchiveResponse</a></code>
- <code><a href="./src/resources/beta/commerce/products/variants.ts">VariantGetResponse</a></code>

Methods:

- <code title="post /v1/commerce/products/{product_id}/variants">client.beta.commerce.products.variants.<a href="./src/resources/beta/commerce/products/variants.ts">create</a>(productID, { ...params }) -> VariantCreateResponse</code>
- <code title="patch /v1/commerce/products/{product_id}/variants/{variant_id}">client.beta.commerce.products.variants.<a href="./src/resources/beta/commerce/products/variants.ts">update</a>(variantID, { ...params }) -> VariantUpdateResponse</code>
- <code title="get /v1/commerce/products/{product_id}/variants">client.beta.commerce.products.variants.<a href="./src/resources/beta/commerce/products/variants.ts">list</a>(productID, { ...params }) -> VariantListResponsesCursorIDPage</code>
- <code title="delete /v1/commerce/products/{product_id}/variants/{variant_id}">client.beta.commerce.products.variants.<a href="./src/resources/beta/commerce/products/variants.ts">archive</a>(variantID, { ...params }) -> VariantArchiveResponse</code>
- <code title="get /v1/commerce/products/{product_id}/variants/{variant_id}">client.beta.commerce.products.variants.<a href="./src/resources/beta/commerce/products/variants.ts">get</a>(variantID, { ...params }) -> VariantGetResponse</code>

### Coupons

Types:

- <code><a href="./src/resources/beta/commerce/coupons.ts">CouponCreateResponse</a></code>
- <code><a href="./src/resources/beta/commerce/coupons.ts">CouponUpdateResponse</a></code>
- <code><a href="./src/resources/beta/commerce/coupons.ts">CouponListResponse</a></code>
- <code><a href="./src/resources/beta/commerce/coupons.ts">CouponGetResponse</a></code>

Methods:

- <code title="post /v1/commerce/coupons">client.beta.commerce.coupons.<a href="./src/resources/beta/commerce/coupons.ts">create</a>({ ...params }) -> CouponCreateResponse</code>
- <code title="patch /v1/commerce/coupons/{coupon_id}">client.beta.commerce.coupons.<a href="./src/resources/beta/commerce/coupons.ts">update</a>(couponID, { ...params }) -> CouponUpdateResponse</code>
- <code title="get /v1/commerce/coupons">client.beta.commerce.coupons.<a href="./src/resources/beta/commerce/coupons.ts">list</a>({ ...params }) -> CouponListResponsesCursorIDPage</code>
- <code title="delete /v1/commerce/coupons/{coupon_id}">client.beta.commerce.coupons.<a href="./src/resources/beta/commerce/coupons.ts">delete</a>(couponID) -> void</code>
- <code title="get /v1/commerce/coupons/{coupon_id}">client.beta.commerce.coupons.<a href="./src/resources/beta/commerce/coupons.ts">get</a>(couponID) -> CouponGetResponse</code>

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
