/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  DeviceListQueryResult,
  deviceListQueryResultSchema,
} from '../models/deviceListQueryResult';
import {
  DeviceUpgradeHistory,
  deviceUpgradeHistorySchema,
} from '../models/deviceUpgradeHistory';
import {
  UpgradeListQueryResult,
  upgradeListQueryResultSchema,
} from '../models/upgradeListQueryResult';
import {
  UpgradeStatusEnum,
  upgradeStatusEnumSchema,
} from '../models/upgradeStatusEnum';
import { array, string } from '../schema';
import { BaseController } from './baseController';
import { FotaV1ResultError } from '../errors/fotaV1ResultError';

export class SoftwareManagementReportsV1Controller extends BaseController {
  /**
   * Returns an array of all devices in the specified account. Each device object includes information
   * needed for managing firmware, including the device make and model, MDN and IMEI, and current
   * firmware version.
   *
   * @param account    Account identifier in "##########-#####".
   * @param startIndex Only return devices with IMEIs larger than this value. Use 0 for the first request.
   *                             If `hasMoreData`=true in the response, use the `lastSeenDeviceId` value from the
   *                             response as the startIndex in the next request.
   * @return Response from the API call
   */
  async listAccountDevices(
    account: string,
    startIndex: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceListQueryResult>> {
    const req = this.createRequest('GET');
    req.baseUrl('Software Management V1');
    const mapped = req.prepareArgs({
      account: [account, string()],
      startIndex: [startIndex, string()],
    });
    req.appendTemplatePath`/devices/${mapped.account}/index/${mapped.startIndex}`;
    req.throwOn(400, FotaV1ResultError, 'Unexpected error.');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(deviceListQueryResultSchema, requestOptions);
  }

  /**
   * Returns a list of all upgrades with a specified status.
   *
   * @param account       Account identifier in "##########-#####".
   * @param upgradeStatus The status of the upgrades that you want to retrieve.
   * @param startIndex    The zero-based number of the first record to return. Set startIndex=0
   *                                           for the first request. If `hasMoreFlag`=true in the response, use the
   *                                           `lastSeenUpgradeId` value from the response as the startIndex in the
   *                                           next request.
   * @return Response from the API call
   */
  async listUpgradesForSpecifiedStatus(
    account: string,
    upgradeStatus: UpgradeStatusEnum,
    startIndex: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpgradeListQueryResult>> {
    const req = this.createRequest('GET');
    req.baseUrl('Software Management V1');
    const mapped = req.prepareArgs({
      account: [account, string()],
      upgradeStatus: [upgradeStatus, upgradeStatusEnumSchema],
      startIndex: [startIndex, string()],
    });
    req.appendTemplatePath`/reports/${mapped.account}/status/${mapped.upgradeStatus}/index/${mapped.startIndex}`;
    req.throwOn(400, FotaV1ResultError, 'Unexpected error.');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(upgradeListQueryResultSchema, requestOptions);
  }

  /**
   * Returns the upgrade history of the specified device from the previous six months.
   *
   * @param account  Account identifier in "##########-#####".
   * @param deviceId The IMEI of the device.
   * @return Response from the API call
   */
  async getDeviceFirmwareUpgradeHistory(
    account: string,
    deviceId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceUpgradeHistory[]>> {
    const req = this.createRequest('GET');
    req.baseUrl('Software Management V1');
    const mapped = req.prepareArgs({
      account: [account, string()],
      deviceId: [deviceId, string()],
    });
    req.appendTemplatePath`/reports/${mapped.account}/devices/${mapped.deviceId}`;
    req.throwOn(400, FotaV1ResultError, 'Unexpected error.');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(array(deviceUpgradeHistorySchema), requestOptions);
  }
}
