
# Create Trigger V2 Request

Create Trigger Request

## Structure

`CreateTriggerV2Request`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerName` | `string \| undefined` | Optional | - |
| `ecpdId` | `string \| undefined` | Optional | - |
| `deviceGroupName` | `string \| undefined` | Optional | - |
| `triggerCategory` | `string \| undefined` | Optional | - |
| `pricePlanTrigger` | [`PricePlanTrigger \| undefined`](../../doc/models/price-plan-trigger.md) | Optional | - |
| `notification` | [`Notification \| undefined`](../../doc/models/notification.md) | Optional | - |
| `active` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "triggerName": "triggerName4",
  "ecpdId": "ecpdId0",
  "deviceGroupName": "deviceGroupName4",
  "triggerCategory": "triggerCategory8",
  "pricePlanTrigger": {
    "accountGroupShare": {
      "accountGroupShareIndividual": {
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
    }
  }
}
```

