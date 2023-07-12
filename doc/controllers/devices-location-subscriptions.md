# Devices Location Subscriptions

```ts
const devicesLocationSubscriptionsController = new DevicesLocationSubscriptionsController(client);
```

## Class Name

`DevicesLocationSubscriptionsController`

## Methods

* [Get Location Service Subscription Status](../../doc/controllers/devices-location-subscriptions.md#get-location-service-subscription-status)
* [Get Location Service Usage](../../doc/controllers/devices-location-subscriptions.md#get-location-service-usage)


# Get Location Service Subscription Status

This subscriptions endpoint retrieves an account's current location subscription status.

```ts
async getLocationServiceSubscriptionStatus(
  account: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceLocationSubscription>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier in "##########-#####". |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceLocationSubscription`](../../doc/models/device-location-subscription.md)

## Example Usage

```ts
const account = '0000123456-00001';

try {
  const { result, ...httpResponse } = await devicesLocationSubscriptionsController.getLocationServiceSubscriptionStatus(account);
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
  "accountName": "2024009649-00001",
  "locType": "TS-LOC-COARSE-CellID-5K",
  "maxAllowance": "5000",
  "purchaseTime": "2017-05-10 06:25:25.171 +0000 UTC"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# Get Location Service Usage

This endpoint allows user to search for billable usage for accounts based on the provided date range.

```ts
async getLocationServiceUsage(
  body: BillUsageRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BillUsageRequest`](../../doc/models/bill-usage-request.md) | Body, Required | Request to obtain billable usage for accounts. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: BillUsageRequest = {
  accountName: '1234567890-00001',
  startDate: '04-01-2018',
  endDate: '04-30-2018',
  usageForAllAccounts: true,
};

try {
  const { result, ...httpResponse } = await devicesLocationSubscriptionsController.getLocationServiceUsage(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
{
  "accountName": "1223334444-00001",
  "usageForAllAcounts": false,
  "skuName": "TS-LOC-COARSE-CellID-Aggr",
  "transactionsAllowed": "5000",
  "totalTransactionCount": "350",
  "PrimaryAccount": {
    "accountName": "1223334444-00001",
    "transactionsCount": "125"
  },
  "ManagedAccounts": []
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |

