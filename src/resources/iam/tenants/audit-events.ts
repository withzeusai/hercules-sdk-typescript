// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AuditEvents extends APIResource {
  /**
   * Lists IAM audit events for a tenant, newest first.
   */
  list(
    tenantID: string,
    query: AuditEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuditEventListResponse> {
    return this._client.get(path`/v1/iam/tenants/${tenantID}/audit-events`, { query, ...options });
  }
}

/**
 * Paginated tenant IAM audit events.
 */
export interface AuditEventListResponse {
  /**
   * Audit event page.
   */
  data: Array<AuditEventListResponse.Data>;

  /**
   * Whether more records are available after this page.
   */
  has_more: boolean;
}

export namespace AuditEventListResponse {
  /**
   * One tenant IAM audit event.
   */
  export interface Data {
    /**
     * Stable audit action key.
     */
    action: string;

    /**
     * The actor that produced the event.
     */
    actor_type: 'system' | 'platform_user' | 'app_user' | 'agent' | 'service';

    /**
     * Audit event ID.
     */
    audit_event_id: string;

    /**
     * Audit event creation timestamp.
     */
    created_at: string;

    /**
     * Additional structured audit metadata.
     */
    metadata: { [key: string]: unknown } | null;

    /**
     * Audit operation outcome.
     */
    outcome: 'success' | 'denied' | 'failure';

    /**
     * Stable reason code when recorded.
     */
    reason_code: string | null;

    /**
     * Target ID.
     */
    target_id: string;

    /**
     * Target type.
     */
    target_type: string;

    /**
     * Hercules IAM identifier.
     */
    tenant_id: string | null;
  }
}

export interface AuditEventListParams {
  /**
   * Return events strictly before this timestamp.
   */
  before?: string;

  /**
   * Maximum number of records to return. Defaults to 50.
   */
  limit?: number;

  /**
   * Cursor for forward pagination. Pass the ID of the last item from the previous
   * page.
   */
  starting_after?: string;
}

export declare namespace AuditEvents {
  export {
    type AuditEventListResponse as AuditEventListResponse,
    type AuditEventListParams as AuditEventListParams,
  };
}
