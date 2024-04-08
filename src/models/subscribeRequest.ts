/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { QosDeviceInfo, qosDeviceInfoSchema } from './qosDeviceInfo';

export interface SubscribeRequest {
  accountName: string;
  deviceInfo: QosDeviceInfo[];
}

export const subscribeRequestSchema: Schema<SubscribeRequest> = object({
  accountName: ['accountName', string()],
  deviceInfo: ['deviceInfo', array(lazy(() => qosDeviceInfoSchema))],
});