/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface M5gBiattribute1 {
  key?: string;
}

export const m5gBiattribute1Schema: Schema<M5gBiattribute1> = object({
  key: ['key', optional(string())],
});