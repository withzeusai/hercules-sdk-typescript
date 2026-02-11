// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

/**
 * Send transactional emails, send batch emails, and retrieve sent email
 * history with delivery status tracking.
 */
export class Emails extends APIResource {}

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

export declare namespace Emails {
  export { type Attachment as Attachment, type Email as Email };
}
