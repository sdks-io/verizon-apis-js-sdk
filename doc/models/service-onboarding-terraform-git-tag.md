
# Service Onboarding Terraform Git Tag

## Structure

`ServiceOnboardingTerraformGitTag`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tagName` | `string` | Required | **Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s\/]+$` |
| `terraformPath` | `string` | Required | **Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s\/]+$` |

## Example (as JSON)

```json
{
  "tagName": "mec_terraform_git",
  "terraformPath": "/home/helmchart"
}
```

