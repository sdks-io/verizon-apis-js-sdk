/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CarrierInformation,
  carrierInformationSchema,
} from './carrierInformation';
import { CustomFields, customFieldsSchema } from './customFields';
import { DeviceId, deviceIdSchema } from './deviceId';

/** Device that exist in Verizon Mobile Device Management (MDM). */
export interface ThingspaceDevice {
  /** The billing account that the device is associated with. */
  accountName?: string;
  /** The date that the device's current billing cycle ends. */
  billingCycleEndDate?: string;
  /** The carrier information associated with the device. */
  carrierInformations?: CarrierInformation[];
  /** True if the device is connected; false if it is not. */
  connected?: boolean;
  /** The date and time that the device was added to the system. */
  createdAt?: string;
  /** The custom fields and values that have been set for the device. */
  customFields?: CustomFields[];
  /** All identifiers for the device. */
  deviceIds?: DeviceId[];
  /** Any extended attributes for the device, as Key and Value pairs. The pairs listed below are returned as part of the response for a single device, but are not included if the request was for information about multiple devices. */
  extendedAttributes?: CustomFields[];
  /** The device groups that the device belongs to. */
  groupNames?: (string | null)[];
  /** The IP address of the device. */
  ipaddress?: string;
  /** The user who last activated the device. */
  lastActivationBy?: string;
  /** The date and time that the device was last activated. */
  lastActivationDate?: string;
  /** The most recent connection date and time. */
  lastConnectionDate?: string;
}

export const thingspaceDeviceSchema: Schema<ThingspaceDevice> = object({
  accountName: ['accountName', optional(string())],
  billingCycleEndDate: ['billingCycleEndDate', optional(string())],
  carrierInformations: [
    'carrierInformations',
    optional(array(lazy(() => carrierInformationSchema))),
  ],
  connected: ['connected', optional(boolean())],
  createdAt: ['createdAt', optional(string())],
  customFields: [
    'customFields',
    optional(array(lazy(() => customFieldsSchema))),
  ],
  deviceIds: ['deviceIds', optional(array(lazy(() => deviceIdSchema)))],
  extendedAttributes: [
    'extendedAttributes',
    optional(array(lazy(() => customFieldsSchema))),
  ],
  groupNames: ['groupNames', optional(array(nullable(string())))],
  ipaddress: ['ipAddress', optional(string())],
  lastActivationBy: ['lastActivationBy', optional(string())],
  lastActivationDate: ['lastActivationDate', optional(string())],
  lastConnectionDate: ['lastConnectionDate', optional(string())],
});
