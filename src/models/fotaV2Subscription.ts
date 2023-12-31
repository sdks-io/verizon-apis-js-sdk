/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

/** FOTA Subscription. */
export interface FotaV2Subscription {
  /** Account identifier in "##########-#####". */
  accountName?: string;
  /** Subscription models used by the account. */
  purchaseType?: string;
  /** Number of monthly licenses in an MRC subscription. */
  licenseCount?: number;
  /** Number of licenses currently assigned to devices. */
  licenseUsedCount?: number;
  /** The date and time of when the subscription was last updated. */
  updateTime?: string;
}

export const fotaV2SubscriptionSchema: Schema<FotaV2Subscription> = object({
  accountName: ['accountName', optional(string())],
  purchaseType: ['purchaseType', optional(string())],
  licenseCount: ['licenseCount', optional(number())],
  licenseUsedCount: ['licenseUsedCount', optional(number())],
  updateTime: ['updateTime', optional(string())],
});
