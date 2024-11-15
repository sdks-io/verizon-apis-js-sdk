/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  AccountIdentifier,
  accountIdentifierSchema,
} from './accountIdentifier';
import {
  ResourceIdentifier,
  resourceIdentifierSchema,
} from './resourceIdentifier';

/** The request body identifies the device to delete. */
export interface RemoveDeviceRequest {
  /** The ID of the authenticating billing account, in the format `{"billingaccountid":"1234567890-12345"}`. */
  accountidentifier: AccountIdentifier;
  /** The ID of the target to delete, in the format {"id": "dd1682d3-2d80-cefc-f3ee-25154800beff"}. */
  resourceidentifier: ResourceIdentifier;
}

export const removeDeviceRequestSchema: Schema<RemoveDeviceRequest> = object({
  accountidentifier: ['accountidentifier', lazy(() => accountIdentifierSchema)],
  resourceidentifier: [
    'resourceidentifier',
    lazy(() => resourceIdentifierSchema),
  ],
});
