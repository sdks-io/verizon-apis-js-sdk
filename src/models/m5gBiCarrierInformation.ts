/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface M5gBiCarrierInformation {
  carrierName?: string;
}

export const m5gBiCarrierInformationSchema: Schema<M5gBiCarrierInformation> = object(
  { carrierName: ['carrierName', optional(string())] }
);
