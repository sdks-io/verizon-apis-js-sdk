/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  AccountIdentifier,
  accountIdentifierSchema,
} from './accountIdentifier';
import {
  CreateTargetRequestFields,
  createTargetRequestFieldsSchema,
} from './createTargetRequestFields';
import {
  TargetAuthentication,
  targetAuthenticationSchema,
} from './targetAuthentication';

/** Details of the target that you want to create. */
export interface CreateTargetRequest {
  /** The ID of the authenticating billing account, in the format `{"billingaccountid":"1234567890-12345"}`. */
  accountidentifier?: AccountIdentifier;
  /** The ID of the authenticating billing account. */
  billingaccountid?: string;
  /** Identifies the resource kind. Targets are ts.target. */
  kind?: string;
  /** The endpoint for notifications or data streams. The format depends on the selected `addressscheme`.<br />`streamrest` requires a `host:port` value <br />`streamawsiot` requres a valid ARN. */
  address?: string;
  /** The transport format. Valid values are: <br />streamawsiot - streamed data to an AWS account <br />streamrest - streamed REST data to a defined endpoint. */
  addressscheme?: string;
  fields?: CreateTargetRequestFields;
  /** Descriptive information about the target. */
  description?: string;
  /** Security identification string created by a POST /targets/actions/newextid request. */
  externalid?: string;
  /** Name of the target. */
  name?: string;
  /** AWS region value. */
  region?: string;
  /** OAuth 2.0 bearer token. */
  key1?: string;
  /** OAuth 2 token and refresh token for TS to stream events to Target. */
  oauth?: TargetAuthentication;
}

export const createTargetRequestSchema: Schema<CreateTargetRequest> = object({
  accountidentifier: [
    'accountidentifier',
    optional(lazy(() => accountIdentifierSchema)),
  ],
  billingaccountid: ['billingaccountid', optional(string())],
  kind: ['kind', optional(string())],
  address: ['address', optional(string())],
  addressscheme: ['addressscheme', optional(string())],
  fields: ['fields', optional(lazy(() => createTargetRequestFieldsSchema))],
  description: ['description', optional(string())],
  externalid: ['externalid', optional(string())],
  name: ['name', optional(string())],
  region: ['region', optional(string())],
  key1: ['key1', optional(string())],
  oauth: ['oauth', optional(lazy(() => targetAuthenticationSchema))],
});
