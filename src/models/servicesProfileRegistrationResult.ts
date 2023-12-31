/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ServicesProfileRegistrationResult {
  status?: string;
  message?: string;
}

export const servicesProfileRegistrationResultSchema: Schema<ServicesProfileRegistrationResult> = object(
  {
    status: ['status', optional(string())],
    message: ['message', optional(string())],
  }
);
