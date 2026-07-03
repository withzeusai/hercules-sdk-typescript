// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PermissionOverridesAPI from './permission-overrides';
import { PermissionOverrides } from './permission-overrides';

export class Users extends APIResource {
  permissionOverrides: PermissionOverridesAPI.PermissionOverrides =
    new PermissionOverridesAPI.PermissionOverrides(this._client);
}

Users.PermissionOverrides = PermissionOverrides;

export declare namespace Users {
  export { PermissionOverrides as PermissionOverrides };
}
