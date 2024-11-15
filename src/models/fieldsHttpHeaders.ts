/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface FieldsHttpHeaders {
  authorization?: string;
}

export const fieldsHttpHeadersSchema: Schema<FieldsHttpHeaders> = object({
  authorization: ['Authorization', optional(string())],
});