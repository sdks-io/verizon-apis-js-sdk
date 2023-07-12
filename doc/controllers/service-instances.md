# Service Instances

```ts
const serviceInstancesController = new ServiceInstancesController(client);
```

## Class Name

`ServiceInstancesController`

## Methods

* [Retrieve Service Instance](../../doc/controllers/service-instances.md#retrieve-service-instance)
* [List Services Instances](../../doc/controllers/service-instances.md#list-services-instances)


# Retrieve Service Instance

Retrieve information of a service instance.

```ts
async retrieveServiceInstance(
  serviceInstanceId: string,
  accountName: string,
  cluster?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceInstancesResultSetItem>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceInstanceId` | `string` | Template, Required | Unique Id of the service instance.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `cluster` | `boolean \| undefined` | Query, Optional | **Default**: `false` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceInstancesResultSetItem`](../../doc/models/service-instances-result-set-item.md)

## Example Usage

```ts
const serviceInstanceId = 'e0abe65f-b294-4673-a60c-d31f26ca7a8c';

const accountName = 'test_account1';

const cluster = false;

try {
  const { result, ...httpResponse } = await serviceInstancesController.retrieveServiceInstance(
    serviceInstanceId,
    accountName,
    cluster
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
| 400 | Bad Request. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 403 | Forbidden. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 404 | Not found. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 415 | Unsupported media type. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 429 | Too many requests. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| Default | Unexpected error. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |


# List Services Instances

Retrieve all instances for all services.

```ts
async listServicesInstances(
  accountName: string,
  offset?: string,
  state?: string,
  limit?: string,
  searchbyname?: string,
  listofstate?: string[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceInstancesResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `offset` | `string \| undefined` | Query, Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `state` | `string \| undefined` | Query, Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `limit` | `string \| undefined` | Query, Optional | **Constraints**: *Maximum Length*: `64` |
| `searchbyname` | `string \| undefined` | Query, Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `listofstate` | `string[] \| undefined` | Query, Optional | **Constraints**: *Maximum Items*: `100`, *Maximum Length*: `128`, *Pattern*: `^(.*)$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceInstancesResult`](../../doc/models/service-instances-result.md)

## Example Usage

```ts
const accountName = 'test_account1';

const state = 'NOT_READY';

const searchbyname = 'PQAService-Demo-08182022';

try {
  const { result, ...httpResponse } = await serviceInstancesController.listServicesInstances(
    accountName,
    state,
    searchbyname
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
| 400 | Bad Request. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 403 | Forbidden. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 404 | Not found. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 415 | Unsupported media type. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 429 | Too many requests. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| Default | Unexpected error. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |

