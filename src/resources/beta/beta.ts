// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CommerceAPI from './commerce/commerce';
import {
  Commerce,
  CommerceCancelParams,
  CommerceCancelResponse,
  CommerceCheckParams,
  CommerceCheckResponse,
  CommerceCheckoutParams,
  CommerceCheckoutResponse,
} from './commerce/commerce';
import * as ContentAPI from './content/content';
import { Content } from './content/content';

export class Beta extends APIResource {
  commerce: CommerceAPI.Commerce = new CommerceAPI.Commerce(this._client);
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
}

Beta.Commerce = Commerce;
Beta.Content = Content;

export declare namespace Beta {
  export {
    Commerce as Commerce,
    type CommerceCancelResponse as CommerceCancelResponse,
    type CommerceCheckResponse as CommerceCheckResponse,
    type CommerceCheckoutResponse as CommerceCheckoutResponse,
    type CommerceCancelParams as CommerceCancelParams,
    type CommerceCheckParams as CommerceCheckParams,
    type CommerceCheckoutParams as CommerceCheckoutParams,
  };

  export { Content as Content };
}
