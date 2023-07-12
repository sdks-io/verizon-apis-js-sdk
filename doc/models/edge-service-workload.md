
# Edge Service Workload

## Structure

`EdgeServiceWorkload`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `name` | `string` | Required | Name of the workload needs to be deployed.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `description` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s]+$` |
| `packageType` | [`PackageTypeEnum \| undefined`](../../doc/models/package-type-enum.md) | Optional | Deployment package type.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[a-zA-Z0-9-_.]+$` |
| `uploadType` | [`WorkloadUploadTypeEnum \| undefined`](../../doc/models/workload-upload-type-enum.md) | Optional | **Constraints**: *Maximum Length*: `100`, *Pattern*: `^[a-zA-Z0-9-_.]+$` |
| `repositoryType` | [`RepositoryTypeEnum \| undefined`](../../doc/models/repository-type-enum.md) | Optional | **Constraints**: *Maximum Length*: `100`, *Pattern*: `^[a-zA-Z0-9-_.]+$` |
| `repositoryId` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `repository` | [`EdgeServiceRepository \| undefined`](../../doc/models/edge-service-repository.md) | Optional | - |
| `files` | `string[] \| undefined` | Optional | **Constraints**: *Maximum Items*: `10000` |
| `revisionType` | [`RevisionTypeEnum \| undefined`](../../doc/models/revision-type-enum.md) | Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `helmGitBranch` | [`ServiceLaunchHelmGitBranch \| undefined`](../../doc/models/service-launch-helm-git-branch.md) | Optional | - |
| `helmGitTag` | [`ServiceLaunchHelmGitTag \| undefined`](../../doc/models/service-launch-helm-git-tag.md) | Optional | - |
| `helmYamlGitTag` | [`ServiceLaunchHelmYamlGitTag \| undefined`](../../doc/models/service-launch-helm-yaml-git-tag.md) | Optional | - |
| `helmRepo` | [`ServiceLaunchHelmRepo \| undefined`](../../doc/models/service-launch-helm-repo.md) | Optional | - |
| `yamlGitBranch` | [`ServiceLaunchYamlGitBranch \| undefined`](../../doc/models/service-launch-yaml-git-branch.md) | Optional | - |
| `terraformGitBranch` | [`ServiceLaunchTerraformGitBranch \| undefined`](../../doc/models/service-launch-terraform-git-branch.md) | Optional | - |
| `terraformGitTag` | [`ServiceLaunchTerraformGitTag \| undefined`](../../doc/models/service-launch-terraform-git-tag.md) | Optional | - |
| `createdDate` | `string \| undefined` | Optional | - |
| `lastModifiedDte` | `string \| undefined` | Optional | - |
| `createdBy` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s]+$` |
| `updatedBy` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s]+$` |

## Example (as JSON)

```json
{
  "name": "MECSDWorkload",
  "id": "id0",
  "description": "description0",
  "packageType": "YAML",
  "uploadType": "PULL_FROM_REPO",
  "repositoryType": "GIT"
}
```

