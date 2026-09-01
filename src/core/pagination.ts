// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIPromise, defaultParseResponse, type APIResponseProps } from '../api-promise';
import type { Hercules } from '../client';
import { HerculesError } from './error';
import type { FinalRequestOptions } from '../internal/request-options';
import { maybeObj } from '../internal/utils/values';

export type PageRequestOptions = Pick<FinalRequestOptions, 'query' | 'headers' | 'body' | 'path' | 'method'>;

export abstract class AbstractPage<Item> implements AsyncIterable<Item> {
  protected readonly client: Hercules;
  protected readonly options: FinalRequestOptions;
  protected readonly response: Response;
  protected readonly body: unknown;

  constructor(client: Hercules, response: Response, body: unknown, options: FinalRequestOptions) {
    this.client = client;
    this.response = response;
    this.body = body;
    // An idempotency key belongs to the one request it was sent with. A page only ever uses these
    // options to build the *next* request, so the key is dropped here and each page gets its own.
    const { idempotencyKey: _idempotencyKey, ...pageOptions } = options;
    this.options = pageOptions;
  }

  abstract nextPageRequestOptions(): PageRequestOptions | null;
  abstract getPaginatedItems(): readonly Item[];

  hasNextPage(): boolean {
    const items = this.getPaginatedItems();
    if (!items.length) return false;
    return this.nextPageRequestOptions() !== null;
  }

  async getNextPage(): Promise<this> {
    const nextOptions = this.nextPageRequestOptions();
    if (!nextOptions)
      throw new HerculesError(
        'No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.',
      );
    return await this.client.requestAPIList(this.constructor as PageConstructor<this, Item>, nextOptions);
  }

  async *iterPages(): AsyncGenerator<this> {
    let page: this = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) yield item;
    }
  }
}

export type PageConstructor<Page extends AbstractPage<Item>, Item> = new (
  client: Hercules,
  response: Response,
  body: unknown,
  options: FinalRequestOptions,
) => Page;

export class PagePromise<
    Page extends AbstractPage<Item>,
    Item = ReturnType<Page['getPaginatedItems']>[number],
  >
  extends APIPromise<Page>
  implements AsyncIterable<Item>
{
  constructor(client: Hercules, request: Promise<APIResponseProps>, Page: PageConstructor<Page, Item>) {
    super(
      client,
      request,
      async (client, props) =>
        new Page(client, props.response, await defaultParseResponse(client, props), props.options),
    );
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    const page = await this;
    for await (const item of page) yield item;
  }
}

export interface CursorIDPageParams {
  starting_after?: string;

  ending_before?: string;

  limit?: number;
}

export interface CursorIDPageResponse<Item> {
  data: Array<Item>;
}

export class CursorIDPage<Item> extends AbstractPage<Item> implements CursorIDPageResponse<Item> {
  data: Array<Item>;

  constructor(client: Hercules, response: Response, body: unknown, options: FinalRequestOptions) {
    super(client, response, body, options);
    const parsed = body as CursorIDPageResponse<Item>;

    this.data = parsed.data || [];
  }

  getPaginatedItems(): Item[] {
    const items = this.data;
    return Array.isArray(items) ? items : [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const isPreviousPage = Object.prototype.hasOwnProperty.call(
      maybeObj(this.options.query),
      'ending_before',
    );
    const cursorParam = isPreviousPage ? 'ending_before' : 'starting_after';

    const cursor = isPreviousPage
      ? readPagePath(this.getPaginatedItems()[0], ['id'])
      : readPagePath(this.getPaginatedItems()[this.getPaginatedItems().length - 1], ['id']);
    if (!hasNextCursor(cursor)) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        [cursorParam]: cursor,
      },
    };
  }
}

const hasNextCursor = (cursor: unknown): boolean => {
  if (typeof cursor === 'string') return cursor.length > 0;
  if (typeof cursor === 'number') return Number.isFinite(cursor);
  return false;
};

const readPagePath = (value: unknown, path: readonly string[]): unknown => {
  let current = value;
  for (const segment of path) {
    if (current === null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[segment];
  }
  return current;
};
