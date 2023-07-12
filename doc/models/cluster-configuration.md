
# Cluster Configuration

## Structure

`ClusterConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tags` | [`EdgeServiceLaunchParams \| undefined`](../../doc/models/edge-service-launch-params.md) | Optional | - |
| `endPointAccessType` | [`ClusterConfigEndpointAccessTypeEnum \| undefined`](../../doc/models/cluster-config-endpoint-access-type-enum.md) | Optional | **Default**: `ClusterConfigEndpointAccessTypeEnum.PrivateAccess` |
| `autoCreateNetworkInfra` | `boolean \| undefined` | Optional | **Default**: `true` |
| `infraIPv4range` | `string \| undefined` | Optional | **Default**: `'192.168.0.0/16'` |
| `networkNatMode` | [`NetworkNatModeEnum \| undefined`](../../doc/models/network-nat-mode-enum.md) | Optional | **Default**: `NetworkNatModeEnum.Single` |
| `availabilityZones` | [`IdList[] \| undefined`](../../doc/models/id-list.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `privateNetworkInfraIds` | [`IdList[] \| undefined`](../../doc/models/id-list.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `publicNetworkInfraIds` | [`IdList[] \| undefined`](../../doc/models/id-list.md) | Optional | **Constraints**: *Maximum Items*: `100` |

## Example (as JSON)

```json
{
  "autoCreateNetworkInfra": true,
  "networkNatMode": "single",
  "tags": {
    "key": "key0",
    "value": "value2"
  },
  "endPointAccessType": "privatePublicAccess",
  "infraIPv4range": "infraIPv4range0"
}
```

