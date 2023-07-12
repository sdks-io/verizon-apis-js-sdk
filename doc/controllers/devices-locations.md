# Devices Locations

```ts
const devicesLocationsController = new DevicesLocationsController(client);
```

## Class Name

`DevicesLocationsController`

## Methods

* [List Devices Locations Synchronous](../../doc/controllers/devices-locations.md#list-devices-locations-synchronous)
* [List Devices Locations Asynchronous](../../doc/controllers/devices-locations.md#list-devices-locations-asynchronous)
* [Cancel Device Location Request](../../doc/controllers/devices-locations.md#cancel-device-location-request)
* [Create Location Report](../../doc/controllers/devices-locations.md#create-location-report)
* [Retrieve Location Report](../../doc/controllers/devices-locations.md#retrieve-location-report)
* [Get Location Report Status](../../doc/controllers/devices-locations.md#get-location-report-status)
* [Cancel Queued Location Report Generation](../../doc/controllers/devices-locations.md#cancel-queued-location-report-generation)


# List Devices Locations Synchronous

This locations endpoint retrieves the locations for a list of devices.

```ts
async listDevicesLocationsSynchronous(
  body: LocationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Location[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`LocationRequest`](../../doc/models/location-request.md) | Body, Required | Request to obtain location of devices. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Location[]`](../../doc/models/location.md)

## Example Usage

```ts
const body: LocationRequest = {
  accountName: '1234567890-00001',
  accuracyMode: 0,
  cacheMode: CacheModeEnum.Enum1,
  deviceList: [
    {
      id: '980003420535573',
      kind: 'imei',
      mdn: '7892345678',
    },
    {
      id: '375535024300089',
      kind: 'imei',
      mdn: '7897654321',
    },
    {
      id: 'A100003861E585',
      kind: 'meid',
      mdn: '7897650914',
    }
  ],
};

try {
  const { result, ...httpResponse } = await devicesLocationsController.listDevicesLocationsSynchronous(body);
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
    "msid": "7892345678",
    "pd": {
      "time": "20170520004421",
      "x": "33.45324",
      "y": "-84.59621",
      "radius": "5571",
      "qos": false
    },
    "error": {}
  },
  {
    "msid": "8583239709",
    "pd": {
      "time": "20170525214342",
      "x": "38.8408694",
      "y": "-105.0422583",
      "radius": "3866",
      "qos": false
    },
    "error": {}
  },
  {
    "msid": "7897654321",
    "pd": {},
    "error": {
      "time": "20170525214342",
      "type": "POSITION METHOD FAILURE",
      "info": "Exception code=ABSENT SUBSCRIBER"
    }
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Unexpected error. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# List Devices Locations Asynchronous

Requests the current or cached location of up to 10,000 IoT or consumer devices (phones, tablets. etc.). This request returns a synchronous transaction ID, and the location information for each device is returned asynchronously as a DeviceLocation callback message.

```ts
async listDevicesLocationsAsynchronous(
  body: LocationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SynchronousLocationRequestResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`LocationRequest`](../../doc/models/location-request.md) | Body, Required | An asynchronous request to obtain locations of devices. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SynchronousLocationRequestResult`](../../doc/models/synchronous-location-request-result.md)

## Example Usage

```ts
const body: LocationRequest = {
  accountName: '2234434445-32333',
  accuracyMode: 0,
  cacheMode: CacheModeEnum.Enum2,
  deviceList: [
    {
      id: '354677790348290',
      kind: 'imei',
      mdn: '5557337468',
    }
  ],
};

try {
  const { result, ...httpResponse } = await devicesLocationsController.listDevicesLocationsAsynchronous(body);
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
  "txid": "4be7c858-0ef9-4b15-a0c1-95061456d835",
  "status": "QUEUED"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Unexpected error. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# Cancel Device Location Request

Cancel a queued or unfinished device location request.

```ts
async cancelDeviceLocationRequest(
  accountName: string,
  txid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionID>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Query, Required | Account identifier in "##########-#####". |
| `txid` | `string` | Template, Required | Transaction ID of the request to cancel, from the synchronous response to the original request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionID`](../../doc/models/transaction-id.md)

## Example Usage

```ts
const accountName = '1234567890-00001';

const txid = '2c90bd28-ece4-42ef-9f02-7e3bd4fbff33';

try {
  const { result, ...httpResponse } = await devicesLocationsController.cancelDeviceLocationRequest(
    accountName,
    txid
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
  "txid": "2c90bd28-ece4-42ef-9f02-7e3bd4fbff33"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Unexpected error. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# Create Location Report

Request an asynchronous device location report.

```ts
async createLocationReport(
  body: LocationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AsynchronousLocationRequestResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`LocationRequest`](../../doc/models/location-request.md) | Body, Required | Request for device location report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AsynchronousLocationRequestResult`](../../doc/models/asynchronous-location-request-result.md)

## Example Usage

```ts
const body: LocationRequest = {
  accountName: '1234567890-00001',
  accuracyMode: 0,
  cacheMode: CacheModeEnum.Enum1,
  deviceList: [
    {
      id: '980003420535573',
      kind: 'imei',
      mdn: '7892345678',
    },
    {
      id: '375535024300089',
      kind: 'imei',
      mdn: '7897654321',
    },
    {
      id: 'A100003861E585',
      kind: 'meid',
      mdn: '7897650914',
    }
  ],
};

try {
  const { result, ...httpResponse } = await devicesLocationsController.createLocationReport(body);
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
  "txid": "2c90bd28-ece4-42ef-9f02-7e3bd4fbff33",
  "status": "QUEUED"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Unexpected error. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# Retrieve Location Report

Download a completed asynchronous device location report.

```ts
async retrieveLocationReport(
  account: string,
  txid: string,
  startindex: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LocationReport>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier in "##########-#####". |
| `txid` | `string` | Template, Required | Transaction ID from POST /locationreports response. |
| `startindex` | `number` | Template, Required | Zero-based number of the first record to return. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LocationReport`](../../doc/models/location-report.md)

## Example Usage

```ts
const account = '0252012345-00001';

const txid = '2017-12-11Te8b47da2-3a45-46cf-9903-61815e1e97e9';

const startindex = 0;

try {
  const { result, ...httpResponse } = await devicesLocationsController.retrieveLocationReport(
    account,
    txid,
    startindex
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
  "startIndex": "0",
  "txid": "2017-12-11Te8b47da2-3a45-46cf-9903-61815e1e97e9",
  "totalCount": 3,
  "hasMoreData": false,
  "devLocationList": [
    {
      "error": {},
      "msid": "7892345678",
      "pd": {
        "qos": false,
        "radius": "5571",
        "time": "20170520004421",
        "x": "33.45324",
        "y": "-84.59621"
      }
    },
    {
      "error": {},
      "msid": "8583239709",
      "pd": {
        "qos": false,
        "radius": "3866",
        "time": "20170525214342",
        "x": "38.8408694",
        "y": "-105.0422583"
      }
    },
    {
      "error": {
        "time": "20170525214342",
        "type": "POSITION METHOD FAILURE",
        "info": "Exception code=ABSENT SUBSCRIBER"
      },
      "msid": "7897654321",
      "pd": {}
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Unexpected error. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# Get Location Report Status

Returns the current status of a requested device location report.

```ts
async getLocationReportStatus(
  account: string,
  txid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LocationReportStatus>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier in "##########-#####". |
| `txid` | `string` | Template, Required | Transaction ID of the report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LocationReportStatus`](../../doc/models/location-report-status.md)

## Example Usage

```ts
const account = '0252012345-00001';

const txid = '2c90bd28-ece4-42ef-9f02-7e3bd4fbff33';

try {
  const { result, ...httpResponse } = await devicesLocationsController.getLocationReportStatus(
    account,
    txid
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
  "txid": "2c90bd28-ece4-42ef-9f02-7e3bd4fbff33",
  "status": "INPROGRESS"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Unexpected error. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |


# Cancel Queued Location Report Generation

Cancel a queued device location report.

```ts
async cancelQueuedLocationReportGeneration(
  account: string,
  txid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionID>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier in "##########-#####". |
| `txid` | `string` | Template, Required | Transaction ID of the report to cancel. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionID`](../../doc/models/transaction-id.md)

## Example Usage

```ts
const account = '0252012345-00001';

const txid = '2c90bd28-ece4-42ef-9f02-7e3bd4fbff33';

try {
  const { result, ...httpResponse } = await devicesLocationsController.cancelQueuedLocationReportGeneration(
    account,
    txid
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
  "txid": "2c90bd28-ece4-42ef-9f02-7e3bd4fbff33"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Unexpected error. | [`DeviceLocationResultError`](../../doc/models/device-location-result-error.md) |

