# Service Launch Requests

```ts
const serviceLaunchRequestsController = new ServiceLaunchRequestsController(client);
```

## Class Name

`ServiceLaunchRequestsController`

## Methods

* [Create Service Launch Request](../../doc/controllers/service-launch-requests.md#create-service-launch-request)
* [Get Service Launch Request](../../doc/controllers/service-launch-requests.md#get-service-launch-request)
* [Submit Service Launch Request](../../doc/controllers/service-launch-requests.md#submit-service-launch-request)


# Create Service Launch Request

Create a request for launching a service.

```ts
async createServiceLaunchRequest(
  accountName: string,
  userName: string,
  correlationId?: string,
  body?: CreateServiceLaunchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceLaunchRequestResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `userName` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `body` | [`CreateServiceLaunchRequest \| undefined`](../../doc/models/create-service-launch-request.md) | Body, Optional | Request for launching a service. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceLaunchRequestResult`](../../doc/models/service-launch-request-result.md)

## Example Usage

```ts
const accountName = 'test_account1';

const userName = 'acme-user';

const correlationId = 'eda2cb4e-50ef-4ae8-b304-7d2f0f7a21c1';

const body: CreateServiceLaunchRequest = {
  name: 'MdpTest3',
  cspProfileId: '6789409c-12c3-4fc9-b64f-71d1611c4f09',
  serviceProfileId: '6789409c-12c3-4fc9-b64f-71d1611c4f09',
  serviceName: 'mongodbdemo0710',
  serviceVersion: '2.5.6',
};

try {
  const { result, ...httpResponse } = await serviceLaunchRequestsController.createServiceLaunchRequest(
    accountName,
    userName,
    correlationId,
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | HTTP 400 Bad Request. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 401 | HTTP 401 Unauthorized. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 404 | HTTP 404 Not found. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| Default | HTTP 500 Internal Server Error. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |


# Get Service Launch Request

Get information related to a service launch request.

```ts
async getServiceLaunchRequest(
  accountName: string,
  userName: string,
  id?: string | null,
  correlationId?: string,
  name?: string,
  offset?: bigint,
  limit?: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceLaunchRequestsResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `userName` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `id` | `string \| undefined` | Query, Optional | Service launch request Id. |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `name` | `string \| undefined` | Query, Optional | Service request name.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `offset` | `bigint \| undefined` | Query, Optional | **Constraints**: `>= 0`, `<= 1024` |
| `limit` | `bigint \| undefined` | Query, Optional | **Constraints**: `>= 0`, `<= 1024` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceLaunchRequestsResult`](../../doc/models/service-launch-requests-result.md)

## Example Usage

```ts
const accountName = 'test_account1';

const userName = 'acme-user';

const id = 'eda2cb4e-50ef-4ae8-b304-7d2f0f7a21c1';

const correlationId = 'eda2cb4e-50ef-4ae8-b304-7d2f0f7a21c1';

const name = 'MdpTest3';

const offset = BigInt(15);

const limit = BigInt(16);

try {
  const { result, ...httpResponse } = await serviceLaunchRequestsController.getServiceLaunchRequest(
    accountName,
    userName,
    id,
    correlationId,
    name,
    offset,
    limit
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


# Submit Service Launch Request

This endpoint allows the user to submit a service request that describes the resource requirements of a service. This API submit an object of the service request and moves it to STATE from “DRAFT”  to “INSTANTIATED” and triggers the launch flow.

```ts
async submitServiceLaunchRequest(
  id: string,
  accountName: string,
  userName: string,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceLaunchRequestResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | A unique Id assigned to the request by system calling API. |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[A-Za-z0-9]` |
| `userName` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[A-Za-z0-9]` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceLaunchRequestResult`](../../doc/models/service-launch-request-result.md)

## Example Usage

```ts
const id = 'eda2cb4e-50ef-4ae8-b304-7d2f0f7a21c1';

const accountName = 'test_account1';

const userName = 'acme-user';

const correlationId = 'eda2cb4e-50ef-4ae8-b304-7d2f0f7a21c1';

try {
  const { result, ...httpResponse } = await serviceLaunchRequestsController.submitServiceLaunchRequest(
    id,
    accountName,
    userName,
    correlationId
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
| 400 | HTTP 400 Bad Request. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 401 | HTTP 401 Unauthorized. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 412 | Precondition Failed. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| Default | HTTP 500 Internal Server Error. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |

