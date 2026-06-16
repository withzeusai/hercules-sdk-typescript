// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Pull fresh credentials for SDK-delivery app connectors installed on the
 * calling deployment. Requires a deployment-bound API key. When several
 * connections of one connector cover the deployment, pass connection_id to
 * select one.
 */
export class Connectors extends APIResource {
  /**
   * Returns fresh credentials for an SDK-delivery connector installed for the
   * calling deployment, refreshing the OAuth access token on demand. Requires a
   * deployment-bound API key; the connector must be installed for that deployment's
   * environment. When several connections of the connector cover the deployment,
   * connection_id selects one.
   */
  credentials(
    slug: string,
    query: ConnectorCredentialsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConnectorCredentialsResponse> {
    return this._client.get(path`/v1/connectors/${slug}/credentials`, { query, ...options });
  }
}

export interface ConnectorCredentialsResponse {
  /**
   * How the connection authenticates with the provider.
   */
  auth_type: 'api_key' | 'oauth';

  /**
   * ID of the connection (the linked credential) the secrets came from.
   */
  connection_id: string;

  /**
   * The connector's credential delivery mode.
   */
  delivery_mode: 'sdk';

  /**
   * ISO timestamp when the access token expires; null when it does not expire. Cache
   * the secrets until shortly before this time, then fetch again.
   */
  expires_at: string | null;

  /**
   * Secret values keyed by their env-style names (e.g. GOOGLE_ACCESS_TOKEN).
   */
  secrets: { [key: string]: string };

  /**
   * The connector's catalog slug.
   */
  slug: string;
}

export interface ConnectorCredentialsParams {
  /**
   * ID of the connection (the linked credential) to read. When omitted, resolves the
   * connection installed for the calling deployment. When set, the calling
   * deployment must be linked to exactly this connection — unlinking it in the
   * dashboard invalidates the ID.
   */
  connection_id?: string;
}

export declare namespace Connectors {
  export {
    type ConnectorCredentialsResponse as ConnectorCredentialsResponse,
    type ConnectorCredentialsParams as ConnectorCredentialsParams,
  };
}
