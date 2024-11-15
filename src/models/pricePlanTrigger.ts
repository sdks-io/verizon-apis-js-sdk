/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  AccountGroupShare,
  accountGroupShareSchema,
} from './accountGroupShare';

export interface PricePlanTrigger {
  accountGroupShare?: AccountGroupShare;
}

export const pricePlanTriggerSchema: Schema<PricePlanTrigger> = object({
  accountGroupShare: [
    'accountGroupShare',
    optional(lazy(() => accountGroupShareSchema)),
  ],
});
