// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AccessRules extends APIResource {
  /**
   * Creates an allow or deny rule for an email address or domain. The rule takes
   * effect immediately for matching users.
   */
  create(
    tenantID: string,
    body: AccessRuleCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccessRuleCreateResponse> {
    return this._client.post(path`/v1/iam/tenants/${tenantID}/access-rules`, { body, ...options });
  }

  /**
   * Lists email and domain rules that allow or deny entry to a tenant. Active rules
   * are returned by default.
   */
  list(
    tenantID: string,
    query: AccessRuleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccessRuleListResponse> {
    return this._client.get(path`/v1/iam/tenants/${tenantID}/access-rules`, { query, ...options });
  }

  /**
   * Archives an access rule so it no longer affects who can enter the tenant.
   */
  archive(
    ruleID: string,
    params: AccessRuleArchiveParams,
    options?: RequestOptions,
  ): APIPromise<AccessRuleArchiveResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(path`/v1/iam/tenants/${tenant_id}/access-rules/${ruleID}/archive`, {
      body,
      ...options,
    });
  }
}

/**
 * Created tenant access rule.
 */
export interface AccessRuleCreateResponse {
  /**
   * Created access rule ID.
   */
  rule_id: string;
}

/**
 * Paginated tenant access rules.
 */
export interface AccessRuleListResponse {
  /**
   * Access rule page.
   */
  data: Array<AccessRuleListResponse.Data>;

  /**
   * Whether more records are available after this page.
   */
  has_more: boolean;
}

export namespace AccessRuleListResponse {
  /**
   * One tenant access rule.
   */
  export interface Data {
    /**
     * Whether the rule is archived.
     */
    archived: boolean;

    /**
     * Archive timestamp when archived.
     */
    archived_at: string | null;

    /**
     * Rule creation timestamp.
     */
    created_at: string;

    /**
     * Whether matching users are allowed or denied entry.
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
    subject: Data.IamAccessRuleEmailSubject | Data.IamAccessRuleDomainSubject;
  }

  export namespace Data {
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
 * Archived tenant access rule.
 */
export interface AccessRuleArchiveResponse {
  /**
   * Whether the rule was archived.
   */
  archived: boolean;

  /**
   * Archived access rule ID.
   */
  rule_id: string;
}

export interface AccessRuleCreateParams {
  /**
   * The signed-in end user's Hercules Auth tokenIdentifier, passed unchanged by the
   * trusted app backend. Used for identity and audit only.
   */
  actor_token_identifier: string | null;

  /**
   * Whether matching users are allowed or denied entry.
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

export interface AccessRuleListParams {
  /**
   * Filter by rule effect.
   */
  effect?: 'allow' | 'deny';

  /**
   * Whether to include archived rules. Defaults to active rules only.
   */
  include_archived?: string;

  /**
   * Maximum number of records to return. Defaults to 50.
   */
  limit?: number;

  /**
   * Cursor for forward pagination. Pass the ID of the last item from the previous
   * page.
   */
  starting_after?: string;

  /**
   * Filter by subject type.
   */
  subject_type?: 'email' | 'domain';
}

export interface AccessRuleArchiveParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary
   * tenant.
   */
  tenant_id: string;

  /**
   * Body param: The signed-in end user's Hercules Auth tokenIdentifier, passed
   * unchanged by the trusted app backend. Used for identity and audit only.
   */
  actor_token_identifier: string | null;
}

export declare namespace AccessRules {
  export {
    type AccessRuleCreateResponse as AccessRuleCreateResponse,
    type AccessRuleListResponse as AccessRuleListResponse,
    type AccessRuleArchiveResponse as AccessRuleArchiveResponse,
    type AccessRuleCreateParams as AccessRuleCreateParams,
    type AccessRuleListParams as AccessRuleListParams,
    type AccessRuleArchiveParams as AccessRuleArchiveParams,
  };
}
