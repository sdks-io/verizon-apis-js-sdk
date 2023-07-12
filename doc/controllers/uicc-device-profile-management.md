# UICC Device Profile Management

```ts
const uICCDeviceProfileManagementController = new UICCDeviceProfileManagementController(client);
```

## Class Name

`UICCDeviceProfileManagementController`

## Methods

* [Download Local Profile to Enable](../../doc/controllers/uicc-device-profile-management.md#download-local-profile-to-enable)
* [Download Local Profile to Disable](../../doc/controllers/uicc-device-profile-management.md#download-local-profile-to-disable)
* [Enable Local Profile](../../doc/controllers/uicc-device-profile-management.md#enable-local-profile)
* [Disable Local Profile](../../doc/controllers/uicc-device-profile-management.md#disable-local-profile)
* [Delete Local Profile](../../doc/controllers/uicc-device-profile-management.md#delete-local-profile)


# Download Local Profile to Enable

Downloads an eUICC local profile to devices and enables the profile.

```ts
async downloadLocalProfileToEnable(
  body: ProfileChangeStateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ProfileChangeStateRequest`](../../doc/models/profile-change-state-request.md) | Body, Required | Device Profile Query |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: ProfileChangeStateRequest = {
  devices: [
    {
      deviceIds: [
        {
          id: '678912789123453456784008666456',
          kind: KindEnum.Eid,
        },
        {
          id: '78425989148000000840',
          kind: KindEnum.Iccid,
        }
      ],
    }
  ],
  accountName: '1223334444-00001',
  smsrOid: '1.3.6.1.4.1.31746.1.500.200.101.5',
};

try {
  const { result, ...httpResponse } = await uICCDeviceProfileManagementController.downloadLocalProfileToEnable(body);
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
  "requestId": "595f5c44-c31c-4552-8670-020a1545a84d"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Download Local Profile to Disable

Downloads an eUICC local profile to devices and leaves the profile disabled.

```ts
async downloadLocalProfileToDisable(
  body: ProfileChangeStateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ProfileChangeStateRequest`](../../doc/models/profile-change-state-request.md) | Body, Required | Device Profile Query |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: ProfileChangeStateRequest = {
  devices: [
    {
      deviceIds: [
        {
          id: '678912789123453456784008666456',
          kind: KindEnum.Eid,
        },
        {
          id: '78425989148000000840',
          kind: KindEnum.Iccid,
        }
      ],
    }
  ],
  accountName: '1223334444-00001',
  smsrOid: '1.3.6.1.4.1.31746.1.500.200.101.5',
};

try {
  const { result, ...httpResponse } = await uICCDeviceProfileManagementController.downloadLocalProfileToDisable(body);
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
  "requestId": "595f5c44-c31c-4552-8670-020a1545a84d"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Enable Local Profile

Enable a local profile that has been downloaded to eUICC devices.

```ts
async enableLocalProfile(
  body: ProfileChangeStateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ProfileChangeStateRequest`](../../doc/models/profile-change-state-request.md) | Body, Required | Update state |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RequestResponse`](../../doc/models/request-response.md)

## Example Usage

```ts
const body: ProfileChangeStateRequest = {
  devices: [
    {
      deviceIds: [
        {
          id: '678912789123453456784008666456',
          kind: KindEnum.Eid,
        },
        {
          id: '78425989148000000840',
          kind: KindEnum.Iccid,
        }
      ],
    }
  ],
  accountName: '1223334444-00001',
  smsrOid: '1.3.6.1.4.1.31746.1.500.200.101.5',
};

try {
  const { result, ...httpResponse } = await uICCDeviceProfileManagementController.enableLocalProfile(body);
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
| 400 | Error Response | [`RestErrorResponseError`](../../doc/models/rest-error-response-error.md) |


# Disable Local Profile

Disable a local profile on eUICC devices. The default or boot profile will become the enabled profile.

```ts
async disableLocalProfile(
  body: ProfileChangeStateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ProfileChangeStateRequest`](../../doc/models/profile-change-state-request.md) | Body, Required | Update state |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RequestResponse`](../../doc/models/request-response.md)

## Example Usage

```ts
const body: ProfileChangeStateRequest = {
  devices: [
    {
      deviceIds: [
        {
          id: '678912789123453456784008666456',
          kind: KindEnum.Eid,
        },
        {
          id: '78425989148000000840',
          kind: KindEnum.Iccid,
        }
      ],
    }
  ],
  accountName: '1223334444-00001',
  smsrOid: '1.3.6.1.4.1.31746.1.500.200.101.5',
};

try {
  const { result, ...httpResponse } = await uICCDeviceProfileManagementController.disableLocalProfile(body);
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
| 400 | Error Response | [`RestErrorResponseError`](../../doc/models/rest-error-response-error.md) |


# Delete Local Profile

Delete a local profile from eUICC devices. If the local profile is enabled, it will first be disabled and the boot or default profile will be enabled.

```ts
async deleteLocalProfile(
  body: ProfileChangeStateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ProfileChangeStateRequest`](../../doc/models/profile-change-state-request.md) | Body, Required | Update state |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RequestResponse`](../../doc/models/request-response.md)

## Example Usage

```ts
const body: ProfileChangeStateRequest = {
  devices: [
    {
      deviceIds: [
        {
          id: '678912789123453456784008666456',
          kind: KindEnum.Eid,
        },
        {
          id: '78425989148000000840',
          kind: KindEnum.Iccid,
        }
      ],
    }
  ],
  accountName: '1223334444-00001',
  smsrOid: '1.3.6.1.4.1.31746.1.500.200.101.5',
};

try {
  const { result, ...httpResponse } = await uICCDeviceProfileManagementController.deleteLocalProfile(body);
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
| 400 | Error Response | [`RestErrorResponseError`](../../doc/models/rest-error-response-error.md) |

