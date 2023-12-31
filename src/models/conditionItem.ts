/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ConditionItem {
  type?: string;
  status?: string;
  lastUpdated?: string;
  reason?: string;
}

export const conditionItemSchema: Schema<ConditionItem> = object({
  type: ['type', optional(string())],
  status: ['status', optional(string())],
  lastUpdated: ['lastUpdated', optional(string())],
  reason: ['reason', optional(string())],
});
