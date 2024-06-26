
# Account Group Share Individual

## Structure

`AccountGroupShareIndividual`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filterCriteria` | [`FilterCriteriaAccountGroupShare \| undefined`](../../doc/models/filter-criteria-account-group-share.md) | Optional | - |
| `condition` | [`ConditionAccountGroupShare \| undefined`](../../doc/models/condition-account-group-share.md) | Optional | - |
| `action` | [`ActionAccountGroupShare \| undefined`](../../doc/models/action-account-group-share.md) | Optional | - |

## Example (as JSON)

```json
{
  "filterCriteria": {
    "ratePlanGroupId": 202
  },
  "condition": {
    "action": "action6"
  },
  "action": {
    "changePlan": {
      "triggerDate": "triggerDate6",
      "sharePlan": [
        {
          "fromCarrierCode": "fromCarrierCode6",
          "toCarrierCode": "toCarrierCode8",
          "criteriaPercentage": 170
        },
        {
          "fromCarrierCode": "fromCarrierCode6",
          "toCarrierCode": "toCarrierCode8",
          "criteriaPercentage": 170
        },
        {
          "fromCarrierCode": "fromCarrierCode6",
          "toCarrierCode": "toCarrierCode8",
          "criteriaPercentage": 170
        }
      ]
    }
  }
}
```

