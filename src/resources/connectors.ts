// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Connectors extends APIResource {
  /**
   * Returns fresh credentials for the named connection of a connector, refreshing the OAuth access token on demand. Requires a deployment-bound API key, and the connection must be installed for the calling deployment. Secrets are keyed by role: access_token, api_key, or a credential field key. Errors carry a code: connector_not_installed (404), connection_not_linked (404), connector_not_connected (409), credentials_unavailable (409, reconnect in the dashboard), connector_brokered (409, use the request endpoint).
   *
   * @param {string} slug - The connector's catalog slug.
   * @param {ConnectorCredentialsParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ConnectorCredentialsResponse>} The connector's secret values and their expiry
   *
   * @example
   * ```ts
   * const connector = await client.connectors.credentials('slug', {
   *   connection_id: 'connectionId',
   * });
   * ```
   */
  credentials(
    slug: string,
    query: ConnectorCredentialsParams,
    options?: RequestOptions,
  ): APIPromise<ConnectorCredentialsResponse> {
    return this._client.get(__scalarPath`/v1/connectors/${slug}/credentials`, { query, ...options });
  }

  /**
   * Sends an HTTP request to a connector's provider API as the named connection, with credentials added server-side; the app never handles the token. Requires a deployment-bound API key, and the connection must be installed for the calling deployment. Answers 200 whenever the request reached the provider, with the provider's own status in the body. Errors carry a code: connector_not_installed (404), connection_not_linked (404), connector_not_connected (409), connector_not_brokered (400, use the credentials endpoint), provider_unreachable (502).
   *
   * @param {string} slug - The connector's catalog slug.
   * @param {ConnectorRequestParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ConnectorRequestResponse>} The provider's response
   *
   * @example
   * ```ts
   * const connector = await client.connectors.request('slug', {
   *   endpoint: 'x',
   *   method: 'GET',
   *   connection_id: 'x',
   * });
   * ```
   */
  request(
    slug: string,
    body: ConnectorRequestParams,
    options?: RequestOptions,
  ): APIPromise<ConnectorRequestResponse> {
    return this._client.post(__scalarPath`/v1/connectors/${slug}/request`, { body, ...options });
  }
}

export interface ConnectorCredentialsParams {
  /**
   * ID of the connection (the linked credential) to read. Always required, so an app never silently moves to a different connection when a second one is linked. The calling deployment must be linked to exactly this connection; unlinking it in the dashboard invalidates the ID.
   * @minLength 1
   * @maxLength 50
   */
  connection_id: string;
}

export interface ConnectorCredentialsResponse {
  /**
   * The connector's catalog slug.
   */
  slug: string;
  /**
   * ID of the connection (the linked credential) the secrets came from.
   */
  connection_id: string;
  /**
   * How the connection authenticates with the provider.
   */
  auth_type: 'api_key' | 'oauth';
  /**
   * Secret values keyed by role: access_token for OAuth, api_key for a single pasted key, or the field key of a multi-field credential (e.g. access_key_id). Never includes a refresh token.
   */
  secrets: Record<string, string>;
  /**
   * ISO timestamp when the access token expires; null when it does not expire. Cache the secrets until shortly before this time, then fetch again.
   */
  expires_at: string | null;
}

export interface ConnectorRequestParams {
  /**
   * Path on the provider's API, e.g. /me/accounts. Resolved against the provider's base URL. Absolute URLs and host-bearing paths are rejected.
   * @minLength 1
   * @maxLength 2000
   */
  endpoint: string;
  /**
   * HTTP method to call the provider with.
   */
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  /**
   * ID of the connection to send the request as. Always required, so an app never silently moves to a different connection when a second one is linked.
   * @minLength 1
   * @maxLength 50
   */
  connection_id: string;
  /**
   * JSON request body. Omit for GET and DELETE.
   */
  body?: unknown;
  /**
   * Query-string parameters to append to the request.
   */
  query?: Record<string, string>;
  /**
   * Extra request headers. Authentication headers are added by Hercules.
   */
  headers?: Record<string, string>;
}

export interface ConnectorRequestResponse {
  /**
   * The connector's catalog slug.
   */
  slug: string;
  /**
   * ID of the connection the request was sent as.
   */
  connection_id: string;
  /**
   * The provider's HTTP status code. A 4xx or 5xx here is a completed call the provider rejected, not a Hercules error — this endpoint answers 200 whenever the request reached the provider.
   */
  status: number;
  /**
   * The provider's response body.
   */
  data: unknown;
  /**
   * The provider's response headers, minus credential-bearing ones.
   */
  headers: Record<string, string>;
}
export declare namespace Connectors {
  export {
    type ConnectorCredentialsResponse as ConnectorCredentialsResponse,
    type ConnectorRequestResponse as ConnectorRequestResponse,
    type ConnectorCredentialsParams as ConnectorCredentialsParams,
    type ConnectorRequestParams as ConnectorRequestParams,
  };
}
