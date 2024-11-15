/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** The customer name to be used for line usage taxation. */
export interface CustomerName {
  /** An optional title for the customer, such as “Mr.” or “Dr.” */
  title?: string;
  /** The customer's first name. */
  firstName: string;
  /** The customer's middle name. */
  middleName?: string;
  /** The customer's last name. */
  lastName: string;
  /** An optional suffix for the customer name, such as “Jr.” or “III.” */
  suffix?: string;
}

export const customerNameSchema: Schema<CustomerName> = object({
  title: ['title', optional(string())],
  firstName: ['firstName', string()],
  middleName: ['middleName', optional(string())],
  lastName: ['lastName', string()],
  suffix: ['suffix', optional(string())],
});