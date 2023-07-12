# Software Management Licenses V2

```ts
const softwareManagementLicensesV2Controller = new SoftwareManagementLicensesV2Controller(client);
```

## Class Name

`SoftwareManagementLicensesV2Controller`

## Methods

* [Get Account License Status](../../doc/controllers/software-management-licenses-v2.md#get-account-license-status)
* [Assign Licenses to Devices](../../doc/controllers/software-management-licenses-v2.md#assign-licenses-to-devices)
* [Remove Licenses From Devices](../../doc/controllers/software-management-licenses-v2.md#remove-licenses-from-devices)
* [List Licenses to Remove](../../doc/controllers/software-management-licenses-v2.md#list-licenses-to-remove)
* [Create List of Licenses to Remove](../../doc/controllers/software-management-licenses-v2.md#create-list-of-licenses-to-remove)
* [Delete List of Licenses to Remove](../../doc/controllers/software-management-licenses-v2.md#delete-list-of-licenses-to-remove)


# Get Account License Status

The endpoint allows user to list license usage.

```ts
async getAccountLicenseStatus(
  account: string,
  lastSeenDeviceId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V2LicenseSummary>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `lastSeenDeviceId` | `string \| undefined` | Query, Optional | Last seen device identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V2LicenseSummary`](../../doc/models/v2-license-summary.md)

## Example Usage

```ts
const account = '0000123456-00001';

const lastSeenDeviceId = '15-digit IMEI';

try {
  const { result, ...httpResponse } = await softwareManagementLicensesV2Controller.getAccountLicenseStatus(
    account,
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
  "accountName": "0402196254-00001",
  "totalLicense": 5000,
  "assignedLicenses": 4319,
  "hasMoreData": true,
  "lastSeenDeviceId": "1000",
  "maxPageSize": 10,
  "deviceList": [
    {
      "deviceId": "990003425730535",
      "assignmentTime": "2017-11-29T16:03:42.000Z"
    },
    {
      "deviceId": "990000473475989",
      "assignmentTime": "2017-11-29T16:03:42.000Z"
    },
    {
      "deviceId": "990000347475989",
      "assignmentTime": "2017-11-29T16:03:42.000Z"
    },
    {
      "deviceId": "990007303425535",
      "assignmentTime": "2017-11-29T16:03:42.000Z"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |


# Assign Licenses to Devices

**This endpoint is deprecated.**

This endpoint allows user to assign licenses to a list of devices.

```ts
async assignLicensesToDevices(
  account: string,
  body: V2LicenseIMEI,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V2LicensesAssignedRemovedResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `body` | [`V2LicenseIMEI`](../../doc/models/v2-license-imei.md) | Body, Required | License assignment. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V2LicensesAssignedRemovedResult`](../../doc/models/v2-licenses-assigned-removed-result.md)

## Example Usage

```ts
const account = '0242078689-00001';

const body: V2LicenseIMEI = {
  deviceList: [
    '990003425730524',
    '990000473475967'
  ],
};

try {
  const { result, ...httpResponse } = await softwareManagementLicensesV2Controller.assignLicensesToDevices(
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
  "accountName": "0242078689-00001",
  "licTotalCount": 1000,
  "licUsedCount": 502,
  "deviceList": [
    {
      "deviceId": "990003425730524",
      "status": "Success",
      "resultReason": "Success"
    },
    {
      "deviceId": "990000473475967",
      "status": "Failure",
      "resultReason": "Device does not exist."
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |


# Remove Licenses From Devices

**This endpoint is deprecated.**

This endpoint allows user to remove licenses from a list of devices.

```ts
async removeLicensesFromDevices(
  account: string,
  body: V2LicenseIMEI,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V2LicensesAssignedRemovedResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `body` | [`V2LicenseIMEI`](../../doc/models/v2-license-imei.md) | Body, Required | License removal. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V2LicensesAssignedRemovedResult`](../../doc/models/v2-licenses-assigned-removed-result.md)

## Example Usage

```ts
const account = '0242078689-00001';

const body: V2LicenseIMEI = {
  deviceList: [
    '990003425730535',
    '990000473475989',
    '900000000000999'
  ],
};

try {
  const { result, ...httpResponse } = await softwareManagementLicensesV2Controller.removeLicensesFromDevices(
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
  "accountName": "0242078689-00001",
  "licTotalCount": 1000,
  "licUsedCount": 998,
  "deviceList": [
    {
      "deviceId": "990003425730535",
      "status": "Success",
      "resultReason": "Success"
    },
    {
      "deviceId": "990000473475989",
      "status": "Success",
      "resultReason": "Success"
    },
    {
      "deviceId": "900000000000999",
      "status": "Failure",
      "resultReason": "No license attached to device"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |


# List Licenses to Remove

**This endpoint is deprecated.**

The license cancel endpoint allows user to list registered license cancellation candidate devices.

```ts
async listLicensesToRemove(
  account: string,
  startIndex?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V2ListOfLicensesToRemove>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `startIndex` | `string \| undefined` | Query, Optional | Start index to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V2ListOfLicensesToRemove`](../../doc/models/v2-list-of-licenses-to-remove.md)

## Example Usage

```ts
const account = '0242078689-00001';

try {
  const { result, ...httpResponse } = await softwareManagementLicensesV2Controller.listLicensesToRemove(account);
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
  "count": 6,
  "hasMoreData": false,
  "updateTime": "2018-03-22 00:06:00.069 +0000 UTC",
  "deviceList": [
    "990003425730535",
    "990000473475989",
    "990005733420535",
    "990000347475989",
    "990007303425535",
    "990007590473489"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |


# Create List of Licenses to Remove

**This endpoint is deprecated.**

The license cancel endpoint allows user to create a list of license cancellation candidate devices.

```ts
async createListOfLicensesToRemove(
  account: string,
  body: V2ListOfLicensesToRemoveRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V2ListOfLicensesToRemoveResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `body` | [`V2ListOfLicensesToRemoveRequest`](../../doc/models/v2-list-of-licenses-to-remove-request.md) | Body, Required | List of licensess to remove. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V2ListOfLicensesToRemoveResult`](../../doc/models/v2-list-of-licenses-to-remove-result.md)

## Example Usage

```ts
const account = '0242078689-00001';

const body: V2ListOfLicensesToRemoveRequest = {
  deviceList: [
    '990003425730535',
    '990000473475989'
  ],
  type: 'append',
  count: 2,
};

try {
  const { result, ...httpResponse } = await softwareManagementLicensesV2Controller.createListOfLicensesToRemove(
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
  "count": 2,
  "deviceList": [
    "990003425730535",
    "990000473475989"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |


# Delete List of Licenses to Remove

**This endpoint is deprecated.**

This endpoint allows user to delete a created cancel candidate device list.

```ts
async deleteListOfLicensesToRemove(
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
const account = '0242078689-00001';

try {
  const { result, ...httpResponse } = await softwareManagementLicensesV2Controller.deleteListOfLicensesToRemove(account);
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

