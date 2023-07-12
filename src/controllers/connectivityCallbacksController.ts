/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ConnectivityManagementResultError,
} from '../errors/connectivityManagementResultError';
import {
  CallbackActionResult,
  callbackActionResultSchema,
} from '../models/callbackActionResult';
import {
  ConnectivityManagementCallback,
  connectivityManagementCallbackSchema,
} from '../models/connectivityManagementCallback';
import {
  RegisterCallbackRequest,
  registerCallbackRequestSchema,
} from '../models/registerCallbackRequest';
import { array, string } from '../schema';
import { BaseController } from './baseController';

export class ConnectivityCallbacksController extends BaseController {
  /**
   * Returns the name and endpoint URL of the callback listening services registered for a given account.
   *
   * @param aname Account name.
   * @return Response from the API call
   */
  async listRegisteredCallbacks(
    aname: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ConnectivityManagementCallback[]>> {
    const req = this.createRequest('GET');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({ aname: [aname, string()] });
    req.appendTemplatePath`/v1/callbacks/${mapped.aname}`;
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(
      array(connectivityManagementCallbackSchema),
      requestOptions
    );
  }

  /**
   * You are responsible for creating and running a listening process on your server at that URL.
   *
   * @param aname        Account name.
   * @param body         Request to register a callback.
   * @return Response from the API call
   */
  async registerCallback(
    aname: string,
    body: RegisterCallbackRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CallbackActionResult>> {
    const req = this.createRequest('POST');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      aname: [aname, string()],
      body: [body, registerCallbackRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v1/callbacks/${mapped.aname}`;
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(callbackActionResultSchema, requestOptions);
  }

  /**
   * Stops ThingSpace from sending callback messages for the specified account and service.
   *
   * @param aname Account name.
   * @param sname Service name.
   * @return Response from the API call
   */
  async deregisterCallback(
    aname: string,
    sname: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CallbackActionResult>> {
    const req = this.createRequest('DELETE');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      aname: [aname, string()],
      sname: [sname, string()],
    });
    req.appendTemplatePath`/v1/callbacks/${mapped.aname}/name/${mapped.sname}`;
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(callbackActionResultSchema, requestOptions);
  }
}
