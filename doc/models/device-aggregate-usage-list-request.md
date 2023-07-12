
# Device Aggregate Usage List Request

Request to list device aggregate usage.

## Structure

`DeviceAggregateUsageListRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceIds` | [`DeviceId[] \| undefined`](../../doc/models/device-id.md) | Optional | One or more devices for which you want aggregate data, specified by device ID. |
| `accountName` | `string \| undefined` | Optional | The name of a billing account. |
| `groupName` | `string \| undefined` | Optional | The name of a device group, if you want to only include devices in that group. |
| `startTime` | `string \| undefined` | Optional | The beginning of the reporting period. The startTime cannot be more than 6 months before the current date. |
| `endTime` | `string \| undefined` | Optional | The end of the reporting period. The endTime date must be within on month of the startTime date. |

## Example (as JSON)

```json
{
  "deviceIds": [
    {
      "id": "84258000000891490087",
      "kind": "ICCID"
    }
  ],
  "accountName": "9992330389-00001",
  "endTime": "2021-08-30T00:00:00-06:00",
  "startTime": "2021-08-01T00:00:00-06:00",
  "groupName": "groupName0"
}
```

