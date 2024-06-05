# V2 Triggers

Helps to create and manage promo alert triggers

```ts
const mV2TriggersController = new MV2TriggersController(client);
```

## Class Name

`MV2TriggersController`

## Methods

* [Create Trigger](../../doc/controllers/v2-triggers.md#create-trigger)
* [Update Trigger](../../doc/controllers/v2-triggers.md#update-trigger)


# Create Trigger

This creates an individual change plan for account group share.

```ts
async createTrigger(
  body: CreateTriggerV2Request,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TriggerV2Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateTriggerV2Request`](../../doc/models/create-trigger-v2-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TriggerV2Response`](../../doc/models/trigger-v2-response.md)

## Example Usage

```ts
const body: CreateTriggerV2Request = {};

try {
  const { result, ...httpResponse } = await mV2TriggersController.createTrigger(body);
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
| 400 | Error Response | [`RulesEngineRestErrorResponseError`](../../doc/models/rules-engine-rest-error-response-error.md) |


# Update Trigger

This updates an individual change plan for account group share.

```ts
async updateTrigger(
  vZM2mToken: string,
  body: UpdateTriggerV2Request,
  xRequestID?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TriggerV2Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vZM2mToken` | `string` | Header, Required | M2M-MC Session Token |
| `body` | [`UpdateTriggerV2Request`](../../doc/models/update-trigger-v2-request.md) | Body, Required | - |
| `xRequestID` | `string \| undefined` | Header, Optional | Transaction Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TriggerV2Response`](../../doc/models/trigger-v2-response.md)

## Example Usage

```ts
const vZM2mToken = 'VZ-M2M-Token2';

const body: UpdateTriggerV2Request = {};

try {
  const { result, ...httpResponse } = await mV2TriggersController.updateTrigger(
  vZM2mToken,
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error Response | [`RulesEngineRestErrorResponseError`](../../doc/models/rules-engine-rest-error-response-error.md) |

