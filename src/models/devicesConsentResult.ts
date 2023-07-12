/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface DevicesConsentResult {
  /** Account identifier in "##########-#####". */
  accountName?: string;
  /** Exclude all devices or not? */
  allDevice?: boolean;
  /** Are there more devices to retrieve or not? */
  hasMoreData?: boolean;
  /** Total number of excluded devices in the account. */
  totalCount?: number;
  /** Last update time. */
  updateTime?: string;
  /** Device ID list. */
  exclusion?: string[];
}

export const devicesConsentResultSchema: Schema<DevicesConsentResult> = object({
  accountName: ['accountName', optional(string())],
  allDevice: ['allDevice', optional(boolean())],
  hasMoreData: ['hasMoreData', optional(boolean())],
  totalCount: ['totalCount', optional(number())],
  updateTime: ['updateTime', optional(string())],
  exclusion: ['exclusion', optional(array(string()))],
});