// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Connectors extends APIResource {
  /**
   * Returns fresh credentials for an SDK-delivery connector installed for the calling deployment, refreshing the OAuth access token on demand. Requires a deployment-bound API key; the connector must be installed for that deployment's environment. When several connections of the connector cover the deployment, connection_id selects one. Connectors whose provider withholds the credential answer 409 — send requests through the connector request endpoint instead.
   *
   * @param {string} slug - The connector's catalog slug.
   * @param {ConnectorCredentialsParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ConnectorCredentialsResponse>} The connector's secret values and their expiry
   *
   * @example
   * ```ts
   * const connector = await client.connectors.credentials('slug');
   * ```
   */
  credentials(
    slug: string,
    query: ConnectorCredentialsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConnectorCredentialsResponse> {
    return this._client.get(__scalarPath`/v1/connectors/${slug}/credentials`, { query, ...options });
  }

  /**
   * Sends an HTTP request to a connector's provider API as one of the app's connected accounts, with credentials injected server-side — the app never handles the token. Requires a deployment-bound API key; the connector must be installed for that deployment's environment. Answers 200 whenever the request reached the provider, with the provider's own status in the body.
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
   * ID of the connection (the linked credential) to read. When omitted, resolves the connection installed for the calling deployment. When set, the calling deployment must be linked to exactly this connection — unlinking it in the dashboard invalidates the ID.
   * @minLength 1
   * @maxLength 50
   */
  connection_id?: string;
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
   * The connector's credential delivery mode.
   */
  delivery_mode: 'sdk';
  /**
   * Secret values keyed by their env-style names (e.g. GOOGLE_ACCESS_TOKEN).
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
  /**
   * ID of the connection to send the request as. Required when several connections of this connector cover the calling deployment.
   * @minLength 1
   * @maxLength 50
   */
  connection_id?: string;
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
