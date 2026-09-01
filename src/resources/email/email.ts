// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../core/pagination';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import * as IdentitiesAPI from './identities';
import {
  Identities,
  type Identity,
  type IdentitiesCursorIDPage,
  type IdentityCreateParams,
  type IdentityListParams,
  type IdentityVerifyParams,
} from './identities';
import * as SuppressionsAPI from './suppressions';
import {
  Suppressions,
  type Suppression,
  type SuppressionListResponse,
  type SuppressionDeleteResponse,
  type SuppressionBatchAddResponse,
  type SuppressionBatchRemoveResponse,
  type SuppressionCreateParams,
  type SuppressionListParams,
  type SuppressionBatchAddParams,
  type SuppressionBatchRemoveParams,
} from './suppressions';

export class EmailResource extends APIResource {
  identities: IdentitiesAPI.Identities = new IdentitiesAPI.Identities(this._client);
  suppressions: SuppressionsAPI.Suppressions = new SuppressionsAPI.Suppressions(this._client);

  /**
   * Sends a single email. The sender address must be a verified identity for this website. Optionally pass reply_to_email_id to thread a reply to a received email in this app and organization. Sender, recipients, subject, body, and attachments remain explicit; nothing is copied from the source. In-Reply-To and References are generated and cannot be supplied as custom headers (case-insensitive). References retains at most 20 valid, unique IDs and 870 characters, including the source Message-ID; malformed ancestors are omitted and oldest ancestry is trimmed. Without References, a single valid stored In-Reply-To is used as ancestry.
   *
   * @param {EmailSendParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EmailSendResponse>} The email was successfully queued for delivery
   *
   * @example
   * ```ts
   * const email = await client.email.send({
   *   from: 'x',
   *   to: 'user@example.com',
   *   subject: 'x',
   * });
   * ```
   */
  send(body: EmailSendParams, options?: RequestOptions): APIPromise<EmailSendResponse> {
    return this._client.post('/v1/email', { body, ...options });
  }

