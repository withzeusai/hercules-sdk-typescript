// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Use the app connectors installed on the calling deployment. Requires a
 * deployment-bound API key. When several connections of one connector cover
 * the deployment, pass connection_id to select one.
 *
 * Pull credentials with `credentials` and call the provider yourself. For
 * connectors whose provider is reached through a broker that never
 * discloses the token, `credentials` answers 409 and `request` sends the
 * call instead, signed server-side.
 */
export class Connectors extends APIResource {
  /**
   * Returns fresh credentials for an SDK-delivery connector installed for the
   * calling deployment, refreshing the OAuth access token on demand. Requires a
   * deployment-bound API key; the connector must be installed for that deployment's
   * environment. When several connections of the connector cover the deployment,
   * connection_id selects one. Connectors whose provider withholds the credential
   * answer 409 — send requests through the connector request endpoint instead.
   */
  credentials(
    slug: string,
    query: ConnectorCredentialsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConnectorCredentialsResponse> {
    return this._client.get(path`/v1/connectors/${slug}/credentials`, { query, ...options });
  }

  /**
   * Sends an HTTP request to a connector's provider API as one of the app's
   * connected accounts, with credentials injected server-side — the app never
   * handles the token. Requires a deployment-bound API key; the connector must be
   * installed for that deployment's environment. Answers 200 whenever the request
   * reached the provider, with the provider's own status in the body.
   */
  request(
    slug: string,
    body: ConnectorRequestParams,
    options?: RequestOptions,
  ): APIPromise<ConnectorRequestResponse> {
    return this._client.post(path`/v1/connectors/${slug}/request`, { body, ...options });
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

export interface ConnectorRequestResponse {
  /**
   * ID of the connection the request was sent as.
   */
  connection_id: string;

  /**
   * The provider's response body.
   */
  data: unknown;

  /**
   * The provider's response headers, minus credential-bearing ones.
   */
  headers: { [key: string]: string };

  /**
   * The connector's catalog slug.
   */
  slug: string;

  /**
   * The provider's HTTP status code. A 4xx or 5xx here is a completed call the
   * provider rejected, not a Hercules error — this endpoint answers 200 whenever the
   * request reached the provider.
   */
  status: number;
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

export interface ConnectorRequestParams {
  /**
   * Path on the provider's API, e.g. /me/accounts. Resolved against the provider's
   * base URL. Absolute URLs and host-bearing paths are rejected.
   */
  endpoint: string;

  /**
   * HTTP method to call the provider with.
   */
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

  /**
   * JSON request body. Omit for GET and DELETE.
   */
  body?: unknown;

  /**
   * ID of the connection to send the request as. Required when several connections
   * of this connector cover the calling deployment.
   */
  connection_id?: string;

  /**
   * Extra request headers. Authentication headers are added by Hercules.
   */
  headers?: { [key: string]: string };

  /**
   * Query-string parameters to append to the request.
   */
  query?: { [key: string]: string };
}

export declare namespace Connectors {
  export {
    type ConnectorCredentialsResponse as ConnectorCredentialsResponse,
    type ConnectorRequestResponse as ConnectorRequestResponse,
    type ConnectorCredentialsParams as ConnectorCredentialsParams,
    type ConnectorRequestParams as ConnectorRequestParams,
  };
}
