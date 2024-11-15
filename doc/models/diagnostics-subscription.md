
# Diagnostics Subscription

Status of the diagnostic services subscription.

## Structure

`DiagnosticsSubscription`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account identifier in "##########-#####". An account name is usually numeric, and must include any leading zeros. |
| `createdOn` | `string` | Required | The date and time of when the subscription was created. |
| `lastUpdated` | `string` | Required | The date and time of when the subscription was last updated. |
| `totalAllowed` | `number` | Required | Number of licenses currently assigned to devices. |
| `totalUsed` | `number` | Required | Number of licenses currently used by the devices. |
| `skuName` | `string` | Required | Name of the SKU for the account. |

## Example (as JSON)

```json
{
  "accountName": "TestQAAccount",
  "skuName": "TS-BUNDLE-KTO-DIAGNOSTIC-MRC",
  "totalAllowed": 100,
  "totalUsed": 50,
  "createdOn": "2019-08-29T00:47:59.240Z",
  "lastUpdated": "2019-08-29T00:47:59.240Z"
}
```

