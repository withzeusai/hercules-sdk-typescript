// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * (Beta) Query the app's analytics replica with read-only SQL, list the
 * replicated tables and their columns, and check replication status.
 */
export class Analytics extends APIResource {
  /**
   * Retrieves the replicated tables and their column types, along with the replica's
   * last sync time.
   */
  listTables(options?: RequestOptions): APIPromise<AnalyticsListTablesResponse> {
    return this._client.get('/v1/analytics/tables', options);
  }

  /**
   * Executes a single read-only SQL statement against the app's analytics replica
   * and returns rows with column metadata and execution stats.
   */
  query(body: AnalyticsQueryParams, options?: RequestOptions): APIPromise<QueryResponse> {
    return this._client.post('/v1/analytics/query', { body, ...options });
  }

  /**
   * Reports whether analytics is enabled for the app, the replication state, last
   * sync time, and replica storage size.
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
  /**
   * A result or table column.
   */
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
     * Bytes scanned by the query
     */
    bytes_scanned: number;

    /**
     * Query execution time in milliseconds
     */
    elapsed_ms: number;

    /**
     * Number of rows returned
     */
    rows: number;
  }
}

export interface Status {
  /**
   * Whether the analytics replica is enabled for this app
   */
  enabled: boolean;

  /**
   * When the replica last applied changes from Convex
   */
  last_synced_at: string | null;

  /**
   * Replication state; null when the feature has never been enabled
   */
  state: 'backfilling' | 'active' | 'paused' | 'error' | 'disabling' | 'disabled' | null;

  /**
   * Replica storage size in bytes
   */
  storage_bytes: number | null;

  /**
   * Steady-state sync interval
   */
  sync_interval_minutes: number | null;
}

/**
 * A replicated Convex table available to analytics queries.
 */
export interface Table {
  /**
   * Columns of the replicated table
   */
  columns: Array<Table.Column>;

  /**
   * Convex table name
   */
  name: string;
}

export namespace Table {
  /**
   * A result or table column.
   */
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

export interface AnalyticsListTablesResponse {
  /**
   * Array of table objects
   */
  data: Array<Table>;

  /**
   * When the replica last applied changes from Convex
   */
  last_synced_at: string | null;
}

export interface AnalyticsQueryParams {
  /**
   * A single read-only SQL statement (SELECT / WITH / FROM / VALUES).
   */
  sql: string;

  /**
   * Named parameters bound server-side; reference them in the SQL as $name. Always
   * prefer parameters over string interpolation.
   */
  params?: { [key: string]: unknown };

  /**
   * Query timeout in milliseconds (default and maximum 30000).
   */
  timeout_ms?: number;
}

export declare namespace Analytics {
  export {
    type QueryResponse as QueryResponse,
    type Status as Status,
    type Table as Table,
    type AnalyticsListTablesResponse as AnalyticsListTablesResponse,
    type AnalyticsQueryParams as AnalyticsQueryParams,
  };
}
