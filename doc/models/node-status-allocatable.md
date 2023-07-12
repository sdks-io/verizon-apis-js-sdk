
# Node Status Allocatable

## Structure

`NodeStatusAllocatable`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cpuCount` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |
| `ephemeralStorageKB` | `bigint \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |
| `memoryKB` | `bigint \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |

## Example (as JSON)

```json
{
  "cpuCount": 140,
  "ephemeralStorageKB": 28,
  "memoryKB": 242
}
```

