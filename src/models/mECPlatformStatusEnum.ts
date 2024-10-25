/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MECPlatformStatusEnum
 */
export enum MECPlatformStatusEnum {
  Active = 'Active',
  Inactive = 'Inactive',
  Unknown = 'unknown',
}

/**
 * Schema for MECPlatformStatusEnum
 */
export const mECPlatformStatusEnumSchema: Schema<MECPlatformStatusEnum> = stringEnum(
  MECPlatformStatusEnum
);
