// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssetsAPI from './assets';
import {
  Asset,
  AssetCreateParams,
  AssetListParams,
  AssetUpdateParams,
  Assets,
  AssetsCursorIDPage,
} from './assets';
import * as EntriesAPI from './entries';
import {
  Entries,
  EntriesCursorIDPage,
  Entry,
  EntryCreateParams,
  EntryListParams,
  EntryPublishParams,
  EntryUpdateParams,
} from './entries';
import * as LocalesAPI from './locales';
import {
  Locale,
  LocaleCreateParams,
  LocaleListParams,
  LocaleUpdateParams,
  Locales,
  LocalesCursorIDPage,
} from './locales';
import * as ModelsAPI from './models/models';
import { Field, Models } from './models/models';
import * as ReleasesAPI from './releases/releases';
import {
  Release,
  ReleaseCreateParams,
  ReleaseItem,
  ReleaseListParams,
  ReleaseScheduleParams,
  ReleaseUpdateParams,
  Releases,
  ReleasesCursorIDPage,
} from './releases/releases';

/**
 * Content APIs are currently in beta.
 */
export class Content extends APIResource {
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  locales: LocalesAPI.Locales = new LocalesAPI.Locales(this._client);
  releases: ReleasesAPI.Releases = new ReleasesAPI.Releases(this._client);
}

Content.Models = Models;
Content.Entries = Entries;
Content.Assets = Assets;
Content.Locales = Locales;
Content.Releases = Releases;

export declare namespace Content {
  export { Models as Models, type Field as Field };

  export {
    Entries as Entries,
    type Entry as Entry,
    type EntriesCursorIDPage as EntriesCursorIDPage,
    type EntryCreateParams as EntryCreateParams,
    type EntryUpdateParams as EntryUpdateParams,
    type EntryListParams as EntryListParams,
    type EntryPublishParams as EntryPublishParams,
  };

  export {
    Assets as Assets,
    type Asset as Asset,
    type AssetsCursorIDPage as AssetsCursorIDPage,
    type AssetCreateParams as AssetCreateParams,
    type AssetUpdateParams as AssetUpdateParams,
    type AssetListParams as AssetListParams,
  };

  export {
    Locales as Locales,
    type Locale as Locale,
    type LocalesCursorIDPage as LocalesCursorIDPage,
    type LocaleCreateParams as LocaleCreateParams,
    type LocaleUpdateParams as LocaleUpdateParams,
    type LocaleListParams as LocaleListParams,
  };

  export {
    Releases as Releases,
    type Release as Release,
    type ReleaseItem as ReleaseItem,
    type ReleasesCursorIDPage as ReleasesCursorIDPage,
    type ReleaseCreateParams as ReleaseCreateParams,
    type ReleaseUpdateParams as ReleaseUpdateParams,
    type ReleaseListParams as ReleaseListParams,
    type ReleaseScheduleParams as ReleaseScheduleParams,
  };
}
