// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class AdmissionRules extends APIResource {
  /**
   * Retires an existing admission rule in an organization scope.
   */
  archive(
    body: AdmissionRuleArchiveParams,
    options?: RequestOptions,
  ): APIPromise<AdmissionRuleArchiveResponse> {
    return this._client.post('/v1/access-control/admission-rules/archive', { body, ...options });
  }

  /**
   * Adds or updates an allow or deny admission rule for an email or domain.
   */
  upsert(body: AdmissionRuleUpsertParams, options?: RequestOptions): APIPromise<AdmissionRuleUpsertResponse> {
    return this._client.post('/v1/access-control/admission-rules/upsert', { body, ...options });
  }
}

/**
 * Admission rule write result and affected principals.
 */
export interface AdmissionRuleArchiveResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Deployments whose Access Control mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * Existing principals reconciled against the updated admission policy.
   */
  reconciled_principal_ids: Array<string>;

  /**
   * Admission rule created, updated, or archived.
   */
  rule_id: string;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Whether persisted Access Control state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;
}

/**
 * Admission rule write result and affected principals.
 */
export interface AdmissionRuleUpsertResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Deployments whose Access Control mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * Existing principals reconciled against the updated admission policy.
   */
  reconciled_principal_ids: Array<string>;

  /**
   * Admission rule created, updated, or archived.
   */
  rule_id: string;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Whether persisted Access Control state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;
}

export interface AdmissionRuleArchiveParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Admission rule ID to archive.
   */
  rule_id: string;

  /**
   * Organization scope containing the admission rule.
   */
  scope_id: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export interface AdmissionRuleUpsertParams {
  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by Access Control.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Whether matching users are allowed or denied.
   */
  effect: 'allow' | 'deny';

  /**
   * Organization scope governed by the admission rule.
   */
  scope_id: string;

  /**
   * Whether the rule matches one exact email or an email domain.
   */
  subject_type: 'email' | 'domain';

  /**
   * Normalized email address or domain matched by the rule.
   */
  subject_value: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;

  /**
   * Optional administrative reason for the rule.
   */
  reason?: string | null;
}

export declare namespace AdmissionRules {
  export {
    type AdmissionRuleArchiveResponse as AdmissionRuleArchiveResponse,
    type AdmissionRuleUpsertResponse as AdmissionRuleUpsertResponse,
    type AdmissionRuleArchiveParams as AdmissionRuleArchiveParams,
    type AdmissionRuleUpsertParams as AdmissionRuleUpsertParams,
  };
}
