/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

/** Trigger attribute for when data percentage is over 50% used. */
export interface DataPercentage50TriggerAttribute {
  /** Key data percentage 50. */
  key?: string;
  /** DataPercentage50<br />True - Trigger on Data percentage is over 50% used<br />False - Do not trigger when over 50% used. */
  value?: boolean;
}

export const dataPercentage50TriggerAttributeSchema: Schema<DataPercentage50TriggerAttribute> = object(
  { key: ['key', optional(string())], value: ['value', optional(boolean())] }
);
