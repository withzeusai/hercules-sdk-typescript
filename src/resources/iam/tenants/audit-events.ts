// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AuditEvents extends APIResource {
  /**
   * Lists IAM management and access events for a tenant, with filters for time,
   * action, status, user, and target. Routine access checks are included only when
   * `action=access.account_entry.evaluate` is requested.
   */
  list(
    tenantID: string,
    query: AuditEventListParams,
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
   * Whether more audit events are available after this page.
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
     * Public identity of the actor that produced the audit event.
     */
    actor:
      | Data.IamAuditUserActor
      | Data.IamAuditPlatformUserActor
      | Data.IamAuditServiceActor
      | Data.IamAuditSystemActor
      | Data.IamAuditAgentActor;

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
     * Stable reason code when one was recorded.
     */
    reason_code: string | null;

    /**
     * Request ID associated with the operation.
     */
    request_id: string | null;

    /**
     * IAM source version after the operation. Before relying on Convex IAM mirror
     * reads, wait for each returned projection to reach at least this version.
     */
    source_version: number | null;

    /**
     * Audit operation status.
     */
    status: 'success' | 'denied' | 'failure';

    /**
     * Entity affected by the audit event.
     */
    target: Data.Target;
  }

  export namespace Data {
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
   * The signed-in actor's Convex identity tokenIdentifier, passed unchanged by the
   * trusted app backend.
   */
  actor_token_identifier: string | null;

  /**
   * Filter by exact audit action.
   */
  action?: string;

  /**
   * Filter by public actor type.
   */
  actor_type?: 'system' | 'platform_user' | 'user' | 'agent' | 'service';

  /**
   * Filter by service API key ID.
   */
  api_key_id?: string;

  /**
   * Return events at or before this timestamp.
   */
  end_time?: string;

  /**
   * Maximum number of records to return. Defaults to 50.
   */
  limit?: number;

  /**
   * Return events at or after this timestamp.
   */
  start_time?: string;

  /**
   * Cursor for forward pagination. Pass the ID of the last item from the previous
   * page.
   */
  starting_after?: string;

  /**
   * Filter by status.
   */
  status?: 'success' | 'denied' | 'failure';

  /**
   * Filter by target ID.
   */
  target_id?: string;

  /**
   * Filter by target type.
   */
  target_type?: string;

  /**
   * Filter by user ID.
   */
  user_id?: string;
}

export declare namespace AuditEvents {
  export {
    type AuditEventListResponse as AuditEventListResponse,
    type AuditEventListParams as AuditEventListParams,
  };
}
