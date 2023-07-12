# Repositories

```ts
const repositoriesController = new RepositoriesController(client);
```

## Class Name

`RepositoriesController`

## Methods

* [List Repositories](../../doc/controllers/repositories.md#list-repositories)
* [Create Repository](../../doc/controllers/repositories.md#create-repository)
* [Delete Repository](../../doc/controllers/repositories.md#delete-repository)


# List Repositories

Get all repositories in the platform.

```ts
async listRepositories(
  accountName: string,
  correlationId?: string,
  type?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Repository[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `type` | `string \| undefined` | Query, Optional | Repository type.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Repository[]`](../../doc/models/repository.md)

## Example Usage

```ts
const accountName = 'test_account1';

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

const type = 'GIT';

try {
  const { result, ...httpResponse } = await repositoriesController.listRepositories(
    accountName,
    correlationId,
    type
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
[
  {
    "name": "myRepo"
  },
  {
    "name": "anotherRepo"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 404 | Not found. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# Create Repository

Create a repository within user's organziation.

```ts
async createRepository(
  accountName: string,
  body: Repository,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Repository>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `body` | [`Repository`](../../doc/models/repository.md) | Body, Required | - |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Repository`](../../doc/models/repository.md)

## Example Usage

```ts
const accountName = 'test_account1';

const body: Repository = {
  name: 'myRepo',
  description: 'My organization repository.',
  type: EdgeServiceRepositoryTypeEnum.Git,
  tag: 'myTag',
  endpoint: 'https://charts.bitnami.com/bitnami',
};

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await repositoriesController.createRepository(
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
  "createdBy": "dev-api-user",
  "createdDate": "2022-08-25T11:38:06.000Z",
  "endpoint": "https://charts.bitnami.com/bitnami",
  "id": "60d0a7f0-1811-43fd-be4a-b47e5fe2c755",
  "lastModifiedDate": "2022-08-25T11:38:06.000Z",
  "name": "dev-api-demo-repo-1",
  "type": "Helm",
  "updatedBy": "dev-api-user"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# Delete Repository

Delete the repository.

```ts
async deleteRepository(
  accountName: string,
  repositoryName: string,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EdgeServiceOnboardingDeleteResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `repositoryName` | `string` | Template, Required | Name of the repository which is about to be deleted.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EdgeServiceOnboardingDeleteResult`](../../doc/models/edge-service-onboarding-delete-result.md)

## Example Usage

```ts
const accountName = 'test_account1';

const repositoryName = 'dev-api-demo-repo-mdp';

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await repositoriesController.deleteRepository(
    accountName,
    repositoryName,
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
  "message": "service deleted succesfully",
  "status": "success",
  "subStatus": "service delete - success"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 404 | Not found. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |

