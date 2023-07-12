/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EndPointAccessTypeEnum
 */
export enum EndPointAccessTypeEnum {
  Private = 'private',
  Public = 'public',
  PrivateAndPublic = 'private_and_public',
}

/**
 * Schema for EndPointAccessTypeEnum
 */
export const endPointAccessTypeEnumSchema: Schema<EndPointAccessTypeEnum> = stringEnum(EndPointAccessTypeEnum);