// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Invitations extends APIResource {
  /**
   * Creates an invitation to a tenant or one exact resource.
   */
  create(
    tenantID: string,
    params: InvitationCreateParams,
    options?: RequestOptions,
  ): APIPromise<InvitationCreateResponse> {
    const {
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.post(path`/v1/iam/tenants/${tenantID}/invitations`, {
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
   * Returns a filtered page of pending tenant and resource invitations.
   */
  list(
    tenantID: string,
    params: InvitationListParams,
    options?: RequestOptions,
  ): APIPromise<InvitationListResponse> {
    const {
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...query
    } = params;
    return this._client.get(path`/v1/iam/tenants/${tenantID}/invitations`, {
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
   * Revokes one pending tenant or resource invitation.
   */
  revoke(
    invitationID: string,
    params: InvitationRevokeParams,
    options?: RequestOptions,
  ): APIPromise<InvitationRevokeResponse> {
    const {
      tenant_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
    } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/invitations/${invitationID}`, {
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
 * Created tenant or resource invitation.
 */
export type InvitationCreateResponse =
  | InvitationCreateResponse.UnionMember0
  | InvitationCreateResponse.UnionMember1;

export namespace InvitationCreateResponse {
  /**
   * Created tenant invitation.
   */
  export interface UnionMember0 {
    /**
     * One-time secret invitation token.
     */
    token: string;

    /**
     * URL the invited user can open to accept.
     */
    accept_url: string;

    /**
     * Email address of the invited user.
     */
    email: string;

    /**
     * Invitation expiry timestamp.
     */
    expires_at: string;

    /**
     * Role grants created on acceptance.
     */
    grants: Array<UnionMember0.Grant>;

    /**
     * Created tenant invitation ID.
     */
    invitation_id: string;

    /**
     * Projection IDs scheduled to receive the updated IAM state.
     */
    projection_ids: Array<string>;

    /**
     * IAM source version after the operation.
     */
    source_version: number;

    /**
     * Tenant invitation target.
     */
    target: UnionMember0.Target;

    /**
     * Tenant receiving the invited user.
     */
    tenant_id: string;
  }

  export namespace UnionMember0 {
    /**
     * Role grant created when the invitation is accepted.
     */
    export interface Grant {
      /**
       * Pending role conferral ID.
       */
      conferral_id: string;

      /**
       * Grant expiry, or null for a permanent grant.
       */
      expires_at: string | null;

      /**
       * IAM role granted on acceptance.
       */
      role_id: string;

      /**
       * Identifies a role grant.
       */
      type: 'role';
    }

    /**
     * Tenant invitation target.
     */
    export interface Target {
      /**
       * Invitation to the tenant.
       */
      type: 'tenant';
    }
  }

  /**
   * Created resource invitation.
   */
  export interface UnionMember1 {
    /**
     * One-time secret invitation token.
     */
    token: string;

    /**
     * URL the invited user can open to accept.
     */
    accept_url: string;

    /**
     * Email address of the invited user.
     */
    email: string;

    /**
     * Invitation expiry timestamp.
     */
    expires_at: string;

    /**
     * Role or permission grant created on acceptance.
     */
    grant: UnionMember1.UnionMember0 | UnionMember1.UnionMember1;

    /**
     * Created resource invitation ID.
     */
    invitation_id: string;

    /**
     * Projection IDs scheduled to receive the updated IAM state.
     */
    projection_ids: Array<string>;

    /**
     * IAM source version after the operation.
     */
    source_version: number;

    /**
     * Resource invitation target.
     */
    target: UnionMember1.Target;

    /**
     * Tenant containing the invited resource.
     */
    tenant_id: string;
  }

  export namespace UnionMember1 {
    export interface UnionMember0 {
      /**
       * Pending role conferral ID.
       */
      conferral_id: string;

      /**
       * Grant expiry, or null for a permanent grant.
       */
      expires_at: string | null;

      /**
       * IAM role granted on acceptance.
       */
      role_id: string;

      /**
       * Identifies a role grant.
       */
      type: 'role';
    }

    export interface UnionMember1 {
      /**
       * Pending permission conferral ID.
       */
      conferral_id: string;

      /**
       * Resource invitations grant the permission.
       */
      effect: 'allow';

      /**
       * Grant expiry, or null for a permanent grant.
       */
      expires_at: string | null;

      /**
       * IAM permission granted on acceptance.
       */
      permission_id: string;

      /**
       * Stable IAM permission key.
       */
      permission_key: string;

      /**
       * Identifies a direct permission grant.
       */
      type: 'permission';
    }

    /**
     * Resource invitation target.
     */
    export interface Target {
      /**
       * Exact application resource ID.
       */
      resource_id: string;

      /**
       * Canonical app resource type, such as app.projects.
       */
      resource_type: string;

      /**
       * Invitation to one exact resource.
       */
      type: 'resource';

      /**
       * Whether the access entry applies only to this resource or also to descendants
       * authorized through it.
       */
      applies_to?: 'self' | 'self_and_descendants';
    }
  }
}

/**
 * Cursor-paginated pending invitations in one tenant.
 */
export interface InvitationListResponse {
  /**
   * Pending tenant and resource invitations.
   */
  invitations: Array<InvitationListResponse.UnionMember0 | InvitationListResponse.UnionMember1>;

  /**
   * Tenant whose invitations were returned.
   */
  tenant_id: string;

  /**
   * Cursor for the next invitation page.
   */
  next_cursor?: string;
}

export namespace InvitationListResponse {
  /**
   * Pending tenant invitation.
   */
  export interface UnionMember0 {
    /**
     * Invitation creation timestamp.
     */
    created_at: string;

    /**
     * Email address of the invited user.
     */
    email: string;

    /**
     * Invitation expiry timestamp.
     */
    expires_at: string;

    /**
     * Role grants created on acceptance.
     */
    grants: Array<UnionMember0.Grant>;

    /**
     * Tenant invitation ID.
     */
    invitation_id: string;

    /**
     * Tenant invitation target.
     */
    target: UnionMember0.Target;

    /**
     * Invitation last-updated timestamp.
     */
    updated_at: string;
  }

  export namespace UnionMember0 {
    /**
     * Role grant created when the invitation is accepted.
     */
    export interface Grant {
      /**
       * Pending role conferral ID.
       */
      conferral_id: string;

      /**
       * Grant expiry, or null for a permanent grant.
       */
      expires_at: string | null;

      /**
       * IAM role granted on acceptance.
       */
      role_id: string;

      /**
       * Identifies a role grant.
       */
      type: 'role';
    }

    /**
     * Tenant invitation target.
     */
    export interface Target {
      /**
       * Invitation to the tenant.
       */
      type: 'tenant';
    }
  }

  /**
   * Pending resource invitation.
   */
  export interface UnionMember1 {
    /**
     * Invitation creation timestamp.
     */
    created_at: string;

    /**
     * Email address of the invited user.
     */
    email: string;

    /**
     * Invitation expiry timestamp.
     */
    expires_at: string;

    /**
     * Role or permission grant created on acceptance.
     */
    grant: UnionMember1.UnionMember0 | UnionMember1.UnionMember1;

    /**
     * Resource invitation ID.
     */
    invitation_id: string;

    /**
     * Resource invitation target.
     */
    target: UnionMember1.Target;

    /**
     * Invitation last-updated timestamp.
     */
    updated_at: string;
  }

  export namespace UnionMember1 {
    export interface UnionMember0 {
      /**
       * Pending role conferral ID.
       */
      conferral_id: string;

      /**
       * Grant expiry, or null for a permanent grant.
       */
      expires_at: string | null;

      /**
       * IAM role granted on acceptance.
       */
      role_id: string;

      /**
       * Identifies a role grant.
       */
      type: 'role';
    }

    export interface UnionMember1 {
      /**
       * Pending permission conferral ID.
       */
      conferral_id: string;

      /**
       * Resource invitations grant the permission.
       */
      effect: 'allow';

      /**
       * Grant expiry, or null for a permanent grant.
       */
      expires_at: string | null;

      /**
       * IAM permission granted on acceptance.
       */
      permission_id: string;

      /**
       * Stable IAM permission key.
       */
      permission_key: string;

      /**
       * Identifies a direct permission grant.
       */
      type: 'permission';
    }

    /**
     * Resource invitation target.
     */
    export interface Target {
      /**
       * Exact application resource ID.
       */
      resource_id: string;

      /**
       * Canonical app resource type, such as app.projects.
       */
      resource_type: string;

      /**
       * Invitation to one exact resource.
       */
      type: 'resource';

      /**
       * Whether the access entry applies only to this resource or also to descendants
       * authorized through it.
       */
      applies_to?: 'self' | 'self_and_descendants';
    }
  }
}

/**
 * Revoked tenant or resource invitation.
 */
export interface InvitationRevokeResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Revoked invitation ID.
   */
  invitation_id: string;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * Whether the invitation was revoked.
   */
  revoked: boolean;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

export type InvitationCreateParams = InvitationCreateParams.Variant0 | InvitationCreateParams.Variant1;

export declare namespace InvitationCreateParams {
  export interface Variant0 {
    /**
     * Body param: Email address of the invited user.
     */
    email: string;

    /**
     * Body param: Tenant invitation target.
     */
    target: Variant0.Target;

    /**
     * Header param: Authority used for this operation: service or user.
     */
    'X-Hercules-IAM-Actor': 'service' | 'user';

    /**
     * Body param: Invitation expiry timestamp. The service default is used when
     * omitted.
     */
    expires_at?: string;

    /**
     * Body param: Role grants created on acceptance. The permanent tenant default is
     * used when omitted.
     */
    grants?: Array<Variant0.Grant>;

    /**
     * Header param: Signed Hercules Auth ID token. Required for user and omitted for
     * service.
     */
    'X-Hercules-User-ID-Token'?: string;
  }

  export namespace Variant0 {
    /**
     * Tenant invitation target.
     */
    export interface Target {
      /**
       * Invite the user to the tenant.
       */
      type: 'tenant';
    }

    /**
     * One direct role grant.
     */
    export interface Grant {
      /**
       * Role conferred by this grant.
       */
      role: Grant.ID | Grant.Key;

      /**
       * Grant expiry, or null for a permanent grant.
       */
      expires_at?: string | null;
    }

    export namespace Grant {
      export interface ID {
        /**
         * Existing IAM role ID.
         */
        id: string;
      }

      export interface Key {
        /**
         * Stable role key from the deployment's IAM catalog.
         */
        key: string;
      }
    }
  }

  export interface Variant1 {
    /**
     * Body param: Email address of the invited user.
     */
    email: string;

    /**
     * Body param: Exactly one role or permission grant created on acceptance.
     */
    grant: Variant1.UnionMember0 | Variant1.UnionMember1;

    /**
     * Body param: Resource invitation target.
     */
    target: Variant1.Target;

    /**
     * Header param: Authority used for this operation: service or user.
     */
    'X-Hercules-IAM-Actor': 'service' | 'user';

    /**
     * Body param: Invitation expiry timestamp. The service default is used when
     * omitted.
     */
    expires_at?: string;

    /**
     * Header param: Signed Hercules Auth ID token. Required for user and omitted for
     * service.
     */
    'X-Hercules-User-ID-Token'?: string;
  }

  export namespace Variant1 {
    /**
     * One direct role grant.
     */
    export interface UnionMember0 {
      /**
       * Role conferred by this grant.
       */
      role: UnionMember0.ID | UnionMember0.Key;

      /**
       * Grant expiry, or null for a permanent grant.
       */
      expires_at?: string | null;
    }

    export namespace UnionMember0 {
      export interface ID {
        /**
         * Existing IAM role ID.
         */
        id: string;
      }

      export interface Key {
        /**
         * Stable role key from the deployment's IAM catalog.
         */
        key: string;
      }
    }

    /**
     * Direct permission grant created on the resource when accepted.
     */
    export interface UnionMember1 {
      /**
       * Permission granted on the resource.
       */
      permission_key: string;

      /**
       * Grant expiry, or null for a permanent grant.
       */
      expires_at?: string | null;
    }

    /**
     * Resource invitation target.
     */
    export interface Target {
      /**
       * Hercules IAM identifier.
       */
      resource_id: string;

      /**
       * Canonical app resource type, such as app.projects.
       */
      resource_type: string;

      /**
       * Invite the user to one exact resource.
       */
      type: 'resource';

      /**
       * Whether the access entry applies only to this resource or also to descendants
       * authorized through it.
       */
      applies_to?: 'self' | 'self_and_descendants';
    }
  }
}

export interface InvitationListParams {
  /**
   * Header param: Authority used for this operation: service or user.
   */
  'X-Hercules-IAM-Actor': 'service' | 'user';

  /**
   * Query param: Opaque cursor returned by the previous page.
   */
  cursor?: string;

  /**
   * Query param: Filter by exact invitation email.
   */
  email?: string;

  /**
   * Query param: Maximum number of records to return.
   */
  limit?: number;

  /**
   * Query param: Filter by exact resource ID.
   */
  resource_id?: string;

  /**
   * Query param: Filter by exact resource type.
   */
  resource_type?: string;

  /**
   * Query param: Filter by invitation target type.
   */
  target_type?: 'tenant' | 'resource';

  /**
   * Header param: Signed Hercules Auth ID token. Required for user and omitted for
   * service.
   */
  'X-Hercules-User-ID-Token'?: string;
}

export interface InvitationRevokeParams {
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

export declare namespace Invitations {
  export {
    type InvitationCreateResponse as InvitationCreateResponse,
    type InvitationListResponse as InvitationListResponse,
    type InvitationRevokeResponse as InvitationRevokeResponse,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationListParams as InvitationListParams,
    type InvitationRevokeParams as InvitationRevokeParams,
  };
}
