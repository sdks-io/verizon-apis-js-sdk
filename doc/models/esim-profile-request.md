
# ESIM Profile Request

## Structure

`ESIMProfileRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `devices` | [`ESIMDeviceList[] \| undefined`](../../doc/models/esim-device-list.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `carrierName` | `string \| undefined` | Optional | - |
| `accountName` | `string \| undefined` | Optional | - |
| `servicePlan` | `string \| undefined` | Optional | - |
| `mdnZipCode` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "carrierName": "name of the mobile service provider",
  "accountName": "0000123456-00001",
  "servicePlan": "The service plan name (The value used for Consumer eSIM for Enterprise will be HybridESim)",
  "mdnZipCode": "five digit zip code",
  "devices": [
    {
      "deviceIds": [
        {
          "id": "id0",
          "kind": "kind8"
        }
      ]
    },
    {
      "deviceIds": [
        {
          "id": "id0",
          "kind": "kind8"
        }
      ]
    },
    {
      "deviceIds": [
        {
          "id": "id0",
          "kind": "kind8"
        }
      ]
    }
  ]
}
```

