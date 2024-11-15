
# Consent Transaction ID

The transaction ID of the request that you want to cancel, from the POST /devicelocations synchronus response.

## Structure

`ConsentTransactionID`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `string \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "transactionId": "2c90bd28-eeee-ffff-gggg-7e3bd4fbff33",
  "status": "QUEUED"
}
```

