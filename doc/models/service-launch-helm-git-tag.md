
# Service Launch Helm Git Tag

## Structure

`ServiceLaunchHelmGitTag`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tagName` | `string` | Required | **Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s\/]+$` |
| `helmChartPath` | `string` | Required | **Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s\/]+$` |
| `valuesYamlPaths` | `string[]` | Required | **Constraints**: *Maximum Items*: `10000`, *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s\/]+$` |

## Example (as JSON)

```json
{
  "helmChartPath": "/home/helmchart",
  "tagName": "mec_vz_helm_git",
  "valuesYamlPaths": [
    "/home/helmchart"
  ]
}
```

