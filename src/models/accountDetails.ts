/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Carrier, carrierSchema } from './carrier';
import {
  CarrierServicePlan,
  carrierServicePlanSchema,
} from './carrierServicePlan';
import { Feature, featureSchema } from './feature';

export interface AccountDetails {
  /** The numeric name of the account, in the format "0000123456-00001". Leading zeros must be included. */
  accountName?: string;
  /** The numeric name of the account, in the format "0000123456-00001". Leading zeros must be included. */
  accountNumber?: string;
  /** user defined name of organization */
  organizationName?: string;
  /** Flag set to indicate if account details can be edited or not. Default is "true". */
  isProvisioningAllowed?: boolean;
  carriers?: Carrier[];
  features?: Feature[];
  servicePlans?: CarrierServicePlan[];
}

export const accountDetailsSchema: Schema<AccountDetails> = object({
  accountName: ['accountName', optional(string())],
  accountNumber: ['accountNumber', optional(string())],
  organizationName: ['organizationName', optional(string())],
  isProvisioningAllowed: ['isProvisioningAllowed', optional(boolean())],
  carriers: ['carriers', optional(array(lazy(() => carrierSchema)))],
  features: ['features', optional(array(lazy(() => featureSchema)))],
  servicePlans: [
    'servicePlans',
    optional(array(lazy(() => carrierServicePlanSchema))),
  ],
});
