
# Data Trigger Request

## Structure

`DataTriggerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `comparator` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `threshold` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 100` |
| `thresholdUnit` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |

## Example (as JSON)

```json
{
  "comparator": "comparator0",
  "threshold": 22,
  "thresholdUnit": "thresholdUnit8"
}
```

