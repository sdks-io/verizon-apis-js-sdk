
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `thingspaceOauthCredentials` | [`ThingspaceOauthCredentials`]($a/oauth-2-client-credentials-grant.md) | The credential object for thingspaceOauth |
| `vZM2mTokenCredentials` | [`VZM2MTokenCredentials`]($a/custom-header-signature.md) | The credential object for vZM2mToken |

## HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

## RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  thingspaceOauthCredentials: {
    oauthClientId: 'OAuthClientId',
    oauthClientSecret: 'OAuthClientSecret',
    oauthScopes: [
      OauthScopeThingspaceOauthEnum.Discoveryread,
      OauthScopeThingspaceOauthEnum.Serviceprofileread
    ]
  },
  vZM2mTokenCredentials: {  },
  timeout: 0,
  environment: Environment.Production,
});
```

## Verizon Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| m5gEdgePlatforms | Gets M5gEdgePlatformsController |
| serviceEndpoints | Gets ServiceEndpointsController |
| serviceProfiles | Gets ServiceProfilesController |
| deviceManagement | Gets DeviceManagementController |
| accounts | Gets AccountsController |
| deviceGroups | Gets DeviceGroupsController |
| sMS | Gets SMSController |
| sessionManagement | Gets SessionManagementController |
| connectivityCallbacks | Gets ConnectivityCallbacksController |
| accountRequests | Gets AccountRequestsController |
| servicePlans | Gets ServicePlansController |
| deviceDiagnostics | Gets DeviceDiagnosticsController |
| deviceProfileManagement | Gets DeviceProfileManagementController |
| deviceMonitoring | Gets DeviceMonitoringController |
| eUICCDeviceProfileManagement | Gets EUICCDeviceProfileManagementController |
| devicesLocations | Gets DevicesLocationsController |
| exclusions | Gets ExclusionsController |
| devicesLocationSubscriptions | Gets DevicesLocationSubscriptionsController |
| deviceLocationCallbacks | Gets DeviceLocationCallbacksController |
| usageTriggerManagement | Gets UsageTriggerManagementController |
| billing | Gets BillingController |
| softwareManagementSubscriptionsV1 | Gets SoftwareManagementSubscriptionsV1Controller |
| softwareManagementLicensesV1 | Gets SoftwareManagementLicensesV1Controller |
| firmwareV1 | Gets FirmwareV1Controller |
| softwareManagementCallbacksV1 | Gets SoftwareManagementCallbacksV1Controller |
| softwareManagementReportsV1 | Gets SoftwareManagementReportsV1Controller |
| softwareManagementSubscriptionsV2 | Gets SoftwareManagementSubscriptionsV2Controller |
| softwareManagementLicensesV2 | Gets SoftwareManagementLicensesV2Controller |
| campaignsV2 | Gets CampaignsV2Controller |
| softwareManagementCallbacksV2 | Gets SoftwareManagementCallbacksV2Controller |
| softwareManagementReportsV2 | Gets SoftwareManagementReportsV2Controller |
| clientLogging | Gets ClientLoggingController |
| serverLogging | Gets ServerLoggingController |
| configurationFiles | Gets ConfigurationFilesController |
| softwareManagementSubscriptionsV3 | Gets SoftwareManagementSubscriptionsV3Controller |
| softwareManagementLicensesV3 | Gets SoftwareManagementLicensesV3Controller |
| campaignsV3 | Gets CampaignsV3Controller |
| softwareManagementReportsV3 | Gets SoftwareManagementReportsV3Controller |
| firmwareV3 | Gets FirmwareV3Controller |
| accountDevices | Gets AccountDevicesController |
| softwareManagementCallbacksV3 | Gets SoftwareManagementCallbacksV3Controller |
| sIMSecureForIoTLicenses | Gets SIMSecureForIoTLicensesController |
| accountSubscriptions | Gets AccountSubscriptionsController |
| performanceMetrics | Gets PerformanceMetricsController |
| diagnosticsSubscriptions | Gets DiagnosticsSubscriptionsController |
| diagnosticsObservations | Gets DiagnosticsObservationsController |
| diagnosticsHistory | Gets DiagnosticsHistoryController |
| diagnosticsSettings | Gets DiagnosticsSettingsController |
| diagnosticsCallbacks | Gets DiagnosticsCallbacksController |
| diagnosticsFactoryReset | Gets DiagnosticsFactoryResetController |
| targets | Gets TargetsController |
| cloudConnectorSubscriptions | Gets CloudConnectorSubscriptionsController |
| cloudConnectorDevices | Gets CloudConnectorDevicesController |
| deviceServiceManagement | Gets DeviceServiceManagementController |
| deviceReports | Gets DeviceReportsController |
| hyperPreciseLocationCallbacks | Gets HyperPreciseLocationCallbacksController |
| anomalySettings | Gets AnomalySettingsController |
| anomalyTriggers | Gets AnomalyTriggersController |
| anomalyTriggersV2 | Gets AnomalyTriggersV2Controller |
| wirelessNetworkPerformance | Gets WirelessNetworkPerformanceController |
| fixedWirelessQualification | Gets FixedWirelessQualificationController |
| managingESIMProfiles | Gets ManagingESIMProfilesController |
| deviceSMSMessaging | Gets DeviceSMSMessagingController |
| deviceActions | Gets DeviceActionsController |
| thingSpaceQualityOfServiceAPIActions | Gets ThingSpaceQualityOfServiceAPIActionsController |
| mEC | Gets MECController |
| promotionPeriodInformation | Gets PromotionPeriodInformationController |
| retrieveTheTriggers | Gets RetrieveTheTriggersController |
| updateTriggers | Gets UpdateTriggersController |
| sIMActions | Gets SIMActionsController |
| globalReporting | Gets GlobalReportingController |
| mV2Triggers | Gets MV2TriggersController |
| oauthAuthorization | Gets OauthAuthorizationController |

