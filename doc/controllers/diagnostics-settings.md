# Diagnostics Settings

```ts
const diagnosticsSettingsController = new DiagnosticsSettingsController(client);
```

## Class Name

`DiagnosticsSettingsController`


# List Diagnostics Settings

This endpoint retrieves diagnostics settings synchronously.

```ts
async listDiagnosticsSettings(
  accountName: string,
  devices: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DiagnosticObservationSetting[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Query, Required | Account identifier. |
| `devices` | `string` | Query, Required | Devices list format: [{"id":"{imei1}","kind":"imei"},{"id":"{imei2}","kind":"imei"}]. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DiagnosticObservationSetting[]`](../../doc/models/diagnostic-observation-setting.md)

## Example Usage

```ts
const accountName = '0000123456-00001';

const devices = '[{"id":"864508030026238","kind":"IMEI"},{"id":"864508030026238","kind":"IMEI"}]';

try {
  const { result, ...httpResponse } = await diagnosticsSettingsController.listDiagnosticsSettings(
    accountName,
    devices
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
    "accountName": "string",
    "device": {
      "id": "864508030026238",
      "kind": "IMEI"
    },
    "attributes": [
      {
        "name": "MANUFACTURER",
        "value": "string",
        "createdOn": "2019-09-07T23:08:03.532Z",
        "isObservable": true,
        "isObserving": true,
        "frequency": {
          "value": 5,
          "unit": "SECOND"
        }
      }
    ]
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error response. | [`DeviceDiagnosticsResultError`](../../doc/models/device-diagnostics-result-error.md) |

