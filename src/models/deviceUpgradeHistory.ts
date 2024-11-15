/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Firmware upgrade information. */
export interface DeviceUpgradeHistory {
  /** Device IMEI. */
  deviceId?: string;
  /** The unique identifier for the upgrade. */
  id?: string;
  /** The name (number) of the billing account that the device belongs to. */
  accountName?: string;
  /** The firmware version that was on the device before the upgrade. */
  firmwareFrom?: string;
  /** The name of the firmware version that was on the device after the upgrade. */
  firmwareTo?: string;
  /** The date of the upgrade. */
  startDate?: string;
  /** The date and time that the upgrade actually started for this device. */
  upgradeStartTime?: string;
  /** The status of the upgrade for this device. */
  status?: string;
  /** More information about the status. */
  reason?: string;
}

export const deviceUpgradeHistorySchema: Schema<DeviceUpgradeHistory> = object({
  deviceId: ['deviceId', optional(string())],
  id: ['id', optional(string())],
  accountName: ['accountName', optional(string())],
  firmwareFrom: ['firmwareFrom', optional(string())],
  firmwareTo: ['firmwareTo', optional(string())],
  startDate: ['startDate', optional(string())],
  upgradeStartTime: ['upgradeStartTime', optional(string())],
  status: ['status', optional(string())],
  reason: ['reason', optional(string())],
});
