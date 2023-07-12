
# Advance Configuration

## Structure

`AdvanceConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceRoleArn` | `string \| undefined` | Optional | - |
| `serviceRolePermissionBoundary` | `string \| undefined` | Optional | - |
| `enableProxy` | `boolean \| undefined` | Optional | **Default**: `false` |
| `httpProxy` | `string \| undefined` | Optional | - |
| `httpsProxy` | `string \| undefined` | Optional | - |
| `noProxy` | `string \| undefined` | Optional | - |
| `proxyRootCA` | `string \| undefined` | Optional | - |
| `enableTlsTraffic` | `boolean \| undefined` | Optional | **Default**: `false` |
| `enableAutoApprove` | `boolean \| undefined` | Optional | **Default**: `false` |
| `enableMultiMaster` | `boolean \| undefined` | Optional | **Default**: `false` |
| `enableDedicatedMaster` | `boolean \| undefined` | Optional | **Default**: `false` |

## Example (as JSON)

```json
{
  "enableProxy": false,
  "enableTlsTraffic": false,
  "enableAutoApprove": false,
  "enableMultiMaster": false,
  "enableDedicatedMaster": false,
  "serviceRoleArn": "serviceRoleArn4",
  "serviceRolePermissionBoundary": "serviceRolePermissionBoundary2",
  "httpProxy": "httpProxy8",
  "httpsProxy": "httpsProxy8"
}
```

