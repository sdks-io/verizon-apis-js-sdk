# Update Triggers

```ts
const updateTriggersController = new UpdateTriggersController(client);
```

## Class Name

`UpdateTriggersController`


# Update All Available Triggers

Updates the promotional triggers for pseudo-MDN.

```ts
async updateAllAvailableTriggers(  body?: RequestTrigger,
requestOptions?: RequestOptions): Promise<ApiResponse<Success>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RequestTrigger \| undefined`](../../doc/models/request-trigger.md) | Body, Optional | Update the triggers |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Success`](../../doc/models/success.md)

## Example Usage

```ts
const body: RequestTrigger = {
  triggerId: '2874DEC7-26CF-4797-9C6A-B5A2AC72D526',
  triggerName: 'PromoAlerts_0000000000-00001_23456789',
  accountName: '0000123456-000001',
  organizationName: 'Optional group name',
  triggerCategory: 'PromoAlerts',
};

try {
  const { result, ...httpResponse } = await updateTriggersController.updateAllAvailableTriggers(body);
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
  "status": "Success"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error response | [`ReadySimRestErrorResponseError`](../../doc/models/ready-sim-rest-error-response-error.md) |

