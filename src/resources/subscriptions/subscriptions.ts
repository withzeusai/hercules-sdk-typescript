// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomersAPI from './customers';
import {
  Customer,
  CustomerCreateBillingPortalParams,
  CustomerCreateBillingPortalResponse,
  CustomerCreateParams,
  CustomerListResponse,
  CustomerUpdateParams,
  Customers,
} from './customers';

export class Subscriptions extends APIResource {
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
}

Subscriptions.Customers = Customers;

export declare namespace Subscriptions {
  export {
    Customers as Customers,
    type Customer as Customer,
    type CustomerListResponse as CustomerListResponse,
    type CustomerCreateBillingPortalResponse as CustomerCreateBillingPortalResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerCreateBillingPortalParams as CustomerCreateBillingPortalParams,
  };
}
