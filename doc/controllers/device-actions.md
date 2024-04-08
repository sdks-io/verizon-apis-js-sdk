# Device Actions

```ts
const deviceActionsController = new DeviceActionsController(client);
```

## Class Name

`DeviceActionsController`

## Methods

* [Retrieve the Global Device List](../../doc/controllers/device-actions.md#retrieve-the-global-device-list)
* [Retrieve Device Provisioning History](../../doc/controllers/device-actions.md#retrieve-device-provisioning-history)
* [Get Asynchronous Request Status](../../doc/controllers/device-actions.md#get-asynchronous-request-status)


# Retrieve the Global Device List

Allows the profile to fetch the complete device list. This works with Verizon US and Global profiles.

```ts
async retrieveTheGlobalDeviceList(
  body: GetDeviceListWithProfilesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GIORequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetDeviceListWithProfilesRequest`](../../doc/models/get-device-list-with-profiles-request.md) | Body, Required | Device Profile Query |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GIORequestResponse`](../../doc/models/gio-request-response.md)

## Example Usage

```ts
const body: GetDeviceListWithProfilesRequest = {
  accountName: '0000123456-00001',
  provisioningStatusFilter: 'ACTIVE',
  profileStatusFilter: 'UNKNOWN',
};

try {
  const { result, ...httpResponse } = await deviceActionsController.retrieveTheGlobalDeviceList(body);
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
| Default | Error response | [`GIORestErrorResponseError`](../../doc/models/gio-rest-error-response-error.md) |


# Retrieve Device Provisioning History

Retreive the provisioning history of a specific device or devices.

```ts
async retrieveDeviceProvisioningHistory(
  body: ProvhistoryRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GIORequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ProvhistoryRequest`](../../doc/models/provhistory-request.md) | Body, Required | Device Provisioning History |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GIORequestResponse`](../../doc/models/gio-request-response.md)

## Example Usage

```ts
const body: ProvhistoryRequest = {
  accountName: '0000123456-00001',
  earliest: '10/15/2021 04:49:35',
  latest: '10/15/2021 04:49:49',
};

try {
  const { result, ...httpResponse } = await deviceActionsController.retrieveDeviceProvisioningHistory(body);
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
| Default | Error response | [`GIORestErrorResponseError`](../../doc/models/gio-rest-error-response-error.md) |


# Get Asynchronous Request Status

Get the status of an asynchronous request made with the Device Actions.

```ts
async getAsynchronousRequestStatus(
  accountName: string,
  requestID: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StatusResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Template, Required | - |
| `requestID` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StatusResponse`](../../doc/models/status-response.md)

## Example Usage

```ts
const accountName = '0000123456-00001';

const requestID = 'd1f08526-5443-4054-9a29-4456490ea9f8';

try {
  const { result, ...httpResponse } = await deviceActionsController.getAsynchronousRequestStatus(
  accountName,
  requestID
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
| Default | Error response | [`GIORestErrorResponseError`](../../doc/models/gio-rest-error-response-error.md) |

