# Service Instance Operations

```ts
const serviceInstanceOperationsController = new ServiceInstanceOperationsController(client);
```

## Class Name

`ServiceInstanceOperationsController`

## Methods

* [Service Resume](../../doc/controllers/service-instance-operations.md#service-resume)
* [Service Suspend](../../doc/controllers/service-instance-operations.md#service-suspend)
* [Service Remove](../../doc/controllers/service-instance-operations.md#service-remove)
* [Service Upgrade](../../doc/controllers/service-instance-operations.md#service-upgrade)


# Service Resume

Resumes a suspended Service Instance

```ts
async serviceResume(
  serviceInstanceId: string,
  userId: string,
  requestId: string,
  userRole: UserRoleEnum,
  customerId: string,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceResumeResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceInstanceId` | `string` | Template, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `userId` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `requestId` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `userRole` | [`UserRoleEnum`](../../doc/models/user-role-enum.md) | Header, Required | **Constraints**: *Maximum Length*: `500` |
| `customerId` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceResumeResult`](../../doc/models/service-resume-result.md)

## Example Usage

```ts
const serviceInstanceId = 'serviceInstanceId2';

const userId = 'userId0';

const requestId = 'requestId2';

const userRole = UserRoleEnum.ORGADMIN;

const customerId = 'customerId6';

try {
  const { result, ...httpResponse } = await serviceInstanceOperationsController.serviceResume(
    serviceInstanceId,
    userId,
    requestId,
    userRole,
    customerId
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


# Service Suspend

Suspend a service Instance

```ts
async serviceSuspend(
  serviceInstanceId: string,
  userId: string,
  requestId: string,
  userRole: UserRoleEnum,
  customerId: string,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceResumeResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceInstanceId` | `string` | Template, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `userId` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `requestId` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `userRole` | [`UserRoleEnum`](../../doc/models/user-role-enum.md) | Header, Required | **Constraints**: *Maximum Length*: `500` |
| `customerId` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceResumeResult`](../../doc/models/service-resume-result.md)

## Example Usage

```ts
const serviceInstanceId = 'serviceInstanceId2';

const userId = 'userId0';

const requestId = 'requestId2';

const userRole = UserRoleEnum.ORGADMIN;

const customerId = 'customerId6';

try {
  const { result, ...httpResponse } = await serviceInstanceOperationsController.serviceSuspend(
    serviceInstanceId,
    userId,
    requestId,
    userRole,
    customerId
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


# Service Remove

remove a service Instance

```ts
async serviceRemove(
  serviceInstanceId: string,
  userId: string,
  requestId: string,
  userRole: UserRoleEnum,
  customerId: string,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceResumeResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceInstanceId` | `string` | Template, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `userId` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `requestId` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `userRole` | [`UserRoleEnum`](../../doc/models/user-role-enum.md) | Header, Required | **Constraints**: *Maximum Length*: `500` |
| `customerId` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceResumeResult`](../../doc/models/service-resume-result.md)

## Example Usage

```ts
const serviceInstanceId = 'serviceInstanceId2';

const userId = 'userId0';

const requestId = 'requestId2';

const userRole = UserRoleEnum.ORGADMIN;

const customerId = 'customerId6';

try {
  const { result, ...httpResponse } = await serviceInstanceOperationsController.serviceRemove(
    serviceInstanceId,
    userId,
    requestId,
    userRole,
    customerId
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


# Service Upgrade

upgrade a service Instance

```ts
async serviceUpgrade(
  serviceInstanceId: string,
  userId: string,
  requestId: string,
  userRole: UserRoleEnum,
  customerId: string,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceResumeResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceInstanceId` | `string` | Template, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `userId` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `requestId` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `userRole` | [`UserRoleEnum`](../../doc/models/user-role-enum.md) | Header, Required | **Constraints**: *Maximum Length*: `500` |
| `customerId` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceResumeResult`](../../doc/models/service-resume-result.md)

## Example Usage

```ts
const serviceInstanceId = 'serviceInstanceId2';

const userId = 'userId0';

const requestId = 'requestId2';

const userRole = UserRoleEnum.ORGADMIN;

const customerId = 'customerId6';

try {
  const { result, ...httpResponse } = await serviceInstanceOperationsController.serviceUpgrade(
    serviceInstanceId,
    userId,
    requestId,
    userRole,
    customerId
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

