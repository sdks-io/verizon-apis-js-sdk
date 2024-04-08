# MEC

```ts
const mECController = new MECController(client);
```

## Class Name

`MECController`

## Methods

* [KPI List](../../doc/controllers/mec.md#kpi-list)
* [Get Profile List](../../doc/controllers/mec.md#get-profile-list)
* [Change Pmec Device State-Activate](../../doc/controllers/mec.md#change-pmec-device-state-activate)
* [Change Pmec Device State-Bulk Deactivate](../../doc/controllers/mec.md#change-pmec-device-state-bulk-deactivate)
* [Change Pmec Device Profile](../../doc/controllers/mec.md#change-pmec-device-profile)
* [Change Pmec Device I Paddress Bulk](../../doc/controllers/mec.md#change-pmec-device-i-paddress-bulk)
* [Get MEC Performance Consent](../../doc/controllers/mec.md#get-mec-performance-consent)


# KPI List

```ts
async kPIList(
  aname: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<KPIInfoList>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aname` | `string` | Template, Required | Account name. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`KPIInfoList`](../../doc/models/kpi-info-list.md)

## Example Usage

```ts
const aname = '0342351414-00001';

try {
  const { result, ...httpResponse } = await mECController.kPIList(aname);
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
  "KpiInfoList": [
    {
      "name": "DOWNLINK_THROUGHPUT",
      "value": "23.2",
      "nodeName": "132924_ENB_VZ_EULESS_OLTE_RD-01",
      "nodeType": "BASEBAND",
      "description": "Downlink throughput (4G)",
      "unit": "Mbps",
      "category": "Network Performance Radio",
      "timeOfLastUpdate": "2022-12-07T08:39:59.228Z"
    }
  ]
}
```


# Get Profile List

```ts
async getProfileList(
  aname: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MECProfileList>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aname` | `string` | Template, Required | Account name. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MECProfileList`](../../doc/models/mec-profile-list.md)

## Example Usage

```ts
const aname = '0342351414-00001';

try {
  const { result, ...httpResponse } = await mECController.getProfileList(aname);
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
  "profiles": [
    {
      "profileId": "HSS-EsmProfile_Enterprise",
      "profileName": "HSS EsmProfile Enterprise"
    }
  ]
}
```


# Change Pmec Device State-Activate

```ts
async changePmecDeviceStateActivate(
  body: ChangePmecDeviceStateActivateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ChangeMecDeviceStateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ChangePmecDeviceStateActivateRequest`](../../doc/models/change-pmec-device-state-activate-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ChangeMecDeviceStateResponse`](../../doc/models/change-mec-device-state-response.md)

## Example Usage

```ts
const body: ChangePmecDeviceStateActivateRequest = {
  accountName: '0342351414-00001',
  deviceList: [
    {
      deviceIds: [
        {
          id: '99948099913024600001',
          kind: 'iccid',
        }
      ],
    }
  ],
  activate: {
    profile: 'HSS EsmProfile Enterprise 5G',
  },
};

try {
  const { result, ...httpResponse } = await mECController.changePmecDeviceStateActivate(body);
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
  "requestId": "c7b45cf2-cab1-4e42-82f8-20350f4c4ea3"
}
```


# Change Pmec Device State-Bulk Deactivate

```ts
async changePmecDeviceStateBulkDeactivate(
  body: ChangePmecDeviceStateBulkDeactivateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ChangeMecDeviceStateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ChangePmecDeviceStateBulkDeactivateRequest`](../../doc/models/change-pmec-device-state-bulk-deactivate-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ChangeMecDeviceStateResponse`](../../doc/models/change-mec-device-state-response.md)

## Example Usage

```ts
const body: ChangePmecDeviceStateBulkDeactivateRequest = {
  accountName: '0342351414-00001',
  deviceList: [
    {
      deviceIds: [
        {
          id: '99948099913031600000',
          kind: 'iccid',
        }
      ],
    },
    {
      deviceIds: [
        {
          id: '99948099913031700000',
          kind: 'iccid',
        }
      ],
    }
  ],
};

try {
  const { result, ...httpResponse } = await mECController.changePmecDeviceStateBulkDeactivate(body);
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
  "requestId": "c7b45cf2-cab1-4e42-82f8-20350f4c4ea3"
}
```


# Change Pmec Device Profile

```ts
async changePmecDeviceProfile(
  body: ChangePmecDeviceProfileRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ChangeMecDeviceProfileResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ChangePmecDeviceProfileRequest`](../../doc/models/change-pmec-device-profile-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ChangeMecDeviceProfileResponse`](../../doc/models/change-mec-device-profile-response.md)

## Example Usage

```ts
const body: ChangePmecDeviceProfileRequest = {
  accountName: '0342351414-00001',
  deviceList: [
    {
      deviceIds: [
        {
          id: '99948099913024600000',
          kind: 'iccid',
        }
      ],
    }
  ],
  newProfile: 'HSS EsmProfile Enterprise 5G internet',
};

try {
  const { result, ...httpResponse } = await mECController.changePmecDeviceProfile(body);
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
  "requestId": "c7b45cf2-cab1-4e42-82f8-20350f4c4ea3"
}
```


# Change Pmec Device I Paddress Bulk

```ts
async changePmecDeviceIPaddressBulk(
  body: ChangePmecDeviceStateBulkDeactivateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ChangeMecDeviceIPAddressResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ChangePmecDeviceStateBulkDeactivateRequest`](../../doc/models/change-pmec-device-state-bulk-deactivate-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ChangeMecDeviceIPAddressResponse`](../../doc/models/change-mec-device-ip-address-response.md)

## Example Usage

```ts
const body: ChangePmecDeviceStateBulkDeactivateRequest = {
  accountName: '0342351414-00001',
  deviceList: [
    {
      deviceIds: [
        {
          id: '99948099913031600000',
          kind: 'iccid',
        }
      ],
    },
    {
      deviceIds: [
        {
          id: '99948099913031700000',
          kind: 'iccid',
        }
      ],
    }
  ],
};

try {
  const { result, ...httpResponse } = await mECController.changePmecDeviceIPaddressBulk(body);
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
  "requestId": "c7b45cf2-cab1-4e42-82f8-20350f4c4ea3"
}
```


# Get MEC Performance Consent

```ts
async getMECPerformanceConsent(
  aname: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetMECPerformanceConsentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aname` | `string` | Template, Required | Account name. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetMECPerformanceConsentResponse`](../../doc/models/get-mec-performance-consent-response.md)

## Example Usage

```ts
const aname = '1533445500-00088';

try {
  const { result, ...httpResponse } = await mECController.getMECPerformanceConsent(aname);
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
  "consent": "false"
}
```

