/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  M5gBiaddressAndcustomerinfo,
  m5gBiaddressAndcustomerinfoSchema,
} from './m5gBiaddressAndcustomerinfo';

export interface M5gBiaddressAndcustomerinfo2 {
  primaryPlaceofuse?: M5gBiaddressAndcustomerinfo;
}

export const m5gBiaddressAndcustomerinfo2Schema: Schema<M5gBiaddressAndcustomerinfo2> = object(
  {
    primaryPlaceofuse: [
      'primaryPlaceofuse',
      optional(lazy(() => m5gBiaddressAndcustomerinfoSchema)),
    ],
  }
);
