
# CSP Profile

The user can create cloud credentials used for deploying workloads to the CSP environment.

## Structure

`CSPProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | System generated unique identifier to identify the CSP Profile uniquely.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `usage` | `bigint \| undefined` | Optional | Usage tells how many services are using the CSP Profile. Only CSP Profile with 0 usage count be allowed to delete.<br>**Constraints**: `>= 0`, `<= 1024` |
| `cspProfileName` | `string` | Required | Name of the cloud credential to uniquely identify the CSP.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `customerID` | `string \| undefined` | Optional | Unique identification of the organization creating the CSP Profile.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `projectName` | `string \| undefined` | Optional | Project name where service artifacts needs to be stored.<br>**Constraints**: *Maximum Length*: `63`, *Pattern*: `^[a-z0-9-.]+$` |
| `type` | [`CSPProfileTypeEnum \| undefined`](../../doc/models/csp-profile-type-enum.md) | Optional | Type of CSP profile.<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[a-zA-Z0-9-_.]+$` |
| `awsCspProfile` | [`AwsCspProfile \| undefined`](../../doc/models/aws-csp-profile.md) | Optional | Information related to manage resources in AWS infrastructure. |
| `azureCspProfile` | [`AzureCspProfile \| undefined`](../../doc/models/azure-csp-profile.md) | Optional | Information related to manage resources in Azure infrastructure. |
| `defaultLocation` | [`DefaultLocation \| undefined`](../../doc/models/default-location.md) | Optional | Default location where service needs to be deployed. |
| `verificationTimeStamp` | `string \| undefined` | Optional | Auto-derived Time of creation. Part of response only. |
| `state` | `string \| undefined` | Optional | State of the CSP profile.<br>**Constraints**: *Maximum Length*: `20`, *Pattern*: `^[a-zA-Z0-9-_.]+$` |
| `isValidated` | `boolean \| undefined` | Optional | True if CSP is validated using provided credential, false otherwise.<br>**Default**: `false` |
| `createdDate` | `string \| undefined` | Optional | Auto-derived Time of creation. Part of response only. |
| `lastModifiedDate` | `string \| undefined` | Optional | Last modified time. Part of response only. |
| `createdBy` | `string \| undefined` | Optional | User who created the dropDown. Part of response only.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `lastModifiedBy` | `string \| undefined` | Optional | User who last modified the dropDown. Part of response only.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |

## Example (as JSON)

```json
{
  "awsCspProfile": {
    "accessKey": "XXXXX",
    "credType": "ACCESS_KEY",
    "secretKey": "XXXXX"
  },
  "cspProfileName": "dev-api-csp-profile-mdp",
  "projectName": "vz-cve",
  "type": "AWS",
  "id": "id0",
  "usage": 38,
  "customerID": "customerID8"
}
```

