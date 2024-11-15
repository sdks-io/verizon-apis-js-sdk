/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  AttributeIdentifierEnum,
  attributeIdentifierEnumSchema,
} from './attributeIdentifierEnum';

/** Streaming RF parameter that you want to observe. */
export interface ObservationRequestAttribute {
  /** Attribute identifier. */
  name?: AttributeIdentifierEnum;
}

export const observationRequestAttributeSchema: Schema<ObservationRequestAttribute> = object(
  { name: ['name', optional(attributeIdentifierEnumSchema)] }
);
