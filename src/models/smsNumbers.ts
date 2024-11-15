/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface SmsNumbers {
  number?: string;
  carrier?: string;
}

export const smsNumbersSchema: Schema<SmsNumbers> = object({
  number: ['number', optional(string())],
  carrier: ['carrier', optional(string())],
});