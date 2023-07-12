/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ResponseCodeEnum
 */
export enum ResponseCodeEnum {
  INVALIDACCESS = 'INVALID_ACCESS',
  INVALIDPARAMETER = 'INVALID_PARAMETER',
  INTERNALERROR = 'INTERNAL_ERROR',
  SUCCESS = 'SUCCESS',
}

/**
 * Schema for ResponseCodeEnum
 */
export const responseCodeEnumSchema: Schema<ResponseCodeEnum> = stringEnum(ResponseCodeEnum);