
# Billedusage List Request

Information required to associate a usage segmentation label with a device to retrieve billing.

## Structure

`BilledusageListRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | - |
| `labels` | [`LabelsList \| undefined`](../../doc/models/labels-list.md) | Optional | - |
| `devices` | [`DeviceList[] \| undefined`](../../doc/models/device-list.md) | Optional | - |
| `billingCycle` | [`BillingCycle \| undefined`](../../doc/models/billing-cycle.md) | Optional | - |

## Example (as JSON)

```json
{
  "accountName": "9231221278-99990",
  "labels": {
    "deviceIds": [
      {
        "name": "name8",
        "value": "value0"
      }
    ]
  },
  "devices": [
    {
      "deviceIds": [
        {
          "id": "id6",
          "kind": "imei"
        },
        {
          "id": "id7",
          "kind": "eid"
        },
        {
          "id": "id8",
          "kind": "esn"
        }
      ]
    },
    {
      "deviceIds": [
        {
          "id": "id7",
          "kind": "eid"
        }
      ]
    }
  ],
  "BillingCycle": {
    "year": "year0",
    "month": "month8"
  }
}
```

