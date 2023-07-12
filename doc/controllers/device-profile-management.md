# Device Profile Management

```ts
const deviceProfileManagementController = new DeviceProfileManagementController(client);
```

## Class Name

`DeviceProfileManagementController`

## Methods

* [Activate Device Through Profile](../../doc/controllers/device-profile-management.md#activate-device-through-profile)
* [Profile to Activate Device](../../doc/controllers/device-profile-management.md#profile-to-activate-device)
* [Profile to Deactivate Device](../../doc/controllers/device-profile-management.md#profile-to-deactivate-device)
* [Profile to Set Fallback Attribute](../../doc/controllers/device-profile-management.md#profile-to-set-fallback-attribute)


# Activate Device Through Profile

Uses the profile to bring the device under management.

```ts
async activateDeviceThroughProfile(
  body: ActivateDeviceProfileRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ActivateDeviceProfileRequest`](../../doc/models/activate-device-profile-request.md) | Body, Required | Device Profile Query |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RequestResponse`](../../doc/models/request-response.md)

## Example Usage

```ts
const body: ActivateDeviceProfileRequest = {
  devices: [
    {
      deviceIds: [
        {
          id: '32-digit EID',
          kind: KindEnum.Eid,
        },
        {
          id: '15-digit IMEI',
          kind: KindEnum.Imei,
        }
      ],
    }
  ],
  accountName: '0000123456-00001',
  servicePlan: 'The service plan name',
  mdnZipCode: 'five digit zip code',
};

try {
  const { result, ...httpResponse } = await deviceProfileManagementController.activateDeviceThroughProfile(body);
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
| 400 | Bad request | [`RestErrorResponseError`](../../doc/models/rest-error-response-error.md) |


# Profile to Activate Device

Uses the profile to activate the device.

```ts
async profileToActivateDevice(
  body: ProfileRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ProfileRequest`](../../doc/models/profile-request.md) | Body, Required | Device Profile Query |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RequestResponse`](../../doc/models/request-response.md)

## Example Usage

```ts
const body: ProfileRequest = {
  carrierName: 'the name of the mobile service provider',
  accountName: '0000123456-00001',
  servicePlan: 'The service plan name',
  mdnZipCode: 'five digit zip code',
};

try {
  const { result, ...httpResponse } = await deviceProfileManagementController.profileToActivateDevice(body);
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
| 400 | Bad request | [`RestErrorResponseError`](../../doc/models/rest-error-response-error.md) |


# Profile to Deactivate Device

Uses the profile to deactivate the device.

```ts
async profileToDeactivateDevice(
  body: ProfileRequest2,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ProfileRequest2`](../../doc/models/profile-request-2.md) | Body, Required | Device Profile Query |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RequestResponse`](../../doc/models/request-response.md)

## Example Usage

```ts
const body: ProfileRequest2 = {
  accountName: '0000123456-00001',
  carrierName: 'the name of the mobile service provider',
  reasonCode: 'a short code for the reason action was taken',
  etfWaiver: true,
  checkFallbackProfile: false,
};

try {
  const { result, ...httpResponse } = await deviceProfileManagementController.profileToDeactivateDevice(body);
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
| 400 | Bad request | [`RestErrorResponseError`](../../doc/models/rest-error-response-error.md) |


# Profile to Set Fallback Attribute

Allows the profile to set the fallback attribute to the device.

```ts
async profileToSetFallbackAttribute(
  body: SetFallbackAttributeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SetFallbackAttributeRequest`](../../doc/models/set-fallback-attribute-request.md) | Body, Required | Device Profile Query |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RequestResponse`](../../doc/models/request-response.md)

## Example Usage

```ts
const body: SetFallbackAttributeRequest = {
  accountName: '0000123456-00001',
  carrierName: 'the name of the mobile service provider',
};

try {
  const { result, ...httpResponse } = await deviceProfileManagementController.profileToSetFallbackAttribute(body);
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
| 400 | Bad request | [`RestErrorResponseError`](../../doc/models/rest-error-response-error.md) |

