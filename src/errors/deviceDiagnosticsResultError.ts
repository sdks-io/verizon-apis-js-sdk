/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of DeviceDiagnosticsResult
 */
interface DeviceDiagnosticsResult {
  /** Simple error code. */
  errorCode: string;
  /** Detailed error message. */
  errorMessage: string;
}

export class DeviceDiagnosticsResultError extends ApiError<
  DeviceDiagnosticsResult
> {}