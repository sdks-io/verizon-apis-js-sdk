
# Node Group Item

## Structure

`NodeGroupItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `modifiedAt` | `string \| undefined` | Optional | - |
| `organizationId` | `string \| undefined` | Optional | - |
| `partnerId` | `string \| undefined` | Optional | - |
| `instanceType` | `string \| undefined` | Optional | - |
| `edgeId` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `provisionId` | `string \| undefined` | Optional | - |
| `nodeType` | `string \| undefined` | Optional | - |
| `nodes` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |
| `nodesMin` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |
| `nodesMax` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |
| `nodeVolumeSize` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |
| `nodeVolumeType` | `string \| undefined` | Optional | - |
| `nodePrivateNetworking` | `boolean \| undefined` | Optional | - |
| `nodeZones` | `string[] \| undefined` | Optional | **Constraints**: *Maximum Items*: `100` |
| `nodeAmiFamily` | `string \| undefined` | Optional | - |
| `nodeLabels` | [`NodeLabel \| undefined`](../../doc/models/node-label.md) | Optional | - |
| `nodegroupType` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |
| `enableAsgAccess` | `boolean \| undefined` | Optional | - |
| `enableFullAccessToEcr` | `boolean \| undefined` | Optional | - |
| `versionInfoId` | `string \| undefined` | Optional | - |
| `upgradeInfoId` | `string \| undefined` | Optional | - |
| `tags` | [`NodeGroupItemTag \| undefined`](../../doc/models/node-group-item-tag.md) | Optional | - |
| `configFileContent` | `string \| undefined` | Optional | - |
| `provision` | [`Provision \| undefined`](../../doc/models/provision.md) | Optional | - |
| `versionInfo` | [`VersionInfo \| undefined`](../../doc/models/version-info.md) | Optional | - |
| `upgradeInfo` | [`UpgradeInfo \| undefined`](../../doc/models/upgrade-info.md) | Optional | - |

## Example (as JSON)

```json
{
  "node_private_networking": true,
  "enable_asg_access": true,
  "enable_full_access_to_ecr": false,
  "name": "name0",
  "created_at": "created_at2",
  "modified_at": "modified_at6",
  "organization_id": "organization_id0",
  "partner_id": "partner_id2"
}
```

