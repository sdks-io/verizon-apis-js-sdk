/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { GIODeviceId, gIODeviceIdSchema } from './gIODeviceId';

export interface AggregateUsage {
  deviceId?: GIODeviceId;
  /** The numeric name of the account, in the format "0000123456-00001". Leading zeros must be included. */
  accountName?: string;
  /** The start date of the time period queried as "$datetime" */
  earliest?: string;
  /** The end date of the time period being queried as "$datetime" */
  latest?: string;
}

export const aggregateUsageSchema: Schema<AggregateUsage> = object({
  deviceId: ['deviceId', optional(lazy(() => gIODeviceIdSchema))],
  accountName: ['accountName', optional(string())],
  earliest: ['earliest', optional(string())],
  latest: ['latest', optional(string())],
});
