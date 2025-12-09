// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomersAPI from './customers';
import {
  Customer,
  CustomerBillingPortalParams,
  CustomerBillingPortalResponse,
  CustomerCreateParams,
  CustomerListParams,
  CustomerUpdateParams,
  Customers,
  CustomersCursorIDPage,
} from './customers';
import * as PlansAPI from './plans';
import { Plan, PlanCreateParams, PlanListParams, PlanUpdateParams, Plans, PlansCursorIDPage } from './plans';

export class Subscriptions extends APIResource {
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  plans: PlansAPI.Plans = new PlansAPI.Plans(this._client);
}

Subscriptions.Customers = Customers;
Subscriptions.Plans = Plans;

export declare namespace Subscriptions {
  export {
    Customers as Customers,
    type Customer as Customer,
    type CustomerBillingPortalResponse as CustomerBillingPortalResponse,
    type CustomersCursorIDPage as CustomersCursorIDPage,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerBillingPortalParams as CustomerBillingPortalParams,
  };

  export {
    Plans as Plans,
    type Plan as Plan,
    type PlansCursorIDPage as PlansCursorIDPage,
    type PlanCreateParams as PlanCreateParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanListParams as PlanListParams,
  };
}
