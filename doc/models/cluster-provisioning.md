
# Cluster Provisioning

## Structure

`ClusterProvisioning`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `provider` | [`ClusterProviderEnum \| undefined`](../../doc/models/cluster-provider-enum.md) | Optional | Cloud provider. |
| `accessKey` | [`AccessKey \| undefined`](../../doc/models/access-key.md) | Optional | - |
| `role` | [`Role \| undefined`](../../doc/models/role.md) | Optional | Role of the user calling API. |

## Example (as JSON)

```json
{
  "provider": "AWS",
  "accessKey": {
    "accessId": "accessId6",
    "secretKey": "secretKey6",
    "sessionToken": "sessionToken8"
  },
  "role": {
    "accountId": "accountId6",
    "externalId": "externalId2",
    "roleARN": "roleARN8"
  }
}
```

