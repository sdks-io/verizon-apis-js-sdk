
# Request Body for Usage

## Structure

`RequestBodyForUsage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string \| undefined` | Optional | - |
| `deviceId` | [`ReadySimDeviceId[] \| undefined`](../../doc/models/ready-sim-device-id.md) | Optional | - |
| `startTime` | `string \| undefined` | Optional | - |
| `endTime` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "accountId": "0000123456-000001",
  "startTime": "08/15/2021 00:00:00",
  "endTime": "08/16/2021 00:00:00",
  "deviceId": [
    {
      "kind": "kind8",
      "id": "id0"
    }
  ]
}
```

