/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  FotaV3Subscription,
  fotaV3SubscriptionSchema,
} from '../models/fotaV3Subscription';
import { string } from '../schema';
import { BaseController } from './baseController';
import { FotaV3ResultError } from '../errors/fotaV3ResultError';

export class SoftwareManagementSubscriptionsV3Controller extends BaseController {
  /**
   * This endpoint retrieves a FOTA subscription by account.
   *
   * @param acc Account identifier.
   * @return Response from the API call
   */
  async getAccountSubscriptionStatus(
    acc: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<FotaV3Subscription>> {
    const req = this.createRequest('GET');
    req.baseUrl('Software Management V3');
    const mapped = req.prepareArgs({ acc: [acc, string()] });
    req.appendTemplatePath`/subscriptions/${mapped.acc}`;
    req.throwOn(400, FotaV3ResultError, 'Unexpected error.');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(fotaV3SubscriptionSchema, requestOptions);
  }
}
