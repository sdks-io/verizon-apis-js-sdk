/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface PropertyDeviceId {
  id?: string;
  /** The type of the device identifier. Valid types of identifiers are:ESN (decimal),EID,ICCID (up to 20 digits),IMEI (up to 16 digits),MDN,MEID (hexadecimal),MSISDN. */
  kind?: string;
}

export const propertyDeviceIdSchema: Schema<PropertyDeviceId> = object({
  id: ['id', optional(string())],
  kind: ['kind', optional(string())],
});
