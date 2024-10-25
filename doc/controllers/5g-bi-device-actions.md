# 5G BI Device Actions

```ts
const m5gBIDeviceActionsController = new M5gBIDeviceActionsController(client);
```

## Class Name

`M5gBIDeviceActionsController`

## Methods

* [Business Internetlist Device Information](../../doc/controllers/5g-bi-device-actions.md#business-internetlist-device-information)
* [Business Internetactivate Using POST](../../doc/controllers/5g-bi-device-actions.md#business-internetactivate-using-post)
* [Business Internet Serviceplanchange](../../doc/controllers/5g-bi-device-actions.md#business-internet-serviceplanchange)


# Business Internetlist Device Information

Uses the decive's Integrated Circuit Card Identification Number (ICCID) to retrive and display the device's properties.

```ts
async businessInternetlistDeviceInformation(  body: M5gBideviceId,
requestOptions?: RequestOptions): Promise<ApiResponse<M5gBideviceDetailsresponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`M5gBideviceId`](../../doc/models/5g-bidevice-id.md) | Body, Required | Device Profile Query |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`M5gBideviceDetailsresponse`](../../doc/models/5g-bidevice-detailsresponse.md)

## Example Usage

```ts
const body: M5gBideviceId = {
  deviceId: {
    id: '20-digit ICCID',
    kind: 'iccid',
  },
};

try {
  const { result, ...httpResponse } = await m5gBIDeviceActionsController.businessInternetlistDeviceInformation(body);
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
| Default | Error response | [`M5gBiRestErrorResponseError`](../../doc/models/5g-bi-rest-error-response-error.md) |


# Business Internetactivate Using POST

Uses the device's ICCID and IMEI to activate service.

```ts
async businessInternetactivateUsingPOST(  body: M5gBiactivateRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<M5gBiRequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`M5gBiactivateRequest`](../../doc/models/5g-biactivate-request.md) | Body, Required | Activate 5G BI service. Defining <code>publicIpRestriction</code> as "Unrestricted" or "Restricted" is required for activating as Public Static. Leave  <code>publicIpRestriction</code> undefined to activate as Public Dynamic. Removing <code>publicIpRestriction</code> from the request will activate as Mobile Private Network (MPN). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`M5gBiRequestResponse`](../../doc/models/5g-bi-request-response.md)

## Example Usage

```ts
const body: M5gBiactivateRequest = {
  accountName: '0000123456-00001',
  servicePlan: 'service plan name',
  deviceListWithServiceAddress: [
    {
      deviceId: [
        {
          id: '15-digit IMEI',
          kind: 'imei',
        },
        {
          id: '20-digit ICCID',
          kind: 'iccid',
        }
      ],
    },
    {
      primaryPlaceofuse: {
        address: {
          addressLine1: 'street number and name',
          city: 'city of address',
          state: '2-letter state ID (conforms to ISO 3166-2)',
          zip: '5-digit ZIP code',
          zip4: 'the +4 digits used for ZIP codes',
          phone: 'a 10-digit phone number',
          phoneType: 'W',
        },
        customerName: {
          firstName: 'First name',
          lastName: 'Surname or Last Name',
          middleName: 'middle name or initial',
          title: 'Mr. or Ms.',
          suffex: 'Dr or Esq',
        },
      },
    }
  ],
  publicIpRestriction: 'Unrestricted',
  carrierName: 'Verizon Wireless',
  mdnZipCode: 'the 5-digit ZIP code of the Mobile Directory Number (MDN)',
};

try {
  const { result, ...httpResponse } = await m5gBIDeviceActionsController.businessInternetactivateUsingPOST(body);
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
| Default | Error response | [`M5gBiRestErrorResponseError`](../../doc/models/5g-bi-rest-error-response-error.md) |


# Business Internet Serviceplanchange

Change a device's service plan to use 5G BI.

```ts
async businessInternetServiceplanchange(  body: M5gBichangeRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<M5gBiRequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`M5gBichangeRequest`](../../doc/models/5g-bichange-request.md) | Body, Required | This endpoint is for use when changing a device's service plan to a 5G BI service plan. The service plan can change for an active device up to four times per month but will require address validation for each change. The service plan cannot be changed for a device while its service is suspended. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`M5gBiRequestResponse`](../../doc/models/5g-bi-request-response.md)

## Example Usage

```ts
const body: M5gBichangeRequest = {
  accountName: '0000123456-00001',
  servicePlan: '5G BI service plan name being changed to',
  deviceListWithServiceAddress: [
    {
      deviceId: [
        {
          id: '15-digit IMEI',
          kind: 'imei',
        }
      ],
    },
    {
      primaryPlaceofuse: {},
    }
  ],
  currentServicePlan: 'Name of the plan being changed from',
};

try {
  const { result, ...httpResponse } = await m5gBIDeviceActionsController.businessInternetServiceplanchange(body);
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
| Default | Error response | [`M5gBiRestErrorResponseError`](../../doc/models/5g-bi-rest-error-response-error.md) |

