/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AttributeIdentifierEnum
 */
export enum AttributeIdentifierEnum {
  NETWORKBEARER = 'NETWORK_BEARER',
  RADIOSIGNALSTRENGTH = 'RADIO_SIGNAL_STRENGTH',
  LINKQUALITY = 'LINK_QUALITY',
  CELLID = 'CELL_ID',
  MANUFACTURER = 'MANUFACTURER',
}

/**
 * Schema for AttributeIdentifierEnum
 */
export const attributeIdentifierEnumSchema: Schema<AttributeIdentifierEnum> = stringEnum(
  AttributeIdentifierEnum
);
