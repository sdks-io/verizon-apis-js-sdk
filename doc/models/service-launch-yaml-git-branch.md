
# Service Launch Yaml Git Branch

## Structure

`ServiceLaunchYamlGitBranch`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `branchName` | `string \| undefined` | Optional | - |
| `valuesYamlPaths` | `string[] \| undefined` | Optional | **Constraints**: *Maximum Items*: `100` |

## Example (as JSON)

```json
{
  "valuesYamlPaths": [
    "/home/helmchart"
  ],
  "branchName": "branchName2"
}
```

