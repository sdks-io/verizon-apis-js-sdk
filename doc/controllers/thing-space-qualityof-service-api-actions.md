# Thing Space Qualityof Service API Actions

```ts
const thingSpaceQualityofServiceAPIActionsController = new ThingSpaceQualityofServiceAPIActionsController(client);
```

## Class Name

`ThingSpaceQualityofServiceAPIActionsController`

## Methods

* [Create a Thing Space Quality of Service API Subscription](../../doc/controllers/thing-space-qualityof-service-api-actions.md#create-a-thing-space-quality-of-service-api-subscription)
* [Stop a Thing Space Quality of Service API Subscription](../../doc/controllers/thing-space-qualityof-service-api-actions.md#stop-a-thing-space-quality-of-service-api-subscription)


# Create a Thing Space Quality of Service API Subscription

Creates a QoS elevation subscription ID and activates the subscription.

```ts
async createAThingSpaceQualityOfServiceAPISubscription(  body: SubscribeRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<M201success>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SubscribeRequest`](../../doc/models/subscribe-request.md) | Body, Required | The request details to create a ThingSpace Quality of Service API subscription. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`M201success`](../../doc/models/m201-success.md)

## Example Usage

```ts
const body: SubscribeRequest = {
  accountName: '0000123456-00001',
};

try {
  const { result, ...httpResponse } = await thingSpaceQualityOfServiceAPIActionsController.createAThingSpaceQualityOfServiceAPISubscription(body);
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
| Default | Error Response | [`DefaultError`](../../doc/models/default-error.md) |


# Stop a Thing Space Quality of Service API Subscription

Stops an active ThingSpace Quality of Service API subscription using the account name and the subscription ID.

```ts
async stopAThingSpaceQualityOfServiceAPISubscription(  accountName: string,
  qosSubscriptionId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<M201success>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Query, Required | - |
| `qosSubscriptionId` | `string` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`M201success`](../../doc/models/m201-success.md)

## Example Usage

```ts
const accountName = '0000123456-00001';

const qosSubscriptionId = 'QoS subscription ID';

try {
  const { result, ...httpResponse } = await thingSpaceQualityOfServiceAPIActionsController.stopAThingSpaceQualityOfServiceAPISubscription(
  accountName,
  qosSubscriptionId
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
| Default | Error Response | [`DefaultError`](../../doc/models/default-error.md) |

