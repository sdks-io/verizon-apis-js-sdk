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
import {
  TriggerNotification,
  triggerNotificationSchema,
} from './triggerNotification';

export interface CreateTriggerRequestOptions {
  /** Trigger name. */
  name?: string;
  /** This is the value to use in the request body to detect anomalous behaivior. The values in this table will only be relevant when this parameter is set to this value. */
  triggerCategory?: string;
  /** Account name. */
  accountName?: string;
  /** The details of the UsageAnomaly trigger. */
  anomalyTriggerRequest?: AnomalyTriggerRequest;
  /** The notification details of the trigger. */
  notification?: TriggerNotification;
  /** Indicates anomaly detection is active<br />True - Anomaly detection is active.<br />False - Anomaly detection is not active. */
  active?: boolean;
}

export const createTriggerRequestOptionsSchema: Schema<CreateTriggerRequestOptions> = object(
  {
    name: ['name', optional(string())],
    triggerCategory: ['triggerCategory', optional(string())],
    accountName: ['accountName', optional(string())],
    anomalyTriggerRequest: [
      'anomalyTriggerRequest',
      optional(lazy(() => anomalyTriggerRequestSchema)),
    ],
    notification: [
      'notification',
      optional(lazy(() => triggerNotificationSchema)),
    ],
    active: ['active', optional(boolean())],
  }
);