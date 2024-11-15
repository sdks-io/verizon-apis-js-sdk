/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of RulesEngineRestErrorResponse
 */
interface RulesEngineRestErrorResponse {
  errorCode?: string;
  errorMessage?: string;
  errorUrl?: string;
}

export class RulesEngineRestErrorResponseError extends ApiError<
  RulesEngineRestErrorResponse
> {}
