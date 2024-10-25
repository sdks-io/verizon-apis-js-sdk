
# 5g Bidevice Detailsresponse

## Structure

`M5gBideviceDetailsresponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hasMoreData` | `boolean \| undefined` | Optional | - |
| `devices` | [`M5gBiaccountNameobject[] \| undefined`](../../doc/models/5g-biaccount-nameobject.md) | Optional | - |

## Example (as JSON)

```json
{
  "hasMoreData": false,
  "devices": [
    {
      "accountName": "accountName8",
      "billingCycleEndDate": "billingCycleEndDate4",
      "carrierInformation": [
        {
          "carrierName": "carrierName4"
        },
        {
          "carrierName": "carrierName4"
        }
      ],
      "connected": false,
      "createdAt": "createdAt8"
    },
    {
      "accountName": "accountName8",
      "billingCycleEndDate": "billingCycleEndDate4",
      "carrierInformation": [
        {
          "carrierName": "carrierName4"
        },
        {
          "carrierName": "carrierName4"
        }
      ],
      "connected": false,
      "createdAt": "createdAt8"
    },
    {
      "accountName": "accountName8",
      "billingCycleEndDate": "billingCycleEndDate4",
      "carrierInformation": [
        {
          "carrierName": "carrierName4"
        },
        {
          "carrierName": "carrierName4"
        }
      ],
      "connected": false,
      "createdAt": "createdAt8"
    }
  ]
}
```

