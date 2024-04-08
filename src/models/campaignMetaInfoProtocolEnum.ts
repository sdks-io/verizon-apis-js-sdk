/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CampaignMetaInfoProtocolEnum
 */
export enum CampaignMetaInfoProtocolEnum {
  LWM2m = 'LWM2M',
  OMDDM = 'OMD-DM',
}

/**
 * Schema for CampaignMetaInfoProtocolEnum
 */
export const  campaignMetaInfoProtocolEnumSchema: Schema<CampaignMetaInfoProtocolEnum> = stringEnum(CampaignMetaInfoProtocolEnum);
