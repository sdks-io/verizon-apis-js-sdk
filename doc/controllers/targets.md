# Targets

```ts
const targetsController = new TargetsController(client);
```

## Class Name

`TargetsController`

## Methods

* [Query Target](../../doc/controllers/targets.md#query-target)
* [Delete Target](../../doc/controllers/targets.md#delete-target)
* [Create Target](../../doc/controllers/targets.md#create-target)
* [Generate Target External ID](../../doc/controllers/targets.md#generate-target-external-id)
* [Create Azure Central Io T Application](../../doc/controllers/targets.md#create-azure-central-io-t-application)


# Query Target

Search for targets by property values. Returns an array of all matching target resources.

```ts
async queryTarget(
  body: QueryTargetRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Target[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`QueryTargetRequest`](../../doc/models/query-target-request.md) | Body, Required | Search for targets by property values. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Target[]`](../../doc/models/target.md)

## Example Usage

```ts
const body: QueryTargetRequest = {
  accountidentifier: {
    billingaccountid: '1223334444-00001',
  },
  resourceidentifier: {
    id: 'dd1682d3-2d80-cefc-f3ee-25154800beff',
  },
};

try {
  const { result, ...httpResponse } = await targetsController.queryTarget(body);
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
    "address": "https://myhost.com:1825",
    "addressscheme": "streamrest",
    "createdon": "2018-12-22T03:59:18.563Z",
    "id": "cee10900-f54e-6eef-e455-bd7f15c4be32",
    "kind": "ts.target",
    "lastupdated": "2018-12-22T03:59:18.563Z",
    "name": "host:port target",
    "version": "1.0",
    "versionid": "f4be7c2b-059d-11e9-bec6-02420a4e1b0a"
  },
  {
    "address": "arn:aws:iam::252156542789:role/ThingSpace",
    "addressscheme": "streamawsiot",
    "createdon": "2019-01-24T19:06:43.577Z",
    "externalid": "lJZnih8BfqsosZrEEkfPuR3aGOk2i-HIr6tXN275ioJF6bezIrQB9EbzpTRep8J7RmV7QH==",
    "id": "cea170cc-a58f-6531-fc4b-fae1ceb1a6c8",
    "kind": "ts.target",
    "lastupdated": "2019-01-24T19:32:31.841Z",
    "name": "AWS Target",
    "region": "us-east-1",
    "version": "1.0",
    "versionid": "caf85ff7-200e-11e9-a85b-02420a621e0a"
  }
]
```


# Delete Target

Remove a target from a ThingSpace account.

```ts
async deleteTarget(
  body: DeleteTargetRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeleteTargetRequest`](../../doc/models/delete-target-request.md) | Body, Required | The request body identifies the target to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: DeleteTargetRequest = {
  accountidentifier: {
    billingaccountid: '0000000000-00001',
  },
  resourceidentifier: {
    id: '2e61a17d-8fd1-6816-e995-e4c2528bf535',
  },
};

try {
  const { result, ...httpResponse } = await targetsController.deleteTarget(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Target

Define a target to receive data streams, alerts, or callbacks. After creating the target resource, use its ID in a subscription to set up a data stream.

```ts
async createTarget(
  body: CreateTargetRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Target>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateTargetRequest`](../../doc/models/create-target-request.md) | Body, Required | The request body provides the details of the target that you want to create. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Target`](../../doc/models/target.md)

## Example Usage

```ts
const body: CreateTargetRequest = {
  accountidentifier: {
    billingaccountid: '0000000000-00001',
  },
  billingaccountid: '0000000000-00001',
  kind: 'ts.target',
  address: 'https://your_IoT_Central_Application.azureiotcentral.com',
  addressscheme: 'streamazureiot',
  fields: {
    httpheaders: {
      authorization: 'SharedAccessSignature sr=d1f9b6bf-1380-41f6-b757-d9805e48392b&sig=EF5tnXClw3MWkb84OkIOUhMH%2FaS1DRD2nXT69QR8RD8%3D&skn=TSCCtoken&se=1648827260410',
    },
    devicetypes: [
      'cHeAssetTracker',
      'cHeAssetTrackerV2',
      'tgAssetTracker',
      'tgAssetTrackerV2'
    ],
  },
};

try {
  const { result, ...httpResponse } = await targetsController.createTarget(body);
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
  "address": "arn:aws:iam::252156542978:role/ThingSpace",
  "addressscheme": "streamawsiot",
  "billingaccountid": "1223334444-00001",
  "createdon": "2018-12-21T04:37:42.651Z",
  "externalid": "lJZnih8BfqsosZrEEkfPuR3aGOk2i-HIr6tXN275ioJF6bezIrQB9EbzpTRep8J7RmV7QH==",
  "id": "0e411230-c3eb-64dc-f5f4-1020364aa81f",
  "kind": "ts.target",
  "lastupdated": "2018-12-21T04:37:42.651Z",
  "name": "AWS Target",
  "region": "us-east-1",
  "version": "1.0",
  "versionid": "27aca5a4-04da-11e9-bff3-02420a5e1b0b"
}
```


# Generate Target External ID

Create a unique string that ThingSpace will pass to AWS for increased security.

:information_source: **Note** This endpoint does not require authentication.

```ts
async generateTargetExternalID(
  body: GenerateExternalIDRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateExternalIDResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GenerateExternalIDRequest`](../../doc/models/generate-external-id-request.md) | Body, Required | The request body only contains the authenticating account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateExternalIDResult`](../../doc/models/generate-external-id-result.md)

## Example Usage

```ts
const body: GenerateExternalIDRequest = {
  accountidentifier: {
    billingaccountid: '0000000000-00001',
  },
};

try {
  const { result, ...httpResponse } = await targetsController.generateTargetExternalID(body);
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
  "externalid": "ZlJnih8BfqsosZrEEkfPuR3aGOk2i-HIr6tXN275ioJF6bezIrQB9EbzpTRep8J7RmV7QH=="
}
```


# Create Azure Central Io T Application

Deploy a new Azure IoT Central application based on the Verizon ARM template within the specified Azure Active Directory account.

```ts
async createAzureCentralIoTApplication(
  billingaccountID: string,
  body: CreateIoTApplicationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateIoTApplicationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingaccountID` | `string` | Header, Required | TThe ThingSpace ID of the authenticating billing account. |
| `body` | [`CreateIoTApplicationRequest`](../../doc/models/create-io-t-application-request.md) | Body, Required | The request body must include the UUID of the subscription that you want to update plus any properties that you want to change. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateIoTApplicationResponse`](../../doc/models/create-io-t-application-response.md)

## Example Usage

```ts
const billingaccountID = 'BillingaccountID2';

const body: CreateIoTApplicationRequest = {
  appName: 'newarmapp1',
  billingAccountID: '0000123456-00001',
  clientID: 'UUID',
  clientSecret: 'client secret',
  emailIDs: 'email@domain.com',
  resourcegroup: 'Myresourcegroup',
  sampleIOTcApp: '{app ID}',
  subscriptionID: '{subscription ID}',
  tenantID: '{tenant ID}',
};

try {
  const { result, ...httpResponse } = await targetsController.createAzureCentralIoTApplication(
    billingaccountID,
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
  "appName": "newarmapp1",
  "sharedSecret": "SharedAccessSignaturesr={client secret}",
  "url": "https://newarmapp1.azureiotcentral.com"
}
```

