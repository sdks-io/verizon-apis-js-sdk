/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for RequestStatusEnum
 */
export enum RequestStatusEnum {
  Pending = 'Pending',
  Success = 'Success',
  Failure = 'Failure',
}

/**
 * Schema for RequestStatusEnum
 */
export const requestStatusEnumSchema: Schema<RequestStatusEnum> = stringEnum(
  RequestStatusEnum
);
