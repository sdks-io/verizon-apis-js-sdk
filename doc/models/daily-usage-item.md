
# Daily Usage Item

Contains only dates when device had sessions.

## Structure

`DailyUsageItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startTime` | `string \| undefined` | Optional | Start date of session. ISO 8601 format. |
| `endTime` | `string \| undefined` | Optional | End date of session. ISO 8601 format. |
| `numBytes` | `number \| undefined` | Optional | Amount of data transferred, measured in Bytes. |

## Example (as JSON)

```json
{
  "startTime": "startTime6",
  "endTime": "endTime6",
  "numBytes": 150
}
```

