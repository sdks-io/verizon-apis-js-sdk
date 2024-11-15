/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ClientTypeEnum
 */
export enum ClientTypeEnum {
  V2X = 'V2X',
  ComputerVision = 'ComputerVision',
  MachineLearning = 'MachineLearning',
  IoT = 'IoT',
  Gaming = 'Gaming',
  AR = 'AR',
  VR = 'VR',
  Analytics = 'Analytics',
  Robotics = 'Robotics',
}

/**
 * Schema for ClientTypeEnum
 */
export const clientTypeEnumSchema: Schema<ClientTypeEnum> = stringEnum(
  ClientTypeEnum
);
