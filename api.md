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

- <code><a href="./src/resources/beta/commerce/customers.ts">Customer</a></code>
- <code><a href="./src/resources/beta/commerce/customers.ts">CustomerAddress</a></code>
- <code><a href="./src/resources/beta/commerce/customers.ts">CustomerBillingPortalResponse</a></code>
- <code><a href="./src/resources/beta/commerce/customers.ts">CustomerGetResponse</a></code>

Methods:

- <code title="post /v1/commerce/customers">client.beta.commerce.customers.<a href="./src/resources/beta/commerce/customers.ts">create</a>({ ...params }) -> Customer</code>
- <code title="patch /v1/commerce/customers/{customer_id}">client.beta.commerce.customers.<a href="./src/resources/beta/commerce/customers.ts">update</a>(customerID, { ...params }) -> Customer</code>
- <code title="get /v1/commerce/customers">client.beta.commerce.customers.<a href="./src/resources/beta/commerce/customers.ts">list</a>({ ...params }) -> CustomersCursorIDPage</code>
- <code title="delete /v1/commerce/customers/{customer_id}">client.beta.commerce.customers.<a href="./src/resources/beta/commerce/customers.ts">delete</a>(customerID) -> void</code>
- <code title="post /v1/commerce/customers/{customer_id}/billing_portal">client.beta.commerce.customers.<a href="./src/resources/beta/commerce/customers.ts">billingPortal</a>(customerID, { ...params }) -> CustomerBillingPortalResponse</code>
- <code title="get /v1/commerce/customers/{customer_id}">client.beta.commerce.customers.<a href="./src/resources/beta/commerce/customers.ts">get</a>(customerID) -> CustomerGetResponse</code>

### Products

Types:

- <code><a href="./src/resources/beta/commerce/products/products.ts">Product</a></code>

Methods:

- <code title="post /v1/commerce/products">client.beta.commerce.products.<a href="./src/resources/beta/commerce/products/products.ts">create</a>({ ...params }) -> Product</code>
- <code title="patch /v1/commerce/products/{product_id}">client.beta.commerce.products.<a href="./src/resources/beta/commerce/products/products.ts">update</a>(productID, { ...params }) -> Product</code>
- <code title="get /v1/commerce/products">client.beta.commerce.products.<a href="./src/resources/beta/commerce/products/products.ts">list</a>({ ...params }) -> ProductsCursorIDPage</code>
- <code title="delete /v1/commerce/products/{product_id}">client.beta.commerce.products.<a href="./src/resources/beta/commerce/products/products.ts">archive</a>(productID) -> Product</code>
- <code title="get /v1/commerce/products/{product_id}">client.beta.commerce.products.<a href="./src/resources/beta/commerce/products/products.ts">get</a>(productID) -> Product</code>

#### Resources

#### Features

Methods:

- <code title="get /v1/commerce/products/{product_id}/features">client.beta.commerce.products.features.<a href="./src/resources/beta/commerce/products/features.ts">list</a>(productID, { ...params }) -> FeaturesCursorIDPage</code>
- <code title="post /v1/commerce/products/{product_id}/features">client.beta.commerce.products.features.<a href="./src/resources/beta/commerce/products/features.ts">attach</a>(productID, { ...params }) -> Feature</code>
- <code title="delete /v1/commerce/products/{product_id}/features/{feature_id}">client.beta.commerce.products.features.<a href="./src/resources/beta/commerce/products/features.ts">remove</a>(featureID, { ...params }) -> void</code>

#### Variants

Types:

- <code><a href="./src/resources/beta/commerce/products/variants.ts">Variant</a></code>

Methods:

- <code title="post /v1/commerce/products/{product_id}/variants">client.beta.commerce.products.variants.<a href="./src/resources/beta/commerce/products/variants.ts">create</a>(productID, { ...params }) -> Variant</code>
- <code title="patch /v1/commerce/products/{product_id}/variants/{variant_id}">client.beta.commerce.products.variants.<a href="./src/resources/beta/commerce/products/variants.ts">update</a>(variantID, { ...params }) -> Variant</code>
- <code title="get /v1/commerce/products/{product_id}/variants">client.beta.commerce.products.variants.<a href="./src/resources/beta/commerce/products/variants.ts">list</a>(productID, { ...params }) -> VariantsCursorIDPage</code>
- <code title="delete /v1/commerce/products/{product_id}/variants/{variant_id}">client.beta.commerce.products.variants.<a href="./src/resources/beta/commerce/products/variants.ts">archive</a>(variantID, { ...params }) -> Variant</code>
- <code title="get /v1/commerce/products/{product_id}/variants/{variant_id}">client.beta.commerce.products.variants.<a href="./src/resources/beta/commerce/products/variants.ts">get</a>(variantID, { ...params }) -> Variant</code>

### Coupons

Types:

