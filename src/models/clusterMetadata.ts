/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Cloud, cloudSchema } from './cloud';
import { ClusterTypeEnum, clusterTypeEnumSchema } from './clusterTypeEnum';
import { DataCenter, dataCenterSchema } from './dataCenter';
import {
  EdgeServiceLaunchParams,
  edgeServiceLaunchParamsSchema,
} from './edgeServiceLaunchParams';
import {
  ServiceLaunchClusterAdditionalParams,
  serviceLaunchClusterAdditionalParamsSchema,
} from './serviceLaunchClusterAdditionalParams';

export interface ClusterMetadata {
  /** Name of the cluster to be used. */
  name?: string;
  /** Description of the cluster. */
  description?: string;
  clusterType?: ClusterTypeEnum;
  cloud?: Cloud;
  dataCenter?: DataCenter;
  labels?: EdgeServiceLaunchParams[];
  ingressIps?: ServiceLaunchClusterAdditionalParams;
  upgradeProtection?: boolean;
}

export const clusterMetadataSchema: Schema<ClusterMetadata> = object({
  name: ['name', optional(string())],
  description: ['description', optional(string())],
  clusterType: ['clusterType', optional(clusterTypeEnumSchema)],
  cloud: ['cloud', optional(lazy(() => cloudSchema))],
  dataCenter: ['dataCenter', optional(lazy(() => dataCenterSchema))],
  labels: [
    'labels',
    optional(array(lazy(() => edgeServiceLaunchParamsSchema))),
  ],
  ingressIps: [
    'ingressIps',
    optional(lazy(() => serviceLaunchClusterAdditionalParamsSchema)),
  ],
  upgradeProtection: ['upgradeProtection', optional(boolean())],
});