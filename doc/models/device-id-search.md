
# Device Id Search

Search by device id.

## Structure

`DeviceIdSearch`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contains` | `string \| undefined` | Optional | The string appears anywhere in the identifer. |
| `startswith` | `string \| undefined` | Optional | The identifer must start with the specified string. |
| `endswith` | `string \| undefined` | Optional | The identifier must end with the specified string. |
| `kind` | `string` | Required | The type of the device identifier to match. Valid types of identifiers are:EID,ESN,ICCID,IMEI,MDN,MEID,MSISDN. |

## Example (as JSON)

```json
{
  "kind": "iccid",
  "contains": "4259",
  "startswith": "startswith0",
  "endswith": "endswith2"
}
```

