# Usage Trigger Management

```ts
const usageTriggerManagementController = new UsageTriggerManagementController(client);
```

## Class Name

`UsageTriggerManagementController`

## Methods

* [Create New Trigger](../../doc/controllers/usage-trigger-management.md#create-new-trigger)
* [Update Trigger](../../doc/controllers/usage-trigger-management.md#update-trigger)
* [Delete Trigger](../../doc/controllers/usage-trigger-management.md#delete-trigger)


# Create New Trigger

Create a new usage trigger, which will send an alert when the number of device location service transactions reaches a specified percentage of the monthly subscription amount.

```ts
async createNewTrigger(
  body?: UsageTriggerAddRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UsageTriggerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UsageTriggerAddRequest \| undefined`](../../doc/models/usage-trigger-add-request.md) | Body, Optional | License assignment. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UsageTriggerResponse`](../../doc/models/usage-trigger-response.md)

## Example Usage

```ts
const body: UsageTriggerAddRequest = {
  accountName: '0212312345-00001',
  serviceName: ServiceNameEnum.Location,
  thresholdValue: '95',
  triggerName: '95% usage alert',
  allowExcess: true,
  sendSmsNotification: true,
  smsPhoneNumbers: '5551231234',
  sendEmailNotification: true,
  emailAddresses: 'you@theinternet.com',
};

try {
  const { result, ...httpResponse } = await usageTriggerManagementController.createNewTrigger(
    body
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

## Example Response *(as JSON)*

```json
{
  "triggerId": "595f5c44-c31c-4552-8670-020a1545a84d",
  "triggerName": "90 percent",
  "accountName": "1000012345-00001",
  "serviceName": "Location",
  "thresholdValue": "90",
  "allowExcess": true,
  "sendSmsNotification": true,
  "smsPhoneNumbers": "5558794321",
  "sendEmailNotification": false,
  "emailAddresses": "",
  "createDate": "2018-08-11",
  "updateDate": "2018-08-12"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# Update Trigger

Update an existing usage trigger

```ts
async updateTrigger(
  triggerId: string,
  body?: UsageTriggerUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UsageTriggerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string` | Template, Required | Usage trigger ID |
| `body` | [`UsageTriggerUpdateRequest \| undefined`](../../doc/models/usage-trigger-update-request.md) | Body, Optional | New trigger values |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UsageTriggerResponse`](../../doc/models/usage-trigger-response.md)

## Example Usage

```ts
const triggerId = '595f5c44-c31c-4552-8670-020a1545a84d';

const body: UsageTriggerUpdateRequest = {
  accountName: '1000012345-00001',
  thresholdValue: '95',
};

try {
  const { result, ...httpResponse } = await usageTriggerManagementController.updateTrigger(
    triggerId,
    body
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

## Example Response *(as JSON)*

```json
{
  "triggerId": "595f5c44-c31c-4552-8670-020a1545a84d",
  "triggerName": "90 percent",
  "accountName": "1000012345-00001",
  "serviceName": "Location",
  "thresholdValue": "90",
  "allowExcess": true,
  "sendSmsNotification": true,
  "smsPhoneNumbers": "5558794321",
  "sendEmailNotification": false,
  "emailAddresses": "",
  "createDate": "2018-08-11",
  "updateDate": "2018-08-12"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# Delete Trigger

eletes the specified usage trigger from the given account

```ts
async deleteTrigger(
  accountName: string,
  triggerId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceLocationSuccessResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Template, Required | Account name |
| `triggerId` | `string` | Template, Required | Usage trigger ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceLocationSuccessResult`](../../doc/models/device-location-success-result.md)

## Example Usage

```ts
const accountName = '0212312345-00001';

const triggerId = '595f5c44-c31c-4552-8670-020a1545a84d';

try {
  const { result, ...httpResponse } = await usageTriggerManagementController.deleteTrigger(
    accountName,
    triggerId
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

## Example Response *(as JSON)*

```json
{
  "success": true
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |

