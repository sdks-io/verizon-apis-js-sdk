/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Key service plan trigger attribute. */
export interface ServicePlanTriggerAttribute {
  /** The ServicePlan name will be listed here. */
  key?: string;
}

export const servicePlanTriggerAttributeSchema: Schema<ServicePlanTriggerAttribute> = object(
  { key: ['key', optional(string())] }
);