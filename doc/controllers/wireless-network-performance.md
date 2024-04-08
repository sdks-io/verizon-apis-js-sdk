# Wireless Network Performance

```ts
const wirelessNetworkPerformanceController = new WirelessNetworkPerformanceController(client);
```

## Class Name

`WirelessNetworkPerformanceController`

## Methods

* [Near Real Time Network Conditions](../../doc/controllers/wireless-network-performance.md#near-real-time-network-conditions)
* [Domestic 4 G and 5G Nationwide Network Coverage](../../doc/controllers/wireless-network-performance.md#domestic-4-g-and-5g-nationwide-network-coverage)
* [Site Proximity](../../doc/controllers/wireless-network-performance.md#site-proximity)
* [Device Experience 30 Days History](../../doc/controllers/wireless-network-performance.md#device-experience-30-days-history)
* [Device Experience Bulk Latest](../../doc/controllers/wireless-network-performance.md#device-experience-bulk-latest)


# Near Real Time Network Conditions

WNP Query for current network condition.

```ts
async nearRealTimeNetworkConditions(
  body: GetNetworkConditionsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WNPRequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetNetworkConditionsRequest`](../../doc/models/get-network-conditions-request.md) | Body, Required | Request for current network health. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WNPRequestResponse`](../../doc/models/wnp-request-response.md)

## Example Usage

```ts
const body: GetNetworkConditionsRequest = {
  accountName: '0000123456-00001',
  locationType: 'LONGLAT',
  coordinates: {
    latitude: '-33.84819',
    longitude: '151.22049',
  },
};

try {
  const { result, ...httpResponse } = await wirelessNetworkPerformanceController.nearRealTimeNetworkConditions(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "requestId": "d1f08526-5443-4054-9a29-4456490ea9f8"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error response | [`WNPRestErrorResponseError`](../../doc/models/wnp-rest-error-response-error.md) |


# Domestic 4 G and 5G Nationwide Network Coverage

Run a report to determine network types available and available coverage. Network types covered include: CAT-M, NB-IOT, LTE, LTE-AWS and 5GNW.

```ts
async domestic4GAnd5gNationwideNetworkCoverage(
  body: GetWirelessCoverageRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WNPRequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetWirelessCoverageRequest`](../../doc/models/get-wireless-coverage-request.md) | Body, Required | Request for network coverage details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WNPRequestResponse`](../../doc/models/wnp-request-response.md)

## Example Usage

```ts
const body: GetWirelessCoverageRequest = {
  accountName: '0000123456-00001',
  requestType: 'NW',
  locationType: 'LONGLAT',
  locations: {
    coordinatesList: [
      {
        latitude: '-33.84819',
        longitude: '151.22049',
      }
    ],
  },
  networkTypesList: [
    {
      networkType: 'LTE',
    }
  ],
};

try {
  const { result, ...httpResponse } = await wirelessNetworkPerformanceController.domestic4GAnd5gNationwideNetworkCoverage(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "requestId": "d1f08526-5443-4054-9a29-4456490ea9f8"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error response | [`WNPRestErrorResponseError`](../../doc/models/wnp-rest-error-response-error.md) |


# Site Proximity

Identify the direction and general distance of nearby cell sites and the technology supported by the equipment.

```ts
async siteProximity(
  body: GetNetworkConditionsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WNPRequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetNetworkConditionsRequest`](../../doc/models/get-network-conditions-request.md) | Body, Required | Request for cell site proximity. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WNPRequestResponse`](../../doc/models/wnp-request-response.md)

## Example Usage

```ts
const body: GetNetworkConditionsRequest = {
  accountName: '0000123456-00001',
  locationType: 'LONGLAT',
  coordinates: {
    latitude: '-33.84819',
    longitude: '151.22049',
  },
};

try {
  const { result, ...httpResponse } = await wirelessNetworkPerformanceController.siteProximity(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "requestId": "d1f08526-5443-4054-9a29-4456490ea9f8"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error response | [`WNPRestErrorResponseError`](../../doc/models/wnp-rest-error-response-error.md) |


# Device Experience 30 Days History

A report of a specific device's service scores over a 30 day period.

```ts
async deviceExperience30daysHistory(
  body: GetDeviceExperienceScoreHistoryRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WNPRequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetDeviceExperienceScoreHistoryRequest`](../../doc/models/get-device-experience-score-history-request.md) | Body, Required | Request for a device's 30 day experience. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WNPRequestResponse`](../../doc/models/wnp-request-response.md)

## Example Usage

```ts
const body: GetDeviceExperienceScoreHistoryRequest = {
  accountName: '0000123456-00001',
  deviceId: {
    kind: 'iccid',
    id: '01234567899876543210',
    mdn: '0123456789',
  },
};

try {
  const { result, ...httpResponse } = await wirelessNetworkPerformanceController.deviceExperience30daysHistory(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "requestId": "d1f08526-5443-4054-9a29-4456490ea9f8"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error response | [`WNPRestErrorResponseError`](../../doc/models/wnp-rest-error-response-error.md) |


# Device Experience Bulk Latest

Run a report to view the latest device experience score for specific devices.

```ts
async deviceExperienceBulkLatest(
  body: GetDeviceExperienceScoreBulkRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WNPRequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetDeviceExperienceScoreBulkRequest`](../../doc/models/get-device-experience-score-bulk-request.md) | Body, Required | Request for bulk latest history details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WNPRequestResponse`](../../doc/models/wnp-request-response.md)

## Example Usage

```ts
const body: GetDeviceExperienceScoreBulkRequest = {
  accountName: '0000123456-00001',
  deviceList: [
    {
      kind: 'iccid',
      id: '01234567899876543210',
      mdn: '0123456789',
    }
  ],
};

try {
  const { result, ...httpResponse } = await wirelessNetworkPerformanceController.deviceExperienceBulkLatest(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "requestId": "d1f08526-5443-4054-9a29-4456490ea9f8"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error response | [`WNPRestErrorResponseError`](../../doc/models/wnp-rest-error-response-error.md) |

