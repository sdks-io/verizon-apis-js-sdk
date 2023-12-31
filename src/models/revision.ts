/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  EdgeServiceLaunchParams,
  edgeServiceLaunchParamsSchema,
} from './edgeServiceLaunchParams';

export interface Revision {
  version: string;
  additionalParams?: EdgeServiceLaunchParams[] | null;
}

export const revisionSchema: Schema<Revision> = object({
  version: ['version', string()],
  additionalParams: [
    'additionalParams',
    optional(nullable(array(lazy(() => edgeServiceLaunchParamsSchema)))),
  ],
});
