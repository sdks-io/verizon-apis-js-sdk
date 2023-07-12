# Software Management Reports V3

```ts
const softwareManagementReportsV3Controller = new SoftwareManagementReportsV3Controller(client);
```

## Class Name

`SoftwareManagementReportsV3Controller`

## Methods

* [Get Campaign History by Status](../../doc/controllers/software-management-reports-v3.md#get-campaign-history-by-status)
* [Get Device Firmware Upgrade History](../../doc/controllers/software-management-reports-v3.md#get-device-firmware-upgrade-history)
* [Get Campaign Device Status](../../doc/controllers/software-management-reports-v3.md#get-campaign-device-status)


# Get Campaign History by Status

Retrieve a list of campaigns for an account that have a specified campaign status.

```ts
async getCampaignHistoryByStatus(
  acc: string,
  campaignStatus: CampaignStatusEnum,
  lastSeenCampaignId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3CampaignHistory>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acc` | `string` | Template, Required | Account identifier. |
| `campaignStatus` | [`CampaignStatusEnum`](../../doc/models/campaign-status-enum.md) | Query, Required | Campaign status. |
| `lastSeenCampaignId` | `string \| undefined` | Query, Optional | Last seen campaign Id. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3CampaignHistory`](../../doc/models/v3-campaign-history.md)

## Example Usage

```ts
const acc = '0000123456-00001';

const campaignStatus = CampaignStatusEnum.CampaignRequestPending;

const lastSeenCampaignId = '60b5d639-ccdc-4db8-8824-069bd94c95bf';

try {
  const { result, ...httpResponse } = await softwareManagementReportsV3Controller.getCampaignHistoryByStatus(
    acc,
    campaignStatus,
    lastSeenCampaignId
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
  "hasMoreData": true,
  "lastSeenCampaignId": "60b5d639-ccdc-4db8-8824-069bd94c95bf",
  "campaignList": [
    {
      "accountName": "0000123456-00001",
      "id": "60b5d639-ccdc-4db8-8824-069bd94c95bf",
      "campaignName": "FOTA_Verizon_Upgrade",
      "firmwareName": "FOTA_Verizon_Model-A_02To03_HF",
      "firmwareFrom": "FOTA_Verizon_Model-A_00To01_HF",
      "firmwareTo": "FOTA_Verizon_Model-A_02To03_HF",
      "make": "Verizon",
      "model": "Model-A",
      "status": "CampaignEnded",
      "startDate": "2020-08-21",
      "endDate": "2020-08-22",
      "campaignTimeWindowList": [
        {
          "startTime": 20,
          "endTime": 21
        }
      ]
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV3ResultError`](../../doc/models/fota-v3-result-error.md) |


# Get Device Firmware Upgrade History

Retrieve campaign history for a specific device.

```ts
async getDeviceFirmwareUpgradeHistory(
  acc: string,
  deviceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceFirmwareUpgrade[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acc` | `string` | Template, Required | Account identifier. |
| `deviceId` | `string` | Template, Required | Device IMEI identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceFirmwareUpgrade[]`](../../doc/models/device-firmware-upgrade.md)

## Example Usage

```ts
const acc = '0000123456-00001';

const deviceId = '15-digit IMEI';

try {
  const { result, ...httpResponse } = await softwareManagementReportsV3Controller.getDeviceFirmwareUpgradeHistory(
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

## Example Response *(as JSON)*

```json
[
  {
    "deviceId": "15-digit IMEI",
    "campaignId": "252d7ffc-7e35-11ec-931d-76f56843c393",
    "accountName": "0000123456-00001",
    "firmwareName": "SEQUANSCommunications_GM01Q_SR1.2.0.0-10657_SR1.2.0.0-10512",
    "firmwareFrom": "SR1.2.0.0-10657",
    "firmwareTo": "SR1.2.0.0-10512",
    "startDate": "2022-01-25",
    "reportUpdatedTime": "2022-01-26 03:45:01.608 +0000 UTC",
    "status": "UpgradeSuccess",
    "reason": "Upgrade completed successfully"
  },
  {
    "deviceId": "15-digit IMEI",
    "campaignId": "8f5e9a4a-6ce2-11ec-ace7-3ea293843397",
    "accountName": "0000123456-00001",
    "firmwareName": "SEQUANSCommunications_GM01Q_SR1.2.0.0-10512_SR1.2.0.0-10657",
    "firmwareFrom": "SR1.2.0.0-10512",
    "firmwareTo": "SR1.2.0.0-10657",
    "startDate": "2022-01-03",
    "reportUpdatedTime": "2022-01-04 02:45:00.67 +0000 UTC",
    "status": "UpgradeSuccess",
    "reason": "Upgrade completed successfully"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV3ResultError`](../../doc/models/fota-v3-result-error.md) |


# Get Campaign Device Status

Retrieve a list of all devices in a campaign and the status of each device.

```ts
async getCampaignDeviceStatus(
  acc: string,
  campaignId: string,
  lastSeenDeviceId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3CampaignDevice>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acc` | `string` | Template, Required | Account identifier. |
| `campaignId` | `string` | Template, Required | Campaign identifier. |
| `lastSeenDeviceId` | `string \| undefined` | Query, Optional | Last seen device identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3CampaignDevice`](../../doc/models/v3-campaign-device.md)

## Example Usage

```ts
const acc = '0000123456-00001';

const campaignId = 'f858b8c4-2153-11ec-8c44-aeb16d1aa652';

const lastSeenDeviceId = '15-digit IMEI';

try {
  const { result, ...httpResponse } = await softwareManagementReportsV3Controller.getCampaignDeviceStatus(
    acc,
    campaignId,
    lastSeenDeviceId
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
  "totalDevice": 2689,
  "hasMoreData": true,
  "lastSeenDeviceId": "15-digit IMEI",
  "maxPageSize": 1000,
  "deviceList": [
    {
      "deviceId": "15-digit IMEI",
      "status": "UpgradePending",
      "resultReason": "Upgrade pending, the device upgrade is estimated to be scheduled for 06 Oct 22 18:05 UTC",
      "updatedTime": "2022-08-05T21:05:27.129Z",
      "recentAttemptTime": "2022-10-05T21:05:01.19Z",
      "nextAttemptTime": "2022-10-06T18:35:00Z"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV3ResultError`](../../doc/models/fota-v3-result-error.md) |

