/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ChangePWNDeviceIpaddressRequest,
  changePWNDeviceIpaddressRequestSchema,
} from '../models/changePWNDeviceIpaddressRequest';
import {
  ChangePWNDeviceIpaddressResponse,
  changePWNDeviceIpaddressResponseSchema,
} from '../models/changePWNDeviceIpaddressResponse';
import {
  ChangePWNDeviceProfileRequest,
  changePWNDeviceProfileRequestSchema,
} from '../models/changePWNDeviceProfileRequest';
import {
  ChangePWNDeviceProfileResponse,
  changePWNDeviceProfileResponseSchema,
} from '../models/changePWNDeviceProfileResponse';
import {
  ChangePWNDeviceStateActivateRequest,
  changePWNDeviceStateActivateRequestSchema,
} from '../models/changePWNDeviceStateActivateRequest';
import {
  ChangePWNDeviceStateDeactivateRequest,
  changePWNDeviceStateDeactivateRequestSchema,
} from '../models/changePWNDeviceStateDeactivateRequest';
import {
  ChangePWNDeviceStateResponse,
  changePWNDeviceStateResponseSchema,
} from '../models/changePWNDeviceStateResponse';
import {
  GetPWNPerformanceConsentResponse,
  getPWNPerformanceConsentResponseSchema,
} from '../models/getPWNPerformanceConsentResponse';
import { KPIInfoList, kPIInfoListSchema } from '../models/kPIInfoList';
import { PWNProfileList, pWNProfileListSchema } from '../models/pWNProfileList';
import { string } from '../schema';
import { BaseController } from './baseController';

export class PWNController extends BaseController {
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
    req.appendTemplatePath`/m2m/v1/devices/pwn/kpi/list/${mapped.aname}`;
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
  ): Promise<ApiResponse<PWNProfileList>> {
    const req = this.createRequest('GET');
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({ aname: [aname, string()] });
    req.appendTemplatePath`/m2m/v1/devices/pwn/profiles/list/${mapped.aname}`;
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(pWNProfileListSchema, requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async changePWNDeviceStateActivate(
    body: ChangePWNDeviceStateActivateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ChangePWNDeviceStateResponse>> {
    const req = this.createRequest(
      'POST',
      '/m2m/v1/devices/pwn/actions/state/activate'
    );
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      body: [body, changePWNDeviceStateActivateRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(changePWNDeviceStateResponseSchema, requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async changePWNDeviceStateDeactivate(
    body: ChangePWNDeviceStateDeactivateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ChangePWNDeviceStateResponse>> {
    const req = this.createRequest(
      'POST',
      '/m2m/v1/devices/pwn/actions/state/deactivate'
    );
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      body: [body, changePWNDeviceStateDeactivateRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(changePWNDeviceStateResponseSchema, requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async changePWNDeviceProfile(
    body: ChangePWNDeviceProfileRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ChangePWNDeviceProfileResponse>> {
    const req = this.createRequest(
      'POST',
      '/m2m/v1/devices/pwn/actions/profile'
    );
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      body: [body, changePWNDeviceProfileRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(changePWNDeviceProfileResponseSchema, requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async changePWNDeviceIpaddress(
    body: ChangePWNDeviceIpaddressRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ChangePWNDeviceIpaddressResponse>> {
    const req = this.createRequest(
      'PUT',
      '/m2m/v1/devices/pwn/actions/ipaddress'
    );
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({
      body: [body, changePWNDeviceIpaddressRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(
      changePWNDeviceIpaddressResponseSchema,
      requestOptions
    );
  }

  /**
   * @param aname Account name.
   * @return Response from the API call
   */
  async getPWNPerformanceConsent(
    aname: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetPWNPerformanceConsentResponse>> {
    const req = this.createRequest('GET');
    req.baseUrl('Thingspace');
    const mapped = req.prepareArgs({ aname: [aname, string()] });
    req.appendTemplatePath`/m2m/v1/devices/pwn/performance/consent/${mapped.aname}`;
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(
      getPWNPerformanceConsentResponseSchema,
      requestOptions
    );
  }
}
