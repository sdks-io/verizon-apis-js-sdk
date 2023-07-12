
# Azure Csp Profile

Information related to manage resources in Azure infrastructure.

## Structure

`AzureCspProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tenantID` | `string \| undefined` | Optional | Azure tenant ID.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `subscriptionID` | `string \| undefined` | Optional | Azure subscription ID.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `clientId` | `string \| undefined` | Optional | Azure client ID.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `clientSecret` | `string \| undefined` | Optional | Azure client secret.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_ ]+$` |

## Example (as JSON)

```json
{
  "tenantID": "uuid",
  "subscriptionID": "uuid",
  "clientId": "uuid",
  "clientSecret": "Client Secret Example"
}
```

