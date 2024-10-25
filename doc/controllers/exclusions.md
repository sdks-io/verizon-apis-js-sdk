# Exclusions

Exclude devices from location services.

```ts
const exclusionsController = new ExclusionsController(client);
```

## Class Name

`ExclusionsController`

## Methods

* [Devices Location Get Consent Async](../../doc/controllers/exclusions.md#devices-location-get-consent-async)
* [Devices Location Give Consent Async](../../doc/controllers/exclusions.md#devices-location-give-consent-async)
* [Devices Location Update Consent](../../doc/controllers/exclusions.md#devices-location-update-consent)
* [Exclude Devices](../../doc/controllers/exclusions.md#exclude-devices)
* [Remove Devices From Exclusion List](../../doc/controllers/exclusions.md#remove-devices-from-exclusion-list)
* [List Excluded Devices](../../doc/controllers/exclusions.md#list-excluded-devices)


# Devices Location Get Consent Async

Get the consent settings for the entire account or device list in an account.

```ts
async devicesLocationGetConsentAsync(  accountName: string,
  deviceId?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<GetAccountDeviceConsent>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Query, Required | The numeric name of the account. |
| `deviceId` | `string \| undefined` | Query, Optional | The IMEI of the device being queried |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetAccountDeviceConsent`](../../doc/models/get-account-device-consent.md)

## Example Usage

```ts
const accountName = '0000123456-00001';

const deviceId = '900000000000009';

try {
  const { result, ...httpResponse } = await exclusionsController.devicesLocationGetConsentAsync(
  accountName,
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
| Default | Unexpected error. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# Devices Location Give Consent Async

Create a consent record to use location services as an asynchronous request.

```ts
async devicesLocationGiveConsentAsync(  body?: AccountConsentCreate,
requestOptions?: RequestOptions): Promise<ApiResponse<ConsentTransactionID>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AccountConsentCreate \| undefined`](../../doc/models/account-consent-create.md) | Body, Optional | Account details to create a consent record. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConsentTransactionID`](../../doc/models/consent-transaction-id.md)

## Example Usage

```ts
const body: AccountConsentCreate = {
  accountName: '0000123456-00001',
};

try {
  const { result, ...httpResponse } = await exclusionsController.devicesLocationGiveConsentAsync(body);
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
| Default | Unexpected error. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# Devices Location Update Consent

Update the location services consent record for an entire account.

```ts
async devicesLocationUpdateConsent(  body?: AccountConsentUpdate,
requestOptions?: RequestOptions): Promise<ApiResponse<ConsentTransactionID>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AccountConsentUpdate \| undefined`](../../doc/models/account-consent-update.md) | Body, Optional | Account details to update a consent record. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConsentTransactionID`](../../doc/models/consent-transaction-id.md)

## Example Usage

```ts
const body: AccountConsentUpdate = {
  accountName: '0000123456-00001',
  allDeviceConsent: 0,
};

try {
  const { result, ...httpResponse } = await exclusionsController.devicesLocationUpdateConsent(body);
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
| Default | Unexpected error. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# Exclude Devices

This consents endpoint sets a new exclusion list.

```ts
async excludeDevices(  body: ConsentRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<DeviceLocationSuccessResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ConsentRequest`](../../doc/models/consent-request.md) | Body, Required | Request to update account consent exclusion list. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceLocationSuccessResult`](../../doc/models/device-location-success-result.md)

## Example Usage

```ts
const body: ConsentRequest = {
  accountName: '1234567890-00001',
  allDevice: false,
  type: 'replace',
  exclusion: [
    '980003420535573',
    '375535024300089',
    'A100003861E585'
  ],
};

try {
  const { result, ...httpResponse } = await exclusionsController.excludeDevices(body);
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
| 400 | Unexpected error. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# Remove Devices From Exclusion List

Removes devices from the exclusion list so that they can be located with Device Location Services requests.

```ts
async removeDevicesFromExclusionList(  accountName: string,
  deviceList: string,
requestOptions?: RequestOptions): Promise<ApiResponse<DeviceLocationSuccessResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Query, Required | The numeric name of the account. |
| `deviceList` | `string` | Query, Required | A list of the device IDs to remove from the exclusion list. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceLocationSuccessResult`](../../doc/models/device-location-success-result.md)

## Example Usage

```ts
const accountName = '0000123456-00001';

const deviceList = 'IMEI';

try {
  const { result, ...httpResponse } = await exclusionsController.removeDevicesFromExclusionList(
  accountName,
  deviceList
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
| 400 | Unexpected error. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# List Excluded Devices

This consents endpoint retrieves a list of excluded devices in an account.

```ts
async listExcludedDevices(  accountName: string,
  startIndex: string,
requestOptions?: RequestOptions): Promise<ApiResponse<DevicesConsentResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Template, Required | Account identifier in "##########-#####". |
| `startIndex` | `string` | Template, Required | Zero-based number of the first record to return. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DevicesConsentResult`](../../doc/models/devices-consent-result.md)

## Example Usage

```ts
const accountName = '0252012345-00001';

const startIndex = '0';

try {
  const { result, ...httpResponse } = await exclusionsController.listExcludedDevices(
  accountName,
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
  "accountName": "2024009649-00001",
  "allDevice": false,
  "hasMoreData": false,
  "totalCount": 4,
  "updateTime": "2018-05-18 19:20:50.076 +0000 UTC",
  "exclusion": [
    "990003420535375",
    "420535399000375",
    "A100003861E585",
    "205353759900034"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |

