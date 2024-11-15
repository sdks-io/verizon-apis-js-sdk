
# V3 Device List Item

Device changed.

## Structure

`V3DeviceListItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string \| undefined` | Optional | Device IMEI. |
| `status` | `string \| undefined` | Optional | Success or failure. |
| `reason` | `string \| undefined` | Optional | Result reason. |

## Example (as JSON)

```json
{
  "deviceId": "15-digit IMEI",
  "status": "AddDeviceSucceed",
  "Reason": "Device added Successfully"
}
```

