/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Role of the user calling API. */
export interface Role {
  /** Account ID of the role. */
  accountId?: string;
  /** External ID of the role. */
  externalId?: string;
  /** Role ARN of the role. */
  roleARN?: string;
}

export const roleSchema: Schema<Role> = object({
  accountId: ['accountId', optional(string())],
  externalId: ['externalId', optional(string())],
  roleARN: ['roleARN', optional(string())],
});