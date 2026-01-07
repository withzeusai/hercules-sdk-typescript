// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PayAPI from './pay/pay';
import {
  Pay,
  PayCancelParams,
  PayCancelResponse,
  PayCheckParams,
  PayCheckResponse,
  PayCheckoutParams,
  PayCheckoutResponse,
} from './pay/pay';

export class Beta extends APIResource {
  pay: PayAPI.Pay = new PayAPI.Pay(this._client);
}

Beta.Pay = Pay;

export declare namespace Beta {
  export {
    Pay as Pay,
    type PayCancelResponse as PayCancelResponse,
    type PayCheckResponse as PayCheckResponse,
    type PayCheckoutResponse as PayCheckoutResponse,
    type PayCancelParams as PayCancelParams,
    type PayCheckParams as PayCheckParams,
    type PayCheckoutParams as PayCheckoutParams,
  };
}
