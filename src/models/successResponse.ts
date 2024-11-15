/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

export interface SuccessResponse {
  success?: boolean;
}

export const successResponseSchema: Schema<SuccessResponse> = object({
  success: ['success', optional(boolean())],
});
