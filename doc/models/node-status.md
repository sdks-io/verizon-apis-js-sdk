
# Node Status

## Structure

`NodeStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `state` | `string \| undefined` | Optional | - |
| `conditions` | [`StatusConditionItem[] \| undefined`](../../doc/models/status-condition-item.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `nodeInfo` | [`NodeStatusInfo \| undefined`](../../doc/models/node-status-info.md) | Optional | - |
| `capacity` | [`NodeStatusCapacity \| undefined`](../../doc/models/node-status-capacity.md) | Optional | - |
| `allocatable` | [`NodeStatusAllocatable \| undefined`](../../doc/models/node-status-allocatable.md) | Optional | - |
| `allocated` | [`NodeStatusAllocated \| undefined`](../../doc/models/node-status-allocated.md) | Optional | - |
| `ips` | [`IP[] \| undefined`](../../doc/models/ip.md) | Optional | **Constraints**: *Maximum Items*: `100` |

## Example (as JSON)

```json
{
  "state": "state4",
  "conditions": [
    {
      "type": "type9",
      "status": "status7",
      "lastHeartbeatTime": "2016-03-13T12:52:32.123Z",
      "lastTransitionTime": "2016-03-13T12:52:32.123Z",
      "reason": "reason3"
    },
    {
      "type": "type8",
      "status": "status6",
      "lastHeartbeatTime": "2016-03-13T12:52:32.123Z",
      "lastTransitionTime": "2016-03-13T12:52:32.123Z",
      "reason": "reason2"
    },
    {
      "type": "type7",
      "status": "status5",
      "lastHeartbeatTime": "2016-03-13T12:52:32.123Z",
      "lastTransitionTime": "2016-03-13T12:52:32.123Z",
      "reason": "reason1"
    }
  ],
  "nodeInfo": {
    "machineID": "machineID0",
    "systemUUID": "systemUUID0",
    "bootID": "bootID8",
    "kernelVersion": "kernelVersion2",
    "osImage": "osImage0"
  },
  "capacity": {
    "cpuCount": 150,
    "ephemeralStorageKB": 18,
    "memoryKB": 252
  },
  "allocatable": {
    "cpuCount": 126,
    "ephemeralStorageKB": 42,
    "memoryKB": 228
  }
}
```

