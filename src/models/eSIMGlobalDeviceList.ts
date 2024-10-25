/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { DeviceId2, deviceId2Schema } from './deviceId2';
import {
  ProfileStatusFilterEnum,
  profileStatusFilterEnumSchema,
} from './profileStatusFilterEnum';
import {
  ProvisioningStatusFilterEnum,
  provisioningStatusFilterEnumSchema,
} from './provisioningStatusFilterEnum';

export interface ESIMGlobalDeviceList {
  /** The numeric name of the account. */
  accountName?: string;
  /** The last status of the device as a list filter. */
  provisioningStatusFilter?: ProvisioningStatusFilterEnum;
  /** The last status of the device's profile as a filter. */
  profileStatusFilter?: ProfileStatusFilterEnum;
  /** The cellular service provider. */
  carrierNameFilter?: string;
  /** An array of device identifiers to filter the list. */
  deviceFilter?: DeviceId2[];
}

export const eSIMGlobalDeviceListSchema: Schema<ESIMGlobalDeviceList> = object({
  accountName: ['accountName', optional(string())],
  provisioningStatusFilter: [
    'provisioningStatusFilter',
    optional(provisioningStatusFilterEnumSchema),
  ],
  profileStatusFilter: [
    'profileStatusFilter',
    optional(profileStatusFilterEnumSchema),
  ],
  carrierNameFilter: ['carrierNameFilter', optional(string())],
  deviceFilter: ['deviceFilter', optional(array(lazy(() => deviceId2Schema)))],
});
