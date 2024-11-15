/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ESIMDeviceId {
  id?: string;
  kind?: string;
}

export const eSIMDeviceIdSchema: Schema<ESIMDeviceId> = object({
  id: ['id', optional(string())],
  kind: ['kind', optional(string())],
});
