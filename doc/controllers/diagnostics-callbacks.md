# Diagnostics Callbacks

```ts
const diagnosticsCallbacksController = new DiagnosticsCallbacksController(client);
```

## Class Name

`DiagnosticsCallbacksController`

## Methods

* [Get Diagnostics Subscription Callback Info](../../doc/controllers/diagnostics-callbacks.md#get-diagnostics-subscription-callback-info)
* [Register Diagnostics Callback URL](../../doc/controllers/diagnostics-callbacks.md#register-diagnostics-callback-url)
* [Unregister Diagnostics Callback](../../doc/controllers/diagnostics-callbacks.md#unregister-diagnostics-callback)


# Get Diagnostics Subscription Callback Info

This endpoint allows user to get the registered callback information of an existing diagnostics subscription.

```ts
async getDiagnosticsSubscriptionCallbackInfo(
  accountName: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceDiagnosticsCallback[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Query, Required | Account identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceDiagnosticsCallback[]`](../../doc/models/device-diagnostics-callback.md)

## Example Usage

```ts
const accountName = '0000123456-00001';

try {
  const { result, ...httpResponse } = await diagnosticsCallbacksController.getDiagnosticsSubscriptionCallbackInfo(accountName);
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
    "accountName": "TestQAAccount",
    "serviceName": "string",
    "endpoint": "https://yourwebsite.com",
    "httpHeaders": {},
    "createdOn": "2019-09-07T23:57:53.292Z"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`DeviceDiagnosticsResultError`](../../doc/models/device-diagnostics-result-error.md) |


# Register Diagnostics Callback URL

This endpoint allows user update the callback HTTPS address of an existing diagnostics subscription.

```ts
async registerDiagnosticsCallbackURL(
  body: CallbackRegistrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceDiagnosticsCallback>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CallbackRegistrationRequest`](../../doc/models/callback-registration-request.md) | Body, Required | Callback URL registration request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceDiagnosticsCallback`](../../doc/models/device-diagnostics-callback.md)

## Example Usage

```ts
const body: CallbackRegistrationRequest = {
  accountName: 'TestQAAccount',
  serviceName: 'Diagnostics',
  endpoint: 'https://yourwebsite.com',
  httpHeaders: {  },
};

try {
  const { result, ...httpResponse } = await diagnosticsCallbacksController.registerDiagnosticsCallbackURL(body);
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
  "accountName": "TestQAAccount",
  "serviceName": "string",
  "endpoint": "https://yourwebsite.com",
  "httpHeaders": {},
  "createdOn": "2019-09-07T23:57:53.292Z"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`DeviceDiagnosticsResultError`](../../doc/models/device-diagnostics-result-error.md) |


# Unregister Diagnostics Callback

This endpoint allows user to delete a registered callback URL and credential.

```ts
async unregisterDiagnosticsCallback(
  accountName: string,
  serviceName: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceDiagnosticsCallback>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Query, Required | Account identifier. |
| `serviceName` | `string` | Query, Required | Service name for callback notification. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceDiagnosticsCallback`](../../doc/models/device-diagnostics-callback.md)

## Example Usage

```ts
const accountName = '0000123456-00001';

const serviceName = 'string';

try {
  const { result, ...httpResponse } = await diagnosticsCallbacksController.unregisterDiagnosticsCallback(
    accountName,
    serviceName
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
  "accountName": "TestQAAccount",
  "serviceName": "string",
  "endpoint": "https://yourwebsite.com",
  "httpHeaders": {},
  "createdOn": "2019-09-07T23:57:53.292Z"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`DeviceDiagnosticsResultError`](../../doc/models/device-diagnostics-result-error.md) |

