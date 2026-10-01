// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import * as CollectionsAPI from './collections/collections';
import {
  Collections,
  type Collection,
  type Field,
  type CollectionsCursorIDPage,
  type CollectionListParams,
  type CollectionCreateParams,
  type CollectionUpdateParams,
} from './collections/collections';
import * as EntriesAPI from './entries';
import {
  Entries,
  type Entry,
  type EntriesCursorIDPage,
  type EntryListParams,
  type EntryCreateParams,
  type EntryUpdateParams,
  type EntryPublishParams,
} from './entries';
import * as AssetsAPI from './assets';
import {
  Assets,
  type Asset,
  type AssetsCursorIDPage,
  type AssetListParams,
  type AssetCreateParams,
  type AssetUpdateParams,
} from './assets';
import * as LocalesAPI from './locales';
import {
  Locales,
  type Locale,
  type LocalesCursorIDPage,
  type LocaleListParams,
  type LocaleCreateParams,
  type LocaleUpdateParams,
} from './locales';
import * as ReleasesAPI from './releases/releases';
import {
  Releases,
  type Release,
  type ReleaseItem,
  type ReleasesCursorIDPage,
  type ReleaseListParams,
  type ReleaseCreateParams,
  type ReleaseUpdateParams,
  type ReleaseScheduleParams,
} from './releases/releases';

export class Content extends APIResource {
  collections: CollectionsAPI.Collections = new CollectionsAPI.Collections(this._client);
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  locales: LocalesAPI.Locales = new LocalesAPI.Locales(this._client);
  releases: ReleasesAPI.Releases = new ReleasesAPI.Releases(this._client);
}

Content.Collections = Collections;
Content.Entries = Entries;
Content.Assets = Assets;
Content.Locales = Locales;
Content.Releases = Releases;

export declare namespace Content {
  export {
    Collections as Collections,
    type Collection as Collection,
    type Field as Field,
    type CollectionsCursorIDPage as CollectionsCursorIDPage,
    type CollectionListParams as CollectionListParams,
    type CollectionCreateParams as CollectionCreateParams,
    type CollectionUpdateParams as CollectionUpdateParams,
  };

  export {
    Entries as Entries,
    type Entry as Entry,
    type EntriesCursorIDPage as EntriesCursorIDPage,
    type EntryListParams as EntryListParams,
    type EntryCreateParams as EntryCreateParams,
    type EntryUpdateParams as EntryUpdateParams,
    type EntryPublishParams as EntryPublishParams,
  };

  export {
    Assets as Assets,
    type Asset as Asset,
    type AssetsCursorIDPage as AssetsCursorIDPage,
    type AssetListParams as AssetListParams,
    type AssetCreateParams as AssetCreateParams,
    type AssetUpdateParams as AssetUpdateParams,
  };

  export {
    Locales as Locales,
    type Locale as Locale,
    type LocalesCursorIDPage as LocalesCursorIDPage,
    type LocaleListParams as LocaleListParams,
    type LocaleCreateParams as LocaleCreateParams,
    type LocaleUpdateParams as LocaleUpdateParams,
  };

  export {
    Releases as Releases,
    type Release as Release,
    type ReleaseItem as ReleaseItem,
    type ReleasesCursorIDPage as ReleasesCursorIDPage,
    type ReleaseListParams as ReleaseListParams,
    type ReleaseCreateParams as ReleaseCreateParams,
    type ReleaseUpdateParams as ReleaseUpdateParams,
    type ReleaseScheduleParams as ReleaseScheduleParams,
  };
}
