/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { CustomFields, customFieldsSchema } from './customFields';

/** The provisioning history of a specified device during a specified time period. */
export interface ProvisioningHistory {
  /** The date and time when the provisioning event occured. */
  occurredAt?: string;
  /** The success or failure of the provisioning event. */
  status?: string;
  /** The user who performed the provisioning event. */
  eventBy?: string;
  /** The provisioning action:Activate,Suspend,Restore,Deactivate,Device Move. */
  eventType?: string;
  /** The MDN assigned to the device after the provisioning event. */
  mdn?: string;
  /** The MSISDN assigned to the device after the provisioning event. */
  msisdn?: string;
  /** The service plan of the device after the provisioning event occurred. */
  servicePlan?: string;
  /** Any extended attributes for the event, as Key and Value pairs. */
  extendedAttributes?: CustomFields[];
}

export const provisioningHistorySchema: Schema<ProvisioningHistory> = object({
  occurredAt: ['occurredAt', optional(string())],
  status: ['status', optional(string())],
  eventBy: ['eventBy', optional(string())],
  eventType: ['eventType', optional(string())],
  mdn: ['mdn', optional(string())],
  msisdn: ['msisdn', optional(string())],
  servicePlan: ['servicePlan', optional(string())],
  extendedAttributes: [
    'extendedAttributes',
    optional(array(lazy(() => customFieldsSchema))),
  ],
});
