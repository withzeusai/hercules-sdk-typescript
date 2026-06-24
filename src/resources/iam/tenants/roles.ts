// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Roles extends APIResource {
  /**
   * Creates a tenant-owned IAM role with its initial permission set.
   */
  create(
    tenantID: string,
    params: RoleCreateParams,
    options?: RequestOptions,
  ): APIPromise<RoleCreateResponse> {
    const {
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.post(path`/v1/iam/tenants/${tenantID}/roles`, {
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
   * Updates role metadata or replaces its complete permission set.
   */
  update(roleID: string, params: RoleUpdateParams, options?: RequestOptions): APIPromise<RoleUpdateResponse> {
    const {
      tenant_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.patch(path`/v1/iam/tenants/${tenant_id}/roles/${roleID}`, {
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
   * Archives one tenant-owned IAM role.
   */
  archive(
    roleID: string,
    params: RoleArchiveParams,
    options?: RequestOptions,
  ): APIPromise<RoleArchiveResponse> {
    const {
      tenant_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
    } = params;
    return this._client.delete(path`/v1/iam/tenants/${tenant_id}/roles/${roleID}`, {
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
   * Lists roles the actor may grant to a user or group at one exact target.
   */
  evaluateGrantability(
    tenantID: string,
    params: RoleEvaluateGrantabilityParams,
    options?: RequestOptions,
  ): APIPromise<RoleEvaluateGrantabilityResponse> {
    const {
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.post(path`/v1/iam/tenants/${tenantID}/roles/evaluate-grantability`, {
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
   * Returns tenant-specific permission overrides for one IAM role.
   */
  listPermissionOverrides(
    roleID: string,
    params: RoleListPermissionOverridesParams,
    options?: RequestOptions,
  ): APIPromise<RoleListPermissionOverridesResponse> {
    const {
      tenant_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
    } = params;
    return this._client.get(path`/v1/iam/tenants/${tenant_id}/roles/${roleID}/permission-overrides`, {
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
   * Replaces the complete tenant-specific permission override set for a role.
   */
  replacePermissionOverrides(
    roleID: string,
    params: RoleReplacePermissionOverridesParams,
    options?: RequestOptions,
  ): APIPromise<RoleReplacePermissionOverridesResponse> {
    const {
      tenant_id,
      'X-Hercules-IAM-Actor': xHerculesIamActor,
      'X-Hercules-User-ID-Token': xHerculesUserIDToken,
      ...body
    } = params;
    return this._client.put(path`/v1/iam/tenants/${tenant_id}/roles/${roleID}/permission-overrides`, {
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
}

/**
 * Created tenant-owned role.
 */
export interface RoleCreateResponse {
  /**
   * Confirms that the role was created.
   */
  created: true;

  /**
   * Complete permission key set on the created role.
   */
  permission_keys: Array<string>;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * Created tenant role ID.
   */
  role_id: string;

  /**
   * Stable key of the created tenant role.
   */
  role_key: string;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant owning the created role.
   */
  tenant_id: string;
}

/**
 * Updated tenant-owned role.
 */
export interface RoleUpdateResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * Tenant role changed by the operation.
   */
  role_id: string;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;

  /**
   * Complete permission key set when permissions were replaced.
   */
  permission_keys?: Array<string>;
}

/**
 * Result of changing a tenant role.
 */
export interface RoleArchiveResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * Tenant role changed by the operation.
   */
  role_id: string;

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
 * Grantable IAM roles for one exact target.
 */
export interface RoleEvaluateGrantabilityResponse {
  /**
   * Roles the actor may grant.
   */
  roles: Array<RoleEvaluateGrantabilityResponse.Role>;

  /**
   * Tenant used for the grantability decision.
   */
  tenant_id: string;
}

export namespace RoleEvaluateGrantabilityResponse {
  /**
   * One role the actor may grant at the requested target.
   */
  export interface Role {
    /**
     * Grantable IAM role ID.
     */
    role_id: string;

    /**
     * Stable IAM role key.
     */
    role_key: string;

    /**
     * Whether the role is system or custom.
     */
    role_kind: 'system' | 'custom';

    /**
     * Human-readable IAM role name.
     */
    role_name: string;

    /**
     * Whether the role is reusable across tenants.
     */
    shared: boolean;
  }
}

/**
 * Tenant-specific permission overrides for one IAM role.
 */
export interface RoleListPermissionOverridesResponse {
  /**
   * Complete tenant-specific permission override set for the role.
   */
  overrides: Array<RoleListPermissionOverridesResponse.Override>;

  /**
   * IAM role whose overrides were returned.
   */
  role_id: string;

  /**
   * Tenant containing the role overrides.
   */
  tenant_id: string;
}

export namespace RoleListPermissionOverridesResponse {
  /**
   * One tenant-specific role permission override.
   */
  export interface Override {
    /**
     * Whether the permission is allowed or denied.
     */
    effect: 'allow' | 'deny';

    /**
     * IAM permission ID.
     */
    permission_id: string;

    /**
     * Stable IAM permission key.
     */
    permission_key: string;
  }
}

/**
 * Result of changing a tenant role.
 */
export interface RoleReplacePermissionOverridesResponse {
  /**
   * Whether persisted IAM state changed.
   */
  changed: boolean;

  /**
   * Projection IDs scheduled to receive the updated IAM state.
   */
  projection_ids: Array<string>;

  /**
   * Tenant role changed by the operation.
   */
  role_id: string;

  /**
   * IAM source version after the operation.
   */
  source_version: number;

  /**
   * Tenant changed by the operation.
   */
  tenant_id: string;
}

export interface RoleCreateParams {
  /**
   * Body param: Stable tenant role key.
   */
  key: string;

  /**
   * Body param: Human-readable role name.
   */
  name: string;

  /**
   * Header param: Authority used for this operation: service or user.
   */
  'X-Hercules-IAM-Actor': 'service' | 'user';

  /**
   * Body param: Optional role description.
   */
  description?: string | null;

  /**
   * Body param: Complete initial permission set for the role.
   */
  permission_keys?: Array<string>;

  /**
   * Header param: Signed Hercules Auth ID token. Required for user and omitted for
   * service.
   */
  'X-Hercules-User-ID-Token'?: string;
}

export type RoleUpdateParams =
  | RoleUpdateParams.Variant0
  | RoleUpdateParams.Variant1
  | RoleUpdateParams.Variant2;

export declare namespace RoleUpdateParams {
  export interface Variant0 {
    /**
     * Path param
     */
    tenant_id: string;

    /**
     * Body param: New role name.
     */
    name: string;

    /**
     * Header param: Authority used for this operation: service or user.
     */
    'X-Hercules-IAM-Actor': 'service' | 'user';

    /**
     * Body param: New role description, or null to clear it.
     */
    description?: string | null;

    /**
     * Body param: Complete replacement permission set for the role.
     */
    permission_keys?: Array<string>;

    /**
     * Header param: Signed Hercules Auth ID token. Required for user and omitted for
     * service.
     */
    'X-Hercules-User-ID-Token'?: string;
  }

  export interface Variant1 {
    /**
     * Path param
     */
    tenant_id: string;

    /**
     * Body param: New role description, or null to clear it.
     */
    description: string | null;

    /**
     * Header param: Authority used for this operation: service or user.
     */
    'X-Hercules-IAM-Actor': 'service' | 'user';

    /**
     * Body param: New role name.
     */
    name?: string;

    /**
     * Body param: Complete replacement permission set for the role.
     */
    permission_keys?: Array<string>;

    /**
     * Header param: Signed Hercules Auth ID token. Required for user and omitted for
     * service.
     */
    'X-Hercules-User-ID-Token'?: string;
  }

  export interface Variant2 {
    /**
     * Path param
     */
    tenant_id: string;

    /**
     * Body param: Complete replacement permission set for the role.
     */
    permission_keys: Array<string>;

    /**
     * Header param: Authority used for this operation: service or user.
     */
    'X-Hercules-IAM-Actor': 'service' | 'user';

    /**
     * Body param: New role description, or null to clear it.
     */
    description?: string | null;

    /**
     * Body param: New role name.
     */
    name?: string;

    /**
     * Header param: Signed Hercules Auth ID token. Required for user and omitted for
     * service.
     */
    'X-Hercules-User-ID-Token'?: string;
  }
}

export interface RoleArchiveParams {
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

export interface RoleEvaluateGrantabilityParams {
  /**
   * Body param: Recipient kind for the proposed grant.
   */
  subject_type: 'user' | 'group';

  /**
   * Body param: Exact tenant or resource target for the proposed role assignment.
   */
  target: RoleEvaluateGrantabilityParams.Type | RoleEvaluateGrantabilityParams.UnionMember1;

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

export namespace RoleEvaluateGrantabilityParams {
  export interface Type {
    /**
     * Evaluate a tenant-level role assignment.
     */
    type: 'tenant';
  }

  export interface UnionMember1 {
    /**
     * Hercules IAM identifier.
     */
    resource_id: string;

    /**
     * Canonical app resource type, such as app.projects.
     */
    resource_type: string;

    /**
     * Evaluate a resource-level role grant.
     */
    type: 'resource';

    /**
     * Whether the access entry applies only to this resource or also to descendants
     * authorized through it.
     */
    applies_to?: 'self' | 'self_and_descendants';
  }
}

export interface RoleListPermissionOverridesParams {
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

export interface RoleReplacePermissionOverridesParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Body param: Complete desired role permission override set. An empty array clears
   * all overrides.
   */
  overrides: Array<RoleReplacePermissionOverridesParams.Override>;

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

export namespace RoleReplacePermissionOverridesParams {
  /**
   * One direct permission override.
   */
  export interface Override {
    /**
     * Whether the permission is allowed or denied.
     */
    effect: 'allow' | 'deny';

    /**
     * Permission changed by this override.
     */
    permission_key: string;
  }
}

export declare namespace Roles {
  export {
    type RoleCreateResponse as RoleCreateResponse,
    type RoleUpdateResponse as RoleUpdateResponse,
    type RoleArchiveResponse as RoleArchiveResponse,
    type RoleEvaluateGrantabilityResponse as RoleEvaluateGrantabilityResponse,
    type RoleListPermissionOverridesResponse as RoleListPermissionOverridesResponse,
    type RoleReplacePermissionOverridesResponse as RoleReplacePermissionOverridesResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleArchiveParams as RoleArchiveParams,
    type RoleEvaluateGrantabilityParams as RoleEvaluateGrantabilityParams,
    type RoleListPermissionOverridesParams as RoleListPermissionOverridesParams,
    type RoleReplacePermissionOverridesParams as RoleReplacePermissionOverridesParams,
  };
}
