# Service Claims

```ts
const serviceClaimsController = new ServiceClaimsController(client);
```

## Class Name

`ServiceClaimsController`

## Methods

* [List Service Claims](../../doc/controllers/service-claims.md#list-service-claims)
* [Associate Cloud Credential With Service Claim](../../doc/controllers/service-claims.md#associate-cloud-credential-with-service-claim)
* [Mark Service Claim Status as Completed](../../doc/controllers/service-claims.md#mark-service-claim-status-as-completed)
* [Update Service Claim Status](../../doc/controllers/service-claims.md#update-service-claim-status)


# List Service Claims

Fetch all service's claim(s) associated with a service. Service claims are generated based on service's compatibility with different cloud service provider.

```ts
async listServiceClaims(
  accountName: string,
  serviceId: string,
  correlationId?: string,
  claimStatus?: string,
  q?: string,
  limit?: bigint,
  offSet?: bigint,
  sortKey?: string,
  sortDir?: SortDirectionEnum,
  detailsFlag?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceClaims>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `serviceId` | `string` | Template, Required | Auto-generated Id of the claim whose information needs to be fetched.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[A-Za-z0-9_-]+$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `claimStatus` | `string \| undefined` | Query, Optional | Queries with claim status on the claims.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `q` | `string \| undefined` | Query, Optional | Use the comma (,) character to separate multiple values,eg claimType=Public MEC:claims.sandBoxState=NOT_STARTED,STARTED.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!\/,+\-=_:.&*%\s]+$` |
| `limit` | `bigint \| undefined` | Query, Optional | Number of items to return.<br>**Constraints**: `>= 0`, `<= 1024` |
| `offSet` | `bigint \| undefined` | Query, Optional | Id of the last respose value in the previous list.<br>**Constraints**: `>= 0`, `<= 1024` |
| `sortKey` | `string \| undefined` | Query, Optional | Sorts the response by an attribute. Default is createdDate.<br>**Default**: `'createdDate'`<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `sortDir` | [`SortDirectionEnum \| undefined`](../../doc/models/sort-direction-enum.md) | Query, Optional | Sorts the response. Use asc for ascending or desc for descending order. The default is desc.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `detailsFlag` | `boolean \| undefined` | Query, Optional | Default as true. If it is true then it will return all details.<br>**Default**: `true` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceClaims`](../../doc/models/service-claims.md)

## Example Usage

```ts
const accountName = 'test_account1';

const serviceId = 'b32321d2-4ee3-458b-a70b-e956525d46c9';

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

const claimStatus = 'UNVERIFIED';

const q = 'claimType=Public MEC:claims.sandBoxState=NOT_STARTED,STARTED';

const limit = BigInt(256);

const offSet = BigInt(255);

const sortKey = 'createdDate';

const sortDir = SortDirectionEnum.DESC;

const detailsFlag = true;

try {
  const { result, ...httpResponse } = await serviceClaimsController.listServiceClaims(
    accountName,
    serviceId,
    correlationId,
    claimStatus,
    q,
    limit,
    offSet,
    sortKey,
    sortDir,
    detailsFlag
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
  "claimsResList": [
    {
      "claimStatus": "UNVERIFIED",
      "claimType": "PUBLIC_MEC",
      "createdBy": "acme-dev-api-user1",
      "createdDate": "2022-08-03T15:21:30.000Z",
      "endTimeStamp": "0001-01-01T00:00:00.000Z",
      "environment": "AWS_WL",
      "id": "09368e8f-97b6-462f-b309-57d23fd25073",
      "lastModifiedDate": "0001-01-01T00:00:00.000Z",
      "sandBoxState": "NOT_STARTED",
      "sandBoxStatus": "NA",
      "serviceId": "b32321d2-4ee3-458b-a70b-e956525d46c9",
      "startTimeStamp": "0001-01-01T00:00:00.000Z"
    }
  ],
  "count": 1
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 404 | Not found. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# Associate Cloud Credential With Service Claim

Associate an existing cloud credential with a service's claim which will be used to connect to user's cloud provider.

```ts
async associateCloudCredentialWithServiceClaim(
  accountName: string,
  serviceId: string,
  claimId: string,
  body: CSPProfileIdRequest,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AssociateCloudCredentialResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `serviceId` | `string` | Template, Required | System generated unique identifier of the service which user is using.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[A-Za-z0-9_-]+$` |
| `claimId` | `string` | Template, Required | System generated unique identifier for the claim which user is using.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[A-Za-z0-9_-]+$` |
| `body` | [`CSPProfileIdRequest`](../../doc/models/csp-profile-id-request.md) | Body, Required | - |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AssociateCloudCredentialResult`](../../doc/models/associate-cloud-credential-result.md)

## Example Usage

```ts
const accountName = 'test_account1';

const serviceId = 'b32321d2-4ee3-458b-a70b-e956525d46c9';

const claimId = '58296746-57ee-44f8-8107-399b61d58356';

const body: CSPProfileIdRequest = {
  cspProfileId: '2e13f3a1-287f-4c63-9218-d026bf1bda32',
};

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await serviceClaimsController.associateCloudCredentialWithServiceClaim(
    accountName,
    serviceId,
    claimId,
    body,
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

## Example Response *(as JSON)*

```json
{
  "message": "CSP Profile got associated with current claim successfully"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 404 | Not Found. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# Mark Service Claim Status as Completed

Mark a service's claim status as complete post successful verification of sandbox testing in the respective sandbox environment.

```ts
async markServiceClaimStatusAsCompleted(
  accountName: string,
  serviceId: string,
  claimId: string,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `serviceId` | `string` | Template, Required | System generated unique identifier of the service which user is using.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[A-Za-z0-9_-]+$` |
| `claimId` | `string` | Template, Required | System generated unique identifier of the claim which user is using.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[A-Za-z0-9_-]+$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const accountName = 'test_account1';

const serviceId = 'b32321d2-4ee3-458b-a70b-e956525d46c9';

const claimId = '58296746-57ee-44f8-8107-399b61d58356';

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await serviceClaimsController.markServiceClaimStatusAsCompleted(
    accountName,
    serviceId,
    claimId,
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
| 400 | Bad request. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 404 | Not Found. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# Update Service Claim Status

Using this API user can update service's claim status as complete/verified etc.

```ts
async updateServiceClaimStatus(
  accountName: string,
  serviceId: string,
  claimId: string,
  body: ClaimStatusRequest,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `serviceId` | `string` | Template, Required | System generated unique identifier of the service which user is using.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[A-Za-z0-9_-]+$` |
| `claimId` | `string` | Template, Required | System generated unique identifier of the claim which user is using.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[A-Za-z0-9_-]+$` |
| `body` | [`ClaimStatusRequest`](../../doc/models/claim-status-request.md) | Body, Required | - |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const accountName = 'test_account1';

const serviceId = 'b32321d2-4ee3-458b-a70b-e956525d46c9';

const claimId = '58296746-57ee-44f8-8107-399b61d58356';

const body: ClaimStatusRequest = {
  claimStatus: ClaimStatusEnum.VERIFIED,
};

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await serviceClaimsController.updateServiceClaimStatus(
    accountName,
    serviceId,
    claimId,
    body,
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
| 400 | Bad request. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 404 | Not Found. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |

