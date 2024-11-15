/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, boolean, lazy, object, optional, Schema } from '../schema';
import { ReadySimDeviceId, readySimDeviceIdSchema } from './readySimDeviceId';
import { UsageHistory, usageHistorySchema } from './usageHistory';

export interface ResponseToUsageQuery {
  hasmoredata?: boolean;
  deviceId?: ReadySimDeviceId;
  usageHistory?: UsageHistory[];
}

export const responseToUsageQuerySchema: Schema<ResponseToUsageQuery> = object({
  hasmoredata: ['hasmoredata', optional(boolean())],
  deviceId: ['deviceId', optional(lazy(() => readySimDeviceIdSchema))],
  usageHistory: [
    'usageHistory',
    optional(array(lazy(() => usageHistorySchema))),
  ],
});
