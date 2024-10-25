/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ARequestBodyForUsage,
  aRequestBodyForUsageSchema,
} from '../models/aRequestBodyForUsage';
import {
  RequestBodyForUsage,
  requestBodyForUsageSchema,
} from '../models/requestBodyForUsage';
import {
  ResponseToUsageQuery,
  responseToUsageQuerySchema,
} from '../models/responseToUsageQuery';
import {
  UsageRequestResponse,
  usageRequestResponseSchema,
} from '../models/usageRequestResponse';
import { BaseController } from './baseController';
import { ReadySimRestErrorResponseError } from '../errors/readySimRestErrorResponseError';

export class PromotionPeriodInformationController extends BaseController {
  /**
   * Retrieves the usage history of a device during the promotion period.
   *
   * @param body         Retrieve Aggregate Usage
   * @return Response from the API call
   */
  async getPromoDeviceUsageHistory(
    body: ARequestBodyForUsage,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseToUsageQuery>> {
    const req = this.createRequest(
      'POST',
      '/m2m/v1/devices/usage/actions/promodeviceusage'
    );
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      body: [body, aRequestBodyForUsageSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(
      ReadySimRestErrorResponseError,
      'All error responses will be in this format'
    );
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(responseToUsageQuerySchema, requestOptions);
  }

  /**
   * Retrieves the aggregate usage for an account using pseudo-MDN during the promotional period using a
   * callback.
   *
   * @param body         Retrieve Aggregate Usage
   * @return Response from the API call
   */
  async getPromoDeviceAggregateUsageHistory(
    body: RequestBodyForUsage,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UsageRequestResponse>> {
    const req = this.createRequest(
      'POST',
      '/m2m/v1/devices/usage/actions/promoaggregateusage'
    );
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({ body: [body, requestBodyForUsageSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(ReadySimRestErrorResponseError, 'Error response');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(usageRequestResponseSchema, requestOptions);
  }
}
