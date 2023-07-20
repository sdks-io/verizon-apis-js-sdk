/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  EdgeServiceOnboardingResultError,
} from '../errors/edgeServiceOnboardingResultError';
import { Category, categorySchema } from '../models/category';
import { Tag, tagSchema } from '../models/tag';
import { array, optional, string } from '../schema';
import { BaseController } from './baseController';

export class ServiceMetadataController extends BaseController {
  /**
   * Create a new Tag within user's organization.
   *
   * @param accountName   User account name.
   * @param body
   * @param correlationId
   * @return Response from the API call
   */
  async createServiceTag(
    accountName: string,
    body: Tag[],
    correlationId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Tag[]>> {
    const req = this.createRequest('POST', '/v1/tag/');
    req.baseUrl('Services');
    const mapped = req.prepareArgs({
      accountName: [accountName, string()],
      body: [body, array(tagSchema)],
      correlationId: [correlationId, optional(string())],
    });
    req.header('AccountName', mapped.accountName);
    req.header('Content-Type', 'application/json');
    req.header('correlationId', mapped.correlationId);
    req.json(mapped.body);
    req.throwOn(401, EdgeServiceOnboardingResultError, 'Unauthorized.');
    req.throwOn(404, EdgeServiceOnboardingResultError, 'Not found.');
    req.throwOn(415, EdgeServiceOnboardingResultError, 'Unsupported media type.');
    req.throwOn(500, EdgeServiceOnboardingResultError, 'Internal Server Error.');
    return req.callAsJson(array(tagSchema), requestOptions);
  }

  /**
   * Create a new category within user's organization.
   *
   * @param accountName   User account name.
   * @param body
   * @param correlationId
   * @return Response from the API call
   */
  async createServiceCategory(
    accountName: string,
    body: Category[],
    correlationId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Category[]>> {
    const req = this.createRequest('POST', '/v1/category');
    req.baseUrl('Services');
    const mapped = req.prepareArgs({
      accountName: [accountName, string()],
      body: [body, array(categorySchema)],
      correlationId: [correlationId, optional(string())],
    });
    req.header('AccountName', mapped.accountName);
    req.header('Content-Type', 'application/json');
    req.header('correlationId', mapped.correlationId);
    req.json(mapped.body);
    req.throwOn(400, EdgeServiceOnboardingResultError, 'Bad Request.');
    req.throwOn(401, EdgeServiceOnboardingResultError, 'Unauthorized.');
    req.throwOn(404, EdgeServiceOnboardingResultError, 'Not found.');
    req.throwOn(500, EdgeServiceOnboardingResultError, 'Internal Server Error.');
    return req.callAsJson(array(categorySchema), requestOptions);
  }
}
