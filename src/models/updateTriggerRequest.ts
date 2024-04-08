/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema, string } from '../schema';
import {
  AnomalyTriggerRequest,
  anomalyTriggerRequestSchema,
} from './anomalyTriggerRequest';
import { CycleTypeEnum, cycleTypeEnumSchema } from './cycleTypeEnum';
import {
  DataTriggerRequest,
  dataTriggerRequestSchema,
} from './dataTriggerRequest';
import {
  PromoAlertTriggerRequest,
  promoAlertTriggerRequestSchema,
} from './promoAlertTriggerRequest';
import {
  SessionTriggerRequest,
  sessionTriggerRequestSchema,
} from './sessionTriggerRequest';
import { SMSTriggerRequest, sMSTriggerRequestSchema } from './sMSTriggerRequest';

export interface UpdateTriggerRequest {
  accountName?: string;
  active?: boolean;
  /** The details of the UsageAnomaly trigger. */
  anomalyTriggerRequest?: AnomalyTriggerRequest;
  cycleType?: CycleTypeEnum;
  dataTriggerRequest?: DataTriggerRequest;
  groupName?: string;
  promoAlertTriggerRequest?: PromoAlertTriggerRequest;
  sessionTriggerRequest?: SessionTriggerRequest;
  smsTriggerRequest?: SMSTriggerRequest;
  triggerCategory?: string;
  triggerId?: string;
  triggerName?: string;
}

export const updateTriggerRequestSchema: Schema<UpdateTriggerRequest> = object({
  accountName: ['accountName', optional(string())],
  active: ['active', optional(boolean())],
  anomalyTriggerRequest: [
    'anomalyTriggerRequest',
    optional(lazy(() => anomalyTriggerRequestSchema)),
  ],
  cycleType: ['cycleType', optional(cycleTypeEnumSchema)],
  dataTriggerRequest: [
    'dataTriggerRequest',
    optional(lazy(() => dataTriggerRequestSchema)),
  ],
  groupName: ['groupName', optional(string())],
  promoAlertTriggerRequest: [
    'promoAlertTriggerRequest',
    optional(lazy(() => promoAlertTriggerRequestSchema)),
  ],
  sessionTriggerRequest: [
    'sessionTriggerRequest',
    optional(lazy(() => sessionTriggerRequestSchema)),
  ],
  smsTriggerRequest: [
    'smsTriggerRequest',
    optional(lazy(() => sMSTriggerRequestSchema)),
  ],
  triggerCategory: ['triggerCategory', optional(string())],
  triggerId: ['triggerId', optional(string())],
  triggerName: ['triggerName', optional(string())],
});
