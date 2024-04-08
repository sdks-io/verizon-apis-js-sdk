
# ESIM Provhistory Request

## Structure

`ESIMProvhistoryRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | - |
| `deviceFilter` | [`DeviceId2[] \| undefined`](../../doc/models/device-id-2.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `earliest` | `string \| undefined` | Optional | - |
| `latest` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "accountName": "0000123456-00001",
  "earliest": "10/15/2021 04:49:35",
  "latest": "10/15/2021 04:49:49",
  "deviceFilter": [
    {
      "id": "id4",
      "kind": "kind2"
    },
    {
      "id": "id4",
      "kind": "kind2"
    },
    {
      "id": "id4",
      "kind": "kind2"
    }
  ]
}
```

