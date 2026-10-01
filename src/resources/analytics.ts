// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class Analytics extends APIResource {
  /**
   * Executes a single read-only SQL statement against the app's analytics replica and returns rows with column metadata and execution stats.
   *
   * @param {AnalyticsQueryParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<QueryResponse>} Query results
   *
   * @example
   * ```ts
   * const query = await client.analytics.query({
   *   sql: 'x',
   * });
   * ```
   */
  query(body: AnalyticsQueryParams, options?: RequestOptions): APIPromise<QueryResponse> {
    return this._client.post('/v1/analytics/query', { body, ...options });
  }

  /**
   * Retrieves the replicated tables and their column types, along with the replica's last sync time.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AnalyticsListTablesResponse>} Replicated tables and columns
   *
   * @example
   * ```ts
   * const analytics = await client.analytics.listTables();
   * ```
   */
  listTables(options?: RequestOptions): APIPromise<AnalyticsListTablesResponse> {
    return this._client.get('/v1/analytics/tables', options);
  }

  /**
   * Reports whether analytics is enabled for the app, the replication state, last sync time, and replica storage size.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Status>} Analytics replication status
   *
   * @example
   * ```ts
   * const status = await client.analytics.status();
   * ```
   */
  status(options?: RequestOptions): APIPromise<Status> {
    return this._client.get('/v1/analytics/status', options);
  }
}

/**
 * The result of a read-only analytics query.
 */
export interface QueryResponse {
  /**
   * Result columns, in order
   */
  columns: Array<QueryResponse.Column>;
  /**
   * Result rows as arrays of JSON values
   */
  rows: Array<Array<unknown>>;
  stats: QueryResponse.Stats;
  /**
   * True when the row cap cut the result off
   */
  truncated: boolean;
}

export namespace QueryResponse {
  export interface Column {
    /**
     * Column name
     */
    name: string;
    /**
     * DuckDB column type (e.g. VARCHAR, DOUBLE, TIMESTAMP, JSON)
     */
    type: string;
  }

  export interface Stats {
    /**
     * Number of rows returned
     */
    rows: number;
    /**
     * Bytes scanned by the query
     */
    bytes_scanned: number;
    /**
     * Query execution time in milliseconds
     */
    elapsed_ms: number;
  }
}

/**
 * A replicated Convex table available to analytics queries.
 */
export interface Table {
  /**
   * Convex table name
   */
  name: string;
  /**
   * Columns of the replicated table
   */
  columns: Array<Table.Column>;
}

export namespace Table {
  export interface Column {
    /**
     * Column name
     */
    name: string;
    /**
     * DuckDB column type (e.g. VARCHAR, DOUBLE, TIMESTAMP, JSON)
     */
    type: string;
  }
}

export interface Status {
  /**
   * Whether the analytics replica is enabled for this app
   */
  enabled: boolean;
  /**
   * Replication state; null when the feature has never been enabled
   */
  state: 'backfilling' | 'active' | 'paused' | 'error' | 'disabling' | 'disabled' | null;
  /**
   * When the replica last applied changes from Convex
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  last_synced_at: string | null;
  /**
   * Replica storage size in bytes
   */
  storage_bytes: number | null;
  /**
   * Steady-state sync interval
   */
  sync_interval_minutes: number | null;
}

export interface AnalyticsQueryParams {
  /**
   * A single read-only SQL statement (SELECT / WITH / FROM / VALUES).
   * @minLength 1
   * @maxLength 100000
   */
  sql: string;
  /**
   * Named parameters bound server-side; reference them in the SQL as $name. Always prefer parameters over string interpolation.
   */
  params?: Record<string, unknown>;
  /**
   * Query timeout in milliseconds (default and maximum 30000).
   * @minimum 100
   * @maximum 30000
   */
  timeout_ms?: number;
}

export interface AnalyticsListTablesResponse {
  /**
   * Array of table objects
   */
  data: Array<Table>;
  /**
   * When the replica last applied changes from Convex
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  last_synced_at: string | null;
}
export declare namespace Analytics {
  export {
    type QueryResponse as QueryResponse,
    type Table as Table,
    type Status as Status,
    type AnalyticsListTablesResponse as AnalyticsListTablesResponse,
    type AnalyticsQueryParams as AnalyticsQueryParams,
  };
}
