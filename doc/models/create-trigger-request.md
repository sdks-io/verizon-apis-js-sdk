
# Create Trigger Request

## Structure

`CreateTriggerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `anomalyTriggerRequest` | [`AnomalyTriggerRequest \| undefined`](../../doc/models/anomaly-trigger-request.md) | Optional | The details of the UsageAnomaly trigger. |
| `dataTriggerRequest` | [`DataTriggerRequest \| undefined`](../../doc/models/data-trigger-request.md) | Optional | - |
| `groupName` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `name` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `sessionTriggerRequest` | [`SessionTriggerRequest \| undefined`](../../doc/models/session-trigger-request.md) | Optional | - |
| `smsTriggerRequest` | [`SMSTriggerRequest \| undefined`](../../doc/models/sms-trigger-request.md) | Optional | - |
| `triggerCategory` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `triggerCycle` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |

## Example (as JSON)

```json
{
  "anomalyTriggerRequest": {
    "accountNames": "0000123456-00001",
    "includeAbnormal": true,
    "includeVeryAbnormal": true,
    "includeUnderExpectedUsage": true,
    "includeOverExpectedUsage": true
  },
  "accountName": "accountName6",
  "dataTriggerRequest": {
    "comparator": "comparator2",
    "threshold": 242,
    "thresholdUnit": "thresholdUnit6"
  },
  "groupName": "groupName2",
  "name": "name2"
}
```

