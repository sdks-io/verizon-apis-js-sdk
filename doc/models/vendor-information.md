
# Vendor Information

## Structure

`VendorInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | ID of the vendor.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `name` | `string` | Required | Name of the vendor.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `primaryEmail` | `string \| undefined` | Optional | Primary email of the vendor.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `secondaryEmail` | `string \| undefined` | Optional | Secondary email of the vendor.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `contactNumber` | `string \| undefined` | Optional | Contact number of the vendor.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |

## Example (as JSON)

```json
{
  "id": "acme",
  "name": "acme",
  "primaryEmail": "primaryEmail2",
  "secondaryEmail": "secondaryEmail6",
  "contactNumber": "contactNumber4"
}
```

