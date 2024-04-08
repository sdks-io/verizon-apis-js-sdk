
# Get Device Experience Score History Request

Get device experience score history.

## Structure

`GetDeviceExperienceScoreHistoryRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account name.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9-]{3,32}$` |
| `deviceId` | [`DeviceIdentifier`](../../doc/models/device-identifier.md) | Required | Device Id details. |

## Example (as JSON)

```json
{
  "accountName": "0000123456-00001",
  "deviceId": {
    "kind": "iccid",
    "id": "01234567899876543210",
    "mdn": "0123456789"
  }
}
```

