/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { DeviceIdentifier, deviceIdentifierSchema } from './deviceIdentifier';

/** Get device experience score bulk request. */
export interface GetDeviceExperienceScoreBulkRequest {
  /** Account name. */
  accountName: string;
  deviceList: DeviceIdentifier[];
}

export const getDeviceExperienceScoreBulkRequestSchema: Schema<GetDeviceExperienceScoreBulkRequest> = object(
  {
    accountName: ['accountName', string()],
    deviceList: ['deviceList', array(lazy(() => deviceIdentifierSchema))],
  }
);
