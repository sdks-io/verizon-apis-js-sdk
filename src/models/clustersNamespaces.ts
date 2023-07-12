/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  ClusterNamespacesLocation,
  clusterNamespacesLocationSchema,
} from './clusterNamespacesLocation';
import { ERNCluster, eRNClusterSchema } from './eRNCluster';

export interface ClustersNamespaces {
  location?: ClusterNamespacesLocation;
  cluster?: ERNCluster[];
}

export const clustersNamespacesSchema: Schema<ClustersNamespaces> = object({
  location: ['location', optional(lazy(() => clusterNamespacesLocationSchema))],
  cluster: ['cluster', optional(array(lazy(() => eRNClusterSchema)))],
});
