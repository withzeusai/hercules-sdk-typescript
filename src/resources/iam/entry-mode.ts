// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class EntryMode extends APIResource {
  /**
   * Sets a scope's account entry mode: open, allowlisted-only, invite-only, or
   * approval-required.
   */
  set(body: EntryModeSetParams, options?: RequestOptions): APIPromise<EntryModeSetResponse> {
    return this._client.post('/v1/iam/entry-mode/set', { body, ...options });
  }
}

/**
 * Result of changing a scope's account entry mode.
 */
export interface EntryModeSetResponse {
  /**
   * Scope changed by the operation.
   */
  access_scope_id: string;

  /**
   * Admission policy after the operation.
   */
  account_entry_mode: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

  /**
   * Admission policy before the operation.
   */
  previous_account_entry_mode: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

  /**
   * Deployments whose IAM mirrors must receive this change.
   */
  projection_ids: Array<string>;

  /**
   * Existing principals reconciled against the new admission policy.
   */
  reconciled_principal_ids: Array<string>;

  /**
   * New deployment source version after the operation.
   */
  source_version: number;

  /**
   * Whether persisted IAM state changed.
   */
  changed?: boolean;

  /**
   * Whether the operation created a new entity.
   */
  created?: boolean;
}

export interface EntryModeSetParams {
  /**
   * Admission policy for the scope: open access, allowlist-only access,
   * invitation-only access, or approval-required access.
   */
  account_entry_mode: 'open' | 'allowlisted_only' | 'invite_only' | 'approval_required';

  /**
   * Authority used for the operation. Use service for trusted backend administration
   * or app_user for an end-user action authorized by IAM.
   */
  actor_mode: 'service' | 'app_user';

  /**
   * Scope whose admission policy will change.
   */
  scope_id: string;

  /**
   * Signed Hercules Auth ID token for actor_mode app_user. Omit this field for
   * actor_mode service.
   */
  id_token?: string;
}

export declare namespace EntryMode {
  export { type EntryModeSetResponse as EntryModeSetResponse, type EntryModeSetParams as EntryModeSetParams };
}
