/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  DeviceListWithServiceAddress1,
  deviceListWithServiceAddress1Schema,
} from './deviceListWithServiceAddress1';

export interface M5gBiactivateRequest {
  accountName?: string;
  servicePlan?: string;
  deviceListWithServiceAddress?: DeviceListWithServiceAddress1[];
  publicIpRestriction?: string;
  carrierName?: string;
  mdnZipCode?: string;
}

export const m5gBiactivateRequestSchema: Schema<M5gBiactivateRequest> = object({
  accountName: ['accountName', optional(string())],
  servicePlan: ['servicePlan', optional(string())],
  deviceListWithServiceAddress: [
    'deviceListWithServiceAddress',
    optional(array(lazy(() => deviceListWithServiceAddress1Schema))),
  ],
  publicIpRestriction: ['publicIpRestriction', optional(string())],
  carrierName: ['carrierName', optional(string())],
  mdnZipCode: ['mdnZipCode', optional(string())],
});
