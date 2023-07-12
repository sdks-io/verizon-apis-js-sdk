
# Deployment Location

## Structure

`DeploymentLocation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ern` | `string \| undefined` | Optional | Edge Resource Number.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^(.*)$` |
| `cluster` | [`DeploymentLocationCluster \| undefined`](../../doc/models/deployment-location-cluster.md) | Optional | - |
| `namespace` | [`DeploymentLocationNamespace \| undefined`](../../doc/models/deployment-location-namespace.md) | Optional | - |

## Example (as JSON)

```json
{
  "ern": "us-east-1-wl1-dfw-wlz-1",
  "cluster": {
    "name": "",
    "id": ""
  },
  "namespace": {
    "name": "",
    "id": ""
  }
}
```

