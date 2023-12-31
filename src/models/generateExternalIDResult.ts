/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** A new external ID. */
export interface GenerateExternalIDResult {
  /** Newly created security string. */
  externalid?: string;
}

export const generateExternalIDResultSchema: Schema<GenerateExternalIDResult> = object(
  { externalid: ['externalid', optional(string())] }
);
