
# 5g Biaccount Nameobject

## Structure

`M5gBiaccountNameobject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | - |
| `billingCycleEndDate` | `string \| undefined` | Optional | - |
| `carrierInformation` | [`M5gBiCarrierInformation[] \| undefined`](../../doc/models/5g-bi-carrier-information.md) | Optional | - |
| `connected` | `boolean \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `customFields` | [`M5gBikeyValue1[] \| undefined`](../../doc/models/5g-bikey-value-1.md) | Optional | - |
| `deviceIds` | [`M5gBideviceId1[] \| undefined`](../../doc/models/5g-bidevice-id-1.md) | Optional | - |
| `extendedAttributes` | [`M5gBikeyValue1[] \| undefined`](../../doc/models/5g-bikey-value-1.md) | Optional | - |
| `groupNames` | [`GroupName[] \| undefined`](../../doc/models/group-name.md) | Optional | - |
| `ipaddress` | `string \| undefined` | Optional | - |
| `lastActivationBy` | `string \| undefined` | Optional | - |
| `lastActivationDate` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "accountName": "0000123456-00001",
  "billingCycleEndDate": "11/10/2022 00:00:00",
  "connected": false,
  "createdAt": "10/20/2022 18:23:41",
  "ipAddress": "0.0.0.0",
  "lastActivationBy": "User Name",
  "lastActivationDate": "2022-11-02 T21:36:18Z",
  "carrierInformation": [
    {
      "carrierName": "carrierName4"
    },
    {
      "carrierName": "carrierName4"
    },
    {
      "carrierName": "carrierName4"
    }
  ]
}
```

