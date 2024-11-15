# PWN

```ts
const pWNController = new PWNController(client);
```

## Class Name

`PWNController`

## Methods

* [KPI List](../../doc/controllers/pwn.md#kpi-list)
* [Get Profile List](../../doc/controllers/pwn.md#get-profile-list)
* [Change PWN Device State-Activate](../../doc/controllers/pwn.md#change-pwn-device-state-activate)
* [Change PWN Device State-Deactivate](../../doc/controllers/pwn.md#change-pwn-device-state-deactivate)
* [Change PWN Device Profile](../../doc/controllers/pwn.md#change-pwn-device-profile)
* [Change PWN Device IPaddress](../../doc/controllers/pwn.md#change-pwn-device-ipaddress)
* [Get PWN Performance Consent](../../doc/controllers/pwn.md#get-pwn-performance-consent)


# KPI List

```ts
async kPIList(  aname: string,
requestOptions?: RequestOptions): Promise<ApiResponse<KPIInfoList>>
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
  const { result, ...httpResponse } = await pWNController.kPIList(aname);
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
async getProfileList(  aname: string,
requestOptions?: RequestOptions): Promise<ApiResponse<PWNProfileList>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aname` | `string` | Template, Required | Account name. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PWNProfileList`](../../doc/models/pwn-profile-list.md)

## Example Usage

```ts
const aname = '0342351414-00001';

try {
  const { result, ...httpResponse } = await pWNController.getProfileList(aname);
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


# Change PWN Device State-Activate

```ts
async changePWNDeviceStateActivate(  body: ChangePWNDeviceStateActivateRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<ChangePWNDeviceStateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ChangePWNDeviceStateActivateRequest`](../../doc/models/change-pwn-device-state-activate-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ChangePWNDeviceStateResponse`](../../doc/models/change-pwn-device-state-response.md)

## Example Usage

```ts
const body: ChangePWNDeviceStateActivateRequest = {
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
  const { result, ...httpResponse } = await pWNController.changePWNDeviceStateActivate(body);
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


# Change PWN Device State-Deactivate

```ts
async changePWNDeviceStateDeactivate(  body: ChangePWNDeviceStateDeactivateRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<ChangePWNDeviceStateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ChangePWNDeviceStateDeactivateRequest`](../../doc/models/change-pwn-device-state-deactivate-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ChangePWNDeviceStateResponse`](../../doc/models/change-pwn-device-state-response.md)

## Example Usage

```ts
const body: ChangePWNDeviceStateDeactivateRequest = {
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
  const { result, ...httpResponse } = await pWNController.changePWNDeviceStateDeactivate(body);
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


# Change PWN Device Profile

```ts
async changePWNDeviceProfile(  body: ChangePWNDeviceProfileRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<ChangePWNDeviceProfileResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ChangePWNDeviceProfileRequest`](../../doc/models/change-pwn-device-profile-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ChangePWNDeviceProfileResponse`](../../doc/models/change-pwn-device-profile-response.md)

## Example Usage

```ts
const body: ChangePWNDeviceProfileRequest = {
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
  const { result, ...httpResponse } = await pWNController.changePWNDeviceProfile(body);
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


# Change PWN Device IPaddress

```ts
async changePWNDeviceIpaddress(  body: ChangePWNDeviceIpaddressRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<ChangePWNDeviceIpaddressResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ChangePWNDeviceIpaddressRequest`](../../doc/models/change-pwn-device-ipaddress-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ChangePWNDeviceIpaddressResponse`](../../doc/models/change-pwn-device-ipaddress-response.md)

## Example Usage

```ts
const body: ChangePWNDeviceIpaddressRequest = {
  accountName: '0342351414-00001',
  deviceList: [
    {
      deviceIds: [
        {
          id: '99948099913024600000',
          kind: 'iccid',
        }
      ],
      ipaddress: '10.3.4.5',
    },
    {
      deviceIds: [
        {
          id: '999480500019111000001',
          kind: 'iccid',
        }
      ],
      ipaddress: '10.4.5.7',
    }
  ],
};

try {
  const { result, ...httpResponse } = await pWNController.changePWNDeviceIpaddress(body);
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


# Get PWN Performance Consent

```ts
async getPWNPerformanceConsent(  aname: string,
requestOptions?: RequestOptions): Promise<ApiResponse<GetPWNPerformanceConsentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aname` | `string` | Template, Required | Account name. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetPWNPerformanceConsentResponse`](../../doc/models/get-pwn-performance-consent-response.md)

## Example Usage

```ts
const aname = '1533445500-00088';

try {
  const { result, ...httpResponse } = await pWNController.getPWNPerformanceConsent(aname);
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

