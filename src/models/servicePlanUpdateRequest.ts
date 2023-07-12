/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { AccountDeviceList, accountDeviceListSchema } from './accountDeviceList';
import { CustomFields, customFieldsSchema } from './customFields';

/** Request to update service plan. */
export interface ServicePlanUpdateRequest {
  /** The name of a billing account. */
  accountName?: string;
  /** The name of a service plan, if you want to only include devices that have that service plan. */
  currentServicePlan?: string;
  /** Custom field names and values, if you want to only include devices that have matching values. */
  customFields?: CustomFields[];
  /** A list of the devices that you want to change, specified by device identifier. */
  devices?: AccountDeviceList[];
  /** The name of a device group, if you want to restore service for all devices in that group. */
  groupName?: string;
  /** The service plan code that you want to assign to all specified devices. */
  servicePlan?: string;
}

export const servicePlanUpdateRequestSchema: Schema<ServicePlanUpdateRequest> = object(
  {
    accountName: ['accountName', optional(string())],
    currentServicePlan: ['currentServicePlan', optional(string())],
    customFields: [
      'customFields',
      optional(array(lazy(() => customFieldsSchema))),
    ],
    devices: ['devices', optional(array(lazy(() => accountDeviceListSchema)))],
    groupName: ['groupName', optional(string())],
    servicePlan: ['servicePlan', optional(string())],
  }
);
