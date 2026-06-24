// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AdmissionRules extends APIResource {
  /**
   * Creates or idempotently upserts one tenant email or domain admission rule.
   */
  create(
    tenantID: string,
    body: AdmissionRuleCreateParams,
    options?: RequestOptions,
  ): APIPromise<AdmissionRuleCreateResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/admission-rules`, { body, ...options });
  }

  /**
   * Updates the administrative reason on one tenant admission rule.
   */
  update(
    ruleID: string,
    params: AdmissionRuleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AdmissionRuleUpdateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/admission-rules/${ruleID}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a filtered page of tenant email and domain admission rules.
   */
  list(
    tenantID: string,
    query: AdmissionRuleListParams,
    options?: RequestOptions,
  ): APIPromise<AdmissionRuleListResponse> {
    return this._client.get(path`/v1/iam/tenants/${tenantID}/admission-rules`, { query, ...options });
  }

  /**
   * Archives one tenant admission rule.
   */
  archive(
    ruleID: string,
    params: AdmissionRuleArchiveParams,
    options?: RequestOptions,
  ): APIPromise<AdmissionRuleArchiveResponse> {
    const { tenant_id, user_token_identifier } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/admission-rules/${ruleID}`, {
      query: { user_token_identifier },
      ...options,
    });
  }

  /**
   * Unarchives one tenant admission rule.
   */
  unarchive(
    ruleID: string,
    params: AdmissionRuleUnarchiveParams,
    options?: RequestOptions,
  ): APIPromise<AdmissionRuleUnarchiveResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(path`/v1/iam/tenants/${tenant_id}/admission-rules/${ruleID}/unarchive`, {
      body,
      ...options,
    });
  }
}

/**
 * Result of changing a tenant admission rule.
 */
export interface AdmissionRuleCreateResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * Admission rule changed by the operation.
   */
  rule_id: string;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

/**
 * Result of changing a tenant admission rule.
 */
export interface AdmissionRuleUpdateResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * Admission rule changed by the operation.
   */
  rule_id: string;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

/**
 * Cursor-paginated tenant admission rules.
 */
export interface AdmissionRuleListResponse {
  /**
   * Admission rule page.
   */
  admission_rules: Array<AdmissionRuleListResponse.AdmissionRule>;

  /**
   * Tenant whose admission rules were returned.
   */
  tenant_id: string;

  /**
   * Cursor for the next page.
   */
  next_cursor?: string;
}

export namespace AdmissionRuleListResponse {
  /**
   * One tenant admission rule.
   */
  export interface AdmissionRule {
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
     * Admission rule ID.
     */
    rule_id: string;

    /**
     * Email or domain matched by the rule.
     */
    subject: AdmissionRule.IamAdmissionRuleEmailSubject | AdmissionRule.IamAdmissionRuleDomainSubject;
  }

  export namespace AdmissionRule {
    export interface IamAdmissionRuleEmailSubject {
      /**
       * Match one exact email address.
       */
      type: 'email';

      /**
       * Exact email address matched by the rule.
       */
      value: string;
    }

    export interface IamAdmissionRuleDomainSubject {
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
 * Result of changing a tenant admission rule.
 */
export interface AdmissionRuleArchiveResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * Admission rule changed by the operation.
   */
  rule_id: string;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

/**
 * Result of changing a tenant admission rule.
 */
export interface AdmissionRuleUnarchiveResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * Admission rule changed by the operation.
   */
  rule_id: string;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

export interface AdmissionRuleCreateParams {
  /**
   * Whether matching users are allowed or denied.
   */
  effect: 'allow' | 'deny';

  /**
   * Email or domain matched by the rule.
   */
  subject:
    | AdmissionRuleCreateParams.IamAdmissionRuleEmailSubject
    | AdmissionRuleCreateParams.IamAdmissionRuleDomainSubject;

  /**
   * Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;

  /**
   * Optional administrative reason.
   */
  reason?: string | null;
}

export namespace AdmissionRuleCreateParams {
  export interface IamAdmissionRuleEmailSubject {
    /**
     * Match one exact email address.
     */
    type: 'email';

    /**
     * Exact email address matched by the rule.
     */
    value: string;
  }

  export interface IamAdmissionRuleDomainSubject {
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

export interface AdmissionRuleUpdateParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Body param: Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;

  /**
   * Body param: New administrative reason, or null to clear it.
   */
  reason?: string | null;
}

export interface AdmissionRuleListParams {
  /**
   * Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;

  /**
   * Whether to return archived rules.
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
   * Maximum number of records to return.
   */
  limit?: number;

  /**
   * Filter by subject type.
   */
  subject_type?: 'email' | 'domain';
}

export interface AdmissionRuleArchiveParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Query param: Convex identity tokenIdentifier asserted by the trusted app
   * backend.
   */
  user_token_identifier: string | null;
}

export interface AdmissionRuleUnarchiveParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Body param: Convex identity tokenIdentifier asserted by the trusted app backend.
   */
  user_token_identifier: string | null;
}

export declare namespace AdmissionRules {
  export {
    type AdmissionRuleCreateResponse as AdmissionRuleCreateResponse,
    type AdmissionRuleUpdateResponse as AdmissionRuleUpdateResponse,
    type AdmissionRuleListResponse as AdmissionRuleListResponse,
    type AdmissionRuleArchiveResponse as AdmissionRuleArchiveResponse,
    type AdmissionRuleUnarchiveResponse as AdmissionRuleUnarchiveResponse,
    type AdmissionRuleCreateParams as AdmissionRuleCreateParams,
    type AdmissionRuleUpdateParams as AdmissionRuleUpdateParams,
    type AdmissionRuleListParams as AdmissionRuleListParams,
    type AdmissionRuleArchiveParams as AdmissionRuleArchiveParams,
    type AdmissionRuleUnarchiveParams as AdmissionRuleUnarchiveParams,
  };
}
