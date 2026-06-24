// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AdmissionRules extends APIResource {
  /**
   * Creates or idempotently upserts one tenant email or domain admission rule.
   */
  create(
    tenantID: string,
    params: AdmissionRuleCreateParams,
    options?: RequestOptions,
  ): APIPromise<AdmissionRuleCreateResponse> {
    const {
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.post(path`/v1/iam/tenants/${tenantID}/admission-rules`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          'X-Hercules-IAM-Actor': xHerculesIamActor.toString(),
          ...(xHerculesUserIDToken != null ?
            { 'X-Hercules-User-ID-Token': xHerculesUserIDToken }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates the administrative reason on one tenant admission rule.
   */
  update(
    ruleID: string,
    params: AdmissionRuleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AdmissionRuleUpdateResponse> {
    const {
      tenant_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/admission-rules/${ruleID}`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          'X-Hercules-IAM-Actor': xHerculesIamActor.toString(),
          ...(xHerculesUserIDToken != null ?
            { 'X-Hercules-User-ID-Token': xHerculesUserIDToken }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns a filtered page of tenant email and domain admission rules.
   */
  list(
    tenantID: string,
    params: AdmissionRuleListParams,
    options?: RequestOptions,
  ): APIPromise<AdmissionRuleListResponse> {
    const {
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...query
    } = params;
    return this._client.get(path`/v1/iam/tenants/${tenantID}/admission-rules`, {
      query,
      ...options,
      headers: buildHeaders([
        {
          'X-Hercules-IAM-Actor': xHerculesIamActor.toString(),
          ...(xHerculesUserIDToken != null ?
            { 'X-Hercules-User-ID-Token': xHerculesUserIDToken }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Archives one tenant admission rule.
   */
  archive(
    ruleID: string,
    params: AdmissionRuleArchiveParams,
    options?: RequestOptions,
  ): APIPromise<AdmissionRuleArchiveResponse> {
    const {
      tenant_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
    } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/admission-rules/${ruleID}`, {
      ...options,
      headers: buildHeaders([
        {
          'X-Hercules-IAM-Actor': xHerculesIamActor.toString(),
          ...(xHerculesUserIDToken != null ?
            { 'X-Hercules-User-ID-Token': xHerculesUserIDToken }
          : undefined),
        },
        options?.headers,
      ]),
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
    subject: AdmissionRule.UnionMember0 | AdmissionRule.UnionMember1;
  }

  export namespace AdmissionRule {
    export interface UnionMember0 {
      /**
       * Match one exact email address.
       */
      type: 'email';

      /**
       * Exact email address matched by the rule.
       */
      value: string;
    }

    export interface UnionMember1 {
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

export interface AdmissionRuleCreateParams {
  /**
   * Body param: Whether matching users are allowed or denied.
   */
  effect: 'allow' | 'deny';

  /**
   * Body param: Email or domain matched by the rule.
   */
  subject: AdmissionRuleCreateParams.UnionMember0 | AdmissionRuleCreateParams.UnionMember1;

  /**
   * Header param: Authority used for this operation: service or user.
   */
  'X-Hercules-IAM-Actor': 'service' | 'user';

  /**
   * Body param: Optional administrative reason.
   */
  reason?: string | null;

  /**
   * Header param: Signed Hercules Auth ID token. Required for user and omitted for
   * service.
   */
  'X-Hercules-User-ID-Token'?: string;
}

export namespace AdmissionRuleCreateParams {
  export interface UnionMember0 {
    /**
     * Match one exact email address.
     */
    type: 'email';

    /**
     * Exact email address matched by the rule.
     */
    value: string;
  }

  export interface UnionMember1 {
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
   * Body param: New administrative reason, or null to clear it.
   */
  reason: string | null;

  /**
   * Header param: Authority used for this operation: service or user.
   */
  'X-Hercules-IAM-Actor': 'service' | 'user';

  /**
   * Header param: Signed Hercules Auth ID token. Required for user and omitted for
   * service.
   */
  'X-Hercules-User-ID-Token'?: string;
}

export interface AdmissionRuleListParams {
  /**
   * Header param: Authority used for this operation: service or user.
   */
  'X-Hercules-IAM-Actor': 'service' | 'user';

  /**
   * Query param: Whether to return archived rules.
   */
  archived?: 'true' | 'false';

  /**
   * Query param: Opaque cursor returned by the previous page.
   */
  cursor?: string;

  /**
   * Query param: Filter by rule effect.
   */
  effect?: 'allow' | 'deny';

  /**
   * Query param: Maximum number of records to return.
   */
  limit?: number;

  /**
   * Query param: Filter by subject type.
   */
  subject_type?: 'email' | 'domain';

  /**
   * Header param: Signed Hercules Auth ID token. Required for user and omitted for
   * service.
   */
  'X-Hercules-User-ID-Token'?: string;
}

export interface AdmissionRuleArchiveParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Header param: Authority used for this operation: service or user.
   */
  'X-Hercules-IAM-Actor': 'service' | 'user';

  /**
   * Header param: Signed Hercules Auth ID token. Required for user and omitted for
   * service.
   */
  'X-Hercules-User-ID-Token'?: string;
}

export declare namespace AdmissionRules {
  export {
    type AdmissionRuleCreateResponse as AdmissionRuleCreateResponse,
    type AdmissionRuleUpdateResponse as AdmissionRuleUpdateResponse,
    type AdmissionRuleListResponse as AdmissionRuleListResponse,
    type AdmissionRuleArchiveResponse as AdmissionRuleArchiveResponse,
    type AdmissionRuleCreateParams as AdmissionRuleCreateParams,
    type AdmissionRuleUpdateParams as AdmissionRuleUpdateParams,
    type AdmissionRuleListParams as AdmissionRuleListParams,
    type AdmissionRuleArchiveParams as AdmissionRuleArchiveParams,
  };
}
