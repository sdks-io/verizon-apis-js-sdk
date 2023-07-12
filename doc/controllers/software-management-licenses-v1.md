# Software Management Licenses V1

```ts
const softwareManagementLicensesV1Controller = new SoftwareManagementLicensesV1Controller(client);
```

## Class Name

`SoftwareManagementLicensesV1Controller`

## Methods

* [Assign Licenses to Devices](../../doc/controllers/software-management-licenses-v1.md#assign-licenses-to-devices)
* [Remove Licenses From Devices](../../doc/controllers/software-management-licenses-v1.md#remove-licenses-from-devices)
* [Create List of Licenses to Remove](../../doc/controllers/software-management-licenses-v1.md#create-list-of-licenses-to-remove)
* [Delete List of Licenses to Remove](../../doc/controllers/software-management-licenses-v1.md#delete-list-of-licenses-to-remove)
* [List Licenses to Remove](../../doc/controllers/software-management-licenses-v1.md#list-licenses-to-remove)


# Assign Licenses to Devices

**This endpoint is deprecated.**

Assigns licenses to a specified list of devices so that firmware upgrades can be scheduled for those devices.

```ts
async assignLicensesToDevices(
  account: string,
  body: V1LicensesAssignedRemovedRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1LicensesAssignedRemovedResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier in "##########-#####". |
| `body` | [`V1LicensesAssignedRemovedRequest`](../../doc/models/v1-licenses-assigned-removed-request.md) | Body, Required | IMEIs of the devices to assign licenses to. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V1LicensesAssignedRemovedResult`](../../doc/models/v1-licenses-assigned-removed-result.md)

## Example Usage

```ts
const account = '0242078689-00001';

const body: V1LicensesAssignedRemovedRequest = {
  deviceList: [
    '990003425730535',
    '990000473475989'
  ],
};

try {
  const { result, ...httpResponse } = await softwareManagementLicensesV1Controller.assignLicensesToDevices(
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
  "licCount": 9000,
  "licUsedCount": 1000,
  "deviceList": [
    {
      "deviceId": "900000000000001",
      "status": "LicenseAssignSuccess",
      "Reason": "Success"
    },
    {
      "deviceId": "900000000000999",
      "status": "LicenseAssignSuccess",
      "Reason": "Success"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV1ResultError`](../../doc/models/fota-v1-result-error.md) |


# Remove Licenses From Devices

**This endpoint is deprecated.**

Remove unused licenses from device.

```ts
async removeLicensesFromDevices(
  account: string,
  body: V1LicensesAssignedRemovedRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1LicensesAssignedRemovedResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier in "##########-#####". |
| `body` | [`V1LicensesAssignedRemovedRequest`](../../doc/models/v1-licenses-assigned-removed-request.md) | Body, Required | IMEIs of the devices to remove licenses from. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V1LicensesAssignedRemovedResult`](../../doc/models/v1-licenses-assigned-removed-result.md)

## Example Usage

```ts
const account = '0242078689-00001';

const body: V1LicensesAssignedRemovedRequest = {
  deviceList: [
    '900000000000001',
    '900000000000998',
    '900000000000999'
  ],
};

try {
  const { result, ...httpResponse } = await softwareManagementLicensesV1Controller.removeLicensesFromDevices(
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
  "licCount": 9000,
  "licUsedCount": 998,
  "deviceList": [
    {
      "deviceId": "900000000000001",
      "status": "LicenseRemoveSuccess",
      "Reason": "Success"
    },
    {
      "deviceId": "900000000000998",
      "status": "LicenseRemoveSuccess",
      "Reason": "Success"
    },
    {
      "deviceId": "900000000000999",
      "status": "LicenseRemoveFailed",
      "Reason": "No license attached to device"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV1ResultError`](../../doc/models/fota-v1-result-error.md) |


# Create List of Licenses to Remove

**This endpoint is deprecated.**

Creates a list of devices from which licenses will be removed if the number of MRC licenses becomes less than the number of assigned licenses.

```ts
async createListOfLicensesToRemove(
  account: string,
  body: V1ListOfLicensesToRemoveRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1ListOfLicensesToRemoveResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier in "##########-#####". |
| `body` | [`V1ListOfLicensesToRemoveRequest`](../../doc/models/v1-list-of-licenses-to-remove-request.md) | Body, Required | Cancellation candidate device list. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V1ListOfLicensesToRemoveResult`](../../doc/models/v1-list-of-licenses-to-remove-result.md)

## Example Usage

```ts
const account = '0242078689-00001';

const body: V1ListOfLicensesToRemoveRequest = {
  deviceList: [
    '990003425730535',
    '990000473475989'
  ],
  type: 'append',
};

try {
  const { result, ...httpResponse } = await softwareManagementLicensesV1Controller.createListOfLicensesToRemove(
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
    "900000000000001",
    "900000000000999"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV1ResultError`](../../doc/models/fota-v1-result-error.md) |


# Delete List of Licenses to Remove

**This endpoint is deprecated.**

Deletes the entire list of cancellation candidate devices.

```ts
async deleteListOfLicensesToRemove(
  account: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FotaV1SuccessResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier in "##########-#####". |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FotaV1SuccessResult`](../../doc/models/fota-v1-success-result.md)

## Example Usage

```ts
const account = '0242078689-00001';

try {
  const { result, ...httpResponse } = await softwareManagementLicensesV1Controller.deleteListOfLicensesToRemove(account);
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


# List Licenses to Remove

**This endpoint is deprecated.**

Returns a list of devices from which licenses will be removed if the number of MRC licenses becomes less than the number of assigned licenses.

```ts
async listLicensesToRemove(
  account: string,
  startIndex: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1ListOfLicensesToRemove>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier in "##########-#####". |
| `startIndex` | `string` | Template, Required | The zero-based number of the first record to return. Set startIndex=0 for the first request. If there are more than 1,000 devices in the response, set startIndex=1000 for the second request, 2000 for the third request, etc. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V1ListOfLicensesToRemove`](../../doc/models/v1-list-of-licenses-to-remove.md)

## Example Usage

```ts
const account = '0242078689-00001';

const startIndex = 'startIndex4';

try {
  const { result, ...httpResponse } = await softwareManagementLicensesV1Controller.listLicensesToRemove(
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
  "count": 6,
  "hasMoreData": false,
  "updateTime": "2018-03-22T12:06:06.000Z",
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
| 400 | Unexpected error. | [`FotaV1ResultError`](../../doc/models/fota-v1-result-error.md) |

