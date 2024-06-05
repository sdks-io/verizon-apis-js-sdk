/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { DeviceLocationResultError } from '../errors/deviceLocationResultError';
import {
  ManagedAccountCancelRequest,
  managedAccountCancelRequestSchema,
} from '../models/managedAccountCancelRequest';
import {
  ManagedAccountCancelResponse,
  managedAccountCancelResponseSchema,
} from '../models/managedAccountCancelResponse';
import {
  ManagedAccountsAddRequest,
  managedAccountsAddRequestSchema,
} from '../models/managedAccountsAddRequest';
import {
  ManagedAccountsAddResponse,
  managedAccountsAddResponseSchema,
} from '../models/managedAccountsAddResponse';
import {
  ManagedAccountsGetAllResponse,
  managedAccountsGetAllResponseSchema,
} from '../models/managedAccountsGetAllResponse';
import {
  ManagedAccountsProvisionRequest,
  managedAccountsProvisionRequestSchema,
} from '../models/managedAccountsProvisionRequest';
import {
  ManagedAccountsProvisionResponse,
  managedAccountsProvisionResponseSchema,
} from '../models/managedAccountsProvisionResponse';
import { string } from '../schema';
import { BaseController } from './baseController';

export class BillingController extends BaseController {
  /**
   * This endpoint allows user to add managed accounts to a primary account.
   *
   *
   * @param body         Service name and list of accounts to add
   * @return Response from the API call
   */
  async addAccount(
    body: ManagedAccountsAddRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ManagedAccountsAddResponse>> {
    const req = this.createRequest('POST', '/managedaccounts/actions/add');
    req.baseUrl('Subscription Server');
    const mapped = req.prepareArgs({
      body: [body, managedAccountsAddRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, DeviceLocationResultError, 'Unexpected error');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(managedAccountsAddResponseSchema, requestOptions);
  }

  /**
   * Activates a managed billing service relationship between a managed account and the primary account.
   *
   * @param body         Service name and list of accounts to add
   * @return Response from the API call
   */
  async managedAccountAction(
    body: ManagedAccountsProvisionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ManagedAccountsProvisionResponse>> {
    const req = this.createRequest(
      'POST',
      '/managedaccounts/actions/provision'
    );
    req.baseUrl('Subscription Server');
    const mapped = req.prepareArgs({
      body: [body, managedAccountsProvisionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, DeviceLocationResultError, 'Unexpected error');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(
      managedAccountsProvisionResponseSchema,
      requestOptions
    );
  }

  /**
   * Deactivates a managed billing service relationship between a managed account and the primary account.
   *
   *
   * @param body         Service name and list of accounts to add
   * @return Response from the API call
   */
  async cancelManagedAccountAction(
    body: ManagedAccountCancelRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ManagedAccountCancelResponse>> {
    const req = this.createRequest('POST', '/managedaccounts/actions/cancel');
    req.baseUrl('Subscription Server');
    const mapped = req.prepareArgs({
      body: [body, managedAccountCancelRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, DeviceLocationResultError, 'Unexpected error');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(managedAccountCancelResponseSchema, requestOptions);
  }

  /**
   * This endpoint allows user to retrieve the list of all accounts managed by a primary account.
   *
   * @param accountName Primary account identifier
   * @param serviceName Service name
   * @return Response from the API call
   */
  async listManagedAccount(
    accountName: string,
    serviceName: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ManagedAccountsGetAllResponse>> {
    const req = this.createRequest('GET');
    req.baseUrl('Subscription Server');
    const mapped = req.prepareArgs({
      accountName: [accountName, string()],
      serviceName: [serviceName, string()],
    });
    req.appendTemplatePath`/managedaccounts/${mapped.accountName}/service/${mapped.serviceName}`;
    req.throwOn(400, DeviceLocationResultError, 'Unexpected error');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(managedAccountsGetAllResponseSchema, requestOptions);
  }
}
