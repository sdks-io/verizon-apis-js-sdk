/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { RequestBuilderFactory } from './core';

export interface ClientInterface {
  getRequestBuilderFactory(): SdkRequestBuilderFactory;
}

export type SdkRequestBuilderFactory = RequestBuilderFactory<
  Server,
  AuthParams
>;

export type SdkRequestBuilder = ReturnType<SdkRequestBuilderFactory>;

export type Server = 'Edge Discovery' | 'OAuth Server' | 'M2M' | 'Device Location' | 'Subscription Server' | 'Software Management V1' | 'Software Management V2' | 'Software Management V3' | 'Performance' | 'Device Diagnostics' | 'Cloud Connector' | 'Hyper Precise Location' | 'Services';

export type AuthParams = boolean;
