
# Device Logging Status

Device logging status information.

## Structure

`DeviceLoggingStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string` | Required | Device IMEI. |
| `expiryDate` | `string` | Required | The date when device logging expires. |

## Example (as JSON)

```json
{
  "deviceId": "990013907835573",
  "expiryDate": "2020-10-19"
}
```

