# AccessControl

Types:

- <code><a href="./src/resources/access-control/access-control.ts">AccessControlEntryResponse</a></code>

Methods:

- <code title="post /v1/access-control/entry">client.accessControl.<a href="./src/resources/access-control/access-control.ts">entry</a>({ ...params }) -> AccessControlEntryResponse</code>

## Scopes

Types:

- <code><a href="./src/resources/access-control/scopes.ts">ScopeCreateResponse</a></code>
- <code><a href="./src/resources/access-control/scopes.ts">ScopeArchiveResponse</a></code>
- <code><a href="./src/resources/access-control/scopes.ts">ScopeSetDefaultRoleResponse</a></code>

Methods:

- <code title="post /v1/access-control/scopes/create">client.accessControl.scopes.<a href="./src/resources/access-control/scopes.ts">create</a>({ ...params }) -> ScopeCreateResponse</code>
- <code title="post /v1/access-control/scopes/archive">client.accessControl.scopes.<a href="./src/resources/access-control/scopes.ts">archive</a>({ ...params }) -> ScopeArchiveResponse</code>
- <code title="post /v1/access-control/scopes/set-default-role">client.accessControl.scopes.<a href="./src/resources/access-control/scopes.ts">setDefaultRole</a>({ ...params }) -> ScopeSetDefaultRoleResponse</code>

## Invitations

Types:

- <code><a href="./src/resources/access-control/invitations.ts">InvitationCreateResponse</a></code>
- <code><a href="./src/resources/access-control/invitations.ts">InvitationAcceptResponse</a></code>
- <code><a href="./src/resources/access-control/invitations.ts">InvitationCreateResourceResponse</a></code>
- <code><a href="./src/resources/access-control/invitations.ts">InvitationListResourceResponse</a></code>
- <code><a href="./src/resources/access-control/invitations.ts">InvitationRevokeResponse</a></code>

Methods:

- <code title="post /v1/access-control/invitations/create">client.accessControl.invitations.<a href="./src/resources/access-control/invitations.ts">create</a>({ ...params }) -> InvitationCreateResponse</code>
- <code title="post /v1/access-control/invitations/accept">client.accessControl.invitations.<a href="./src/resources/access-control/invitations.ts">accept</a>({ ...params }) -> InvitationAcceptResponse</code>
- <code title="post /v1/access-control/invitations/create-resource">client.accessControl.invitations.<a href="./src/resources/access-control/invitations.ts">createResource</a>({ ...params }) -> InvitationCreateResourceResponse</code>
- <code title="post /v1/access-control/invitations/list-resource">client.accessControl.invitations.<a href="./src/resources/access-control/invitations.ts">listResource</a>({ ...params }) -> InvitationListResourceResponse</code>
- <code title="post /v1/access-control/invitations/revoke">client.accessControl.invitations.<a href="./src/resources/access-control/invitations.ts">revoke</a>({ ...params }) -> InvitationRevokeResponse</code>

## Roles

Types:

- <code><a href="./src/resources/access-control/roles.ts">RoleAssignResponse</a></code>
- <code><a href="./src/resources/access-control/roles.ts">RoleCreateOrgCustomResponse</a></code>
- <code><a href="./src/resources/access-control/roles.ts">RoleListGrantableResponse</a></code>
- <code><a href="./src/resources/access-control/roles.ts">RoleRemoveResponse</a></code>
- <code><a href="./src/resources/access-control/roles.ts">RoleReplaceResponse</a></code>
- <code><a href="./src/resources/access-control/roles.ts">RoleUpdatePermissionsResponse</a></code>

Methods:

