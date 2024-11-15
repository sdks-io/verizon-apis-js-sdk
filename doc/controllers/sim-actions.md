# SIM Actions

```ts
const sIMActionsController = new SIMActionsController(client);
```

## Class Name

`SIMActionsController`

## Methods

* [Newactivatecode](../../doc/controllers/sim-actions.md#newactivatecode)
* [Setactivate Using POST](../../doc/controllers/sim-actions.md#setactivate-using-post)
* [Setdeactivate Using POST](../../doc/controllers/sim-actions.md#setdeactivate-using-post)


# Newactivatecode

System assign a new activation code to reactivate a deactivated device. **Note:** the previously assigned ICCID must be used to request a new activation code.

```ts
async newactivatecode(  body: ESIMProfileRequest2,
requestOptions?: RequestOptions): Promise<ApiResponse<ESIMRequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ESIMProfileRequest2`](../../doc/models/esim-profile-request-2.md) | Body, Required | Device Profile Query |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ESIMRequestResponse`](../../doc/models/esim-request-response.md)

## Example Usage

```ts
const body: ESIMProfileRequest2 = {
  devices: [
    {
      deviceIds: [
        {
          id: '15-digit IMEI',
          kind: 'imei',
        },
        {
          id: '20-digit ICCID',
          kind: 'iccid',
        }
      ],
    }
  ],
  accountName: '0000123456-00001',
  servicePlan: 'the service plan name',
  mdnZipCode: 'five digit zip code',
};

try {
  const { result, ...httpResponse } = await sIMActionsController.newactivatecode(body);
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
  "requestId": "d1f08526-5443-4054-9a29-4456490ea9f8"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 401 | Unauthorized | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 403 | Forbidden | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 404 | Not Found / Does not exist | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 406 | Format / Request Unacceptable | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 429 | Too many requests | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| Default | Error response | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |


# Setactivate Using POST

Uses the profile to activate the SIM.

```ts
async setactivateUsingPOST(  body: ESIMProfileRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<ESIMRequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ESIMProfileRequest`](../../doc/models/esim-profile-request.md) | Body, Required | Device Profile Query |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ESIMRequestResponse`](../../doc/models/esim-request-response.md)

## Example Usage

```ts
const body: ESIMProfileRequest = {
  devices: [
    {
      deviceIds: [
        {
          id: '32-digit EID',
          kind: 'eid',
        },
        {
          id: '15-digit IMEI',
          kind: 'imei',
        },
        {
          id: '20-digit ICCID',
          kind: 'iccid (ICCID is only used for reactivation)',
        }
      ],
    }
  ],
  carrierName: 'Verizon Wireless',
  accountName: '0000123456-00001',
  servicePlan: 'the service plan name',
  mdnZipCode: 'five digit zip code',
};

try {
  const { result, ...httpResponse } = await sIMActionsController.setactivateUsingPOST(body);
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
  "requestId": "d1f08526-5443-4054-9a29-4456490ea9f8"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 401 | Unauthorized | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 403 | Forbidden | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 404 | Not Found / Does not exist | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 406 | Format / Request Unacceptable | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 429 | Too many requests | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| Default | Error response | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |


# Setdeactivate Using POST

Uses the profile to deactivate the SIM.

```ts
async setdeactivateUsingPOST(  body: ProfileRequest2,
requestOptions?: RequestOptions): Promise<ApiResponse<ESIMRequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ProfileRequest2`](../../doc/models/profile-request-2.md) | Body, Required | Device Profile Query |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ESIMRequestResponse`](../../doc/models/esim-request-response.md)

## Example Usage

```ts
const body: ProfileRequest2 = {
  accountName: '0000123456-00001',
  carrierName: 'Verizon Wireless',
  reasonCode: 'FF',
  etfWaiver: true,
  checkFallbackProfile: false,
};

try {
  const { result, ...httpResponse } = await sIMActionsController.setdeactivateUsingPOST(body);
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
  "requestId": "d1f08526-5443-4054-9a29-4456490ea9f8"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 401 | Unauthorized | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 403 | Forbidden | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 404 | Not Found / Does not exist | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 406 | Format / Request Unacceptable | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 429 | Too many requests | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| Default | Error response | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |

