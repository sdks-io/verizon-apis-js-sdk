# Firmware V1

```ts
const firmwareV1Controller = new FirmwareV1Controller(client);
```

## Class Name

`FirmwareV1Controller`

## Methods

* [List Available Firmware](../../doc/controllers/firmware-v1.md#list-available-firmware)
* [Schedule Firmware Upgrade](../../doc/controllers/firmware-v1.md#schedule-firmware-upgrade)
* [List Firmware Upgrade Details](../../doc/controllers/firmware-v1.md#list-firmware-upgrade-details)
* [Update Firmware Upgrade Devices](../../doc/controllers/firmware-v1.md#update-firmware-upgrade-devices)
* [Cancel Scheduled Firmware Upgrade](../../doc/controllers/firmware-v1.md#cancel-scheduled-firmware-upgrade)


# List Available Firmware

Lists all device firmware images available for an account, based on the devices registered to that account.

```ts
async listAvailableFirmware(
  account: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Firmware[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier in "##########-#####". |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Firmware[]`](../../doc/models/firmware.md)

## Example Usage

```ts
const account = '0242078689-00001';

try {
  const { result, ...httpResponse } = await firmwareV1Controller.listAvailableFirmware(account);
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
    "firmwareName": "FOTA_Verizon_Model-A_01To02_HF",
    "participantName": "0402196254-00001",
    "launchDate": "2018-04-01T16:03:00.000Z",
    "releaseNote": "",
    "model": "Model-A",
    "make": "Verizon",
    "fromVersion": "VerizonFirmwareVersion-01",
    "toVersion": "VerizonFirmwareVersion-02"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV1ResultError`](../../doc/models/fota-v1-result-error.md) |


# Schedule Firmware Upgrade

Schedules a firmware upgrade for devices.

```ts
async scheduleFirmwareUpgrade(
  body: FirmwareUpgradeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FirmwareUpgrade>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`FirmwareUpgradeRequest`](../../doc/models/firmware-upgrade-request.md) | Body, Required | Details of the firmware upgrade request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FirmwareUpgrade`](../../doc/models/firmware-upgrade.md)

## Example Usage

```ts
const body: FirmwareUpgradeRequest = {
  accountName: '0402196254-00001',
  firmwareName: 'FOTA_Verizon_Model-A_01To02_HF',
  firmwareTo: 'VerizonFirmwareVersion-02',
  startDate: '2018-04-01T16:03:00Z',
  deviceList: [
    '990003425730535',
    '990000473475989'
  ],
};

try {
  const { result, ...httpResponse } = await firmwareV1Controller.scheduleFirmwareUpgrade(body);
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
  "id": "e3a8d88a-04c6-4ef3-b039-89b62f91e962",
  "accountName": "0242078689-00001",
  "firmwareName": "FOTA_Verizon_Model-A_01To02_HF",
  "firmwareTo": "VerizonFirmwareVersion-02",
  "startDate": "2018-04-01",
  "status": "RequestPending",
  "deviceList": [
    {
      "deviceId": "990003425730535",
      "status": "RequestPending"
    },
    {
      "deviceId": "990000473475989",
      "status": "RequestPending"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV1ResultError`](../../doc/models/fota-v1-result-error.md) |


# List Firmware Upgrade Details

Returns information about a specified upgrade, include the target date of the upgrade, the list of devices in the upgrade, and the status of the upgrade for each device.

```ts
async listFirmwareUpgradeDetails(
  account: string,
  upgradeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FirmwareUpgrade>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier in "##########-#####". |
| `upgradeId` | `string` | Template, Required | The UUID of the upgrade, returned by POST /upgrades when the upgrade was scheduled. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FirmwareUpgrade`](../../doc/models/firmware-upgrade.md)

## Example Usage

```ts
const account = '0242078689-00001';

const upgradeId = 'e3a8d88a-04c6-4ef3-b039-89b62f91e962';

try {
  const { result, ...httpResponse } = await firmwareV1Controller.listFirmwareUpgradeDetails(
    account,
    upgradeId
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
  "id": "60b5d639-ccdc-4db8-8824-069bd94c95bf",
  "accountName": "0402196254-00001",
  "firmwareName": "FOTA_Verizon_Model-A_01To02_HF",
  "firmwareTo": "VerizonFirmwareVersion-02",
  "startDate": "2018-04-01",
  "status": "Queued",
  "deviceList": [
    {
      "deviceId": "900000000000002",
      "status": "Device Accepted",
      "resultReason": "success"
    },
    {
      "deviceId": "900000000000003",
      "status": "Device Accepted",
      "resultReason": "success"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV1ResultError`](../../doc/models/fota-v1-result-error.md) |


# Update Firmware Upgrade Devices

Add or remove devices from a scheduled upgrade.

```ts
async updateFirmwareUpgradeDevices(
  account: string,
  upgradeId: string,
  body: FirmwareUpgradeChangeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FirmwareUpgradeChangeResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier in "##########-#####". |
| `upgradeId` | `string` | Template, Required | The UUID of the upgrade, returned by POST /upgrades when the upgrade was scheduled. |
| `body` | [`FirmwareUpgradeChangeRequest`](../../doc/models/firmware-upgrade-change-request.md) | Body, Required | List of devices to add or remove. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FirmwareUpgradeChangeResult`](../../doc/models/firmware-upgrade-change-result.md)

## Example Usage

```ts
const account = '0242078689-00001';

const upgradeId = 'e3a8d88a-04c6-4ef3-b039-89b62f91e962';

const body: FirmwareUpgradeChangeRequest = {
  type: FirmwareTypeListEnum.Append,
  deviceList: [
    '15-digit IMEI',
    '15-digit IMEI'
  ],
};

try {
  const { result, ...httpResponse } = await firmwareV1Controller.updateFirmwareUpgradeDevices(
    account,
    upgradeId,
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
  "id": "60b5d639-ccdc-4db8-8824-069bd94c95bf",
  "deviceList": [
    {
      "deviceId": "15-digit IMEI",
      "status": "AddDeviceSucceed",
      "Reason": "Device added Successfully"
    },
    {
      "deviceId": "15-digit IMEI",
      "status": "AddDeviceSucceed",
      "Reason": "Device added Successfully"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV1ResultError`](../../doc/models/fota-v1-result-error.md) |


# Cancel Scheduled Firmware Upgrade

Cancel a scheduled firmware upgrade.

```ts
async cancelScheduledFirmwareUpgrade(
  account: string,
  upgradeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FotaV1SuccessResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier in "##########-#####". |
| `upgradeId` | `string` | Template, Required | The UUID of the scheduled upgrade that you want to cancel. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FotaV1SuccessResult`](../../doc/models/fota-v1-success-result.md)

## Example Usage

```ts
const account = '0242078689-00001';

const upgradeId = 'e3a8d88a-04c6-4ef3-b039-89b62f91e962';

try {
  const { result, ...httpResponse } = await firmwareV1Controller.cancelScheduledFirmwareUpgrade(
    account,
    upgradeId
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
| 400 | Unexpected error. | [`FotaV1ResultError`](../../doc/models/fota-v1-result-error.md) |