- <code title="post /v1/access-control/roles/assign">client.accessControl.roles.<a href="./src/resources/access-control/roles.ts">assign</a>({ ...params }) -> RoleAssignResponse</code>
- <code title="post /v1/access-control/roles/create-org-custom">client.accessControl.roles.<a href="./src/resources/access-control/roles.ts">createOrgCustom</a>({ ...params }) -> RoleCreateOrgCustomResponse</code>
- <code title="post /v1/access-control/roles/list-grantable">client.accessControl.roles.<a href="./src/resources/access-control/roles.ts">listGrantable</a>({ ...params }) -> RoleListGrantableResponse</code>
- <code title="post /v1/access-control/roles/remove">client.accessControl.roles.<a href="./src/resources/access-control/roles.ts">remove</a>({ ...params }) -> RoleRemoveResponse</code>
- <code title="post /v1/access-control/roles/replace">client.accessControl.roles.<a href="./src/resources/access-control/roles.ts">replace</a>({ ...params }) -> RoleReplaceResponse</code>
- <code title="post /v1/access-control/roles/update-permissions">client.accessControl.roles.<a href="./src/resources/access-control/roles.ts">updatePermissions</a>({ ...params }) -> RoleUpdatePermissionsResponse</code>

## UserExceptions

Types:

- <code><a href="./src/resources/access-control/user-exceptions.ts">UserExceptionGetResponse</a></code>
- <code><a href="./src/resources/access-control/user-exceptions.ts">UserExceptionSetResponse</a></code>

Methods:

- <code title="post /v1/access-control/user-exceptions/get">client.accessControl.userExceptions.<a href="./src/resources/access-control/user-exceptions.ts">get</a>({ ...params }) -> UserExceptionGetResponse</code>
- <code title="post /v1/access-control/user-exceptions/set">client.accessControl.userExceptions.<a href="./src/resources/access-control/user-exceptions.ts">set</a>({ ...params }) -> UserExceptionSetResponse</code>

## ResourceGrants

Types:

- <code><a href="./src/resources/access-control/resource-grants.ts">ResourceGrantCreateResponse</a></code>
- <code><a href="./src/resources/access-control/resource-grants.ts">ResourceGrantReplaceResponse</a></code>
- <code><a href="./src/resources/access-control/resource-grants.ts">ResourceGrantRevokeResponse</a></code>

Methods:

- <code title="post /v1/access-control/resource-grants/create">client.accessControl.resourceGrants.<a href="./src/resources/access-control/resource-grants.ts">create</a>({ ...params }) -> ResourceGrantCreateResponse</code>
- <code title="post /v1/access-control/resource-grants/replace">client.accessControl.resourceGrants.<a href="./src/resources/access-control/resource-grants.ts">replace</a>({ ...params }) -> ResourceGrantReplaceResponse</code>
- <code title="post /v1/access-control/resource-grants/revoke">client.accessControl.resourceGrants.<a href="./src/resources/access-control/resource-grants.ts">revoke</a>({ ...params }) -> ResourceGrantRevokeResponse</code>

## ResourceRules

Types:

- <code><a href="./src/resources/access-control/resource-rules.ts">ResourceRuleReplaceResponse</a></code>
- <code><a href="./src/resources/access-control/resource-rules.ts">ResourceRuleSetResponse</a></code>

Methods:

- <code title="post /v1/access-control/resource-rules/replace">client.accessControl.resourceRules.<a href="./src/resources/access-control/resource-rules.ts">replace</a>({ ...params }) -> ResourceRuleReplaceResponse</code>
- <code title="post /v1/access-control/resource-rules/set">client.accessControl.resourceRules.<a href="./src/resources/access-control/resource-rules.ts">set</a>({ ...params }) -> ResourceRuleSetResponse</code>

## Expiries

Types:

- <code><a href="./src/resources/access-control/expiries.ts">ExpirySetResponse</a></code>

Methods:

- <code title="post /v1/access-control/expiries/set">client.accessControl.expiries.<a href="./src/resources/access-control/expiries.ts">set</a>({ ...params }) -> ExpirySetResponse</code>

## RoleOverrides

Types:

- <code><a href="./src/resources/access-control/role-overrides.ts">RoleOverrideGetResponse</a></code>
- <code><a href="./src/resources/access-control/role-overrides.ts">RoleOverrideSetResponse</a></code>

Methods:

- <code title="post /v1/access-control/role-overrides/get">client.accessControl.roleOverrides.<a href="./src/resources/access-control/role-overrides.ts">get</a>({ ...params }) -> RoleOverrideGetResponse</code>
- <code title="post /v1/access-control/role-overrides/set">client.accessControl.roleOverrides.<a href="./src/resources/access-control/role-overrides.ts">set</a>({ ...params }) -> RoleOverrideSetResponse</code>

