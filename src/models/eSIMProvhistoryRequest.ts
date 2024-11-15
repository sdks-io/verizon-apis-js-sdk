/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { DeviceId2, deviceId2Schema } from './deviceId2';

export interface ESIMProvhistoryRequest {
  accountName?: string;
  deviceFilter?: DeviceId2[];
  earliest?: string;
  latest?: string;
}

export const eSIMProvhistoryRequestSchema: Schema<ESIMProvhistoryRequest> = object(
  {
    accountName: ['accountName', optional(string())],
    deviceFilter: [
      'deviceFilter',
      optional(array(lazy(() => deviceId2Schema))),
    ],
    earliest: ['earliest', optional(string())],
    latest: ['latest', optional(string())],
  }
);
