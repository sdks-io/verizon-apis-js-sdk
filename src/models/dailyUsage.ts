/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { GIODeviceId, gIODeviceIdSchema } from './gIODeviceId';

export interface DailyUsage {
  deviceId?: GIODeviceId;
  /** The start date of the time period queried as "$datetime" */
  earliest?: string;
  /** The end date of the time period being queried as "$datetime" */
  latest?: string;
}

export const dailyUsageSchema: Schema<DailyUsage> = object({
  deviceId: ['deviceId', optional(lazy(() => gIODeviceIdSchema))],
  earliest: ['earliest', optional(string())],
  latest: ['latest', optional(string())],
});
