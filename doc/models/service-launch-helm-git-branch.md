
# Service Launch Helm Git Branch

## Structure

`ServiceLaunchHelmGitBranch`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `branchName` | `string \| undefined` | Optional | - |
| `helmChartPath` | `string \| undefined` | Optional | - |
| `valuesYamlPaths` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "branchName": "mec_vz_helm_git",
  "helmChartPath": "/home/helmchart",
  "valuesYamlPaths": [
    "/home/helmchart"
  ]
}
```

