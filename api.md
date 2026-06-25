# Iam

## Invitations

Types:

- <code><a href="./src/resources/iam/invitations.ts">InvitationAcceptResponse</a></code>

Methods:

- <code title="post /v1/iam/invitations/accept">client.iam.invitations.<a href="./src/resources/iam/invitations.ts">accept</a>({ ...params }) -> InvitationAcceptResponse</code>

## Tenants

Types:

- <code><a href="./src/resources/iam/tenants/tenants.ts">TenantCreateResponse</a></code>
- <code><a href="./src/resources/iam/tenants/tenants.ts">TenantUpdateResponse</a></code>
- <code><a href="./src/resources/iam/tenants/tenants.ts">TenantListResponse</a></code>
- <code><a href="./src/resources/iam/tenants/tenants.ts">TenantArchiveResponse</a></code>
- <code><a href="./src/resources/iam/tenants/tenants.ts">TenantEvaluateAccessResponse</a></code>
- <code><a href="./src/resources/iam/tenants/tenants.ts">TenantGetResponse</a></code>
- <code><a href="./src/resources/iam/tenants/tenants.ts">TenantGrantableRolesResponse</a></code>
- <code><a href="./src/resources/iam/tenants/tenants.ts">TenantUnarchiveResponse</a></code>

Methods:

- <code title="post /v1/iam/tenants">client.iam.tenants.<a href="./src/resources/iam/tenants/tenants.ts">create</a>({ ...params }) -> TenantCreateResponse</code>
- <code title="patch /v1/iam/tenants/{tenant_id}">client.iam.tenants.<a href="./src/resources/iam/tenants/tenants.ts">update</a>(tenantID, { ...params }) -> TenantUpdateResponse</code>
- <code title="get /v1/iam/tenants">client.iam.tenants.<a href="./src/resources/iam/tenants/tenants.ts">list</a>({ ...params }) -> TenantListResponse</code>
- <code title="delete /v1/iam/tenants/{tenant_id}">client.iam.tenants.<a href="./src/resources/iam/tenants/tenants.ts">archive</a>(tenantID, { ...params }) -> TenantArchiveResponse</code>
- <code title="post /v1/iam/tenants/{tenant_id}/evaluate-access">client.iam.tenants.<a href="./src/resources/iam/tenants/tenants.ts">evaluateAccess</a>(tenantID, { ...params }) -> TenantEvaluateAccessResponse</code>
- <code title="get /v1/iam/tenants/{tenant_id}">client.iam.tenants.<a href="./src/resources/iam/tenants/tenants.ts">get</a>(tenantID, { ...params }) -> TenantGetResponse</code>
- <code title="get /v1/iam/tenants/{tenant_id}/grantable-roles">client.iam.tenants.<a href="./src/resources/iam/tenants/tenants.ts">grantableRoles</a>(tenantID, { ...params }) -> TenantGrantableRolesResponse</code>
- <code title="post /v1/iam/tenants/{tenant_id}/unarchive">client.iam.tenants.<a href="./src/resources/iam/tenants/tenants.ts">unarchive</a>(tenantID, { ...params }) -> TenantUnarchiveResponse</code>

### Grants

Types:

- <code><a href="./src/resources/iam/tenants/grants.ts">GrantUpdateResponse</a></code>
- <code><a href="./src/resources/iam/tenants/grants.ts">GrantDeleteResponse</a></code>

Methods:

- <code title="patch /v1/iam/tenants/{tenant_id}/grants/{grant_id}">client.iam.tenants.grants.<a href="./src/resources/iam/tenants/grants.ts">update</a>(grantID, { ...params }) -> GrantUpdateResponse</code>
- <code title="delete /v1/iam/tenants/{tenant_id}/grants/{grant_id}">client.iam.tenants.grants.<a href="./src/resources/iam/tenants/grants.ts">delete</a>(grantID, { ...params }) -> GrantDeleteResponse</code>

