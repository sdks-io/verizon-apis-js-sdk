/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CreateIoTApplicationRequest,
  createIoTApplicationRequestSchema,
} from '../models/createIoTApplicationRequest';
import {
  CreateIoTApplicationResponse,
  createIoTApplicationResponseSchema,
} from '../models/createIoTApplicationResponse';
import {
  CreateTargetRequest,
  createTargetRequestSchema,
} from '../models/createTargetRequest';
import {
  DeleteTargetRequest,
  deleteTargetRequestSchema,
} from '../models/deleteTargetRequest';
import {
  GenerateExternalIDRequest,
  generateExternalIDRequestSchema,
} from '../models/generateExternalIDRequest';
import {
  GenerateExternalIDResult,
  generateExternalIDResultSchema,
} from '../models/generateExternalIDResult';
import {
  QueryTargetRequest,
  queryTargetRequestSchema,
} from '../models/queryTargetRequest';
import { Target, targetSchema } from '../models/target';
import { array, string } from '../schema';
import { BaseController } from './baseController';

export class TargetsController extends BaseController {
  /**
   * Search for targets by property values. Returns an array of all matching target resources.
   *
   * @param body         Search for targets by property values.
   * @return Response from the API call
   */
  async queryTarget(
    body: QueryTargetRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Target[]>> {
    const req = this.createRequest('POST', '/targets/actions/query');
    req.baseUrl('Cloud Connector');
    const mapped = req.prepareArgs({ body: [body, queryTargetRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(array(targetSchema), requestOptions);
  }

  /**
   * Remove a target from a ThingSpace account.
   *
   * @param body         The request body identifies the target to delete.
   * @return Response from the API call
   */
  async deleteTarget(
    body: DeleteTargetRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/targets/actions/delete');
    req.baseUrl('Cloud Connector');
    const mapped = req.prepareArgs({ body: [body, deleteTargetRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.call(requestOptions);
  }

  /**
   * Define a target to receive data streams, alerts, or callbacks. After creating the target resource,
   * use its ID in a subscription to set up a data stream.
   *
   * @param body         The request body provides the details of the target that you
   *                                                   want to create.
   * @return Response from the API call
   */
  async createTarget(
    body: CreateTargetRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Target>> {
    const req = this.createRequest('POST', '/targets');
    req.baseUrl('Cloud Connector');
    const mapped = req.prepareArgs({ body: [body, createTargetRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(targetSchema, requestOptions);
  }

  /**
   * Create a unique string that ThingSpace will pass to AWS for increased security.
   *
   * @param body         The request body only contains the authenticating account.
   * @return Response from the API call
   */
  async generateTargetExternalID(
    body: GenerateExternalIDRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GenerateExternalIDResult>> {
    const req = this.createRequest('POST', '/targets/actions/newextid');
    req.baseUrl('Cloud Connector');
    const mapped = req.prepareArgs({
      body: [body, generateExternalIDRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate(false);
    return req.callAsJson(generateExternalIDResultSchema, requestOptions);
  }

  /**
   * Deploy a new Azure IoT Central application based on the Verizon ARM template within the specified
   * Azure Active Directory account.
   *
   * @param billingaccountID TThe ThingSpace ID of the authenticating billing
   *                                                               account.
   * @param body             The request body must include the UUID of the
   *                                                               subscription that you want to update plus any
   *                                                               properties that you want to change.
   * @return Response from the API call
   */
  async createAzureCentralIoTApplication(
    billingaccountID: string,
    body: CreateIoTApplicationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateIoTApplicationResponse>> {
    const req = this.createRequest('POST', '/targets/actions/newaic');
    req.baseUrl('Cloud Connector');
    const mapped = req.prepareArgs({
      billingaccountID: [billingaccountID, string()],
      body: [body, createIoTApplicationRequestSchema],
    });
    req.header('BillingaccountID', mapped.billingaccountID);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(createIoTApplicationResponseSchema, requestOptions);
  }
}
