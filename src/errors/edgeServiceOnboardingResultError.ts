/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of EdgeServiceOnboardingResult
 */
interface EdgeServiceOnboardingResult {
  /** Code of the error. eg: SDMS_000_000. */
  code?: string;
  /** Brief description of the error in the form of a message. */
  message?: string;
  /** Suggestion on how to fix the issue. */
  remedyMessage?: string;
}

export class EdgeServiceOnboardingResultError extends ApiError<EdgeServiceOnboardingResult> {}
