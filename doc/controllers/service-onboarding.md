# Service Onboarding

```ts
const serviceOnboardingController = new ServiceOnboardingController(client);
```

## Class Name

`ServiceOnboardingController`

## Methods

* [Upload Service Workload File](../../doc/controllers/service-onboarding.md#upload-service-workload-file)
* [List Services](../../doc/controllers/service-onboarding.md#list-services)
* [Register Service](../../doc/controllers/service-onboarding.md#register-service)
* [List Service Details](../../doc/controllers/service-onboarding.md#list-service-details)
* [Remove Service](../../doc/controllers/service-onboarding.md#remove-service)
* [Start Service Onboarding](../../doc/controllers/service-onboarding.md#start-service-onboarding)
* [Get Service Job Status](../../doc/controllers/service-onboarding.md#get-service-job-status)
* [Start Service Claim Sand Box Testing](../../doc/controllers/service-onboarding.md#start-service-claim-sand-box-testing)
* [Start Service Publishing](../../doc/controllers/service-onboarding.md#start-service-publishing)
* [Stop Service Testing](../../doc/controllers/service-onboarding.md#stop-service-testing)
* [Mark Service as Ready for Public Use](../../doc/controllers/service-onboarding.md#mark-service-as-ready-for-public-use)


# Upload Service Workload File

Upload workload payload/package in the MEC platform.

```ts
async uploadServiceWorkloadFile(
  accountName: string,
  serviceName: string,
  version: string,
  categoryType: CategoryTypeEnum,
  categoryName: string,
  payload: FileWrapper,
  correlationId?: string,
  categoryVersion?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceFile>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `serviceName` | `string` | Template, Required | Service name to which the file is going to be associated.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `version` | `string` | Template, Required | Version of the service being used.<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[0-9\.]+$` |
| `categoryType` | [`CategoryTypeEnum`](../../doc/models/category-type-enum.md) | Query, Required | Type of the file being uploaded.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[a-zA-Z0-9-_.]+$` |
| `categoryName` | `string` | Query, Required | `workloadName` used in the service while creation.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[a-zA-Z0-9-_.]+$` |
| `payload` | `FileWrapper` | Form, Required | Payload/file which is to be uploaded should be provided in formData. |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `categoryVersion` | `string \| undefined` | Query, Optional | It is mandatory for only service file, not mandatory for workload and workflow file.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[0-9\.]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceFile`](../../doc/models/service-file.md)

## Example Usage

```ts
const accountName = 'test_account1';

const serviceName = 'doccheck';

const version = '1.0.0';

const categoryType = CategoryTypeEnum.GENERALVALIDATION;

const categoryName = 'gst-server-workload';

const payload = new FileWrapper(fs.createReadStream('dummy_file'));

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

const categoryVersion = '1.0.0';

try {
  const { result, ...httpResponse } = await serviceOnboardingController.uploadServiceWorkloadFile(
    accountName,
    serviceName,
    version,
    categoryType,
    categoryName,
    payload,
    correlationId,
    categoryVersion
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
  "id": "uuid",
  "serviceName": "gst-server",
  "serviceVersion": "1.0.0",
  "file": "values.yaml",
  "categoryName": "gst-server-workload",
  "categoryVersion": "1.0.0",
  "categoryType": "WORKLOAD_VALUES",
  "validationStatus": "Validation Success",
  "createdDate": "2006-01-02T15:04:05Z",
  "lastModifiedDate": "2006-01-02T15:04:05Z",
  "createdBy": "User",
  "updatedBy": "User"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 404 | Not found. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# List Services

Fetch all organizational services in the platform.

```ts
async listServices(
  accountName: string,
  correlationId?: string,
  name?: string,
  q?: string,
  limit?: bigint,
  offSet?: bigint,
  sortKey?: string,
  sortDir?: SortDirectionEnum,
  detailsFlag?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Services>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `name` | `string \| undefined` | Query, Optional | Name of the service whose information needs to be fetched.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `q` | `string \| undefined` | Query, Optional | Use the comma (:) character to separate multiple values eg type=myService:workloads.packageType=Helm,YAML:state=DRAFTED,VALIDATION_COMPLETED.<br>**Constraints**: *Maximum Length*: `2048`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!\/,+\-=_:.&*%\s]+$` |
| `limit` | `bigint \| undefined` | Query, Optional | Number of items to return.<br>**Constraints**: `>= 0`, `<= 1024` |
| `offSet` | `bigint \| undefined` | Query, Optional | Id of the last respose value in the previous list.<br>**Constraints**: `>= 0`, `<= 1024` |
| `sortKey` | `string \| undefined` | Query, Optional | Sorts the response by an attribute. Default is createdDate.<br>**Default**: `'createdDate'`<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `sortDir` | [`SortDirectionEnum \| undefined`](../../doc/models/sort-direction-enum.md) | Query, Optional | Sorts the response. Use asc for ascending or desc for descending order. The default is desc.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `detailsFlag` | `boolean \| undefined` | Query, Optional | Default as true. If it is true, then it will return all details.<br>**Default**: `true` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Services`](../../doc/models/services.md)

## Example Usage

```ts
const accountName = 'test_account1';

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

const name = 'dev-api-test-service-mdp-1';

const q = 'type=myService:workloads.packageType=Helm,YAML:state=DRAFTED,VALIDATION_COMPLETED';

const limit = BigInt(256);

const offSet = BigInt(255);

const sortKey = 'createdDate';

const sortDir = SortDirectionEnum.DESC;

const detailsFlag = true;

try {
  const { result, ...httpResponse } = await serviceOnboardingController.listServices(
    accountName,
    correlationId,
    name,
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
  "totalRecords": 1,
  "serviceResList": [
    {
      "boundaries": [],
      "categories": [
        "MongodbSensor"
      ],
      "compatibility": [
        {
          "csp": "AWS_WL"
        }
      ],
      "createdBy": "acme-user",
      "createdDate": "2022-08-03T13:31:52.000Z",
      "error": {},
      "errorResponse": {},
      "id": "b32321d2-4ee3-458b-a70b-e956525d46c9",
      "lastModifiedBy": "acme-user",
      "lastModifiedDate": "2022-08-03T13:31:52.000Z",
      "name": "dev-api-test-service-mdp-1",
      "state": "DRAFT",
      "status": "DRAFT_INPROGRESS",
      "tags": [
        {
          "key": "vnsp.mec.verizon.com/servicetype",
          "value": "My service"
        }
      ],
      "type": "MY_SERVICE",
      "version": "1.0.0",
      "workloads": [
        {
          "createdBy": "acme-user",
          "createdDate": "2022-08-03T13:31:52.000Z",
          "description": "MEC SD Workload.",
          "files": [],
          "helmHelmrepo": {
            "helmChartName": "mongodb",
            "helmChartVersion": "12.1.10"
          },
          "id": "cf5e0af0-0dfc-4b6b-be95-08fc28e5f4ad",
          "lastModifiedDte": "0001-01-01T00:00:00.000Z",
          "name": "dev-api-demo-repo",
          "packageType": "HELM",
          "repositoryType": "HELM",
          "updatedBy": "acme-user",
          "uploadType": "PULL_FROM_REPO"
        }
      ]
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 404 | Not Found. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# Register Service

Create a new service within user's organization.

```ts
async registerService(
  accountName: string,
  body: Service,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Service>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `body` | [`Service`](../../doc/models/service.md) | Body, Required | - |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Service`](../../doc/models/service.md)

## Example Usage

```ts
const accountName = 'test_account1';

const body: Service = {
  name: 'dev-api-test-service-mdp-1',
  version: '1.0.0',
  tags: [
    {
      key: 'vnsp.mec.verizon.com/servicetype',
      value: 'My service',
    }
  ],
  categories: [
    'MongodbSensor'
  ],
  compatibility: [
    {
      csp: CSPCompatibilityEnum.AWSWL,
    }
  ],
  type: ServiceTypeEnum.MYSERVICE,
  workloads: [
    {
      name: 'dev-api-demo-repo',
      description: 'MEC SD Workload.',
      packageType: ServiceDependencyPackageTypeEnum.HELM,
      uploadType: UploadTypeEnum.PULLFROMREPO,
      repositoryType: WorkloadRepositoryTypeEnum.HELM,
      helmHelmrepo: {
        helmChartName: 'mongodb',
        helmChartVersion: '12.1.10',
      },
    }
  ],
};

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await serviceOnboardingController.registerService(
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
  "categories": [
    "MongodbSensor"
  ],
  "compatibility": [
    {
      "csp": "AWS_WL"
    }
  ],
  "createdBy": "acme-user",
  "createdDate": "2022-08-03T13:31:52.000Z",
  "error": {},
  "errorResponse": {},
  "id": "b32321d2-4ee3-458b-a70b-e956525d46c9",
  "lastModifiedBy": "acme-user",
  "lastModifiedDate": "2022-08-03T13:31:52.000Z",
  "name": "dev-api-test-service-mdp-1",
  "tags": [
    {
      "key": "services.mec.verizon.com/servicetype",
      "value": "My service"
    }
  ],
  "type": "MY_SERVICE",
  "version": "1.0.0",
  "workloads": [
    {
      "createdBy": "acme-user",
      "createdDate": "2022-08-03T13:31:52.000Z",
      "description": "MEC SD Workload.",
      "helmHelmrepo": {
        "helmChartName": "mongodb",
        "helmChartVersion": "12.1.10"
      },
      "id": "cf5e0af0-0dfc-4b6b-be95-08fc28e5f4ad",
      "lastModifiedDte": "2022-08-03T13:31:52.000Z",
      "name": "dev-api-demo-repo",
      "packageType": "HELM",
      "repositoryType": "HELM",
      "updatedBy": "acme-user",
      "uploadType": "PULL_FROM_REPO"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 403 | Forbidden. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 404 | Not found. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 415 | Unsupported media type. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 429 | Too many requests. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# List Service Details

Fetch a service details within user's organization using service name and version.

```ts
async listServiceDetails(
  accountName: string,
  serviceName: string,
  version: string,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Service>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `serviceName` | `string` | Template, Required | Name of the service whose information needs to be fetched.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `version` | `string` | Template, Required | Version of service whose information needs to be fetched.<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[0-9\.]+$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Service`](../../doc/models/service.md)

## Example Usage

```ts
const accountName = 'test_account1';

const serviceName = 'dev-api-test-service-mdp-1';

const version = '1.0.0';

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await serviceOnboardingController.listServiceDetails(
    accountName,
    serviceName,
    version,
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
  "categories": [
    "MongodbSensor"
  ],
  "compatibility": [
    {
      "csp": "AWS_WL"
    }
  ],
  "createdBy": "acme-user",
  "createdDate": "2022-08-03T13:31:52.000Z",
  "error": {},
  "errorResponse": {},
  "id": "b32321d2-4ee3-458b-a70b-e956525d46c9",
  "lastModifiedBy": "acme-user",
  "lastModifiedDate": "2022-08-03T13:31:52.000Z",
  "name": "dev-api-test-service-mdp-1",
  "tags": [
    {
      "key": "services.mec.verizon.com/servicetype",
      "value": "My service"
    }
  ],
  "type": "MY_SERVICE",
  "version": "1.0.0",
  "workloads": [
    {
      "createdBy": "acme-user",
      "createdDate": "2022-08-03T13:31:52.000Z",
      "description": "MEC SD Workload.",
      "helmHelmrepo": {
        "helmChartName": "mongodb",
        "helmChartVersion": "12.1.10"
      },
      "id": "cf5e0af0-0dfc-4b6b-be95-08fc28e5f4ad",
      "lastModifiedDte": "2022-08-03T13:31:52.000Z",
      "name": "dev-api-demo-repo",
      "packageType": "HELM",
      "repositoryType": "HELM",
      "updatedBy": "acme-user",
      "uploadType": "PULL_FROM_REPO"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 404 | Not Found. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| Default | Unexpected error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# Remove Service

Remove a service from user's organization.

```ts
async removeService(
  accountName: string,
  serviceName: string,
  version: string,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EdgeServiceOnboardingDeleteResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `serviceName` | `string` | Template, Required | Name of the service which is about to be deleted.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `version` | `string` | Template, Required | Version of the service which is about to be deleted.<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[0-9\.]+$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EdgeServiceOnboardingDeleteResult`](../../doc/models/edge-service-onboarding-delete-result.md)

## Example Usage

```ts
const accountName = 'test_account1';

const serviceName = 'dev-api-test-service-mdp-1';

const version = '1.0.0';

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await serviceOnboardingController.removeService(
    accountName,
    serviceName,
    version,
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
  "subStatus": "service delete - success"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 404 | Not found. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# Start Service Onboarding

Start service onboarding process to kick off service artifact validation and making the service ready for sandbox testing. On successful completion of this process system will generate claims for each selected cloud provider using which user can start sandbox testing.

```ts
async startServiceOnboarding(
  accountName: string,
  serviceName: string,
  version: string,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `serviceName` | `string` | Template, Required | Name of the service which is to be onboarded.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `version` | `string` | Template, Required | Version of service which is to be onboarded.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9\.]+$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceManagementResult`](../../doc/models/service-management-result.md)

## Example Usage

```ts
const accountName = 'test_account1';

const serviceName = 'dev-api-test-service-mdp-1';

const version = '1.0.0';

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await serviceOnboardingController.startServiceOnboarding(
    accountName,
    serviceName,
    version,
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
  "jobId": "0c6e8560-e154-40f9-961e-28da3698436d",
  "status": "Inprogress",
  "state": "DRAFT"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 403 | Forbidden. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 404 | Not found. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 415 | Unsupported media type. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 429 | Too many requests. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# Get Service Job Status

Check current status of job for a service using job ID.

```ts
async getServiceJobStatus(
  accountName: string,
  jobId: string,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CurrentStatus>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `jobId` | `string` | Template, Required | Auto-generated Id of the job.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[A-Za-z0-9_-]+$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CurrentStatus`](../../doc/models/current-status.md)

## Example Usage

```ts
const accountName = 'test_account1';

const jobId = '0c6e8560-e154-40f9-961e-28da3698436d';

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await serviceOnboardingController.getServiceJobStatus(
    accountName,
    jobId,
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
  "status": "STARTED"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 404 | Not found. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# Start Service Claim Sand Box Testing

Initiate testing of a service in sandbox environment per claim based on service's compatibility(s).

```ts
async startServiceClaimSandBoxTesting(
  accountName: string,
  serviceId: string,
  claimId: string,
  body: ClusterInfoDetails,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `serviceId` | `string` | Template, Required | An id of the service created e.g. UUID.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `claimId` | `string` | Template, Required | Id of the claim created e.g. UUID.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `body` | [`ClusterInfoDetails`](../../doc/models/cluster-info-details.md) | Body, Required | - |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceManagementResult`](../../doc/models/service-management-result.md)

## Example Usage

```ts
const accountName = 'test_account1';

const serviceId = 'b32321d2-4ee3-458b-a70b-e956525d46c9';

const claimId = '58296746-57ee-44f8-8107-399b61d58356';

const body: ClusterInfoDetails = {
  clusterName: 'ctc-1',
  namespace: 'default',
};

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await serviceOnboardingController.startServiceClaimSandBoxTesting(
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
  "jobId": "0c6e8560-e154-40f9-961e-28da3698436d",
  "status": "Inprogress",
  "state": "DRAFT"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| Default | Unexpected error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# Start Service Publishing

Start publishing a service. On successful completion, service's status can be marked as Publish.

```ts
async startServicePublishing(
  accountName: string,
  serviceName: string,
  version: string,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `serviceName` | `string` | Template, Required | Name of the service e.g. any sub string of serviceName.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `version` | `string` | Template, Required | Version of service which is to be published.<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[0-9\.]+$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceManagementResult`](../../doc/models/service-management-result.md)

## Example Usage

```ts
const accountName = 'test_account1';

const serviceName = 'dev-api-test-service-mdp-1';

const version = '1.0.0';

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await serviceOnboardingController.startServicePublishing(
    accountName,
    serviceName,
    version,
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
  "jobId": "0c6e8560-e154-40f9-961e-28da3698436d",
  "status": "Inprogress",
  "state": "DRAFT"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| Default | Unexpected error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# Stop Service Testing

Start service certification process. On successful completion of this process, service's status will change to certified.

```ts
async stopServiceTesting(
  accountName: string,
  serviceName: string,
  version: string,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `serviceName` | `string` | Template, Required | Name of the service e.g. any sub string of serviceName.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `version` | `string` | Template, Required | Version of service which is to be certified.<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[0-9\.]+$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceManagementResult`](../../doc/models/service-management-result.md)

## Example Usage

```ts
const accountName = 'test_account1';

const serviceName = 'dev-api-test-service-mdp-1';

const version = '1.0.0';

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await serviceOnboardingController.stopServiceTesting(
    accountName,
    serviceName,
    version,
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
  "jobId": "0c6e8560-e154-40f9-961e-28da3698436d",
  "status": "Inprogress",
  "state": "DRAFT"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| Default | Unexpected error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |


# Mark Service as Ready for Public Use

Start the process to change a service's status to "Ready to Use". On success, service's status will be changed to "Ready to Use". Only a ready to use service can be deployed in production environment.

```ts
async markServiceAsReadyForPublicUse(
  accountName: string,
  serviceName: string,
  version: string,
  correlationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Header, Required | User account name.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `serviceName` | `string` | Template, Required | Name of the service e.g. any sub string of serviceName.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `version` | `string` | Template, Required | Version of the service which is already certified and is ready for public use.<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[0-9\.]+$` |
| `correlationId` | `string \| undefined` | Header, Optional | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[a-zA-Z0-9-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceManagementResult`](../../doc/models/service-management-result.md)

## Example Usage

```ts
const accountName = 'test_account1';

const serviceName = 'dev-api-test-service-mdp-1';

const version = '1.0.0';

const correlationId = '9958f2f8-c4e3-46e0-8982-356de6515ae9';

try {
  const { result, ...httpResponse } = await serviceOnboardingController.markServiceAsReadyForPublicUse(
    accountName,
    serviceName,
    version,
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
  "jobId": "0c6e8560-e154-40f9-961e-28da3698436d",
  "status": "Inprogress",
  "state": "DRAFT"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 401 | Unauthorized. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| 500 | Internal Server Error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |
| Default | Unexpected error. | [`EdgeServiceOnboardingResultError`](../../doc/models/edge-service-onboarding-result-error.md) |

