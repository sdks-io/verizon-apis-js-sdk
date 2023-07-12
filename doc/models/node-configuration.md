
# Node Configuration

## Structure

`NodeConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Name of the nodeGroup. |
| `isWavelengthZone` | `boolean \| undefined` | Optional | **Default**: `false` |
| `isManagedNodeGroup` | `boolean \| undefined` | Optional | **Default**: `false` |
| `isSpotInstanceNeeded` | `boolean \| undefined` | Optional | **Default**: `false` |
| `endPointAccessType` | [`EndPointAccessTypeEnum \| undefined`](../../doc/models/end-point-access-type-enum.md) | Optional | **Default**: `EndPointAccessTypeEnum.Private` |
| `instanceType` | `string \| undefined` | Optional | **Default**: `'m5.xlarge'` |
| `nodes` | `number \| undefined` | Optional | **Default**: `2`<br>**Constraints**: `>= 0`, `<= 1024` |
| `nodesMin` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |
| `nodesMax` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |
| `nodeVolumeType` | `string \| undefined` | Optional | - |
| `subnetCidrBlock` | `string \| undefined` | Optional | - |
| `nodeAmiFamily` | `string \| undefined` | Optional | **Default**: `'AmazonLinux2'` |
| `nodeVolumeSize` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |
| `keyName` | `string \| undefined` | Optional | - |
| `maxPodPerNode` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |
| `useVolumeEncryption` | `boolean \| undefined` | Optional | **Default**: `true` |
| `nodePrivateNetworking` | `boolean \| undefined` | Optional | **Default**: `false` |
| `instanceProfileArn` | `string \| undefined` | Optional | - |
| `instanceRoleArn` | `string \| undefined` | Optional | - |
| `instanceRolePermissionBoundary` | `string \| undefined` | Optional | - |
| `securityGroupIds` | [`IdList[] \| undefined`](../../doc/models/id-list.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `availabilityZoneIds` | [`IdList[] \| undefined`](../../doc/models/id-list.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `labels` | [`NodeConfigurationLabel \| undefined`](../../doc/models/node-configuration-label.md) | Optional | - |
| `tags` | [`NodeConfigurationTag \| undefined`](../../doc/models/node-configuration-tag.md) | Optional | - |
| `autoCreateServiceRoles` | `boolean \| undefined` | Optional | **Default**: `true` |
| `enableFullAccessToEcr` | `boolean \| undefined` | Optional | - |
| `enableAsgAccess` | `boolean \| undefined` | Optional | - |
| `enableDnsAccess` | `boolean \| undefined` | Optional | - |
| `enableAppMeshAccess` | `boolean \| undefined` | Optional | - |
| `enableAlbAccess` | `boolean \| undefined` | Optional | - |
| `enableEfsAccess` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "autoCreateServiceRoles": true,
  "enableAlbAccess": true,
  "enableAppMeshAccess": true,
  "enableAsgAccess": true,
  "enableDnsAccess": true,
  "enableEfsAccess": true,
  "enableFullAccessToEcr": true,
  "endPointAccessType": "private",
  "instanceType": "m5.xlarge",
  "isManagedNodeGroup": false,
  "isSpotInstanceNeeded": false,
  "isWavelengthZone": false,
  "labels": {},
  "name": "ng-22",
  "nodeAmiFamily": "AmazonLinux2",
  "nodePrivateNetworking": false,
  "nodeVolumeSize": 80,
  "nodeVolumeType": "gp3",
  "nodes": 2,
  "nodesMax": 2,
  "nodesMin": 2,
  "tags": {},
  "useVolumeEncryption": true
}
```

