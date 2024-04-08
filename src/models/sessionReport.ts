/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { DailyUsageItem, dailyUsageItemSchema } from './dailyUsageItem';

/** Session report for a device. */
export interface SessionReport {
  /** An object containing the start and end time of the session with the amount of data transferred. */
  sessions?: DailyUsageItem[];
  /** The 10-digit ID of the device. */
  id: string;
  /** A unique string that associates the request with the location report information that is sent in asynchronous callback message.ThingSpace will send a separate callback message for each device that was in the request. All of the callback messages will have the same txid. */
  txid: string | null;
}

export const sessionReportSchema: Schema<SessionReport> = object({
  sessions: ['sessions', optional(array(lazy(() => dailyUsageItemSchema)))],
  id: ['id', string()],
  txid: ['txid', nullable(string())],
});
