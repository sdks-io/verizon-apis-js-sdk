# Service Metadata

```ts
const serviceMetadataController = new ServiceMetadataController(client);
```

## Class Name

`ServiceMetadataController`

## Methods

* [Create Service Category](../../doc/controllers/service-metadata.md#create-service-category)
* [Create Service Tag](../../doc/controllers/service-metadata.md#create-service-tag)


# Create Service Category

Create a new category within user's organization.

```ts
async createServiceCategory(
  accountName: string,
  body: Category[],
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Category[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `body` | [`Category[]`](../../doc/models/category.md) | Body, Required | **Constraints**: *Maximum Items*: `10000` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Category[]`](../../doc/models/category.md)

## Example Usage

```ts
const accountName = 'test_account1';

const body: Category[] = [
  {
    categoryName: 'MongodbSensor',
    categoryDescription: 'Mongo db Sensor',
  }
];

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await serviceMetadataController.createServiceCategory(
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
[
  {
    "categoryDescription": "Mongo db Sensor",
    "categoryName": "MongodbSensor",
    "createdBy": "acme-user",
    "createdDate": "2022-08-12T14:44:20.000Z",
    "id": "52da880c-f9d2-4ce5-a24a-edd50d3f2918",
    "lastModifiedDate": "2022-08-12T14:44:20.000Z",
    "updatedBy": "acme-user"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 404 | Not found. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# Create Service Tag

Create a new Tag within user's organization.

```ts
async createServiceTag(
  accountName: string,
  body: Tag[],
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Tag[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `body` | [`Tag[]`](../../doc/models/tag.md) | Body, Required | **Constraints**: *Maximum Items*: `10000` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Tag[]`](../../doc/models/tag.md)

## Example Usage

```ts
const accountName = 'test_account1';

const body: Tag[] = [
  {
    key: 'vnsp.mec.verizon.com/servicetype',
    description: 'My service.',
    value: 'My service',
  }
];

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await serviceMetadataController.createServiceTag(
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
[
  {
    "key": "vnsp.mec.verizon.com/servicetype",
    "value": "My service",
    "description": "My service."
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 404 | Not found. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 415 | Unsupported media type. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |

