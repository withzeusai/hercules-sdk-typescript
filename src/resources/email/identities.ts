// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Identities extends APIResource {
  /**
   * Creates a new sender identity for email verification. For email identities, a
   * verification email is sent. For domain identities, DNS records are returned that
   * must be configured to verify ownership.
   */
  create(body: IdentityCreateParams, options?: RequestOptions): APIPromise<Identity> {
    return this._client.post('/v1/email/identities', { body, ...options });
  }

  /**
   * Retrieves a paginated list of sender identities (email addresses and domains)
   * configured for this website.
   */
  list(
    query: IdentityListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<IdentitiesCursorIDPage, Identity> {
    return this._client.getAPIList('/v1/email/identities', CursorIDPage<Identity>, { query, ...options });
  }

  /**
   * Permanently deletes a sender identity. Emails can no longer be sent from this
   * address or domain after deletion.
   */
  delete(identityID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/email/identities/${identityID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a sender identity by ID. Returns the identity with its current
   * verification status and any required DNS records.
   */
  get(identityID: string, options?: RequestOptions): APIPromise<Identity> {
    return this._client.get(path`/v1/email/identities/${identityID}`, options);
  }

  /**
   * Triggers a manual recheck of the identity's verification status against AWS SES.
   * Returns the identity with its updated status.
   */
  verify(
    identityID: string,
    body: IdentityVerifyParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Identity> {
    return this._client.post(path`/v1/email/identities/${identityID}/verify`, { body, ...options });
  }
}

export type IdentitiesCursorIDPage = CursorIDPage<Identity>;

/**
 * A verified sender identity (email address or domain) for sending emails
 */
export interface Identity {
  /**
   * Unique identifier for the identity
   */
  id: string;

  /**
   * Timestamp when the identity was created
   */
  created_at: string;

  /**
   * Whether a custom MAIL FROM domain is enabled for SPF alignment
   */
  mail_from_enabled: boolean;

  /**
   * The verification status of the identity
   */
  status: 'pending' | 'verified' | 'failed';

  /**
   * The type of identity: 'email' for a single email address, 'domain' for an entire
   * domain
   */
  type: 'email' | 'domain';

  /**
   * The email address or domain name
   */
  value: string;

  /**
   * The subdomain prefix used for the custom MAIL FROM domain (e.g. 'mail' for
   * mail.yourdomain.com)
   */
  mail_from_subdomain?: string | null;

  /**
   * DNS records required for verification (only present for domain identities)
   */
  verification_records?: Array<Identity.VerificationRecord> | null;
}

export namespace Identity {
  /**
   * A DNS record required for domain verification
   */
  export interface VerificationRecord {
    /**
     * The DNS record name/host
     */
    name: string;

    /**
     * Verification status of this individual record
     */
    status: 'pending' | 'verified' | 'failed';

    /**
     * The DNS record type
     */
    type: 'TXT' | 'CNAME' | 'MX';

    /**
     * The DNS record value
     */
    value: string;

    /**
     * The DNS record priority (for MX records)
     */
    priority?: number;
  }
}

export type IdentityCreateParams = IdentityCreateParams.Variant0 | IdentityCreateParams.Variant1;

export declare namespace IdentityCreateParams {
  export interface Variant0 {
    /**
     * Create an email address identity
     */
    type: 'email';

    /**
     * The email address to verify
     */
    value: string;
  }

  export interface Variant1 {
    /**
     * Create a domain identity
     */
    type: 'domain';

    /**
     * The domain name to verify
     */
    value: string;

    /**
     * Enable a custom MAIL FROM domain for SPF alignment. When enabled, additional DNS
     * records are required.
     */
    mail_from_enabled?: boolean;

    /**
     * The subdomain prefix for the custom MAIL FROM domain (e.g. 'mail' for
     * mail.yourdomain.com). Defaults to 'mail'.
     */
    mail_from_subdomain?: string;
  }
}

export interface IdentityListParams extends CursorIDPageParams {}

export interface IdentityVerifyParams {
  /**
   * If true and the identity is an unverified email address, resend the verification
   * email.
   */
  resend?: boolean;
}

export declare namespace Identities {
  export {
    type Identity as Identity,
    type IdentitiesCursorIDPage as IdentitiesCursorIDPage,
    type IdentityCreateParams as IdentityCreateParams,
    type IdentityListParams as IdentityListParams,
    type IdentityVerifyParams as IdentityVerifyParams,
  };
}
