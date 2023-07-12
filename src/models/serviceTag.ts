/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Service tag has key and value attribute. */
export interface ServiceTag {
  /** Service tag key attribute. */
  key?: string;
  /** Service tag value attribute. */
  value?: string;
}

export const serviceTagSchema: Schema<ServiceTag> = object({
  key: ['key', optional(string())],
  value: ['value', optional(string())],
});
