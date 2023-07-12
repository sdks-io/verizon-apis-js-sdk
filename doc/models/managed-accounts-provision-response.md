
# Managed Accounts Provision Response

## Structure

`ManagedAccountsProvisionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `txid` | `string \| undefined` | Optional | Transaction identifier |
| `accountName` | `string \| undefined` | Optional | Account identifier |
| `paccountName` | `string \| undefined` | Optional | Primary Account identifier |
| `serviceName` | [`ServiceNameEnum \| undefined`](../../doc/models/service-name-enum.md) | Optional | Service name<br>**Default**: `ServiceNameEnum.Location` |
| `status` | `string \| undefined` | Optional | Provision status. Success or Fail |
| `reason` | `string \| undefined` | Optional | Detailed reason |

## Example (as JSON)

```json
{
  "txid": "4fbff332-ece4-42ef-9f02-7e3bdc90bd28",
  "accountName": "1223334444-00001",
  "paccountName": "1223334444-00001",
  "serviceName": "Location",
  "status": "Success",
  "reason": "Success"
}
```