## Members

Types:

- <code><a href="./src/resources/access-control/members.ts">MemberAddResponse</a></code>
- <code><a href="./src/resources/access-control/members.ts">MemberApproveResponse</a></code>
- <code><a href="./src/resources/access-control/members.ts">MemberRemoveResponse</a></code>
- <code><a href="./src/resources/access-control/members.ts">MemberSetStatusResponse</a></code>

Methods:

- <code title="post /v1/access-control/members/add">client.accessControl.members.<a href="./src/resources/access-control/members.ts">add</a>({ ...params }) -> MemberAddResponse</code>
- <code title="post /v1/access-control/members/approve">client.accessControl.members.<a href="./src/resources/access-control/members.ts">approve</a>({ ...params }) -> MemberApproveResponse</code>
- <code title="post /v1/access-control/members/remove">client.accessControl.members.<a href="./src/resources/access-control/members.ts">remove</a>({ ...params }) -> MemberRemoveResponse</code>
- <code title="post /v1/access-control/members/status">client.accessControl.members.<a href="./src/resources/access-control/members.ts">setStatus</a>({ ...params }) -> MemberSetStatusResponse</code>

## AdmissionRules

Types:

- <code><a href="./src/resources/access-control/admission-rules.ts">AdmissionRuleArchiveResponse</a></code>
- <code><a href="./src/resources/access-control/admission-rules.ts">AdmissionRuleUpsertResponse</a></code>

Methods:

- <code title="post /v1/access-control/admission-rules/archive">client.accessControl.admissionRules.<a href="./src/resources/access-control/admission-rules.ts">archive</a>({ ...params }) -> AdmissionRuleArchiveResponse</code>
- <code title="post /v1/access-control/admission-rules/upsert">client.accessControl.admissionRules.<a href="./src/resources/access-control/admission-rules.ts">upsert</a>({ ...params }) -> AdmissionRuleUpsertResponse</code>

## EntryMode

Types:

- <code><a href="./src/resources/access-control/entry-mode.ts">EntryModeSetResponse</a></code>

Methods:

- <code title="post /v1/access-control/entry-mode/set">client.accessControl.entryMode.<a href="./src/resources/access-control/entry-mode.ts">set</a>({ ...params }) -> EntryModeSetResponse</code>

## Groups

Types:

- <code><a href="./src/resources/access-control/groups.ts">GroupCreateResponse</a></code>
- <code><a href="./src/resources/access-control/groups.ts">GroupListResponse</a></code>
- <code><a href="./src/resources/access-control/groups.ts">GroupAddMemberResponse</a></code>
- <code><a href="./src/resources/access-control/groups.ts">GroupArchiveResponse</a></code>
- <code><a href="./src/resources/access-control/groups.ts">GroupRemoveMemberResponse</a></code>
- <code><a href="./src/resources/access-control/groups.ts">GroupRenameResponse</a></code>

Methods:

- <code title="post /v1/access-control/groups/create">client.accessControl.groups.<a href="./src/resources/access-control/groups.ts">create</a>({ ...params }) -> GroupCreateResponse</code>
- <code title="post /v1/access-control/groups/list">client.accessControl.groups.<a href="./src/resources/access-control/groups.ts">list</a>({ ...params }) -> GroupListResponse</code>
- <code title="post /v1/access-control/groups/members/add">client.accessControl.groups.<a href="./src/resources/access-control/groups.ts">addMember</a>({ ...params }) -> GroupAddMemberResponse</code>
- <code title="post /v1/access-control/groups/archive">client.accessControl.groups.<a href="./src/resources/access-control/groups.ts">archive</a>({ ...params }) -> GroupArchiveResponse</code>
- <code title="post /v1/access-control/groups/members/remove">client.accessControl.groups.<a href="./src/resources/access-control/groups.ts">removeMember</a>({ ...params }) -> GroupRemoveMemberResponse</code>
- <code title="post /v1/access-control/groups/rename">client.accessControl.groups.<a href="./src/resources/access-control/groups.ts">rename</a>({ ...params }) -> GroupRenameResponse</code>

