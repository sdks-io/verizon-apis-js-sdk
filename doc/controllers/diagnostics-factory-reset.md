# Diagnostics Factory Reset

```ts
const diagnosticsFactoryResetController = new DiagnosticsFactoryResetController(client);
```

## Class Name

`DiagnosticsFactoryResetController`


# Decives Restart

Performs a device reboot or a factory reset on the modem portion of the device.

```ts
async decivesRestart(
  body: DeviceResetRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DiagnosticsObservationResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeviceResetRequest`](../../doc/models/device-reset-request.md) | Body, Required | A request to perform a device reboot. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DiagnosticsObservationResult`](../../doc/models/diagnostics-observation-result.md)

## Example Usage

```ts
const body: DeviceResetRequest = {
  accountName: '0642233522-00003',
  action: 'reboot',
  devices: [
    {
      id: '355154080648401',
      kind: 'IMEI',
    }
  ],
};

try {
  const { result, ...httpResponse } = await diagnosticsFactoryResetController.decivesRestart(body);
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
  "createdOn": "2019-02-03T06:48:07",
  "transactionID": "9c7bb124-11f5-4ff3-8a88-0eec1ba99205",
  "status": "FACTORY_RESET_PENDING"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error response. | [`DeviceDiagnosticsResultError`](../../doc/models/device-diagnostics-result-error.md) |

