# Server Logging

```ts
const serverLoggingController = new ServerLoggingController(client);
```

## Class Name

`ServerLoggingController`


# Get Device Check in History

Check-in history can be retrieved for any device belonging to the account, not necessarily with logging enabled.

```ts
async getDeviceCheckInHistory(
  account: string,
  deviceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CheckInHistoryItem[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `deviceId` | `string` | Template, Required | Device IMEI identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CheckInHistoryItem[]`](../../doc/models/check-in-history-item.md)

## Example Usage

```ts
const account = '0000123456-00001';

const deviceId = '990013907835573';

try {
  const { result, ...httpResponse } = await serverLoggingController.getDeviceCheckInHistory(
    account,
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
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |

