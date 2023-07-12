/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  DeviceDiagnosticsResultError,
} from '../errors/deviceDiagnosticsResultError';
import {
  CallbackRegistrationRequest,
  callbackRegistrationRequestSchema,
} from '../models/callbackRegistrationRequest';
import {
  DeviceDiagnosticsCallback,
  deviceDiagnosticsCallbackSchema,
} from '../models/deviceDiagnosticsCallback';
import { array, string } from '../schema';
import { BaseController } from './baseController';

export class DiagnosticsCallbacksController extends BaseController {
  /**
   * This endpoint allows user to get the registered callback information of an existing diagnostics
   * subscription.
   *
   * @param accountName Account identifier.
   * @return Response from the API call
   */
  async getDiagnosticsSubscriptionCallbackInfo(
    accountName: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceDiagnosticsCallback[]>> {
    const req = this.createRequest('GET', '/callbacks');
    req.baseUrl('Device Diagnostics');
    const mapped = req.prepareArgs({ accountName: [accountName, string()] });
    req.query('accountName', mapped.accountName);
    req.throwOn(400, DeviceDiagnosticsResultError, 'Unexpected error.');
    return req.callAsJson(
      array(deviceDiagnosticsCallbackSchema),
      requestOptions
    );
  }

  /**
   * This endpoint allows user update the callback HTTPS address of an existing diagnostics subscription.
   *
   * @param body         Callback URL registration request.
   * @return Response from the API call
   */
  async registerDiagnosticsCallbackURL(
    body: CallbackRegistrationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceDiagnosticsCallback>> {
    const req = this.createRequest('POST', '/callbacks');
    req.baseUrl('Device Diagnostics');
    const mapped = req.prepareArgs({
      body: [body, callbackRegistrationRequestSchema],
    });
    req.header('Content-Type', '*/*');
    req.json(mapped.body);
    req.throwOn(400, DeviceDiagnosticsResultError, 'Unexpected error.');
    return req.callAsJson(deviceDiagnosticsCallbackSchema, requestOptions);
  }

  /**
   * This endpoint allows user to delete a registered callback URL and credential.
   *
   * @param accountName Account identifier.
   * @param serviceName Service name for callback notification.
   * @return Response from the API call
   */
  async unregisterDiagnosticsCallback(
    accountName: string,
    serviceName: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceDiagnosticsCallback>> {
    const req = this.createRequest('DELETE', '/callbacks');
    req.baseUrl('Device Diagnostics');
    const mapped = req.prepareArgs({
      accountName: [accountName, string()],
      serviceName: [serviceName, string()],
    });
    req.query('accountName', mapped.accountName);
    req.query('serviceName', mapped.serviceName);
    req.throwOn(400, DeviceDiagnosticsResultError, 'Unexpected error.');
    return req.callAsJson(deviceDiagnosticsCallbackSchema, requestOptions);
  }
}