### Users

Types:

- <code><a href="./src/resources/iam/tenants/users/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/iam/tenants/users/users.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/iam/tenants/users/users.ts">UserRemoveResponse</a></code>

Methods:

- <code title="post /v1/iam/tenants/{tenant_id}/users">client.iam.tenants.users.<a href="./src/resources/iam/tenants/users/users.ts">create</a>(tenantID, { ...params }) -> UserCreateResponse</code>
- <code title="patch /v1/iam/tenants/{tenant_id}/users/{user_id}">client.iam.tenants.users.<a href="./src/resources/iam/tenants/users/users.ts">update</a>(userID, { ...params }) -> UserUpdateResponse</code>
- <code title="delete /v1/iam/tenants/{tenant_id}/users/{user_id}">client.iam.tenants.users.<a href="./src/resources/iam/tenants/users/users.ts">remove</a>(userID, { ...params }) -> UserRemoveResponse</code>

#### PermissionOverrides

Types:

- <code><a href="./src/resources/iam/tenants/users/permission-overrides.ts">PermissionOverrideUpdateResponse</a></code>
- <code><a href="./src/resources/iam/tenants/users/permission-overrides.ts">PermissionOverrideGetResponse</a></code>

Methods:

- <code title="patch /v1/iam/tenants/{tenant_id}/users/{user_id}/permission-overrides">client.iam.tenants.users.permissionOverrides.<a href="./src/resources/iam/tenants/users/permission-overrides.ts">update</a>(userID, { ...params }) -> PermissionOverrideUpdateResponse</code>
- <code title="get /v1/iam/tenants/{tenant_id}/users/{user_id}/permission-overrides">client.iam.tenants.users.permissionOverrides.<a href="./src/resources/iam/tenants/users/permission-overrides.ts">get</a>(userID, { ...params }) -> PermissionOverrideGetResponse</code>

### Groups

Types:

- <code><a href="./src/resources/iam/tenants/groups/groups.ts">GroupCreateResponse</a></code>
- <code><a href="./src/resources/iam/tenants/groups/groups.ts">GroupUpdateResponse</a></code>
- <code><a href="./src/resources/iam/tenants/groups/groups.ts">GroupArchiveResponse</a></code>
- <code><a href="./src/resources/iam/tenants/groups/groups.ts">GroupUnarchiveResponse</a></code>

Methods:

- <code title="post /v1/iam/tenants/{tenant_id}/groups">client.iam.tenants.groups.<a href="./src/resources/iam/tenants/groups/groups.ts">create</a>(tenantID, { ...params }) -> GroupCreateResponse</code>
- <code title="patch /v1/iam/tenants/{tenant_id}/groups/{group_id}">client.iam.tenants.groups.<a href="./src/resources/iam/tenants/groups/groups.ts">update</a>(groupID, { ...params }) -> GroupUpdateResponse</code>
- <code title="delete /v1/iam/tenants/{tenant_id}/groups/{group_id}">client.iam.tenants.groups.<a href="./src/resources/iam/tenants/groups/groups.ts">archive</a>(groupID, { ...params }) -> GroupArchiveResponse</code>
- <code title="post /v1/iam/tenants/{tenant_id}/groups/{group_id}/unarchive">client.iam.tenants.groups.<a href="./src/resources/iam/tenants/groups/groups.ts">unarchive</a>(groupID, { ...params }) -> GroupUnarchiveResponse</code>

#### Members

Types:

- <code><a href="./src/resources/iam/tenants/groups/members.ts">MemberAddResponse</a></code>
- <code><a href="./src/resources/iam/tenants/groups/members.ts">MemberRemoveResponse</a></code>

Methods:

