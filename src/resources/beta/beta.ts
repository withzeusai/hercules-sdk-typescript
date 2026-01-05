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
import * as PushNotificationsAPI from './push-notifications/push-notifications';
import {
  PushNotificationEnableResponse,
  PushNotificationSendParams,
  PushNotificationSendResponse,
  PushNotifications,
} from './push-notifications/push-notifications';

export class Beta extends APIResource {
  pay: PayAPI.Pay = new PayAPI.Pay(this._client);
  pushNotifications: PushNotificationsAPI.PushNotifications = new PushNotificationsAPI.PushNotifications(
    this._client,
  );
}

Beta.Pay = Pay;
Beta.PushNotifications = PushNotifications;

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

  export {
    PushNotifications as PushNotifications,
    type PushNotificationEnableResponse as PushNotificationEnableResponse,
    type PushNotificationSendResponse as PushNotificationSendResponse,
    type PushNotificationSendParams as PushNotificationSendParams,
  };
}
