// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as GrantsAPI from './grants';
import { Grants } from './grants';
import * as PermissionOverridesAPI from './permission-overrides';
import { PermissionOverrides } from './permission-overrides';

export class Resources extends APIResource {
  grants: GrantsAPI.Grants = new GrantsAPI.Grants(this._client);
  permissionOverrides: PermissionOverridesAPI.PermissionOverrides =
    new PermissionOverridesAPI.PermissionOverrides(this._client);
}

Resources.Grants = Grants;
Resources.PermissionOverrides = PermissionOverrides;

export declare namespace Resources {
  export { Grants as Grants };

  export { PermissionOverrides as PermissionOverrides };
}
