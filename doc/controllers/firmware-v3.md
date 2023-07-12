# Firmware V3

```ts
const firmwareV3Controller = new FirmwareV3Controller(client);
```

## Class Name

`FirmwareV3Controller`

## Methods

* [List Available Firmware](../../doc/controllers/firmware-v3.md#list-available-firmware)
* [Synchronize Device Firmware](../../doc/controllers/firmware-v3.md#synchronize-device-firmware)
* [Report Device Firmware](../../doc/controllers/firmware-v3.md#report-device-firmware)


# List Available Firmware

This endpoint allows user to list the firmware of an account.

```ts
async listAvailableFirmware(
  acc: string,
  protocol: FirmwareProtocolEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FirmwarePackage[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acc` | `string` | Template, Required | Account identifier. |
| `protocol` | [`FirmwareProtocolEnum`](../../doc/models/firmware-protocol-enum.md) | Query, Required | Filter to retrieve a specific protocol type used. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FirmwarePackage[]`](../../doc/models/firmware-package.md)

## Example Usage

```ts
const acc = '0000123456-00001';

const protocol = FirmwareProtocolEnum.LWM2m;

try {
  const { result, ...httpResponse } = await firmwareV3Controller.listAvailableFirmware(
    acc,
    protocol
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
    "firmwareName": "VerizonSmartCommunities_LCO-277C4N_BG96MAR04A04M1G_BG96MAR04A04M1G_BETA0130B",
    "firmwareFrom": "BG96MAR04A04M1G",
    "firmwareTo": "BG96MAR04A04M1G_BETA0130B",
    "launchDate": "2012-04-23T18:25:43.511Z",
    "releaseNote": "",
    "model": "LCO-277C4N",
    "make": "Verizon Smart Communities",
    "protocol": "LWM2M"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV3ResultError`](../../doc/models/fota-v3-result-error.md) |


# Synchronize Device Firmware

Synchronize ThingSpace with the FOTA server for up to 100 devices.

```ts
async synchronizeDeviceFirmware(
  acc: string,
  body: FirmwareIMEI,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceFirmwareList>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acc` | `string` | Template, Required | Account identifier. |
| `body` | [`FirmwareIMEI`](../../doc/models/firmware-imei.md) | Body, Required | DeviceIds to get firmware info synchronously. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceFirmwareList`](../../doc/models/device-firmware-list.md)

## Example Usage

```ts
const acc = '0000123456-00001';

const body: FirmwareIMEI = {
  deviceList: [
    '15-digit IMEI'
  ],
};

try {
  const { result, ...httpResponse } = await firmwareV3Controller.synchronizeDeviceFirmware(
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
  "accountName": "0000123456-00001",
  "deviceFirmwarVersionList": [
    {
      "deviceId": "15-digit IMEI",
      "status": "FirmwareVersionUpdateSuccess",
      "firmwareVersion": "SR1.2.0.0-10657"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV3ResultError`](../../doc/models/fota-v3-result-error.md) |


# Report Device Firmware

Ask a device to report its firmware version asynchronously.

```ts
async reportDeviceFirmware(
  acc: string,
  deviceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceFirmwareVersionUpdateResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acc` | `string` | Template, Required | Account identifier. |
| `deviceId` | `string` | Template, Required | Device identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceFirmwareVersionUpdateResult`](../../doc/models/device-firmware-version-update-result.md)

## Example Usage

```ts
const acc = '0000123456-00001';

const deviceId = '15-digit IMEI';

try {
  const { result, ...httpResponse } = await firmwareV3Controller.reportDeviceFirmware(
    acc,
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
| 400 | Unexpected error. | [`FotaV3ResultError`](../../doc/models/fota-v3-result-error.md) |

