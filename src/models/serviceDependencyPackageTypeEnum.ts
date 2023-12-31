/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ServiceDependencyPackageTypeEnum
 */
export enum ServiceDependencyPackageTypeEnum {
  HELM = 'HELM',
  YAML = 'YAML',
  TERRAFORM = 'TERRAFORM',
}

/**
 * Schema for ServiceDependencyPackageTypeEnum
 */
export const serviceDependencyPackageTypeEnumSchema: Schema<ServiceDependencyPackageTypeEnum> = stringEnum(ServiceDependencyPackageTypeEnum);
