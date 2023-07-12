# Billing

```ts
const billingController = new BillingController(client);
```

## Class Name

`BillingController`

## Methods

* [Add Account](../../doc/controllers/billing.md#add-account)
* [Managed Account Action](../../doc/controllers/billing.md#managed-account-action)
* [Cancel Managed Account Action](../../doc/controllers/billing.md#cancel-managed-account-action)
* [List Managed Account](../../doc/controllers/billing.md#list-managed-account)


# Add Account

This endpoint allows user to add managed accounts to a primary account.

```ts
async addAccount(
  body: ManagedAccountsAddRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ManagedAccountsAddResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ManagedAccountsAddRequest`](../../doc/models/managed-accounts-add-request.md) | Body, Required | Service name and list of accounts to add |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ManagedAccountsAddResponse`](../../doc/models/managed-accounts-add-response.md)

## Example Usage

```ts
const body: ManagedAccountsAddRequest = {
  accountName: '1234567890-00001',
  serviceName: ServiceNameEnum.Location,
  type: 'TS-LOC-COARSE-CellID-Aggr',
  managedAccList: [
    '1223334444-00001',
    '2334445555-00001',
    '3445556666-00001'
  ],
};

try {
  const { result, ...httpResponse } = await billingController.addAccount(body);
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
  "txid": "2c90bd28-ece4-42ef-9f02-7e3bd4fbff33",
  "statusList": [
    {
      "id": "1223334444-00001",
      "status": "Success",
      "reason": "Success"
    },
    {
      "id": "2334445555-00001",
      "status": "Success",
      "reason": "Success"
    },
    {
      "id": "3445556666-00001",
      "status": "Success",
      "reason": "Success"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# Managed Account Action

Activates a managed billing service relationship between a managed account and the primary account.

```ts
async managedAccountAction(
  body: ManagedAccountsProvisionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ManagedAccountsProvisionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ManagedAccountsProvisionRequest`](../../doc/models/managed-accounts-provision-request.md) | Body, Required | Service name and list of accounts to add |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ManagedAccountsProvisionResponse`](../../doc/models/managed-accounts-provision-response.md)

## Example Usage

```ts
const body: ManagedAccountsProvisionRequest = {
  accountName: '1223334444-00001',
  paccountName: '1234567890-00001',
  serviceName: ServiceNameEnum.Location,
  type: 'TS-LOC-COARSE-CellID-5K',
  txid: 'd4fbff33-ece4-9f02-42ef-2c90bd287e3b',
};

try {
  const { result, ...httpResponse } = await billingController.managedAccountAction(body);
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
  "txid": "4fbff332-ece4-42ef-9f02-7e3bdc90bd28",
  "accountName": "1223334444-00001",
  "paccountName": "1234567890-00001",
  "serviceName": "Location",
  "status": "Success",
  "reason": "Success"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# Cancel Managed Account Action

Deactivates a managed billing service relationship between a managed account and the primary account.

```ts
async cancelManagedAccountAction(
  body: ManagedAccountCancelRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ManagedAccountCancelResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ManagedAccountCancelRequest`](../../doc/models/managed-account-cancel-request.md) | Body, Required | Service name and list of accounts to add |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ManagedAccountCancelResponse`](../../doc/models/managed-account-cancel-response.md)

## Example Usage

```ts
const body: ManagedAccountCancelRequest = {
  accountName: '1223334444-00001',
  paccountName: '1234567890-00001',
  serviceName: ServiceNameEnum.Location,
  type: 'TS-LOC-COARSE-CellID-5K',
  txid: 'd4fbff33-ece4-9f02-42ef-2c90bd287e3b',
};

try {
  const { result, ...httpResponse } = await billingController.cancelManagedAccountAction(body);
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
  "txid": "4fbff332-ece4-42ef-9f02-7e3bdc90bd28",
  "accountName": "1223334444-00001",
  "paccountName": "1234567890-00001",
  "serviceName": "Location",
  "status": "Success",
  "reason": "Success"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# List Managed Account

This endpoint allows user to retrieve the list of all accounts managed by a primary account.

```ts
async listManagedAccount(
  accountName: string,
  serviceName: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ManagedAccountsGetAllResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Template, Required | Primary account identifier |
| `serviceName` | `string` | Template, Required | Service name |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ManagedAccountsGetAllResponse`](../../doc/models/managed-accounts-get-all-response.md)

## Example Usage

```ts
const accountName = '1223334444-00001';

const serviceName = 'serviceName8';

try {
  const { result, ...httpResponse } = await billingController.listManagedAccount(
    accountName,
    serviceName
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
  "accountName": "2024009649-00001",
  "ManagedAccAddedList": [
    {
      "id": "1223334444-00001",
      "txid": "2c90bd28-ece4-42ef-9f02-7e3bd4fbff33"
    },
    {
      "id": "2334445555-00001",
      "txid": "d4fbff33-ece4-9f02-42ef-2c90bd287e3b"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |

