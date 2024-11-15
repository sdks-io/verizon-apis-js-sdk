/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema, string } from '../schema';
import { Notification, notificationSchema } from './notification';
import { PricePlanTrigger, pricePlanTriggerSchema } from './pricePlanTrigger';

/** Create Trigger Request */
export interface CreateTriggerV2Request {
  triggerName?: string;
  ecpdId?: string;
  deviceGroupName?: string;
  triggerCategory?: string;
  pricePlanTrigger?: PricePlanTrigger;
  notification?: Notification;
  active?: boolean;
}

export const createTriggerV2RequestSchema: Schema<CreateTriggerV2Request> = object(
  {
    triggerName: ['triggerName', optional(string())],
    ecpdId: ['ecpdId', optional(string())],
    deviceGroupName: ['deviceGroupName', optional(string())],
    triggerCategory: ['triggerCategory', optional(string())],
    pricePlanTrigger: [
      'pricePlanTrigger',
      optional(lazy(() => pricePlanTriggerSchema)),
    ],
    notification: ['notification', optional(lazy(() => notificationSchema))],
    active: ['active', optional(boolean())],
  }
);
