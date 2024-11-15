/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { DeviceList, deviceListSchema } from './deviceList';

/** The request body identifies the devices to upload. */
export interface CheckOrderStatusRequest {
  /** The name of a billing account. An account name is usually numeric, and must include any leading zeros. */
  accountName: string;
  /** The request id from the activation order. */
  orderRequestId?: string;
  /** The devices to upload, specified by device IDs in a format matching uploadType. */
  devices: DeviceList[];
}

export const checkOrderStatusRequestSchema: Schema<CheckOrderStatusRequest> = object(
  {
    accountName: ['accountName', string()],
    orderRequestId: ['orderRequestId', optional(string())],
    devices: ['devices', array(lazy(() => deviceListSchema))],
  }
);
