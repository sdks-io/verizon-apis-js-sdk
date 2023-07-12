
# Device Log

Device logging information.

## Structure

`DeviceLog`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string` | Required | Device IMEI. |
| `logTime` | `string` | Required | Time of log. |
| `logType` | `string` | Required | Log type (one of SoftwareUpdate, Event, UserNotification, AgentService, Wireless, WirelessWeb, MobileBroadbandModem, WindowsMDM). |
| `eventLog` | `string` | Required | Event log. |
| `binaryLogFileBase64` | `string` | Required | Base64-encoded contents of binary log file. |
| `binaryLogFilename` | `string` | Required | File name of binary log file. |

## Example (as JSON)

```json
{
  "deviceId": "990013907835573",
  "logTime": "10/22/2020 19:29:50",
  "logType": "logType4",
  "eventLog": "eventLog0",
  "binaryLogFileBase64": "binaryLogFileBase644",
  "binaryLogFilename": "binaryLogFilename0"
}
```