# Commerce

Types:

- <code><a href="./src/resources/commerce/commerce.ts">Currency</a></code>
- <code><a href="./src/resources/commerce/commerce.ts">CommerceCancelResponse</a></code>
- <code><a href="./src/resources/commerce/commerce.ts">CommerceCheckResponse</a></code>
- <code><a href="./src/resources/commerce/commerce.ts">CommerceCheckoutResponse</a></code>

Methods:

- <code title="post /v1/commerce/cancel">client.commerce.<a href="./src/resources/commerce/commerce.ts">cancel</a>({ ...params }) -> CommerceCancelResponse</code>
- <code title="post /v1/commerce/check">client.commerce.<a href="./src/resources/commerce/commerce.ts">check</a>({ ...params }) -> CommerceCheckResponse</code>
- <code title="post /v1/commerce/checkout">client.commerce.<a href="./src/resources/commerce/commerce.ts">checkout</a>({ ...params }) -> CommerceCheckoutResponse</code>

## Customers

Types:

- <code><a href="./src/resources/commerce/customers.ts">Customer</a></code>
- <code><a href="./src/resources/commerce/customers.ts">CustomerAddress</a></code>
- <code><a href="./src/resources/commerce/customers.ts">CustomerBillingPortalResponse</a></code>
- <code><a href="./src/resources/commerce/customers.ts">CustomerGetResponse</a></code>

Methods:

- <code title="post /v1/commerce/customers">client.commerce.customers.<a href="./src/resources/commerce/customers.ts">create</a>({ ...params }) -> Customer</code>
- <code title="patch /v1/commerce/customers/{customer_id}">client.commerce.customers.<a href="./src/resources/commerce/customers.ts">update</a>(customerID, { ...params }) -> Customer</code>
- <code title="get /v1/commerce/customers">client.commerce.customers.<a href="./src/resources/commerce/customers.ts">list</a>({ ...params }) -> CustomersCursorIDPage</code>
- <code title="post /v1/commerce/customers/{customer_id}/billing_portal">client.commerce.customers.<a href="./src/resources/commerce/customers.ts">billingPortal</a>(customerID, { ...params }) -> CustomerBillingPortalResponse</code>
- <code title="get /v1/commerce/customers/{customer_id}">client.commerce.customers.<a href="./src/resources/commerce/customers.ts">get</a>(customerID) -> CustomerGetResponse</code>

## Products

Types:

- <code><a href="./src/resources/commerce/products/products.ts">Product</a></code>
- <code><a href="./src/resources/commerce/products/products.ts">ProductCreateResponse</a></code>

Methods:

- <code title="post /v1/commerce/products">client.commerce.products.<a href="./src/resources/commerce/products/products.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="patch /v1/commerce/products/{product_id}">client.commerce.products.<a href="./src/resources/commerce/products/products.ts">update</a>(productID, { ...params }) -> Product</code>
- <code title="get /v1/commerce/products">client.commerce.products.<a href="./src/resources/commerce/products/products.ts">list</a>({ ...params }) -> ProductsCursorIDPage</code>
- <code title="get /v1/commerce/products/{product_id}">client.commerce.products.<a href="./src/resources/commerce/products/products.ts">get</a>(productID) -> Product</code>

### Resources

Types:

- <code><a href="./src/resources/commerce/products/resources.ts">ResourceListResponse</a></code>
- <code><a href="./src/resources/commerce/products/resources.ts">ResourceAttachResponse</a></code>

Methods:

- <code title="get /v1/commerce/products/{product_id}/resources">client.commerce.products.resources.<a href="./src/resources/commerce/products/resources.ts">list</a>(productID, { ...params }) -> ResourceListResponsesCursorIDPage</code>
- <code title="post /v1/commerce/products/{product_id}/resources">client.commerce.products.resources.<a href="./src/resources/commerce/products/resources.ts">attach</a>(productID, { ...params }) -> ResourceAttachResponse</code>
- <code title="delete /v1/commerce/products/{product_id}/resources">client.commerce.products.resources.<a href="./src/resources/commerce/products/resources.ts">detach</a>(productID, { ...params }) -> void</code>

### Variants

