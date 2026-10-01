# hercules TypeScript API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`Analytics`](#analytics)
  - [Run Analytics Query](#run-analytics-query)
  - [List Analytics Tables](#list-analytics-tables)
  - [Get Analytics Status](#get-analytics-status)
- [`Iam`](#iam)
  - [`Iam Invitations`](#iam-invitations)
    - [Accept invitation](#accept-invitation)
  - [`Iam Tenants`](#iam-tenants)
    - [List tenants](#list-tenants)
    - [Create tenant](#create-tenant)
    - [Get tenant](#get-tenant)
    - [Update tenant](#update-tenant)
    - [Archive tenant](#archive-tenant)
    - [Unarchive tenant](#unarchive-tenant)
    - [Evaluate tenant access](#evaluate-tenant-access)
    - [Create invitation](#create-invitation)
    - [List tenant role assignments](#list-tenant-role-assignments)
    - [List tenant resource role assignments](#list-tenant-resource-role-assignments)
    - [`Iam Tenants Members`](#iam-tenants-members)
      - [Add tenant member](#add-tenant-member)
      - [List tenant members](#list-tenant-members)
      - [Get tenant member](#get-tenant-member)
      - [Update tenant member status](#update-tenant-member-status)
      - [Remove tenant member](#remove-tenant-member)
      - [Assign tenant role to member](#assign-tenant-role-to-member)
      - [Replace member tenant roles](#replace-member-tenant-roles)
      - [Unassign tenant role from member](#unassign-tenant-role-from-member)
      - [List a member's tenant role assignments](#list-a-members-tenant-role-assignments)
      - [Assign resource role to member](#assign-resource-role-to-member)
      - [Replace member resource roles](#replace-member-resource-roles)
      - [Unassign resource role from member](#unassign-resource-role-from-member)
      - [List a member's resource role assignments](#list-a-members-resource-role-assignments)
    - [`Iam Tenants Groups`](#iam-tenants-groups)
      - [Create tenant group](#create-tenant-group)
      - [List tenant groups](#list-tenant-groups)
      - [Get tenant group](#get-tenant-group)
      - [Update tenant group](#update-tenant-group)
      - [Delete tenant group](#delete-tenant-group)
      - [Archive tenant group](#archive-tenant-group)
      - [Unarchive tenant group](#unarchive-tenant-group)
      - [Assign tenant role to group](#assign-tenant-role-to-group)
      - [Unassign tenant role from group](#unassign-tenant-role-from-group)
      - [List a group's tenant role assignments](#list-a-groups-tenant-role-assignments)
      - [Assign resource role to group](#assign-resource-role-to-group)
      - [Unassign resource role from group](#unassign-resource-role-from-group)
      - [List a group's resource role assignments](#list-a-groups-resource-role-assignments)
      - [`Iam Tenants Groups Members`](#iam-tenants-groups-members)
        - [Add tenant group member](#add-tenant-group-member)
        - [List a group's members](#list-a-groups-members)
        - [Remove tenant group member](#remove-tenant-group-member)
    - [`Iam Tenants Roles`](#iam-tenants-roles)
      - [Create role](#create-role)
      - [List tenant roles](#list-tenant-roles)
      - [Get tenant role](#get-tenant-role)
      - [Update role](#update-role)
      - [Delete role](#delete-role)
    - [`Iam Tenants AccessRules`](#iam-tenants-accessrules)
      - [List tenant access rules](#list-tenant-access-rules)
      - [Create tenant access rule](#create-tenant-access-rule)
      - [Archive tenant access rule](#archive-tenant-access-rule)
    - [`Iam Tenants AuditEvents`](#iam-tenants-auditevents)
      - [List tenant audit events](#list-tenant-audit-events)
    - [`Iam Tenants Invitations`](#iam-tenants-invitations)
      - [List tenant invitations](#list-tenant-invitations)
      - [Revoke invitation](#revoke-invitation)
- [`Commerce`](#commerce)
  - [Create Checkout Session](#create-checkout-session)
  - [Cancel Subscription](#cancel-subscription)
  - [Check Entitlement](#check-entitlement)
  - [`Commerce CheckoutSessions`](#commerce-checkoutsessions)
    - [Get Checkout Session](#get-checkout-session)
  - [`Commerce Customers`](#commerce-customers)
    - [List Customers](#list-customers)
    - [Get Customer](#get-customer)
    - [Create Customer](#create-customer)
    - [Update Customer](#update-customer)
    - [Create Billing Portal Session](#create-billing-portal-session)
  - [`Commerce Products`](#commerce-products)
    - [List Products](#list-products)
    - [Get Product](#get-product)
    - [Create Product](#create-product)
    - [Update Product](#update-product)
    - [`Commerce Products Resources`](#commerce-products-resources)
      - [List Product Resources](#list-product-resources)
      - [Attach Resources to Product](#attach-resources-to-product)
      - [Detach Resources from Product](#detach-resources-from-product)
    - [`Commerce Products Variants`](#commerce-products-variants)
      - [List Product Variants](#list-product-variants)
      - [Get Product Variant](#get-product-variant)
      - [Create Product Variant](#create-product-variant)
      - [Update Product Variant](#update-product-variant)
  - [`Commerce Coupons`](#commerce-coupons)
    - [List Coupons](#list-coupons)
    - [Get Coupon](#get-coupon)
    - [Create Coupon](#create-coupon)
    - [Update Coupon](#update-coupon)
  - [`Commerce Features`](#commerce-features)
    - [List Features](#list-features)
    - [Get Feature](#get-feature)
    - [Create Feature](#create-feature)
    - [Update Feature](#update-feature)
  - [`Commerce Entitlements`](#commerce-entitlements)
    - [List Entitlement Grants](#list-entitlement-grants)
    - [Get Entitlement Grant](#get-entitlement-grant)
    - [Create Entitlement Grant](#create-entitlement-grant)
    - [Update Entitlement Grant](#update-entitlement-grant)
- [`Connectors`](#connectors)
  - [Get Connector Credentials](#get-connector-credentials)
  - [Send Connector Request](#send-connector-request)
- [`Content`](#content)
  - [`Content Collections`](#content-collections)
    - [List Content Collections](#list-content-collections)
    - [Get Content Collection](#get-content-collection)
    - [Create Content Collection](#create-content-collection)
    - [Update Content Collection](#update-content-collection)
    - [Archive Content Collection](#archive-content-collection)
    - [`Content Collections Fields`](#content-collections-fields)
      - [Add Field to Collection](#add-field-to-collection)
      - [Update Field](#update-field)
      - [Remove Field from Collection](#remove-field-from-collection)
  - [`Content Entries`](#content-entries)
    - [List Content Entries](#list-content-entries)
    - [Get Content Entry](#get-content-entry)
    - [Create Content Entry](#create-content-entry)
    - [Update Content Entry](#update-content-entry)
    - [Archive Content Entry](#archive-content-entry)
    - [Publish Content Entry](#publish-content-entry)
    - [Unpublish Content Entry](#unpublish-content-entry)
  - [`Content Assets`](#content-assets)
    - [List Content Assets](#list-content-assets)
    - [Get Content Asset](#get-content-asset)
    - [Create Content Asset](#create-content-asset)
    - [Update Content Asset](#update-content-asset)
    - [Delete Content Asset](#delete-content-asset)
    - [Publish Content Asset](#publish-content-asset)
  - [`Content Locales`](#content-locales)
    - [List Content Locales](#list-content-locales)
    - [Get Content Locale](#get-content-locale)
    - [Create Content Locale](#create-content-locale)
    - [Update Content Locale](#update-content-locale)
    - [Delete Content Locale](#delete-content-locale)
  - [`Content Releases`](#content-releases)
    - [List Content Releases](#list-content-releases)
    - [Get Content Release](#get-content-release)
    - [Create Content Release](#create-content-release)
    - [Update Content Release](#update-content-release)
    - [Delete Content Release](#delete-content-release)
    - [Publish Release](#publish-release)
    - [Schedule Release](#schedule-release)
    - [`Content Releases Items`](#content-releases-items)
      - [Add Item to Release](#add-item-to-release)
      - [Remove Item from Release](#remove-item-from-release)
- [`Domains`](#domains)
  - [List Domains](#list-domains)
  - [Check Domain Availability](#check-domain-availability)
  - [Search Domains](#search-domains)
  - [`Domains Purchased`](#domains-purchased)
    - [Purchase Domain](#purchase-domain)
    - [Confirm Domain Purchase](#confirm-domain-purchase)
    - [List Purchased Domains](#list-purchased-domains)
    - [Get Purchased Domain](#get-purchased-domain)
- [`Email`](#email)
  - [Send Email](#send-email)
  - [List Emails](#list-emails)
  - [Get Email](#get-email)
  - [`Email Identities`](#email-identities)
    - [Create Identity](#create-identity)
    - [List Identities](#list-identities)
    - [Get Identity](#get-identity)
    - [Verify Identity](#verify-identity)
    - [Delete Identity](#delete-identity)
  - [`Email Suppressions`](#email-suppressions)
    - [Create Suppression](#create-suppression)
    - [List Suppressions](#list-suppressions)
    - [Get Suppression](#get-suppression)
    - [Remove Suppression](#remove-suppression)
    - [Add Batch Suppressions](#add-batch-suppressions)
    - [Remove Batch Suppressions](#remove-batch-suppressions)
- [`Files`](#files)
  - [List Files](#list-files)
  - [Get File](#get-file)
- [`PushNotifications`](#pushnotifications)
  - [Enable Notifications](#enable-notifications)
  - [Register Subscription](#register-subscription)
  - [Remove Subscription](#remove-subscription)
  - [Identify Subscription](#identify-subscription)
  - [Send Notification](#send-notification)
  - [`PushNotifications Topics`](#pushnotifications-topics)
    - [Subscribe to Topics](#subscribe-to-topics)
    - [Unsubscribe from Topics](#unsubscribe-from-topics)
    - [List Topics](#list-topics)

## Setup

```ts
import Hercules from '@usehercules/sdk';

const client = new Hercules({
  apiKey: process.env['HERCULES_API_KEY'], // defaults to the HERCULES_API_KEY env var
});
```

## `Analytics`

(Beta) Query the app's analytics replica with read-only SQL, list the
replicated tables and their columns, and check replication status.

### Run Analytics Query

Executes a single read-only SQL statement against the app's analytics replica and returns rows with column metadata and execution stats.

| Direction | Type |
| --- | --- |
| Request | [`AnalyticsQueryParams`](./src/resources/analytics.ts) |
| Response | [`QueryResponse`](./src/resources/analytics.ts) |

```ts
const query = await client.analytics.query({
  sql: 'x',
});
```

### List Analytics Tables

Retrieves the replicated tables and their column types, along with the replica's last sync time.

| Direction | Type |
| --- | --- |
| Response | [`AnalyticsListTablesResponse`](./src/resources/analytics.ts) |

```ts
const analytics = await client.analytics.listTables();
```

### Get Analytics Status

Reports whether analytics is enabled for the app, the replication state, last sync time, and replica storage size.

| Direction | Type |
| --- | --- |
| Response | [`Status`](./src/resources/analytics.ts) |

```ts
const status = await client.analytics.status();
```

## `Iam`

Manage IAM tenants, members, groups, roles, access rules, invitations,
and tenant-wide / resource role assignments. Requires an API key with the
IAM administration permission.

### `Iam Invitations`

#### Accept invitation

Accepts a pending invitation as the signed-in end user and materializes its tenant-wide role assignments.

| Direction | Type |
| --- | --- |
| Request | [`InvitationAcceptParams`](./src/resources/iam/invitations.ts) |
| Response | [`InvitationAcceptResponse`](./src/resources/iam/invitations.ts) |

```ts
const invitation = await client.iam.invitations.accept({
  actor_user_id: 'x',
  invitation_token: 'x',
});
```

### `Iam Tenants`

#### List tenants

Lists the deployment's IAM tenants, primary tenant first.

| Direction | Type |
| --- | --- |
| Request | [`TenantListParams`](./src/resources/iam/tenants/tenants.ts) |
| Response | [`TenantListResponse`](./src/resources/iam/tenants/tenants.ts) |

```ts
const tenant = await client.iam.tenants.list({
  limit: 50,
});
```

#### Create tenant

Creates a tenant and assigns its initial owner. The signed-in user becomes the owner unless trusted server code specifies another user. The initial owner is granted the seeded owner role. The default role (for later members) defaults to the seeded member role and must not be an app-scoped role.

| Direction | Type |
| --- | --- |
| Request | [`TenantCreateParams`](./src/resources/iam/tenants/tenants.ts) |
| Response | [`TenantCreateResponse`](./src/resources/iam/tenants/tenants.ts) |

```ts
const tenant = await client.iam.tenants.create({
  actor_user_id: 'x',
  name: 'x',
});
```

#### Get tenant

Returns one IAM tenant by ID. Pass `primary` for the deployment's primary tenant.

| Direction | Type |
| --- | --- |
| Response | [`TenantGetResponse`](./src/resources/iam/tenants/tenants.ts) |

```ts
const tenant = await client.iam.tenants.get('tenantId');
```

#### Update tenant

Updates a tenant's name, default role, or access mode.

| Direction | Type |
| --- | --- |
| Request | [`TenantUpdateParams`](./src/resources/iam/tenants/tenants.ts) |
| Response | [`TenantUpdateResponse`](./src/resources/iam/tenants/tenants.ts) |

```ts
const tenant = await client.iam.tenants.update('tenantId', {
  actor_user_id: 'x',
});
```

#### Archive tenant

Archives a non-primary tenant and blocks its access without deleting its data.

| Direction | Type |
| --- | --- |
| Request | [`TenantArchiveParams`](./src/resources/iam/tenants/tenants.ts) |
| Response | [`TenantArchiveResponse`](./src/resources/iam/tenants/tenants.ts) |

```ts
const tenant = await client.iam.tenants.archive('tenantId', {
  actor_user_id: 'x',
});
```

#### Unarchive tenant

Restores an archived tenant and re-enables access through its existing data.

| Direction | Type |
| --- | --- |
| Request | [`TenantUnarchiveParams`](./src/resources/iam/tenants/tenants.ts) |
| Response | [`TenantUnarchiveResponse`](./src/resources/iam/tenants/tenants.ts) |

```ts
const tenant = await client.iam.tenants.unarchive('tenantId', {
  actor_user_id: 'x',
});
```

#### Evaluate tenant access

Evaluates whether the signed-in end user may enter the tenant and applies the result: access mode `open` creates an active membership with the tenant default role, `approval_required` creates a pending membership, and denials create nothing. Call it after sign-in, before reading the user's access status. Safe to repeat; an existing membership is returned unchanged.

| Direction | Type |
| --- | --- |
| Request | [`TenantEvaluateAccessParams`](./src/resources/iam/tenants/tenants.ts) |
| Response | [`TenantEvaluateAccessResponse`](./src/resources/iam/tenants/tenants.ts) |

```ts
const tenant = await client.iam.tenants.evaluateAccess('tenantId', {
  actor_user_id: 'x',
});
```

#### Create invitation

Creates an invitation that confers tenant-wide roles when accepted.

| Direction | Type |
| --- | --- |
| Request | [`TenantCreateInvitationParams`](./src/resources/iam/tenants/tenants.ts) |
| Response | [`TenantCreateInvitationResponse`](./src/resources/iam/tenants/tenants.ts) |

```ts
const tenant = await client.iam.tenants.createInvitation('tenantId', {
  actor_user_id: 'x',
});
```

#### List tenant role assignments

Lists tenant-wide role assignments in a tenant, newest first. Filter by member, group, or role.

| Direction | Type |
| --- | --- |
| Request | [`TenantListRoleAssignmentsParams`](./src/resources/iam/tenants/tenants.ts) |
| Response | [`TenantListRoleAssignmentsResponse`](./src/resources/iam/tenants/tenants.ts) |

```ts
const tenant = await client.iam.tenants.listRoleAssignments('tenantId', {
  limit: 50,
});
```

#### List tenant resource role assignments

Lists resource role assignments in a tenant, newest first. Filter by resource type and external ID to find who has a role on one exact resource, or by member, group, or role.

| Direction | Type |
| --- | --- |
| Request | [`TenantListResourceRoleAssignmentsParams`](./src/resources/iam/tenants/tenants.ts) |
| Response | [`TenantListResourceRoleAssignmentsResponse`](./src/resources/iam/tenants/tenants.ts) |

```ts
const tenant = await client.iam.tenants.listResourceRoleAssignments('tenantId', {
  limit: 50,
});
```

#### `Iam Tenants Members`

##### Add tenant member

Adds an end user to the tenant, optionally with a role.

| Direction | Type |
| --- | --- |
| Request | [`MemberCreateParams`](./src/resources/iam/tenants/members.ts) |
| Response | [`MemberCreateResponse`](./src/resources/iam/tenants/members.ts) |

```ts
const member = await client.iam.tenants.members.create('tenantId', {
  actor_user_id: 'x',
  user_id: 'x',
});
```

##### List tenant members

Lists a tenant's members, newest first. Filter by status, by a role the member directly holds, or by the member's Hercules Auth user id.

| Direction | Type |
| --- | --- |
| Request | [`MemberListParams`](./src/resources/iam/tenants/members.ts) |
| Response | [`MemberListResponse`](./src/resources/iam/tenants/members.ts) |

```ts
const member = await client.iam.tenants.members.list('tenantId', {
  limit: 50,
});
```

##### Get tenant member

Returns one tenant member by their membership ID.

| Direction | Type |
| --- | --- |
| Request | [`MemberGetParams`](./src/resources/iam/tenants/members.ts) |
| Response | [`MemberGetResponse`](./src/resources/iam/tenants/members.ts) |

```ts
const member = await client.iam.tenants.members.get('membershipId', {
  tenant_id: 'tenantId',
});
```

##### Update tenant member status

Approves, suspends, blocks, reactivates, or removes a tenant member.

| Direction | Type |
| --- | --- |
| Request | [`MemberUpdateStatusParams`](./src/resources/iam/tenants/members.ts) |
| Response | [`MemberUpdateStatusResponse`](./src/resources/iam/tenants/members.ts) |

```ts
const member = await client.iam.tenants.members.updateStatus('membershipId', {
  tenant_id: 'tenantId',
  actor_user_id: 'x',
  status: 'active',
});
```

##### Remove tenant member

Removes a member from the tenant. The component treats a removed member as denied.

| Direction | Type |
| --- | --- |
| Request | [`MemberRemoveParams`](./src/resources/iam/tenants/members.ts) |
| Response | [`MemberRemoveResponse`](./src/resources/iam/tenants/members.ts) |

```ts
const member = await client.iam.tenants.members.remove('membershipId', {
  tenant_id: 'tenantId',
});
```

##### Assign tenant role to member

Assigns a tenant-wide role to a member.

| Direction | Type |
| --- | --- |
| Request | [`MemberAssignRoleParams`](./src/resources/iam/tenants/members.ts) |
| Response | [`MemberAssignRoleResponse`](./src/resources/iam/tenants/members.ts) |

```ts
const member = await client.iam.tenants.members.assignRole('membershipId', {
  tenant_id: 'tenantId',
  actor_user_id: 'x',
  role: {
    id: 'x',
  },
});
```

##### Replace member tenant roles

Reconciles the member's direct tenant-wide role assignments to exactly the supplied set in one transaction: missing roles are assigned, surplus assignments removed, matching ones kept. Roles conferred via groups are untouched. Idempotent; prefer this over unassign-then-assign loops.

| Direction | Type |
| --- | --- |
| Request | [`MemberReplaceRolesParams`](./src/resources/iam/tenants/members.ts) |
| Response | [`MemberReplaceRolesResponse`](./src/resources/iam/tenants/members.ts) |

```ts
const member = await client.iam.tenants.members.replaceRoles('membershipId', {
  tenant_id: 'tenantId',
  actor_user_id: 'x',
  roles: [],
});
```

##### Unassign tenant role from member

Removes a tenant-wide role assignment.

| Direction | Type |
| --- | --- |
| Request | [`MemberUnassignRoleParams`](./src/resources/iam/tenants/members.ts) |
| Response | [`MemberUnassignRoleResponse`](./src/resources/iam/tenants/members.ts) |

```ts
const member = await client.iam.tenants.members.unassignRole('assignmentId', {
  tenant_id: 'tenantId',
  membership_id: 'membershipId',
});
```

##### List a member's tenant role assignments

Lists the tenant-wide role assignments held by one member, newest first.

| Direction | Type |
| --- | --- |
| Request | [`MemberListRoleAssignmentsParams`](./src/resources/iam/tenants/members.ts) |
| Response | [`MemberListRoleAssignmentsResponse`](./src/resources/iam/tenants/members.ts) |

```ts
const member = await client.iam.tenants.members.listRoleAssignments('membershipId', {
  tenant_id: 'tenantId',
  limit: 50,
});
```

##### Assign resource role to member

Assigns a role to a member on one exact resource.

| Direction | Type |
| --- | --- |
| Request | [`MemberAssignResourceRoleParams`](./src/resources/iam/tenants/members.ts) |
| Response | [`MemberAssignResourceRoleResponse`](./src/resources/iam/tenants/members.ts) |

```ts
const member = await client.iam.tenants.members.assignResourceRole('membershipId', {
  tenant_id: 'tenantId',
  actor_user_id: 'x',
  role: {
    id: 'x',
  },
  resource_type: {
    id: 'x',
  },
  external_id: 'x',
});
```

##### Replace member resource roles

Reconciles the member's direct role assignments on one exact resource to exactly the supplied set in one transaction: missing roles are assigned, surplus assignments removed, matching ones kept. Grants on other resources and via groups are untouched. Idempotent; prefer this over unassign-then-assign loops.

| Direction | Type |
| --- | --- |
| Request | [`MemberReplaceResourceRolesParams`](./src/resources/iam/tenants/members.ts) |
| Response | [`MemberReplaceResourceRolesResponse`](./src/resources/iam/tenants/members.ts) |

```ts
const member = await client.iam.tenants.members.replaceResourceRoles('membershipId', {
  tenant_id: 'tenantId',
  actor_user_id: 'x',
  resource_type: {
    id: 'x',
  },
  external_id: 'x',
  roles: [],
});
```

##### Unassign resource role from member

Removes a member resource role assignment.

| Direction | Type |
| --- | --- |
| Request | [`MemberUnassignResourceRoleParams`](./src/resources/iam/tenants/members.ts) |
| Response | [`MemberUnassignResourceRoleResponse`](./src/resources/iam/tenants/members.ts) |

```ts
const member = await client.iam.tenants.members.unassignResourceRole('assignmentId', {
  tenant_id: 'tenantId',
  membership_id: 'membershipId',
});
```

##### List a member's resource role assignments

Lists the resource role assignments held by one member, newest first.

| Direction | Type |
| --- | --- |
| Request | [`MemberListResourceRoleAssignmentsParams`](./src/resources/iam/tenants/members.ts) |
| Response | [`MemberListResourceRoleAssignmentsResponse`](./src/resources/iam/tenants/members.ts) |

```ts
const member = await client.iam.tenants.members.listResourceRoleAssignments('membershipId', {
  tenant_id: 'tenantId',
  limit: 50,
});
```

#### `Iam Tenants Groups`

##### Create tenant group

Creates an active group with no members in a tenant.

| Direction | Type |
| --- | --- |
| Request | [`GroupCreateParams`](./src/resources/iam/tenants/groups/groups.ts) |
| Response | [`GroupCreateResponse`](./src/resources/iam/tenants/groups/groups.ts) |

```ts
const group = await client.iam.tenants.groups.create('tenantId', {
  actor_user_id: 'x',
  name: 'x',
});
```

##### List tenant groups

Lists a tenant's groups, newest first.

| Direction | Type |
| --- | --- |
| Request | [`GroupListParams`](./src/resources/iam/tenants/groups/groups.ts) |
| Response | [`GroupListResponse`](./src/resources/iam/tenants/groups/groups.ts) |

```ts
const group = await client.iam.tenants.groups.list('tenantId', {
  limit: 50,
});
```

##### Get tenant group

Returns one tenant group by ID.

| Direction | Type |
| --- | --- |
| Request | [`GroupGetParams`](./src/resources/iam/tenants/groups/groups.ts) |
| Response | [`GroupGetResponse`](./src/resources/iam/tenants/groups/groups.ts) |

```ts
const group = await client.iam.tenants.groups.get('groupId', {
  tenant_id: 'tenantId',
});
```

##### Update tenant group

Updates a tenant group's name or description.

| Direction | Type |
| --- | --- |
| Request | [`GroupUpdateParams`](./src/resources/iam/tenants/groups/groups.ts) |
| Response | [`GroupUpdateResponse`](./src/resources/iam/tenants/groups/groups.ts) |

```ts
const group = await client.iam.tenants.groups.update('groupId', {
  tenant_id: 'tenantId',
  actor_user_id: 'x',
});
```

##### Delete tenant group

Permanently deletes a tenant group, cascading its memberships and role assignments.

| Direction | Type |
| --- | --- |
| Request | [`GroupDeleteParams`](./src/resources/iam/tenants/groups/groups.ts) |
| Response | [`GroupDeleteResponse`](./src/resources/iam/tenants/groups/groups.ts) |

```ts
const group = await client.iam.tenants.groups.delete('groupId', {
  tenant_id: 'tenantId',
});
```

##### Archive tenant group

Archives a tenant group so it stops granting access.

| Direction | Type |
| --- | --- |
| Request | [`GroupArchiveParams`](./src/resources/iam/tenants/groups/groups.ts) |
| Response | [`GroupArchiveResponse`](./src/resources/iam/tenants/groups/groups.ts) |

```ts
const group = await client.iam.tenants.groups.archive('groupId', {
  tenant_id: 'tenantId',
  actor_user_id: 'x',
});
```

##### Unarchive tenant group

Restores an archived tenant group so it grants access again.

| Direction | Type |
| --- | --- |
| Request | [`GroupUnarchiveParams`](./src/resources/iam/tenants/groups/groups.ts) |
| Response | [`GroupUnarchiveResponse`](./src/resources/iam/tenants/groups/groups.ts) |

```ts
const group = await client.iam.tenants.groups.unarchive('groupId', {
  tenant_id: 'tenantId',
  actor_user_id: 'x',
});
```

##### Assign tenant role to group

Assigns a tenant-wide role to a group.

| Direction | Type |
| --- | --- |
| Request | [`GroupAssignRoleParams`](./src/resources/iam/tenants/groups/groups.ts) |
| Response | [`GroupAssignRoleResponse`](./src/resources/iam/tenants/groups/groups.ts) |

```ts
const group = await client.iam.tenants.groups.assignRole('groupId', {
  tenant_id: 'tenantId',
  actor_user_id: 'x',
  role: {
    id: 'x',
  },
});
```

##### Unassign tenant role from group

Removes a tenant-wide role assignment from a group.

| Direction | Type |
| --- | --- |
| Request | [`GroupUnassignRoleParams`](./src/resources/iam/tenants/groups/groups.ts) |
| Response | [`GroupUnassignRoleResponse`](./src/resources/iam/tenants/groups/groups.ts) |

```ts
const group = await client.iam.tenants.groups.unassignRole('assignmentId', {
  tenant_id: 'tenantId',
  group_id: 'groupId',
});
```

##### List a group's tenant role assignments

Lists the tenant-wide role assignments held by one group, newest first.

| Direction | Type |
| --- | --- |
| Request | [`GroupListRoleAssignmentsParams`](./src/resources/iam/tenants/groups/groups.ts) |
| Response | [`GroupListRoleAssignmentsResponse`](./src/resources/iam/tenants/groups/groups.ts) |

```ts
const group = await client.iam.tenants.groups.listRoleAssignments('groupId', {
  tenant_id: 'tenantId',
  limit: 50,
});
```

##### Assign resource role to group

Assigns a role to a group on one exact resource.

| Direction | Type |
| --- | --- |
| Request | [`GroupAssignResourceRoleParams`](./src/resources/iam/tenants/groups/groups.ts) |
| Response | [`GroupAssignResourceRoleResponse`](./src/resources/iam/tenants/groups/groups.ts) |

```ts
const group = await client.iam.tenants.groups.assignResourceRole('groupId', {
  tenant_id: 'tenantId',
  actor_user_id: 'x',
  role: {
    id: 'x',
  },
  resource_type: {
    id: 'x',
  },
  external_id: 'x',
});
```

##### Unassign resource role from group

Removes a group resource role assignment.

| Direction | Type |
| --- | --- |
| Request | [`GroupUnassignResourceRoleParams`](./src/resources/iam/tenants/groups/groups.ts) |
| Response | [`GroupUnassignResourceRoleResponse`](./src/resources/iam/tenants/groups/groups.ts) |

```ts
const group = await client.iam.tenants.groups.unassignResourceRole('assignmentId', {
  tenant_id: 'tenantId',
  group_id: 'groupId',
});
```

##### List a group's resource role assignments

Lists the resource role assignments held by one group, newest first.

| Direction | Type |
| --- | --- |
| Request | [`GroupListResourceRoleAssignmentsParams`](./src/resources/iam/tenants/groups/groups.ts) |
| Response | [`GroupListResourceRoleAssignmentsResponse`](./src/resources/iam/tenants/groups/groups.ts) |

```ts
const group = await client.iam.tenants.groups.listResourceRoleAssignments('groupId', {
  tenant_id: 'tenantId',
  limit: 50,
});
```

##### `Iam Tenants Groups Members`

###### Add tenant group member

Adds a tenant member to a group.

| Direction | Type |
| --- | --- |
| Request | [`MemberAddParams`](./src/resources/iam/tenants/groups/members.ts) |
| Response | [`MemberAddResponse`](./src/resources/iam/tenants/groups/members.ts) |

```ts
const member = await client.iam.tenants.groups.members.add('membershipId', {
  tenant_id: 'tenantId',
  group_id: 'groupId',
  actor_user_id: 'x',
});
```

###### List a group's members

Lists the active members of one tenant group, newest first.

| Direction | Type |
| --- | --- |
| Request | [`MemberListParams`](./src/resources/iam/tenants/groups/members.ts) |
| Response | [`MemberListResponse`](./src/resources/iam/tenants/groups/members.ts) |

```ts
const member = await client.iam.tenants.groups.members.list('groupId', {
  tenant_id: 'tenantId',
  limit: 50,
});
```

###### Remove tenant group member

Removes a tenant member from a group.

| Direction | Type |
| --- | --- |
| Request | [`MemberRemoveParams`](./src/resources/iam/tenants/groups/members.ts) |
| Response | [`MemberRemoveResponse`](./src/resources/iam/tenants/groups/members.ts) |

```ts
const member = await client.iam.tenants.groups.members.remove('membershipId', {
  tenant_id: 'tenantId',
  group_id: 'groupId',
});
```

#### `Iam Tenants Roles`

##### Create role

Creates a tenant-scoped role with a permission set. Shared and app-scoped roles are managed via iam.jsonc, not this API.

| Direction | Type |
| --- | --- |
| Request | [`RoleCreateParams`](./src/resources/iam/tenants/roles.ts) |
| Response | [`RoleCreateResponse`](./src/resources/iam/tenants/roles.ts) |

```ts
const role = await client.iam.tenants.roles.create('tenantId', {
  actor_user_id: 'x',
  key: 'x',
  name: 'x',
  permission_keys: [],
});
```

##### List tenant roles

Lists the roles visible to a tenant: its tenant-scoped roles plus the deployment's shared and app-scoped roles. Pass a key to fetch one role by its stable key.

| Direction | Type |
| --- | --- |
| Request | [`RoleListParams`](./src/resources/iam/tenants/roles.ts) |
| Response | [`RoleListResponse`](./src/resources/iam/tenants/roles.ts) |

```ts
const role = await client.iam.tenants.roles.list('tenantId', {
  limit: 50,
});
```

##### Get tenant role

Returns one IAM role by ID, with its full permission set.

| Direction | Type |
| --- | --- |
| Request | [`RoleGetParams`](./src/resources/iam/tenants/roles.ts) |
| Response | [`RoleGetResponse`](./src/resources/iam/tenants/roles.ts) |

```ts
const role = await client.iam.tenants.roles.get('roleId', {
  tenant_id: 'tenantId',
});
```

##### Update role

Updates a tenant-scoped role's name, description, or permission set. Shared and app-scoped roles are managed via iam.jsonc, not this API.

| Direction | Type |
| --- | --- |
| Request | [`RoleUpdateParams`](./src/resources/iam/tenants/roles.ts) |
| Response | [`RoleUpdateResponse`](./src/resources/iam/tenants/roles.ts) |

```ts
const role = await client.iam.tenants.roles.update('roleId', {
  tenant_id: 'tenantId',
  actor_user_id: 'x',
});
```

##### Delete role

Permanently deletes a tenant-scoped role, cascading its permissions and assignments. Shared and app-scoped roles are managed via iam.jsonc, not this API.

| Direction | Type |
| --- | --- |
| Request | [`RoleDeleteParams`](./src/resources/iam/tenants/roles.ts) |
| Response | [`RoleDeleteResponse`](./src/resources/iam/tenants/roles.ts) |

```ts
const role = await client.iam.tenants.roles.delete('roleId', {
  tenant_id: 'tenantId',
});
```

#### `Iam Tenants AccessRules`

##### List tenant access rules

Lists email and domain rules that allow or deny entry to a tenant. Active rules are returned by default.

| Direction | Type |
| --- | --- |
| Request | [`AccessRuleListParams`](./src/resources/iam/tenants/access-rules.ts) |
| Response | [`AccessRuleListResponse`](./src/resources/iam/tenants/access-rules.ts) |

```ts
const accessRule = await client.iam.tenants.accessRules.list('tenantId', {
  limit: 50,
});
```

##### Create tenant access rule

Creates an allow or deny rule for an email address or domain. The rule takes effect immediately for matching users.

| Direction | Type |
| --- | --- |
| Request | [`AccessRuleCreateParams`](./src/resources/iam/tenants/access-rules.ts) |
| Response | [`AccessRuleCreateResponse`](./src/resources/iam/tenants/access-rules.ts) |

```ts
const accessRule = await client.iam.tenants.accessRules.create('tenantId', {
  actor_user_id: 'x',
  effect: 'allow',
  subject: {
    type: 'email',
    value: 'user@example.com',
  },
});
```

##### Archive tenant access rule

Archives an access rule so it no longer affects who can enter the tenant.

| Direction | Type |
| --- | --- |
| Request | [`AccessRuleArchiveParams`](./src/resources/iam/tenants/access-rules.ts) |
| Response | [`AccessRuleArchiveResponse`](./src/resources/iam/tenants/access-rules.ts) |

```ts
const accessRule = await client.iam.tenants.accessRules.archive('ruleId', {
  tenant_id: 'tenantId',
  actor_user_id: 'x',
});
```

#### `Iam Tenants AuditEvents`

##### List tenant audit events

Lists IAM audit events for a tenant, newest first.

| Direction | Type |
| --- | --- |
| Request | [`AuditEventListParams`](./src/resources/iam/tenants/audit-events.ts) |
| Response | [`AuditEventListResponse`](./src/resources/iam/tenants/audit-events.ts) |

```ts
const auditEvent = await client.iam.tenants.auditEvents.list('tenantId', {
  limit: 50,
});
```

#### `Iam Tenants Invitations`

##### List tenant invitations

Lists active, unexpired invitation links in a tenant.

| Direction | Type |
| --- | --- |
| Request | [`InvitationListParams`](./src/resources/iam/tenants/invitations.ts) |
| Response | [`InvitationListResponse`](./src/resources/iam/tenants/invitations.ts) |

```ts
const invitation = await client.iam.tenants.invitations.list('tenantId', {
  limit: 50,
});
```

##### Revoke invitation

Revokes a pending invitation. Access already granted by an accepted invitation is unaffected.

| Direction | Type |
| --- | --- |
| Request | [`InvitationRevokeParams`](./src/resources/iam/tenants/invitations.ts) |
| Response | [`InvitationRevokeResponse`](./src/resources/iam/tenants/invitations.ts) |

```ts
const invitation = await client.iam.tenants.invitations.revoke('invitationId', {
  tenant_id: 'tenantId',
});
```

## `Commerce`

Commerce APIs are currently in beta.

### Create Checkout Session

Creates a checkout session for a customer to subscribe to a product. Returns a URL to redirect the customer to for payment. After successful payment, the customer is subscribed to the product and gains access to its entitlements.

| Direction | Type |
| --- | --- |
| Request | [`CommerceCheckoutParams`](./src/resources/commerce/commerce.ts) |
| Response | [`CommerceCheckoutResponse`](./src/resources/commerce/commerce.ts) |

```ts
const commerce = await client.commerce.checkout({
  customer_id: 'cus_1234567890',
  line_items: [],
  success_url: 'https://example.com',
});
```

### Cancel Subscription

Cancels a customer's subscription. By default, the subscription remains active until the end of the current billing period. Set cancellation_timing to 'immediate' to cancel immediately.

| Direction | Type |
| --- | --- |
| Request | [`CommerceCancelParams`](./src/resources/commerce/commerce.ts) |
| Response | [`CommerceCancelResponse`](./src/resources/commerce/commerce.ts) |

```ts
const commerce = await client.commerce.cancel({
  customer_id: 'cus_1234567890',
  subscription_id: 'sub_1234567890',
  cancellation_timing: 'at_billing_period_end',
});
```

### Check Entitlement

Verifies if a customer has access to a specific feature. Use this to gate features in your app based on the customer's active subscription and the entitlements attached to their product. Hercules recommends calling this before allowing access to premium features.

| Direction | Type |
| --- | --- |
| Request | [`CommerceCheckParams`](./src/resources/commerce/commerce.ts) |
| Response | [`CommerceCheckResponse`](./src/resources/commerce/commerce.ts) |

```ts
const commerce = await client.commerce.check({
  customer_id: 'cus_1234567890',
  resource_id: 'feat_1234567890',
});
```

### `Commerce CheckoutSessions`

#### Get Checkout Session

Retrieve current payment and session status for a customer of this app. Call from your backend before fulfilling an order; do not trust the success redirect. A complete session can still be unpaid, including delayed payment methods. Test-mode payments must not fulfill live orders.

| Direction | Type |
| --- | --- |
| Request | [`CheckoutSessionGetParams`](./src/resources/commerce/checkout-sessions.ts) |
| Response | [`CheckoutSession`](./src/resources/commerce/checkout-sessions.ts) |

```ts
const checkoutSession = await client.commerce.checkoutSessions.get('checkoutSessionId', {
  customer_id: 'cus_1234567890',
});
```

### `Commerce Customers`

#### List Customers

Retrieves a paginated list of all customers. Customers are the billable entities in your app—typically users, organizations, or projects.

| Direction | Type |
| --- | --- |
| Request | [`CustomerListParams`](./src/resources/commerce/customers.ts) |
| Response | [`CustomersCursorIDPage`](./src/resources/commerce/customers.ts) |

```ts
const page = await client.commerce.customers.list();
```

#### Get Customer

Retrieves a customer by ID. Returns the customer object including contact information and billing address.

| Direction | Type |
| --- | --- |
| Response | [`CustomerGetResponse`](./src/resources/commerce/customers.ts) |

```ts
const customer = await client.commerce.customers.get('cus_1234567890');
```

#### Create Customer

Creates a new billable customer. A customer represents the entity in your app that will be charged—typically a user, organization, or project. Hercules recommends creating a customer immediately after creating the corresponding entity in your app.

| Direction | Type |
| --- | --- |
| Request | [`CustomerCreateParams`](./src/resources/commerce/customers.ts) |
| Response | [`Customer`](./src/resources/commerce/customers.ts) |

```ts
const customer = await client.commerce.customers.create({});
```

#### Update Customer

Updates an existing customer. Use this to modify contact information or billing address. Only provided fields are updated; omitted fields remain unchanged.

| Direction | Type |
| --- | --- |
| Request | [`CustomerUpdateParams`](./src/resources/commerce/customers.ts) |
| Response | [`Customer`](./src/resources/commerce/customers.ts) |

```ts
const customer = await client.commerce.customers.update('cus_1234567890', {});
```

#### Create Billing Portal Session

Generates a URL to a hosted billing portal where the customer can view invoices, update payment methods, and manage billing details. Redirect the customer to the returned URL.

| Direction | Type |
| --- | --- |
| Request | [`CustomerBillingPortalParams`](./src/resources/commerce/customers.ts) |
| Response | [`CustomerBillingPortalResponse`](./src/resources/commerce/customers.ts) |

```ts
const customer = await client.commerce.customers.billingPortal('cus_1234567890', {});
```

### `Commerce Products`

#### List Products

Retrieves a paginated list of subscription products. Products define the pricing and billing intervals for subscriptions. Each product can have resources attached that grant access to features or content.

| Direction | Type |
| --- | --- |
| Request | [`ProductListParams`](./src/resources/commerce/products/products.ts) |
| Response | [`ProductsCursorIDPage`](./src/resources/commerce/products/products.ts) |

```ts
const page = await client.commerce.products.list();
```

#### Get Product

Retrieves a product by ID. Returns the product object including pricing details and status.

| Direction | Type |
| --- | --- |
| Request | [`ProductGetParams`](./src/resources/commerce/products/products.ts) |
| Response | [`Product`](./src/resources/commerce/products/products.ts) |

```ts
const product = await client.commerce.products.get('productId');
```

#### Create Product

Creates a new subscription product with a recurring price. Common examples include Free, Pro, Business, or Teams tiers. After creating a product, attach resources to define which features or content customers on this product can access.

| Direction | Type |
| --- | --- |
| Request | [`ProductCreateParams`](./src/resources/commerce/products/products.ts) |
| Response | [`ProductCreateResponse`](./src/resources/commerce/products/products.ts) |

```ts
const product = await client.commerce.products.create({
  name: 'x',
  variants: [],
});
```

#### Update Product

Updates an existing product. Use this to modify the product name, description, or active status. Pricing cannot be changed after creation—create a new product instead.

| Direction | Type |
| --- | --- |
| Request | [`ProductUpdateParams`](./src/resources/commerce/products/products.ts) |
| Response | [`Product`](./src/resources/commerce/products/products.ts) |

```ts
const product = await client.commerce.products.update('productId', {});
```

#### `Commerce Products Resources`

##### List Product Resources

Retrieves all resources attached to a product. Resources define the entitlements customers gain access to when purchasing this product.

| Direction | Type |
| --- | --- |
| Request | [`ResourceListParams`](./src/resources/commerce/products/resources.ts) |
| Response | [`ResourceListResponse`](./src/resources/commerce/products/resources.ts) |

```ts
const page = await client.commerce.products.resources.list('productId');
```

##### Attach Resources to Product

Attaches one or more resources to a product. Customers who purchase this product will gain access to the attached resources. Resource type is inferred from the ID prefix (e.g., 'feat_' for features).

| Direction | Type |
| --- | --- |
| Request | [`ResourceAttachParams`](./src/resources/commerce/products/resources.ts) |
| Response | [`ResourceAttachResponse`](./src/resources/commerce/products/resources.ts) |

```ts
const resource = await client.commerce.products.resources.attach('productId', {
  resource_ids: [],
});
```

##### Detach Resources from Product

Detaches one or more resources from a product. Customers will lose access to these resources when they purchase this product.

| Direction | Type |
| --- | --- |
| Request | [`ResourceDetachParams`](./src/resources/commerce/products/resources.ts) |

```ts
await client.commerce.products.resources.detach('productId', {
  resource_ids: [],
});
```

#### `Commerce Products Variants`

##### List Product Variants

Retrieves all variants for a product. Variants represent different pricing tiers or configurations (e.g., Basic, Pro, Enterprise) within a single product.

| Direction | Type |
| --- | --- |
| Request | [`VariantListParams`](./src/resources/commerce/products/variants.ts) |
| Response | [`VariantsCursorIDPage`](./src/resources/commerce/products/variants.ts) |

```ts
const page = await client.commerce.products.variants.list('productId');
```

##### Get Product Variant

Retrieves a variant by ID. Returns the variant object including pricing details and status.

| Direction | Type |
| --- | --- |
| Request | [`VariantGetParams`](./src/resources/commerce/products/variants.ts) |
| Response | [`Variant`](./src/resources/commerce/products/variants.ts) |

```ts
const variant = await client.commerce.products.variants.get('variantId', {
  product_id: 'productId',
});
```

##### Create Product Variant

Creates a new variant with pricing for a product. Use variants to offer multiple pricing tiers or configurations (e.g., Basic at $10/month, Pro at $25/month). A Stripe Price is automatically created.

| Direction | Type |
| --- | --- |
| Request | [`VariantCreateParams`](./src/resources/commerce/products/variants.ts) |
| Response | [`Variant`](./src/resources/commerce/products/variants.ts) |

```ts
const variant = await client.commerce.products.variants.create('productId', {
  name: 'x',
  unit_amount: 0,
});
```

##### Update Product Variant

Updates an existing variant. Use this to modify the name, description, or active status. Pricing cannot be changed after creation—create a new variant instead.

| Direction | Type |
| --- | --- |
| Request | [`VariantUpdateParams`](./src/resources/commerce/products/variants.ts) |
| Response | [`Variant`](./src/resources/commerce/products/variants.ts) |

```ts
const variant = await client.commerce.products.variants.update('variantId', {
  product_id: 'productId',
});
```

### `Commerce Coupons`

#### List Coupons

Retrieves a paginated list of all coupons. Coupons provide discounts that customers can apply during checkout using a promo code.

| Direction | Type |
| --- | --- |
| Request | [`CouponListParams`](./src/resources/commerce/coupons.ts) |
| Response | [`CouponsCursorIDPage`](./src/resources/commerce/coupons.ts) |

```ts
const page = await client.commerce.coupons.list();
```

#### Get Coupon

Retrieves a coupon by ID. Returns the coupon object including discount details and redemption statistics.

| Direction | Type |
| --- | --- |
| Response | [`Coupon`](./src/resources/commerce/coupons.ts) |

```ts
const coupon = await client.commerce.coupons.get('coupon_1234567890');
```

#### Create Coupon

Creates a discount coupon with a promo code. Coupons can offer percentage or fixed-amount discounts and can be limited by redemption count or expiration date. Customers can apply coupons during checkout.

| Direction | Type |
| --- | --- |
| Request | [`CouponCreateParams`](./src/resources/commerce/coupons.ts) |
| Response | [`Coupon`](./src/resources/commerce/coupons.ts) |

```ts
const coupon = await client.commerce.coupons.create({
  code: 'LAUNCH20',
  duration: 'once',
});
```

#### Update Coupon

Updates an existing coupon. Use this to modify the display name or deactivate the coupon. Discount amounts and codes cannot be changed after creation.

| Direction | Type |
| --- | --- |
| Request | [`CouponUpdateParams`](./src/resources/commerce/coupons.ts) |
| Response | [`Coupon`](./src/resources/commerce/coupons.ts) |

```ts
const coupon = await client.commerce.coupons.update('coupon_1234567890', {});
```

### `Commerce Features`

#### List Features

Retrieves a paginated list of features. Features are reusable entitlements that can be attached to multiple products.

| Direction | Type |
| --- | --- |
| Request | [`FeatureListParams`](./src/resources/commerce/features.ts) |
| Response | [`FeaturesCursorIDPage`](./src/resources/commerce/features.ts) |

```ts
const page = await client.commerce.features.list();
```

#### Get Feature

Retrieves a feature by ID.

| Direction | Type |
| --- | --- |
| Response | [`Feature`](./src/resources/commerce/features.ts) |

```ts
const feature = await client.commerce.features.get('featureId');
```

#### Create Feature

Creates a new feature with a lookup key. Features can be attached to multiple products to grant customers access to the same entitlement across different subscription tiers.

| Direction | Type |
| --- | --- |
| Request | [`FeatureCreateParams`](./src/resources/commerce/features.ts) |
| Response | [`Feature`](./src/resources/commerce/features.ts) |

```ts
const feature = await client.commerce.features.create({
  name: 'x',
  metadata: {},
});
```

#### Update Feature

Updates an existing feature. Use this to modify metadata or active status.

| Direction | Type |
| --- | --- |
| Request | [`FeatureUpdateParams`](./src/resources/commerce/features.ts) |
| Response | [`Feature`](./src/resources/commerce/features.ts) |

```ts
const feature = await client.commerce.features.update('featureId', {});
```

### `Commerce Entitlements`

#### List Entitlement Grants

Retrieves a paginated list of entitlement grants. Grants represent customer access to features from one-time purchases or manual grants.

| Direction | Type |
| --- | --- |
| Request | [`EntitlementListParams`](./src/resources/commerce/entitlements.ts) |
| Response | [`EntitlementGrantsCursorIDPage`](./src/resources/commerce/entitlements.ts) |

```ts
const page = await client.commerce.entitlements.list();
```

#### Get Entitlement Grant

Retrieves an entitlement grant by ID.

| Direction | Type |
| --- | --- |
| Request | [`EntitlementGetParams`](./src/resources/commerce/entitlements.ts) |
| Response | [`EntitlementGrant`](./src/resources/commerce/entitlements.ts) |

```ts
const entitlementGrant = await client.commerce.entitlements.get('grantId');
```

#### Create Entitlement Grant

Manually creates an entitlement grant for a customer. Use this to grant access to features outside of the normal purchase flow, such as promotional access or support compensations.

| Direction | Type |
| --- | --- |
| Request | [`EntitlementCreateParams`](./src/resources/commerce/entitlements.ts) |
| Response | [`EntitlementGrant`](./src/resources/commerce/entitlements.ts) |

```ts
const entitlementGrant = await client.commerce.entitlements.create({
  customer_id: 'x',
  feature_id: 'x',
});
```

#### Update Entitlement Grant

Updates an entitlement grant. Use status: 'revoked' to void a grant and remove customer access.

| Direction | Type |
| --- | --- |
| Request | [`EntitlementUpdateParams`](./src/resources/commerce/entitlements.ts) |
| Response | [`EntitlementGrant`](./src/resources/commerce/entitlements.ts) |

```ts
const entitlementGrant = await client.commerce.entitlements.update('grantId', {});
```

## `Connectors`

Use the app connectors installed on the calling deployment. Requires a
deployment-bound API key. When several connections of one connector cover
the deployment, pass connection_id to select one.

Pull credentials with `credentials` and call the provider yourself. For
connectors whose provider is reached through a broker that never
discloses the token, `credentials` answers 409 and `request` sends the
call instead, signed server-side.

### Get Connector Credentials

Returns fresh credentials for an SDK-delivery connector installed for the calling deployment, refreshing the OAuth access token on demand. Requires a deployment-bound API key; the connector must be installed for that deployment's environment. When several connections of the connector cover the deployment, connection_id selects one. Connectors whose provider withholds the credential answer 409 — send requests through the connector request endpoint instead.

| Direction | Type |
| --- | --- |
| Request | [`ConnectorCredentialsParams`](./src/resources/connectors.ts) |
| Response | [`ConnectorCredentialsResponse`](./src/resources/connectors.ts) |

```ts
const connector = await client.connectors.credentials('slug');
```

### Send Connector Request

Sends an HTTP request to a connector's provider API as one of the app's connected accounts, with credentials injected server-side — the app never handles the token. Requires a deployment-bound API key; the connector must be installed for that deployment's environment. Answers 200 whenever the request reached the provider, with the provider's own status in the body.

| Direction | Type |
| --- | --- |
| Request | [`ConnectorRequestParams`](./src/resources/connectors.ts) |
| Response | [`ConnectorRequestResponse`](./src/resources/connectors.ts) |

```ts
const connector = await client.connectors.request('slug', {
  endpoint: 'x',
  method: 'GET',
});
```

## `Content`

(Beta) Manage content collections, fields, entries, assets, locales, and releases.

### `Content Collections`

#### List Content Collections

Retrieves a paginated list of content collections. Content collections define the schema/structure for content entries.

| Direction | Type |
| --- | --- |
| Request | [`CollectionListParams`](./src/resources/content/collections/collections.ts) |
| Response | [`CollectionsCursorIDPage`](./src/resources/content/collections/collections.ts) |

```ts
const page = await client.content.collections.list();
```

#### Get Content Collection

Retrieves a content collection by ID. Returns the collection object including all field definitions.

| Direction | Type |
| --- | --- |
| Response | [`Collection`](./src/resources/content/collections/collections.ts) |

```ts
const collection = await client.content.collections.get('collectionId');
```

#### Create Content Collection

Creates a new content collection with optional initial fields. Content collections define the schema for entries. Example collections: 'Blog Post', 'Product', 'Author'.

| Direction | Type |
| --- | --- |
| Request | [`CollectionCreateParams`](./src/resources/content/collections/collections.ts) |
| Response | [`Collection`](./src/resources/content/collections/collections.ts) |

```ts
const collection = await client.content.collections.create({
  api_id: 'x',
  name: '',
  fields: [],
});
```

#### Update Content Collection

Updates an existing content collection. Use this to modify the name, description, or lock status. The api_id cannot be changed after creation.

| Direction | Type |
| --- | --- |
| Request | [`CollectionUpdateParams`](./src/resources/content/collections/collections.ts) |
| Response | [`Collection`](./src/resources/content/collections/collections.ts) |

```ts
const collection = await client.content.collections.update('collectionId', {});
```

#### Archive Content Collection

Archives a content collection, hiding it from the API. Existing entries are preserved. Use this instead of deletion to maintain data integrity.

| Direction | Type |
| --- | --- |
| Response | [`Collection`](./src/resources/content/collections/collections.ts) |

```ts
const collection = await client.content.collections.archive('collectionId');
```

#### `Content Collections Fields`

##### Add Field to Collection

Adds a new field to a content collection. Fields define the structure of entries. The collection must not be locked. Adding a field increments the collection version.

| Direction | Type |
| --- | --- |
| Request | [`FieldCreateParams`](./src/resources/content/collections/fields.ts) |

```ts
const field = await client.content.collections.fields.create('collectionId', {
  api_id: 'x',
  name: '',
  type: 'text',
  localized: false,
});
```

##### Update Field

Updates an existing field in a content collection. The field type cannot be changed after creation. The collection must not be locked.

| Direction | Type |
| --- | --- |
| Request | [`FieldUpdateParams`](./src/resources/content/collections/fields.ts) |

```ts
const field = await client.content.collections.fields.update('fieldId', {
  collection_id: 'collectionId',
});
```

##### Remove Field from Collection

Removes a field from a content collection. Existing entry data for this field is preserved but will no longer be validated. The collection must not be locked.

| Direction | Type |
| --- | --- |
| Request | [`FieldDeleteParams`](./src/resources/content/collections/fields.ts) |

```ts
await client.content.collections.fields.delete('fieldId', {
  collection_id: 'collectionId',
});
```

### `Content Entries`

#### List Content Entries

Retrieves a paginated list of content entries. Supports filtering by collection, status, locale, and custom field queries. Use the 'where' parameter for field-based filtering with operators like $eq, $contains, $gt, etc.

| Direction | Type |
| --- | --- |
| Request | [`EntryListParams`](./src/resources/content/entries.ts) |
| Response | [`EntriesCursorIDPage`](./src/resources/content/entries.ts) |

```ts
const page = await client.content.entries.list({
  include_depth: 0,
});
```

#### Get Content Entry

Retrieves a content entry by ID. Optionally specify a locale to get localized field values with fallback resolution.

| Direction | Type |
| --- | --- |
| Response | [`Entry`](./src/resources/content/entries.ts) |

```ts
const entry = await client.content.entries.get('entryId');
```

#### Create Content Entry

Creates a new content entry for a given collection. Entries start as drafts by default. Use the publish endpoint to make entries publicly accessible.

| Direction | Type |
| --- | --- |
| Request | [`EntryCreateParams`](./src/resources/content/entries.ts) |
| Response | [`Entry`](./src/resources/content/entries.ts) |

```ts
const entry = await client.content.entries.create({
  collection: 'x',
  fields: {},
  status: 'draft',
});
```

#### Update Content Entry

Updates an existing content entry. Supports partial updates - only specified fields are modified. Use the version parameter for optimistic locking to prevent concurrent update conflicts.

| Direction | Type |
| --- | --- |
| Request | [`EntryUpdateParams`](./src/resources/content/entries.ts) |
| Response | [`Entry`](./src/resources/content/entries.ts) |

```ts
const entry = await client.content.entries.update('entryId', {});
```

#### Archive Content Entry

Archives a content entry, hiding it from the API and public access. The entry data is preserved and can be restored later.

| Direction | Type |
| --- | --- |
| Response | [`Entry`](./src/resources/content/entries.ts) |

```ts
const entry = await client.content.entries.archive('entryId');
```

#### Publish Content Entry

Publishes a content entry, making it publicly accessible. Optionally schedule publishing for a future time. Publishing validates that all required fields have values.

| Direction | Type |
| --- | --- |
| Request | [`EntryPublishParams`](./src/resources/content/entries.ts) |
| Response | [`Entry`](./src/resources/content/entries.ts) |

```ts
const entry = await client.content.entries.publish('entryId', {});
```

#### Unpublish Content Entry

Unpublishes a content entry, reverting it to draft status. The entry will no longer be publicly accessible but all data is preserved.

| Direction | Type |
| --- | --- |
| Response | [`Entry`](./src/resources/content/entries.ts) |

```ts
const entry = await client.content.entries.unpublish('entryId');
```

### `Content Assets`

#### List Content Assets

Retrieves a paginated list of content assets (images, videos, documents, etc.). Supports filtering by status, MIME type, folder, and search.

| Direction | Type |
| --- | --- |
| Request | [`AssetListParams`](./src/resources/content/assets.ts) |
| Response | [`AssetsCursorIDPage`](./src/resources/content/assets.ts) |

```ts
const page = await client.content.assets.list();
```

#### Get Content Asset

Retrieves a content asset by ID with its metadata.

| Direction | Type |
| --- | --- |
| Response | [`Asset`](./src/resources/content/assets.ts) |

```ts
const asset = await client.content.assets.get('assetId');
```

#### Create Content Asset

Creates a new content asset with metadata. For now, this creates asset metadata only - provide a URL for an externally hosted file. Full upload support coming soon.

| Direction | Type |
| --- | --- |
| Request | [`AssetCreateParams`](./src/resources/content/assets.ts) |
| Response | [`Asset`](./src/resources/content/assets.ts) |

```ts
const asset = await client.content.assets.create({
  filename: '',
  mime_type: '',
  size: 0,
  metadata: {},
  folder: '/',
});
```

#### Update Content Asset

Updates asset metadata including URL, folder, title, description, and custom metadata.

| Direction | Type |
| --- | --- |
| Request | [`AssetUpdateParams`](./src/resources/content/assets.ts) |
| Response | [`Asset`](./src/resources/content/assets.ts) |

```ts
const asset = await client.content.assets.update('assetId', {});
```

#### Delete Content Asset

Permanently deletes a content asset. This action cannot be undone. Entries referencing this asset will have broken references.

```ts
await client.content.assets.delete('assetId');
```

#### Publish Content Asset

Publishes a content asset, making it publicly accessible via its URL.

| Direction | Type |
| --- | --- |
| Response | [`Asset`](./src/resources/content/assets.ts) |

```ts
const asset = await client.content.assets.publish('assetId');
```

### `Content Locales`

#### List Content Locales

Retrieves a list of configured locales. Locales define the languages available for content localization.

| Direction | Type |
| --- | --- |
| Request | [`LocaleListParams`](./src/resources/content/locales.ts) |
| Response | [`LocalesCursorIDPage`](./src/resources/content/locales.ts) |

```ts
const page = await client.content.locales.list();
```

#### Get Content Locale

Retrieves a locale by its code.

| Direction | Type |
| --- | --- |
| Response | [`Locale`](./src/resources/content/locales.ts) |

```ts
const locale = await client.content.locales.get('localeCode');
```

#### Create Content Locale

Creates a new locale for content localization. Configure fallback chains by setting the fallback_locale to another locale code.

| Direction | Type |
| --- | --- |
| Request | [`LocaleCreateParams`](./src/resources/content/locales.ts) |
| Response | [`Locale`](./src/resources/content/locales.ts) |

```ts
const locale = await client.content.locales.create({
  code: 'xx',
  name: '',
  is_default: false,
});
```

#### Update Content Locale

Updates a locale's configuration including name, fallback, default status, and active status.

| Direction | Type |
| --- | --- |
| Request | [`LocaleUpdateParams`](./src/resources/content/locales.ts) |
| Response | [`Locale`](./src/resources/content/locales.ts) |

```ts
const locale = await client.content.locales.update('localeCode', {});
```

#### Delete Content Locale

Deletes a locale. The default locale cannot be deleted - set another locale as default first. Existing localized content is preserved.

```ts
await client.content.locales.delete('localeCode');
```

### `Content Releases`

#### List Content Releases

Retrieves a paginated list of releases. Releases group entries and assets for atomic publishing.

| Direction | Type |
| --- | --- |
| Request | [`ReleaseListParams`](./src/resources/content/releases/releases.ts) |
| Response | [`ReleasesCursorIDPage`](./src/resources/content/releases/releases.ts) |

```ts
const page = await client.content.releases.list();
```

#### Get Content Release

Retrieves a release by ID with all its items.

| Direction | Type |
| --- | --- |
| Response | [`Release`](./src/resources/content/releases/releases.ts) |

```ts
const release = await client.content.releases.get('releaseId');
```

#### Create Content Release

Creates a new release. Add items using the add items endpoint, then publish or schedule the release.

| Direction | Type |
| --- | --- |
| Request | [`ReleaseCreateParams`](./src/resources/content/releases/releases.ts) |
| Response | [`Release`](./src/resources/content/releases/releases.ts) |

```ts
const release = await client.content.releases.create({
  name: '',
});
```

#### Update Content Release

Updates a release name and description. Only draft releases can be updated.

| Direction | Type |
| --- | --- |
| Request | [`ReleaseUpdateParams`](./src/resources/content/releases/releases.ts) |
| Response | [`Release`](./src/resources/content/releases/releases.ts) |

```ts
const release = await client.content.releases.update('releaseId', {});
```

#### Delete Content Release

Deletes a draft release. Published releases cannot be deleted.

```ts
await client.content.releases.delete('releaseId');
```

#### Publish Release

Publishes all items in the release immediately. Each item's action (publish or unpublish) is executed atomically.

| Direction | Type |
| --- | --- |
| Response | [`Release`](./src/resources/content/releases/releases.ts) |

```ts
const release = await client.content.releases.publish('releaseId');
```

#### Schedule Release

Schedules a release for future publication. The release will be automatically published at the specified time.

| Direction | Type |
| --- | --- |
| Request | [`ReleaseScheduleParams`](./src/resources/content/releases/releases.ts) |
| Response | [`Release`](./src/resources/content/releases/releases.ts) |

```ts
const release = await client.content.releases.schedule('releaseId', {
  scheduled_at: '2024-01-01T00:00:00.000Z',
});
```

#### `Content Releases Items`

##### Add Item to Release

Adds an entry or asset to a release with a specified action (publish or unpublish). Only draft releases can have items added.

| Direction | Type |
| --- | --- |
| Request | [`ItemAddParams`](./src/resources/content/releases/items.ts) |

```ts
const releaseItem = await client.content.releases.items.add('releaseId', {
  type: 'entry',
  item_id: '',
  action: 'publish',
});
```

##### Remove Item from Release

Removes an item from a release. Only draft releases can have items removed.

| Direction | Type |
| --- | --- |
| Request | [`ItemRemoveParams`](./src/resources/content/releases/items.ts) |

```ts
await client.content.releases.items.remove('itemId', {
  release_id: 'releaseId',
});
```

## `Domains`

Manage custom domains linked to a website, check domain availability,
purchase and register new domains, and list previously purchased domains.

### List Domains

Retrieves a paginated list of custom domains linked to the website, including Cloudflare verification and SSL status.

| Direction | Type |
| --- | --- |
| Request | [`DomainListParams`](./src/resources/domains/domains.ts) |
| Response | [`DomainsCursorIDPage`](./src/resources/domains/domains.ts) |

```ts
const page = await client.domains.list();
```

### Check Domain Availability

Checks whether the specified domain names are available for registration and returns pricing information.

| Direction | Type |
| --- | --- |
| Request | [`DomainCheckAvailabilityParams`](./src/resources/domains/domains.ts) |
| Response | [`DomainCheckAvailabilityResponse`](./src/resources/domains/domains.ts) |

```ts
const domain = await client.domains.checkAvailability({
  domains: [],
});
```

### Search Domains

Searches for available domain names based on a keyword and returns suggestions with pricing.

| Direction | Type |
| --- | --- |
| Request | [`DomainSearchParams`](./src/resources/domains/domains.ts) |
| Response | [`DomainSearchResponse`](./src/resources/domains/domains.ts) |

```ts
const domain = await client.domains.search({
  keyword: 'x',
});
```

### `Domains Purchased`

#### Purchase Domain

Initiates a domain purchase. Verifies availability, creates a payment invoice, and begins the registration process. If the payment requires 3D Secure authentication, the response includes a client_secret for confirmation.

| Direction | Type |
| --- | --- |
| Request | [`PurchasedCreateParams`](./src/resources/domains/purchased.ts) |
| Response | [`PurchasedCreateResponse`](./src/resources/domains/purchased.ts) |

```ts
const purchased = await client.domains.purchased.create({
  domain_name: 'x',
  years: 1,
  autorenew: true,
});
```

#### Confirm Domain Purchase

Confirms a domain purchase after 3D Secure authentication has been completed. Call this endpoint after the customer has authenticated with their bank.

| Direction | Type |
| --- | --- |
| Request | [`PurchasedConfirmParams`](./src/resources/domains/purchased.ts) |
| Response | [`PurchasedConfirmResponse`](./src/resources/domains/purchased.ts) |

```ts
const purchased = await client.domains.purchased.confirm({
  invoice_id: 'x',
  domain_name: 'x',
  website_id: 'x',
  years: 1,
  autorenew: true,
});
```

#### List Purchased Domains

Retrieves a paginated list of domains purchased by the organization.

| Direction | Type |
| --- | --- |
| Request | [`PurchasedListParams`](./src/resources/domains/purchased.ts) |
| Response | [`PurchasedDomainsCursorIDPage`](./src/resources/domains/purchased.ts) |

```ts
const page = await client.domains.purchased.list();
```

#### Get Purchased Domain

Retrieves details of a specific purchased domain by its ID.

| Direction | Type |
| --- | --- |
| Response | [`PurchasedDomain`](./src/resources/domains/purchased.ts) |

```ts
const purchasedDomain = await client.domains.purchased.get('domainId');
```

## `Email`

Send transactional emails, send batch emails, and retrieve sent email
history with delivery status tracking.

### Send Email

Sends a single email. The sender address must be a verified identity for this website. Optionally pass reply_to_email_id to thread a reply to a received email in this app and organization. Sender, recipients, subject, body, and attachments remain explicit; nothing is copied from the source. In-Reply-To and References are generated and cannot be supplied as custom headers (case-insensitive). References retains at most 20 valid, unique IDs and 870 characters, including the source Message-ID; malformed ancestors are omitted and oldest ancestry is trimmed. Without References, a single valid stored In-Reply-To is used as ancestry.

| Direction | Type |
| --- | --- |
| Request | [`EmailSendParams`](./src/resources/email/email.ts) |
| Response | [`EmailSendResponse`](./src/resources/email/email.ts) |

```ts
const email = await client.email.send({
  from: 'x',
  to: 'user@example.com',
  subject: 'x',
});
```

### List Emails

Retrieves a paginated list of sent emails. Returns email metadata including delivery status.

| Direction | Type |
| --- | --- |
| Request | [`EmailListParams`](./src/resources/email/email.ts) |
| Response | [`EmailsCursorIDPage`](./src/resources/email/email.ts) |

```ts
const page = await client.email.list();
```

### Get Email

Retrieves a single email by its unique identifier.

| Direction | Type |
| --- | --- |
| Response | [`EmailGetResponse`](./src/resources/email/email.ts) |

```ts
const email = await client.email.get('emailId');
```

### `Email Identities`

#### Create Identity

Creates a new sender identity for email verification. For email identities, a verification email is sent. For domain identities, DNS records are returned that must be configured to verify ownership.

| Direction | Type |
| --- | --- |
| Request | [`IdentityCreateParams`](./src/resources/email/identities.ts) |
| Response | [`Identity`](./src/resources/email/identities.ts) |

```ts
const identity = await client.email.identities.create({
  type: 'email',
  value: 'user@example.com',
});
```

#### List Identities

Retrieves a paginated list of sender identities (email addresses and domains) configured for this website.

| Direction | Type |
| --- | --- |
| Request | [`IdentityListParams`](./src/resources/email/identities.ts) |
| Response | [`IdentitiesCursorIDPage`](./src/resources/email/identities.ts) |

```ts
const page = await client.email.identities.list();
```

#### Get Identity

Retrieves a sender identity by ID. Returns the identity with its current verification status and any required DNS records.

| Direction | Type |
| --- | --- |
| Response | [`Identity`](./src/resources/email/identities.ts) |

```ts
const identity = await client.email.identities.get('identityId');
```

#### Verify Identity

Triggers a manual recheck of the identity's verification status against AWS SES. Returns the identity with its updated status.

| Direction | Type |
| --- | --- |
| Request | [`IdentityVerifyParams`](./src/resources/email/identities.ts) |
| Response | [`Identity`](./src/resources/email/identities.ts) |

```ts
const identity = await client.email.identities.verify('identityId', {
  resend: false,
});
```

#### Delete Identity

Permanently deletes a sender identity. Emails can no longer be sent from this address or domain after deletion.

```ts
await client.email.identities.delete('identityId');
```

### `Email Suppressions`

#### Create Suppression

Adds a recipient address to the suppression list. SES drops later sends to it at send time, protecting your sending reputation. Adding an address that is already suppressed succeeds. The suppression list belongs to the organization and applies to every app and sender identity it owns.

| Direction | Type |
| --- | --- |
| Request | [`SuppressionCreateParams`](./src/resources/email/suppressions.ts) |
| Response | [`Suppression`](./src/resources/email/suppressions.ts) |

```ts
const suppression = await client.email.suppressions.create({
  email: 'user@example.com',
});
```

#### List Suppressions

Retrieves a paginated list of suppressed recipient addresses, newest first. Filter by `origin` to separate addresses you added yourself from those a bounce or a spam complaint added automatically. The suppression list belongs to the organization and applies to every app and sender identity it owns.

| Direction | Type |
| --- | --- |
| Request | [`SuppressionListParams`](./src/resources/email/suppressions.ts) |
| Response | [`SuppressionListResponse`](./src/resources/email/suppressions.ts) |

```ts
const suppression = await client.email.suppressions.list({
  limit: 100,
});
```

#### Get Suppression

Retrieves a single suppression by its ID or by the suppressed email address. The suppression list belongs to the organization and applies to every app and sender identity it owns.

| Direction | Type |
| --- | --- |
| Response | [`Suppression`](./src/resources/email/suppressions.ts) |

```ts
const suppression = await client.email.suppressions.get('suppression');
```

#### Remove Suppression

Removes an address from the suppression list, identified by its suppression ID or by the address itself, so sends to it are allowed again. Removing an address does not guarantee delivery — if it bounces or is reported as spam again, it is suppressed again. The suppression list belongs to the organization and applies to every app and sender identity it owns.

| Direction | Type |
| --- | --- |
| Response | [`SuppressionDeleteResponse`](./src/resources/email/suppressions.ts) |

```ts
const suppression = await client.email.suppressions.delete('suppression');
```

#### Add Batch Suppressions

Adds up to 100 recipient addresses to the suppression list in one call. Addresses that are already suppressed are returned unchanged rather than rejected, so an import can be retried safely. The suppression list belongs to the organization and applies to every app and sender identity it owns.

| Direction | Type |
| --- | --- |
| Request | [`SuppressionBatchAddParams`](./src/resources/email/suppressions.ts) |
| Response | [`SuppressionBatchAddResponse`](./src/resources/email/suppressions.ts) |

```ts
const suppression = await client.email.suppressions.batchAdd({
  emails: [],
});
```

#### Remove Batch Suppressions

Removes up to 100 addresses from the suppression list in one call, identified by either `emails` or `ids` (exactly one of the two). Addresses that were not on the list are omitted from the response instead of failing the request. Removing an address does not guarantee delivery — if it bounces or is reported as spam again, it is suppressed again. The suppression list belongs to the organization and applies to every app and sender identity it owns.

| Direction | Type |
| --- | --- |
| Request | [`SuppressionBatchRemoveParams`](./src/resources/email/suppressions.ts) |
| Response | [`SuppressionBatchRemoveResponse`](./src/resources/email/suppressions.ts) |

```ts
const suppression = await client.email.suppressions.batchRemove({});
```

## `Files`

Upload, retrieve, and list files and media associated with a website.
Upload is a two-step process: first call create to get an upload URL,
then PUT the file content to that URL. The PUT response returns the
completed MediaFile object. No separate complete call is needed.

### List Files

Retrieves a paginated list of files uploaded to the website. Supports filtering by MIME type, folder path, creation date, and filename search.

| Direction | Type |
| --- | --- |
| Request | [`FileListParams`](./src/resources/files.ts) |
| Response | [`FilesCursorIDPage`](./src/resources/files.ts) |

```ts
const page = await client.files.list();
```

### Get File

Retrieves a file by its ID, including its CDN URL and metadata.

| Direction | Type |
| --- | --- |
| Response | [`File`](./src/resources/files.ts) |

```ts
const file = await client.files.get('fileId');
```

## `PushNotifications`

### Enable Notifications

Enables push notifications for the app by generating VAPID keys. Idempotent - returns existing keys if already enabled. Hercules recommends calling this during app initialization.

| Direction | Type |
| --- | --- |
| Response | [`PushNotificationEnableResponse`](./src/resources/push-notifications/push-notifications.ts) |

```ts
const pushNotification = await client.pushNotifications.enable();
```

### Register Subscription

Registers a push subscription with the provided visitorId. Use authenticated userId or generate a UUID for anonymous users. Upserts by endpoint to handle re-subscriptions. Returns a secret for subscription ownership.

| Direction | Type |
| --- | --- |
| Request | [`PushNotificationSubscribeParams`](./src/resources/push-notifications/push-notifications.ts) |
| Response | [`PushNotificationSubscribeResponse`](./src/resources/push-notifications/push-notifications.ts) |

```ts
const pushNotification = await client.pushNotifications.subscribe({
  visitorId: 'x',
  subscription: {
    endpoint: 'https://example.com',
    keys: {
      p256dh: 'x',
      auth: 'x',
    },
  },
});
```

### Remove Subscription

Removes a push subscription by secret.

| Direction | Type |
| --- | --- |
| Request | [`PushNotificationUnsubscribeParams`](./src/resources/push-notifications/push-notifications.ts) |
| Response | [`PushNotificationUnsubscribeResponse`](./src/resources/push-notifications/push-notifications.ts) |

```ts
const pushNotification = await client.pushNotifications.unsubscribe({
  secret: 'x',
});
```

### Identify Subscription

Updates a subscription's visitorId to the provided userId. Call after sign-in to link the subscription to the authenticated user's account.

| Direction | Type |
| --- | --- |
| Request | [`PushNotificationIdentifyParams`](./src/resources/push-notifications/push-notifications.ts) |
| Response | [`PushNotificationIdentifyResponse`](./src/resources/push-notifications/push-notifications.ts) |

```ts
const pushNotification = await client.pushNotifications.identify({
  secret: 'x',
  userId: 'x',
});
```

### Send Notification

Sends push notifications to specified visitors and/or topics. Specify visitorIds, topics, or both (combined as union). Omit both to broadcast to all subscribers.

| Direction | Type |
| --- | --- |
| Request | [`PushNotificationSendParams`](./src/resources/push-notifications/push-notifications.ts) |
| Response | [`PushNotificationSendResponse`](./src/resources/push-notifications/push-notifications.ts) |

```ts
const pushNotification = await client.pushNotifications.send({
  title: 'x',
});
```

### `PushNotifications Topics`

#### Subscribe to Topics

Subscribes a visitor to topics. Topics are per-visitor, so all devices for this visitor will receive notifications sent to these topics.

| Direction | Type |
| --- | --- |
| Request | [`TopicSubscribeParams`](./src/resources/push-notifications/topics.ts) |
| Response | [`TopicSubscribeResponse`](./src/resources/push-notifications/topics.ts) |

```ts
const topic = await client.pushNotifications.topics.subscribe({
  visitorId: 'x',
  topics: [],
});
```

#### Unsubscribe from Topics

Unsubscribes a visitor from specified topics.

| Direction | Type |
| --- | --- |
| Request | [`TopicUnsubscribeParams`](./src/resources/push-notifications/topics.ts) |
| Response | [`TopicUnsubscribeResponse`](./src/resources/push-notifications/topics.ts) |

```ts
const topic = await client.pushNotifications.topics.unsubscribe({
  visitorId: 'x',
  topics: [],
});
```

#### List Topics

Lists topics a visitor is subscribed to.

| Direction | Type |
| --- | --- |
| Request | [`TopicListParams`](./src/resources/push-notifications/topics.ts) |
| Response | [`TopicListResponse`](./src/resources/push-notifications/topics.ts) |

```ts
const page = await client.pushNotifications.topics.list({
  visitorId: 'visitorId',
});
```
