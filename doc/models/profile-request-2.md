
# Profile Request 2

## Structure

`ProfileRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `devices` | [`DeviceList2[] \| undefined`](../../doc/models/device-list-2.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `accountName` | `string \| undefined` | Optional | - |
| `carrierName` | `string \| undefined` | Optional | - |
| `reasonCode` | `string \| undefined` | Optional | - |
| `etfWaiver` | `boolean \| undefined` | Optional | **Default**: `true` |
| `checkFallbackProfile` | `boolean \| undefined` | Optional | **Default**: `false` |

## Example (as JSON)

```json
{
  "accountName": "0000123456-00001",
  "carrierName": "the name of the mobile service provider",
  "reasonCode": "a short code for the reason action was taken",
  "etfWaiver": true,
  "checkFallbackProfile": false,
  "devices": [
    {
      "ids": [
        {
          "id": "id7",
          "kind": "iccid"
        },
        {
          "id": "id8",
          "kind": "imei"
        }
      ]
    },
    {
      "ids": [
        {
          "id": "id8",
          "kind": "imei"
        },
        {
          "id": "id9",
          "kind": "eid"
        },
        {
          "id": "id0",
          "kind": "esn"
        }
      ]
    }
  ]
}
```

