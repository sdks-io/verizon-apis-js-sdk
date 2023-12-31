/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

/** Response on successful retrieval of all registered service endpoints. */
export interface ListAllServiceEndpointsResult {
  /** HTTP status code. */
  status?: string;
  /** A comma delimited list of all registered service endpoints. */
  data?: string[];
}

export const listAllServiceEndpointsResultSchema: Schema<ListAllServiceEndpointsResult> = object(
  {
    status: ['status', optional(string())],
    data: ['data', optional(array(string()))],
  }
);
