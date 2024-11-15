# Exclusions

Excluding or including devices (by consent) for location service

```ts
const exclusionsController = new ExclusionsController(client);
```

## Class Name

`ExclusionsController`


# Devices Location Give Consent Async

Create a consent record to use location services as an asynchronous request.

```ts
async devicesLocationGiveConsentAsync(  body?: AccountConsentCreate,
requestOptions?: RequestOptions): Promise<ApiResponse<ConsentTransactionID>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AccountConsentCreate \| undefined`](../../doc/models/account-consent-create.md) | Body, Optional | Account details to create a consent record. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConsentTransactionID`](../../doc/models/consent-transaction-id.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await exclusionsController.devicesLocationGiveConsentAsync();
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
| Default | Unexpected error. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |

