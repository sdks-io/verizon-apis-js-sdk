/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { CustomFields, customFieldsSchema } from './customFields';

/** The daily network data usage of a single device during a specified time period. */
export interface Usage {
  /** The number of bytes that the device sent or received on the report date. */
  bytesUsed?: bigint;
  /** The number of mobile-originated and mobile-terminated SMS messages on the report date. */
  extendedAttributes?: CustomFields[];
  /** The list of service plans associated with the device/account. */
  servicePlan?: string;
  /** The number of SMS messages that were sent or received on the report date. */
  smsUsed?: number;
  /** The source of the information for the reported usage. */
  source?: string;
  /** The date of the recorded usage. */
  timestamp?: string;
}

export const usageSchema: Schema<Usage> = object({
  bytesUsed: ['bytesUsed', optional(bigint())],
  extendedAttributes: [
    'extendedAttributes',
    optional(array(lazy(() => customFieldsSchema))),
  ],
  servicePlan: ['servicePlan', optional(string())],
  smsUsed: ['smsUsed', optional(number())],
  source: ['source', optional(string())],
  timestamp: ['timestamp', optional(string())],
});
