# Software Management Callbacks V2

```ts
const softwareManagementCallbacksV2Controller = new SoftwareManagementCallbacksV2Controller(client);
```

## Class Name

`SoftwareManagementCallbacksV2Controller`

## Methods

* [List Registered Callbacks](../../doc/controllers/software-management-callbacks-v2.md#list-registered-callbacks)
* [Update Callback](../../doc/controllers/software-management-callbacks-v2.md#update-callback)
* [Register Callback](../../doc/controllers/software-management-callbacks-v2.md#register-callback)
* [Deregister Callback](../../doc/controllers/software-management-callbacks-v2.md#deregister-callback)


# List Registered Callbacks

This endpoint allows user to get the registered callback information.

```ts
async listRegisteredCallbacks(
  account: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CallbackSummary>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CallbackSummary`](../../doc/models/callback-summary.md)

## Example Usage

```ts
const account = '0000123456-00001';

try {
  const { result, ...httpResponse } = await softwareManagementCallbacksV2Controller.listRegisteredCallbacks(account);
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
  "url": "http://10.120.102.183:50559/CallbackListener/FirmwareServiceMessages.asmx"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |


# Update Callback

This endpoint allows user to update the HTTPS callback address.

```ts
async updateCallback(
  account: string,
  body: FotaV2CallbackRegistrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FotaV2CallbackRegistrationResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `body` | [`FotaV2CallbackRegistrationRequest`](../../doc/models/fota-v2-callback-registration-request.md) | Body, Required | Callback URL registration. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FotaV2CallbackRegistrationResult`](../../doc/models/fota-v2-callback-registration-result.md)

## Example Usage

```ts
const account = '0000123456-00001';

const body: FotaV2CallbackRegistrationRequest = {
  url: 'https://255.255.11.135:50559/CallbackListener/FirmwareServiceMessages.asmx',
};

try {
  const { result, ...httpResponse } = await softwareManagementCallbacksV2Controller.updateCallback(
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
  "url": "https://255.255.11.135:50559/CallbackListener/FirmwareServiceMessages.asmx"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |


# Register Callback

This endpoint allows user to create the HTTPS callback address.

```ts
async registerCallback(
  account: string,
  body: FotaV2CallbackRegistrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FotaV2CallbackRegistrationResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `body` | [`FotaV2CallbackRegistrationRequest`](../../doc/models/fota-v2-callback-registration-request.md) | Body, Required | Callback URL registration. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FotaV2CallbackRegistrationResult`](../../doc/models/fota-v2-callback-registration-result.md)

## Example Usage

```ts
const account = '0000123456-00001';

const body: FotaV2CallbackRegistrationRequest = {
  url: 'https://10.120.102.183:50559/CallbackListener/FirmwareServiceMessages.asmx',
};

try {
  const { result, ...httpResponse } = await softwareManagementCallbacksV2Controller.registerCallback(
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
  "url": "https://10.120.102.183:50559/CallbackListener/FirmwareServiceMessages.asmx"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |


# Deregister Callback

This endpoint allows user to delete a previously registered callback URL.

```ts
async deregisterCallback(
  account: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FotaV2SuccessResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FotaV2SuccessResult`](../../doc/models/fota-v2-success-result.md)

## Example Usage

```ts
const account = '0000123456-00001';

try {
  const { result, ...httpResponse } = await softwareManagementCallbacksV2Controller.deregisterCallback(account);
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
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |

