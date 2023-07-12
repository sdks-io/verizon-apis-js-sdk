# MEC Sites

```ts
const mECSitesController = new MECSitesController(client);
```

## Class Name

`MECSitesController`

## Methods

* [List MEC Site Locations](../../doc/controllers/mec-sites.md#list-mec-site-locations)
* [List ERN Cluster Namespaces](../../doc/controllers/mec-sites.md#list-ern-cluster-namespaces)


# List MEC Site Locations

Supports fetching MEC locations so the user can view the city.

```ts
async listMECSiteLocations(
  accountName?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MECSiteLocationsResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Header, Optional | User account name.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[A-Za-z0-9]` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MECSiteLocationsResult`](../../doc/models/mec-site-locations-result.md)

## Example Usage

```ts
const accountName = 'test_account1';

try {
  const { result, ...httpResponse } = await mECSitesController.listMECSiteLocations(
    accountName
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
| 400 | Error Response. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |


# List ERN Cluster Namespaces

Retrieve all clusters for the customer.

```ts
async listERNClusterNamespaces(
  userId: string,
  role: string,
  customerId: string,
  requestId: string,
  eRN?: string,
  name?: string,
  offset?: string,
  limit?: string,
  correlationId?: string,
  clusterState?: ClusterStateEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ClustersNamespaces>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `role` | `string` | Header, Required | **Constraints**: *Maximum Length*: `500` |
| `customerId` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `requestId` | `string` | Header, Required | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `eRN` | `string \| undefined` | Query, Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `name` | `string \| undefined` | Query, Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `offset` | `string \| undefined` | Query, Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `limit` | `string \| undefined` | Query, Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `clusterState` | [`ClusterStateEnum \| undefined`](../../doc/models/cluster-state-enum.md) | Query, Optional | **Constraints**: *Maximum Length*: `32` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ClustersNamespaces`](../../doc/models/clusters-namespaces.md)

## Example Usage

```ts
const userId = 'userId0';

const role = 'role6';

const customerId = 'customerId6';

const requestId = 'requestId2';

try {
  const { result, ...httpResponse } = await mECSitesController.listERNClusterNamespaces(
    userId,
    role,
    customerId,
    requestId
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
| 404 | Not found. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| Default | Unexpected error. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |

