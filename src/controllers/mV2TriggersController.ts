/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CreateTriggerV2Request,
  createTriggerV2RequestSchema,
} from '../models/createTriggerV2Request';
import {
  TriggerV2Response,
  triggerV2ResponseSchema,
} from '../models/triggerV2Response';
import {
  UpdateTriggerV2Request,
  updateTriggerV2RequestSchema,
} from '../models/updateTriggerV2Request';
import { optional, string } from '../schema';
import { BaseController } from './baseController';
import { RulesEngineRestErrorResponseError } from '../errors/rulesEngineRestErrorResponseError';

export class MV2TriggersController extends BaseController {
  /**
   * This creates an individual change plan for account group share.
   *
   * @param body
   * @return Response from the API call
   */
  async createTrigger(
    body: CreateTriggerV2Request,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TriggerV2Response>> {
    const req = this.createRequest('POST', '/m2m/v2/triggers');
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      body: [body, createTriggerV2RequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, RulesEngineRestErrorResponseError, 'Error Response');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(triggerV2ResponseSchema, requestOptions);
  }

  /**
   * This updates an individual change plan for account group share.
   *
   * @param vZM2mToken   M2M-MC Session Token
   * @param body
   * @param xRequestID   Transaction Id
   * @return Response from the API call
   */
  async updateTrigger(
    vZM2mToken: string,
    body: UpdateTriggerV2Request,
    xRequestID?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TriggerV2Response>> {
    const req = this.createRequest('PUT', '/m2m/v2/triggers');
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      vZM2mToken: [vZM2mToken, string()],
      body: [body, updateTriggerV2RequestSchema],
      xRequestID: [xRequestID, optional(string())],
    });
    req.header('VZ-M2M-Token', mapped.vZM2mToken);
    req.header('Content-Type', 'application/json');
    req.header('X-Request-ID', mapped.xRequestID);
    req.json(mapped.body);
    req.throwOn(400, RulesEngineRestErrorResponseError, 'Error Response');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(triggerV2ResponseSchema, requestOptions);
  }
}
