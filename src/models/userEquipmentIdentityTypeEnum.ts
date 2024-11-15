/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for UserEquipmentIdentityTypeEnum
 */
export enum UserEquipmentIdentityTypeEnum {
  Ipaddress = 'IPAddress',
}

/**
 * Schema for UserEquipmentIdentityTypeEnum
 */
export const userEquipmentIdentityTypeEnumSchema: Schema<UserEquipmentIdentityTypeEnum> = stringEnum(
  UserEquipmentIdentityTypeEnum
);
