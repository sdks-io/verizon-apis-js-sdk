# Global Reporting

```ts
const globalReportingController = new GlobalReportingController(client);
```

## Class Name

`GlobalReportingController`

## Methods

* [Deviceprovhistory Using POST](../../doc/controllers/global-reporting.md#deviceprovhistory-using-post)
* [Retrieve Global List](../../doc/controllers/global-reporting.md#retrieve-global-list)


# Deviceprovhistory Using POST

Retrieve the provisioning history of a specific device or devices.

```ts
async deviceprovhistoryUsingPOST(  body: ESIMProvhistoryRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<ESIMRequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ESIMProvhistoryRequest`](../../doc/models/esim-provhistory-request.md) | Body, Required | Device Provisioning History |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ESIMRequestResponse`](../../doc/models/esim-request-response.md)

## Example Usage

```ts
const body: ESIMProvhistoryRequest = {
  accountName: '0000123456-00001',
  earliest: '10/15/2021 04:49:35',
  latest: '10/15/2021 04:49:49',
};

try {
  const { result, ...httpResponse } = await globalReportingController.deviceprovhistoryUsingPOST(body);
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


# Retrieve Global List

Retrieve a list of all devices associated with an account.

```ts
async retrieveGlobalList(  body: ESIMGlobalDeviceList,
requestOptions?: RequestOptions): Promise<ApiResponse<ESIMRequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ESIMGlobalDeviceList`](../../doc/models/esim-global-device-list.md) | Body, Required | Device List |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ESIMRequestResponse`](../../doc/models/esim-request-response.md)

## Example Usage

```ts
const body: ESIMGlobalDeviceList = {
  accountName: '0000123456-00001',
  carrierNameFilter: 'VerizonWireless',
};

try {
  const { result, ...httpResponse } = await globalReportingController.retrieveGlobalList(body);
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
| 400 | Bad request | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 401 | Unauthorized | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 403 | Forbidden | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 404 | Not Found / Does not exist | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 406 | Format / Request Unacceptable | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| 429 | Too many requests | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |
| Default | Error response | [`ESIMRestErrorResponseError`](../../doc/models/esim-rest-error-response-error.md) |

