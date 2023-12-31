/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

/** Contains only dates when device had sessions. */
export interface DailyUsageItem {
  /** Start date of session. ISO 8601 format. */
  startTime?: string;
  /** End date of session. ISO 8601 format. */
  endTime?: string;
  /** Amount of data transferred, measured in Bytes. */
  numBytes?: number;
}

export const dailyUsageItemSchema: Schema<DailyUsageItem> = object({
  startTime: ['startTime', optional(string())],
  endTime: ['endTime', optional(string())],
  numBytes: ['numBytes', optional(number())],
});
