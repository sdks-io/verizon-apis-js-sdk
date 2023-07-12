
# Cluster Infra

## Structure

`ClusterInfra`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `modifiedAt` | `string \| undefined` | Optional | - |
| `organizationId` | `string \| undefined` | Optional | - |
| `partnerId` | `string \| undefined` | Optional | - |
| `country` | `string \| undefined` | Optional | - |
| `city` | `string \| undefined` | Optional | - |
| `latitude` | `string \| undefined` | Optional | - |
| `longitude` | `string \| undefined` | Optional | - |
| `clusterId` | `string \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `cert` | `string \| undefined` | Optional | - |
| `passphrase` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `cname` | `string \| undefined` | Optional | - |
| `arecord` | `string \| undefined` | Optional | - |
| `baseRatio` | `number \| undefined` | Optional | - |
| `haEnabled` | `boolean \| undefined` | Optional | - |
| `displayName` | `string \| undefined` | Optional | - |
| `upgradeStatus` | `string \| undefined` | Optional | - |
| `providerId` | `string \| undefined` | Optional | - |
| `autoCreate` | `boolean \| undefined` | Optional | - |
| `autoApproveNodes` | `boolean \| undefined` | Optional | - |
| `provisionId` | `string \| undefined` | Optional | - |
| `isMonitorEnabled` | `boolean \| undefined` | Optional | - |
| `health` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |
| `healthStatusModifiedAt` | `string \| undefined` | Optional | - |
| `manufacturer` | `string \| undefined` | Optional | - |
| `clusterType` | `string \| undefined` | Optional | - |
| `clusterBlueprint` | `string \| undefined` | Optional | - |
| `gimageUsed` | `string \| undefined` | Optional | - |
| `reason` | `string \| undefined` | Optional | - |
| `isMasterDedicated` | `boolean \| undefined` | Optional | - |
| `projectId` | `string \| undefined` | Optional | - |
| `provisionOs` | `string \| undefined` | Optional | - |
| `defaultStorageClass` | `string \| undefined` | Optional | - |
| `storageClassMap` | [`StorageClassMap \| undefined`](../../doc/models/storage-class-map.md) | Optional | - |
| `cniProvider` | `string \| undefined` | Optional | - |
| `provisionK8s` | `string \| undefined` | Optional | - |
| `etcdVersion` | `string \| undefined` | Optional | - |
| `consulVersion` | `string \| undefined` | Optional | - |
| `clusterBlueprintVersion` | `string \| undefined` | Optional | - |
| `upgradeProtection` | `boolean \| undefined` | Optional | - |
| `provision` | [`ClusterInfraProvision \| undefined`](../../doc/models/cluster-infra-provision.md) | Optional | - |
| `metro` | [`Metro \| undefined`](../../doc/models/metro.md) | Optional | - |
| `nodes` | [`Node[] \| undefined`](../../doc/models/node.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `clusterProviderParams` | [`ClusterProviderParams \| undefined`](../../doc/models/cluster-provider-params.md) | Optional | - |
| `nodegroups` | [`NodeGroupItem[] \| undefined`](../../doc/models/node-group-item.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `clusterVersionInfo` | [`ClusterVersionInfo \| undefined`](../../doc/models/cluster-version-info.md) | Optional | - |
| `projects` | [`ProjectItem[] \| undefined`](../../doc/models/project-item.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `cluster` | [`Cluster \| undefined`](../../doc/models/cluster.md) | Optional | - |

## Example (as JSON)

```json
{
  "ha_enabled": true,
  "auto_create": true,
  "auto_approve_nodes": true,
  "is_monitor_enabled": true,
  "is_master_dedicated": false,
  "upgrade_protection": true,
  "name": "name0",
  "created_at": "created_at2",
  "modified_at": "modified_at6",
  "organization_id": "organization_id0",
  "partner_id": "partner_id2"
}
```

