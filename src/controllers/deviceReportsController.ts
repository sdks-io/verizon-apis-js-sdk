/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  HyperPreciseLocationResultError,
} from '../errors/hyperPreciseLocationResultError';
import {
  AggregatedReportCallbackResult,
  aggregatedReportCallbackResultSchema,
} from '../models/aggregatedReportCallbackResult';
import {
  AggregateSessionReport,
  aggregateSessionReportSchema,
} from '../models/aggregateSessionReport';
import {
  AggregateSessionReportRequest,
  aggregateSessionReportRequestSchema,
} from '../models/aggregateSessionReportRequest';
import { SessionReport, sessionReportSchema } from '../models/sessionReport';
import {
  SessionReportRequest,
  sessionReportRequestSchema,
} from '../models/sessionReportRequest';
import { BaseController } from './baseController';

export class DeviceReportsController extends BaseController {
  /**
   * Calculate aggregated report per day with number of sessions and usage information. User will receive
   * synchronous response for specified list of devices (Max 10) and date range (Max 180 days).
   *
   * @param body         Aggregated report request.
   * @return Response from the API call
   */
  async calculateAggregatedReportSynchronous(
    body: AggregateSessionReportRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AggregateSessionReport>> {
    const req = this.createRequest('POST', '/report/aggregate');
    req.baseUrl('Hyper Precise Location');
    const mapped = req.prepareArgs({
      body: [body, aggregateSessionReportRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, HyperPreciseLocationResultError, 'Bad request.');
    req.throwOn(401, HyperPreciseLocationResultError, 'Unauthorized request. Access token is missing or invalid.');
    req.throwOn(403, HyperPreciseLocationResultError, 'Forbidden request.');
    req.throwOn(404, HyperPreciseLocationResultError, 'Bad request. Not found.');
    req.throwOn(409, HyperPreciseLocationResultError, 'Bad request. Conflict state.');
    req.throwOn(500, HyperPreciseLocationResultError, 'Internal Server Error.');
    return req.callAsJson(aggregateSessionReportSchema, requestOptions);
  }

  /**
   * Detailed report of session duration and number of bytes transferred per day.
   *
   * @param body         Request for sessions report.
   * @return Response from the API call
   */
  async getSessionsReport(
    body: SessionReportRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SessionReport>> {
    const req = this.createRequest('POST', '/report/sessions');
    req.baseUrl('Hyper Precise Location');
    const mapped = req.prepareArgs({
      body: [body, sessionReportRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, HyperPreciseLocationResultError, 'Bad request.');
    req.throwOn(401, HyperPreciseLocationResultError, 'Unauthorized request. Access token is missing or invalid.');
    req.throwOn(403, HyperPreciseLocationResultError, 'Forbidden request.');
    req.throwOn(404, HyperPreciseLocationResultError, 'Bad request. Not found.');
    req.throwOn(409, HyperPreciseLocationResultError, 'Bad request. Conflict state.');
    req.throwOn(500, HyperPreciseLocationResultError, 'Internal Server Error.');
    return req.callAsJson(sessionReportSchema, requestOptions);
  }

  /**
   * Calculate aggregated report per day with number of sessions and usage information. User will receive
   * an asynchronous callback for the specified list of devices (Max 10000) and date range (Max 180 days).
   *
   * @param body         Aggregated session report request.
   * @return Response from the API call
   */
  async calculateAggregatedReportAsynchronous(
    body: AggregateSessionReportRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AggregatedReportCallbackResult>> {
    const req = this.createRequest('POST', '/report/async/aggregate');
    req.baseUrl('Hyper Precise Location');
    const mapped = req.prepareArgs({
      body: [body, aggregateSessionReportRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, HyperPreciseLocationResultError, 'Bad request.');
    req.throwOn(401, HyperPreciseLocationResultError, 'Unauthorized request. Access token is missing or invalid.');
    req.throwOn(403, HyperPreciseLocationResultError, 'Forbidden request.');
    req.throwOn(404, HyperPreciseLocationResultError, 'Bad request. Not found.');
    req.throwOn(409, HyperPreciseLocationResultError, 'Bad request. Conflict state.');
    req.throwOn(500, HyperPreciseLocationResultError, 'Internal Server Error.');
    return req.callAsJson(aggregatedReportCallbackResultSchema, requestOptions);
  }
}
