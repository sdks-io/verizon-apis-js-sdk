/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { GIODeviceId, gIODeviceIdSchema } from './gIODeviceId';

export interface GIODeviceList {
  deviceIds?: GIODeviceId[];
}

export const gIODeviceListSchema: Schema<GIODeviceList> = object({
  deviceIds: ['deviceIds', optional(array(lazy(() => gIODeviceIdSchema)))],
});