# Hyper Precise Location Callbacks

```ts
const hyperPreciseLocationCallbacksController = new HyperPreciseLocationCallbacksController(client);
```

## Class Name

`HyperPreciseLocationCallbacksController`

## Methods

* [List Registered Callbacks](../../doc/controllers/hyper-precise-location-callbacks.md#list-registered-callbacks)
* [Register Callback](../../doc/controllers/hyper-precise-location-callbacks.md#register-callback)
* [Deregister Callback](../../doc/controllers/hyper-precise-location-callbacks.md#deregister-callback)


# List Registered Callbacks

Find registered callback listener for account by account number.

```ts
async listRegisteredCallbacks(
  accountNumber: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CallbackCreated[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Query, Required | A unique identifier for an account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CallbackCreated[]`](../../doc/models/callback-created.md)

## Example Usage

```ts
const accountNumber = '0844021539-00001';

try {
  const { result, ...httpResponse } = await hyperPreciseLocationCallbacksController.listRegisteredCallbacks(accountNumber);
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
[
  {
    "aname": "0844021539-00001",
    "name": "BullseyeReporting",
    "url": "https://tsustgtests.mocklab.io/notifications/bullseye"
  }
]
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


# Register Callback

Registers a URL at which an account receives asynchronous responses and other messages from a ThingSpace Platform callback service. The messages are REST messages. You are responsible for creating and running a listening process on your server at that URL to receive and parse the messages.

```ts
async registerCallback(
  accountNumber: string,
  body: HyperPreciseLocationCallback,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CallbackRegistered>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Query, Required | A unique identifier for an account. |
| `body` | [`HyperPreciseLocationCallback`](../../doc/models/hyper-precise-location-callback.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CallbackRegistered`](../../doc/models/callback-registered.md)

## Example Usage

```ts
const accountNumber = '0844021539-00001';

const body: HyperPreciseLocationCallback = {
  name: 'BullseyeReporting',
  url: 'https://tsustgtests.mocklab.io/notifications/bullseye',
};

try {
  const { result, ...httpResponse } = await hyperPreciseLocationCallbacksController.registerCallback(
    accountNumber,
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
  "accountName": "0844021539-00001",
  "name": "BullseyeReporting"
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


# Deregister Callback

Stops ThingSpace from sending callback messages for the specified account and listener name.

```ts
async deregisterCallback(
  accountNumber: string,
  service: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Query, Required | A unique identifier for a account. |
| `service` | `string` | Query, Required | The name of the callback service that will be deleted. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const accountNumber = '0844021539-00001';

const service = 'BullseyeReporting';

try {
  const { result, ...httpResponse } = await hyperPreciseLocationCallbacksController.deregisterCallback(
    accountNumber,
    service
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
| 400 | Bad request. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 401 | Unauthorized request. Access token is missing or invalid. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 403 | Forbidden request. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 404 | Bad request. Not found. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 409 | Bad request. Conflict state. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 500 | Internal Server Error. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |

