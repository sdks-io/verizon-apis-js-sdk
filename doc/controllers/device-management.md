# Device Management

```ts
const deviceManagementController = new DeviceManagementController(client);
```

## Class Name

`DeviceManagementController`

## Methods

* [Activate Service for Devices](../../doc/controllers/device-management.md#activate-service-for-devices)
* [Add Devices](../../doc/controllers/device-management.md#add-devices)
* [Update Devices Contact Information](../../doc/controllers/device-management.md#update-devices-contact-information)
* [Update Devices Custom Fields](../../doc/controllers/device-management.md#update-devices-custom-fields)
* [Deactivate Service for Devices](../../doc/controllers/device-management.md#deactivate-service-for-devices)
* [Delete Deactivated Devices](../../doc/controllers/device-management.md#delete-deactivated-devices)
* [List Devices Information](../../doc/controllers/device-management.md#list-devices-information)
* [List Devices With Imei Iccid Mismatch](../../doc/controllers/device-management.md#list-devices-with-imei-iccid-mismatch)
* [Move Devices Within Accounts of Profile](../../doc/controllers/device-management.md#move-devices-within-accounts-of-profile)
* [Update Devices State](../../doc/controllers/device-management.md#update-devices-state)
* [Change Devices Service Plan](../../doc/controllers/device-management.md#change-devices-service-plan)
* [Suspend Service for Devices](../../doc/controllers/device-management.md#suspend-service-for-devices)
* [Restore Service for Suspended Devices](../../doc/controllers/device-management.md#restore-service-for-suspended-devices)
* [Check Devices Availability for Activation](../../doc/controllers/device-management.md#check-devices-availability-for-activation)
* [Retrieve Device Connection History](../../doc/controllers/device-management.md#retrieve-device-connection-history)
* [Update Devices Cost Center Code](../../doc/controllers/device-management.md#update-devices-cost-center-code)
* [Get Device Extended Diagnostic Information](../../doc/controllers/device-management.md#get-device-extended-diagnostic-information)
* [List Devices Provisioning History](../../doc/controllers/device-management.md#list-devices-provisioning-history)
* [List Current Devices PRL Version](../../doc/controllers/device-management.md#list-current-devices-prl-version)
* [Get Device Service Suspension Status](../../doc/controllers/device-management.md#get-device-service-suspension-status)
* [List Devices Usage History](../../doc/controllers/device-management.md#list-devices-usage-history)
* [Retrieve Aggregate Device Usage History](../../doc/controllers/device-management.md#retrieve-aggregate-device-usage-history)
* [Update Device Id](../../doc/controllers/device-management.md#update-device-id)
* [Device Upload](../../doc/controllers/device-management.md#device-upload)
* [Billed Usage Info](../../doc/controllers/device-management.md#billed-usage-info)
* [Usage Segmentation Label Association](../../doc/controllers/device-management.md#usage-segmentation-label-association)
* [Usage Segmentation Label Deletion](../../doc/controllers/device-management.md#usage-segmentation-label-deletion)
* [Activation Order Status](../../doc/controllers/device-management.md#activation-order-status)
* [Upload Device Identifier](../../doc/controllers/device-management.md#upload-device-identifier)


# Activate Service for Devices

If the devices do not already exist in the account, this API resource adds them before activation.

```ts
async activateServiceForDevices(
  body: CarrierActivateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CarrierActivateRequest`](../../doc/models/carrier-activate-request.md) | Body, Required | Request for activating a service on devices. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: CarrierActivateRequest = {
  accountName: '0868924207-00001',
  customFields: [
    {
      key: 'CustomField2',
      value: 'SuperVend',
    }
  ],
  devices: [
    {
      deviceIds: [
        {
          id: '990013907835573',
          kind: 'imei',
        },
        {
          id: '89141390780800784259',
          kind: 'iccid',
        }
      ],
    },
    {
      deviceIds: [
        {
          id: '990013907884259',
          kind: 'imei',
        },
        {
          id: '89141390780800735573',
          kind: 'iccid',
        }
      ],
    }
  ],
  groupName: '4G West',
  mdnZipCode: '98801',
  primaryPlaceOfUse: {
    address: {
      addressLine1: '1600 Pennsylvania Ave NW',
      city: 'Washington',
      state: 'DC',
      zip: '20500',
      country: 'USA',
    },
    customerName: {
      firstName: 'Zaffod',
      lastName: 'Beeblebrox',
      title: 'President',
    },
  },
  servicePlan: 'm2m_4G',
};

try {
  const { result, ...httpResponse } = await deviceManagementController.activateServiceForDevices(body);
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
  "requestId": "595f5c44-c31c-4552-8670-020a1545a84d"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Add Devices

Use this API if you want to manage some device settings before you are ready to activate service for the devices.

```ts
async addDevices(
  body: AddDevicesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AddDevicesResult[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AddDevicesRequest`](../../doc/models/add-devices-request.md) | Body, Required | Devices to add. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AddDevicesResult[]`](../../doc/models/add-devices-result.md)

## Example Usage

```ts
const body: AddDevicesRequest = {
  accountName: '0868924207-00001',
  customFields: [
    {
      key: 'CustomField2',
      value: 'SuperVend',
    }
  ],
  devicesToAdd: [
    {
      deviceIds: [
        {
          id: '990013907835573',
          kind: 'imei',
        },
        {
          id: '89141390780800784259',
          kind: 'iccid',
        }
      ],
    },
    {
      deviceIds: [
        {
          id: '990013907884259',
          kind: 'imei',
        },
        {
          id: '89141390780800735573',
          kind: 'iccid',
        }
      ],
    }
  ],
  groupName: 'West Region',
  state: 'preactive',
};

try {
  const { result, ...httpResponse } = await deviceManagementController.addDevices(body);
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
    "deviceIds": [
      {
        "id": "89148000000800784259",
        "kind": "iccid"
      }
    ],
    "response": "Success"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Update Devices Contact Information

Sends a CarrierService callback message for each device in the request when the contact information has been changed, or if there was a problem and the change could not be completed.

```ts
async updateDevicesContactInformation(
  body: ContactInfoUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ContactInfoUpdateRequest`](../../doc/models/contact-info-update-request.md) | Body, Required | Request to update contact information for devices. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: ContactInfoUpdateRequest = {
  accountName: '0212345678-00001',
  devices: [
    {
      deviceIds: [
        {
          id: '19110173057',
          kind: 'ESN',
        },
        {
          id: '19110173057',
          kind: 'ESN',
        }
      ],
    }
  ],
  primaryPlaceOfUse: { 'address': { 'addressLine1': '9868 Scranton Rd', 'addressLine2': 'Suite A', 'city': 'San Diego', 'state': 'CA', 'country': 'USA', 'zip': '92121', 'zip4': '0001', 'phone': '1234567890', 'phoneType': 'H', 'emailAddress': 'zaffod@theinternet.com' }, 'customerName': { 'firstName': 'Zaffod', 'lastName': 'Beeblebrox', 'middleName': 'P', 'title': 'President', 'suffix': 'I' } },
};

try {
  const { result, ...httpResponse } = await deviceManagementController.updateDevicesContactInformation(body);
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
  "requestId": "24da9f9a-d110-4a54-86b4-93fb76aab83c"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Update Devices Custom Fields

Sends a CarrierService callback message for each device in the request when the custom fields have been changed, or if there was a problem and the change could not be completed.

```ts
async updateDevicesCustomFields(
  body: CustomFieldsUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CustomFieldsUpdateRequest`](../../doc/models/custom-fields-update-request.md) | Body, Required | Request to update custom field of devices. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: CustomFieldsUpdateRequest = {
  customFieldsToUpdate: [
    {
      key: 'CustomField1',
      value: 'West Region',
    },
    {
      key: 'CustomField2',
      value: 'Distribution',
    }
  ],
  devices: [
    {
      deviceIds: [
        {
          id: '89148000000800139708',
          kind: 'iccid',
        }
      ],
    }
  ],
};

try {
  const { result, ...httpResponse } = await deviceManagementController.updateDevicesCustomFields(body);
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
  "requestId": "595f5c44-c31c-4552-8670-020a1545a84d"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Deactivate Service for Devices

Deactivating service for a device may result in an early termination fee (ETF) being charged to the account, depending on the terms of the contract with Verizon. If your contract allows ETF waivers and if you want to use one for a particular deactivation, set the etfWaiver value to True.

```ts
async deactivateServiceForDevices(
  body: CarrierDeactivateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CarrierDeactivateRequest`](../../doc/models/carrier-deactivate-request.md) | Body, Required | Request to deactivate service for one or more devices. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: CarrierDeactivateRequest = {
  devices: [
    {
      deviceIds: [
        {
          id: '20-digit ICCID',
          kind: 'iccid',
        }
      ],
    }
  ],
  etfWaiver: true,
  reasonCode: 'FF',
};

try {
  const { result, ...httpResponse } = await deviceManagementController.deactivateServiceForDevices(body);
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
  "requestId": "595f5c44-c31c-4552-8670-020a1545a84d"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Delete Deactivated Devices

Use this API to remove unneeded devices from an account.

```ts
async deleteDeactivatedDevices(
  body: DeleteDevicesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteDevicesResult[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeleteDevicesRequest`](../../doc/models/delete-devices-request.md) | Body, Required | Devices to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeleteDevicesResult[]`](../../doc/models/delete-devices-result.md)

## Example Usage

```ts
const body: DeleteDevicesRequest = {
  devicesToDelete: [
    {
      deviceIds: [
        {
          id: '09005470263',
          kind: 'esn',
        }
      ],
    },
    {
      deviceIds: [
        {
          id: '85000022411113460014',
          kind: 'iccid',
        }
      ],
    },
    {
      deviceIds: [
        {
          id: '85000022412313460016',
          kind: 'iccid',
        }
      ],
    }
  ],
};

try {
  const { result, ...httpResponse } = await deviceManagementController.deleteDeactivatedDevices(body);
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
    "deviceIds": {
      "id": "09005470263",
      "kind": "esn"
    },
    "status": "Success"
  },
  {
    "deviceIds": {
      "id": "85000022411113460014",
      "kind": "iccid"
    },
    "status": "Success"
  },
  {
    "deviceIds": [
      {
        "id": "85000022412313460016",
        "kind": "iccid"
      },
      {
        "id": "09005470263",
        "kind": "esn"
      }
    ],
    "status": "Failed",
    "message": "The device is not in deactive state."
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# List Devices Information

Returns information about a single device or information about all devices that match the given parameters. Returned information includes device provisioning state, service plan, MDN, MIN, and IP address.

```ts
async listDevicesInformation(
  body: AccountDeviceListRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountDeviceListResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AccountDeviceListRequest`](../../doc/models/account-device-list-request.md) | Body, Required | Device information query. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AccountDeviceListResult`](../../doc/models/account-device-list-result.md)

## Example Usage

```ts
const body: AccountDeviceListRequest = {
  deviceId: {
    id: '20-digit ICCID',
    kind: 'iccid',
  },
};

try {
  const { result, ...httpResponse } = await deviceManagementController.listDevicesInformation(body);
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
  "hasMoreData": false,
  "devices": [
    {
      "accountName": "0000123456-00001",
      "billingCycleEndDate": "2020-05-09T20:00:00-04:00",
      "carrierInformations": [
        {
          "carrierName": "Verizon Wireless",
          "servicePlan": "m2m4G",
          "state": "active"
        }
      ],
      "connected": false,
      "createdAt": "2019-08-07T10:42:15-04:00",
      "deviceIds": [
        {
          "id": "10-digit MDN",
          "kind": "mdn"
        },
        {
          "id": "15-digit IMEI",
          "kind": "imei"
        }
      ],
      "groupNames": [
        "southwest"
      ],
      "ipAddress": "0.0.0.0",
      "lastActivationBy": "Joe Q Public",
      "lastActivationDate": "2019-08-07T10:42:34-04:00",
      "lastConnectionDate": "2020-03-12T04:23:37-04:00"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# List Devices With Imei Iccid Mismatch

Returns a list of all 4G devices with an ICCID (SIM) that was not activated with the expected IMEI (hardware) during a specified time frame.

```ts
async listDevicesWithImeiIccidMismatch(
  body: DeviceMismatchListRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceMismatchListResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeviceMismatchListRequest`](../../doc/models/device-mismatch-list-request.md) | Body, Required | Request to list devices with mismatched IMEIs and ICCIDs. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceMismatchListResult`](../../doc/models/device-mismatch-list-result.md)

## Example Usage

```ts
const body: DeviceMismatchListRequest = {
  devices: [
    {
      deviceIds: [
        {
          id: '8914800000080078',
          kind: 'ICCID',
        },
        {
          id: '5096300587',
          kind: 'MDN',
        }
      ],
    }
  ],
  filter: {
    earliest: '2020-05-01T15:00:00-08:00Z',
    latest: '2020-07-30T15:00:00-08:00Z',
  },
  accountName: '0342077109-00001',
};

try {
  const { result, ...httpResponse } = await deviceManagementController.listDevicesWithImeiIccidMismatch(body);
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
  "devices": [
    {
      "accountName": "0212398765-00001",
      "mdn": "5096300587",
      "activationDate": "2011-01-21T10:55:27-08:00",
      "iccid": "89148000000800784259",
      "preImei": "990003420535573",
      "postImei": "987603420573553",
      "simOtaDate": "2017-12-01T16:00:00-08:00"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Move Devices Within Accounts of Profile

Move active devices from one billing account to another within a customer profile.

```ts
async moveDevicesWithinAccountsOfProfile(
  body: MoveDeviceRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MoveDeviceRequest`](../../doc/models/move-device-request.md) | Body, Required | Request to move devices between accounts. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: MoveDeviceRequest = {
  accountName: '0212345678-00001',
  devices: [
    {
      deviceIds: [
        {
          id: '19110173057',
          kind: 'ESN',
        }
      ],
    }
  ],
  servicePlan: 'M2M5GB',
};

try {
  const { result, ...httpResponse } = await deviceManagementController.moveDevicesWithinAccountsOfProfile(body);
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
  "requestId": "ec682a8b-e288-4806-934d-24e7a59ed889"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Update Devices State

Changes the provisioning state of one or more devices to a specified customer-defined service and state.

```ts
async updateDevicesState(
  body: GoToStateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GoToStateRequest`](../../doc/models/go-to-state-request.md) | Body, Required | Request to change device state to one defined by the user. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: GoToStateRequest = {
  devices: [
    {
      deviceIds: [
        {
          id: '990013907835573',
          kind: 'imei',
        },
        {
          id: '89141390780800784259',
          kind: 'iccid',
        }
      ],
    },
    {
      deviceIds: [
        {
          id: '990013907884259',
          kind: 'imei',
        },
        {
          id: '89141390780800735573',
          kind: 'iccid',
        }
      ],
    }
  ],
  serviceName: 'My Service',
  stateName: 'My State',
  servicePlan: '87641',
  mdnZipCode: '94203',
  publicIpRestriction: 'unrestricted',
  groupName: '4G West',
  primaryPlaceOfUse: {
    address: {
      addressLine1: '1600 Pennsylvania Ave NW',
      city: 'Washington',
      state: 'DC',
      zip: '20500',
      country: 'USA',
    },
    customerName: {
      firstName: 'Zaffod',
      lastName: 'Beeblebrox',
      title: 'President',
    },
  },
};

try {
  const { result, ...httpResponse } = await deviceManagementController.updateDevicesState(body);
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
  "requestId": "595f5c44-c31c-4552-8670-020a1545a84d"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Change Devices Service Plan

Changes the service plan for one or more devices.

```ts
async changeDevicesServicePlan(
  body: ServicePlanUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ServicePlanUpdateRequest`](../../doc/models/service-plan-update-request.md) | Body, Required | Request to change device service plan. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: ServicePlanUpdateRequest = {
  devices: [
    {
      deviceIds: [
        {
          id: 'A100003685E561',
          kind: 'meid',
        }
      ],
    }
  ],
  servicePlan: 'new_service_plan_code',
};

try {
  const { result, ...httpResponse } = await deviceManagementController.changeDevicesServicePlan(body);
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
  "requestId": "c8de7c1d-59b9-4cf3-b969-db76cb2ce509"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Suspend Service for Devices

Suspends service for one or more devices.

```ts
async suspendServiceForDevices(
  body: CarrierActionsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CarrierActionsRequest`](../../doc/models/carrier-actions-request.md) | Body, Required | Request to suspend service for one or more devices. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: CarrierActionsRequest = {
  devices: [
    {
      deviceIds: [
        {
          id: '89148000000800139708',
          kind: 'iccid',
        }
      ],
    }
  ],
};

try {
  const { result, ...httpResponse } = await deviceManagementController.suspendServiceForDevices(body);
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
  "requestId": "595f5c44-c31c-4552-8670-020a1545a84d"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Restore Service for Suspended Devices

Restores service to one or more suspended devices.

```ts
async restoreServiceForSuspendedDevices(
  body: CarrierActionsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CarrierActionsRequest`](../../doc/models/carrier-actions-request.md) | Body, Required | Request to restore services of one or more suspended devices. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: CarrierActionsRequest = {
  devices: [
    {
      deviceIds: [
        {
          id: '89148000000800139708',
          kind: 'iccid',
        }
      ],
    }
  ],
};

try {
  const { result, ...httpResponse } = await deviceManagementController.restoreServiceForSuspendedDevices(body);
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
  "requestId": "595f5c44-c31c-4552-8670-020a1545a84d"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Check Devices Availability for Activation

Checks whether specified devices are registered by the manufacturer with the Verizon network and are available to be activated.

```ts
async checkDevicesAvailabilityForActivation(
  body: DeviceActivationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeviceActivationRequest`](../../doc/models/device-activation-request.md) | Body, Required | Request to check if devices can be activated or not. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: DeviceActivationRequest = {
  accountName: '0212345678-00001',
  devices: [
    {
      deviceIds: [
        {
          id: 'A100008385E561',
          kind: 'meid',
        }
      ],
    }
  ],
};

try {
  const { result, ...httpResponse } = await deviceManagementController.checkDevicesAvailabilityForActivation(body);
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
  "requestId": "595f5c44-c31c-4552-8670-020a1545a84d"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Retrieve Device Connection History

Each response includes a maximum of 500 records. To obtain more records, you can call the API multiple times, adjusting the earliest value each time to start where the previous request finished.

```ts
async retrieveDeviceConnectionHistory(
  body: DeviceConnectionListRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectionHistoryResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeviceConnectionListRequest`](../../doc/models/device-connection-list-request.md) | Body, Required | Query to retrieve device connection history. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConnectionHistoryResult`](../../doc/models/connection-history-result.md)

## Example Usage

```ts
const body: DeviceConnectionListRequest = {
  deviceId: {
    id: '89141390780800784259',
    kind: 'iccid',
  },
  earliest: '2015-09-16T00:00:01Z',
  latest: '2010-09-18T00:00:01Z',
};

try {
  const { result, ...httpResponse } = await deviceManagementController.retrieveDeviceConnectionHistory(body);
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
  "connectionHistory": [
    {
      "connectionEventAttributes": [
        {
          "key": "BytesUsed",
          "value": "0"
        },
        {
          "key": "Event",
          "value": "Start"
        }
      ],
      "extendedAttributes": [],
      "occurredAt": "2015-12-17T14:12:36-05:00"
    },
    {
      "connectionEventAttributes": [
        {
          "key": "BytesUsed",
          "value": "419863234"
        },
        {
          "key": "Event",
          "value": "Stop"
        },
        {
          "key": "Msisdn",
          "value": "15086303371"
        }
      ],
      "extendedAttributes": [],
      "occurredAt": "2015-12-19T01:20:00-05:00"
    }
  ],
  "hasMoreData": false
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Update Devices Cost Center Code

Changes or removes the CostCenterCode value or customer name and address (Primary Place of Use) for one or more devices.

```ts
async updateDevicesCostCenterCode(
  body: DeviceCostCenterRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeviceCostCenterRequest`](../../doc/models/device-cost-center-request.md) | Body, Required | Request to update cost center code value for one or more devices. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: DeviceCostCenterRequest = {
  costCenter: 'cc12345',
  devices: [
    {
      deviceIds: [
        {
          id: '89148000000800139708',
          kind: 'iccid',
        }
      ],
    }
  ],
};

try {
  const { result, ...httpResponse } = await deviceManagementController.updateDevicesCostCenterCode(body);
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
  "requestId": "595f5c44-c31c-4552-8670-020a1545a84d"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Get Device Extended Diagnostic Information

Returns extended diagnostic information about a specified device, including connectivity, provisioning, billing and location status.

```ts
async getDeviceExtendedDiagnosticInformation(
  body: DeviceExtendedDiagnosticsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceExtendedDiagnosticsResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeviceExtendedDiagnosticsRequest`](../../doc/models/device-extended-diagnostics-request.md) | Body, Required | Request to query extended diagnostics information for a device. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceExtendedDiagnosticsResult`](../../doc/models/device-extended-diagnostics-result.md)

## Example Usage

```ts
const body: DeviceExtendedDiagnosticsRequest = {
  accountName: '1223334444-00001',
  deviceList: [
    {
      id: '10-digit MDN',
      kind: 'mdn',
    }
  ],
};

try {
  const { result, ...httpResponse } = await deviceManagementController.getDeviceExtendedDiagnosticInformation(body);
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
    {
      "categoryName": "Connectivity",
      "extendedAttributes": [
        {
          "key": "Connected",
          "value": "false"
        }
      ]
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# List Devices Provisioning History

Returns the provisioning history of a specified device during a specified time period.

```ts
async listDevicesProvisioningHistory(
  body: DeviceProvisioningHistoryListRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceProvisioningHistoryListResult[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeviceProvisioningHistoryListRequest`](../../doc/models/device-provisioning-history-list-request.md) | Body, Required | Query to obtain device provisioning history. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceProvisioningHistoryListResult[]`](../../doc/models/device-provisioning-history-list-result.md)

## Example Usage

```ts
const body: DeviceProvisioningHistoryListRequest = {
  deviceId: {
    id: '89141390780800784259',
    kind: 'iccid',
  },
  earliest: '2015-09-16T00:00:01Z',
  latest: '2015-09-18T00:00:01Z',
};

try {
  const { result, ...httpResponse } = await deviceManagementController.listDevicesProvisioningHistory(body);
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
    "provisioningHistory": [
      {
        "occurredAt": "2015-12-17T13:56:13-05:00",
        "status": "Success",
        "eventBy": "Harry Potter",
        "eventType": "Activation Confirmed",
        "servicePlan": "Tablet5GB",
        "mdn": "",
        "msisdn": "15086303371",
        "extendedAttributes": []
      }
    ],
    "hasMoreData": false
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# List Current Devices PRL Version

4G and GSM devices do not have a PRL.

```ts
async listCurrentDevicesPRLVersion(
  body: DevicePrlListRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DevicePrlListRequest`](../../doc/models/device-prl-list-request.md) | Body, Required | Request to query device PRL. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: DevicePrlListRequest = {
  accountName: '101234-0001',
  groupName: 'West Region',
  servicePlan: '3G 2MB',
};

try {
  const { result, ...httpResponse } = await deviceManagementController.listCurrentDevicesPRLVersion(body);
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
  "requestId": "595f5c44-c31c-4552-8670-020a1545a84d"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Get Device Service Suspension Status

Returns DeviceSuspensionStatus callback messages containing the current device state and information on how many days a device has been suspended and can continue to be suspended.

```ts
async getDeviceServiceSuspensionStatus(
  body: DeviceSuspensionStatusRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeviceSuspensionStatusRequest`](../../doc/models/device-suspension-status-request.md) | Body, Required | Request to obtain service suspenstion status for a device. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: DeviceSuspensionStatusRequest = {
  filter: {
    groupName: 'suspended devices',
  },
  accountName: '1223334444-00001',
};

try {
  const { result, ...httpResponse } = await deviceManagementController.getDeviceServiceSuspensionStatus(body);
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
  "requestId": "904dcdc6-a590-45e4-ac76-403306f6d883"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# List Devices Usage History

Returns the network data usage history of a device during a specified time period.

```ts
async listDevicesUsageHistory(
  body: DeviceUsageListRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceUsageListResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeviceUsageListRequest`](../../doc/models/device-usage-list-request.md) | Body, Required | Request to obtain usage history for a specific device. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceUsageListResult`](../../doc/models/device-usage-list-result.md)

## Example Usage

```ts
const body: DeviceUsageListRequest = {
  earliest: '2018-03-20T00:00:01Z',
  latest: '2020-12-31T00:00:01Z',
};

try {
  const { result, ...httpResponse } = await deviceManagementController.listDevicesUsageHistory(body);
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
  "hasMoreData": false,
  "usageHistory": [
    {
      "bytesUsed": 4096,
      "extendedAttributes": [
        {
          "key": "MoSms",
          "value": "0"
        }
      ],
      "smsUsed": 0,
      "source": "Raw Usage",
      "timestamp": "2020-12-01T00:00:00Z"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Retrieve Aggregate Device Usage History

The information is returned in a callback response, so you must register a URL for DeviceUsage callback messages using the POST /callbacks API.

```ts
async retrieveAggregateDeviceUsageHistory(
  body: DeviceAggregateUsageListRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeviceAggregateUsageListRequest`](../../doc/models/device-aggregate-usage-list-request.md) | Body, Required | A request to retrieve aggregated device usage history information. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: DeviceAggregateUsageListRequest = {
  deviceIds: [
    {
      id: '84258000000891490087',
      kind: 'ICCID',
    }
  ],
  accountName: '9992330389-00001',
  startTime: '2021-08-01T06:00:00+00:00',
  endTime: '2021-08-30T06:00:00+00:00',
};

try {
  const { result, ...httpResponse } = await deviceManagementController.retrieveAggregateDeviceUsageHistory(body);
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
  "requestId": "1631e200-7398-4609-b1f8-398341229176"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Update Device Id

Changes the identifier of a 3G or 4G device to match hardware changes made for a line of service. Use this request to transfer the line of service and the MDN to new hardware, or to change the MDN.

```ts
async updateDeviceId(
  serviceType: string,
  body: ChangeDeviceIdRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceType` | `string` | Template, Required | Identifier type. |
| `body` | [`ChangeDeviceIdRequest`](../../doc/models/change-device-id-request.md) | Body, Required | Request to update device id. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const serviceType = 'serviceType6';

const body: ChangeDeviceIdRequest = {
  change4gOption: 'ChangeICCID',
  deviceIds: [
    {
      id: '42590078891480000008',
      kind: 'iccid',
    }
  ],
  deviceIdsTo: [
    {
      id: '89148000000842590078',
      kind: 'iccid',
    }
  ],
  servicePlan: '4G 2GB',
  zipCode: '98802',
};

try {
  const { result, ...httpResponse } = await deviceManagementController.updateDeviceId(
    serviceType,
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
  "requestId": "a28892ea-6503-4aa7-bfa2-4cd45d42f61b"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Device Upload

This corresponds to the M2M-MC SOAP interface, `DeviceUploadService`.

```ts
async deviceUpload(
  body: DeviceUploadRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeviceUploadRequest`](../../doc/models/device-upload-request.md) | Body, Required | Device Upload Query |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RequestResponse`](../../doc/models/request-response.md)

## Example Usage

```ts
const body: DeviceUploadRequest = {
  accountName: '1223334444-00001',
  devices: [
    {
      deviceIds: [
        {
          id: '15-digit IMEI',
          kind: KindEnum.Imei,
        }
      ],
    },
    {
      deviceIds: [
        {
          id: '15-digit IMEI',
          kind: KindEnum.Imei,
        }
      ],
    }
  ],
  emailAddress: 'bob@mycompany.com',
  deviceSku: 'VZW123456',
  uploadType: 'IMEI',
};

try {
  const { result, ...httpResponse } = await deviceManagementController.deviceUpload(body);
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


# Billed Usage Info

Gets billed usage for for either multiple devices or an entire billing account.

```ts
async billedUsageInfo(
  body: BilledusageListRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BilledusageListRequest`](../../doc/models/billedusage-list-request.md) | Body, Required | Request to list devices with mismatched IMEIs and ICCIDs. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: BilledusageListRequest = {
  accountName: '0342077109-00001',
  devices: [
    {
      deviceIds: [
        {
          id: '8914800000080078',
          kind: KindEnum.Iccid,
        },
        {
          id: '5096300587',
          kind: KindEnum.Eid,
        }
      ],
    }
  ],
};

try {
  const { result, ...httpResponse } = await deviceManagementController.billedUsageInfo(body);
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
  "requestId": "595f5c44-c31c-4552-8670-020a1545a84d"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Usage Segmentation Label Association

Allows you to associate your own usage segmentation label with a device.

```ts
async usageSegmentationLabelAssociation(
  body: AssociateLabelRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AssociateLabelRequest`](../../doc/models/associate-label-request.md) | Body, Required | Request to associate a label to a device. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: AssociateLabelRequest = {
  accountName: '1223334444-00001',
};

try {
  const { result, ...httpResponse } = await deviceManagementController.usageSegmentationLabelAssociation(body);
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
  "requestId": "ec682a8b-e288-4806-934d-24e7a59ed889"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Usage Segmentation Label Deletion

Allow customers to remove the associated label from a device.

```ts
async usageSegmentationLabelDeletion(
  accountName: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Query, Required | The numeric name of the account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const accountName = '0000123456-00001';

try {
  const { result, ...httpResponse } = await deviceManagementController.usageSegmentationLabelDeletion(accountName);
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
  "requestId": "ec682a8b-e288-4806-934d-24e7a59ed889"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Activation Order Status

Uploads and activates device identifiers and SKUs for new devices from OEMs to Verizon.

```ts
async activationOrderStatus(
  body: UploadsActivatesDeviceRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UploadsActivatesDeviceRequest`](../../doc/models/uploads-activates-device-request.md) | Body, Required | Request to Uploads and activates device. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: UploadsActivatesDeviceRequest = {
  accountName: '1223334444-00001',
  emailAddress: 'bob@mycompany.com',
  deviceSku: 'VZW123456',
  uploadType: 'IMEI ICCID Pair',
  servicePlan: '15MBShr',
  mdnZipCode: '92222',
  devices: [
    {
      deviceIds: [
        {
          id: '990013907835573',
          kind: KindEnum.Imei,
        },
        {
          id: '89141390780800784259',
          kind: KindEnum.Iccid,
        }
      ],
    }
  ],
  carrierIpPoolName: '',
};

try {
  const { result, ...httpResponse } = await deviceManagementController.activationOrderStatus(body);
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
  "requestId": "ec682a8b-e288-4806-934d-24e7a59ed889"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Upload Device Identifier

Checks the status of an activation order and lists where the order is in the provisioning process.

```ts
async uploadDeviceIdentifier(
  body: CheckOrderStatusRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CheckOrderStatusRequest`](../../doc/models/check-order-status-request.md) | Body, Required | The request body identifies the device and reporting period that you want included in the report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceManagementResult`](../../doc/models/device-management-result.md)

## Example Usage

```ts
const body: CheckOrderStatusRequest = {
  accountName: '4Gpublicaccount ',
  devices: [
    {
      deviceIds: [
        {
          id: '20112019672551234613',
          kind: KindEnum.Iccid,
        }
      ],
    }
  ],
  orderRequestId: ' f55fea16-3664-4a32-ae9d-c0cbe3eedf1d ',
};

try {
  const { result, ...httpResponse } = await deviceManagementController.uploadDeviceIdentifier(body);
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |

