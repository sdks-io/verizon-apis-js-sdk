# SIM Securefor Io T Licenses

```ts
const sIMSecureforIoTLicensesController = new SIMSecureforIoTLicensesController(client);
```

## Class Name

`SIMSecureforIoTLicensesController`

## Methods

* [Assign License to Devices](../../doc/controllers/sim-securefor-io-t-licenses.md#assign-license-to-devices)
* [Unassign License to Devices](../../doc/controllers/sim-securefor-io-t-licenses.md#unassign-license-to-devices)


# Assign License to Devices

Assigns SIM-Secure for IoT licenses to SIMs.

```ts
async assignLicenseToDevices(
  body: AssignLicenseRequest,
  xRequestID?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SecuritySuccessResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AssignLicenseRequest`](../../doc/models/assign-license-request.md) | Body, Required | Request to assign license to devices. |
| `xRequestID` | `string \| undefined` | Header, Optional | Transaction Id.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9]-[0-9]{3,32}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SecuritySuccessResult`](../../doc/models/security-success-result.md)

## Example Usage

```ts
const body: AssignLicenseRequest = {
  accountName: '0000123456-00001',
  devices: [
    {
      deviceIds: [
        {
          id: '864508030109877',
          kind: 'IMEI',
        }
      ],
    }
  ],
  skuNumber: 'SIMSec-IoT-Lt',
};

try {
  const { result, ...httpResponse } = await sIMSecureForIoTLicensesController.assignLicenseToDevices(body);
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
  "requestId": "c3f3d17c-79ff-4b35-82df-94446785b6e0"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 401 | Unauthorized request. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 403 | Request Forbidden. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 404 | Not Found / Does not exist. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 406 | Format / Request Unacceptable. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 429 | Too many requests. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| Default | Error response. | [`SecurityResultError`](../../doc/models/security-result-error.md) |


# Unassign License to Devices

Unassigns SIM-Secure for IoT Flexible and Flexible Bundle license from SIMs.

```ts
async unassignLicenseToDevices(
  xRequestID: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SecuritySuccessResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xRequestID` | `string` | Header, Required | Transaction Id.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9]-[0-9]{3,32}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SecuritySuccessResult`](../../doc/models/security-success-result.md)

## Example Usage

```ts
const xRequestID = 'X-Request-ID2';

try {
  const { result, ...httpResponse } = await sIMSecureForIoTLicensesController.unassignLicenseToDevices(xRequestID);
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
  "requestId": "1f28c944-d007-44c9-9543-003b8820cc69"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 401 | Unauthorized request. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 403 | Request forbidden. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 404 | Not Found / Does not exist. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 406 | Format / Request Unacceptable. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 429 | Too many requests. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| Default | Error response. | [`SecurityResultError`](../../doc/models/security-result-error.md) |