  /**
   * Retrieves a paginated list of sent emails. Returns email metadata including delivery status.
   *
   * @param {EmailListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<EmailsCursorIDPage, Email>} A paginated list of email objects
   *
   * @example
   * ```ts
   * const page = await client.email.list();
   * ```
   */
  list(
    query: EmailListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EmailsCursorIDPage, Email> {
    return this._client.getAPIList('/v1/email', CursorIDPage<Email>, { query, ...options });
  }

  /**
   * Retrieves a single email by its unique identifier.
   *
   * @param {string} emailID - The unique identifier of the email
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EmailGetResponse>} The email object with full body content
   *
   * @example
   * ```ts
   * const email = await client.email.get('emailId');
   * ```
   */
  get(emailID: string, options?: RequestOptions): APIPromise<EmailGetResponse> {
    return this._client.get(__scalarPath`/v1/email/${emailID}`, options);
  }
}

/**
 * A sent email object
 */
export interface Email {
  /**
   * Unique identifier for the email
   */
  id: string;
  /**
   * Sender email address
   */
  from: string;
  /**
   * Recipient email addresses
   */
  to: Array<string>;
  /**
   * Email subject line
   */
  subject: string;
  /**
   * Timestamp when the email was sent
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created_at: string;
  /**
   * Carbon copy recipients
   */
  cc?: Array<string> | null;
  /**
   * Blind carbon copy recipients
   */
  bcc?: Array<string> | null;
  /**
   * Reply-to addresses
   */
  reply_to?: Array<string> | null;
  /**
   * The most recent event for this email
   */
  last_event?: 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'complained' | null;
}

/**
 * A file attachment
 */
export interface Attachment {
  /**
   * The name of the attached file
   * @minLength 1
   */
  filename: string;
  /**
   * The Base64-encoded content of the attachment. Max 40MB total per email.
   */
  content: string;
  /**
   * The MIME type of the attachment
   */
  content_type?: string;
}

export interface EmailSendParams {
  /**
   * Sender email address. To include a friendly name, use the format 'Your Name <sender@domain.com>'.
   * @minLength 1
   */
  from: string;
  /**
   * Recipient email address(es). Maximum 50.
   */
  to: string | Array<string>;
  /**
   * Email subject line
   * @minLength 1
   * @maxLength 998
   */
  subject: string;
  /**
   * The HTML version of the message body
   */
  html?: string;
  /**
   * The plain text version of the message body
   */
  text?: string;
  /**
   * Carbon copy recipient(s)
   */
  cc?: string | Array<string>;
  /**
   * Blind carbon copy recipient(s)
   */
  bcc?: string | Array<string>;
  /**
   * Reply-to email address(es)
   */
  reply_to?: string | Array<string>;
  /**
   * Hercules received-email ID to reply to, not an RFC Message-ID or SES ID. Must belong to this app and organization, be non-quarantined, and have a passing virus verdict and a supported Message-ID. Only threading headers are generated; sender, recipients, subject, body, and any attachments must be supplied explicitly.
   * @minLength 1
   * @maxLength 128
   */
  reply_to_email_id?: string;
  /**
   * Custom email headers as key-value pairs. Maximum 15, or 13 for replies to reserve two headers for threading.
   */
  headers?: Record<string, string>;
  /**
   * List of file attachments. Total size must not exceed 40MB after Base64 encoding.
   */
  attachments?: Array<Attachment>;
  /**
   * Custom metadata tags for the email (max 50)
   * @maxItems 50
   */
  tags?: Array<EmailSendParams.Tag>;
}

export namespace EmailSendParams {
  export interface Tag {
    /**
     * The name of the tag
     * @minLength 1
     * @maxLength 256
     * @pattern ^[A-Za-z0-9_.@-]+$
     */
    name: string;
    /**
     * The value of the tag
     * @minLength 1
     * @maxLength 256
     * @pattern ^[A-Za-z0-9_.@-]+$
     */
    value: string;
  }
}

export interface EmailSendResponse {
  /**
   * The unique identifier of the sent email
   */
  id: string;
}

export interface EmailListParams extends CursorIDPageParams {
  /**
   * Search query to filter emails. Searches across sender, recipients, and subject (case-insensitive).
   * @maxLength 500
   */
  query?: string;
  /**
   * Filter by sender address (case-insensitive partial match).
   * @maxLength 320
   */
  from?: string;
  /**
   * Filter by recipient address (case-insensitive partial match).
   * @maxLength 320
   */
  to?: string;
  /**
   * Only return emails created after this Unix timestamp (seconds).
   * @minimum 0
   * @maximum 9007199254740991
   */
  'created[gt]'?: number;
  /**
   * Only return emails created at or after this Unix timestamp (seconds).
   * @minimum 0
   * @maximum 9007199254740991
   */
  'created[gte]'?: number;
  /**
   * Only return emails created before this Unix timestamp (seconds).
   * @minimum 0
   * @maximum 9007199254740991
   */
  'created[lt]'?: number;
  /**
   * Only return emails created at or before this Unix timestamp (seconds).
   * @minimum 0
   * @maximum 9007199254740991
   */
  'created[lte]'?: number;
  /**
   * Sort order for emails. Prefix with '-' for descending order. Valid values: created, from, subject, last_event (each optionally prefixed with '-'). Default: -created (newest first).
   * @pattern ^-?(created|from|subject|last_event)$
   */
  sort?: string;
}

export type EmailsCursorIDPage = CursorIDPage<Email>;

export interface EmailGetResponse {
  /**
   * Unique identifier for the email
   */
  id: string;
  /**
   * Sender email address
   */
  from: string;
  /**
   * Recipient email addresses
   */
  to: Array<string>;
  /**
   * Email subject line
   */
  subject: string;
  /**
   * Timestamp when the email was sent
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created_at: string;
  /**
   * Carbon copy recipients
   */
  cc?: Array<string> | null;
  /**
   * Blind carbon copy recipients
   */
  bcc?: Array<string> | null;
  /**
   * Reply-to addresses
   */
  reply_to?: Array<string> | null;
  /**
   * The most recent event for this email
   */
  last_event?: 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'complained' | null;
  /**
   * The HTML version of the message body
   */
  html?: string | null;
  /**
   * The plain text version of the message body
   */
  text?: string | null;
  /**
   * Human-readable reason from the most recent bounce or complaint event, when the email bounced or was marked as spam. Null otherwise.
   */
  bounce_reason?: string | null;
}
EmailResource.Identities = Identities;
EmailResource.Suppressions = Suppressions;

export declare namespace EmailResource {
  export {
    type Email as Email,
    type Attachment as Attachment,
    type EmailSendResponse as EmailSendResponse,
    type EmailsCursorIDPage as EmailsCursorIDPage,
    type EmailGetResponse as EmailGetResponse,
    type EmailSendParams as EmailSendParams,
    type EmailListParams as EmailListParams,
  };

  export {
    Identities as Identities,
    type Identity as Identity,
    type IdentitiesCursorIDPage as IdentitiesCursorIDPage,
    type IdentityCreateParams as IdentityCreateParams,
    type IdentityListParams as IdentityListParams,
    type IdentityVerifyParams as IdentityVerifyParams,
  };

  export {
    Suppressions as Suppressions,
    type Suppression as Suppression,
    type SuppressionListResponse as SuppressionListResponse,
    type SuppressionDeleteResponse as SuppressionDeleteResponse,
    type SuppressionBatchAddResponse as SuppressionBatchAddResponse,
    type SuppressionBatchRemoveResponse as SuppressionBatchRemoveResponse,
    type SuppressionCreateParams as SuppressionCreateParams,
    type SuppressionListParams as SuppressionListParams,
    type SuppressionBatchAddParams as SuppressionBatchAddParams,
    type SuppressionBatchRemoveParams as SuppressionBatchRemoveParams,
  };
}
