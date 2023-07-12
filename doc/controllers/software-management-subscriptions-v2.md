# Software Management Subscriptions V2

```ts
const softwareManagementSubscriptionsV2Controller = new SoftwareManagementSubscriptionsV2Controller(client);
```

## Class Name

`SoftwareManagementSubscriptionsV2Controller`


# Get Account Subscription Status

This endpoint retrieves a FOTA subscription by account.

```ts
async getAccountSubscriptionStatus(
  account: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FotaV2Subscription>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FotaV2Subscription`](../../doc/models/fota-v2-subscription.md)

## Example Usage

```ts
const account = '0000123456-00001';

try {
  const { result, ...httpResponse } = await softwareManagementSubscriptionsV2Controller.getAccountSubscriptionStatus(account);
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
  "accountName": "00000000000-123345",
  "purchaseType": "TS-HFOTA-EVNT,TS-HFOTA-MRC",
  "licenseCount": 500,
  "licenseUsedCount": 400,
  "updateTime": "2020-09-17T21:11:32.170Z"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |

