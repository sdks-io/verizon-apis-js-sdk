
# Workload

Workload attribute of a service.

## Structure

`Workload`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The auto-generated Id of the workload.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `name` | `string` | Required | Name of the workload needs to be deployed.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `description` | `string \| undefined` | Optional | A brief workload description.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s]+$` |
| `packageType` | [`ServiceDependencyPackageTypeEnum \| undefined`](../../doc/models/service-dependency-package-type-enum.md) | Optional | Deployment package type.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[a-zA-Z0-9-_.]+$` |
| `uploadType` | [`UploadTypeEnum \| undefined`](../../doc/models/upload-type-enum.md) | Optional | Allowed values are: GIT files (PULL_FROM_REPO), MANUAL_UPLOAD.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[a-zA-Z0-9-_.]+$` |
| `repositoryType` | [`WorkloadRepositoryTypeEnum \| undefined`](../../doc/models/workload-repository-type-enum.md) | Optional | Repository types allowed: GIT/HELM.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[a-zA-Z0-9-_.]+$` |
| `repositoryId` | `string \| undefined` | Optional | In case of 'Pull files from my repository', The user can provide the existing repositoryID.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `repository` | [`Repository \| undefined`](../../doc/models/repository.md) | Optional | Users can create a repository to maintain service artifacts. Repository would be either a Git or HELM repository. |
| `files` | `string[] \| undefined` | Optional | Files which are being generated.<br>**Constraints**: *Maximum Items*: `10000`, *Maximum Length*: `10000`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]!,+\-=_:.&*%\s]+$` |
| `revisionType` | [`WorkloadRevisionTypeEnum \| undefined`](../../doc/models/workload-revision-type-enum.md) | Optional | Revision type can be a BRANCH or TAG.<br>**Constraints**: *Maximum Length*: `100`, *Pattern*: `^[a-zA-Z0-9-_.]+$` |
| `helmGitBranch` | [`ServiceOnboardingHelmGitBranch \| undefined`](../../doc/models/service-onboarding-helm-git-branch.md) | Optional | - |
| `helmGitTag` | [`ServiceOnboardingHelmGitTag \| undefined`](../../doc/models/service-onboarding-helm-git-tag.md) | Optional | - |
| `helmYamlGitTag` | [`ServiceOnboardingHelmYamlGitTag \| undefined`](../../doc/models/service-onboarding-helm-yaml-git-tag.md) | Optional | - |
| `helmHelmrepo` | [`ServiceOnboardingHelmHelmrepo \| undefined`](../../doc/models/service-onboarding-helm-helmrepo.md) | Optional | - |
| `yamlGitBranch` | [`ServiceOnboardingYamlGitBranch \| undefined`](../../doc/models/service-onboarding-yaml-git-branch.md) | Optional | - |
| `terraformGitBranch` | [`ServiceOnboardingTerraformGitBranch \| undefined`](../../doc/models/service-onboarding-terraform-git-branch.md) | Optional | - |
| `terraformGitTag` | [`ServiceOnboardingTerraformGitTag \| undefined`](../../doc/models/service-onboarding-terraform-git-tag.md) | Optional | - |
| `createdDate` | `string \| undefined` | Optional | The date on which the workload is created. |
| `lastModifiedDte` | `string \| undefined` | Optional | The date when the created workload was last modified. |
| `createdBy` | `string \| undefined` | Optional | Identity of the user who created the workload.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s]+$` |
| `updatedBy` | `string \| undefined` | Optional | Identity of the user who updated the workload.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!,+\-=_:.&*%\s]+$` |

## Example (as JSON)

```json
{
  "description": "MEC SD Workload.",
  "packageType": "HELM",
  "helmHelmrepo": {
    "helmChartName": "mongodb",
    "helmChartVersion": "12.1.10"
  },
  "name": "dev-api-demo-repo",
  "repositoryType": "HELM",
  "uploadType": "PULL_FROM_REPO",
  "id": "id0"
}
```

