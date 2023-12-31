/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Attribute of service. */
export interface ObservabilityTemplate {
  /** Auto generated id of the observabilityTemplate spec file uploaded. */
  id?: string;
}

export const observabilityTemplateSchema: Schema<ObservabilityTemplate> = object(
  { id: ['id', optional(string())] }
);
