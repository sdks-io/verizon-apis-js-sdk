/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  MECPerformanceMetrics,
  mECPerformanceMetricsSchema,
} from '../models/mECPerformanceMetrics';
import {
  QueryMECPerformanceMetricsRequest,
  queryMECPerformanceMetricsRequestSchema,
} from '../models/queryMECPerformanceMetricsRequest';
import { optional } from '../schema';
import { BaseController } from './baseController';
import { EdgePerformanceResultError } from '../errors/edgePerformanceResultError';

export class PerformanceMetricsController extends BaseController {
  /**
   * Query the most recent data for Key Performance Indicators (KPIs) like network availability, MEC
   * hostnames and more.
   *
   * @param body
   * @return Response from the API call
   */
  async queryMECPerformanceMetrics(
    body?: QueryMECPerformanceMetricsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<MECPerformanceMetrics>> {
    const req = this.createRequest(
      'POST',
      '/performance/device/network/metrics'
    );
    req.baseUrl('Performance');
    const mapped = req.prepareArgs({
      body: [body, optional(queryMECPerformanceMetricsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, EdgePerformanceResultError, 'Bad Request.');
    req.throwOn(401, EdgePerformanceResultError, 'Unauthorized request.');
    req.throwOn(403, EdgePerformanceResultError, 'Request forbidden.');
    req.throwOn(404, EdgePerformanceResultError, 'Resource Not Found.');
    req.throwOn(405, EdgePerformanceResultError, 'Method Not Allowed.');
    req.throwOn(503, EdgePerformanceResultError, 'Service Unavailable.');
    req.authenticate([{ thingspaceOauth: true, vZM2mToken: true }]);
    return req.callAsJson(mECPerformanceMetricsSchema, requestOptions);
  }
}