// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../../core/pagination';
import type { RequestOptions } from '../../../internal/request-options';
import { path as __scalarPath } from '../../../internal/utils/path';

export class AuditEvents extends APIResource {
  /**
   * Lists IAM audit events for a tenant, newest first.
   *
   * @param {string} tenantID - The tenant ID. Pass `primary` to target the deployment's primary tenant.
   * @param {AuditEventListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<IamAuditEventsCursorIDPage, AuditEventListResponse>} The tenant IAM audit event page
   *
   * @example
   * ```ts
   * const page = await client.iam.tenants.auditEvents.list('tenantId');
   * ```
   */
  list(
    tenantID: string,
    query: AuditEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<IamAuditEventsCursorIDPage, AuditEventListResponse> {
    return this._client.getAPIList(
      __scalarPath`/v1/iam/tenants/${tenantID}/audit-events`,
      CursorIDPage<AuditEventListResponse>,
      { query, ...options },
    );
  }
}

export interface AuditEventListParams extends CursorIDPageParams {
  /**
   * Return events strictly before this timestamp.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  before?: string;
}

export interface AuditEventListResponse {
  /**
   * Audit event ID.
   * @minLength 1
   */
  audit_event_id: string;
  /**
   * Tenant attribution when present.
   * @minLength 1
   */
  tenant_id: string | null;
  /**
   * The actor that produced the event.
   */
  actor_type: 'system' | 'platform_user' | 'app_user' | 'agent' | 'service';
  /**
   * Stable audit action key.
   */
  action: string;
  /**
   * Target type.
   */
  target_type: string;
  /**
   * Target ID.
   */
  target_id: string;
  /**
   * Audit operation outcome.
   */
  outcome: 'success' | 'denied' | 'failure';
  /**
   * Stable reason code when recorded.
   */
  reason_code: string | null;
  /**
   * Additional structured audit metadata.
   */
  metadata: Record<string, unknown> | null;
  /**
   * Audit event creation timestamp.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created_at: string;
}

export type IamAuditEventsCursorIDPage = CursorIDPage<AuditEventListResponse>;
export declare namespace AuditEvents {
  export {
    type AuditEventListResponse as AuditEventListResponse,
    type IamAuditEventsCursorIDPage as IamAuditEventsCursorIDPage,
    type AuditEventListParams as AuditEventListParams,
  };
}
