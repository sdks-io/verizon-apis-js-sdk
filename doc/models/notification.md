
# Notification

## Structure

`Notification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `notificationType` | `string \| undefined` | Optional | - |
| `callback` | `boolean \| undefined` | Optional | - |
| `emailNotification` | `boolean \| undefined` | Optional | - |
| `notificationGroupName` | `string \| undefined` | Optional | - |
| `notificationFrequencyFactor` | `number \| undefined` | Optional | - |
| `notificationFrequencyInterval` | `string \| undefined` | Optional | - |
| `externalEmailRecipients` | `string \| undefined` | Optional | - |
| `smsNotification` | `boolean \| undefined` | Optional | - |
| `smsNumbers` | [`SmsNumbers[] \| undefined`](../../doc/models/sms-numbers.md) | Optional | - |
| `reminder` | `boolean \| undefined` | Optional | - |
| `severity` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "notificationType": "notificationType2",
  "callback": false,
  "emailNotification": false,
  "notificationGroupName": "notificationGroupName2",
  "notificationFrequencyFactor": 214
}
```

