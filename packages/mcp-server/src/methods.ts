// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.iam.entry',
    fullyQualifiedName: 'iam.entry',
    httpMethod: 'post',
    httpPath: '/v1/iam/entry',
  },
  {
    clientCallName: 'client.iam.scopes.create',
    fullyQualifiedName: 'iam.scopes.create',
    httpMethod: 'post',
    httpPath: '/v1/iam/scopes/create',
  },
  {
    clientCallName: 'client.iam.scopes.archive',
    fullyQualifiedName: 'iam.scopes.archive',
    httpMethod: 'post',
    httpPath: '/v1/iam/scopes/archive',
  },
  {
    clientCallName: 'client.iam.scopes.setDefaultRole',
    fullyQualifiedName: 'iam.scopes.setDefaultRole',
    httpMethod: 'post',
    httpPath: '/v1/iam/scopes/set-default-role',
  },
  {
    clientCallName: 'client.iam.invitations.create',
    fullyQualifiedName: 'iam.invitations.create',
    httpMethod: 'post',
    httpPath: '/v1/iam/invitations/create',
  },
  {
    clientCallName: 'client.iam.invitations.accept',
    fullyQualifiedName: 'iam.invitations.accept',
    httpMethod: 'post',
    httpPath: '/v1/iam/invitations/accept',
  },
  {
    clientCallName: 'client.iam.invitations.createResource',
    fullyQualifiedName: 'iam.invitations.createResource',
    httpMethod: 'post',
    httpPath: '/v1/iam/invitations/create-resource',
  },
  {
    clientCallName: 'client.iam.invitations.listResource',
    fullyQualifiedName: 'iam.invitations.listResource',
    httpMethod: 'post',
    httpPath: '/v1/iam/invitations/list-resource',
  },
  {
    clientCallName: 'client.iam.invitations.revoke',
    fullyQualifiedName: 'iam.invitations.revoke',
    httpMethod: 'post',
    httpPath: '/v1/iam/invitations/revoke',
  },
  {
    clientCallName: 'client.iam.roles.assign',
    fullyQualifiedName: 'iam.roles.assign',
    httpMethod: 'post',
    httpPath: '/v1/iam/roles/assign',
  },
  {
    clientCallName: 'client.iam.roles.createOrgCustom',
    fullyQualifiedName: 'iam.roles.createOrgCustom',
    httpMethod: 'post',
    httpPath: '/v1/iam/roles/create-org-custom',
  },
  {
    clientCallName: 'client.iam.roles.listGrantable',
    fullyQualifiedName: 'iam.roles.listGrantable',
    httpMethod: 'post',
    httpPath: '/v1/iam/roles/list-grantable',
  },
  {
    clientCallName: 'client.iam.roles.remove',
    fullyQualifiedName: 'iam.roles.remove',
    httpMethod: 'post',
    httpPath: '/v1/iam/roles/remove',
  },
  {
    clientCallName: 'client.iam.roles.replace',
    fullyQualifiedName: 'iam.roles.replace',
    httpMethod: 'post',
    httpPath: '/v1/iam/roles/replace',
  },
  {
    clientCallName: 'client.iam.roles.updatePermissions',
    fullyQualifiedName: 'iam.roles.updatePermissions',
    httpMethod: 'post',
    httpPath: '/v1/iam/roles/update-permissions',
  },
  {
    clientCallName: 'client.iam.userExceptions.get',
    fullyQualifiedName: 'iam.userExceptions.get',
    httpMethod: 'post',
    httpPath: '/v1/iam/user-exceptions/get',
  },
  {
    clientCallName: 'client.iam.userExceptions.set',
    fullyQualifiedName: 'iam.userExceptions.set',
    httpMethod: 'post',
    httpPath: '/v1/iam/user-exceptions/set',
  },
  {
    clientCallName: 'client.iam.resourceGrants.create',
    fullyQualifiedName: 'iam.resourceGrants.create',
    httpMethod: 'post',
    httpPath: '/v1/iam/resource-grants/create',
  },
  {
    clientCallName: 'client.iam.resourceGrants.replace',
    fullyQualifiedName: 'iam.resourceGrants.replace',
    httpMethod: 'post',
    httpPath: '/v1/iam/resource-grants/replace',
  },
  {
    clientCallName: 'client.iam.resourceGrants.revoke',
    fullyQualifiedName: 'iam.resourceGrants.revoke',
    httpMethod: 'post',
    httpPath: '/v1/iam/resource-grants/revoke',
  },
  {
    clientCallName: 'client.iam.resourceRules.replace',
    fullyQualifiedName: 'iam.resourceRules.replace',
    httpMethod: 'post',
    httpPath: '/v1/iam/resource-rules/replace',
  },
  {
    clientCallName: 'client.iam.resourceRules.set',
    fullyQualifiedName: 'iam.resourceRules.set',
    httpMethod: 'post',
    httpPath: '/v1/iam/resource-rules/set',
  },
  {
    clientCallName: 'client.iam.expiries.set',
    fullyQualifiedName: 'iam.expiries.set',
    httpMethod: 'post',
    httpPath: '/v1/iam/expiries/set',
  },
  {
    clientCallName: 'client.iam.roleOverrides.get',
    fullyQualifiedName: 'iam.roleOverrides.get',
    httpMethod: 'post',
    httpPath: '/v1/iam/role-overrides/get',
  },
  {
    clientCallName: 'client.iam.roleOverrides.set',
    fullyQualifiedName: 'iam.roleOverrides.set',
    httpMethod: 'post',
    httpPath: '/v1/iam/role-overrides/set',
  },
  {
    clientCallName: 'client.iam.members.add',
    fullyQualifiedName: 'iam.members.add',
    httpMethod: 'post',
    httpPath: '/v1/iam/members/add',
  },
  {
    clientCallName: 'client.iam.members.approve',
    fullyQualifiedName: 'iam.members.approve',
    httpMethod: 'post',
    httpPath: '/v1/iam/members/approve',
  },
  {
    clientCallName: 'client.iam.members.remove',
    fullyQualifiedName: 'iam.members.remove',
    httpMethod: 'post',
    httpPath: '/v1/iam/members/remove',
  },
  {
    clientCallName: 'client.iam.members.setStatus',
    fullyQualifiedName: 'iam.members.setStatus',
    httpMethod: 'post',
    httpPath: '/v1/iam/members/status',
  },
  {
    clientCallName: 'client.iam.admissionRules.archive',
    fullyQualifiedName: 'iam.admissionRules.archive',
    httpMethod: 'post',
    httpPath: '/v1/iam/admission-rules/archive',
  },
  {
    clientCallName: 'client.iam.admissionRules.upsert',
    fullyQualifiedName: 'iam.admissionRules.upsert',
    httpMethod: 'post',
    httpPath: '/v1/iam/admission-rules/upsert',
  },
  {
    clientCallName: 'client.iam.entryMode.set',
    fullyQualifiedName: 'iam.entryMode.set',
    httpMethod: 'post',
    httpPath: '/v1/iam/entry-mode/set',
  },
  {
    clientCallName: 'client.iam.groups.create',
    fullyQualifiedName: 'iam.groups.create',
    httpMethod: 'post',
    httpPath: '/v1/iam/groups/create',
  },
  {
    clientCallName: 'client.iam.groups.list',
    fullyQualifiedName: 'iam.groups.list',
    httpMethod: 'post',
    httpPath: '/v1/iam/groups/list',
  },
  {
    clientCallName: 'client.iam.groups.addMember',
    fullyQualifiedName: 'iam.groups.addMember',
    httpMethod: 'post',
    httpPath: '/v1/iam/groups/members/add',
  },
  {
    clientCallName: 'client.iam.groups.archive',
    fullyQualifiedName: 'iam.groups.archive',
    httpMethod: 'post',
    httpPath: '/v1/iam/groups/archive',
  },
  {
    clientCallName: 'client.iam.groups.removeMember',
    fullyQualifiedName: 'iam.groups.removeMember',
    httpMethod: 'post',
    httpPath: '/v1/iam/groups/members/remove',
  },
  {
    clientCallName: 'client.iam.groups.rename',
    fullyQualifiedName: 'iam.groups.rename',
    httpMethod: 'post',
    httpPath: '/v1/iam/groups/rename',
  },
  {
    clientCallName: 'client.commerce.cancel',
    fullyQualifiedName: 'commerce.cancel',
    httpMethod: 'post',
    httpPath: '/v1/commerce/cancel',
  },
  {
    clientCallName: 'client.commerce.check',
    fullyQualifiedName: 'commerce.check',
    httpMethod: 'post',
    httpPath: '/v1/commerce/check',
  },
  {
    clientCallName: 'client.commerce.checkout',
    fullyQualifiedName: 'commerce.checkout',
    httpMethod: 'post',
    httpPath: '/v1/commerce/checkout',
  },
  {
    clientCallName: 'client.commerce.customers.create',
    fullyQualifiedName: 'commerce.customers.create',
    httpMethod: 'post',
    httpPath: '/v1/commerce/customers',
  },
  {
    clientCallName: 'client.commerce.customers.update',
    fullyQualifiedName: 'commerce.customers.update',
    httpMethod: 'patch',
    httpPath: '/v1/commerce/customers/{customer_id}',
  },
  {
    clientCallName: 'client.commerce.customers.list',
    fullyQualifiedName: 'commerce.customers.list',
    httpMethod: 'get',
    httpPath: '/v1/commerce/customers',
  },
  {
    clientCallName: 'client.commerce.customers.billingPortal',
    fullyQualifiedName: 'commerce.customers.billingPortal',
    httpMethod: 'post',
    httpPath: '/v1/commerce/customers/{customer_id}/billing_portal',
  },
  {
    clientCallName: 'client.commerce.customers.get',
    fullyQualifiedName: 'commerce.customers.get',
    httpMethod: 'get',
    httpPath: '/v1/commerce/customers/{customer_id}',
  },
  {
    clientCallName: 'client.commerce.products.create',
    fullyQualifiedName: 'commerce.products.create',
    httpMethod: 'post',
    httpPath: '/v1/commerce/products',
  },
  {
    clientCallName: 'client.commerce.products.update',
    fullyQualifiedName: 'commerce.products.update',
    httpMethod: 'patch',
    httpPath: '/v1/commerce/products/{product_id}',
  },
  {
    clientCallName: 'client.commerce.products.list',
    fullyQualifiedName: 'commerce.products.list',
    httpMethod: 'get',
    httpPath: '/v1/commerce/products',
  },
  {
    clientCallName: 'client.commerce.products.get',
    fullyQualifiedName: 'commerce.products.get',
    httpMethod: 'get',
    httpPath: '/v1/commerce/products/{product_id}',
  },
  {
    clientCallName: 'client.commerce.products.resources.list',
    fullyQualifiedName: 'commerce.products.resources.list',
    httpMethod: 'get',
    httpPath: '/v1/commerce/products/{product_id}/resources',
  },
  {
    clientCallName: 'client.commerce.products.resources.attach',
    fullyQualifiedName: 'commerce.products.resources.attach',
    httpMethod: 'post',
    httpPath: '/v1/commerce/products/{product_id}/resources',
  },
  {
    clientCallName: 'client.commerce.products.resources.detach',
    fullyQualifiedName: 'commerce.products.resources.detach',
    httpMethod: 'delete',
    httpPath: '/v1/commerce/products/{product_id}/resources',
  },
  {
    clientCallName: 'client.commerce.products.variants.create',
    fullyQualifiedName: 'commerce.products.variants.create',
    httpMethod: 'post',
    httpPath: '/v1/commerce/products/{product_id}/variants',
  },
  {
    clientCallName: 'client.commerce.products.variants.update',
    fullyQualifiedName: 'commerce.products.variants.update',
    httpMethod: 'patch',
    httpPath: '/v1/commerce/products/{product_id}/variants/{variant_id}',
  },
  {
    clientCallName: 'client.commerce.products.variants.list',
    fullyQualifiedName: 'commerce.products.variants.list',
    httpMethod: 'get',
    httpPath: '/v1/commerce/products/{product_id}/variants',
  },
  {
    clientCallName: 'client.commerce.products.variants.get',
    fullyQualifiedName: 'commerce.products.variants.get',
    httpMethod: 'get',
    httpPath: '/v1/commerce/products/{product_id}/variants/{variant_id}',
  },
  {
    clientCallName: 'client.commerce.coupons.create',
    fullyQualifiedName: 'commerce.coupons.create',
    httpMethod: 'post',
    httpPath: '/v1/commerce/coupons',
  },
  {
    clientCallName: 'client.commerce.coupons.update',
    fullyQualifiedName: 'commerce.coupons.update',
    httpMethod: 'patch',
    httpPath: '/v1/commerce/coupons/{coupon_id}',
  },
  {
    clientCallName: 'client.commerce.coupons.list',
    fullyQualifiedName: 'commerce.coupons.list',
    httpMethod: 'get',
    httpPath: '/v1/commerce/coupons',
  },
  {
    clientCallName: 'client.commerce.coupons.get',
    fullyQualifiedName: 'commerce.coupons.get',
    httpMethod: 'get',
    httpPath: '/v1/commerce/coupons/{coupon_id}',
  },
  {
    clientCallName: 'client.commerce.features.create',
    fullyQualifiedName: 'commerce.features.create',
    httpMethod: 'post',
    httpPath: '/v1/commerce/features',
  },
  {
    clientCallName: 'client.commerce.features.update',
    fullyQualifiedName: 'commerce.features.update',
    httpMethod: 'patch',
    httpPath: '/v1/commerce/features/{feature_id}',
  },
  {
    clientCallName: 'client.commerce.features.list',
    fullyQualifiedName: 'commerce.features.list',
    httpMethod: 'get',
    httpPath: '/v1/commerce/features',
  },
  {
    clientCallName: 'client.commerce.features.get',
    fullyQualifiedName: 'commerce.features.get',
    httpMethod: 'get',
    httpPath: '/v1/commerce/features/{feature_id}',
  },
  {
    clientCallName: 'client.connectors.credentials',
    fullyQualifiedName: 'connectors.credentials',
    httpMethod: 'get',
    httpPath: '/v1/connectors/{slug}/credentials',
  },
  {
    clientCallName: 'client.content.collections.create',
    fullyQualifiedName: 'content.collections.create',
    httpMethod: 'post',
    httpPath: '/v1/content/collections',
  },
  {
    clientCallName: 'client.content.collections.update',
    fullyQualifiedName: 'content.collections.update',
    httpMethod: 'patch',
    httpPath: '/v1/content/collections/{collection_id}',
  },
  {
    clientCallName: 'client.content.collections.list',
    fullyQualifiedName: 'content.collections.list',
    httpMethod: 'get',
    httpPath: '/v1/content/collections',
  },
  {
    clientCallName: 'client.content.collections.archive',
    fullyQualifiedName: 'content.collections.archive',
    httpMethod: 'delete',
    httpPath: '/v1/content/collections/{collection_id}',
  },
  {
    clientCallName: 'client.content.collections.get',
    fullyQualifiedName: 'content.collections.get',
    httpMethod: 'get',
    httpPath: '/v1/content/collections/{collection_id}',
  },
  {
    clientCallName: 'client.content.collections.fields.create',
    fullyQualifiedName: 'content.collections.fields.create',
    httpMethod: 'post',
    httpPath: '/v1/content/collections/{collection_id}/fields',
  },
  {
    clientCallName: 'client.content.collections.fields.update',
    fullyQualifiedName: 'content.collections.fields.update',
    httpMethod: 'patch',
    httpPath: '/v1/content/collections/{collection_id}/fields/{field_id}',
  },
  {
    clientCallName: 'client.content.collections.fields.delete',
    fullyQualifiedName: 'content.collections.fields.delete',
    httpMethod: 'delete',
    httpPath: '/v1/content/collections/{collection_id}/fields/{field_id}',
  },
  {
    clientCallName: 'client.content.entries.create',
    fullyQualifiedName: 'content.entries.create',
    httpMethod: 'post',
    httpPath: '/v1/content/entries',
  },
  {
    clientCallName: 'client.content.entries.update',
    fullyQualifiedName: 'content.entries.update',
    httpMethod: 'patch',
    httpPath: '/v1/content/entries/{entry_id}',
  },
  {
    clientCallName: 'client.content.entries.list',
    fullyQualifiedName: 'content.entries.list',
    httpMethod: 'get',
    httpPath: '/v1/content/entries',
  },
  {
    clientCallName: 'client.content.entries.archive',
    fullyQualifiedName: 'content.entries.archive',
    httpMethod: 'delete',
    httpPath: '/v1/content/entries/{entry_id}',
  },
  {
    clientCallName: 'client.content.entries.get',
    fullyQualifiedName: 'content.entries.get',
    httpMethod: 'get',
    httpPath: '/v1/content/entries/{entry_id}',
  },
  {
    clientCallName: 'client.content.entries.publish',
    fullyQualifiedName: 'content.entries.publish',
    httpMethod: 'post',
    httpPath: '/v1/content/entries/{entry_id}/publish',
  },
  {
    clientCallName: 'client.content.entries.unpublish',
    fullyQualifiedName: 'content.entries.unpublish',
    httpMethod: 'post',
    httpPath: '/v1/content/entries/{entry_id}/unpublish',
  },
  {
    clientCallName: 'client.content.assets.create',
    fullyQualifiedName: 'content.assets.create',
    httpMethod: 'post',
    httpPath: '/v1/content/assets',
  },
  {
    clientCallName: 'client.content.assets.update',
    fullyQualifiedName: 'content.assets.update',
    httpMethod: 'patch',
    httpPath: '/v1/content/assets/{asset_id}',
  },
  {
    clientCallName: 'client.content.assets.list',
    fullyQualifiedName: 'content.assets.list',
    httpMethod: 'get',
    httpPath: '/v1/content/assets',
  },
  {
    clientCallName: 'client.content.assets.delete',
    fullyQualifiedName: 'content.assets.delete',
    httpMethod: 'delete',
    httpPath: '/v1/content/assets/{asset_id}',
  },
  {
    clientCallName: 'client.content.assets.get',
    fullyQualifiedName: 'content.assets.get',
    httpMethod: 'get',
    httpPath: '/v1/content/assets/{asset_id}',
  },
  {
    clientCallName: 'client.content.assets.publish',
    fullyQualifiedName: 'content.assets.publish',
    httpMethod: 'post',
    httpPath: '/v1/content/assets/{asset_id}/publish',
  },
  {
    clientCallName: 'client.content.locales.create',
    fullyQualifiedName: 'content.locales.create',
    httpMethod: 'post',
    httpPath: '/v1/content/locales',
  },
  {
    clientCallName: 'client.content.locales.update',
    fullyQualifiedName: 'content.locales.update',
    httpMethod: 'patch',
    httpPath: '/v1/content/locales/{locale_code}',
  },
  {
    clientCallName: 'client.content.locales.list',
    fullyQualifiedName: 'content.locales.list',
    httpMethod: 'get',
    httpPath: '/v1/content/locales',
  },
  {
    clientCallName: 'client.content.locales.delete',
    fullyQualifiedName: 'content.locales.delete',
    httpMethod: 'delete',
    httpPath: '/v1/content/locales/{locale_code}',
  },
  {
    clientCallName: 'client.content.locales.get',
    fullyQualifiedName: 'content.locales.get',
    httpMethod: 'get',
    httpPath: '/v1/content/locales/{locale_code}',
  },
  {
    clientCallName: 'client.content.releases.create',
    fullyQualifiedName: 'content.releases.create',
    httpMethod: 'post',
    httpPath: '/v1/content/releases',
  },
  {
    clientCallName: 'client.content.releases.update',
    fullyQualifiedName: 'content.releases.update',
    httpMethod: 'patch',
    httpPath: '/v1/content/releases/{release_id}',
  },
  {
    clientCallName: 'client.content.releases.list',
    fullyQualifiedName: 'content.releases.list',
    httpMethod: 'get',
    httpPath: '/v1/content/releases',
  },
  {
    clientCallName: 'client.content.releases.delete',
    fullyQualifiedName: 'content.releases.delete',
    httpMethod: 'delete',
    httpPath: '/v1/content/releases/{release_id}',
  },
  {
    clientCallName: 'client.content.releases.get',
    fullyQualifiedName: 'content.releases.get',
    httpMethod: 'get',
    httpPath: '/v1/content/releases/{release_id}',
  },
  {
    clientCallName: 'client.content.releases.publish',
    fullyQualifiedName: 'content.releases.publish',
    httpMethod: 'post',
    httpPath: '/v1/content/releases/{release_id}/publish',
  },
  {
    clientCallName: 'client.content.releases.schedule',
    fullyQualifiedName: 'content.releases.schedule',
    httpMethod: 'post',
    httpPath: '/v1/content/releases/{release_id}/schedule',
  },
  {
    clientCallName: 'client.content.releases.items.add',
    fullyQualifiedName: 'content.releases.items.add',
    httpMethod: 'post',
    httpPath: '/v1/content/releases/{release_id}/items',
  },
  {
    clientCallName: 'client.content.releases.items.remove',
    fullyQualifiedName: 'content.releases.items.remove',
    httpMethod: 'delete',
    httpPath: '/v1/content/releases/{release_id}/items/{item_id}',
  },
  {
    clientCallName: 'client.domains.list',
    fullyQualifiedName: 'domains.list',
    httpMethod: 'get',
    httpPath: '/v1/domains',
  },
  {
    clientCallName: 'client.email.list',
    fullyQualifiedName: 'email.list',
    httpMethod: 'get',
    httpPath: '/v1/email',
  },
  {
    clientCallName: 'client.email.get',
    fullyQualifiedName: 'email.get',
    httpMethod: 'get',
    httpPath: '/v1/email/{email_id}',
  },
  {
    clientCallName: 'client.email.send',
    fullyQualifiedName: 'email.send',
    httpMethod: 'post',
    httpPath: '/v1/email',
  },
  {
    clientCallName: 'client.email.identities.create',
    fullyQualifiedName: 'email.identities.create',
    httpMethod: 'post',
    httpPath: '/v1/email/identities',
  },
  {
    clientCallName: 'client.email.identities.list',
    fullyQualifiedName: 'email.identities.list',
    httpMethod: 'get',
    httpPath: '/v1/email/identities',
  },
  {
    clientCallName: 'client.email.identities.delete',
    fullyQualifiedName: 'email.identities.delete',
    httpMethod: 'delete',
    httpPath: '/v1/email/identities/{identity_id}',
  },
  {
    clientCallName: 'client.email.identities.get',
    fullyQualifiedName: 'email.identities.get',
    httpMethod: 'get',
    httpPath: '/v1/email/identities/{identity_id}',
  },
  {
    clientCallName: 'client.email.identities.verify',
    fullyQualifiedName: 'email.identities.verify',
    httpMethod: 'post',
    httpPath: '/v1/email/identities/{identity_id}/verify',
  },
  {
    clientCallName: 'client.files.list',
    fullyQualifiedName: 'files.list',
    httpMethod: 'get',
    httpPath: '/v1/files',
  },
  {
    clientCallName: 'client.files.get',
    fullyQualifiedName: 'files.get',
    httpMethod: 'get',
    httpPath: '/v1/files/{file_id}',
  },
  {
    clientCallName: 'client.pushNotifications.enable',
    fullyQualifiedName: 'pushNotifications.enable',
    httpMethod: 'post',
    httpPath: '/v1/push-notifications/enable',
  },
  {
    clientCallName: 'client.pushNotifications.identify',
    fullyQualifiedName: 'pushNotifications.identify',
    httpMethod: 'post',
    httpPath: '/v1/push-notifications/identify',
  },
  {
    clientCallName: 'client.pushNotifications.send',
    fullyQualifiedName: 'pushNotifications.send',
    httpMethod: 'post',
    httpPath: '/v1/push-notifications/send',
  },
  {
    clientCallName: 'client.pushNotifications.subscribe',
    fullyQualifiedName: 'pushNotifications.subscribe',
    httpMethod: 'post',
    httpPath: '/v1/push-notifications/subscribe',
  },
  {
    clientCallName: 'client.pushNotifications.unsubscribe',
    fullyQualifiedName: 'pushNotifications.unsubscribe',
    httpMethod: 'post',
    httpPath: '/v1/push-notifications/unsubscribe',
  },
  {
    clientCallName: 'client.pushNotifications.topics.list',
    fullyQualifiedName: 'pushNotifications.topics.list',
    httpMethod: 'get',
    httpPath: '/v1/push-notifications/topics',
  },
  {
    clientCallName: 'client.pushNotifications.topics.subscribe',
    fullyQualifiedName: 'pushNotifications.topics.subscribe',
    httpMethod: 'post',
    httpPath: '/v1/push-notifications/topics/subscribe',
  },
  {
    clientCallName: 'client.pushNotifications.topics.unsubscribe',
    fullyQualifiedName: 'pushNotifications.topics.unsubscribe',
    httpMethod: 'post',
    httpPath: '/v1/push-notifications/topics/unsubscribe',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
