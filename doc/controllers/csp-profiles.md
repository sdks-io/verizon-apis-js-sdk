# CSP Profiles

```ts
const cSPProfilesController = new CSPProfilesController(client);
```

## Class Name

`CSPProfilesController`

## Methods

* [Fetch Cloud Credential Details](../../doc/controllers/csp-profiles.md#fetch-cloud-credential-details)
* [Create Cloud Credential](../../doc/controllers/csp-profiles.md#create-cloud-credential)
* [Remove Cloud Credential](../../doc/controllers/csp-profiles.md#remove-cloud-credential)


# Fetch Cloud Credential Details

Fetch available cloud credentials within user's organization.

```ts
async fetchCloudCredentialDetails(
  accountName: string,
  correlationId?: string,
  q?: string,
  limit?: bigint,
  offSet?: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CSPProfileData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `q` | `string \| undefined` | Query, Optional | Use the coloumn (:) character to separate multiple query params eg type=AWS:awsCspProfile.credType=ACCESS_KEY,ROLE_ARN:state=UNVERIFIED,VERIFIED.<br>**Constraints**: *Maximum Length*: `2048`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!\/,+\-=_:.&*%\s]+$` |
| `limit` | `bigint \| undefined` | Query, Optional | Number of items to return.<br>**Constraints**: `>= 0`, `<= 1024` |
| `offSet` | `bigint \| undefined` | Query, Optional | Id of the last respose value in the previous list.<br>**Constraints**: `>= 0`, `<= 1024` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CSPProfileData`](../../doc/models/csp-profile-data.md)

## Example Usage

```ts
const accountName = 'test_account1';

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

const q = 'cspProfileName=dev-api-csp-profile-mdp';

const limit = BigInt(256);

const offSet = BigInt(255);

try {
  const { result, ...httpResponse } = await cSPProfilesController.fetchCloudCredentialDetails(
    accountName,
    correlationId,
    q,
    limit,
    offSet
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
  "count": 1,
  "cspProfileList": [
    {
      "awsCspProfile": {
        "accessKey": "XXXXX",
        "credType": "ACCESS_KEY",
        "secretKey": "XXXXX"
      },
      "createdBy": "acme-user",
      "createdDate": "2022-08-03T13:59:51.000Z",
      "cspProfileName": "dev-api-csp-profile-mdp",
      "customerID": "acme",
      "id": "72e35c51-098e-4388-9055-2967bbd9be48",
      "lastModifiedBy": "acme-user",
      "lastModifiedDate": "2022-08-03T13:59:51.000Z",
      "projectName": "vz-cve",
      "type": "AWS"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 403 | Forbidden. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 404 | Not found. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 429 | Too many requests. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| Default | Forbidden. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# Create Cloud Credential

Create a new cloud credential within user's organization.

```ts
async createCloudCredential(
  accountName: string,
  body: CSPProfile,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CSPProfile>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `body` | [`CSPProfile`](../../doc/models/csp-profile.md) | Body, Required | - |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CSPProfile`](../../doc/models/csp-profile.md)

## Example Usage

```ts
const accountName = 'test_account1';

const body: CSPProfile = {
  cspProfileName: 'dev-api-csp-profile-mdp',
  projectName: 'vz-cve',
  type: CSPProfileTypeEnum.AWS,
  awsCspProfile: {
    credType: AwsCspProfileCredTypeEnum.ACCESSKEY,
    accessKey: 'XXXXX',
    secretKey: 'XXXXX',
  },
};

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await cSPProfilesController.createCloudCredential(
    accountName,
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
  "awsCspProfile": {
    "accessKey": "XXXXX",
    "credType": "ACCESS_KEY",
    "secretKey": "XXXXX"
  },
  "createdBy": "acme-user",
  "createdDate": "2022-08-03T13:59:51.000Z",
  "cspProfileName": "dev-api-csp-profile-mdp",
  "customerID": "acme",
  "id": "72e35c51-098e-4388-9055-2967bbd9be48",
  "lastModifiedBy": "acme-user",
  "lastModifiedDate": "2022-08-03T13:59:51.000Z",
  "projectName": "vz-cve",
  "type": "AWS"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 403 | Forbidden. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 429 | Too many requests. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| Default | Forbidden. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# Remove Cloud Credential

Remove a cloud credential from user's organization.

```ts
async removeCloudCredential(
  accountName: string,
  id: string,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EdgeServiceOnboardingDeleteResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `id` | `string` | Template, Required | CSP Profile Id. |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EdgeServiceOnboardingDeleteResult`](../../doc/models/edge-service-onboarding-delete-result.md)

## Example Usage

```ts
const accountName = 'test_account1';

const id = '72e35c51-098e-4388-9055-2967bbd9be48';

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await cSPProfilesController.removeCloudCredential(
    accountName,
    id,
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
  "message": "Csp Profile deleted Successfully",
  "subStatus": "Csp Profile Delete - success"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 404 | Not Found. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |

