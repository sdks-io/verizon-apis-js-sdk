/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface PWNDeviceId {
  id: string;
  kind: string;
}

export const pWNDeviceIdSchema: Schema<PWNDeviceId> = object({
  id: ['id', string()],
  kind: ['kind', string()],
});
