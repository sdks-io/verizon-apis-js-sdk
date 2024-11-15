/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  KeyDataPercentage50,
  keyDataPercentage50Schema,
} from './keyDataPercentage50';

export interface Triggervalues {
  triggerId?: string;
  triggerName?: string;
  accountName?: string;
  organizationName?: string;
  triggerCategory?: string;
  triggerAttributes?: KeyDataPercentage50[];
  createdAt?: string;
  modifiedAt?: string;
}

export const triggervaluesSchema: Schema<Triggervalues> = object({
  triggerId: ['triggerId', optional(string())],
  triggerName: ['triggerName', optional(string())],
  accountName: ['accountName', optional(string())],
  organizationName: ['organizationName', optional(string())],
  triggerCategory: ['triggerCategory', optional(string())],
  triggerAttributes: [
    'triggerAttributes',
    optional(array(lazy(() => keyDataPercentage50Schema))),
  ],
  createdAt: ['createdAt', optional(string())],
  modifiedAt: ['modifiedAt', optional(string())],
});