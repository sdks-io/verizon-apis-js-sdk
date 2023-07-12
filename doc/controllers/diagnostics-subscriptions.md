# Diagnostics Subscriptions

```ts
const diagnosticsSubscriptionsController = new DiagnosticsSubscriptionsController(client);
```

## Class Name

`DiagnosticsSubscriptionsController`


# Get Diagnostics Subscription

This endpoint retrieves a diagnostics subscription by account.

```ts
async getDiagnosticsSubscription(
  accountName: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DiagnosticsSubscription>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Query, Required | Account identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DiagnosticsSubscription`](../../doc/models/diagnostics-subscription.md)

## Example Usage

```ts
const accountName = '0000123456-00001';

try {
  const { result, ...httpResponse } = await diagnosticsSubscriptionsController.getDiagnosticsSubscription(accountName);
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
  "accountName": "TestQAAccount",
  "skuName": "TS-BUNDLE-KTO-DIAGNOSTIC-MRC",
  "totalAllowed": 100,
  "totalUsed": 50,
  "createdOn": "2019-08-29T00:47:59.240Z",
  "lastUpdated": "2019-08-29T00:47:59.240Z"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error response. | [`DeviceDiagnosticsResultError`](../../doc/models/device-diagnostics-result-error.md) |

