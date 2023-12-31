/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ClaimStatusEnum
 */
export enum ClaimStatusEnum {
  UNVERIFIED = 'UNVERIFIED',
  VERIFIED = 'VERIFIED',
}

/**
 * Schema for ClaimStatusEnum
 */
export const claimStatusEnumSchema: Schema<ClaimStatusEnum> = stringEnum(ClaimStatusEnum);
