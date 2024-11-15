# Retrievethe Triggers

```ts
const retrievetheTriggersController = new RetrievetheTriggersController(client);
```

## Class Name

`RetrievetheTriggersController`

## Methods

* [Get All Available Triggers](../../doc/controllers/retrievethe-triggers.md#get-all-available-triggers)
* [Get All Triggers by Account Name](../../doc/controllers/retrievethe-triggers.md#get-all-triggers-by-account-name)
* [Get All Triggers by Trigger Category](../../doc/controllers/retrievethe-triggers.md#get-all-triggers-by-trigger-category)
* [Get Triggers by Id](../../doc/controllers/retrievethe-triggers.md#get-triggers-by-id)


# Get All Available Triggers

Retrieves all of the available triggers for pseudo-MDN.

```ts
async getAllAvailableTriggers(requestOptions?: RequestOptions): Promise<ApiResponse<TriggerValueResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TriggerValueResponse`](../../doc/models/trigger-value-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await retrieveTheTriggersController.getAllAvailableTriggers();
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
| Default | Error response | [`ReadySimRestErrorResponseError`](../../doc/models/ready-sim-rest-error-response-error.md) |


# Get All Triggers by Account Name

Retrieve the triggers associated with an account name.

```ts
async getAllTriggersByAccountName(  accountName: string,
requestOptions?: RequestOptions): Promise<ApiResponse<TriggerValueResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Template, Required | The account name |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TriggerValueResponse`](../../doc/models/trigger-value-response.md)

## Example Usage

```ts
const accountName = '0000123456-000001';

try {
  const { result, ...httpResponse } = await retrieveTheTriggersController.getAllTriggersByAccountName(accountName);
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
| Default | Error response | [`ReadySimRestErrorResponseError`](../../doc/models/ready-sim-rest-error-response-error.md) |


# Get All Triggers by Trigger Category

Retrieves all of the triggers for the specified account associated with the PromoAlert category

```ts
async getAllTriggersByTriggerCategory(requestOptions?: RequestOptions): Promise<ApiResponse<TriggerValueResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TriggerValueResponse2`](../../doc/models/trigger-value-response-2.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await retrieveTheTriggersController.getAllTriggersByTriggerCategory();
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
| Default | Error response | [`ReadySimRestErrorResponseError`](../../doc/models/ready-sim-rest-error-response-error.md) |


# Get Triggers by Id

Retrives a specific trigger by its ID.

```ts
async getTriggersById(  triggerId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<TriggerValueResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string` | Template, Required | The ID of a specific trigger |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TriggerValueResponse2`](../../doc/models/trigger-value-response-2.md)

## Example Usage

```ts
const triggerId = '2874DEC7-26CF-4797-9C6A-B5A2AC72D526';

try {
  const { result, ...httpResponse } = await retrieveTheTriggersController.getTriggersById(triggerId);
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
| Default | Error response | [`ReadySimRestErrorResponseError`](../../doc/models/ready-sim-rest-error-response-error.md) |

