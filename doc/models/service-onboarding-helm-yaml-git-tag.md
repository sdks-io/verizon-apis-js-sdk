
# Service Onboarding Helm Yaml Git Tag

## Structure

`ServiceOnboardingHelmYamlGitTag`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tagName` | `string` | Required | The user can provide tagName to the Helm chart.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s\/]+$` |
| `valuesYamlPaths` | `string[] \| undefined` | Optional | The user can provide an array of values. YAML files paths.<br>**Constraints**: *Maximum Items*: `10000`, *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s\/]+$` |

## Example (as JSON)

```json
{
  "tagName": "helmyamlgit",
  "valuesYamlPaths": [
    "/home/helmchart"
  ]
}
```

