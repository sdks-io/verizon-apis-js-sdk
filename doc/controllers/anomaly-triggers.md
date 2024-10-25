# Anomaly Triggers

```ts
const anomalyTriggersController = new AnomalyTriggersController(client);
```

## Class Name

`AnomalyTriggersController`

## Methods

* [List Anomaly Detection Triggers](../../doc/controllers/anomaly-triggers.md#list-anomaly-detection-triggers)
* [Update Anomaly Detection Trigger](../../doc/controllers/anomaly-triggers.md#update-anomaly-detection-trigger)
* [Create Anomaly Detection Trigger](../../doc/controllers/anomaly-triggers.md#create-anomaly-detection-trigger)
* [List Anomaly Detection Trigger Settings](../../doc/controllers/anomaly-triggers.md#list-anomaly-detection-trigger-settings)
* [Delete Anomaly Detection Trigger](../../doc/controllers/anomaly-triggers.md#delete-anomaly-detection-trigger)


# List Anomaly Detection Triggers

This corresponds to the M2M-MC SOAP interface, `GetTriggers`.

```ts
async listAnomalyDetectionTriggers(requestOptions?: RequestOptions): Promise<ApiResponse<GetTriggerResponseList[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetTriggerResponseList[]`](../../doc/models/get-trigger-response-list.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await anomalyTriggersController.listAnomalyDetectionTriggers();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 401 | Unauthorized | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 403 | Forbidden | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 404 | Not Found / Does not exist | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 406 | Format / Request Unacceptable | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 429 | Too many requests | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| Default | Error response | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |


# Update Anomaly Detection Trigger

This corresponds to the M2M-MC SOAP interface, `UpdateTriggerRequest`.

```ts
async updateAnomalyDetectionTrigger(  body: UpdateTriggerRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<AnomalyDetectionTrigger>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateTriggerRequest`](../../doc/models/update-trigger-request.md) | Body, Required | Update Trigger Request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AnomalyDetectionTrigger`](../../doc/models/anomaly-detection-trigger.md)

## Example Usage

```ts
const body: UpdateTriggerRequest = {
  anomalyTriggerRequest: {
    accountNames: '0000123456-00001',
    includeAbnormal: true,
    includeVeryAbnormal: true,
    includeUnderExpectedUsage: true,
    includeOverExpectedUsage: true,
  },
};

try {
  const { result, ...httpResponse } = await anomalyTriggersController.updateAnomalyDetectionTrigger(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 401 | Unauthorized | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 403 | Forbidden | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 404 | Not Found / Does not exist | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 406 | Format / Request Unacceptable | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 429 | Too many requests | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| Default | Error response | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |


# Create Anomaly Detection Trigger

This corresponds to the M2M-MC SOAP interface, `CreateTrigger`.

```ts
async createAnomalyDetectionTrigger(  body: CreateTriggerRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<AnomalyDetectionTrigger>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateTriggerRequest`](../../doc/models/create-trigger-request.md) | Body, Required | Create Trigger Request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AnomalyDetectionTrigger`](../../doc/models/anomaly-detection-trigger.md)

## Example Usage

```ts
const body: CreateTriggerRequest = {
  anomalyTriggerRequest: {
    accountNames: '0000123456-00001',
    includeAbnormal: true,
    includeVeryAbnormal: true,
    includeUnderExpectedUsage: true,
    includeOverExpectedUsage: true,
  },
};

try {
  const { result, ...httpResponse } = await anomalyTriggersController.createAnomalyDetectionTrigger(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 401 | Unauthorized | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 403 | Forbidden | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 404 | Not Found / Does not exist | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 406 | Format / Request Unacceptable | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 429 | Too many requests | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| Default | Error response | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |


# List Anomaly Detection Trigger Settings

This corresponds to the M2M-MC SOAP interface, `GetTriggers`.

```ts
async listAnomalyDetectionTriggerSettings(  triggerId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<GetTriggerResponseList[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string` | Template, Required | trigger ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetTriggerResponseList[]`](../../doc/models/get-trigger-response-list.md)

## Example Usage

```ts
const triggerId = 'be1b5958-3e11-41db-9abd-b1b7618c0035';

try {
  const { result, ...httpResponse } = await anomalyTriggersController.listAnomalyDetectionTriggerSettings(triggerId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 401 | Unauthorized | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 403 | Forbidden | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 404 | Not Found / Does not exist | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 406 | Format / Request Unacceptable | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 429 | Too many requests | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| Default | Error response | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |


# Delete Anomaly Detection Trigger

Deletes a specific trigger ID

```ts
async deleteAnomalyDetectionTrigger(  triggerId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<AnomalyDetectionTrigger>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string` | Template, Required | The trigger ID to be deleted |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AnomalyDetectionTrigger`](../../doc/models/anomaly-detection-trigger.md)

## Example Usage

```ts
const triggerId = 'be1b5958-3e11-41db-9abd-b1b7618c0035';

try {
  const { result, ...httpResponse } = await anomalyTriggersController.deleteAnomalyDetectionTrigger(triggerId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error response | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |

