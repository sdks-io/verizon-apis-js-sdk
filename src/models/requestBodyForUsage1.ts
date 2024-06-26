/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { ReadySimDeviceId, readySimDeviceIdSchema } from './readySimDeviceId';

export interface RequestBodyForUsage1 {
  deviceId?: ReadySimDeviceId[];
  startTime?: string;
  endTime?: string;
}

export const requestBodyForUsage1Schema: Schema<RequestBodyForUsage1> = object({
  deviceId: ['deviceId', optional(array(lazy(() => readySimDeviceIdSchema)))],
  startTime: ['startTime', optional(string())],
  endTime: ['endTime', optional(string())],
});
