// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AuditEvents extends APIResource {
  /**
   * Returns a filtered page of IAM audit events for one tenant.
   */
  list(
    tenantID: string,
    params: AuditEventListParams,
    options?: RequestOptions,
  ): APIPromise<AuditEventListResponse> {
    const {
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...query
    } = params;
    return this._client.get(path`/v1/iam/tenants/${tenantID}/audit-events`, {
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
}

/**
 * Cursor-paginated tenant IAM audit events.
 */
export interface AuditEventListResponse {
  /**
   * Audit event page.
   */
  audit_events: Array<AuditEventListResponse.AuditEvent>;

  /**
   * Tenant whose audit events were returned.
   */
  tenant_id: string;

  /**
   * Cursor for the next page.
   */
  next_cursor?: string;
}

export namespace AuditEventListResponse {
  /**
   * One tenant IAM audit event.
   */
  export interface AuditEvent {
    /**
     * Stable audit action key.
     */
    action: string;

    /**
     * Public identity of the actor that produced the audit event.
     */
    actor:
      | AuditEvent.IamAuditUserActor
      | AuditEvent.IamAuditPlatformUserActor
      | AuditEvent.IamAuditServiceActor
      | AuditEvent.IamAuditSystemActor
      | AuditEvent.IamAuditAgentActor;

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
     * Stable reason code when one was recorded.
     */
    reason_code: string | null;

    /**
     * Request ID associated with the operation.
     */
    request_id: string | null;

    /**
     * IAM source version after the operation.
     */
    source_version: number | null;

    /**
     * Entity affected by the audit event.
     */
    target: AuditEvent.Target;
  }

  export namespace AuditEvent {
    export interface IamAuditUserActor {
      /**
       * Tenant user actor.
       */
      type: 'user';

      /**
       * Hercules IAM identifier.
       */
      user_id: string | null;

      /**
       * User email address when available.
       */
      email?: string | null;

      /**
       * User display name when available.
       */
      name?: string | null;
    }

    export interface IamAuditPlatformUserActor {
      /**
       * Hercules IAM identifier.
       */
      platform_user_id: string | null;

      /**
       * Hercules platform user actor.
       */
      type: 'platform_user';

      /**
       * Platform user email when available.
       */
      email?: string | null;

      /**
       * Platform user display name when available.
       */
      name?: string | null;
    }

    export interface IamAuditServiceActor {
      /**
       * Hercules IAM identifier.
       */
      api_key_id: string | null;

      /**
       * Service API key actor.
       */
      type: 'service';

      /**
       * Service actor email when available.
       */
      email?: string | null;

      /**
       * Service actor name when available.
       */
      name?: string | null;
    }

    export interface IamAuditSystemActor {
      /**
       * Hercules system actor.
       */
      type: 'system';
    }

    export interface IamAuditAgentActor {
      /**
       * Hercules agent actor.
       */
      type: 'agent';
    }

    /**
     * Entity affected by the audit event.
     */
    export interface Target {
      /**
       * Target ID.
       */
      id: string;

      /**
       * Target type.
       */
      type: string;
    }
  }
}

export interface AuditEventListParams {
  /**
   * Header param: Authority used for this operation: service or user.
   */
  'X-Hercules-IAM-Actor': 'service' | 'user';

  /**
   * Query param: Filter by exact audit action.
   */
  action?: string;

  /**
   * Query param: Filter by public actor type.
   */
  actor_type?: 'system' | 'platform_user' | 'user' | 'agent' | 'service';

  /**
   * Query param: Filter by service API key ID.
   */
  api_key_id?: string;

  /**
   * Query param: Opaque cursor returned by the previous page.
   */
  cursor?: string;

  /**
   * Query param: Maximum number of records to return.
   */
  limit?: number;

  /**
   * Query param: Filter by outcome.
   */
  outcome?: 'success' | 'denied' | 'failure';

  /**
   * Query param: Return events at or after this timestamp.
   */
  since?: string;

  /**
   * Query param: Filter by target ID.
   */
  target_id?: string;

  /**
   * Query param: Filter by target type.
   */
  target_type?: string;

  /**
   * Query param: Return events at or before this timestamp.
   */
  until?: string;

  /**
   * Query param: Filter by Hercules Auth user ID.
   */
  user_id?: string;

  /**
   * Header param: Signed Hercules Auth ID token. Required for user and omitted for
   * service.
   */
  'X-Hercules-User-ID-Token'?: string;
}

export declare namespace AuditEvents {
  export {
    type AuditEventListResponse as AuditEventListResponse,
    type AuditEventListParams as AuditEventListParams,
  };
}
