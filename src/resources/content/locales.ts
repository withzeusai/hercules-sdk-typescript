// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { CursorIDPage, type CursorIDPageParams, type PagePromise } from '../../core/pagination';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import { path as __scalarPath } from '../../internal/utils/path';

export class Locales extends APIResource {
  /**
   * Retrieves a list of configured locales. Locales define the languages available for content localization.
   *
   * @param {LocaleListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {PagePromise<LocalesCursorIDPage, Locale>} A paginated list of locale objects
   *
   * @example
   * ```ts
   * const page = await client.content.locales.list();
   * ```
   */
  list(
    query: LocaleListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LocalesCursorIDPage, Locale> {
    return this._client.getAPIList('/v1/content/locales', CursorIDPage<Locale>, { query, ...options });
  }

  /**
   * Retrieves a locale by its code.
   *
   * @param {string} localeCode - The locale code (e.g., 'en', 'fr-CA')
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Locale>} The locale object
   *
   * @example
   * ```ts
   * const locale = await client.content.locales.get('localeCode');
   * ```
   */
  get(localeCode: string, options?: RequestOptions): APIPromise<Locale> {
    return this._client.get(__scalarPath`/v1/content/locales/${localeCode}`, options);
  }

  /**
   * Creates a new locale for content localization. Configure fallback chains by setting the fallback_locale to another locale code.
   *
   * @param {LocaleCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Locale>} The created locale object
   *
   * @example
   * ```ts
   * const locale = await client.content.locales.create({
   *   code: 'xx',
   *   name: '',
   *   is_default: false,
   * });
   * ```
   */
  create(body: LocaleCreateParams, options?: RequestOptions): APIPromise<Locale> {
    return this._client.post('/v1/content/locales', { body, ...options });
  }

  /**
   * Updates a locale's configuration including name, fallback, default status, and active status.
   *
   * @param {string} localeCode - The locale code (e.g., 'en', 'fr-CA')
   * @param {LocaleUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Locale>} The updated locale object
   *
   * @example
   * ```ts
   * const locale = await client.content.locales.update('localeCode', {});
   * ```
   */
  update(localeCode: string, body: LocaleUpdateParams, options?: RequestOptions): APIPromise<Locale> {
    return this._client.patch(__scalarPath`/v1/content/locales/${localeCode}`, { body, ...options });
  }

  /**
   * Deletes a locale. The default locale cannot be deleted - set another locale as default first. Existing localized content is preserved.
   *
   * @param {string} localeCode - The locale code (e.g., 'en', 'fr-CA')
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Locale successfully deleted
   *
   * @example
   * ```ts
   * await client.content.locales.delete('localeCode');
   * ```
   */
  delete(localeCode: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(__scalarPath`/v1/content/locales/${localeCode}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * A locale configuration for content localization. Locales define supported languages and fallback chains.
 */
export interface Locale {
  /**
   * Unique identifier for the locale
   */
  id: string;
  /**
   * Locale code (e.g., 'en', 'en-US', 'fr-CA')
   */
  code: string;
  /**
   * Display name (e.g., 'English', 'French (Canada)')
   */
  name: string;
  /**
   * Whether this is the default locale
   */
  is_default: boolean;
  /**
   * Whether the locale is active
   */
  active: boolean;
  /**
   * Timestamp when the locale was created
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  created: string;
  /**
   * Fallback locale code for missing translations
   */
  fallback_locale?: string | null;
}

export interface LocaleListParams extends CursorIDPageParams {
  /**
   * Filter by active status
   */
  active?: boolean;
}

export type LocalesCursorIDPage = CursorIDPage<Locale>;

export interface LocaleCreateParams {
  /**
   * Locale code (e.g., 'en', 'en-US', 'fr-CA')
   * @minLength 2
   * @maxLength 10
   */
  code: string;
  /**
   * Display name (e.g., 'English', 'French (Canada)')
   */
  name: string;
  /**
   * Optional custom ID for the locale. Must start with 'cl_'. If not provided, one will be generated.
   * @pattern ^cl_[\w-]+$
   */
  id?: string;
  /**
   * Fallback locale code for missing translations
   */
  fallback_locale?: string;
  /**
   * Set as the default locale (only one per website)
   * @default false
   */
  is_default?: boolean;
}

export interface LocaleUpdateParams {
  /**
   * Display name
   */
  name?: string;
  /**
   * Fallback locale code
   */
  fallback_locale?: string | null;
  /**
   * Set as the default locale
   */
  is_default?: boolean;
  /**
   * Whether the locale is active
   */
  active?: boolean;
}
export declare namespace Locales {
  export {
    type Locale as Locale,
    type LocalesCursorIDPage as LocalesCursorIDPage,
    type LocaleListParams as LocaleListParams,
    type LocaleCreateParams as LocaleCreateParams,
    type LocaleUpdateParams as LocaleUpdateParams,
  };
}
