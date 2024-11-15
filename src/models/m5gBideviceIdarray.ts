/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { M5gBideviceId1, m5gBideviceId1Schema } from './m5gBideviceId1';

export interface M5gBideviceIdarray {
  deviceId?: M5gBideviceId1[];
}

export const m5gBideviceIdarraySchema: Schema<M5gBideviceIdarray> = object({
  deviceId: ['deviceId', optional(array(lazy(() => m5gBideviceId1Schema)))],
});
