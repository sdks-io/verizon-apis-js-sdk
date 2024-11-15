/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** The customer address for the line's primary place of use, for line usage taxation. */
export interface Address {
  /** The street address for the line's primary place of use. This must be a physical address for taxation; it cannot be a P.O. box. */
  addressLine1: string;
  /** Optional additional street address information. */
  addressLine2?: string;
  /** The city for the line's primary place of use. */
  city: string;
  /** The state for the line's primary place of use. */
  state: string;
  /** The ZIP code for the line's primary place of use. */
  zip: string;
  /** The ZIP+4 for the line's primary place of use. */
  zip4?: string;
  /** Either “US” or “USA” for the country of the line's primary place of use. */
  country: string;
  /** A phone number where the customer can be reached. */
  phone?: string;
  /** A single letter to indicate the customer phone type. */
  phoneType?: string;
  /** An email address for the customer. */
  emailAddress?: string;
}

export const addressSchema: Schema<Address> = object({
  addressLine1: ['addressLine1', string()],
  addressLine2: ['addressLine2', optional(string())],
  city: ['city', string()],
  state: ['state', string()],
  zip: ['zip', string()],
  zip4: ['zip4', optional(string())],
  country: ['country', string()],
  phone: ['phone', optional(string())],
  phoneType: ['phoneType', optional(string())],
  emailAddress: ['emailAddress', optional(string())],
});
