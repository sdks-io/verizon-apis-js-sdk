/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { M201success, m201successSchema } from '../models/m201success';
import {
  SubscribeRequest,
  subscribeRequestSchema,
} from '../models/subscribeRequest';
import { string } from '../schema';
import { BaseController } from './baseController';
import { DefaultResponseError } from '../errors/defaultResponseError';

export class ThingSpaceQualityOfServiceAPIActionsController extends BaseController {
  /**
   * Creates a QoS elevation subscription ID and activates the subscription.
   *
   * @param body         The request details to create a ThingSpace Quality of Service API
   *                                                subscription.
   * @return Response from the API call
   */
  async createAThingSpaceQualityOfServiceAPISubscription(
    body: SubscribeRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<M201success>> {
    const req = this.createRequest(
      'POST',
      '/m2m/v1/devices/actions/enhanceQoS'
    );
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({ body: [body, subscribeRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(DefaultResponseError, 'Error Response');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(m201successSchema, requestOptions);
  }

  /**
   * Stops an active ThingSpace Quality of Service API subscription using the account name and the
   * subscription ID.
   *
   * @param accountName
   * @param qosSubscriptionId
   * @return Response from the API call
   */
  async stopAThingSpaceQualityOfServiceAPISubscription(
    accountName: string,
    qosSubscriptionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<M201success>> {
    const req = this.createRequest(
      'DELETE',
      '/m2m/v1/devices/actions/enhanceQoS'
    );
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      accountName: [accountName, string()],
      qosSubscriptionId: [qosSubscriptionId, string()],
    });
    req.query('accountName', mapped.accountName);
    req.query('qosSubscriptionId', mapped.qosSubscriptionId);
    req.defaultToError(DefaultResponseError, 'Error Response');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(m201successSchema, requestOptions);
  }
}
