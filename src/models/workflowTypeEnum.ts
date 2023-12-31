/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for WorkflowTypeEnum
 */
export enum WorkflowTypeEnum {
  INSTALLATION = 'INSTALLATION',
  OPERATIONS = 'OPERATIONS',
  CUSTOM = 'CUSTOM',
}

/**
 * Schema for WorkflowTypeEnum
 */
export const workflowTypeEnumSchema: Schema<WorkflowTypeEnum> = stringEnum(WorkflowTypeEnum);
