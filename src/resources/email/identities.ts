// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../core/pagination';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import { path as __scalarPath } from '../../internal/utils/path';

export class Identities extends APIResource {
  /**
   * Creates a new sender identity for email verification. For email identities, a verification email is sent. For domain identities, DNS records are returned that must be configured to verify ownership.
   *
   * @param {IdentityCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Identity>} The created identity with verification details
   *
   * @example
   * ```ts
   * const identity = await client.email.identities.create({
   *   type: 'email',
   *   value: 'user@example.com',
   * });
   * ```
   */
  create(body: IdentityCreateParams, options?: RequestOptions): APIPromise<Identity> {
    return this._client.post('/v1/email/identities', { body, ...options });
  }

  /**
   * Retrieves a paginated list of sender identities (email addresses and domains) configured for this website.
   *
   * @param {IdentityListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<IdentitiesCursorIDPage, Identity>} A paginated list of identity objects
   *
   * @example
   * ```ts
   * const page = await client.email.identities.list();
   * ```
   */
  list(
    query: IdentityListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<IdentitiesCursorIDPage, Identity> {
    return this._client.getAPIList('/v1/email/identities', CursorIDPage<Identity>, { query, ...options });
  }

  /**
   * Retrieves a sender identity by ID. Returns the identity with its current verification status and any required DNS records.
   *
   * @param {string} identityID - The unique identifier of the identity
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Identity>} The identity object
   *
   * @example
   * ```ts
   * const identity = await client.email.identities.get('identityId');
   * ```
   */
  get(identityID: string, options?: RequestOptions): APIPromise<Identity> {
    return this._client.get(__scalarPath`/v1/email/identities/${identityID}`, options);
  }

  /**
   * Triggers a manual recheck of the identity's verification status against AWS SES. Returns the identity with its updated status.
   *
   * @param {string} identityID - The unique identifier of the identity
   * @param {IdentityVerifyParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Identity>} The identity with refreshed verification status
   *
   * @example
   * ```ts
   * const identity = await client.email.identities.verify('identityId', {
   *   resend: false,
   * });
   * ```
   */
  verify(identityID: string, body: IdentityVerifyParams, options?: RequestOptions): APIPromise<Identity> {
    return this._client.post(__scalarPath`/v1/email/identities/${identityID}/verify`, { body, ...options });
  }

  /**
   * Permanently deletes a sender identity. Emails can no longer be sent from this address or domain after deletion.
   *
   * @param {string} identityID - The unique identifier of the identity
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Identity successfully deleted
   *
   * @example
   * ```ts
   * await client.email.identities.delete('identityId');
   * ```
   */
  delete(identityID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(__scalarPath`/v1/email/identities/${identityID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * A verified sender identity (email address or domain) for sending emails
 */
export interface Identity {
  /**
   * Unique identifier for the identity
   */
  id: string;
  /**
   * The type of identity: 'email' for a single email address, 'domain' for an entire domain
   */
  type: 'email' | 'domain';
  /**
   * The email address or domain name
   */
  value: string;
  /**
   * The verification status of the identity
   */
  status: 'pending' | 'verified' | 'failed';
  /**
   * Deprecated: derived from `mail_from_subdomain`, which is the source of truth. True whenever a subdomain is set.
   */
  mail_from_enabled: boolean;
  /**
   * Inbound email configuration for this identity
   */
  receiving: Identity.Receiving;
  /**
   * Timestamp when the identity was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created_at: string;
  /**
   * The subdomain prefix used for the custom MAIL FROM domain (e.g. 'mail' for mail.yourdomain.com). Null when the identity uses the SES default MAIL FROM.
   */
  mail_from_subdomain?: string | null;
  /**
   * DNS records required for verification (only present for domain identities)
   */
  verification_records?: Array<Identity.VerificationRecord> | null;
  /**
   * Deliverability warnings for this identity. Present on the create, retrieve, and list endpoints; a verified identity can still carry warnings.
   */
  warnings?: Array<Identity.Warning>;
}

export namespace Identity {
  export interface Receiving {
    /**
     * Whether receiving setup is permitted for this organization and the platform is ready for setup. Separate from domain DNS status; not a live delivery-health check.
     */
    available: boolean;
    /**
     * Whether receiving has been enabled for this domain
     */
    enabled: boolean;
    /**
     * Disabled, or the latest receiving MX verification result: pending, verified, or failed. Pending or failed MX checks do not disable an enabled receiving assignment.
     */
    status: 'disabled' | 'pending' | 'verified' | 'failed';
    /**
     * DNS records required for receiving. Empty while receiving is disabled or setup is unavailable.
     */
    records: Array<Receiving.Record>;
  }

  export namespace Receiving {
    export interface Record {
      /**
       * The DNS record type
       */
      type: 'TXT' | 'CNAME' | 'MX';
      /**
       * The DNS record name/host
       */
      name: string;
      /**
       * The DNS record value
       */
      value: string;
      /**
       * Verification status of this individual record
       */
      status: 'pending' | 'verified' | 'failed';
      /**
       * The DNS record priority (for MX records)
       * @minimum -9007199254740991
       * @maximum 9007199254740991
       */
      priority?: number;
    }
  }

  export interface VerificationRecord {
    /**
     * The DNS record type
     */
    type: 'TXT' | 'CNAME' | 'MX';
    /**
     * The DNS record name/host
     */
    name: string;
    /**
     * The DNS record value
     */
    value: string;
    /**
     * Verification status of this individual record
     */
    status: 'pending' | 'verified' | 'failed';
    /**
     * The DNS record priority (for MX records)
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    priority?: number;
  }

  export interface Warning {
    /**
     * Machine-readable identifier for the kind of warning. 'dmarc_unaligned' is resolved by verifying the domain; 'dmarc_public_domain' cannot be, because the domain belongs to a shared mailbox provider.
     */
    code: 'dmarc_unaligned' | 'dmarc_public_domain';
    /**
     * The sender domain the warning concerns
     */
    domain: string;
    /**
     * Human-readable explanation of the warning
     */
    message: string;
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
     * @format email
     * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
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
     * @minLength 1
     * @pattern ^[^\s@]+\.[^\s@]+$
     */
    value: string;
    /**
     * Deprecated: pass `mail_from_subdomain: null` to use the SES default MAIL FROM instead. When false, it still overrides `mail_from_subdomain`.
     */
    mail_from_enabled?: boolean;
    /**
     * The subdomain prefix for the custom MAIL FROM domain (e.g. 'mail' for mail.yourdomain.com). Defaults to 'mail'; pass null to use the SES default MAIL FROM, which forfeits SPF alignment.
     * @minLength 1
     * @maxLength 63
     * @pattern ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$
     */
    mail_from_subdomain?: string | null;
  }
}

export interface IdentityListParams extends CursorIDPageParams {}

export type IdentitiesCursorIDPage = CursorIDPage<Identity>;

export interface IdentityVerifyParams {
  /**
   * If true and the identity is an unverified email address, resend the verification email.
   * @default false
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
