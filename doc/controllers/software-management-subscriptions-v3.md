# Software Management Subscriptions V3

```ts
const softwareManagementSubscriptionsV3Controller = new SoftwareManagementSubscriptionsV3Controller(client);
```

## Class Name

`SoftwareManagementSubscriptionsV3Controller`


# Get Account Subscription Status

This endpoint retrieves a FOTA subscription by account.

```ts
async getAccountSubscriptionStatus(
  acc: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FotaV3Subscription>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acc` | `string` | Template, Required | Account identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FotaV3Subscription`](../../doc/models/fota-v3-subscription.md)

## Example Usage

```ts
const acc = '0000123456-00001';

try {
  const { result, ...httpResponse } = await softwareManagementSubscriptionsV3Controller.getAccountSubscriptionStatus(acc);
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
  "accountName": "0000123456-000001",
  "purchaseType": "TS-HFOTA-EVNT,TS-HFOTA-MRC",
  "licenseCount": 500,
  "licenseUsedCount": 400,
  "updateTime": "2020-09-17T21:11:32.170Z"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV3ResultError`](../../doc/models/fota-v3-result-error.md) |

