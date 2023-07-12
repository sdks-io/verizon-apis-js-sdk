
# Service Error

Errors related to service.

## Structure

`ServiceError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCategory` | `string \| undefined` | Optional | Category defined under which the error falls.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[a-zA-Z0-9\- _]+$` |
| `errorCode` | `string \| undefined` | Optional | Error Code is required.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `errorDesc` | `string \| undefined` | Optional | Error description is required.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[a-zA-Z0-9\- _]+$` |
| `errorSubcategory` | `string \| undefined` | Optional | Sub-category of the error defined.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[a-zA-Z0-9\- _]+$` |

## Example (as JSON)

```json
{
  "errorCategory": "Resource Not Found",
  "errorCode": "404",
  "errorDesc": "Requested resource not found in database",
  "errorSubcategory": "Record not Found in Database"
}
```

