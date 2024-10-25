/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  AccountDeviceList,
  accountDeviceListSchema,
} from './accountDeviceList';
import { CustomFields, customFieldsSchema } from './customFields';

/** Request to deactivate a carrier. */
export interface CarrierDeactivateRequest {
  /** The name of a billing account. */
  accountName: string;
  /** The devices for which you want to deactivate service, specified by device identifier. */
  devices: AccountDeviceList[];
  /** Code identifying the reason for the deactivation. Currently the only valid reason code is “FF”, which corresponds to General Admin/Maintenance. */
  reasonCode: string;
  /** Custom field names and values, if you want to only include devices that have matching values. */
  customFields?: CustomFields[];
  /** Fees may be assessed for deactivating Verizon Wireless devices, depending on the account contract. The etfWaiver parameter waives the Early Termination Fee (ETF), if applicable. */
  etfWaiver?: boolean;
  /** The name of a device group, if you want to deactivate all devices in that group. */
  groupName?: string;
  /** The name of a service plan, if you want to only include devices that have that service plan. */
  servicePlan?: string;
  deleteAfterDeactivation?: boolean;
}

export const carrierDeactivateRequestSchema: Schema<CarrierDeactivateRequest> = object(
  {
    accountName: ['accountName', string()],
    devices: ['devices', array(lazy(() => accountDeviceListSchema))],
    reasonCode: ['reasonCode', string()],
    customFields: [
      'customFields',
      optional(array(lazy(() => customFieldsSchema))),
    ],
    etfWaiver: ['etfWaiver', optional(boolean())],
    groupName: ['groupName', optional(string())],
    servicePlan: ['servicePlan', optional(string())],
    deleteAfterDeactivation: ['deleteAfterDeactivation', optional(boolean())],
  }
);
