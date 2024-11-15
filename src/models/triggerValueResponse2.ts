/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Triggervalues2, triggervalues2Schema } from './triggervalues2';

export interface TriggerValueResponse2 {
  triggers?: Triggervalues2[];
}

export const triggerValueResponse2Schema: Schema<TriggerValueResponse2> = object(
  { triggers: ['triggers', optional(array(lazy(() => triggervalues2Schema)))] }
);
