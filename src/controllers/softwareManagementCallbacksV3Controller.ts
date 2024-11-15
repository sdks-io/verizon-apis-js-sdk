/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  FotaV3CallbackRegistrationRequest,
  fotaV3CallbackRegistrationRequestSchema,
} from '../models/fotaV3CallbackRegistrationRequest';
import {
  FotaV3CallbackRegistrationResult,
  fotaV3CallbackRegistrationResultSchema,
} from '../models/fotaV3CallbackRegistrationResult';
import {
  FotaV3CallbackSummary,
  fotaV3CallbackSummarySchema,
} from '../models/fotaV3CallbackSummary';
import {
  FotaV3SuccessResult,
  fotaV3SuccessResultSchema,
} from '../models/fotaV3SuccessResult';
import { string } from '../schema';
import { BaseController } from './baseController';
import { FotaV3ResultError } from '../errors/fotaV3ResultError';

export class SoftwareManagementCallbacksV3Controller extends BaseController {
  /**
   * This endpoint allows user to get the registered callback information.
   *
   * @param acc Account identifier.
   * @return Response from the API call
   */
  async listRegisteredCallbacks(
    acc: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<FotaV3CallbackSummary>> {
    const req = this.createRequest('GET');
    req.baseUrl('Software Management V3');
    const mapped = req.prepareArgs({ acc: [acc, string()] });
    req.appendTemplatePath`/callbacks/${mapped.acc}`;
    req.throwOn(400, FotaV3ResultError, 'Unexpected error.');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(fotaV3CallbackSummarySchema, requestOptions);
  }

  /**
   * This endpoint allows the user to update the HTTPS callback address.
   *
   * @param acc          Account identifier.
   * @param body         Callback URL registration.
   * @return Response from the API call
   */
  async updateCallback(
    acc: string,
    body: FotaV3CallbackRegistrationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<FotaV3CallbackRegistrationResult>> {
    const req = this.createRequest('PUT');
    req.baseUrl('Software Management V3');
    const mapped = req.prepareArgs({
      acc: [acc, string()],
      body: [body, fotaV3CallbackRegistrationRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/callbacks/${mapped.acc}`;
    req.throwOn(400, FotaV3ResultError, 'Unexpected error.');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(
      fotaV3CallbackRegistrationResultSchema,
      requestOptions
    );
  }

  /**
   * This endpoint allows the user to create the HTTPS callback address.
   *
   * @param acc          Account identifier.
   * @param body         Callback URL registration.
   * @return Response from the API call
   */
  async registerCallback(
    acc: string,
    body: FotaV3CallbackRegistrationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<FotaV3CallbackRegistrationResult>> {
    const req = this.createRequest('POST');
    req.baseUrl('Software Management V3');
    const mapped = req.prepareArgs({
      acc: [acc, string()],
      body: [body, fotaV3CallbackRegistrationRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/callbacks/${mapped.acc}`;
    req.throwOn(400, FotaV3ResultError, 'Unexpected error.');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(
      fotaV3CallbackRegistrationResultSchema,
      requestOptions
    );
  }

  /**
   * This endpoint allows user to delete a previously registered callback URL.
   *
   * @param acc Account identifier.
   * @return Response from the API call
   */
  async deregisterCallback(
    acc: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<FotaV3SuccessResult>> {
    const req = this.createRequest('DELETE');
    req.baseUrl('Software Management V3');
    const mapped = req.prepareArgs({ acc: [acc, string()] });
    req.appendTemplatePath`/callbacks/${mapped.acc}`;
    req.throwOn(400, FotaV3ResultError, 'Unexpected error.');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(fotaV3SuccessResultSchema, requestOptions);
  }
}
