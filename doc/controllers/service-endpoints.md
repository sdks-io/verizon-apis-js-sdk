# Service Endpoints

```ts
const serviceEndpointsController = new ServiceEndpointsController(client);
```

## Class Name

`ServiceEndpointsController`

## Methods

* [List Optimal Service Endpoints](../../doc/controllers/service-endpoints.md#list-optimal-service-endpoints)
* [Register Service Endpoints](../../doc/controllers/service-endpoints.md#register-service-endpoints)
* [List All Service Endpoints](../../doc/controllers/service-endpoints.md#list-all-service-endpoints)
* [Get Service Endpoint](../../doc/controllers/service-endpoints.md#get-service-endpoint)
* [Update Service Endpoint](../../doc/controllers/service-endpoints.md#update-service-endpoint)
* [Deregister Service Endpoint](../../doc/controllers/service-endpoints.md#deregister-service-endpoint)


# List Optimal Service Endpoints

Returns a list of optimal Service Endpoints that client devices can connect to. **Note:** If a query is sent with all of the parameters, it will fail with a "400" error. You can search based on the following parameter combinations - Region plus Service Endpoints IDs and Subscriber density (density is optional but recommended), Region plus Service Endpoints IDs and UEIdentity(Including UEIdentity Type) and Service Endpoints IDs plus UEIdentity(Including UEIdentity Type).

```ts
async listOptimalServiceEndpoints(
  region?: string,
  subscriberDensity?: number,
  uEIdentityType?: UserEquipmentIdentityTypeEnum,
  uEIdentity?: string,
  serviceEndpointsIds?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListOptimalServiceEndpointsResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `region` | `string \| undefined` | Query, Optional | MEC region name. Current valid values are US_WEST_2 and US_EAST_1. |
| `subscriberDensity` | `number \| undefined` | Query, Optional | Minimum number of 4G/5G subscribers per square kilometer.<br>**Constraints**: `>= 1`, `<= 100` |
| `uEIdentityType` | [`UserEquipmentIdentityTypeEnum \| undefined`](../../doc/models/user-equipment-identity-type-enum.md) | Query, Optional | Type of User Equipment identifier used in `UEIdentity`. |
| `uEIdentity` | `string \| undefined` | Query, Optional | The identifier value for User Equipment. The type of identifier is defined by the 'UEIdentityType' parameter. The`IPAddress`format can be IPv4 or IPv6. |
| `serviceEndpointsIds` | `string \| undefined` | Query, Optional | A system-defined string identifier representing one or more registered Service Endpoints. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

`Edgediscoveryread`, `Edgeserviceprofileread`, `Edgeserviceprofilewrite`, `Edgeserviceregistryread`, `Edgeserviceregistrywrite`, `TsApplicationRo`, `TsMecFullaccess`, `TsMecLimitaccess`

## Response Type

[`ListOptimalServiceEndpointsResult`](../../doc/models/list-optimal-service-endpoints-result.md)

## Example Usage

```ts
const region = 'US_WEST_2';

const uEIdentityType = UserEquipmentIdentityTypeEnum.IPAddress;

const uEIdentity = '2600:1010:b1d0:0000:0000:0000:0000:0012';

const serviceEndpointsIds = '43f3f7bb-d6c5-4bad-b081-9a3a0df2db98';

try {
  const { result, ...httpResponse } = await serviceEndpointsController.listOptimalServiceEndpoints(
    region,
    uEIdentityType,
    uEIdentity,
    serviceEndpointsIds
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
  "serviceEndpoints": [
    {
      "ern": "LASVEGAS_NV_WL",
      "serviceEndpoint": {
        "URI": "http://base_path/some_segment/id",
        "FQDN": "thingtest.verizon.com",
        "IPv4Address": "192.168.11.10",
        "IPv6Address": "2001:0db8:85a3:0000:0000:8a2e:0370:1234",
        "port": 1234
      },
      "applicationServerProviderId": "AWS",
      "applicationId": "IogspaceJan15",
      "serviceDescription": "ThieIt"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | HTTP 400 Bad Request. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| 401 | HTTP 401 Unauthorized. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| Default | HTTP 500 Internal Server Error. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |


# Register Service Endpoints

Register Service Endpoints of a deployed application to specified MEC Platforms.

```ts
async registerServiceEndpoints(
  body: ResourcesEdgeHostedServiceWithProfileId[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<RegisterServiceEndpointResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ResourcesEdgeHostedServiceWithProfileId[]`](../../doc/models/resources-edge-hosted-service-with-profile-id.md) | Body, Required | An array of Service Endpoint data for a deployed application. The request body passes all of the needed parameters to create a service endpoint. Parameters will be edited here rather than the **Parameters** section above. The `ern`,`applicationServerProviderId`, `applicationId` and `serviceProfileID` parameters are required. **Note:** Currently, the only valid value for `applicationServerProviderId`is **AWS**. Also, if you do not know one of the optional values (i.e. URI), you can erase the line from the query by back-spacing over it.<br>**Constraints**: *Maximum Items*: `100` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

`Edgediscoveryread`, `Edgeserviceprofileread`, `Edgeserviceprofilewrite`, `Edgeserviceregistryread`, `Edgeserviceregistrywrite`, `TsApplicationRo`, `TsMecFullaccess`, `TsMecLimitaccess`

## Response Type

[`RegisterServiceEndpointResult`](../../doc/models/register-service-endpoint-result.md)

## Example Usage

```ts
const body: ResourcesEdgeHostedServiceWithProfileId[] = [
  {
    ern: 'us-east-1-wl1-atl-wlz-1',
    serviceEndpoint: {
      uRI: 'http://base_path/some_segment/id',
      fQDN: 'thingtest.verizon.com',
      iPv4Address: '192.168.11.10',
      iPv6Address: '2001:0db8:85a3:0000:0000:8a2e:0370:1234',
      port: 1234,
    },
    applicationServerProviderId: 'AWS',
    applicationId: 'IogspaceJan15',
    serviceDescription: 'ThieIt',
    serviceProfileID: '4054ea9a-593e-4776-b488-697b1bfa4f3b',
  }
];

try {
  const { result, ...httpResponse } = await serviceEndpointsController.registerServiceEndpoints(body);
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


# List All Service Endpoints

Returns a list of all registered service endpoints.

```ts
async listAllServiceEndpoints(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListAllServiceEndpointsResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

`Edgediscoveryread`, `Edgeserviceprofileread`, `Edgeserviceprofilewrite`, `Edgeserviceregistryread`, `Edgeserviceregistrywrite`, `TsApplicationRo`, `TsMecFullaccess`, `TsMecLimitaccess`

## Response Type

[`ListAllServiceEndpointsResult`](../../doc/models/list-all-service-endpoints-result.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await serviceEndpointsController.listAllServiceEndpoints();
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
  "status": "success",
  "data": [
    "serviceEndpointsId"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | HTTP 400 Bad Request. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| 401 | HTTP 401 Unauthorized. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| Default | HTTP 500 Internal Server Error. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |


# Get Service Endpoint

Returns endpoint information for all Service Endpoints registered to a specified serviceEndpointId.

```ts
async getServiceEndpoint(
  serviceEndpointsId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResourcesEdgeHostedServiceWithProfileId[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceEndpointsId` | `string` | Template, Required | A system-defined string identifier representing one or more registered Service Endpoints. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

`Edgediscoveryread`, `Edgeserviceprofileread`, `Edgeserviceprofilewrite`, `Edgeserviceregistryread`, `Edgeserviceregistrywrite`, `TsApplicationRo`, `TsMecFullaccess`, `TsMecLimitaccess`

## Response Type

[`ResourcesEdgeHostedServiceWithProfileId[]`](../../doc/models/resources-edge-hosted-service-with-profile-id.md)

## Example Usage

```ts
const serviceEndpointsId = '43f3f7bb-d6c5-4bad-b081-9a3a0df2db98';

try {
  const { result, ...httpResponse } = await serviceEndpointsController.getServiceEndpoint(serviceEndpointsId);
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
[
  {
    "serviceEndpoint": {
      "FQDN": "thingtest.verizon.com",
      "IPv4Address": "192.168.11.10",
      "IPv6Address": "2001:0db8:85a3:0000:0000:8a2e:0370:1234",
      "port": 1234,
      "URI": "http://base_path/some_segment/id"
    },
    "applicationId": "IogspaceJan15",
    "serviceDescription": "ThieIt",
    "applicationServerProviderId": "AWS",
    "ern": "us-east-1-wl1-atl-wlz-1",
    "serviceProfileID": "4054ea9a-593e-4776-b488-697b1bfa4f3b"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | HTTP 400 Bad Request. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| 401 | HTTP 401 Unauthorized. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| Default | HTTP 500 Internal Server Error. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |


# Update Service Endpoint

Update registered Service Endpoint information.

```ts
async updateServiceEndpoint(
  serviceEndpointsId: string,
  body: ResourcesEdgeHostedServiceWithProfileId[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateServiceEndpointResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceEndpointsId` | `string` | Template, Required | A system-defined string identifier representing one or more registered Service Endpoints. |
| `body` | [`ResourcesEdgeHostedServiceWithProfileId[]`](../../doc/models/resources-edge-hosted-service-with-profile-id.md) | Body, Required | Data needed for Service Endpoint information. The request body passes the rest of the needed parameters to create a service endpoint. Parameters other than `serviceEndpointsId` will be edited here rather than the **Parameters** section above. The `ern`,`applicationServerProviderId` and `applicationId` parameters are required. **Note:** Currently, the only valid value for `applicationServerProviderId`is **AWS**.<br>**Constraints**: *Maximum Items*: `100` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

`Edgediscoveryread`, `Edgeserviceprofileread`, `Edgeserviceprofilewrite`, `Edgeserviceregistryread`, `Edgeserviceregistrywrite`, `TsApplicationRo`, `TsMecFullaccess`, `TsMecLimitaccess`

## Response Type

[`UpdateServiceEndpointResult`](../../doc/models/update-service-endpoint-result.md)

## Example Usage

```ts
const serviceEndpointsId = '43f3f7bb-d6c5-4bad-b081-9a3a0df2db98';

const body: ResourcesEdgeHostedServiceWithProfileId[] = [
  {
    ern: 'us-east-1-wl1-atl-wlz-1',
    serviceEndpoint: {
      uRI: 'http://base_path/some_segment/id',
      fQDN: 'thingtest.verizon.com',
      iPv4Address: '192.168.11.10',
      iPv6Address: '2001:0db8:85a3:0000:0000:8a2e:0370:1234',
      port: 1234,
    },
    applicationServerProviderId: 'AWS',
    applicationId: 'IogspaceJan15',
    serviceDescription: 'ThieIt',
    serviceProfileID: '4054ea9a-593e-4776-b488-697b1bfa4f3b',
  }
];

try {
  const { result, ...httpResponse } = await serviceEndpointsController.updateServiceEndpoint(
    serviceEndpointsId,
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
  "message": "EdgeAppServices are updated"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | HTTP 400 Bad Request. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| 401 | HTTP 401 Unauthorized. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| Default | HTTP 500 Internal Server Error. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |


# Deregister Service Endpoint

Deregister an application's Service Endpoint from the MEC Platform(s).

```ts
async deregisterServiceEndpoint(
  serviceEndpointsId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeregisterServiceEndpointResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceEndpointsId` | `string` | Template, Required | A system-defined string identifier representing one or more registered Service Endpoints. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

`Edgediscoveryread`, `Edgeserviceprofileread`, `Edgeserviceprofilewrite`, `Edgeserviceregistryread`, `Edgeserviceregistrywrite`, `TsApplicationRo`, `TsMecFullaccess`, `TsMecLimitaccess`

## Response Type

[`DeregisterServiceEndpointResult`](../../doc/models/deregister-service-endpoint-result.md)

## Example Usage

```ts
const serviceEndpointsId = '43f3f7bb-d6c5-4bad-b081-9a3a0df2db98';

try {
  const { result, ...httpResponse } = await serviceEndpointsController.deregisterServiceEndpoint(serviceEndpointsId);
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
  "message": "EdgeAppServicesID Deleted"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | HTTP 400 Bad Request. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| 401 | HTTP 401 Unauthorized. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |
| Default | HTTP 500 Internal Server Error. | [`EdgeDiscoveryResultError`](../../doc/models/edge-discovery-result-error.md) |

