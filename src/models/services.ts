/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, optional, Schema } from '../schema';
import { Service, serviceSchema } from './service';

/** Response to get all services. */
export interface Services {
  /** Will display the total number of records fetched. */
  totalRecords?: number;
  /** Response to fetch all services. */
  serviceResList?: Service[];
}

export const servicesSchema: Schema<Services> = object({
  totalRecords: ['totalRecords', optional(number())],
  serviceResList: [
    'serviceResList',
    optional(array(lazy(() => serviceSchema))),
  ],
});