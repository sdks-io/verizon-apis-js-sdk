
# Service Resume Result

## Structure

`ServiceResumeResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `correlationId` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$` |
| `message` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `500`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `status` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `15`, *Pattern*: `^[A-Za-z]{1,15}$` |
| `subStatus` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `15`, *Pattern*: `^[A-Za-z]{1,15}$` |

## Example (as JSON)

```json
{
  "requestId": "requestId2",
  "correlationId": "correlationId0",
  "message": "message0",
  "status": "status8",
  "subStatus": "subStatus6"
}
```

