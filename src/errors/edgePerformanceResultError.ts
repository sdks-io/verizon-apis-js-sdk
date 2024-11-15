/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of EdgePerformanceResult
 */
interface EdgePerformanceResult {
  /** HTTP status code. */
  status?: string;
  /** Error details. */
  message?: string;
}

export class EdgePerformanceResultError extends ApiError<
  EdgePerformanceResult
> {}