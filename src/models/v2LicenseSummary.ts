/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { V2LicenseDevice, v2LicenseDeviceSchema } from './v2LicenseDevice';

/** Summary of license assignment. */
export interface V2LicenseSummary {
  /** Account identifier. */
  accountName: string;
  /** Total FOTA license count. */
  totalLicense?: number;
  /** Assigned FOTA license count. */
  assignedLicenses: number;
  /** True if there are more devices to retrieve. */
  hasMoreData: boolean;
  /** Last seen device identifier. */
  lastSeenDeviceId?: string;
  /** Maximum page size. */
  maxPageSize: number;
  /** Device IMEI list. */
  deviceList?: V2LicenseDevice[];
}

export const v2LicenseSummarySchema: Schema<V2LicenseSummary> = object({
  accountName: ['accountName', string()],
  totalLicense: ['totalLicense', optional(number())],
  assignedLicenses: ['assignedLicenses', number()],
  hasMoreData: ['hasMoreData', boolean()],
  lastSeenDeviceId: ['lastSeenDeviceId', optional(string())],
  maxPageSize: ['maxPageSize', number()],
  deviceList: [
    'deviceList',
    optional(array(lazy(() => v2LicenseDeviceSchema))),
  ],
});
