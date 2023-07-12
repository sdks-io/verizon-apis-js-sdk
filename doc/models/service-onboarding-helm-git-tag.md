
# Service Onboarding Helm Git Tag

## Structure

`ServiceOnboardingHelmGitTag`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tagName` | `string` | Required | The user can provide tagName for the Helm chart.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s\/]+$` |
| `helmChartPath` | `string` | Required | The user can provide the path to the Helm chart.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s\/]+$` |
| `valuesYamlPaths` | `string[] \| undefined` | Optional | The user can provide an array of values.YAML files paths.<br>**Constraints**: *Maximum Items*: `10000`, *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s\/]+$` |

## Example (as JSON)

```json
{
  "tagName": "mec_vz_helm_git",
  "helmChartPath": "/home/helmchart",
  "valuesYamlPaths": [
    "/home/helmchart"
  ]
}
```

