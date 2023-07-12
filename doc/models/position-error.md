
# Position Error

Position error.

## Structure

`PositionError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `time` | `string \| undefined` | Optional | Time location obtained. |
| `utcoffset` | `string \| undefined` | Optional | UTC offset of time. |
| `type` | `string \| undefined` | Optional | Error type returned from location server. |
| `info` | `string \| undefined` | Optional | Additional information about the error. |

## Example (as JSON)

```json
{
  "time": "20170525214342",
  "type": "POSITION METHOD FAILURE",
  "info": "Exception code=ABSENT SUBSCRIBER",
  "utcoffset": "utcoffset0"
}
```

