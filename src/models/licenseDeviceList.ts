/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { LicenseDeviceId, licenseDeviceIdSchema } from './licenseDeviceId';

/** List of all devices. */
export interface LicenseDeviceList {
  /** For 4G devices, IMEI (decimal, up to 15 digits). */
  deviceIds?: LicenseDeviceId[];
  ipaddress?: string;
}

export const licenseDeviceListSchema: Schema<LicenseDeviceList> = object({
  deviceIds: ['deviceIds', optional(array(lazy(() => licenseDeviceIdSchema)))],
  ipaddress: ['ipAddress', optional(string())],
});
