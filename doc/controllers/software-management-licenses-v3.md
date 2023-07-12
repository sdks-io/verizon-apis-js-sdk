# Software Management Licenses V3

```ts
const softwareManagementLicensesV3Controller = new SoftwareManagementLicensesV3Controller(client);
```

## Class Name

`SoftwareManagementLicensesV3Controller`

## Methods

* [Get Account Licenses Status](../../doc/controllers/software-management-licenses-v3.md#get-account-licenses-status)
* [Assign Licenses to Devices](../../doc/controllers/software-management-licenses-v3.md#assign-licenses-to-devices)
* [Remove Licenses From Devices](../../doc/controllers/software-management-licenses-v3.md#remove-licenses-from-devices)


# Get Account Licenses Status

The endpoint allows user to list license usage.

```ts
async getAccountLicensesStatus(
  acc: string,
  lastSeenDeviceId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3LicenseSummary>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acc` | `string` | Template, Required | Account identifier. |
| `lastSeenDeviceId` | `string \| undefined` | Query, Optional | Last seen device identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3LicenseSummary`](../../doc/models/v3-license-summary.md)

## Example Usage

```ts
const acc = '0000123456-00001';

const lastSeenDeviceId = '0';

try {
  const { result, ...httpResponse } = await softwareManagementLicensesV3Controller.getAccountLicensesStatus(
    acc,
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
  "accountName": "0000123456-00001",
  "assignedLicenses": 4319,
  "hasMoreData": true,
  "lastSeenDeviceId": "1000",
  "maxPageSize": 1000,
  "deviceList": [
    {
      "deviceId": "15-digit IMEI",
      "assignmentTime": "2017-11-29 20:15:42.738 +0000 UTC"
    },
    {
      "deviceId": "15-digit IMEI",
      "assignmentTime": "2017-11-29 20:15:42.738 +0000 UTC"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV3ResultError`](../../doc/models/fota-v3-result-error.md) |


# Assign Licenses to Devices

This endpoint allows user to assign licenses to a list of devices.

```ts
async assignLicensesToDevices(
  acc: string,
  body: V3LicenseIMEI,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3LicenseAssignedRemovedResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acc` | `string` | Template, Required | Account identifier. |
| `body` | [`V3LicenseIMEI`](../../doc/models/v3-license-imei.md) | Body, Required | License assignment. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3LicenseAssignedRemovedResult`](../../doc/models/v3-license-assigned-removed-result.md)

## Example Usage

```ts
const acc = '0000123456-00001';

const body: V3LicenseIMEI = {
  deviceList: [
    '15-digit IMEI',
    '15-digit IMEI'
  ],
};

try {
  const { result, ...httpResponse } = await softwareManagementLicensesV3Controller.assignLicensesToDevices(
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
  "licUsedCount": 2,
  "licCount": 1000,
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


# Remove Licenses From Devices

This endpoint allows user to remove licenses from a list of devices.

```ts
async removeLicensesFromDevices(
  acc: string,
  body: V3LicenseIMEI,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3LicenseAssignedRemovedResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acc` | `string` | Template, Required | Account identifier. |
| `body` | [`V3LicenseIMEI`](../../doc/models/v3-license-imei.md) | Body, Required | License removal. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3LicenseAssignedRemovedResult`](../../doc/models/v3-license-assigned-removed-result.md)

## Example Usage

```ts
const acc = '0000123456-00001';

const body: V3LicenseIMEI = {
  deviceList: [
    '15-digit IMEI',
    '15-digit IMEI',
    '15-digit IMEI'
  ],
};

try {
  const { result, ...httpResponse } = await softwareManagementLicensesV3Controller.removeLicensesFromDevices(
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
  "licUsedCount": 998,
  "licCount": 1000,
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

