# Software Management Callbacks V3

```ts
const softwareManagementCallbacksV3Controller = new SoftwareManagementCallbacksV3Controller(client);
```

## Class Name

`SoftwareManagementCallbacksV3Controller`

## Methods

* [List Registered Callbacks](../../doc/controllers/software-management-callbacks-v3.md#list-registered-callbacks)
* [Update Callback](../../doc/controllers/software-management-callbacks-v3.md#update-callback)
* [Register Callback](../../doc/controllers/software-management-callbacks-v3.md#register-callback)
* [Deregister Callback](../../doc/controllers/software-management-callbacks-v3.md#deregister-callback)


# List Registered Callbacks

This endpoint allows user to get the registered callback information.

```ts
async listRegisteredCallbacks(
  acc: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FotaV3CallbackSummary>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acc` | `string` | Template, Required | Account identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FotaV3CallbackSummary`](../../doc/models/fota-v3-callback-summary.md)

## Example Usage

```ts
const acc = '0000123456-00001';

try {
  const { result, ...httpResponse } = await softwareManagementCallbacksV3Controller.listRegisteredCallbacks(acc);
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
| 400 | Unexpected error. | [`FotaV3ResultError`](../../doc/models/fota-v3-result-error.md) |


# Update Callback

This endpoint allows the user to update the HTTPS callback address.

```ts
async updateCallback(
  acc: string,
  body: FotaV3CallbackRegistrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FotaV3CallbackRegistrationResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acc` | `string` | Template, Required | Account identifier. |
| `body` | [`FotaV3CallbackRegistrationRequest`](../../doc/models/fota-v3-callback-registration-request.md) | Body, Required | Callback URL registration. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FotaV3CallbackRegistrationResult`](../../doc/models/fota-v3-callback-registration-result.md)

## Example Usage

```ts
const acc = '0000123456-00001';

const body: FotaV3CallbackRegistrationRequest = {
  url: 'https://255.255.11.135:50559/CallbackListener/FirmwareServiceMessages.asmx',
};

try {
  const { result, ...httpResponse } = await softwareManagementCallbacksV3Controller.updateCallback(
    acc,
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
| 400 | Unexpected error. | [`FotaV3ResultError`](../../doc/models/fota-v3-result-error.md) |


# Register Callback

This endpoint allows the user to create the HTTPS callback address.

```ts
async registerCallback(
  acc: string,
  body: FotaV3CallbackRegistrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FotaV3CallbackRegistrationResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acc` | `string` | Template, Required | Account identifier. |
| `body` | [`FotaV3CallbackRegistrationRequest`](../../doc/models/fota-v3-callback-registration-request.md) | Body, Required | Callback URL registration. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FotaV3CallbackRegistrationResult`](../../doc/models/fota-v3-callback-registration-result.md)

## Example Usage

```ts
const acc = '0000123456-00001';

const body: FotaV3CallbackRegistrationRequest = {
  url: 'https://255.255.11.135:50559/CallbackListener/FirmwareServiceMessages.asmx',
};

try {
  const { result, ...httpResponse } = await softwareManagementCallbacksV3Controller.registerCallback(
    acc,
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
| 400 | Unexpected error. | [`FotaV3ResultError`](../../doc/models/fota-v3-result-error.md) |


# Deregister Callback

This endpoint allows user to delete a previously registered callback URL.

```ts
async deregisterCallback(
  acc: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FotaV3SuccessResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acc` | `string` | Template, Required | Account identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FotaV3SuccessResult`](../../doc/models/fota-v3-success-result.md)

## Example Usage

```ts
const acc = '0000123456-00001';

try {
  const { result, ...httpResponse } = await softwareManagementCallbacksV3Controller.deregisterCallback(acc);
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
| 400 | Unexpected error. | [`FotaV3ResultError`](../../doc/models/fota-v3-result-error.md) |

