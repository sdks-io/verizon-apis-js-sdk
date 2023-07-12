/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Host information. */
export interface TargetAuthenticationBodyHost {
  hostandpath?: string;
}

export const targetAuthenticationBodyHostSchema: Schema<TargetAuthenticationBodyHost> = object(
  { hostandpath: ['hostandpath', optional(string())] }
);
