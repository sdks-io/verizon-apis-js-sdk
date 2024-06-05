
# Update Trigger V2 Request

Update Trigger Request

## Structure

`UpdateTriggerV2Request`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string \| undefined` | Optional | - |
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
  "triggerId": "triggerId4",
  "triggerName": "triggerName6",
  "ecpdId": "ecpdId0",
  "deviceGroupName": "deviceGroupName4",
  "triggerCategory": "triggerCategory8"
}
```

