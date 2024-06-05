/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { RestErrorResponseError } from '../errors/restErrorResponseError';
import {
  NotificationReportRequest,
  notificationReportRequestSchema,
} from '../models/notificationReportRequest';
import {
  RequestResponse,
  requestResponseSchema,
} from '../models/requestResponse';
import {
  StopMonitorRequest,
  stopMonitorRequestSchema,
} from '../models/stopMonitorRequest';
import { optional } from '../schema';
import { BaseController } from './baseController';

export class DeviceMonitoringController extends BaseController {
  /**
   * @param body         Create Reachability Report Request
   * @return Response from the API call
   */
  async deviceReachability(
    body: NotificationReportRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RequestResponse>> {
    const req = this.createRequest(
      'POST',
      '/m2m/v1/diagnostics/basic/devicereachability'
    );
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      body: [body, notificationReportRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, RestErrorResponseError, 'Error Response');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(requestResponseSchema, requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async stopDeviceReachability(
    body?: StopMonitorRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RequestResponse>> {
    const req = this.createRequest(
      'DELETE',
      '/m2m/v1/diagnostics/basic/devicereachability'
    );
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      body: [body, optional(stopMonitorRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, RestErrorResponseError, 'Error Response');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(requestResponseSchema, requestOptions);
  }
}
