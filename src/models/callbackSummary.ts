/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Registered callback information. */
export interface CallbackSummary {
  /** Callback URL for an subscribed service. */
  url?: string;
}

export const callbackSummarySchema: Schema<CallbackSummary> = object({
  url: ['url', optional(string())],
});