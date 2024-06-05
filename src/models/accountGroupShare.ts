/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  AccountGroupShareIndividual,
  accountGroupShareIndividualSchema,
} from './accountGroupShareIndividual';

export interface AccountGroupShare {
  accountGroupShareIndividual?: AccountGroupShareIndividual;
}

export const accountGroupShareSchema: Schema<AccountGroupShare> = object({
  accountGroupShareIndividual: [
    'accountGroupShareIndividual',
    optional(lazy(() => accountGroupShareIndividualSchema)),
  ],
});