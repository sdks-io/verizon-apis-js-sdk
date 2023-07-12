# Device Service Management

```ts
const deviceServiceManagementController = new DeviceServiceManagementController(client);
```

## Class Name

`DeviceServiceManagementController`

## Methods

* [Get Device Hyper Precise Status](../../doc/controllers/device-service-management.md#get-device-hyper-precise-status)
* [Update Device Hyper Precise Status](../../doc/controllers/device-service-management.md#update-device-hyper-precise-status)


# Get Device Hyper Precise Status

Gets the list of a status for hyper-precise location devices.

```ts
async getDeviceHyperPreciseStatus(
  imei: string,
  accountNumber: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BullseyeServiceResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `imei` | `string` | Query, Required | A unique identifier for a device. |
| `accountNumber` | `string` | Query, Required | A unique identifier for an account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BullseyeServiceResult`](../../doc/models/bullseye-service-result.md)

## Example Usage

```ts
const imei = '709312034493372';

const accountNumber = '0844021539-00001';

try {
  const { result, ...httpResponse } = await deviceServiceManagementController.getDeviceHyperPreciseStatus(
    imei,
    accountNumber
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
  "accountNumber": "0844021539-00001",
  "deviceList": [
    {
      "imei": "709312034493372",
      "BullseyeEnable": true
    }
  ]
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


# Update Device Hyper Precise Status

Enable/disable hyper-precise service for a device.

```ts
async updateDeviceHyperPreciseStatus(
  body: BullseyeServiceRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BullseyeServiceResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BullseyeServiceRequest`](../../doc/models/bullseye-service-request.md) | Body, Required | List of devices and hyper-precise required statuses. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BullseyeServiceResult`](../../doc/models/bullseye-service-result.md)

## Example Usage

```ts
const body: BullseyeServiceRequest = {
  deviceList: [
    {
      imei: '354658090356210',
      bullseyeEnable: true,
    }
  ],
  accountNumber: '0242080353-00001',
};

try {
  const { result, ...httpResponse } = await deviceServiceManagementController.updateDeviceHyperPreciseStatus(body);
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
  "accountNumber": "0844021539-00001",
  "deviceList": [
    {
      "imei": "709312034493372",
      "BullseyeEnable": true
    }
  ]
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

