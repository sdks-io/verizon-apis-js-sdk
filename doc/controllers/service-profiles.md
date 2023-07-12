# Service Profiles

```ts
const serviceProfilesController = new ServiceProfilesController(client);
```

## Class Name

`ServiceProfilesController`

## Methods

* [Create Service Profile](../../doc/controllers/service-profiles.md#create-service-profile)
* [List Service Profiles](../../doc/controllers/service-profiles.md#list-service-profiles)
* [Get Service Profile](../../doc/controllers/service-profiles.md#get-service-profile)
* [Update Service Profile](../../doc/controllers/service-profiles.md#update-service-profile)
* [Delete Service Profile](../../doc/controllers/service-profiles.md#delete-service-profile)


# Create Service Profile

Creates a service profile that describes the resource requirements of a service.

```ts
async createServiceProfile(
  body: ResourcesServiceProfile,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateServiceProfileResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ResourcesServiceProfile`](../../doc/models/resources-service-profile.md) | Body, Required | The request body passes all of the needed parameters to create a service profile. Parameters will be edited here rather than the **Parameters** section above. The `maxLatencyMs` and `clientType` parameters are both required in the request body. **Note:** The `maxLatencyMs` value must be submitted in multiples of 5. Additionally, "GPU" is future functionality and the values are not captured. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

`Edgediscoveryread`, `Edgeserviceprofileread`, `Edgeserviceprofilewrite`, `Edgeserviceregistryread`, `Edgeserviceregistrywrite`, `TsApplicationRo`, `TsMecFullaccess`, `TsMecLimitaccess`

## Response Type

[`CreateServiceProfileResult`](../../doc/models/create-service-profile-result.md)

## Example Usage

```ts
const body: ResourcesServiceProfile = {
  clientType: ClientTypeEnum.V2X,
  ecspFilter: 'Verizon',
  clientSchedule: 'time windows',
  clientServiceArea: 'BAY AREA',
  networkResources: {
    maxLatencyMs: 20,
    minBandwidthKbits: 1,
    serviceContinuitySupport: true,
    maxRequestRate: 15,
    minAvailability: 1,
  },
  computeResources: {
    gPU: {
      minCoreClockMHz: 1,
      minMemoryClockMHz: 35740,
      minBandwidthGBs: 588,
      minTFLOPS: 33,
    },
    minRAMGB: 1,
    minStorageGB: 1,
  },
};

try {
  const { result, ...httpResponse } = await serviceProfilesController.createServiceProfile(body);
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
| 400 | HTTP 400 Bad Request. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| 401 | HTTP 401 Unauthorized. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| Default | HTTP 500 Internal Server Error. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |


# List Service Profiles

List all service profiles registered under your API key.

```ts
async listServiceProfiles(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListServiceProfilesResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

`Edgediscoveryread`, `Edgeserviceprofileread`, `Edgeserviceprofilewrite`, `Edgeserviceregistryread`, `Edgeserviceregistrywrite`, `TsApplicationRo`, `TsMecFullaccess`, `TsMecLimitaccess`

## Response Type

[`ListServiceProfilesResult`](../../doc/models/list-service-profiles-result.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await serviceProfilesController.listServiceProfiles();
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
  "status": "Success",
  "data": [
    "serviceProfileId"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | HTTP 400 Bad Request. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| 401 | HTTP 401 Unauthorized. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| Default | HTTP 500 Internal Server Error. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |


# Get Service Profile

Returns a specified service profile.

```ts
async getServiceProfile(
  serviceProfileId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResourcesServiceProfileWithId>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceProfileId` | `string` | Template, Required | **Constraints**: *Maximum Length*: `36`, *Pattern*: `^[a-zA-Z0-9!@#$&()\-`.+,/"]{3,36}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

`Edgediscoveryread`, `Edgeserviceprofileread`, `Edgeserviceprofilewrite`, `Edgeserviceregistryread`, `Edgeserviceregistrywrite`, `TsApplicationRo`, `TsMecFullaccess`, `TsMecLimitaccess`

## Response Type

[`ResourcesServiceProfileWithId`](../../doc/models/resources-service-profile-with-id.md)

## Example Usage

```ts
const serviceProfileId = 'serviceProfileId2';

try {
  const { result, ...httpResponse } = await serviceProfilesController.getServiceProfile(serviceProfileId);
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
  "serviceProfileId": "4054ea9a-593e-4776-b488-697b1bfa4f3b",
  "ecspFilter": "Verizon",
  "clientSchedule": "time windows",
  "clientServiceArea": "BAY AREA",
  "clientType": "V2X",
  "networkResources": {
    "minBandwidthKbits": 1,
    "serviceContinuitySupport": true,
    "maxRequestRate": 15,
    "maxLatencyMs": 20,
    "minAvailability": 1
  },
  "computeResources": {
    "GPU": {
      "minCoreClockMHz": 1,
      "minMemoryClockMHz": 35740,
      "minBandwidthGBs": 588,
      "minTFLOPS": 33
    },
    "minRAMGB": 1,
    "minStorageGB": 1
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | HTTP 400 Bad Request. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| 401 | HTTP 401 Unauthorized. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| Default | HTTP 500 Internal Server Error. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |


# Update Service Profile

Update the definition of a Service Profile.

```ts
async updateServiceProfile(
  serviceProfileId: string,
  body: ResourcesServiceProfile,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateServiceProfileResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceProfileId` | `string` | Template, Required | **Constraints**: *Maximum Length*: `36`, *Pattern*: `^[a-zA-Z0-9!@#$&()\-`.+,/"]{3,36}$` |
| `body` | [`ResourcesServiceProfile`](../../doc/models/resources-service-profile.md) | Body, Required | The request body passes the rest of the needed parameters to create a service profile. The `maxLatencyMs` and `clientType` parameters are both required in the request body. **Note:** The `maxLatencyMs` value must be submitted in multiples of 5. Additionally, "GPU" is future functionality and the values are not captured. Default values to use are shown. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

`Edgediscoveryread`, `Edgeserviceprofileread`, `Edgeserviceprofilewrite`, `Edgeserviceregistryread`, `Edgeserviceregistrywrite`, `TsApplicationRo`, `TsMecFullaccess`, `TsMecLimitaccess`

## Response Type

[`UpdateServiceProfileResult`](../../doc/models/update-service-profile-result.md)

## Example Usage

```ts
const serviceProfileId = 'serviceProfileId2';

const body: ResourcesServiceProfile = {
  clientType: ClientTypeEnum.V2X,
  ecspFilter: 'Verizon',
  clientSchedule: 'time windows',
  clientServiceArea: 'BAY AREA',
  networkResources: {
    maxLatencyMs: 20,
    minBandwidthKbits: 1,
    serviceContinuitySupport: true,
    maxRequestRate: 15,
    minAvailability: 1,
  },
  computeResources: {
    gPU: {
      minCoreClockMHz: 1,
    },
    minRAMGB: 1,
    minStorageGB: 1,
  },
};

try {
  const { result, ...httpResponse } = await serviceProfilesController.updateServiceProfile(
    serviceProfileId,
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
  "status": "Success",
  "message": "Service Profile Updated"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | HTTP 400 Bad Request. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| 401 | HTTP 401 Unauthorized. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| Default | HTTP 500 Internal Server Error. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |


# Delete Service Profile

Delete Service Profile based on unique service profile ID.

```ts
async deleteServiceProfile(
  serviceProfileId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteServiceProfileResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceProfileId` | `string` | Template, Required | **Constraints**: *Maximum Length*: `36`, *Pattern*: `^[a-zA-Z0-9!@#$&()\-`.+,/"]{3,36}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

`Edgediscoveryread`, `Edgeserviceprofileread`, `Edgeserviceprofilewrite`, `Edgeserviceregistryread`, `Edgeserviceregistrywrite`, `TsApplicationRo`, `TsMecFullaccess`, `TsMecLimitaccess`

## Response Type

[`DeleteServiceProfileResult`](../../doc/models/delete-service-profile-result.md)

## Example Usage

```ts
const serviceProfileId = 'serviceProfileId2';

try {
  const { result, ...httpResponse } = await serviceProfilesController.deleteServiceProfile(serviceProfileId);
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
  "status": "Success",
  "message": "Service Profile Deleted"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | HTTP 400 Bad Request. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| 401 | HTTP 401 Unauthorized. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| Default | HTTP 500 Internal Server Error. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |

