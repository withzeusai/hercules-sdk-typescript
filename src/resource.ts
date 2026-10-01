// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { Hercules } from './client';

export abstract class APIResource {
  protected _client: Hercules;

  constructor(client: Hercules) {
    this._client = client;
  }
}
