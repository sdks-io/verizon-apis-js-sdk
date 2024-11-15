/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { PWNDeviceId, pWNDeviceIdSchema } from './pWNDeviceId';

export interface DeviceListIP {
  deviceIds: PWNDeviceId[];
  ipaddress: string;
}

export const deviceListIPSchema: Schema<DeviceListIP> = object({
  deviceIds: ['deviceIds', array(lazy(() => pWNDeviceIdSchema))],
  ipaddress: ['ipAddress', string()],
});