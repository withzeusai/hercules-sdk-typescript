// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IdentitiesAPI from './identities';
import {
  Identities,
  IdentitiesCursorIDPage,
  Identity,
  IdentityCreateParams,
  IdentityListParams,
  IdentityVerifyParams,
} from './identities';
import { APIPromise } from '../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Send transactional emails, send batch emails, and retrieve sent email
 * history with delivery status tracking.
 */
export class EmailResource extends APIResource {
  identities: IdentitiesAPI.Identities = new IdentitiesAPI.Identities(this._client);

  /**
   * Retrieves a paginated list of sent emails. Returns email metadata including
   * delivery status.
   */
  list(
    query: EmailListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EmailsCursorIDPage, Email> {
    return this._client.getAPIList('/v1/email', CursorIDPage<Email>, { query, ...options });
  }

  /**
   * Retrieves a single email by its unique identifier.
   */
  get(emailID: string, options?: RequestOptions): APIPromise<EmailGetResponse> {
    return this._client.get(path`/v1/email/${emailID}`, options);
  }

  /**
   * Sends a single email. The sender address must be a verified identity for this
   * website.
   */
  send(body: EmailSendParams, options?: RequestOptions): APIPromise<EmailSendResponse> {
    return this._client.post('/v1/email', { body, ...options });
  }
}

export type EmailsCursorIDPage = CursorIDPage<Email>;

/**
 * A file attachment
 */
export interface Attachment {
  /**
   * The Base64-encoded content of the attachment. Max 40MB total per email.
   */
  content: string;

  /**
   * The name of the attached file
   */
  filename: string;

  /**
   * The MIME type of the attachment
   */
  content_type?: string;
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
   * Timestamp when the email was sent
   */
  created_at: string;

  /**
   * Sender email address
   */
  from: string;

  /**
   * Email subject line
   */
  subject: string;

  /**
   * Recipient email addresses
   */
  to: Array<string>;

  /**
   * Blind carbon copy recipients
   */
  bcc?: Array<string> | null;

  /**
   * Carbon copy recipients
   */
  cc?: Array<string> | null;

  /**
   * The most recent event for this email
   */
  last_event?: 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'complained' | null;

  /**
   * Reply-to addresses
   */
  reply_to?: Array<string> | null;
}

/**
 * A sent email object with full body content
 */
export interface EmailGetResponse {
  /**
   * Unique identifier for the email
   */
  id: string;

  /**
   * Timestamp when the email was sent
   */
  created_at: string;

  /**
   * Sender email address
   */
  from: string;

  /**
   * Email subject line
   */
  subject: string;

  /**
   * Recipient email addresses
   */
  to: Array<string>;

  /**
   * Blind carbon copy recipients
   */
  bcc?: Array<string> | null;

  /**
   * Carbon copy recipients
   */
  cc?: Array<string> | null;

  /**
   * The HTML version of the message body
   */
  html?: string | null;

  /**
   * The most recent event for this email
   */
  last_event?: 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'complained' | null;

  /**
   * Reply-to addresses
   */
  reply_to?: Array<string> | null;

  /**
   * The plain text version of the message body
   */
  text?: string | null;
}

/**
 * Response after sending an email
 */
export interface EmailSendResponse {
  /**
   * The unique identifier of the sent email
   */
  id: string;
}

export interface EmailListParams extends CursorIDPageParams {}

export interface EmailSendParams {
  /**
   * Sender email address. To include a friendly name, use the format 'Your Name
   * <sender@domain.com>'.
   */
  from: string;

  /**
   * Email subject line
   */
  subject: string;

  /**
   * Recipient email address(es). Maximum 50.
   */
  to: string | Array<string>;

  /**
   * List of file attachments. Total size must not exceed 40MB after Base64 encoding.
   */
  attachments?: Array<Attachment>;

  /**
   * Blind carbon copy recipient(s)
   */
  bcc?: string | Array<string>;

  /**
   * Carbon copy recipient(s)
   */
  cc?: string | Array<string>;

  /**
   * Custom email headers as key-value pairs
   */
  headers?: { [key: string]: string };

  /**
   * The HTML version of the message body
   */
  html?: string;

  /**
   * Reply-to email address(es)
   */
  reply_to?: string | Array<string>;

  /**
   * Custom metadata tags for the email (max 50)
   */
  tags?: Array<EmailSendParams.Tag>;

  /**
   * The plain text version of the message body
   */
  text?: string;
}

export namespace EmailSendParams {
  /**
   * A custom metadata tag for the email
   */
  export interface Tag {
    /**
     * The name of the tag
     */
    name: string;

    /**
     * The value of the tag
     */
    value: string;
  }
}

EmailResource.Identities = Identities;

export declare namespace EmailResource {
  export {
    type Attachment as Attachment,
    type Email as Email,
    type EmailGetResponse as EmailGetResponse,
    type EmailSendResponse as EmailSendResponse,
    type EmailsCursorIDPage as EmailsCursorIDPage,
    type EmailListParams as EmailListParams,
    type EmailSendParams as EmailSendParams,
  };

  export {
    Identities as Identities,
    type Identity as Identity,
    type IdentitiesCursorIDPage as IdentitiesCursorIDPage,
    type IdentityCreateParams as IdentityCreateParams,
    type IdentityListParams as IdentityListParams,
    type IdentityVerifyParams as IdentityVerifyParams,
  };
}