Types:

- <code><a href="./src/resources/commerce/products/variants.ts">Variant</a></code>

Methods:

- <code title="post /v1/commerce/products/{product_id}/variants">client.commerce.products.variants.<a href="./src/resources/commerce/products/variants.ts">create</a>(productID, { ...params }) -> Variant</code>
- <code title="patch /v1/commerce/products/{product_id}/variants/{variant_id}">client.commerce.products.variants.<a href="./src/resources/commerce/products/variants.ts">update</a>(variantID, { ...params }) -> Variant</code>
- <code title="get /v1/commerce/products/{product_id}/variants">client.commerce.products.variants.<a href="./src/resources/commerce/products/variants.ts">list</a>(productID, { ...params }) -> VariantsCursorIDPage</code>
- <code title="get /v1/commerce/products/{product_id}/variants/{variant_id}">client.commerce.products.variants.<a href="./src/resources/commerce/products/variants.ts">get</a>(variantID, { ...params }) -> Variant</code>

## Coupons

Types:

- <code><a href="./src/resources/commerce/coupons.ts">Coupon</a></code>

Methods:

- <code title="post /v1/commerce/coupons">client.commerce.coupons.<a href="./src/resources/commerce/coupons.ts">create</a>({ ...params }) -> Coupon</code>
- <code title="patch /v1/commerce/coupons/{coupon_id}">client.commerce.coupons.<a href="./src/resources/commerce/coupons.ts">update</a>(couponID, { ...params }) -> Coupon</code>
- <code title="get /v1/commerce/coupons">client.commerce.coupons.<a href="./src/resources/commerce/coupons.ts">list</a>({ ...params }) -> CouponsCursorIDPage</code>
- <code title="get /v1/commerce/coupons/{coupon_id}">client.commerce.coupons.<a href="./src/resources/commerce/coupons.ts">get</a>(couponID) -> Coupon</code>

## Features

Types:

- <code><a href="./src/resources/commerce/features.ts">Feature</a></code>

Methods:

- <code title="post /v1/commerce/features">client.commerce.features.<a href="./src/resources/commerce/features.ts">create</a>({ ...params }) -> Feature</code>
- <code title="patch /v1/commerce/features/{feature_id}">client.commerce.features.<a href="./src/resources/commerce/features.ts">update</a>(featureID, { ...params }) -> Feature</code>
- <code title="get /v1/commerce/features">client.commerce.features.<a href="./src/resources/commerce/features.ts">list</a>({ ...params }) -> FeaturesCursorIDPage</code>
- <code title="get /v1/commerce/features/{feature_id}">client.commerce.features.<a href="./src/resources/commerce/features.ts">get</a>(featureID) -> Feature</code>

# Connectors

Types:

- <code><a href="./src/resources/connectors.ts">ConnectorCredentialsResponse</a></code>

Methods:

- <code title="get /v1/connectors/{slug}/credentials">client.connectors.<a href="./src/resources/connectors.ts">credentials</a>(slug, { ...params }) -> ConnectorCredentialsResponse</code>

# Content

## Collections

Types:

- <code><a href="./src/resources/content/collections/collections.ts">Collection</a></code>
- <code><a href="./src/resources/content/collections/collections.ts">Field</a></code>

Methods:

- <code title="post /v1/content/collections">client.content.collections.<a href="./src/resources/content/collections/collections.ts">create</a>({ ...params }) -> Collection</code>
- <code title="patch /v1/content/collections/{collection_id}">client.content.collections.<a href="./src/resources/content/collections/collections.ts">update</a>(collectionID, { ...params }) -> Collection</code>
- <code title="get /v1/content/collections">client.content.collections.<a href="./src/resources/content/collections/collections.ts">list</a>({ ...params }) -> CollectionsCursorIDPage</code>
- <code title="delete /v1/content/collections/{collection_id}">client.content.collections.<a href="./src/resources/content/collections/collections.ts">archive</a>(collectionID) -> Collection</code>
- <code title="get /v1/content/collections/{collection_id}">client.content.collections.<a href="./src/resources/content/collections/collections.ts">get</a>(collectionID) -> Collection</code>

### Fields

Methods:

