/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  SearchDeviceByPropertyFields,
  searchDeviceByPropertyFieldsSchema,
} from './searchDeviceByPropertyFields';

export interface Fields1 {
  /** List of device sensors and their most recently reported values. */
  item?: SearchDeviceByPropertyFields;
}

export const fields1Schema: Schema<Fields1> = object({
  item: ['item', optional(lazy(() => searchDeviceByPropertyFieldsSchema))],
});