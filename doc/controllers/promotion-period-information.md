# Promotion Period Information

```ts
const promotionPeriodInformationController = new PromotionPeriodInformationController(client);
```

## Class Name

`PromotionPeriodInformationController`

## Methods

* [Get Promo Device Usage History](../../doc/controllers/promotion-period-information.md#get-promo-device-usage-history)
* [Get Promo Device Aggregate Usage History](../../doc/controllers/promotion-period-information.md#get-promo-device-aggregate-usage-history)


# Get Promo Device Usage History

Retrieves the usage history of a device during the promotion period.

```ts
async getPromoDeviceUsageHistory(  body: ARequestBodyForUsage,
requestOptions?: RequestOptions): Promise<ApiResponse<ResponseToUsageQuery>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ARequestBodyForUsage`](../../doc/models/a-request-body-for-usage.md) | Body, Required | Retrieve Aggregate Usage |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseToUsageQuery`](../../doc/models/response-to-usage-query.md)

## Example Usage

```ts
const body: ARequestBodyForUsage = {
  startTime: '08/15/2021 00:00:00',
  endTime: '08/16/2021 00:00:00',
};

try {
  const { result, ...httpResponse } = await promotionPeriodInformationController.getPromoDeviceUsageHistory(body);
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
  "hasmoredata": false,
  "deviceId": {
    "kind": "iccid",
    "id": "20-digit iccid"
  },
  "usageHistory": [
    {
      "bytesUsed": 3072,
      "serviceplan": "The serviceplan name",
      "smsUsed": 0,
      "moSMS": 0,
      "mtSMS": 0,
      "source": "Raw Usage",
      "eventDateTime": "2021-08-15T00:00:00Z"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | All error responses will be in this format | [`ReadySimRestErrorResponseError`](../../doc/models/ready-sim-rest-error-response-error.md) |


# Get Promo Device Aggregate Usage History

Retrieves the aggregate usage for an account using pseudo-MDN during the promotional period using a callback.

```ts
async getPromoDeviceAggregateUsageHistory(  body: RequestBodyForUsage,
requestOptions?: RequestOptions): Promise<ApiResponse<UsageRequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RequestBodyForUsage`](../../doc/models/request-body-for-usage.md) | Body, Required | Retrieve Aggregate Usage |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UsageRequestResponse`](../../doc/models/usage-request-response.md)

## Example Usage

```ts
const body: RequestBodyForUsage = {
  accountId: '0000123456-000001',
  startTime: '08/15/2021 00:00:00',
  endTime: '08/16/2021 00:00:00',
};

try {
  const { result, ...httpResponse } = await promotionPeriodInformationController.getPromoDeviceAggregateUsageHistory(body);
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
  "requestId": "be1b5958-3e11-41db-9abd-b1b7618c0035"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error response | [`ReadySimRestErrorResponseError`](../../doc/models/ready-sim-rest-error-response-error.md) |