- <code title="post /v1/content/collections/{collection_id}/fields">client.content.collections.fields.<a href="./src/resources/content/collections/fields.ts">create</a>(collectionID, { ...params }) -> Field</code>
- <code title="patch /v1/content/collections/{collection_id}/fields/{field_id}">client.content.collections.fields.<a href="./src/resources/content/collections/fields.ts">update</a>(fieldID, { ...params }) -> Field</code>
- <code title="delete /v1/content/collections/{collection_id}/fields/{field_id}">client.content.collections.fields.<a href="./src/resources/content/collections/fields.ts">delete</a>(fieldID, { ...params }) -> void</code>

## Entries

Types:

- <code><a href="./src/resources/content/entries.ts">Entry</a></code>

Methods:

- <code title="post /v1/content/entries">client.content.entries.<a href="./src/resources/content/entries.ts">create</a>({ ...params }) -> Entry</code>
- <code title="patch /v1/content/entries/{entry_id}">client.content.entries.<a href="./src/resources/content/entries.ts">update</a>(entryID, { ...params }) -> Entry</code>
- <code title="get /v1/content/entries">client.content.entries.<a href="./src/resources/content/entries.ts">list</a>({ ...params }) -> EntriesCursorIDPage</code>
- <code title="delete /v1/content/entries/{entry_id}">client.content.entries.<a href="./src/resources/content/entries.ts">archive</a>(entryID) -> Entry</code>
- <code title="get /v1/content/entries/{entry_id}">client.content.entries.<a href="./src/resources/content/entries.ts">get</a>(entryID) -> Entry</code>
- <code title="post /v1/content/entries/{entry_id}/publish">client.content.entries.<a href="./src/resources/content/entries.ts">publish</a>(entryID, { ...params }) -> Entry</code>
- <code title="post /v1/content/entries/{entry_id}/unpublish">client.content.entries.<a href="./src/resources/content/entries.ts">unpublish</a>(entryID) -> Entry</code>

## Assets

Types:

- <code><a href="./src/resources/content/assets.ts">Asset</a></code>

Methods:

- <code title="post /v1/content/assets">client.content.assets.<a href="./src/resources/content/assets.ts">create</a>({ ...params }) -> Asset</code>
- <code title="patch /v1/content/assets/{asset_id}">client.content.assets.<a href="./src/resources/content/assets.ts">update</a>(assetID, { ...params }) -> Asset</code>
- <code title="get /v1/content/assets">client.content.assets.<a href="./src/resources/content/assets.ts">list</a>({ ...params }) -> AssetsCursorIDPage</code>
- <code title="delete /v1/content/assets/{asset_id}">client.content.assets.<a href="./src/resources/content/assets.ts">delete</a>(assetID) -> void</code>
- <code title="get /v1/content/assets/{asset_id}">client.content.assets.<a href="./src/resources/content/assets.ts">get</a>(assetID) -> Asset</code>
- <code title="post /v1/content/assets/{asset_id}/publish">client.content.assets.<a href="./src/resources/content/assets.ts">publish</a>(assetID) -> Asset</code>

## Locales

Types:

- <code><a href="./src/resources/content/locales.ts">Locale</a></code>

Methods:

- <code title="post /v1/content/locales">client.content.locales.<a href="./src/resources/content/locales.ts">create</a>({ ...params }) -> Locale</code>
- <code title="patch /v1/content/locales/{locale_code}">client.content.locales.<a href="./src/resources/content/locales.ts">update</a>(localeCode, { ...params }) -> Locale</code>
- <code title="get /v1/content/locales">client.content.locales.<a href="./src/resources/content/locales.ts">list</a>({ ...params }) -> LocalesCursorIDPage</code>
- <code title="delete /v1/content/locales/{locale_code}">client.content.locales.<a href="./src/resources/content/locales.ts">delete</a>(localeCode) -> void</code>
- <code title="get /v1/content/locales/{locale_code}">client.content.locales.<a href="./src/resources/content/locales.ts">get</a>(localeCode) -> Locale</code>

## Releases

Types:

- <code><a href="./src/resources/content/releases/releases.ts">Release</a></code>
- <code><a href="./src/resources/content/releases/releases.ts">ReleaseItem</a></code>

