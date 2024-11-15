/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  AssignLicenseRequest,
  assignLicenseRequestSchema,
} from '../models/assignLicenseRequest';
import {
  SecuritySuccessResult,
  securitySuccessResultSchema,
} from '../models/securitySuccessResult';
import { optional, string } from '../schema';
import { BaseController } from './baseController';
import { SecurityResultError } from '../errors/securityResultError';

export class SIMSecureForIoTLicensesController extends BaseController {
  /**
   * Assigns SIM-Secure for IoT licenses to SIMs.
   *
   * @param body         Request to assign license to devices.
   * @param xRequestID   Transaction Id.
   * @return Response from the API call
   */
  async assignLicenseToDevices(
    body: AssignLicenseRequest,
    xRequestID?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SecuritySuccessResult>> {
    const req = this.createRequest(
      'POST',
      '/v1/devices/license/actions/assign'
    );
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, assignLicenseRequestSchema],
      xRequestID: [xRequestID, optional(string())],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-Request-ID', mapped.xRequestID);
    req.json(mapped.body);
    req.throwOn(400, SecurityResultError, 'Bad request.');
    req.throwOn(401, SecurityResultError, 'Unauthorized request.');
    req.throwOn(403, SecurityResultError, 'Request Forbidden.');
    req.throwOn(404, SecurityResultError, 'Not Found / Does not exist.');
    req.throwOn(406, SecurityResultError, 'Format / Request Unacceptable.');
    req.throwOn(429, SecurityResultError, 'Too many requests.');
    req.defaultToError(SecurityResultError, 'Error response.');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(securitySuccessResultSchema, requestOptions);
  }

  /**
   * Unassigns SIM-Secure for IoT Flexible and Flexible Bundle license from SIMs.
   *
   * @param xRequestID   Transaction Id.
   * @return Response from the API call
   */
  async unassignLicenseToDevices(
    xRequestID: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SecuritySuccessResult>> {
    const req = this.createRequest(
      'DELETE',
      '/v1/devices/license/actions/assign'
    );
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({ xRequestID: [xRequestID, string()] });
    req.header('X-Request-ID', mapped.xRequestID);
    req.throwOn(400, SecurityResultError, 'Bad request.');
    req.throwOn(401, SecurityResultError, 'Unauthorized request.');
    req.throwOn(403, SecurityResultError, 'Request forbidden.');
    req.throwOn(404, SecurityResultError, 'Not Found / Does not exist.');
    req.throwOn(406, SecurityResultError, 'Format / Request Unacceptable.');
    req.throwOn(429, SecurityResultError, 'Too many requests.');
    req.defaultToError(SecurityResultError, 'Error response.');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(securitySuccessResultSchema, requestOptions);
  }
}