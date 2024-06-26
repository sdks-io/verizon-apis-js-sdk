/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { GIORestErrorResponseError } from '../errors/gIORestErrorResponseError';
import {
  GetDeviceListWithProfilesRequest,
  getDeviceListWithProfilesRequestSchema,
} from '../models/getDeviceListWithProfilesRequest';
import {
  GIORequestResponse,
  gIORequestResponseSchema,
} from '../models/gIORequestResponse';
import {
  ProvhistoryRequest,
  provhistoryRequestSchema,
} from '../models/provhistoryRequest';
import { StatusResponse, statusResponseSchema } from '../models/statusResponse';
import { string } from '../schema';
import { BaseController } from './baseController';

export class DeviceActionsController extends BaseController {
  /**
   * Allows the profile to fetch the complete device list. This works with Verizon US and Global profiles.
   *
   * @param body         Device Profile Query
   * @return Response from the API call
   */
  async retrieveTheGlobalDeviceList(
    body: GetDeviceListWithProfilesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GIORequestResponse>> {
    const req = this.createRequest('POST', '/m2m/v2/devices/actions/list');
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      body: [body, getDeviceListWithProfilesRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(GIORestErrorResponseError, 'Error response');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(gIORequestResponseSchema, requestOptions);
  }

  /**
   * Retreive the provisioning history of a specific device or devices.
   *
   * @param body         Device Provisioning History
   * @return Response from the API call
   */
  async retrieveDeviceProvisioningHistory(
    body: ProvhistoryRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GIORequestResponse>> {
    const req = this.createRequest(
      'POST',
      '/m2m/v2/devices/history/actions/list'
    );
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({ body: [body, provhistoryRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(GIORestErrorResponseError, 'Error response');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(gIORequestResponseSchema, requestOptions);
  }

  /**
   * Get the status of an asynchronous request made with the Device Actions.
   *
   * @param accountName
   * @param requestID
   * @return Response from the API call
   */
  async getAsynchronousRequestStatus(
    accountName: string,
    requestID: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<StatusResponse>> {
    const req = this.createRequest('GET');
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      accountName: [accountName, string()],
      requestID: [requestID, string()],
    });
    req.appendTemplatePath`/m2m/v2/accounts/${mapped.accountName}/requests/${mapped.requestID}/status`;
    req.defaultToError(GIORestErrorResponseError, 'Error response');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(statusResponseSchema, requestOptions);
  }
}
