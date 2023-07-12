/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ClientCredentialsAuthManager } from './clientCredentialsAuthManager';
import { requestAuthenticationProvider } from './authentication';
import {
  AuthParams,
  ClientInterface,
  SdkRequestBuilder,
  SdkRequestBuilderFactory,
  Server,
} from './clientInterface';
import { Configuration, Environment } from './configuration';
import {
  DEFAULT_CONFIGURATION,
  DEFAULT_RETRY_CONFIG,
} from './defaultConfiguration';
import { ApiError } from './core';
import { setHeader } from './core';
import {
  AbortError,
  AuthenticatorInterface,
  createRequestBuilderFactory,
  HttpClientInterface,
  RetryConfiguration,
} from './core';
 import { HttpClient } from './clientAdapter';

const USER_AGENT = 'APIMATIC 3.0';

export class Client implements ClientInterface {
  private _config: Readonly<Configuration>;
  private _timeout: number;
  private _retryConfig: RetryConfiguration;
  private _requestBuilderFactory: SdkRequestBuilderFactory;
  public clientCredentialsAuthManager: ClientCredentialsAuthManager;

  constructor(config?: Partial<Configuration>) {
    this._config = {
      ...DEFAULT_CONFIGURATION,
      ...config,
    };
    this._retryConfig = {
      ...DEFAULT_RETRY_CONFIG,
      ...this._config.httpClientOptions?.retryConfig,
    };
    this._timeout =
      typeof this._config.httpClientOptions?.timeout != 'undefined'
        ? this._config.httpClientOptions.timeout
        : this._config.timeout;
    this._requestBuilderFactory = createRequestHandlerFactory(
      server => getBaseUri(server, this._config),
      requestAuthenticationProvider(this._config.oauthToken),
      new HttpClient(AbortError, {
        timeout: this._timeout,
        clientConfigOverrides: this._config.unstable_httpClientOptions,
        httpAgent: this._config.httpClientOptions?.httpAgent,
        httpsAgent: this._config.httpClientOptions?.httpsAgent,
      }),
      [
        withErrorHandlers,
        withUserAgent,
        withAuthenticationByDefault,
        withVZM2mToken(this._config),
      ],
      this._retryConfig
    );
    this.clientCredentialsAuthManager = new ClientCredentialsAuthManager(
      this._config,
      this
    );
  }

  public getRequestBuilderFactory(): SdkRequestBuilderFactory {
    return this._requestBuilderFactory;
  }

  /**
   * Clone this client and override given configuration options
   */
  public withConfiguration(config: Partial<Configuration>) {
    return new Client({ ...this._config, ...config });
  }
}

function createHttpClientAdapter(client: HttpClient): HttpClientInterface {
  return async (request, requestOptions) => {
    return await client.executeRequest(request, requestOptions);
  };
}

function getBaseUri(server: Server = 'Edge Discovery', config: Configuration): string {
  if (config.environment === Environment.Production) {
    if (server === 'Edge Discovery') {
      return 'https://5gedge.verizon.com/api/mec/eds';
    }
    if (server === 'OAuth Server') {
      return 'https://thingspace.verizon.com/api/ts/v1';
    }
    if (server === 'M2M') {
      return 'https://thingspace.verizon.com/api/m2m';
    }
    if (server === 'Device Location') {
      return 'https://thingspace.verizon.com/api/loc/v1';
    }
    if (server === 'Subscription Server') {
      return 'https://thingspace.verizon.com/api/subsc/v1';
    }
    if (server === 'Software Management V1') {
      return 'https://thingspace.verizon.com/api/fota/v1';
    }
    if (server === 'Software Management V2') {
      return 'https://thingspace.verizon.com/api/fota/v2';
    }
    if (server === 'Software Management V3') {
      return 'https://thingspace.verizon.com/api/fota/v3';
    }
    if (server === 'Performance') {
      return 'https://5gedge.verizon.com/api/mec';
    }
    if (server === 'Device Diagnostics') {
      return 'https://thingspace.verizon.com/api/diagnostics/v1';
    }
    if (server === 'Cloud Connector') {
      return 'https://thingspace.verizon.com/api/cc/v1';
    }
    if (server === 'Hyper Precise Location') {
      return 'https://thingspace.verizon.com/api/hyper-precise/v1';
    }
    if (server === 'Services') {
      return 'https://5gedge.verizon.com/api/mec/services';
    }
  }
  throw new Error('Could not get Base URL. Invalid environment or server.');
}

function createRequestHandlerFactory(
  baseUrlProvider: (server?: Server) => string,
  authProvider: AuthenticatorInterface<AuthParams>,
  httpClient: HttpClient,
  addons: ((rb: SdkRequestBuilder) => void)[],
  retryConfig: RetryConfiguration
): SdkRequestBuilderFactory {
  const requestBuilderFactory = createRequestBuilderFactory(
    createHttpClientAdapter(httpClient),
    baseUrlProvider,
    ApiError,
    authProvider,
    retryConfig
  );

  return tap(requestBuilderFactory, ...addons);
}

function tap(
  requestBuilderFactory: SdkRequestBuilderFactory,
  ...callback: ((requestBuilder: SdkRequestBuilder) => void)[]
): SdkRequestBuilderFactory {
  return (...args) => {
    const requestBuilder = requestBuilderFactory(...args);
    callback.forEach(c => c(requestBuilder));
    return requestBuilder;
  };
}

function withErrorHandlers(rb: SdkRequestBuilder) {
  rb.defaultToError(ApiError);
}

function withUserAgent(rb: SdkRequestBuilder) {
  rb.header('user-agent', USER_AGENT);
}

function withVZM2mToken({ vZM2mToken }: { vZM2mToken: string }) {
  return (rb: SdkRequestBuilder) => {
    rb.interceptRequest(request => {
      const headers = request.headers ?? {};
      setHeader(headers, 'VZ-M2M-Token', vZM2mToken);
      return { ...request, headers };
    });
  };
}

function withAuthenticationByDefault(rb: SdkRequestBuilder) {
  rb.authenticate(true);
}
