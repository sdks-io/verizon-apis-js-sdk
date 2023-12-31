/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ManagedAccAddedList {
  /** Account name */
  id?: string;
  /** Transaction identifier */
  txid?: string;
}

export const managedAccAddedListSchema: Schema<ManagedAccAddedList> = object({
  id: ['id', optional(string())],
  txid: ['txid', optional(string())],
});
