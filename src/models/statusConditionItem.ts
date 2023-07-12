/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface StatusConditionItem {
  type?: string;
  status?: string;
  lastHeartbeatTime?: string;
  lastTransitionTime?: string;
  reason?: string;
  message?: string;
}

export const statusConditionItemSchema: Schema<StatusConditionItem> = object({
  type: ['type', optional(string())],
  status: ['status', optional(string())],
  lastHeartbeatTime: ['lastHeartbeatTime', optional(string())],
  lastTransitionTime: ['lastTransitionTime', optional(string())],
  reason: ['reason', optional(string())],
  message: ['message', optional(string())],
});
