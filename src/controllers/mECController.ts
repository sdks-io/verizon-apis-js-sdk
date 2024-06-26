/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ChangeMecDeviceIPAddressResponse,
  changeMecDeviceIPAddressResponseSchema,
} from '../models/changeMecDeviceIPAddressResponse';
import {
  ChangeMecDeviceProfileResponse,
  changeMecDeviceProfileResponseSchema,
} from '../models/changeMecDeviceProfileResponse';
import {
  ChangeMecDeviceStateResponse,
  changeMecDeviceStateResponseSchema,
} from '../models/changeMecDeviceStateResponse';
import {
  ChangePmecDeviceProfileRequest,
  changePmecDeviceProfileRequestSchema,
} from '../models/changePmecDeviceProfileRequest';
import {
  ChangePmecDeviceStateActivateRequest,
  changePmecDeviceStateActivateRequestSchema,
} from '../models/changePmecDeviceStateActivateRequest';
import {
  ChangePmecDeviceStateBulkDeactivateRequest,
  changePmecDeviceStateBulkDeactivateRequestSchema,
} from '../models/changePmecDeviceStateBulkDeactivateRequest';
import {
  GetMECPerformanceConsentResponse,
  getMECPerformanceConsentResponseSchema,
} from '../models/getMECPerformanceConsentResponse';
import { KPIInfoList, kPIInfoListSchema } from '../models/kPIInfoList';
import { MECProfileList, mECProfileListSchema } from '../models/mECProfileList';
import { string } from '../schema';
import { BaseController } from './baseController';

export class MECController extends BaseController {
  /**
   * @param aname Account name.
   * @return Response from the API call
   */
  async kPIList(
    aname: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<KPIInfoList>> {
    const req = this.createRequest('GET');
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({ aname: [aname, string()] });
    req.appendTemplatePath`/m2m/v1/devices/mec/kpi/list/${mapped.aname}`;
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(kPIInfoListSchema, requestOptions);
  }

  /**
   * @param aname Account name.
   * @return Response from the API call
   */
  async getProfileList(
    aname: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<MECProfileList>> {
    const req = this.createRequest('GET');
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({ aname: [aname, string()] });
    req.appendTemplatePath`/m2m/v1/devices/mec/profiles/list/${mapped.aname}`;
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(mECProfileListSchema, requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async changePmecDeviceStateActivate(
    body: ChangePmecDeviceStateActivateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ChangeMecDeviceStateResponse>> {
    const req = this.createRequest(
      'POST',
      '/m2m/v1/devices/mec/actions/state/activate'
    );
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      body: [body, changePmecDeviceStateActivateRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(changeMecDeviceStateResponseSchema, requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async changePmecDeviceStateBulkDeactivate(
    body: ChangePmecDeviceStateBulkDeactivateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ChangeMecDeviceStateResponse>> {
    const req = this.createRequest(
      'POST',
      '/m2m/v1/devices/mec/actions/state/deactivate'
    );
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      body: [body, changePmecDeviceStateBulkDeactivateRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(changeMecDeviceStateResponseSchema, requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async changePmecDeviceProfile(
    body: ChangePmecDeviceProfileRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ChangeMecDeviceProfileResponse>> {
    const req = this.createRequest(
      'POST',
      '/m2m/v1/devices/mec/actions/profile'
    );
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      body: [body, changePmecDeviceProfileRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(changeMecDeviceProfileResponseSchema, requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async changePmecDeviceIPaddressBulk(
    body: ChangePmecDeviceStateBulkDeactivateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ChangeMecDeviceIPAddressResponse>> {
    const req = this.createRequest(
      'PUT',
      '/m2m/v1/devices/mec/actions/ipaddress'
    );
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      body: [body, changePmecDeviceStateBulkDeactivateRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(
      changeMecDeviceIPAddressResponseSchema,
      requestOptions
    );
  }

  /**
   * @param aname Account name.
   * @return Response from the API call
   */
  async getMECPerformanceConsent(
    aname: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetMECPerformanceConsentResponse>> {
    const req = this.createRequest('GET');
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({ aname: [aname, string()] });
    req.appendTemplatePath`/m2m/v1/devices/mec/performance/consent/${mapped.aname}`;
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(
      getMECPerformanceConsentResponseSchema,
      requestOptions
    );
  }
}
