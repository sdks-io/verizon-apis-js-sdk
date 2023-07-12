# Device Location Callbacks

```ts
const deviceLocationCallbacksController = new DeviceLocationCallbacksController(client);
```

## Class Name

`DeviceLocationCallbacksController`

## Methods

* [List Registered Callbacks](../../doc/controllers/device-location-callbacks.md#list-registered-callbacks)
* [Register Callback](../../doc/controllers/device-location-callbacks.md#register-callback)
* [Deregister Callback](../../doc/controllers/device-location-callbacks.md#deregister-callback)


# List Registered Callbacks

Returns a list of all registered callback URLs for the account.

```ts
async listRegisteredCallbacks(
  account: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceLocationCallback[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account number. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceLocationCallback[]`](../../doc/models/device-location-callback.md)

## Example Usage

```ts
const account = '0252012345-00001';

try {
  const { result, ...httpResponse } = await deviceLocationCallbacksController.listRegisteredCallbacks(account);
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
    "name": "Location",
    "url": "http://10.120.102.147:50569/CallbackListener/Location.asmx"
  },
  {
    "name": "Location",
    "url": "http://10.120.102.147:50569/CallbackListener/DeviceLocation.asmx"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# Register Callback

Provide a URL to receive messages from a ThingSpace callback service.

```ts
async registerCallback(
  account: string,
  body: DeviceLocationCallback,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CallbackRegistrationResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account number. |
| `body` | [`DeviceLocationCallback`](../../doc/models/device-location-callback.md) | Body, Required | Request to register a callback. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CallbackRegistrationResult`](../../doc/models/callback-registration-result.md)

## Example Usage

```ts
const account = '0252012345-00001';

const body: DeviceLocationCallback = {
  name: CallbackServiceNameEnum.Location,
  url: 'http://10.120.102.183:50559/CallbackListener/LocationServiceMessages.asmx',
};

try {
  const { result, ...httpResponse } = await deviceLocationCallbacksController.registerCallback(
    account,
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
  "account": "0212312345-00001",
  "name": "Location"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# Deregister Callback

Deregister a URL to stop receiving callback messages.

```ts
async deregisterCallback(
  account: string,
  service: CallbackServiceNameEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceLocationSuccessResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account number. |
| `service` | [`CallbackServiceNameEnum`](../../doc/models/callback-service-name-enum.md) | Template, Required | Callback service name. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceLocationSuccessResult`](../../doc/models/device-location-success-result.md)

## Example Usage

```ts
const account = '0252012345-00001';

const service = CallbackServiceNameEnum.Location;

try {
  const { result, ...httpResponse } = await deviceLocationCallbacksController.deregisterCallback(
    account,
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

## Example Response *(as JSON)*

```json
{
  "success": true
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |

