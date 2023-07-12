# Device Reports

```ts
const deviceReportsController = new DeviceReportsController(client);
```

## Class Name

`DeviceReportsController`

## Methods

* [Calculate Aggregated Report Synchronous](../../doc/controllers/device-reports.md#calculate-aggregated-report-synchronous)
* [Calculate Aggregated Report Asynchronous](../../doc/controllers/device-reports.md#calculate-aggregated-report-asynchronous)
* [Get Sessions Report](../../doc/controllers/device-reports.md#get-sessions-report)


# Calculate Aggregated Report Synchronous

Calculate aggregated report per day with number of sessions and usage information. User will receive synchronous response for specified list of devices (Max 10) and date range (Max 180 days).

```ts
async calculateAggregatedReportSynchronous(
  body: AggregateSessionReportRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AggregateSessionReport>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AggregateSessionReportRequest`](../../doc/models/aggregate-session-report-request.md) | Body, Required | Aggregated report request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AggregateSessionReport`](../../doc/models/aggregate-session-report.md)

## Example Usage

```ts
const body: AggregateSessionReportRequest = {
  accountNumber: '0844021539-00001',
  imei: [
    '709312034493372'
  ],
  startDate: '2022-12-09T22:01:06.217Z',
  endDate: '2022-12-09T22:01:08.734Z',
  noSessionFlag: 'false',
};

try {
  const { result, ...httpResponse } = await deviceReportsController.calculateAggregatedReportSynchronous(body);
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
  "txid": null,
  "usage": [
    {
      "imei": "709312034493372",
      "numberOfSessions": 1,
      "bytesTransferred": 2057
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 401 | Unauthorized request. Access token is missing or invalid. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 403 | Forbidden request. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 404 | Bad request. Not found. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 409 | Bad request. Conflict state. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 500 | Internal Server Error. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |


# Calculate Aggregated Report Asynchronous

Calculate aggregated report per day with number of sessions and usage information. User will receive an asynchronous callback for the specified list of devices (Max 10000) and date range (Max 180 days).

```ts
async calculateAggregatedReportAsynchronous(
  body: AggregateSessionReportRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AggregatedReportCallbackResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AggregateSessionReportRequest`](../../doc/models/aggregate-session-report-request.md) | Body, Required | Aggregated session report request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AggregatedReportCallbackResult`](../../doc/models/aggregated-report-callback-result.md)

## Example Usage

```ts
const body: AggregateSessionReportRequest = {
  accountNumber: '0844021539-00001',
  imei: [
    '709312034493372'
  ],
  startDate: '2022-12-09T22:01:06.217Z',
  endDate: '2022-12-09T22:01:08.734Z',
  noSessionFlag: 'false',
};

try {
  const { result, ...httpResponse } = await deviceReportsController.calculateAggregatedReportAsynchronous(body);
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
  "txid": "60c07fff-470b-4d6d-afcc-75e6a7c238f6",
  "status": "QUEUED"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 401 | Unauthorized request. Access token is missing or invalid. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 403 | Forbidden request. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 404 | Bad request. Not found. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 409 | Bad request. Conflict state. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 500 | Internal Server Error. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |


# Get Sessions Report

Detailed report of session duration and number of bytes transferred per day.

```ts
async getSessionsReport(
  body: SessionReportRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SessionReport>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SessionReportRequest`](../../doc/models/session-report-request.md) | Body, Required | Request for sessions report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SessionReport`](../../doc/models/session-report.md)

## Example Usage

```ts
const body: SessionReportRequest = {
  accountNumber: '0844021539-00001',
  imei: '709312034493372',
  startDate: '2022-12-09T22:01:06.217Z',
  endDate: '2022-12-09T22:01:08.734Z',
};

try {
  const { result, ...httpResponse } = await deviceReportsController.getSessionsReport(body);
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
  "id": "709312034493372",
  "txid": "60c07fff-470b-4d6d-afcc-75e6a7c238f6"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 401 | Unauthorized request. Access token is missing or invalid. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 403 | Forbidden request. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 404 | Bad request. Not found. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 409 | Bad request. Conflict state. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 500 | Internal Server Error. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |

