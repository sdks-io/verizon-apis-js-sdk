# Fixed Wireless Qualification

```ts
const fixedWirelessQualificationController = new FixedWirelessQualificationController(client);
```

## Class Name

`FixedWirelessQualificationController`


# Domestic 4 G and 5G Fixed Wireless Qualification

Use this query for Fixed Wireless Qualification of an address. Network types include: LTE, C-BAND and MMWAVE.

```ts
async domestic4GAnd5gFixedWirelessQualification(  body: GetWirelessCoverageRequestFWA,
requestOptions?: RequestOptions): Promise<ApiResponse<WNPRequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetWirelessCoverageRequestFWA`](../../doc/models/get-wireless-coverage-request-fwa.md) | Body, Required | Request for network coverage details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WNPRequestResponse`](../../doc/models/wnp-request-response.md)

## Example Usage

```ts
const body: GetWirelessCoverageRequestFWA = {
  accountName: '0000123456-00001',
  requestType: 'FWA',
  locationType: 'ADDRESS',
  locations: {
    addressList: [
      {
        addressLine1: 'street address',
        city: 'city',
        state: 'LA',
        country: 'USA',
        zip: '00000',
      }
    ],
  },
  networkTypesList: [
    {
      networkType: 'LTE',
    }
  ],
};

try {
  const { result, ...httpResponse } = await fixedWirelessQualificationController.domestic4GAnd5gFixedWirelessQualification(body);
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
  "requestId": "d1f08526-5443-4054-9a29-4456490ea9f8"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error response | [`WNPRestErrorResponseError`](../../doc/models/wnp-rest-error-response-error.md) |

