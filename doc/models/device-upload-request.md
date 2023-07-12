
# Device Upload Request

## Structure

`DeviceUploadRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | - |
| `devices` | [`DeviceList[]`](../../doc/models/device-list.md) | Required | - |
| `emailAddress` | `string` | Required | - |
| `deviceSku` | `string` | Required | - |
| `uploadType` | `string` | Required | - |

## Example (as JSON)

```json
{
  "accountName": "1223334444-00001",
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
    }
  ],
  "emailAddress": "bob@mycompany.com",
  "deviceSku": "VZW123456",
  "uploadType": "IMEI"
}
```

