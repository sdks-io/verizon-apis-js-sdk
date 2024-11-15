/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for NumericalDataUnitEnum
 */
export enum NumericalDataUnitEnum {
  SECOND = 'SECOND',
  MINUTE = 'MINUTE',
  HOUR = 'HOUR',
  DAY = 'DAY',
}

/**
 * Schema for NumericalDataUnitEnum
 */
export const numericalDataUnitEnumSchema: Schema<NumericalDataUnitEnum> = stringEnum(
  NumericalDataUnitEnum
);
