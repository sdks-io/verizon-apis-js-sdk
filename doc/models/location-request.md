
# Location Request

The body contains the the account name and list of devices that you want to locate, plus other options.

## Structure

`LocationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account identifier in "##########-#####". |
| `accuracyMode` | `number` | Required, Constant | Accurary, currently only 0-coarse supported.<br>**Default**: `0` |
| `cacheMode` | [`CacheModeEnum`](../../doc/models/cache-mode-enum.md) | Required | Location cache mode. |
| `deviceList` | [`DeviceInfo[]`](../../doc/models/device-info.md) | Required | Device list. |

## Example (as JSON)

```json
{
  "accountName": "1234567890-00001",
  "accuracyMode": 0,
  "cacheMode": "1",
  "deviceList": [
    {
      "id": "980003420535573",
      "kind": "imei",
      "mdn": "7892345678"
    },
    {
      "id": "375535024300089",
      "kind": "imei",
      "mdn": "7897654321"
    },
    {
      "id": "A100003861E585",
      "kind": "meid",
      "mdn": "7897650914"
    }
  ]
}
```

