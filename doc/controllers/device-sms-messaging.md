# Device SMS Messaging

```ts
const deviceSMSMessagingController = new DeviceSMSMessagingController(client);
```

## Class Name

`DeviceSMSMessagingController`

## Methods

* [Send an Sms Message](../../doc/controllers/device-sms-messaging.md#send-an-sms-message)
* [Get Sms Messages](../../doc/controllers/device-sms-messaging.md#get-sms-messages)
* [Start Sms Message Delivery](../../doc/controllers/device-sms-messaging.md#start-sms-message-delivery)
* [List Sms Message History](../../doc/controllers/device-sms-messaging.md#list-sms-message-history)


# Send an Sms Message

Sends an SMS message to one device. Messages are queued on the M2M MC Platform and sent as soon as possible, but they may be delayed due to traffic and routing considerations.

```ts
async sendAnSmsMessage(
  body: GIOSMSSendRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GIORequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GIOSMSSendRequest`](../../doc/models/giosms-send-request.md) | Body, Required | SMS message to an indiividual device. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GIORequestResponse`](../../doc/models/gio-request-response.md)

## Example Usage

```ts
const body: GIOSMSSendRequest = {
  deviceIds: [
    {
      kind: 'eid',
      id: '12345678901234567890123456789012',
    }
  ],
  smsMessage: 'A text message',
};

try {
  const { result, ...httpResponse } = await deviceSMSMessagingController.sendAnSmsMessage(body);
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
| Default | Error response | [`GIORestErrorResponseError`](../../doc/models/gio-rest-error-response-error.md) |


# Get Sms Messages

Retrieves queued SMS messages sent by all M2M MC devices associated with an account.

```ts
async getSmsMessages(
  accountName: string,
  next?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SmsMessagesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Template, Required | Numeric account name |
| `next` | `string \| undefined` | Query, Optional | Continue the previous query from the pageUrl in Location Header |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SmsMessagesResponse`](../../doc/models/sms-messages-response.md)

## Example Usage

```ts
const accountName = '0000123456-00001';

const next = 'TheURLForTheNextQuery';

try {
  const { result, ...httpResponse } = await deviceSMSMessagingController.getSmsMessages(
  accountName,
  next
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
| Default | Error response | [`GIORestErrorResponseError`](../../doc/models/gio-rest-error-response-error.md) |


# Start Sms Message Delivery

Starts delivery of SMS messages for the specified account.

```ts
async startSmsMessageDelivery(
  accountName: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SuccessResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Template, Required | Numeric account name |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SuccessResponse`](../../doc/models/success-response.md)

## Example Usage

```ts
const accountName = '0000123456-00001';

try {
  const { result, ...httpResponse } = await deviceSMSMessagingController.startSmsMessageDelivery(accountName);
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
| Default | Error response | [`GIORestErrorResponseError`](../../doc/models/gio-rest-error-response-error.md) |


# List Sms Message History

Returns a list of sms history for a given device during a specified time frame.

```ts
async listSmsMessageHistory(
  body: SMSEventHistoryRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GIORequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SMSEventHistoryRequest`](../../doc/models/sms-event-history-request.md) | Body, Required | Device Query |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GIORequestResponse`](../../doc/models/gio-request-response.md)

## Example Usage

```ts
const body: SMSEventHistoryRequest = {
  deviceId: {
    kind: 'eid',
    id: '12345678901234567890123456789012',
  },
};

try {
  const { result, ...httpResponse } = await deviceSMSMessagingController.listSmsMessageHistory(body);
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
| Default | Error response | [`GIORestErrorResponseError`](../../doc/models/gio-rest-error-response-error.md) |

