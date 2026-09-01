// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import type { RequestOptions } from '../../../internal/request-options';
import { path as __scalarPath } from '../../../internal/utils/path';

export class AccessRules extends APIResource {
  /**
   * Lists email and domain rules that allow or deny entry to a tenant. Active rules are returned by default.
   *
   * @param {string} tenantID - The tenant ID. Pass `primary` to target the deployment's primary tenant.
   * @param {AccessRuleListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccessRuleListResponse>} The tenant access rule page
   *
   * @example
   * ```ts
   * const accessRule = await client.iam.tenants.accessRules.list('tenantId', {
   *   limit: 50,
   * });
   * ```
   */
  list(
    tenantID: string,
    query: AccessRuleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccessRuleListResponse> {
    return this._client.get(__scalarPath`/v1/iam/tenants/${tenantID}/access-rules`, { query, ...options });
  }

  /**
   * Creates an allow or deny rule for an email address or domain. The rule takes effect immediately for matching users.
   *
   * @param {string} tenantID - The tenant ID. Pass `primary` to target the deployment's primary tenant.
   * @param {AccessRuleCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccessRuleCreateResponse>} The created access rule
   *
   * @example
   * ```ts
   * const accessRule = await client.iam.tenants.accessRules.create('tenantId', {
   *   actor_user_id: 'x',
   *   effect: 'allow',
   *   subject: {
   *     type: 'email',
   *     value: 'user@example.com',
   *   },
   * });
   * ```
   */
  create(
    tenantID: string,
    body: AccessRuleCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccessRuleCreateResponse> {
    return this._client.post(__scalarPath`/v1/iam/tenants/${tenantID}/access-rules`, { body, ...options });
  }

  /**
   * Archives an access rule so it no longer affects who can enter the tenant.
   *
   * @param {string} ruleID - The unique identifier of the tenant access rule.
   * @param {AccessRuleArchiveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccessRuleArchiveResponse>} The archived access rule
   *
   * @example
   * ```ts
   * const accessRule = await client.iam.tenants.accessRules.archive('ruleId', {
   *   tenant_id: 'tenantId',
   *   actor_user_id: 'x',
   * });
   * ```
   */
  archive(
    ruleID: string,
    params: AccessRuleArchiveParams,
    options?: RequestOptions,
  ): APIPromise<AccessRuleArchiveResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(__scalarPath`/v1/iam/tenants/${tenant_id}/access-rules/${ruleID}/archive`, {
      body,
      ...options,
    });
  }
}

export interface AccessRuleListParams {
  /**
   * Cursor for forward pagination. Pass the ID of the last item from the previous page.
   */
  starting_after?: string;
  /**
   * Maximum number of records to return. Defaults to 50.
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * Filter by rule effect.
   */
  effect?: 'allow' | 'deny';
  /**
   * Filter by subject type.
   */
  subject_type?: 'email' | 'domain';
  /**
   * Whether to include archived rules. Defaults to active rules only.
   */
  include_archived?: string;
}

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
  export interface Data {
    /**
     * Access rule ID.
     * @minLength 1
     */
    rule_id: string;
    /**
     * Whether matching users are allowed or denied entry.
     */
    effect: 'allow' | 'deny';
    /**
     * Email or domain matched by the rule.
     */
    subject: Data.IamAccessRuleEmailSubject | Data.IamAccessRuleDomainSubject;
    /**
     * Administrative reason for the rule.
     */
    reason: string | null;
    /**
     * Whether the rule is archived.
     */
    archived: boolean;
    /**
     * Archive timestamp when archived.
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
     */
    archived_at: string | null;
    /**
     * Rule creation timestamp.
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
     */
    created_at: string;
  }

  export namespace Data {
    export interface IamAccessRuleEmailSubject {
      /**
       * Match one exact email address.
       */
      type: 'email';
      /**
       * Exact email address matched by the rule.
       * @format email
       * @maxLength 255
       * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
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
       * @minLength 1
       * @maxLength 255
       */
      value: string;
    }
  }
}

export interface AccessRuleCreateParams {
  /**
   * The signed-in end user's ID to attribute the write to that user, or null to attribute it to the service API key.
   * @minLength 1
   */
  actor_user_id: string | null;
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
   * @maxLength 1000
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
     * @format email
     * @maxLength 255
     * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
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
     * @minLength 1
     * @maxLength 255
     */
    value: string;
  }
}

export interface AccessRuleCreateResponse {
  /**
   * Created access rule ID.
   * @minLength 1
   */
  rule_id: string;
}

export interface AccessRuleArchiveParams {
  /**
   * Path param: The tenant ID. Pass `primary` to target the deployment's primary tenant.
   */
  tenant_id: string;
  /**
   * Body param: The signed-in end user's ID to attribute the write to that user, or null to attribute it to the service API key.
   * @minLength 1
   */
  actor_user_id: string | null;
}

export interface AccessRuleArchiveResponse {
  /**
   * Archived access rule ID.
   * @minLength 1
   */
  rule_id: string;
  /**
   * Whether the rule was archived.
   */
  archived: boolean;
}
export declare namespace AccessRules {
  export {
    type AccessRuleListResponse as AccessRuleListResponse,
    type AccessRuleCreateResponse as AccessRuleCreateResponse,
    type AccessRuleArchiveResponse as AccessRuleArchiveResponse,
    type AccessRuleListParams as AccessRuleListParams,
    type AccessRuleCreateParams as AccessRuleCreateParams,
    type AccessRuleArchiveParams as AccessRuleArchiveParams,
  };
}