- <code><a href="./src/resources/beta/commerce/coupons.ts">Coupon</a></code>

Methods:

- <code title="post /v1/commerce/coupons">client.beta.commerce.coupons.<a href="./src/resources/beta/commerce/coupons.ts">create</a>({ ...params }) -> Coupon</code>
- <code title="patch /v1/commerce/coupons/{coupon_id}">client.beta.commerce.coupons.<a href="./src/resources/beta/commerce/coupons.ts">update</a>(couponID, { ...params }) -> Coupon</code>
- <code title="get /v1/commerce/coupons">client.beta.commerce.coupons.<a href="./src/resources/beta/commerce/coupons.ts">list</a>({ ...params }) -> CouponsCursorIDPage</code>
- <code title="delete /v1/commerce/coupons/{coupon_id}">client.beta.commerce.coupons.<a href="./src/resources/beta/commerce/coupons.ts">delete</a>(couponID) -> void</code>
- <code title="get /v1/commerce/coupons/{coupon_id}">client.beta.commerce.coupons.<a href="./src/resources/beta/commerce/coupons.ts">get</a>(couponID) -> Coupon</code>

### Features

Types:

- <code><a href="./src/resources/beta/commerce/features.ts">Feature</a></code>

Methods:

- <code title="post /v1/commerce/features">client.beta.commerce.features.<a href="./src/resources/beta/commerce/features.ts">create</a>({ ...params }) -> Feature</code>
- <code title="patch /v1/commerce/features/{feature_id}">client.beta.commerce.features.<a href="./src/resources/beta/commerce/features.ts">update</a>(featureID, { ...params }) -> Feature</code>
- <code title="get /v1/commerce/features">client.beta.commerce.features.<a href="./src/resources/beta/commerce/features.ts">list</a>({ ...params }) -> FeaturesCursorIDPage</code>
- <code title="delete /v1/commerce/features/{feature_id}">client.beta.commerce.features.<a href="./src/resources/beta/commerce/features.ts">delete</a>(featureID) -> void</code>
- <code title="get /v1/commerce/features/{feature_id}">client.beta.commerce.features.<a href="./src/resources/beta/commerce/features.ts">get</a>(featureID) -> Feature</code>

## Content

### Models

Types:

- <code><a href="./src/resources/beta/content/models/models.ts">Field</a></code>
- <code><a href="./src/resources/beta/content/models/models.ts">Model</a></code>

Methods:

- <code title="post /v1/content/models">client.beta.content.models.<a href="./src/resources/beta/content/models/models.ts">create</a>({ ...params }) -> Model</code>
- <code title="patch /v1/content/models/{model_id}">client.beta.content.models.<a href="./src/resources/beta/content/models/models.ts">update</a>(modelID, { ...params }) -> Model</code>
- <code title="get /v1/content/models">client.beta.content.models.<a href="./src/resources/beta/content/models/models.ts">list</a>({ ...params }) -> ModelsCursorIDPage</code>
- <code title="delete /v1/content/models/{model_id}">client.beta.content.models.<a href="./src/resources/beta/content/models/models.ts">archive</a>(modelID) -> Model</code>
- <code title="get /v1/content/models/{model_id}">client.beta.content.models.<a href="./src/resources/beta/content/models/models.ts">get</a>(modelID) -> Model</code>

#### Fields

Methods:

- <code title="post /v1/content/models/{model_id}/fields">client.beta.content.models.fields.<a href="./src/resources/beta/content/models/fields.ts">create</a>(modelID, { ...params }) -> Field</code>
- <code title="patch /v1/content/models/{model_id}/fields/{field_id}">client.beta.content.models.fields.<a href="./src/resources/beta/content/models/fields.ts">update</a>(fieldID, { ...params }) -> Field</code>
- <code title="delete /v1/content/models/{model_id}/fields/{field_id}">client.beta.content.models.fields.<a href="./src/resources/beta/content/models/fields.ts">delete</a>(fieldID, { ...params }) -> void</code>

### Entries

Types:

- <code><a href="./src/resources/beta/content/entries.ts">Entry</a></code>

Methods:

- <code title="post /v1/content/entries">client.beta.content.entries.<a href="./src/resources/beta/content/entries.ts">create</a>({ ...params }) -> Entry</code>
- <code title="patch /v1/content/entries/{entry_id}">client.beta.content.entries.<a href="./src/resources/beta/content/entries.ts">update</a>(entryID, { ...params }) -> Entry</code>
- <code title="get /v1/content/entries">client.beta.content.entries.<a href="./src/resources/beta/content/entries.ts">list</a>({ ...params }) -> EntriesCursorIDPage</code>
- <code title="delete /v1/content/entries/{entry_id}">client.beta.content.entries.<a href="./src/resources/beta/content/entries.ts">archive</a>(entryID) -> Entry</code>
- <code title="get /v1/content/entries/{entry_id}">client.beta.content.entries.<a href="./src/resources/beta/content/entries.ts">get</a>(entryID) -> Entry</code>
- <code title="post /v1/content/entries/{entry_id}/publish">client.beta.content.entries.<a href="./src/resources/beta/content/entries.ts">publish</a>(entryID, { ...params }) -> Entry</code>
- <code title="post /v1/content/entries/{entry_id}/unpublish">client.beta.content.entries.<a href="./src/resources/beta/content/entries.ts">unpublish</a>(entryID) -> Entry</code>

