// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as GrantsAPI from './grants';
import {
  GrantCreateParams,
  GrantCreateResponse,
  GrantUpdateParams,
  GrantUpdateResponse,
  Grants,
} from './grants';
import * as PermissionOverridesAPI from './permission-overrides';
import {
  PermissionOverrideUpdateParams,
  PermissionOverrideUpdateResponse,
  PermissionOverrides,
} from './permission-overrides';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Resources extends APIResource {
  grants: GrantsAPI.Grants = new GrantsAPI.Grants(this._client);
  permissionOverrides: PermissionOverridesAPI.PermissionOverrides =
    new PermissionOverridesAPI.PermissionOverrides(this._client);

  /**
   * Lists roles the actor may grant to a user or group on one exact resource.
   */
  accessGrantingRoles(
    resourceID: string,
    params: ResourceAccessGrantingRolesParams,
    options?: RequestOptions,
  ): APIPromise<ResourceAccessGrantingRolesResponse> {
    const { tenant_id, resource_type, ...query } = params;
    return this._client.get(
      path`/v1/iam/tenants/${tenant_id}/resources/${resource_type}/${resourceID}/access-granting-roles`,
      { query, ...options },
    );
  }
}

/**
 * Grantable IAM roles for one tenant or exact resource.
 */
export interface ResourceAccessGrantingRolesResponse {
  /**
   * Roles the actor may grant.
   */
  roles: Array<ResourceAccessGrantingRolesResponse.Role>;

  /**
   * Tenant used for the grantability decision.
   */
  tenant_id: string;
}

export namespace ResourceAccessGrantingRolesResponse {
  /**
   * One role the actor may grant for the requested tenant or resource.
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

export interface ResourceAccessGrantingRolesParams {
  /**
   * Path param
   */
  tenant_id: string;

  /**
   * Path param
   */
  resource_type: string;

  /**
   * Query param: Recipient kind for the proposed grant.
   */
  subject_type: 'user' | 'group';

  /**
   * Query param: Convex identity tokenIdentifier asserted by the trusted app
   * backend.
   */
  user_token_identifier: string | null;

  /**
   * Query param: Whether the grant applies only to this resource or also to
   * descendants authorized through it.
   */
  applies_to?: 'self' | 'self_and_descendants';
}

Resources.Grants = Grants;
Resources.PermissionOverrides = PermissionOverrides;

export declare namespace Resources {
  export {
    type ResourceAccessGrantingRolesResponse as ResourceAccessGrantingRolesResponse,
    type ResourceAccessGrantingRolesParams as ResourceAccessGrantingRolesParams,
  };

  export {
    Grants as Grants,
    type GrantCreateResponse as GrantCreateResponse,
    type GrantUpdateResponse as GrantUpdateResponse,
    type GrantCreateParams as GrantCreateParams,
    type GrantUpdateParams as GrantUpdateParams,
  };

  export {
    PermissionOverrides as PermissionOverrides,
    type PermissionOverrideUpdateResponse as PermissionOverrideUpdateResponse,
    type PermissionOverrideUpdateParams as PermissionOverrideUpdateParams,
  };
}
