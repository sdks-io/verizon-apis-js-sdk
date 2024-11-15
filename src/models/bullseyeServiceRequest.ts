/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import {
  DeviceServiceRequest,
  deviceServiceRequestSchema,
} from './deviceServiceRequest';

/** Account number and list of devices. */
export interface BullseyeServiceRequest {
  /** A list of devices. */
  deviceList: DeviceServiceRequest[];
  /** A unique identifier for an account. */
  accountNumber: string;
}

export const bullseyeServiceRequestSchema: Schema<BullseyeServiceRequest> = object(
  {
    deviceList: ['deviceList', array(lazy(() => deviceServiceRequestSchema))],
    accountNumber: ['accountNumber', string()],
  }
);