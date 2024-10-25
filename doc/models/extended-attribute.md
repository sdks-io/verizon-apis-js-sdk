
# Extended Attribute

## Structure

`ExtendedAttribute`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string \| undefined` | Optional | The key indicates if the SMS message was to the device (MtSms) or from the device (MoSms)<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `value` | `string \| undefined` | Optional | The number of SMS messages found<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |

## Example (as JSON)

```json
{
  "key": "MoSms",
  "value": "value4"
}
```

