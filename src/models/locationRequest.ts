/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { AccuracyModeEnum, accuracyModeEnumSchema } from './accuracyModeEnum';
import { CacheModeEnum, cacheModeEnumSchema } from './cacheModeEnum';
import { DeviceInfo, deviceInfoSchema } from './deviceInfo';

/** The body contains the the account name and list of devices that you want to locate, plus other options. */
export interface LocationRequest {
  /** Account identifier in "##########-#####". */
  accountName: string;
  /** Device list. */
  deviceList: DeviceInfo[];
  /** Accurary, currently only 0-coarse supported. */
  accuracyMode?: AccuracyModeEnum;
  /** Location cache mode. */
  cacheMode?: CacheModeEnum;
}

export const locationRequestSchema: Schema<LocationRequest> = object({
  accountName: ['accountName', string()],
  deviceList: ['deviceList', array(lazy(() => deviceInfoSchema))],
  accuracyMode: ['accuracyMode', optional(accuracyModeEnumSchema)],
  cacheMode: ['cacheMode', optional(cacheModeEnumSchema)],
});
