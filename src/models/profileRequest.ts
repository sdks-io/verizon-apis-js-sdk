/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { DeviceList, deviceListSchema } from './deviceList';
import {
  PrimaryPlaceOfUse,
  primaryPlaceOfUseSchema,
} from './primaryPlaceOfUse';

export interface ProfileRequest {
  accountName: string;
  devices: DeviceList[];
  carrierName?: string;
  servicePlan?: string;
  mdnZipCode?: string;
  primaryPlaceOfUse?: PrimaryPlaceOfUse[];
  smsrOid?: string;
  /** The name of the pool of IP addresses assigned to the profile. */
  carrierIpPoolName?: string;
}

export const profileRequestSchema: Schema<ProfileRequest> = object({
  accountName: ['accountName', string()],
  devices: ['devices', array(lazy(() => deviceListSchema))],
  carrierName: ['carrierName', optional(string())],
  servicePlan: ['servicePlan', optional(string())],
  mdnZipCode: ['mdnZipCode', optional(string())],
  primaryPlaceOfUse: [
    'primaryPlaceOfUse',
    optional(array(lazy(() => primaryPlaceOfUseSchema))),
  ],
  smsrOid: ['smsrOid', optional(string())],
  carrierIpPoolName: ['carrierIpPoolName', optional(string())],
});
