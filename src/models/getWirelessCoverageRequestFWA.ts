/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { Locations, locationsSchema } from './locations';
import { NetworkType, networkTypeSchema } from './networkType';

/** Get wireless coverage FWA. */
export interface GetWirelessCoverageRequestFWA {
  /** Account name. */
  accountName: string;
  /** Type of request. */
  requestType: string;
  /** Type of location detail. */
  locationType: string;
  /** Location details. */
  locations: Locations;
  networkTypesList: NetworkType[];
}

export const getWirelessCoverageRequestFWASchema: Schema<GetWirelessCoverageRequestFWA> = object(
  {
    accountName: ['accountName', string()],
    requestType: ['requestType', string()],
    locationType: ['locationType', string()],
    locations: ['locations', lazy(() => locationsSchema)],
    networkTypesList: [
      'networkTypesList',
      array(lazy(() => networkTypeSchema)),
    ],
  }
);
