// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AccessRules extends APIResource {
  /**
   * Creates an allow or deny rule for an email address or domain, or updates the
   * reason on an existing active matching rule. The rule takes effect immediately
   * for matching tenant users.
   */
  create(
    tenantID: string,
    body: AccessRuleCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccessRuleCreateResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/access-rules`, { body, ...options });
  }

  /**
   * Updates or clears the administrative reason on an active access rule. The rule's
   * email address or domain and allow or deny effect cannot be changed.
   */
  update(
    ruleID: string,
    params: AccessRuleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AccessRuleUpdateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/access-rules/${ruleID}`, {
      body,
      ...options,
    });
  }

  /**
   * Lists email and domain rules that control who may enter the tenant. Active rules
   * are returned by default; archived rules can be requested separately.
   */
  list(
    tenantID: string,
    query: AccessRuleListParams,
    options?: RequestOptions,
  ): APIPromise<AccessRuleListResponse> {
    return this._client.get(path`/v1/iam/tenants/${tenantID}/access-rules`, { query, ...options });
  }

  /**
   * Archives an access rule so it no longer affects who can enter the tenant.
   * Matching users are immediately re-evaluated against the remaining rules.
   */
  archive(
    ruleID: string,
    params: AccessRuleArchiveParams,
    options?: RequestOptions,
  ): APIPromise<AccessRuleArchiveResponse> {
    const { tenant_id, actor_token_identifier } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/access-rules/${ruleID}`, {
      query: { actor_token_identifier },
      ...options,
    });
  }

  /**
   * Restores an archived access rule and immediately re-evaluates matching users.
   * Restoration fails if an identical active rule already exists.
   */
  unarchive(
    ruleID: string,
    params: AccessRuleUnarchiveParams,
    options?: RequestOptions,
  ): APIPromise<AccessRuleUnarchiveResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(path`/v1/iam/tenants/${tenant_id}/access-rules/${ruleID}/unarchive`, {
      body,
      ...options,
    });
  }
}

/**
 * Result of changing a tenant access rule.
 */
export interface AccessRuleCreateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: AccessRuleCreateResponse.ConvexSourceData;

  /**
   * Access rule changed by the operation.
   */
  rule_id: string;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * Whether the operation created a new access rule.
   */
  created?: boolean;
}

export namespace AccessRuleCreateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  export interface ConvexSourceData {
    /**
     * Whether persisted IAM source data changed.
     */
    changed: boolean;

    /**
     * Convex deployment IDs whose IAM mirrors will receive the updated state.
     */
    projection_ids: Array<string>;

    /**
     * IAM source version after the operation. Before relying on Convex IAM mirror
     * reads, wait for each returned projection to reach at least this version.
     */
    version: number;
  }
}

/**
 * Result of changing a tenant access rule.
 */
export interface AccessRuleUpdateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: AccessRuleUpdateResponse.ConvexSourceData;

  /**
   * Access rule changed by the operation.
   */
  rule_id: string;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * Whether the operation created a new access rule.
   */
  created?: boolean;
}

export namespace AccessRuleUpdateResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  export interface ConvexSourceData {
    /**
     * Whether persisted IAM source data changed.
     */
    changed: boolean;

    /**
     * Convex deployment IDs whose IAM mirrors will receive the updated state.
     */
    projection_ids: Array<string>;

    /**
     * IAM source version after the operation. Before relying on Convex IAM mirror
     * reads, wait for each returned projection to reach at least this version.
     */
    version: number;
  }
}

/**
 * Cursor-paginated tenant access rules.
 */
export interface AccessRuleListResponse {
  /**
   * Access rule page.
   */
  access_rules: Array<AccessRuleListResponse.AccessRule>;

  /**
   * Tenant whose access rules were returned.
   */
  tenant_id: string;

  /**
   * Cursor for the next page.
   */
  next_cursor?: string;
}

export namespace AccessRuleListResponse {
  /**
   * One tenant access rule.
   */
  export interface AccessRule {
    /**
     * Whether the rule is archived.
     */
    archived: boolean;

    /**
     * Archive timestamp when archived.
     */
    archived_at: string | null;

    /**
     * Whether the subject is allowed or denied.
     */
    effect: 'allow' | 'deny';

    /**
     * Administrative reason for the rule.
     */
    reason: string | null;

    /**
     * Access rule ID.
     */
    rule_id: string;

    /**
     * Email or domain matched by the rule.
     */
    subject: AccessRule.IamAccessRuleEmailSubject | AccessRule.IamAccessRuleDomainSubject;
  }

  export namespace AccessRule {
    export interface IamAccessRuleEmailSubject {
      /**
       * Match one exact email address.
       */
      type: 'email';

      /**
       * Exact email address matched by the rule.
       */
      value: string;
    }

    export interface IamAccessRuleDomainSubject {
      /**
       * Match every address in one email domain.
       */
      type: 'domain';

      /**
       * Email domain matched by the rule.
       */
      value: string;
    }
  }
}

/**
 * Result of changing a tenant access rule.
 */
export interface AccessRuleArchiveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: AccessRuleArchiveResponse.ConvexSourceData;

  /**
   * Access rule changed by the operation.
   */
  rule_id: string;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * Whether the operation created a new access rule.
   */
  created?: boolean;
}

export namespace AccessRuleArchiveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  export interface ConvexSourceData {
    /**
     * Whether persisted IAM source data changed.
     */
    changed: boolean;

    /**
     * Convex deployment IDs whose IAM mirrors will receive the updated state.
     */
    projection_ids: Array<string>;

    /**
     * IAM source version after the operation. Before relying on Convex IAM mirror
     * reads, wait for each returned projection to reach at least this version.
     */
    version: number;
  }
}

/**
 * Result of changing a tenant access rule.
 */
export interface AccessRuleUnarchiveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  convex_source_data: AccessRuleUnarchiveResponse.ConvexSourceData;

  /**
   * Access rule changed by the operation.
   */
  rule_id: string;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * Whether the operation created a new access rule.
   */
  created?: boolean;
}

export namespace AccessRuleUnarchiveResponse {
  /**
   * Synchronization metadata for Convex IAM projections.
   */
  export interface ConvexSourceData {
    /**
     * Whether persisted IAM source data changed.
     */
    changed: boolean;

    /**
     * Convex deployment IDs whose IAM mirrors will receive the updated state.
     */
    projection_ids: Array<string>;

    /**
     * IAM source version after the operation. Before relying on Convex IAM mirror
     * reads, wait for each returned projection to reach at least this version.
     */
    version: number;
  }
}

export interface AccessRuleCreateParams {
  /**
   * The signed-in actor's Convex identity tokenIdentifier, passed unchanged by the
   * trusted app backend.
   */
  actor_token_identifier: string | null;

  /**
   * Whether matching users are allowed or denied.
   */
  effect: 'allow' | 'deny';

  /**
   * Email or domain matched by the rule.
   */
  subject:
    | AccessRuleCreateParams.IamAccessRuleEmailSubject
    | AccessRuleCreateParams.IamAccessRuleDomainSubject;

  /**
   * Optional administrative reason.
   */
  reason?: string | null;
}

export namespace AccessRuleCreateParams {
  export interface IamAccessRuleEmailSubject {
    /**
     * Match one exact email address.
     */
    type: 'email';

    /**
     * Exact email address matched by the rule.
     */
    value: string;
  }

  export interface IamAccessRuleDomainSubject {
    /**
     * Match every address in one email domain.
     */
    type: 'domain';

    /**
     * Email domain matched by the rule.
     */
    value: string;
  }
}

export interface AccessRuleUpdateParams {
  /**
   * Path param: The tenant ID. Pass `default` to target the deployment's default
   * tenant.
   */
  tenant_id: string;

  /**
   * Body param: The signed-in actor's Convex identity tokenIdentifier, passed
   * unchanged by the trusted app backend.
   */
  actor_token_identifier: string | null;

  /**
   * Body param: New administrative reason, or null to clear it.
   */
  reason?: string | null;
}

export interface AccessRuleListParams {
  /**
   * The signed-in actor's Convex identity tokenIdentifier, passed unchanged by the
   * trusted app backend.
   */
  actor_token_identifier: string | null;

  /**
   * Whether to return archived rules. Omit for active rules only.
   */
  archived?: boolean;

  /**
   * Opaque cursor returned by the previous page.
   */
  cursor?: string;

  /**
   * Filter by rule effect.
   */
  effect?: 'allow' | 'deny';

  /**
   * Maximum number of records to return. Defaults to 50.
   */
  limit?: number;

  /**
   * Filter by subject type.
   */
  subject_type?: 'email' | 'domain';
}

export interface AccessRuleArchiveParams {
  /**
   * Path param: The tenant ID. Pass `default` to target the deployment's default
   * tenant.
   */
  tenant_id: string;

  /**
   * Query param: The signed-in actor's Convex identity tokenIdentifier, passed
   * unchanged by the trusted app backend.
   */
  actor_token_identifier: string | null;
}

export interface AccessRuleUnarchiveParams {
  /**
   * Path param: The tenant ID. Pass `default` to target the deployment's default
   * tenant.
   */
  tenant_id: string;

  /**
   * Body param: The signed-in actor's Convex identity tokenIdentifier, passed
   * unchanged by the trusted app backend.
   */
  actor_token_identifier: string | null;
}

export declare namespace AccessRules {
  export {
    type AccessRuleCreateResponse as AccessRuleCreateResponse,
    type AccessRuleUpdateResponse as AccessRuleUpdateResponse,
    type AccessRuleListResponse as AccessRuleListResponse,
    type AccessRuleArchiveResponse as AccessRuleArchiveResponse,
    type AccessRuleUnarchiveResponse as AccessRuleUnarchiveResponse,
    type AccessRuleCreateParams as AccessRuleCreateParams,
    type AccessRuleUpdateParams as AccessRuleUpdateParams,
    type AccessRuleListParams as AccessRuleListParams,
    type AccessRuleArchiveParams as AccessRuleArchiveParams,
    type AccessRuleUnarchiveParams as AccessRuleUnarchiveParams,
  };
}
