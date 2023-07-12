# Performance Metrics

```ts
const performanceMetricsController = new PerformanceMetricsController(client);
```

## Class Name

`PerformanceMetricsController`


# Query MEC Performance Metrics

Query the most recent data for Key Performance Indicators (KPIs) like network availability, MEC hostnames and more.

```ts
async queryMECPerformanceMetrics(
  body?: QueryMECPerformanceMetricsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MECPerformanceMetrics>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`QueryMECPerformanceMetricsRequest \| undefined`](../../doc/models/query-mec-performance-metrics-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

`Edgediscoveryread`, `Edgeserviceprofileread`, `Edgeserviceprofilewrite`, `Edgeserviceregistryread`, `Edgeserviceregistrywrite`, `TsApplicationRo`, `TsMecFullaccess`, `TsMecLimitaccess`

## Response Type

[`MECPerformanceMetrics`](../../doc/models/mec-performance-metrics.md)

## Example Usage

```ts
const body: QueryMECPerformanceMetricsRequest = {
  iMEI: '440246108109673',
  mSISDN: '10691876598',
};

try {
  const { result, ...httpResponse } = await performanceMetricsController.queryMECPerformanceMetrics(
    body
  );
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
  "QueryStatus": "Success",
  "Start": "1/28/2021 12:00:00",
  "End": "1/28/2021 12:15:00",
  "QueryResult": [
    {
      "name": "NetworkAvailability",
      "data": [
        "100",
        "percent",
        "high"
      ]
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request. | [`EdgePerformanceResultError`](../../doc/models/edge-performance-result-error.md) |
| 401 | Unauthorized request. | [`EdgePerformanceResultError`](../../doc/models/edge-performance-result-error.md) |
| 403 | Request forbidden. | [`EdgePerformanceResultError`](../../doc/models/edge-performance-result-error.md) |
| 404 | Resource Not Found. | [`EdgePerformanceResultError`](../../doc/models/edge-performance-result-error.md) |
| 405 | Method Not Allowed. | [`EdgePerformanceResultError`](../../doc/models/edge-performance-result-error.md) |
| 503 | Service Unavailable. | [`EdgePerformanceResultError`](../../doc/models/edge-performance-result-error.md) |

