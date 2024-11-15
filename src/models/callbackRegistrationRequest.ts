/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string, unknown } from '../schema';

/** Specifies the callback service that is being subscribed to and the URL where the listening service is running. */
export interface CallbackRegistrationRequest {
  /** The name of the billing account for which callback messages will be sent. Format: "##########-#####". */
  accountName: string;
  /** The name of the callback service, which identifies the type and format of messages that will be sent to the registered URL. */
  serviceName: string;
  /** The URL for your web server. */
  endpoint: string;
  /** Your HTTP headers. */
  httpHeaders?: unknown;
}

export const callbackRegistrationRequestSchema: Schema<CallbackRegistrationRequest> = object(
  {
    accountName: ['accountName', string()],
    serviceName: ['serviceName', string()],
    endpoint: ['endpoint', string()],
    httpHeaders: ['httpHeaders', optional(unknown())],
  }
);
