
# V2 License IMEI

IMEIs of the devices to assign or remove licenses.

## Structure

`V2LicenseIMEI`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | Account name. |
| `deviceList` | `string[]` | Required | Device IMEI list. |

## Example (as JSON)

```json
{
  "deviceList": [
    "990003425730524",
    "990000473475967"
  ],
  "accountName": "accountName4"
}
```

