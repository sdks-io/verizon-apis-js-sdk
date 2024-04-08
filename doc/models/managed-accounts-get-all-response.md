
# Managed Accounts Get All Response

## Structure

`ManagedAccountsGetAllResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | Account Name |
| `managedAccAddedList` | [`ManagedAccAddedList[] \| undefined`](../../doc/models/managed-acc-added-list.md) | Optional | - |
| `managedAccProvisionedList` | [`ManagedAccProvisionedList[] \| undefined`](../../doc/models/managed-acc-provisioned-list.md) | Optional | - |

## Example (as JSON)

```json
{
  "accountName": "0212312345-00001",
  "ManagedAccAddedList": [
    {
      "id": "id6",
      "txid": "txid6"
    }
  ],
  "managedAccProvisionedList": [
    {
      "id": "id2",
      "txid": "txid0"
    }
  ]
}
```

