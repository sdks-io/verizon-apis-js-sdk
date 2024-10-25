/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { PWNDeviceId, pWNDeviceIdSchema } from './pWNDeviceId';

export interface PWNDeviceList {
  deviceIds: PWNDeviceId[];
}

export const pWNDeviceListSchema: Schema<PWNDeviceList> = object({
  deviceIds: ['deviceIds', array(lazy(() => pWNDeviceIdSchema))],
});