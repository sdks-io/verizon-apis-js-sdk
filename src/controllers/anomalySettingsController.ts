/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { IntelligenceResultError } from '../errors/intelligenceResultError';
import {
  AnomalyDetectionRequest,
  anomalyDetectionRequestSchema,
} from '../models/anomalyDetectionRequest';
import {
  AnomalyDetectionSettings,
  anomalyDetectionSettingsSchema,
} from '../models/anomalyDetectionSettings';
import {
  IntelligenceSuccessResult,
  intelligenceSuccessResultSchema,
} from '../models/intelligenceSuccessResult';
import { string } from '../schema';
import { BaseController } from './baseController';

export class AnomalySettingsController extends BaseController {
  /**
   * Uses the subscribed account ID to activate anomaly detection and set threshold values.
   *
   * @param body         Request to activate anomaly detection.
   * @return Response from the API call
   */
  async activateAnomalyDetection(
    body: AnomalyDetectionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<IntelligenceSuccessResult>> {
    const req = this.createRequest('PUT', '/v1/intelligence/anomaly/settings');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, anomalyDetectionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(IntelligenceResultError, 'An error occurred.');
    return req.callAsJson(intelligenceSuccessResultSchema, requestOptions);
  }

  /**
   * Resets the thresholds to zero.
   *
   * @param accountName The name of the subscribed account.
   * @return Response from the API call
   */
  async resetAnomalyDetectionParameters(
    accountName: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<IntelligenceSuccessResult>> {
    const req = this.createRequest('PUT');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({ accountName: [accountName, string()] });
    req.appendTemplatePath`/v1/intelligence/${mapped.accountName}/anomaly/settings/reset`;
    req.defaultToError(IntelligenceResultError, 'An error occurred.');
    return req.callAsJson(intelligenceSuccessResultSchema, requestOptions);
  }

  /**
   * Retrieves the current anomaly detection settings for an account.
   *
   * @param accountName The name of the subscribed account.
   * @return Response from the API call
   */
  async listAnomalyDetectionSettings(
    accountName: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AnomalyDetectionSettings>> {
    const req = this.createRequest('GET');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({ accountName: [accountName, string()] });
    req.appendTemplatePath`/v1/intelligence/${mapped.accountName}/anomaly/settings`;
    req.defaultToError(IntelligenceResultError, 'An error occurred.');
    return req.callAsJson(anomalyDetectionSettingsSchema, requestOptions);
  }
}
