
# Profile Change State Request

## Structure

`ProfileChangeStateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `devices` | [`DeviceList[]`](../../doc/models/device-list.md) | Required | - |
| `accountName` | `string` | Required | - |
| `smsrOid` | `string` | Required | - |

## Example (as JSON)

```json
{
  "devices": [
    {
      "deviceIds": [
        {
          "id": "id0",
          "kind": "kind8"
        }
      ]
    }
  ],
  "accountName": "1223334444-00001",
  "smsrOid": "1.3.6.1.4.1.31746.1.500.200.101.5"
}
```

