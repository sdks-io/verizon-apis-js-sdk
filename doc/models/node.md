
# Node

## Structure

`Node`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `modifiedAt` | `string \| undefined` | Optional | - |
| `nodeId` | `string \| undefined` | Optional | - |
| `privateIp` | `string \| undefined` | Optional | - |
| `numCores` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |
| `totalMemory` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |
| `clusterId` | `string \| undefined` | Optional | - |
| `roles` | `string[] \| undefined` | Optional | **Constraints**: *Maximum Items*: `100` |
| `id` | `string \| undefined` | Optional | - |
| `approved` | `boolean \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "num_cores": 8,
  "total_memory": 512,
  "approved": true,
  "name": "name0",
  "created_at": "created_at2",
  "modified_at": "modified_at6",
  "node_id": "node_id2",
  "private_ip": "private_ip0"
}
```

