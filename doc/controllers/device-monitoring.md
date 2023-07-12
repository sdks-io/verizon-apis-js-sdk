# Device Monitoring

```ts
const deviceMonitoringController = new DeviceMonitoringController(client);
```

## Class Name

`DeviceMonitoringController`

## Methods

* [Device Reachability](../../doc/controllers/device-monitoring.md#device-reachability)
* [Stop Device Reachability](../../doc/controllers/device-monitoring.md#stop-device-reachability)


# Device Reachability

Register for notification reports based on the request type.

```ts
async deviceReachability(
  body: NotificationReportRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`NotificationReportRequest`](../../doc/models/notification-report-request.md) | Body, Required | Create Reachability Report Request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RequestResponse`](../../doc/models/request-response.md)

## Example Usage

```ts
const body: NotificationReportRequest = {
  accountName: '0242072320-00001',
  requestType: 'REACHABLE_FOR_DATA',
  devices: [
    {
      deviceIds: [
        {
          id: '89148000004292933820',
          kind: KindEnum.Iccid,
        },
        {
          id: '89148000003164287919',
          kind: KindEnum.Iccid,
        }
      ],
    }
  ],
  monitorExpirationTime: '2019-12-02T15:00:00-08:00Z',
};

try {
  const { result, ...httpResponse } = await deviceMonitoringController.deviceReachability(body);
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
| 400 | Error Response | [`RestErrorResponseError`](../../doc/models/rest-error-response-error.md) |


# Stop Device Reachability

Stop Device Reachability monitors.

```ts
async stopDeviceReachability(
  accountName: string,
  monitorIds: string[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<RequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Query, Required | The numeric name of the account. |
| `monitorIds` | `string[]` | Query, Required | The array contains the monitorIDs (UUID) for which the monitor is to be deleted. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RequestResponse`](../../doc/models/request-response.md)

## Example Usage

```ts
const accountName = '0242123520-00001';

const monitorIds: string[] = [
  '35596ca6-bab4-4333-a914-42b4fc2da54c',
  '35596ca6-bab4-4333-a914-42b4fc2da54b'
];

try {
  const { result, ...httpResponse } = await deviceMonitoringController.stopDeviceReachability(
    accountName,
    monitorIds
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
| 400 | Error Response | [`RestErrorResponseError`](../../doc/models/rest-error-response-error.md) |