Methods:

- <code title="post /v1/content/releases">client.content.releases.<a href="./src/resources/content/releases/releases.ts">create</a>({ ...params }) -> Release</code>
- <code title="patch /v1/content/releases/{release_id}">client.content.releases.<a href="./src/resources/content/releases/releases.ts">update</a>(releaseID, { ...params }) -> Release</code>
- <code title="get /v1/content/releases">client.content.releases.<a href="./src/resources/content/releases/releases.ts">list</a>({ ...params }) -> ReleasesCursorIDPage</code>
- <code title="delete /v1/content/releases/{release_id}">client.content.releases.<a href="./src/resources/content/releases/releases.ts">delete</a>(releaseID) -> void</code>
- <code title="get /v1/content/releases/{release_id}">client.content.releases.<a href="./src/resources/content/releases/releases.ts">get</a>(releaseID) -> Release</code>
- <code title="post /v1/content/releases/{release_id}/publish">client.content.releases.<a href="./src/resources/content/releases/releases.ts">publish</a>(releaseID) -> Release</code>
- <code title="post /v1/content/releases/{release_id}/schedule">client.content.releases.<a href="./src/resources/content/releases/releases.ts">schedule</a>(releaseID, { ...params }) -> Release</code>

### Items

Methods:

- <code title="post /v1/content/releases/{release_id}/items">client.content.releases.items.<a href="./src/resources/content/releases/items.ts">add</a>(releaseID, { ...params }) -> ReleaseItem</code>
- <code title="delete /v1/content/releases/{release_id}/items/{item_id}">client.content.releases.items.<a href="./src/resources/content/releases/items.ts">remove</a>(itemID, { ...params }) -> void</code>

# Domains

Types:

- <code><a href="./src/resources/domains.ts">Domain</a></code>

Methods:

- <code title="get /v1/domains">client.domains.<a href="./src/resources/domains.ts">list</a>({ ...params }) -> DomainsCursorIDPage</code>

# Email

Types:

- <code><a href="./src/resources/email/email.ts">Attachment</a></code>
- <code><a href="./src/resources/email/email.ts">Email</a></code>
- <code><a href="./src/resources/email/email.ts">EmailGetResponse</a></code>
- <code><a href="./src/resources/email/email.ts">EmailSendResponse</a></code>

Methods:

- <code title="get /v1/email">client.email.<a href="./src/resources/email/email.ts">list</a>({ ...params }) -> EmailsCursorIDPage</code>
- <code title="get /v1/email/{email_id}">client.email.<a href="./src/resources/email/email.ts">get</a>(emailID) -> EmailGetResponse</code>
- <code title="post /v1/email">client.email.<a href="./src/resources/email/email.ts">send</a>({ ...params }) -> EmailSendResponse</code>

## Identities

Types:

- <code><a href="./src/resources/email/identities.ts">Identity</a></code>

Methods:

- <code title="post /v1/email/identities">client.email.identities.<a href="./src/resources/email/identities.ts">create</a>({ ...params }) -> Identity</code>
- <code title="get /v1/email/identities">client.email.identities.<a href="./src/resources/email/identities.ts">list</a>({ ...params }) -> IdentitiesCursorIDPage</code>
- <code title="delete /v1/email/identities/{identity_id}">client.email.identities.<a href="./src/resources/email/identities.ts">delete</a>(identityID) -> void</code>
- <code title="get /v1/email/identities/{identity_id}">client.email.identities.<a href="./src/resources/email/identities.ts">get</a>(identityID) -> Identity</code>
- <code title="post /v1/email/identities/{identity_id}/verify">client.email.identities.<a href="./src/resources/email/identities.ts">verify</a>(identityID, { ...params }) -> Identity</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">File</a></code>
- <code><a href="./src/resources/files.ts">Upload</a></code>

Methods:

- <code title="get /v1/files">client.files.<a href="./src/resources/files.ts">list</a>({ ...params }) -> FilesCursorIDPage</code>
- <code title="get /v1/files/{file_id}">client.files.<a href="./src/resources/files.ts">get</a>(fileID) -> File</code>

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
