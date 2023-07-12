# Client Logging

```ts
const clientLoggingController = new ClientLoggingController(client);
```

## Class Name

`ClientLoggingController`

## Methods

* [List Devices With Logging Enabled](../../doc/controllers/client-logging.md#list-devices-with-logging-enabled)
* [Enable Logging for Devices](../../doc/controllers/client-logging.md#enable-logging-for-devices)
* [Disable Logging for Devices](../../doc/controllers/client-logging.md#disable-logging-for-devices)
* [Enable Device Logging](../../doc/controllers/client-logging.md#enable-device-logging)
* [Disable Device Logging](../../doc/controllers/client-logging.md#disable-device-logging)
* [List Device Logs](../../doc/controllers/client-logging.md#list-device-logs)


# List Devices With Logging Enabled

Returns an array of all devices in the specified account for which logging is enabled.

```ts
async listDevicesWithLoggingEnabled(
  account: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceLoggingStatus[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceLoggingStatus[]`](../../doc/models/device-logging-status.md)

## Example Usage

```ts
const account = '0000123456-00001';

try {
  const { result, ...httpResponse } = await clientLoggingController.listDevicesWithLoggingEnabled(account);
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
    "deviceId": "990013907835573",
    "expiryDate": "2020-10-19"
  },
  {
    "deviceId": "991124018926684",
    "expiryDate": "2020-10-19"
  },
  {
    "deviceId": "992234129057795",
    "expiryDate": "2020-10-23"
  },
  {
    "deviceId": "998891785613351",
    "expiryDate": "2020-10-23"
  },
  {
    "deviceId": "990013907835573",
    "expiryDate": "2020-10-23"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |


# Enable Logging for Devices

Each customer may have a maximum of 20 devices enabled for logging.

```ts
async enableLoggingForDevices(
  account: string,
  body: DeviceLoggingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceLoggingStatus[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `body` | [`DeviceLoggingRequest`](../../doc/models/device-logging-request.md) | Body, Required | Device logging information. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceLoggingStatus[]`](../../doc/models/device-logging-status.md)

## Example Usage

```ts
const account = '0000123456-00001';

const body: DeviceLoggingRequest = {
  deviceIds: [
    '990013907835573',
    '991124018926684',
    '992234129057795',
    '998891785613351',
    '990013907835573'
  ],
};

try {
  const { result, ...httpResponse } = await clientLoggingController.enableLoggingForDevices(
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
[
  {
    "deviceId": "990013907835573",
    "expiryDate": "2020-10-19"
  },
  {
    "deviceId": "991124018926684",
    "expiryDate": "2020-10-19"
  },
  {
    "deviceId": "992234129057795",
    "expiryDate": "2020-10-23"
  },
  {
    "deviceId": "998891785613351",
    "expiryDate": "2020-10-23"
  },
  {
    "deviceId": "990013907835573",
    "expiryDate": "2020-10-23"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |


# Disable Logging for Devices

Turn logging off for a list of devices.

```ts
async disableLoggingForDevices(
  account: string,
  deviceIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `deviceIds` | `string` | Query, Required | The list of device IDs. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const account = '0000123456-00001';

const deviceIds = '990013907835573';

try {
  const { result, ...httpResponse } = await clientLoggingController.disableLoggingForDevices(
    account,
    deviceIds
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
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |


# Enable Device Logging

Enables logging for a specific device.

```ts
async enableDeviceLogging(
  account: string,
  deviceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceLoggingStatus>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `deviceId` | `string` | Template, Required | Device IMEI identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceLoggingStatus`](../../doc/models/device-logging-status.md)

## Example Usage

```ts
const account = '0000123456-00001';

const deviceId = '990013907835573';

try {
  const { result, ...httpResponse } = await clientLoggingController.enableDeviceLogging(
    account,
    deviceId
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
  "deviceId": "990013907835573",
  "expiryDate": "2020-10-19"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |


# Disable Device Logging

Disables logging for a specific device.

```ts
async disableDeviceLogging(
  account: string,
  deviceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `deviceId` | `string` | Template, Required | Device IMEI identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const account = '0000123456-00001';

const deviceId = '990013907835573';

try {
  const { result, ...httpResponse } = await clientLoggingController.disableDeviceLogging(
    account,
    deviceId
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
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |


# List Device Logs

Gets logs for a specific device.

```ts
async listDeviceLogs(
  account: string,
  deviceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceLog[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `deviceId` | `string` | Template, Required | Device IMEI identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceLog[]`](../../doc/models/device-log.md)

## Example Usage

```ts
const account = '0000123456-00001';

const deviceId = '990013907835573';

try {
  const { result, ...httpResponse } = await clientLoggingController.listDeviceLogs(
    account,
    deviceId
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
[
  {
    "deviceId": "990013907835573",
    "logTime": "2020-10-22T19:29:50.901Z",
    "logType": "string",
    "eventLog": "string",
    "binaryLogFileBase64": "string",
    "binaryLogFilename": "string"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |

