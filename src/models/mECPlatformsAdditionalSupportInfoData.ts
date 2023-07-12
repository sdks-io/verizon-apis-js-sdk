/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Data about additional service support information for the MEC platform. */
export interface MECPlatformsAdditionalSupportInfoData {
  additionalInfo?: string;
}

export const mECPlatformsAdditionalSupportInfoDataSchema: Schema<MECPlatformsAdditionalSupportInfoData> = object(
  { additionalInfo: ['additionalInfo', optional(string())] }
);
