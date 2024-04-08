/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for FirmwareProtocolEnum
 */
export enum FirmwareProtocolEnum {
  LWM2m = 'LWM2M',
  OMDDM = 'OMD-DM',
  All = 'all',
}

/**
 * Schema for FirmwareProtocolEnum
 */
export const  firmwareProtocolEnumSchema: Schema<FirmwareProtocolEnum> = stringEnum(FirmwareProtocolEnum);
