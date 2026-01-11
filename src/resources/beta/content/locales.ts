// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorIDPage, type CursorIDPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Locales extends APIResource {
  /**
   * Creates a new locale for content localization. Configure fallback chains by
   * setting the fallback_locale to another locale code.
   */
  create(body: LocaleCreateParams, options?: RequestOptions): APIPromise<Locale> {
    return this._client.post('/v1/content/locales', { body, ...options });
  }

  /**
   * Updates a locale's configuration including name, fallback, default status, and
   * active status.
   */
  update(
    localeCode: string,
    body: LocaleUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Locale> {
    return this._client.patch(path`/v1/content/locales/${localeCode}`, { body, ...options });
  }

  /**
   * Retrieves a list of configured locales. Locales define the languages available
   * for content localization.
   */
  list(
    query: LocaleListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LocalesCursorIDPage, Locale> {
    return this._client.getAPIList('/v1/content/locales', CursorIDPage<Locale>, { query, ...options });
  }

  /**
   * Deletes a locale. The default locale cannot be deleted - set another locale as
   * default first. Existing localized content is preserved.
   */
  delete(localeCode: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/content/locales/${localeCode}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a locale by its code.
   */
  get(localeCode: string, options?: RequestOptions): APIPromise<Locale> {
    return this._client.get(path`/v1/content/locales/${localeCode}`, options);
  }
}

export type LocalesCursorIDPage = CursorIDPage<Locale>;

/**
 * A locale configuration for content localization. Locales define supported
 * languages and fallback chains.
 */
export interface Locale {
  /**
   * Unique identifier for the topic subscription
   */
  id: string;

  /**
   * Whether the locale is active
   */
  active: boolean;

  /**
   * Locale code (e.g., 'en', 'en-US', 'fr-CA')
   */
  code: string;

  /**
   * Timestamp when the locale was created
   */
  created: string;

  /**
   * Whether this is the default locale
   */
  is_default: boolean;

  /**
   * Display name (e.g., 'English', 'French (Canada)')
   */
  name: string;

  /**
   * Fallback locale code for missing translations
   */
  fallback_locale?: string | null;
}

export interface LocaleCreateParams {
  /**
   * Locale code (e.g., 'en', 'en-US', 'fr-CA')
   */
  code: string;

  /**
   * Display name (e.g., 'English', 'French (Canada)')
   */
  name: string;

  /**
   * Optional custom ID for the locale. Must start with 'cl\_'. If not provided, one
   * will be generated.
   */
  id?: string;

  /**
   * Fallback locale code for missing translations
   */
  fallback_locale?: string;

  /**
   * Set as the default locale (only one per website)
   */
  is_default?: boolean;
}

export interface LocaleUpdateParams {
  /**
   * Whether the locale is active
   */
  active?: boolean;

  /**
   * Fallback locale code
   */
  fallback_locale?: string | null;

  /**
   * Set as the default locale
   */
  is_default?: boolean;

  /**
   * Display name
   */
  name?: string;
}

export interface LocaleListParams extends CursorIDPageParams {
  /**
   * Filter by active status
   */
  active?: 'true' | 'false';
}

export declare namespace Locales {
  export {
    type Locale as Locale,
    type LocalesCursorIDPage as LocalesCursorIDPage,
    type LocaleCreateParams as LocaleCreateParams,
    type LocaleUpdateParams as LocaleUpdateParams,
    type LocaleListParams as LocaleListParams,
  };
}