- <code title="put /v1/iam/tenants/{tenant_id}/groups/{group_id}/members/{user_id}">client.iam.tenants.groups.members.<a href="./src/resources/iam/tenants/groups/members.ts">add</a>(userID, { ...params }) -> MemberAddResponse</code>
- <code title="delete /v1/iam/tenants/{tenant_id}/groups/{group_id}/members/{user_id}">client.iam.tenants.groups.members.<a href="./src/resources/iam/tenants/groups/members.ts">remove</a>(userID, { ...params }) -> MemberRemoveResponse</code>

#### PermissionOverrides

Types:

- <code><a href="./src/resources/iam/tenants/groups/permission-overrides.ts">PermissionOverrideUpdateResponse</a></code>
- <code><a href="./src/resources/iam/tenants/groups/permission-overrides.ts">PermissionOverrideGetResponse</a></code>

Methods:

- <code title="patch /v1/iam/tenants/{tenant_id}/groups/{group_id}/permission-overrides">client.iam.tenants.groups.permissionOverrides.<a href="./src/resources/iam/tenants/groups/permission-overrides.ts">update</a>(groupID, { ...params }) -> PermissionOverrideUpdateResponse</code>
- <code title="get /v1/iam/tenants/{tenant_id}/groups/{group_id}/permission-overrides">client.iam.tenants.groups.permissionOverrides.<a href="./src/resources/iam/tenants/groups/permission-overrides.ts">get</a>(groupID, { ...params }) -> PermissionOverrideGetResponse</code>

### Roles

Types:

- <code><a href="./src/resources/iam/tenants/roles/roles.ts">RoleCreateResponse</a></code>
- <code><a href="./src/resources/iam/tenants/roles/roles.ts">RoleUpdateResponse</a></code>
- <code><a href="./src/resources/iam/tenants/roles/roles.ts">RoleArchiveResponse</a></code>
- <code><a href="./src/resources/iam/tenants/roles/roles.ts">RoleUnarchiveResponse</a></code>

Methods:

- <code title="post /v1/iam/tenants/{tenant_id}/roles">client.iam.tenants.roles.<a href="./src/resources/iam/tenants/roles/roles.ts">create</a>(tenantID, { ...params }) -> RoleCreateResponse</code>
- <code title="patch /v1/iam/tenants/{tenant_id}/roles/{role_id}">client.iam.tenants.roles.<a href="./src/resources/iam/tenants/roles/roles.ts">update</a>(roleID, { ...params }) -> RoleUpdateResponse</code>
- <code title="delete /v1/iam/tenants/{tenant_id}/roles/{role_id}">client.iam.tenants.roles.<a href="./src/resources/iam/tenants/roles/roles.ts">archive</a>(roleID, { ...params }) -> RoleArchiveResponse</code>
- <code title="post /v1/iam/tenants/{tenant_id}/roles/{role_id}/unarchive">client.iam.tenants.roles.<a href="./src/resources/iam/tenants/roles/roles.ts">unarchive</a>(roleID, { ...params }) -> RoleUnarchiveResponse</code>

#### PermissionOverrides

Types:

- <code><a href="./src/resources/iam/tenants/roles/permission-overrides.ts">PermissionOverrideUpdateResponse</a></code>
- <code><a href="./src/resources/iam/tenants/roles/permission-overrides.ts">PermissionOverrideGetResponse</a></code>

Methods:

- <code title="patch /v1/iam/tenants/{tenant_id}/roles/{role_id}/permission-overrides">client.iam.tenants.roles.permissionOverrides.<a href="./src/resources/iam/tenants/roles/permission-overrides.ts">update</a>(roleID, { ...params }) -> PermissionOverrideUpdateResponse</code>
- <code title="get /v1/iam/tenants/{tenant_id}/roles/{role_id}/permission-overrides">client.iam.tenants.roles.permissionOverrides.<a href="./src/resources/iam/tenants/roles/permission-overrides.ts">get</a>(roleID, { ...params }) -> PermissionOverrideGetResponse</code>

### AdmissionRules

Types:

