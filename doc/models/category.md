
# Category

A user can create a category and use the same during service creation request.

## Structure

`Category`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Auto-generated unique Id eg: 58296746-57ee-44f8-8107-399b61d53967.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `categoryName` | `string` | Required | Any string value which is described as a category name.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9 \-_]+$` |
| `categoryDescription` | `string \| undefined` | Optional | Brief description about the category being created.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s]+$` |
| `isVerizonCertified` | `boolean \| undefined` | Optional | Boolean value which implies if the category is verizon certified or not by default it is false.<br>**Default**: `false` |
| `createdDate` | `string \| undefined` | Optional | System captured creation date and time when tag is created. |
| `lastModifiedDate` | `string \| undefined` | Optional | System captured date and time when the tag was last modified. |
| `createdBy` | `string \| undefined` | Optional | User information who created the tag.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `updatedBy` | `string \| undefined` | Optional | Last user information who made changes to tag.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |

## Example (as JSON)

```json
{
  "id": "uuid",
  "categoryName": "Video Camera Monitoring",
  "categoryDescription": "Category",
  "isVerizonCertified": false,
  "createdDate": "2006-01-02T15:04:05Z",
  "lastModifiedDate": "2006-01-02T15:04:05Z",
  "createdBy": "User",
  "updatedBy": "User"
}
```

