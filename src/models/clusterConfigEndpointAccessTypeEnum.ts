/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ClusterConfigEndpointAccessTypeEnum
 */
export enum ClusterConfigEndpointAccessTypeEnum {
  PrivateAccess = 'privateAccess',
  PrivatePublicAccess = 'privatePublicAccess',
  PublicAccess = 'publicAccess',
}

/**
 * Schema for ClusterConfigEndpointAccessTypeEnum
 */
export const clusterConfigEndpointAccessTypeEnumSchema: Schema<ClusterConfigEndpointAccessTypeEnum> = stringEnum(ClusterConfigEndpointAccessTypeEnum);