- <code><a href="./src/resources/iam/tenants/admission-rules.ts">AdmissionRuleCreateResponse</a></code>
- <code><a href="./src/resources/iam/tenants/admission-rules.ts">AdmissionRuleUpdateResponse</a></code>
- <code><a href="./src/resources/iam/tenants/admission-rules.ts">AdmissionRuleListResponse</a></code>
- <code><a href="./src/resources/iam/tenants/admission-rules.ts">AdmissionRuleArchiveResponse</a></code>
- <code><a href="./src/resources/iam/tenants/admission-rules.ts">AdmissionRuleUnarchiveResponse</a></code>

Methods:

- <code title="post /v1/iam/tenants/{tenant_id}/admission-rules">client.iam.tenants.admissionRules.<a href="./src/resources/iam/tenants/admission-rules.ts">create</a>(tenantID, { ...params }) -> AdmissionRuleCreateResponse</code>
- <code title="patch /v1/iam/tenants/{tenant_id}/admission-rules/{rule_id}">client.iam.tenants.admissionRules.<a href="./src/resources/iam/tenants/admission-rules.ts">update</a>(ruleID, { ...params }) -> AdmissionRuleUpdateResponse</code>
- <code title="get /v1/iam/tenants/{tenant_id}/admission-rules">client.iam.tenants.admissionRules.<a href="./src/resources/iam/tenants/admission-rules.ts">list</a>(tenantID, { ...params }) -> AdmissionRuleListResponse</code>
- <code title="delete /v1/iam/tenants/{tenant_id}/admission-rules/{rule_id}">client.iam.tenants.admissionRules.<a href="./src/resources/iam/tenants/admission-rules.ts">archive</a>(ruleID, { ...params }) -> AdmissionRuleArchiveResponse</code>
- <code title="post /v1/iam/tenants/{tenant_id}/admission-rules/{rule_id}/unarchive">client.iam.tenants.admissionRules.<a href="./src/resources/iam/tenants/admission-rules.ts">unarchive</a>(ruleID, { ...params }) -> AdmissionRuleUnarchiveResponse</code>

### AuditEvents

Types:

- <code><a href="./src/resources/iam/tenants/audit-events.ts">AuditEventListResponse</a></code>

Methods:

- <code title="get /v1/iam/tenants/{tenant_id}/audit-events">client.iam.tenants.auditEvents.<a href="./src/resources/iam/tenants/audit-events.ts">list</a>(tenantID, { ...params }) -> AuditEventListResponse</code>

### Invitations

Types:

- <code><a href="./src/resources/iam/tenants/invitations.ts">InvitationListResponse</a></code>
- <code><a href="./src/resources/iam/tenants/invitations.ts">InvitationCreateResourceResponse</a></code>
- <code><a href="./src/resources/iam/tenants/invitations.ts">InvitationCreateTenantResponse</a></code>
- <code><a href="./src/resources/iam/tenants/invitations.ts">InvitationRevokeResponse</a></code>

Methods:

- <code title="get /v1/iam/tenants/{tenant_id}/invitations">client.iam.tenants.invitations.<a href="./src/resources/iam/tenants/invitations.ts">list</a>(tenantID, { ...params }) -> InvitationListResponse</code>
- <code title="post /v1/iam/tenants/{tenant_id}/resources/{resource_type}/{resource_id}/invitations">client.iam.tenants.invitations.<a href="./src/resources/iam/tenants/invitations.ts">createResource</a>(resourceID, { ...params }) -> InvitationCreateResourceResponse</code>
- <code title="post /v1/iam/tenants/{tenant_id}/invitations">client.iam.tenants.invitations.<a href="./src/resources/iam/tenants/invitations.ts">createTenant</a>(tenantID, { ...params }) -> InvitationCreateTenantResponse</code>
- <code title="delete /v1/iam/tenants/{tenant_id}/invitations/{invitation_id}">client.iam.tenants.invitations.<a href="./src/resources/iam/tenants/invitations.ts">revoke</a>(invitationID, { ...params }) -> InvitationRevokeResponse</code>

