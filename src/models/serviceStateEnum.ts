/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ServiceStateEnum
 */
export enum ServiceStateEnum {
  DRAFT = 'DRAFT',
  DESIGN = 'DESIGN',
  TESTING = 'TESTING',
  PUBLISH = 'PUBLISH',
  CERTIFY = 'CERTIFY',
  READYTOUSE = 'READY_TO_USE',
  DEPRECATE = 'DEPRECATE',
  DELETED = 'DELETED',
}

/**
 * Schema for ServiceStateEnum
 */
export const serviceStateEnumSchema: Schema<ServiceStateEnum> = stringEnum(ServiceStateEnum);
