# Service Launch Profiles

```ts
const serviceLaunchProfilesController = new ServiceLaunchProfilesController(client);
```

## Class Name

`ServiceLaunchProfilesController`

## Methods

* [Create Service Profile](../../doc/controllers/service-launch-profiles.md#create-service-profile)
* [Update Service Profile](../../doc/controllers/service-launch-profiles.md#update-service-profile)
* [Submit Service Profile](../../doc/controllers/service-launch-profiles.md#submit-service-profile)


# Create Service Profile

Creates a service profile that describes the resource requirements of a service.

```ts
async createServiceProfile(
  accountName: string,
  body: CreateServiceProfileRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServicesProfileRegistration>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[A-Za-z0-9]` |
| `body` | [`CreateServiceProfileRequest`](../../doc/models/create-service-profile-request.md) | Body, Required | Request for creation of a service profile. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServicesProfileRegistration`](../../doc/models/services-profile-registration.md)

## Example Usage

```ts
const accountName = 'test_account1';

const body: CreateServiceProfileRequest = {
  name: 'mongo-pmec-profile-mdp7',
  serviceName: 'mongodb-customer-prerun',
  serviceVersion: '1.0.0',
};

try {
  const { result, ...httpResponse } = await serviceLaunchProfilesController.createServiceProfile(
    accountName,
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
| Default | HTTP 500 Internal Server Error. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |


# Update Service Profile

Update the definition of a service profile.

```ts
async updateServiceProfile(
  id: string,
  body: CreateServiceProfileRequest,
  accountName?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<string>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | Unique ID of the service profile.<br>**Constraints**: *Maximum Length*: `36`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `body` | [`CreateServiceProfileRequest`](../../doc/models/create-service-profile-request.md) | Body, Required | Request with new information for updating the service profile. |
| `accountName` | `string \| undefined` | Header, Optional | User account name.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[A-Za-z0-9]` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string`

## Example Usage

```ts
const id = 'eda2cb4e-50ef-4ae8-b304-7d2f0f7a21c1';

const body: CreateServiceProfileRequest = {
  name: 'mongo-pmec-profile-mdp7',
  serviceName: 'mongodb-customer-prerun',
  serviceVersion: '1.0.0',
};

const accountName = 'test_account1';

try {
  const { result, ...httpResponse } = await serviceLaunchProfilesController.updateServiceProfile(
    id,
    body,
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
| 400 | HTTP 400 Bad Request. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 401 | HTTP 401 Unauthorized. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| Default | HTTP 500 Internal Server Error. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |


# Submit Service Profile

Helps register a service profile.

```ts
async submitServiceProfile(
  id: string,
  body: ServicesProfileRegistration,
  accountName?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServicesProfileRegistrationResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | Unique service profile ID.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[A-Za-z0-9]` |
| `body` | [`ServicesProfileRegistration`](../../doc/models/services-profile-registration.md) | Body, Required | Request for registration of a service profile. |
| `accountName` | `string \| undefined` | Header, Optional | User account name.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[A-Za-z0-9]` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServicesProfileRegistrationResult`](../../doc/models/services-profile-registration-result.md)

## Example Usage

```ts
const id = 'eda2cb4e-50ef-4ae8-b304-7d2f0f7a21c1';

const body: ServicesProfileRegistration = {
  id: '6789409c-12c3-4fc9-b64f-71d1611c4f09',
  name: 'mongo-pmec-profile-mdp7',
  serviceName: 'mongodb-customer-prerun',
  serviceVersion: '1.0.0',
  version: '1.0.0',
  state: ServicesProfileRegistrationStateEnum.DRAFT,
  customerID: 'acme',
  createdBy: 'acme-user',
  createdAt: '2022-08-03T03:43:17.504Z',
  lastUpdatedAt: '2022-08-03T03:43:17.504Z',
  linkedServiceInstances: [],
  accessIntents: {},
  placementIntents: {
    intentChain: [
      {
        name: 'Compliance',
        input: { 'deploymentLocations': [{ 'csp': 'AWS_WL', 'region': 'US_WEST_2', 'zoneId': ['us-west-2-wl1-den-wlz-1'] }] },
      }
    ],
  },
  deploymentLocations: [],
};

const accountName = 'test_account1';

try {
  const { result, ...httpResponse } = await serviceLaunchProfilesController.submitServiceProfile(
    id,
    body,
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
| 400 | HTTP 400 Bad Request. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 401 | HTTP 401 Unauthorized. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 412 | Precondition Failed. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |
| Default | HTTP 500 Internal Server Error. | [`EdgeServiceLaunchResultError`](../../doc/models/edge-service-launch-result-error.md) |