### Resources

Types:

- <code><a href="./src/resources/iam/tenants/resources/resources.ts">ResourceAccessGrantingRolesResponse</a></code>

Methods:

- <code title="get /v1/iam/tenants/{tenant_id}/resources/{resource_type}/{resource_id}/access-granting-roles">client.iam.tenants.resources.<a href="./src/resources/iam/tenants/resources/resources.ts">accessGrantingRoles</a>(resourceID, { ...params }) -> ResourceAccessGrantingRolesResponse</code>

#### Grants

Types:

- <code><a href="./src/resources/iam/tenants/resources/grants.ts">GrantCreateResponse</a></code>
- <code><a href="./src/resources/iam/tenants/resources/grants.ts">GrantUpdateResponse</a></code>

Methods:

- <code title="post /v1/iam/tenants/{tenant_id}/resources/{resource_type}/{resource_id}/grants">client.iam.tenants.resources.grants.<a href="./src/resources/iam/tenants/resources/grants.ts">create</a>(resourceID, { ...params }) -> GrantCreateResponse</code>
- <code title="patch /v1/iam/tenants/{tenant_id}/resources/{resource_type}/{resource_id}/grants">client.iam.tenants.resources.grants.<a href="./src/resources/iam/tenants/resources/grants.ts">update</a>(resourceID, { ...params }) -> GrantUpdateResponse</code>

#### PermissionOverrides

Types:

- <code><a href="./src/resources/iam/tenants/resources/permission-overrides.ts">PermissionOverrideUpdateResponse</a></code>

Methods:

- <code title="patch /v1/iam/tenants/{tenant_id}/resource-permission-overrides">client.iam.tenants.resources.permissionOverrides.<a href="./src/resources/iam/tenants/resources/permission-overrides.ts">update</a>(tenantID, { ...params }) -> PermissionOverrideUpdateResponse</code>

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

- <code><a href="./src/resources/domains/domains.ts">Domain</a></code>
- <code><a href="./src/resources/domains/domains.ts">DomainAvailability</a></code>
- <code><a href="./src/resources/domains/domains.ts">DomainCheckAvailabilityResponse</a></code>
- <code><a href="./src/resources/domains/domains.ts">DomainSearchResponse</a></code>

Methods:

- <code title="get /v1/domains">client.domains.<a href="./src/resources/domains/domains.ts">list</a>({ ...params }) -> DomainsCursorIDPage</code>
- <code title="post /v1/domains/check-availability">client.domains.<a href="./src/resources/domains/domains.ts">checkAvailability</a>({ ...params }) -> DomainCheckAvailabilityResponse</code>
- <code title="post /v1/domains/search">client.domains.<a href="./src/resources/domains/domains.ts">search</a>({ ...params }) -> DomainSearchResponse</code>

## Purchased

Types:

- <code><a href="./src/resources/domains/purchased.ts">PurchasedDomain</a></code>
- <code><a href="./src/resources/domains/purchased.ts">PurchasedCreateResponse</a></code>
- <code><a href="./src/resources/domains/purchased.ts">PurchasedConfirmResponse</a></code>

Methods:

- <code title="post /v1/domains/purchase">client.domains.purchased.<a href="./src/resources/domains/purchased.ts">create</a>({ ...params }) -> PurchasedCreateResponse</code>
- <code title="get /v1/domains/purchased">client.domains.purchased.<a href="./src/resources/domains/purchased.ts">list</a>({ ...params }) -> PurchasedDomainsCursorIDPage</code>
- <code title="post /v1/domains/purchase/confirm">client.domains.purchased.<a href="./src/resources/domains/purchased.ts">confirm</a>({ ...params }) -> PurchasedConfirmResponse</code>
- <code title="get /v1/domains/purchased/{domain_id}">client.domains.purchased.<a href="./src/resources/domains/purchased.ts">get</a>(domainID) -> PurchasedDomain</code>

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
