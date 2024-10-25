/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { PWNProfile, pWNProfileSchema } from './pWNProfile';

export interface PWNProfileList {
  profiles?: PWNProfile[];
}

export const pWNProfileListSchema: Schema<PWNProfileList> = object({
  profiles: ['profiles', optional(array(lazy(() => pWNProfileSchema)))],
});