### Assets

Types:

- <code><a href="./src/resources/beta/content/assets.ts">Asset</a></code>

Methods:

- <code title="post /v1/content/assets">client.beta.content.assets.<a href="./src/resources/beta/content/assets.ts">create</a>({ ...params }) -> Asset</code>
- <code title="patch /v1/content/assets/{asset_id}">client.beta.content.assets.<a href="./src/resources/beta/content/assets.ts">update</a>(assetID, { ...params }) -> Asset</code>
- <code title="get /v1/content/assets">client.beta.content.assets.<a href="./src/resources/beta/content/assets.ts">list</a>({ ...params }) -> AssetsCursorIDPage</code>
- <code title="delete /v1/content/assets/{asset_id}">client.beta.content.assets.<a href="./src/resources/beta/content/assets.ts">delete</a>(assetID) -> void</code>
- <code title="get /v1/content/assets/{asset_id}">client.beta.content.assets.<a href="./src/resources/beta/content/assets.ts">get</a>(assetID) -> Asset</code>
- <code title="post /v1/content/assets/{asset_id}/publish">client.beta.content.assets.<a href="./src/resources/beta/content/assets.ts">publish</a>(assetID) -> Asset</code>

### Locales

Types:

- <code><a href="./src/resources/beta/content/locales.ts">Locale</a></code>

Methods:

- <code title="post /v1/content/locales">client.beta.content.locales.<a href="./src/resources/beta/content/locales.ts">create</a>({ ...params }) -> Locale</code>
- <code title="patch /v1/content/locales/{locale_code}">client.beta.content.locales.<a href="./src/resources/beta/content/locales.ts">update</a>(localeCode, { ...params }) -> Locale</code>
- <code title="get /v1/content/locales">client.beta.content.locales.<a href="./src/resources/beta/content/locales.ts">list</a>({ ...params }) -> LocalesCursorIDPage</code>
- <code title="delete /v1/content/locales/{locale_code}">client.beta.content.locales.<a href="./src/resources/beta/content/locales.ts">delete</a>(localeCode) -> void</code>
- <code title="get /v1/content/locales/{locale_code}">client.beta.content.locales.<a href="./src/resources/beta/content/locales.ts">get</a>(localeCode) -> Locale</code>

### Releases

Types:

- <code><a href="./src/resources/beta/content/releases/releases.ts">Release</a></code>
- <code><a href="./src/resources/beta/content/releases/releases.ts">ReleaseItem</a></code>

Methods:

- <code title="post /v1/content/releases">client.beta.content.releases.<a href="./src/resources/beta/content/releases/releases.ts">create</a>({ ...params }) -> Release</code>
- <code title="patch /v1/content/releases/{release_id}">client.beta.content.releases.<a href="./src/resources/beta/content/releases/releases.ts">update</a>(releaseID, { ...params }) -> Release</code>
- <code title="get /v1/content/releases">client.beta.content.releases.<a href="./src/resources/beta/content/releases/releases.ts">list</a>({ ...params }) -> ReleasesCursorIDPage</code>
- <code title="delete /v1/content/releases/{release_id}">client.beta.content.releases.<a href="./src/resources/beta/content/releases/releases.ts">delete</a>(releaseID) -> void</code>
- <code title="get /v1/content/releases/{release_id}">client.beta.content.releases.<a href="./src/resources/beta/content/releases/releases.ts">get</a>(releaseID) -> Release</code>
- <code title="post /v1/content/releases/{release_id}/publish">client.beta.content.releases.<a href="./src/resources/beta/content/releases/releases.ts">publish</a>(releaseID) -> Release</code>
- <code title="post /v1/content/releases/{release_id}/schedule">client.beta.content.releases.<a href="./src/resources/beta/content/releases/releases.ts">schedule</a>(releaseID, { ...params }) -> Release</code>

#### Items

Methods:

- <code title="post /v1/content/releases/{release_id}/items">client.beta.content.releases.items.<a href="./src/resources/beta/content/releases/items.ts">add</a>(releaseID, { ...params }) -> ReleaseItem</code>
- <code title="delete /v1/content/releases/{release_id}/items/{item_id}">client.beta.content.releases.items.<a href="./src/resources/beta/content/releases/items.ts">remove</a>(itemID, { ...params }) -> void</code>

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
