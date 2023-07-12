
# Tag

Any name for the tag.

## Structure

`Tag`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Id of the user creating the repository.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `key` | `string` | Required | Key properties/metadata attribute.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!\/,+\-=_:.&*%\s]+$` |
| `description` | `string \| undefined` | Optional | Description for the repository being created.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s]+$` |
| `value` | `string \| undefined` | Optional | Properties/metadata value attribute.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!\/,+\-=_:.&*%\s]+$` |
| `createdDate` | `string \| undefined` | Optional | Date when the repository was created. |
| `lastModifiedDate` | `string \| undefined` | Optional | Date when the repository was updated. |
| `createdBy` | `string \| undefined` | Optional | User information by whom the repository was created.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `updatedBy` | `string \| undefined` | Optional | User information by whom the repository was updated.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |

## Example (as JSON)

```json
{
  "id": "uuid",
  "key": "Mytag",
  "description": "Tag.",
  "value": "IOT",
  "createdDate": "2006-01-02T15:04:05Z",
  "lastModifiedDate": "2006-01-02T15:04:05Z",
  "createdBy": "User",
  "updatedBy": "User"
}
```

