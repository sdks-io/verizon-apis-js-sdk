# Software Management Reports V1

```ts
const softwareManagementReportsV1Controller = new SoftwareManagementReportsV1Controller(client);
```

## Class Name

`SoftwareManagementReportsV1Controller`

## Methods

* [List Account Devices](../../doc/controllers/software-management-reports-v1.md#list-account-devices)
* [List Upgrades for Specified Status](../../doc/controllers/software-management-reports-v1.md#list-upgrades-for-specified-status)
* [Get Device Firmware Upgrade History](../../doc/controllers/software-management-reports-v1.md#get-device-firmware-upgrade-history)


# List Account Devices

Returns an array of all devices in the specified account. Each device object includes information needed for managing firmware, including the device make and model, MDN and IMEI, and current firmware version.

```ts
async listAccountDevices(
  account: string,
  startIndex: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceListQueryResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier in "##########-#####". |
| `startIndex` | `string` | Template, Required | Only return devices with IMEIs larger than this value. Use 0 for the first request. If `hasMoreData`=true in the response, use the `lastSeenDeviceId` value from the response as the startIndex in the next request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceListQueryResult`](../../doc/models/device-list-query-result.md)

## Example Usage

```ts
const account = '0242078689-00001';

const startIndex = 'startIndex4';

try {
  const { result, ...httpResponse } = await softwareManagementReportsV1Controller.listAccountDevices(
    account,
    startIndex
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
  "accountName": "0242078698-00001",
  "hasMoreData": true,
  "lastSeenDeviceId": 900000000001000,
  "deviceList": [
    {
      "deviceId": "900000000000001",
      "mdn": "0000040881",
      "model": "Model-A",
      "make": "Verizon",
      "firmware": "VerizonFirmwareVersion-01",
      "fotaEligible": true,
      "licenseAssigned": true,
      "upgradeTime": "2021-06-03 00:03:56.079 +0000 UTC"
    },
    {
      "deviceId": "900000000000999",
      "mdn": "0000041879",
      "model": "Model-A",
      "make": "Verizon",
      "firmware": "VerizonFirmwareVersion-01",
      "fotaEligible": true,
      "licenseAssigned": true,
      "upgradeTime": "2021-06-03 00:03:56.079 +0000 UTC"
    },
    {
      "deviceId": "900000000001000",
      "mdn": "0000041880",
      "model": "Model-A",
      "make": "Verizon",
      "firmware": "VerizonFirmwareVersion-01",
      "fotaEligible": true,
      "licenseAssigned": true,
      "upgradeTime": "2021-06-03 00:03:56.079 +0000 UTC"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV1ResultError`](../../doc/models/fota-v1-result-error.md) |


# List Upgrades for Specified Status

Returns a list of all upgrades with a specified status.

```ts
async listUpgradesForSpecifiedStatus(
  account: string,
  upgradeStatus: UpgradeStatusEnum,
  startIndex: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpgradeListQueryResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier in "##########-#####". |
| `upgradeStatus` | [`UpgradeStatusEnum`](../../doc/models/upgrade-status-enum.md) | Template, Required | The status of the upgrades that you want to retrieve. |
| `startIndex` | `string` | Template, Required | The zero-based number of the first record to return. Set startIndex=0 for the first request. If `hasMoreFlag`=true in the response, use the `lastSeenUpgradeId` value from the response as the startIndex in the next request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpgradeListQueryResult`](../../doc/models/upgrade-list-query-result.md)

## Example Usage

```ts
const account = '0242078689-00001';

const upgradeStatus = UpgradeStatusEnum.RequestPending;

const startIndex = 'startIndex4';

try {
  const { result, ...httpResponse } = await softwareManagementReportsV1Controller.listUpgradesForSpecifiedStatus(
    account,
    upgradeStatus,
    startIndex
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
| 400 | Unexpected error. | [`FotaV1ResultError`](../../doc/models/fota-v1-result-error.md) |


# Get Device Firmware Upgrade History

Returns the upgrade history of the specified device from the previous six months.

```ts
async getDeviceFirmwareUpgradeHistory(
  account: string,
  deviceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceUpgradeHistory[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier in "##########-#####". |
| `deviceId` | `string` | Template, Required | The IMEI of the device. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceUpgradeHistory[]`](../../doc/models/device-upgrade-history.md)

## Example Usage

```ts
const account = '0242078689-00001';

const deviceId = '900000000000001';

try {
  const { result, ...httpResponse } = await softwareManagementReportsV1Controller.getDeviceFirmwareUpgradeHistory(
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
    "deviceId": "900000000000001",
    "id": "f574fbb8-b291-4cc7-bf22-4e3f27977558",
    "accountName": "0242078689-00001",
    "firmwareFrom": "VerizonFirmwareVersion-02",
    "firmwareTo": "VerizonFirmwareVersion-03",
    "startDate": "2018-03-05",
    "upgradeStartTime": "2018-03-05T19:07:21Z",
    "status": "UpgradeSuccess",
    "reason": "success"
  },
  {
    "deviceId": "900000000000001",
    "id": "5edade25-c06c-4b13-ba2a-fbb9ada93579",
    "accountName": "0242078689-00001",
    "firmwareFrom": "VerizonFirmwareVersion-01",
    "firmwareTo": "VerizonFirmwareVersion-02",
    "startDate": "2018-02-20",
    "upgradeStartTime": "2018-02-20T00:03:19Z",
    "status": "UpgradeSuccess",
    "reason": "success"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV1ResultError`](../../doc/models/fota-v1-result-error.md) |

